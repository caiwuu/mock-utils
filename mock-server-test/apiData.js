module.exports = {
  "/g/ls_server/v/5111308": {
  "data": [
    {
      "trade_date": 20230929
    }
  ]
},
  "/g/web_service/v/markettimebyrulequery": {
  "data": [
    {
      "jc_markettime_out_list": [
        {
          "market_no": null,
          "trade_platform_id": null,
          "stock_type": null,
          "morning_open_time": null,
          "morning_close_time": null,
          "afternoon_open_time": null,
          "afternoon_close_time": null,
          "night_open_time": null,
          "night_close_time": null,
          "entrust_direction": null,
          "future_kind_id": null,
          "entrust_price_type": ""
        }
      ]
    }
  ]
},
  "/g/web_service/v/filldefaultbondtype": {
  "data": [
    {
      "invest_type_list": [
        {
          "dict_value": "1",
          "dict_caption": "可交易/FVPL"
        },
        {
          "dict_value": "8",
          "dict_caption": "AC"
        },
        {
          "dict_value": "9",
          "dict_caption": "FVOCI"
        }
      ],
      "invest_type": "1",
      "i9_busin_mode": ""
    }
  ]
},
  "/g/web_service/v/layoutmodelnewquery": {
  "data": [
    {
      "model_id": 0,
      "model_name": "系统模板",
      "common_flag": "1",
      "default_template_flag": "1",
      "operator_no": null
    }
  ]
},
  "/g/web_service/v/jcsysparameterquery": {
  "data": [
    {
      "param_value": "",
      "row_count": 2,
      "rows": [
        {
          "subsys_no_list": "",
          "eng_name": "",
          "description": "打印、导出需要显示合规提示",
          "param_type": "0",
          "value_range": "0;1",
          "param_value": "1",
          "order_id": 33310032,
          "readonly_flag": "0",
          "visible_flag": "1",
          "encrypt_flag": "",
          "full_describe": "0:否;1:是",
          "null_flag": "",
          "add_date": 20220525,
          "param_level": "1",
          "sysparam_no": 33310032,
          "o45_sysparam_show_type": 1,
          "mdb_operate_type": null,
          "important_level": 0,
          "remark": "O45V202201.03",
          "visible_exp": "",
          "auth_code": "",
          "mandatory_flag": ""
        },
        {
          "subsys_no_list": "",
          "eng_name": "",
          "description": "打印、导出显示的合规内容",
          "param_type": "5",
          "value_range": "",
          "param_value": "您正在导出/打印的信息为涉密未公开信息，除工作需要不得下载，并严禁对任何人（含内部工作不相关员工）传播",
          "order_id": 33310033,
          "readonly_flag": "0",
          "visible_flag": "1",
          "encrypt_flag": "",
          "full_describe": "",
          "null_flag": "",
          "add_date": 20220525,
          "param_level": "1",
          "sysparam_no": 33310033,
          "o45_sysparam_show_type": 1,
          "mdb_operate_type": null,
          "important_level": 0,
          "remark": "O45V202201.03",
          "visible_exp": "",
          "auth_code": "",
          "mandatory_flag": ""
        }
      ]
    }
  ]
},
  "/g/web_service/v/layoutgridmodelnewquery": {
  "data": [
    {
      "error_no": null,
      "error_info": "",
      "rows": [
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "stock_code",
          "operator_no": null,
          "field_caption": "证券代码",
          "width": 100,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 1,
          "field_type": "S",
          "dic_no": 0,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 1,
          "is_add": ""
        },
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "stock_name",
          "operator_no": null,
          "field_caption": "证券名称",
          "width": 100,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 2,
          "field_type": "S",
          "dic_no": 0,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 2,
          "is_add": ""
        },
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "entrust_direction",
          "operator_no": null,
          "field_caption": "委托方向",
          "width": 100,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 3,
          "field_type": "S",
          "dic_no": 610403,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 3,
          "is_add": ""
        },
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "engaged_no",
          "operator_no": null,
          "field_caption": "订单编号",
          "width": 100,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 4,
          "field_type": "",
          "dic_no": 0,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 4,
          "is_add": ""
        },
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "report_time",
          "operator_no": null,
          "field_caption": "报价时间",
          "width": 100,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 5,
          "field_type": "T",
          "dic_no": 0,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 5,
          "is_add": ""
        },
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "report_operator",
          "operator_no": null,
          "field_caption": "报价方",
          "width": 100,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 6,
          "field_type": "S",
          "dic_no": 0,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 6,
          "is_add": ""
        },
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "net_price",
          "operator_no": null,
          "field_caption": "价格(净价)",
          "width": 120,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 7,
          "field_type": "P",
          "dic_no": 0,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 7,
          "is_add": ""
        },
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "amount",
          "operator_no": null,
          "field_caption": "数量",
          "width": 100,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 8,
          "field_type": "G",
          "dic_no": 0,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 8,
          "is_add": ""
        },
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "full_price",
          "operator_no": null,
          "field_caption": "全价",
          "width": 100,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 9,
          "field_type": "P",
          "dic_no": 0,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 9,
          "is_add": ""
        },
        {
          "company_id": null,
          "layout_id": null,
          "field_name": "mature_yield",
          "operator_no": null,
          "field_caption": "到期收益率",
          "width": 120,
          "visible_flag": "1",
          "print_flag": "1",
          "display_order": 10,
          "field_type": "F",
          "dic_no": 0,
          "grid_id": 333500026,
          "seq_id": null,
          "sub_dic_no": "",
          "field_fix_show_flag": 0,
          "smart_hint_option": 0,
          "item_name": "",
          "model_id": 0,
          "model_name": "系统模板",
          "common_flag": "",
          "layout_name": "",
          "use_flag": "",
          "left_fixed_cols": 0,
          "layout_type": 1,
          "default_template_flag": "",
          "row_num": 10,
          "is_add": ""
        }
      ]
    }
  ]
},
  "/g/o45_equitywebserver/v/listszfixnonpubquote": {
  "data": [
    {
      "error_no": 0,
      "error_code": "0",
      "error_info": "",
      "result": [
        {
          "page": 0,
          "size": 0,
          "total": 0,
          "pages": 0,
          "rows": []
        }
      ]
    }
  ]
},
  "/g/web_service/v/operobjcombirightquery": {
  "data": [
    {
      "combi_id": 10718,
      "operator_no": 1098,
      "data_right": "1,2,4",
      "combi_code": "3951120",
      "combi_name": "3951120",
      "fund_id": 1050,
      "asset_id": 7960,
      "combi_status": "1",
      "invest_type": "1",
      "apply_quality": "",
      "futures_invest_type": "",
      "permit_markets": "1,2,5,6",
      "permit_stock_types": "-1",
      "trade_platform_list": "-1",
      "entrdire_right": "-1",
      "join_fair_trade_flag": "1",
      "offline_apply_invest_dim": "",
      "online_apply_invest_dim": "",
      "fund_cust_id": 39511,
      "fund_code": "39511",
      "fund_name": "",
      "asset_code": "395112",
      "asset_name": "",
      "credit_flag": "0",
      "group_id_list": "104,110"
    },
    {
      "combi_id": 10619,
      "operator_no": 1098,
      "data_right": "1,2,4",
      "combi_code": "39511000",
      "combi_name": "缺省组合",
      "fund_id": 1050,
      "asset_id": 7876,
      "combi_status": "1",
      "invest_type": "1",
      "apply_quality": "",
      "futures_invest_type": "",
      "permit_markets": "1,2,5,6",
      "permit_stock_types": "-1",
      "trade_platform_list": "-1",
      "entrdire_right": "-1",
      "join_fair_trade_flag": "1",
      "offline_apply_invest_dim": "",
      "online_apply_invest_dim": "",
      "fund_cust_id": 39511,
      "fund_code": "39511",
      "fund_name": "",
      "asset_code": "3951100",
      "asset_name": "",
      "credit_flag": "0",
      "group_id_list": "104,110"
    }
  ]
},
  "/g/web_service/v/newgetdirectorlist": {
  "data": [
    {
      "error_no": 0,
      "error_info": "",
      "gg_investgroup_directorout_list": [
        {
          "operator_no": 1098,
          "operator_code": "39511",
          "operator_name": "jx-32"
        }
      ]
    }
  ]
},
  "/g/o45_equitywebserver/v/stockenablequery": {
  "data": [
    {
      "error_no": 0,
      "error_info": "",
      "stockenable_out_list": [
        {
          "fund_id": 1050,
          "combi_id": 10718,
          "asset_id": 7960,
          "fund_code": "39511",
          "asset_code": "395112",
          "combi_code": "3951120",
          "market_no": 2,
          "trade_platform_id": 1,
          "entrust_direction": 4,
          "report_code": "133002",
          "invest_type": "1",
          "position_type": "1",
          "stockholder_id": "",
          "bind_seat": "",
          "clear_speed": null,
          "enable_amount": 0
        }
      ]
    }
  ]
},
  "/g/o45_businpubwebserver/v/getbalancetype": {
  "data": [
    {
      "error_no": 404,
      "error_info": "Route failed or no such api",
      "error_code": "404",
      "error_extinfo": "request uri not found",
      "error": 404,
      "return_code": 404
    }
  ]
},
  "/g/o45_equitywebserver/v/fixedxqhgstockholdquery": {
  "data": [
    {
      "error_no": 0,
      "error_info": "",
      "qy_fixedxqhgstockhold_list": [
        {
          "fund_id": 1050,
          "fund_cust_id": 39511,
          "fund_name": "jx直连产品32",
          "combi_id": 10718,
          "combi_code": "3951120",
          "combi_name": "3951120",
          "report_code": "010504",
          "stock_name": "05国债⑷",
          "market_no": 1,
          "stock_type": 3,
          "asset_type": "3",
          "last_price": 0,
          "cost_price": 0,
          "holding_amount": 100000,
          "invest_type": "1",
          "position_market_value": 0,
          "t0_stock_enable_amount": 0,
          "total_profit": 0,
          "current_cost": 0,
          "position_str": "1050-10718-10504001-1-1-SH00001999-SH999"
        },
        {
          "fund_id": 1050,
          "fund_cust_id": 39511,
          "fund_name": "jx直连产品32",
          "combi_id": 10718,
          "combi_code": "3951120",
          "combi_name": "3951120",
          "report_code": "132004",
          "stock_name": "15国盛EB",
          "market_no": 1,
          "stock_type": 95,
          "asset_type": "3",
          "last_price": 100.3,
          "cost_price": 0,
          "holding_amount": 100000,
          "invest_type": "1",
          "position_market_value": 10030000,
          "t0_stock_enable_amount": 0,
          "total_profit": 0,
          "current_cost": 0,
          "position_str": "1050-10718-132004001-1-1-SH00001999-SH999"
        }
      ]
    }
  ]
}
}