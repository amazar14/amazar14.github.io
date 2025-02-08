"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["6924"],{519:function(e,n,r){r.r(n),r.d(n,{default:()=>a});var s=r(2676),i=r(453),t=r(1305);function c(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div",strong:"strong",h3:"h3",em:"em",ol:"ol",li:"li",h4:"h4",ul:"ul"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"web端相关说明",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#web端相关说明",children:"#"}),"Web端相关说明"]}),"\n",(0,s.jsxs)(n.h2,{id:"1-api",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-api",children:"#"}),"1. api"]}),"\n",(0,s.jsxs)(n.p,{children:["所有api接口由web端定义，web端暴露 ",(0,s.jsx)(n.code,{children:"service"})," 对象，由软件调用。"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=api示例 {1,15}",children:"// web暴露出请求实例\r\n  service = {\r\n    // 请求默认为异步\r\n    async getFileUrlByZyId():Promise<any>{\r\n      // send httpRequest\r\n      return promise\r\n    },\r\n    // 提供对应请求的同步方法 (方法名后拼接 _sync)\r\n    getFileUrlByZyId_sync():any{\r\n      // send httpRequest\r\n      return result\r\n    }\r\n  }\r\n\r\n// 设计软件端使用 service\r\nfunction doSomething(){\r\n  // 异步await接收\r\n  const result = await service.getFileUrlByZyId()\r\n}\r\n\r\nconst result1 = service.getFileUrlByZyId_sync()\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive danger",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"⚠警告"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["\n虽然提供了对应的同步方法，但",(0,s.jsx)(n.strong,{children:"强烈不建议使用同步发送请求"}),"。"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"11-api定义",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#11-api定义",children:"#"}),"1.1 api定义"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"src/api/*.ts"})})," 文件夹下文件对应正常的api请求，对接口的 ",(0,s.jsx)(n.strong,{children:"缓存"})," 及 ",(0,s.jsx)(n.strong,{children:"并发限制"})," 在proxy文件夹下对应 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"src/api/*.ts"})})," 的每个文件配置"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=示例",children:'import { GetSomething } from "../api/*.ts"\r\n\r\ntype Option = {\r\n  cache?: boolean\r\n  limit?: boolean\r\n  sync?: boolean\r\n  transform: (any) => any,\r\n  cacheKey: (any) => string\r\n}\r\n\r\nexport default [\r\n  {\r\n    name: "GetSomething_Cache_Limit",\r\n    handler: GetSomething,\r\n    option: {\r\n      cache: true,\r\n      limit: true,\r\n      sync: false,\r\n      transform: (res)=>{\r\n        if (res.success){\r\n          // 成功才会缓存\r\n          return res\r\n        }\r\n      },\r\n      cacheKey: (params)=>{\r\n        // 使用参数生成唯一的key\r\n        return "cache-key-xxx" + params.id\r\n      }\r\n    }\r\n  }\r\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"说明"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),'：service暴露出的方法名，如果 name="get123"，则调用时service.get123(...)']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"handler"}),"：api中的正常请求方法"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cache"}),"：对 ",(0,s.jsx)(n.code,{children:"handler"})," 结果是否缓存，默认为 ",(0,s.jsx)(n.strong,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sync"}),"：",(0,s.jsx)(n.code,{children:"handler"})," 是否为同步，默认为 ",(0,s.jsx)(n.strong,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transform"}),"：",(0,s.jsx)(n.code,{children:"cache"})," 为 ",(0,s.jsx)(n.strong,{children:"true"})," 时，对 ",(0,s.jsx)(n.code,{children:"handler"})," 的返回结果做缓存处理，示例中对 res.success 进行判断是否缓存,返回值为 ",(0,s.jsx)(n.strong,{children:"undefined"})," 或 ",(0,s.jsx)(n.strong,{children:"null"})," 不缓存。"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cacheKey"}),"：",(0,s.jsx)(n.code,{children:"cache"})," 为 ",(0,s.jsx)(n.strong,{children:"true"})," 时，需要自定义缓存key，函数参数为 ",(0,s.jsx)(n.code,{children:"hander"})," 参数，返回值为",(0,s.jsx)(n.strong,{children:"string"}),"类型"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"api缓存",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api缓存",children:"#"}),"api缓存"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"service"})," 对象可对指定请求结果做缓存，方法中的部分参数会作为缓存key的一部分"]}),"\n",(0,s.jsx)(t.Z,Object.assign({code:"flowchart TB\r\n    需要数据--\x3e|有缓存|从缓存中获取--\x3e处理数据\r\n    需要数据--\x3e|无缓存|调用接口--\x3e发送请求\\n获取数据--\x3e接口数据\\n加入缓存--\x3e处理数据\r\n    处理数据--\x3e返回整合数据"},{config:{theme:"dark"}})),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"注意"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"缓存会在页面刷新后清空"})})]}),"\n",(0,s.jsxs)(n.h4,{id:"资源缓存",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#资源缓存",children:"#"}),"资源缓存"]}),"\n",(0,s.jsxs)(n.p,{children:["缓存层会对 ",(0,s.jsx)(n.code,{children:".mesh"}),"、 ",(0,s.jsx)(n.code,{children:".mat"}),"、 ",(0,s.jsx)(n.code,{children:".jpg"}),"、 ",(0,s.jsx)(n.code,{children:".drs"}),"、 ",(0,s.jsx)(n.code,{children:".json"}),"静态资源进行缓存。"]}),"\n","\n","\n","\n",(0,s.jsxs)(n.h2,{id:"2-同步异步",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-同步异步",children:"#"}),"2. 同步&异步"]}),"\n",(0,s.jsx)(n.p,{children:"同样适用于其他同步功能"}),"\n",(0,s.jsxs)(n.h3,{id:"21-拆分",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21-拆分",children:"#"}),"2.1 拆分"]}),"\n",(0,s.jsx)(n.p,{children:"软件将一个功能拆分为颗粒度更细的若干个功能。将部分功能暴露出去，在web端调用，实现控制反转"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"以登录举例"}),"\n"]}),"\n","\n",(0,s.jsx)(t.Z,Object.assign({code:"flowchart TB\r\n    login--\x3e|将参数传给web|web_login\r\n    触发wasm暴露的函数--\x3e|传入登录信息|校验返回结果\r\n    软件获取登录信息--\x3e|传入登录信息|校验返回结果\r\n    subgraph web端\r\n    web_login--\x3e|发送登录请求|web获取登录信息--\x3e触发wasm暴露的函数\r\n    end\r\n    subgraph 设计软件\r\n    login--\x3e|发送登录请求|软件获取登录信息\r\n    end\r\n    subgraph 设计软件端分离出校验及后续的功能并wasm暴露出\r\n    校验返回结果--\x3e登陆成功\r\n    校验返回结果--\x3e登陆失败\r\n    end"},{config:{theme:"dark"}})),"\n","\n",(0,s.jsxs)(n.h3,{id:"22-加载时",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22-加载时",children:"#"}),"2.2. 加载时"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"对于加载耗时久的模型，需要一个加载遮罩并显示进度"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=调用",children:"window.__mitt__.emit('load-model', {\r\n  loading: boolean, // 是否显示加载蒙版\r\n  text: string      // 需要显示到mask上的文本\r\n})\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"3-utils",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-utils",children:"#"}),"3. utils"]}),"\n",(0,s.jsxs)(n.h3,{id:"31-鼠标事件监听",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#31-鼠标事件监听",children:"#"}),"3.1. 鼠标事件监听"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=鼠标事件 source code",children:'function useMouse(option) {\r\n  let _target;\r\n  if (option.target instanceof EventTarget) {\r\n    _target = option.target;\r\n  } else {\r\n    if (document.querySelector(option.target) == null) {\r\n      throw new Error("target is not HTMLElement");\r\n    } else {\r\n      _target = document.querySelector(option.target);\r\n    }\r\n  }\r\n  function cb(e) {\r\n    const o = {\r\n      mouseLeft: e.buttons == 1,\r\n      mouseRight: e.buttons == 2,\r\n      mouseMiddle: e.buttons == 4,\r\n      MouseEvent: e\r\n    };\r\n    option.onMove(o);\r\n  }\r\n  _target.addEventListener("mousemove", cb);\r\n  return {\r\n    clear: function() {\r\n      _target.removeEventListener("mousemove", cb);\r\n    }\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=用法",children:'const instance = useMouse({\r\n  target: "#canvas",\r\n  // 移动时执行此函数\r\n  onMove(e) {\r\n    console.log(e);\r\n    // e = {\r\n    //  mouseLeft: false,   移动时鼠标是否左键按下\r\n    //  mouseRight: false,  移动时鼠标是否右键按下\r\n    //  mouseMiddle: false, 移动时鼠标是否中键按下\r\n    //  MouseEvent: {} 原生event事件\r\n    //}\r\n  }\r\n})\r\n// 移除移动监听事件\r\ninstance.clear()\n'})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}let a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["guide%2Fweb-design%2Fweb.mdx"]={toc:[{id:"1-api",text:"1. api",depth:2},{id:"11-api定义",text:"1.1 api定义",depth:3},{id:"api缓存",text:"api缓存",depth:4},{id:"资源缓存",text:"资源缓存",depth:4},{id:"2-同步异步",text:"2. 同步&异步",depth:2},{id:"21-拆分",text:"2.1 拆分",depth:3},{id:"22-加载时",text:"2.2. 加载时",depth:3},{id:"3-utils",text:"3. utils",depth:2},{id:"31-鼠标事件监听",text:"3.1. 鼠标事件监听",depth:3}],title:"Web端相关说明",headingTitle:"Web端相关说明",frontmatter:{}}}}]);