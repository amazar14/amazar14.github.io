"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["1078"],{426:function(e,r,n){n.r(r),n.d(r,{default:function(){return i}});var s=n(2676),a=n(453);function t(e){let r=Object.assign({h1:"h1",a:"a",h2:"h2",h3:"h3",pre:"pre",code:"code",p:"p"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.h1,{id:"websocket\u901A\u4FE1",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#websocket\u901A\u4FE1",children:"#"}),"websocket\u901A\u4FE1"]}),"\n",(0,s.jsxs)(r.h2,{id:"1-\u8D44\u6E90\u66F4\u65B0\u9875\u9762",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#1-\u8D44\u6E90\u66F4\u65B0\u9875\u9762",children:"#"}),"1. \u8D44\u6E90\u66F4\u65B0\u9875\u9762"]}),"\n",(0,s.jsxs)(r.h3,{id:"11-\u9009\u62E9\u8D44\u6E90",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#11-\u9009\u62E9\u8D44\u6E90",children:"#"}),"1.1 \u9009\u62E9\u8D44\u6E90"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",meta:"title=# example {1,9}",children:'  // send to software\r\n  {\r\n    "code": "SELECT_ZY",            // \u6307\u4EE4\u7F16\u7801\u5E38\u91CF\uFF0C\u8BBE\u8BA1\u8F6F\u4EF6\u6839\u636Ecode\u6267\u884C\u5BF9\u5E94\u903B\u8F91\r\n    "param": {                      \r\n      "zyId": "select_zyId"             // \u4F20\u53C2\uFF1A \u53CC\u51FB\u9009\u4E2D\u7684\u8D44\u6E90\r\n    }\r\n  }\r\n\r\n  // send to web\r\n  {\r\n    "status": true,\r\n    "code": "SELECT_ZY",\r\n    "message": "string",\r\n    "data": null\r\n  }\n'})}),"\n",(0,s.jsxs)(r.h3,{id:"12-\u66F4\u65B0\u8D44\u6E90",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#12-\u66F4\u65B0\u8D44\u6E90",children:"#"}),"1.2 \u66F4\u65B0\u8D44\u6E90"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",meta:"title=# example {1,9}",children:'  // send to software\r\n  {\r\n    "code": "UPDATE_COMPONENT_RESOURCE",\r\n    "param": {\r\n      zyId: "string",\r\n      ids: "string"\r\n    }\r\n  }\r\n  // send to web\r\n  {\r\n    "status": true,                       // \u66F4\u65B0\u7ED3\u679C true: \u6210\u529F false: \u5931\u8D25\r\n    "code": "UPDATE_COMPONENT_RESOURCE",\r\n    "message": "error message",           // \u9875\u9762\u4E2D\u4F1A\u63D0\u793A\u4FE1\u606F\r\n    "data": null                          // \u4E0D\u9700\u8981\u8FD4\u56DE\u503C                    \r\n  }\n'})}),"\n",(0,s.jsxs)(r.h2,{id:"2-wcc",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#2-wcc",children:"#"}),"2. WCC"]}),"\n",(0,s.jsxs)(r.h3,{id:"21-\u540C\u6B65wcc\u6570\u636E",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#21-\u540C\u6B65wcc\u6570\u636E",children:"#"}),"2.1 \u540C\u6B65wcc\u6570\u636E"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",meta:"",children:'  code = "SYNC_DATA_WCC"\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",meta:"title=# example {1,21}",children:'  // send to HomeDesign\r\n  {\r\n    "code": "SYNC_DATA_WCC",\r\n    "param": {\r\n      "name": string,\r\n      "id":   string,\r\n      "items": [\r\n        {\r\n          "Name":         string,           // \u53C2\u6570\u540D\u79F0\r\n          "Value":        string | number,  // \u53C2\u6570\u503C\r\n          "Descrip":      string,           // \u53C2\u6570\u63CF\u8FF0\r\n          "Slave":        string,           // \u53C2\u6570\u8868\u8FBE\u5F0F\r\n          "Type":         number,           // \u53C2\u6570\u7C7B\u578B 0: Double, 1\uFF1A\u6587\u672C\uFF0C2\uFF1A\u5E03\u5C14 3\uFF1A\u6574\u578B\r\n          "OutputFalg":   boolean,          // \u5728\u8F93\u51FA\u503C\u7684\u60C5\u51B5\u4E0B \u662F\u5426\u8F93\u51FA\r\n          "OutputSlave":  string,           // \u8F93\u51FA\u8868\u8FBE\u5F0F\uFF08\u4F18\u5148\u7EA7\u9AD8\u4E8E\u8F93\u51FA\u503C\uFF09\r\n        },\r\n        ...\r\n      ]\r\n    }\r\n  }\r\n  // response to web\r\n  {\r\n    "status": true,                       // \u66F4\u65B0\u7ED3\u679C true: \u6210\u529F false: \u5931\u8D25\r\n    "code": "SYNC_DATA_WCC",\r\n    "message": "error message",           // \u9875\u9762\u4E2D\u4F1A\u63D0\u793A\u4FE1\u606F\r\n    "data": null                          // \u4E0D\u9700\u8981\u8FD4\u56DE\u503C                    \r\n  }\n'})}),"\n",(0,s.jsxs)(r.h2,{id:"3-\u7EA6\u675F\u8BBE\u7F6E",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#3-\u7EA6\u675F\u8BBE\u7F6E",children:"#"}),"3. \u7EA6\u675F\u8BBE\u7F6E"]}),"\n",(0,s.jsxs)(r.h3,{id:"31-\u540C\u6B65\u7EA6\u675F\u6570\u636E",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#31-\u540C\u6B65\u7EA6\u675F\u6570\u636E",children:"#"}),"3.1 \u540C\u6B65\u7EA6\u675F\u6570\u636E"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",meta:"title=# example {1,25}",children:'  // send to HomeDesign\r\n  {\r\n    "code": "SYNC_DATA_CONSTRAINT",\r\n    "param": {\r\n      "name": string,\r\n      "code": string,\r\n      "items": [\r\n        {\r\n          "id":       string,       // \u7EA6\u675FID\r\n          "desc":     string,       // \u7EA6\u675F\u8BF4\u660E\r\n          "express":  string,       // \u7EA6\u675F\u8868\u8FBE\u5F0F\r\n          "level":    number,       // \u62A5\u9519\u7EA7\u522B - 0: \u5DE5\u827A\u62A5\u9519  1\uFF1A\u5DE5\u827A\u8B66\u544A  2\uFF1A\u5DE5\u827A\u5BA1\u6279\r\n          "expandInfo": [           // \u6269\u5C55\u4FE1\u606F - \u62A5\u4EF7\u76F8\u5173\u4FE1\u606F\u4E5F\u586B\u5199\u5230\u6269\u5C55\u4FE1\u606F\u4E2D\uFF0C \u62A5\u4EF7\uFF1Atype=quote\r\n            { \r\n              "type":   string, \r\n              "value":  string \r\n            },\r\n            ...\r\n          ]\r\n        },\r\n        ...\r\n      ]\r\n    }\r\n  }\r\n// send to web\r\n  {\r\n    "status": true,                  // \u66F4\u65B0\u7ED3\u679C true: \u6210\u529F false: \u5931\u8D25\r\n    "code": "SYNC_DATA_CONSTRAINT",\r\n    "message": "error message",      // \u9875\u9762\u4E2D\u4F1A\u63D0\u793A\u4FE1\u606F\r\n    "data": null                     // \u4E0D\u9700\u8981\u8FD4\u56DE\u503C                    \r\n  }\r\n\n'})}),"\n",(0,s.jsxs)(r.h2,{id:"4-\u53C2\u6570\u5BFC\u5165",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#4-\u53C2\u6570\u5BFC\u5165",children:"#"}),"4. \u53C2\u6570\u5BFC\u5165"]}),"\n",(0,s.jsxs)(r.p,{children:["\u6B64\u7ED3\u6784\u901A\u7528\u53C2\u6570\u5BFC\u5165\u529F\u80FD\uFF0C\u53EA\u6709 ",(0,s.jsx)(r.code,{children:"code"})," \u5B57\u6BB5\u548C ",(0,s.jsx)(r.code,{children:"items"})," \u5B57\u6BB5\u7684\u503C\u4F1A\u56E0\u4E3A\u914D\u7F6E\u800C\u4E0D\u540C\u3002"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",meta:"title=# example {1,10}",children:'  // send to HomeDesign\r\n  {\r\n    "code": "SYNC_DATA_{CONFIG}",    \r\n    "param": {\r\n      "name": string,\r\n      "code": string,\r\n      "items": [...]\r\n    }\r\n  }\r\n// send to web\r\n  {\r\n    "status": true,                  // \u66F4\u65B0\u7ED3\u679C true: \u6210\u529F false: \u5931\u8D25\r\n    "code": "SYNC_DATA_{CONFIG}",\r\n    "message": "error message",      // \u9875\u9762\u4E2D\u4F1A\u63D0\u793A\u4FE1\u606F\r\n    "data": null                     // \u4E0D\u9700\u8981\u8FD4\u56DE\u503C                    \r\n  }\r\n\n'})}),"\n",(0,s.jsxs)(r.h3,{id:"41-\u914D\u7F6E\u53C2\u6570\u8BBE\u7F6E",children:[(0,s.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#41-\u914D\u7F6E\u53C2\u6570\u8BBE\u7F6E",children:"#"}),"4.1 \u914D\u7F6E\uFF1A\u53C2\u6570\u8BBE\u7F6E"]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"\u53C2\u6570\u8BBE\u7F6E"})," \u6570\u636E\u7ED3\u6784"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",meta:"title=code",children:'  code = "SYNC_DATA_PARAMS"\n'})}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",meta:"title=items ",children:'  [{\r\n    "baseSetting": {     // \u57FA\u672C\u8BBE\u7F6E\r\n      "name": string,       // \u540D\u79F0\r\n      "useto": string,      // \u7528\u9014\r\n      "desc": string,       // \u63CF\u8FF0\r\n      "type":  1 | 2 | 3 | 4,   // \u7C7B\u578B - 1\uFF1A\u6570\u503C 2\uFF1A\u6587\u672C 3\uFF1A\u5E03\u5C14 4\uFF1A\u6574\u578B\r\n      "remark": string      // \u5907\u6CE8\r\n    }\r\n\r\n    "valueSetting": {                       // \u503C\u8BBE\u7F6E\r\n      "value": string | number,               //  \u503C-\u503C\r\n      "value_express": string,                //  \u503C-\u8868\u8FBE\u5F0F\r\n      "value_type": \'value\' | \'express\',      //  \u503C\u7C7B\u578B - value: \u503C, express: \u8868\u8FBE\u5F0F\r\n      "min_value": number,                    //  \u6700\u5C0F\u503C-\u503C\r\n      "min_express": string,                  //  \u6700\u5C0F\u503C-\u8868\u8FBE\u5F0F\r\n      "min_type": \'value\' | \'express\',        //  \u6700\u5C0F\u503C\u7C7B\u578B - value: \u503C, express: \u8868\u8FBE\u5F0F\r\n      "max_value": number,                    //  \u6700\u5927\u503C-\u503C\r\n      "max_express": string,                  //  \u6700\u5927\u503C-\u8868\u8FBE\u5F0F\r\n      "max_type": \'value\' | \'express\',        //  \u6700\u5927\u503C\u7C7B\u578B - value: \u503C, express: \u8868\u8FBE\u5F0F\r\n      "f_display_value": boolean,             //  \u524D\u7AEF\u663E\u793A-\u503C\r\n      "f_display_express": string,            //  \u524D\u7AEF\u663E\u793A-\u8868\u8FBE\u5F0F\r\n      "f_display_type": \'value\' | \'express\',  //  \u524D\u7AEF\u663E\u793A\u7C7B\u578B - value: \u503C, express: \u8868\u8FBE\u5F0F\r\n      "refresh_express": string,              //  \u5237\u65B0\u6761\u4EF6\u8868\u8FBE\u5F0F\r\n      "f_readonly": boolean                   //  \u524D\u7AEF\u53EA\u8BFB \r\n    },\r\n\r\n    "seriesValue": {                  // \u7CFB\u5217\u503C\r\n      "is_display": boolean,            // \u524D\u7AEF\u662F\u5426\u663E\u793A \r\n      "is_series": boolean,             // \u662F\u5426\u4E3A\u7CFB\u5217\u503C\r\n      "series": [                     // ---\u7CFB\u5217\u503C\r\n        {                           \r\n          "value": string,              //  \u9009\u9879\u503C\r\n          "is_display": boolean,        //  \u524D\u7AEF\u662F\u5426\u663E\u793A\r\n          "display_value": string,      //  \u524D\u7AEF\u663E\u793A\u503C\r\n          "express": string,            //  \u8868\u8FBE\u5F0F\r\n          "remark": string              //  \u5907\u6CE8\r\n        }, ...]\r\n\r\n      "use": \'required\' | \'priority\',   //   \u4F18\u9009/\u5FC5\u9009 - required: \u5FC5\u9009\uFF0C priority\uFF1A \u5FC5\u9009\r\n      "express": string                 //  \u8868\u8FBE\u5F0F\r\n    },\r\n    // \u9AD8\u7EA7\r\n    "advanced": {                       \r\n      "is_mulit_rows": boolean,  // \u591A\u884C\u663E\u793A\r\n      "update_option": \'not_value\' | \'value\'  //  \u66F4\u65B0\u9009\u9879 not_value: \u4E0D\u66F4\u65B0\u503C, value: \u66F4\u65B0\u503C\r\n    }\r\n  }, ...]\n'})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,a.ah)(),e.components);return r?(0,s.jsx)(r,Object.assign({},e,{children:(0,s.jsx)(t,e)})):t(e)}let i=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["guide%2F%E5%85%B6%E4%BB%96%2Fwebsocket%E9%80%9A%E4%BF%A1.md"]={toc:[{id:"1-\u8D44\u6E90\u66F4\u65B0\u9875\u9762",text:"1. \u8D44\u6E90\u66F4\u65B0\u9875\u9762",depth:2},{id:"11-\u9009\u62E9\u8D44\u6E90",text:"1.1 \u9009\u62E9\u8D44\u6E90",depth:3},{id:"12-\u66F4\u65B0\u8D44\u6E90",text:"1.2 \u66F4\u65B0\u8D44\u6E90",depth:3},{id:"2-wcc",text:"2. WCC",depth:2},{id:"21-\u540C\u6B65wcc\u6570\u636E",text:"2.1 \u540C\u6B65wcc\u6570\u636E",depth:3},{id:"3-\u7EA6\u675F\u8BBE\u7F6E",text:"3. \u7EA6\u675F\u8BBE\u7F6E",depth:2},{id:"31-\u540C\u6B65\u7EA6\u675F\u6570\u636E",text:"3.1 \u540C\u6B65\u7EA6\u675F\u6570\u636E",depth:3},{id:"4-\u53C2\u6570\u5BFC\u5165",text:"4. \u53C2\u6570\u5BFC\u5165",depth:2},{id:"41-\u914D\u7F6E\u53C2\u6570\u8BBE\u7F6E",text:"4.1 \u914D\u7F6E\uFF1A\u53C2\u6570\u8BBE\u7F6E",depth:3}],title:"websocket\u901A\u4FE1",frontmatter:{}}}}]);