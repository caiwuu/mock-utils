const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const apiData = require('./apiData')
const app = express()
const mockData = {
  ...apiData,
}

/** ==============================================================================服务配置=========================================================================== */
const port = 3000 // 端口
const targetServer = 'http://192.168.87.170:8088' // 设置目标服务器的地址

// 创建代理中间件
const apiProxy = createProxyMiddleware({
  target: targetServer,
  changeOrigin: true,
  secure: false,
  cookieDomainRewrite: '',
})

app.use((req, res, next) => {
  const mockResponse = mockData[req.originalUrl]
  if (mockResponse) {
    res.json(mockResponse)
  } else {
    next()
  }
})
// 使用代理中间件转发未匹配的接口给目标服务器
app.use(apiProxy)

// 启动服务器
app.listen(port, () => {
  console.log(`Mock server is running on port ${port}`)
})
