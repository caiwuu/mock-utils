const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const request = require('request')
const zlib = require('zlib')
const app = express()
const {
  port,
  targetServer,
  targetStaticServer,
  urlPrefix,
  ignoredParams,
  groupMode,
} = require('./config')

const { handleDecodedResponse, uuid, getRequestBody, removeIgnoredFields } = require('./utils')

// 创建输出文件

// 全局变量，用于保存请求参数
let requestParams = {}
// 创建代理中间件
const apiProxy = createProxyMiddleware({
  target: targetServer,
  changeOrigin: true,
  secure: false,
  cookieDomainRewrite: '',
  onProxyReq: async (proxyReq, req, res) => {
    // 获取请求参数
    if (req.method === 'POST' && urlPrefix.some((prefix) => req.originalUrl.startsWith(prefix))) {
      const body = await getRequestBody(req)

      // 生成请求 ID，可以使用时间戳或其他唯一标识
      const requestId = uuid()

      // 在这里处理请求参数，将解析后的数据保存在以请求 ID 为 key 的对象中
      requestParams[requestId] = {
        method: req.method,
        headers: req.headers,
        body: body,
      }

      // 将请求 ID 添加到请求头，方便在 onProxyRes 中获取
      req.headers['x-request-id'] = requestId
    }
  },
  onProxyRes: (proxyRes, req, res) => {
    // 在这里处理服务器返回的响应数据
    const requestId = req.headers['x-request-id']
    const reqParams = requestParams[requestId]

    // 判断是否存在请求参数，并使用它进行处理
    if (reqParams) {
      const { body } = reqParams
      req.body = JSON.parse(body)
      removeIgnoredFields(req.body, ignoredParams)
      const chunks = []
      let size = 0
      proxyRes.on('data', (chunk) => {
        chunks.push(chunk)
        size += chunk.length
      })
      proxyRes.on('end', () => {
        const headers = proxyRes.headers
        const encoding = headers['content-encoding'] || ''

        const body = Buffer.concat(chunks)

        if (encoding.toLowerCase() === 'gzip') {
          zlib.gunzip(body, (err, uncompressed) => {
            if (err) {
              console.error('Failed to decompress response:', err)
              return
            }

            handleDecodedResponse(uncompressed, req, groupMode)
          })
        } else {
          handleDecodedResponse(body, req, groupMode)
        }
      })
    }
    // 清除请求参数，以便下一次请求的处理
    delete requestParams[requestId]
  },
})

// 使用代理中间件转发未匹配的接口给目标服务器
app.post('*', apiProxy)
app.get('/', (req, res) => {
  const targetUrl = `${targetStaticServer}/${req.originalUrl}`
  req.pipe(request(targetUrl)).pipe(res)
})
app.get('*', (req, res) => {
  const targetUrl = `${targetServer}/${req.originalUrl}`
  req.pipe(request(targetUrl)).pipe(res)
})

// 启动服务器
// 启动服务器
const server = app.listen(port, () => {
  console.log(`Mock server is running on port ${port}`)
})
