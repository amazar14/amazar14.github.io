"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["5089"],{8036:function(e,n,r){r.r(n),r.d(n,{default:()=>i});var d=r(2676),h=r(453);function s(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre",code:"code",p:"p"},(0,h.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.h1,{id:"搜图",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#搜图",children:"#"}),"搜图"]}),"\n",(0,d.jsxs)(n.h2,{id:"1-概述",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-概述",children:"#"}),"1. 概述"]}),"\n",(0,d.jsxs)(n.h2,{id:"2-地址",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-地址",children:"#"}),"2. 地址"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["正式环境地址：",(0,d.jsx)(n.a,{href:"https://help.ihomecloud.com.cn/image/?tokenId=tokenId",rel:"noopener noreferrer",target:"_blank",children:"https://help.ihomecloud.com.cn/image/?tokenId=tokenId"})]}),"\n",(0,d.jsxs)(n.li,{children:["测试环境地址：",(0,d.jsx)(n.a,{href:"https://uat-help.ihomecloud.com.cn/image/?tokenId=tokenId",rel:"noopener noreferrer",target:"_blank",children:"https://uat-help.ihomecloud.com.cn/image/?tokenId=tokenId"})]}),"\n"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"参数"}),(0,d.jsx)(n.th,{children:"说明"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tokenId"}),(0,d.jsx)(n.td,{children:"tokenId"})]})})]}),"\n",(0,d.jsxs)(n.h2,{id:"2-设计软件通信",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-设计软件通信",children:"#"}),"2. 设计软件通信"]}),"\n",(0,d.jsxs)(n.h3,{id:"21-点击资源传递已选中图片信息给设计软件",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21-点击资源传递已选中图片信息给设计软件",children:"#"}),"2.1 点击资源传递已选中图片信息给设计软件"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"搜图页面，点击鼠标左键选中图片后，将选中的图片id等信息发给设计软件"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:"title=点击资源传递已选中图片资源给设计软件 {1}",children:'// send to homedesign\r\nlet params = {\r\n  code: "SEARCH_IMAGE_SET_RESOURCE",\r\n  param: {\r\n    zyId: zyId, // 当前选择的资源的id\r\n  }\r\n}\r\n\n'})}),"\n",(0,d.jsxs)(n.h3,{id:"22-取消拖拽交互指令",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22-取消拖拽交互指令",children:"#"}),"2.2 取消拖拽交互指令"]}),"\n",(0,d.jsx)(n.p,{children:"搜图页面鼠标左键松开取消传递图片资源信息"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"鼠标左键松开取消传递图片资源信息"}),"\n",(0,d.jsx)(n.li,{children:"鼠标移出页面"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:"title=取消拖拽 {1}",children:'  // send to homedesign\r\n  let params = {\r\n    code: "SEARCH_IMAGE_SET_RESOURCE_CANCEL"\r\n  }\r\n  \n'})}),"\n",(0,d.jsxs)(n.h3,{id:"23-页面点击返回关闭搜图页面",children:[(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#23-页面点击返回关闭搜图页面",children:"#"}),"2.3 页面点击【返回】关闭搜图页面"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"点击页【返回】按钮，调用指令，关闭搜图页面"}),"\n"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",meta:"title=关闭 {1}",children:'// send to homedesign\r\n  let params = {\r\n    code: "SEARCH_IMAGE_CLOSE",  // websocket交互指令\r\n}\n'})})]})}function t(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,h.ah)(),e.components);return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(s,e)})):s(e)}let i=t;t.__RSPRESS_PAGE_META={},t.__RSPRESS_PAGE_META["guide%2Finner%2F%E6%90%9C%E5%9B%BE.md"]={toc:[{id:"1-概述",text:"1. 概述",depth:2},{id:"2-地址",text:"2. 地址",depth:2},{id:"2-设计软件通信",text:"2. 设计软件通信",depth:2},{id:"21-点击资源传递已选中图片信息给设计软件",text:"2.1 点击资源传递已选中图片信息给设计软件",depth:3},{id:"22-取消拖拽交互指令",text:"2.2 取消拖拽交互指令",depth:3},{id:"23-页面点击返回关闭搜图页面",text:"2.3 页面点击【返回】关闭搜图页面",depth:3}],title:"搜图",headingTitle:"搜图",frontmatter:{}}}}]);