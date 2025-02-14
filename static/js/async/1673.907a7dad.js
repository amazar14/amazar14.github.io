"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["1673"],{5529:function(e,n,r){r.r(n),r.d(n,{CodeTab:()=>l,default:()=>c});var d=r(2676),s=r(453),a=r(1305),h=r(4513);function l(e){let{children:n}=e,r=Object.assign({div:"div"},(0,s.ah)()),a=Array.isArray(n)?n:[n];return(0,d.jsx)(r.div,{className:"mt-4",children:(0,d.jsxs)(h.Tabs,{children:[a[0]&&(0,d.jsx)(h.Tab,{label:"send to homedesign",className:"pt-8",children:a[0]}),a[1]&&(0,d.jsx)(h.Tab,{label:"send to web",children:a[1]})]})})}function i(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",ul:"ul",li:"li",code:"code",h4:"h4",pre:"pre",ol:"ol"},(0,s.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"设计圈",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#设计圈",children:"#"}),"设计圈"]}),"\n",(0,d.jsxs)(n.h2,{id:"1-概述",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-概述",children:"#"}),"1. 概述"]}),"\n",(0,d.jsx)(n.p,{children:"设计软件左侧设计圈面板、投稿功能。"}),"\n",(0,d.jsxs)(n.h2,{id:"2-地址",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-地址",children:"#"}),"2. 地址"]}),"\n",(0,d.jsxs)(n.h3,{id:"21-左侧面板",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21-左侧面板",children:"#"}),"2.1 左侧面板"]}),"\n",(0,d.jsxs)(n.p,{children:["正式地址: ",(0,d.jsx)(n.a,{href:"https://help.jiajutech.com/homedesign/designCircle/?tokenId=6ff3ab38-67e7-44aa-a782-41b5fa2d5886&sceneId=xxx&port=1001",rel:"noopener noreferrer",target:"_blank",children:"https://help.jiajutech.com/homedesign/designCircle/?tokenId=6ff3ab38-67e7-44aa-a782-41b5fa2d5886&sceneId=xxx&port=1001"})]}),"\n",(0,d.jsxs)(n.p,{children:["测试地址: ",(0,d.jsx)(n.a,{href:"https://uat-help.jiajutech.com/homedesign/designCircle/?tokenId=6ff3ab38-67e7-44aa-a782-41b5fa2d5886&sceneId=xxx&port=1001",rel:"noopener noreferrer",target:"_blank",children:"https://uat-help.jiajutech.com/homedesign/designCircle/?tokenId=6ff3ab38-67e7-44aa-a782-41b5fa2d5886&sceneId=xxx&port=1001"})]}),"\n",(0,d.jsxs)(n.h3,{id:"22-投稿",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22-投稿",children:"#"}),"2.2 投稿"]}),"\n",(0,d.jsxs)(n.p,{children:["正式地址: ",(0,d.jsx)(n.a,{href:"https://help.jiajutech.com/homedesign/designCircle/upload/?tokenId=6ff3ab38-67e7-44aa-a782-41b5fa2d5886&sceneId=xxx&port=1001",rel:"noopener noreferrer",target:"_blank",children:"https://help.jiajutech.com/homedesign/designCircle/upload/?tokenId=6ff3ab38-67e7-44aa-a782-41b5fa2d5886&sceneId=xxx&port=1001"})]}),"\n",(0,d.jsxs)(n.p,{children:["测试地址: ",(0,d.jsx)(n.a,{href:"https://uat-help.jiajutech.com/homedesign/designCircle/upload/?tokenId=6ff3ab38-67e7-44aa-a782-41b5fa2d5886&sceneId=xxx&port=1001",rel:"noopener noreferrer",target:"_blank",children:"https://uat-help.jiajutech.com/homedesign/designCircle/upload/?tokenId=6ff3ab38-67e7-44aa-a782-41b5fa2d5886&sceneId=xxx&port=1001"})]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"参数"}),(0,d.jsx)(n.th,{children:"说明"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tokenId"}),(0,d.jsx)(n.td,{children:"tokenId"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"port"}),(0,d.jsx)(n.td,{children:"端口号"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sceneId"}),(0,d.jsx)(n.td,{children:"场景 Id"})]})]})]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["场景 Id：选择案例封面图和空间预览图时，根据场景查询渲染图。（",(0,d.jsx)(n.code,{children:"hdf"}),"文件有场景 ID？）"]}),"\n"]}),"\n",(0,d.jsxs)(n.h2,{id:"3-设计软件通信",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-设计软件通信",children:"#"}),"3. 设计软件通信"]}),"\n",(0,d.jsx)(a.Z,Object.assign({code:"  flowchart LR\r\n\r\n    soft[软件]\r\n    open[打开案例]\r\n    show[查看案例]\r\n    create[投稿]\r\n\r\n    soft --\x3e open\r\n    soft --\x3e show\r\n    soft --\x3e create\r\n"},{config:{theme:"dark"}})),"\n",(0,d.jsxs)(n.h3,{id:"31-左侧面板",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#31-左侧面板",children:"#"}),"3.1 左侧面板"]}),"\n",(0,d.jsxs)(n.h4,{id:"311-打开案例",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#311-打开案例",children:"#"}),"3.1.1 打开案例"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:"title=使用案例",children:'// send to homedesign\r\n  {\r\n    code: "DSCOMMUNITY_APPLY",\r\n    params: {\r\n      // 案例 hdf文件\r\n      url: "https://cdn.xxxx.com/xxx.hdf",\r\n      // 使用方式\r\n      type: 1\r\n    }\r\n  }\n'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"type"}),": 使用方式"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{align:"center",children:"值"}),(0,d.jsx)(n.th,{align:"center",children:"说明"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{align:"center",children:"1"}),(0,d.jsx)(n.td,{align:"center",children:"默认方式打开"})]})})]}),"\n",(0,d.jsxs)(n.h4,{id:"312-查看案例",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#312-查看案例",children:"#"}),"3.1.2 查看案例"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:"title=查看案例",children:'// send to homedesign\r\n{\r\n  code: "DSCOMMUNITY_DETAILS",\r\n  params: {\r\n    // todo：xml字符串OR指向xml的链接\r\n    xml: "",\r\n    // 封面图\r\n    coverImgUrl: "",\r\n    // 方案名\r\n    schemeName: "",\r\n    // 点击时的位置，软件需要用y值计算窗口位置\r\n    position: {\r\n      x: 0,\r\n      y: 0\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"32-投稿",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#32-投稿",children:"#"}),"3.2 投稿"]}),"\n",(0,d.jsxs)(n.h4,{id:"321-解析场景文件",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#321-解析场景文件",children:"#"}),"3.2.1 解析场景文件"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["点击投稿，需要弹出一个",(0,d.jsx)(n.code,{children:"1000*800"}),"尺寸的窗口"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="打开投稿窗口"',children:'  // send to homedesign\r\n  {\r\n    code: "COMM_OPENWINDOW_DESIGN_CIRCLE_CREATE",\r\n    params: {\r\n      url: ""\r\n      type: "inner" | "outer"\r\n      width: 1000,\r\n      height: 800\r\n    }\r\n  }\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"type"})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{align:"center",children:"type"}),(0,d.jsx)(n.th,{align:"center",children:"说明"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{align:"center",children:"inner"}),(0,d.jsx)(n.td,{align:"center",children:"嵌入窗口"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{align:"center",children:"outer"}),(0,d.jsx)(n.td,{align:"center",children:"外部浏览器"})]})]})]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="关闭窗口"',children:'// send to homedesign\r\n{\r\n  code: "COMM_CLOSEWINDOW_DESIGN_CIRCLE";\r\n}\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"选择当前场景或本地场景文件，设计软件解析场景文件将场景信息返回给 web 页面"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"当前场景"}),": 设计软件将当前场景保存到本地并返回场景信息"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"本地场景"}),": 设计软件选择本地场景文件，解析后返回场景信息"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:"title=投稿 {1,11}",children:'  // send to homedesign 投稿场景\r\n  {\r\n    code: "DSCOMMUNITY_CREATE",\r\n    params: {\r\n      // 1: 当前场景 2：本地场景文件 3：云端场景文件\r\n      type: 1 | 2 | 3\r\n      // type=3，url为当场景文件云端地址\r\n      url: "http://uatcdn.ihomecloud.com.cn/xxxxx.hdf"\r\n    }\r\n  }\r\n\r\n  // send to web 软件解析场景后返回场景对应信息\r\n  {\r\n    code: "DSCOMMUNITY_CREATE",\r\n    status: true | false,\r\n    message: \'\',\r\n    data: {\r\n      // 系统中场景文件路径，用于确认投稿后设计软件上传\r\n      __sceneFilePath__: \'C:\\\\Users\\\\1.hdf\',\r\n      // 以下为场景信息\r\n      area: 277.0,\r\n      caseTagList: [\r\n        {\r\n          "code": "",\r\n          "label": "",\r\n          "labelStyle": ""\r\n        }\r\n      ],\r\n      file: {\r\n        fullImagePath: "",\r\n        houseImagePath: "design/caxa/4B5BF1310FE41A4A3168EB317720DEA.jpg",\r\n        vrFilePath: ""\r\n      },\r\n      fileId: "4DAB28DE-D3FE-4B2B-B26C-68D102A0BF85",\r\n      fileName: "场景文档1",\r\n      houseType: "",\r\n      name: "场景文档1",\r\n      resId: "",\r\n      spaces: [\r\n        // 空间信息 start\r\n        {\r\n          area: 2.0,\r\n          boxNoWall: {\r\n            depth: "1180",\r\n            height: "1938",\r\n            width: "574"\r\n          },\r\n          boxWithWall: {\r\n            depth: "16341",\r\n            height: "5720",\r\n            width: "25945"\r\n          },\r\n          caseTagList: [\r\n            {\r\n              code: "",\r\n              label: "",\r\n              labelStyle: ""\r\n            }\r\n          ],\r\n          channels: "59",\r\n          code: "SpaceType_WashRoom",\r\n          elements: [\r\n            {\r\n              caseTagList: [\r\n                {\r\n                  code: "",\r\n                  label: "",\r\n                  labelStyle: ""\r\n                }\r\n              ],\r\n              channel: "",\r\n              imageFilePath: "design/caxa/238E3F1036C4AC7A3519856B3A82CD8.jpg",\r\n              name: "现代木质挂式浴室柜组I23083032",\r\n              resId: "a255b940d5424bb0ad067ab7e458b5dd",\r\n              seqNo: 0,\r\n              type: "decoration",\r\n              upload: 1\r\n            }\r\n          ],\r\n          name: "卫生间",\r\n          pid: "69176",\r\n          planFilePath: "design/caxa/3B99DD7039E4543A9BFA4F21F1A6A63.jpg",\r\n          previewImage: null,\r\n          renderImage: null,\r\n          resId: "",\r\n          seqNo: 0,\r\n          series: "",\r\n          style: "",\r\n          thumbImageNoWall: "design/caxa/AB07956DEA24252BECADDFBB6ABBE64.jpg",\r\n          thumbImageWithWall: "design/caxa/42EF9F131D84AE898BC94B2766E51B7.jpg",\r\n          upload: 1\r\n        }\r\n        // 空间信息 end\r\n      ],\r\n      style: ""\r\n      }\r\n    }\n'})}),"\n",(0,d.jsxs)(n.h4,{id:"322-确认投稿",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#322-确认投稿",children:"#"}),"3.2.2 确认投稿"]}),"\n",(0,d.jsx)(n.p,{children:"确认投稿后"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["编辑的方案信息、空间信息后（只修改方案名、删减空间及空间下饰品），将 web 端将软件发送的场景信息以同样格式返回给软件，软件将",(0,d.jsx)(n.code,{children:"json"}),"转为",(0,d.jsx)(n.code,{children:"xml"})]}),"\n",(0,d.jsxs)(n.li,{children:["设计软件将本地存储的场景文件及上一步中生成的场景",(0,d.jsx)(n.code,{children:"xml"}),"上传"]}),"\n",(0,d.jsxs)(n.li,{children:["将文件在云端中的路径",(0,d.jsx)(n.code,{children:"sceneFileUrl"}),"、 ",(0,d.jsx)(n.code,{children:"xmlFileUrl"}),"返回给 web"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="上传文件"',children:'  // send to homedesign\r\n  {\r\n    code: "DSCOMMUNITY_UPLOAD_SCENE",\r\n    param: {\r\n      // 投稿场景时，设计软件返回的sceneFilePath\r\n      __sceneFilePath__: \'C:\\\\Users\\\\1.hdf\',\r\n      // 其他同 DSCOMMUNITY_CREATE 中软件返回的场景信息\r\n      fileId: "4DAB28DE-D3FE-4B2B-B26C-68D102A0BF85",\r\n      fileName: "场景文档1",\r\n      houseType: "",\r\n      name: "场景文档1",\r\n      resId: "",\r\n      area: 123,\r\n      ...\r\n    }\r\n  }\r\n\r\n  // send to web 返回上传信息，***无论成功或失败，设计软件一定要返回这个信息***\r\n  {\r\n    code: "DSCOMMUNITY_UPLOAD_SCENE",\r\n    status: true | false,\r\n    message: \'上传成功\' | \'上传失败\',\r\n    data: {\r\n      sceneFileUrl: \'https://cdn.xxxx.com/xxx.hdf\',\r\n      xmlFileUrl: \'https://cdn.xxxx.com/xxx.xml\'\r\n    }\r\n  }\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"33-编辑投稿",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#33-编辑投稿",children:"#"}),"3.3 编辑投稿"]}),"\n",(0,d.jsxs)(n.h4,{id:"331-解析场景文件",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#331-解析场景文件",children:"#"}),"3.3.1 解析场景文件"]}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["右键我的方案->编辑，需要弹出一个",(0,d.jsx)(n.code,{children:"1000*800"}),"尺寸的窗口"]}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="打开编辑窗口"',children:'  // send to homedesign\r\n  {\r\n    code: "COMM_OPENWINDOW_DESIGN_CIRCLE_EDIT",\r\n    params: {\r\n      url: "",\r\n      type: "inner" | "outer",\r\n      width: 1000,\r\n      height: 800\r\n    }\r\n  }\n'})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:'title="关闭窗口"',children:'  // send to homedesign\r\n  {\r\n    code: "COMM_CLOSEWINDOW_DESIGN_CIRCLE";\r\n  }\n'})}),"\n",(0,d.jsxs)(n.ol,{start:"2",children:["\n",(0,d.jsx)(n.li,{children:"解析场景文件，设计软件解析云端保存场景并将场景信息返回给 web 页面"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:"title=编辑 {1,11}",children:'  // send to homedesign 投稿场景\r\n  {\r\n    code: "DSCOMMUNITY_CREATE",\r\n    params: {\r\n      // 1: 当前场景 2：本地场景文件 3：云端场景文件\r\n      type: 1 | 2 | 3\r\n      // type=3，url为当场景文件云端地址\r\n      url: "http://uatcdn.ihomecloud.com.cn/xxxxx.hdf"\r\n    }\r\n  }\r\n  // send to web 软件解析场景后返回场景对应信息\r\n  {\r\n    code: "DSCOMMUNITY_CREATE",\r\n    status: true | false,\r\n    message: \'\',\r\n    data: {\r\n      // 系统中场景文件路径，用于确认投稿后设计软件上传\r\n      __sceneFilePath__: \'C:\\\\Users\\\\1.hdf\',\r\n      // 以下为场景信息\r\n      area: 277.0,\r\n      elements: [],\r\n      ...\r\n    }\r\n  }\n'})}),"\n",(0,d.jsxs)(n.h4,{id:"332-保存修改",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#332-保存修改",children:"#"}),"3.3.2 保存修改"]}),"\n",(0,d.jsxs)(n.p,{children:["同 ",(0,d.jsx)(n.a,{href:"#322-%E7%A1%AE%E8%AE%A4%E6%8A%95%E7%A8%BF",children:"确认投稿"})]})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(i,e)})):i(e)}let c=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["guide%2Finner%2FdesignCircle.mdx"]={toc:[{id:"1-概述",text:"1. 概述",depth:2},{id:"2-地址",text:"2. 地址",depth:2},{id:"21-左侧面板",text:"2.1 左侧面板",depth:3},{id:"22-投稿",text:"2.2 投稿",depth:3},{id:"3-设计软件通信",text:"3. 设计软件通信",depth:2},{id:"31-左侧面板",text:"3.1 左侧面板",depth:3},{id:"311-打开案例",text:"3.1.1 打开案例",depth:4},{id:"312-查看案例",text:"3.1.2 查看案例",depth:4},{id:"32-投稿",text:"3.2 投稿",depth:3},{id:"321-解析场景文件",text:"3.2.1 解析场景文件",depth:4},{id:"322-确认投稿",text:"3.2.2 确认投稿",depth:4},{id:"33-编辑投稿",text:"3.3 编辑投稿",depth:3},{id:"331-解析场景文件",text:"3.3.1 解析场景文件",depth:4},{id:"332-保存修改",text:"3.3.2 保存修改",depth:4}],title:"设计圈",headingTitle:"设计圈",frontmatter:{}}}}]);