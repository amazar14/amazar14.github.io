"use strict";(self.webpackChunkrspress_doc_template=self.webpackChunkrspress_doc_template||[]).push([["6124"],{1986:function(e,n,r){r.r(n),r.d(n,{default:function(){return a}});var s=r(2676),i=r(453),t=r(669);function c(e){let n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",pre:"pre",div:"div",strong:"strong",h3:"h3",em:"em",ol:"ol",li:"li",h4:"h4",ul:"ul"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"web\u7AEF\u76F8\u5173\u8BF4\u660E",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#web\u7AEF\u76F8\u5173\u8BF4\u660E",children:"#"}),"Web\u7AEF\u76F8\u5173\u8BF4\u660E"]}),"\n",(0,s.jsxs)(n.h2,{id:"1-api",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#1-api",children:"#"}),"1. api"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u6709api\u63A5\u53E3\u7531web\u7AEF\u5B9A\u4E49\uFF0Cweb\u7AEF\u66B4\u9732 ",(0,s.jsx)(n.code,{children:"service"})," \u5BF9\u8C61\uFF0C\u7531\u8F6F\u4EF6\u8C03\u7528\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=api\u793A\u4F8B {1,15}",children:"// web\u66B4\u9732\u51FA\u8BF7\u6C42\u5B9E\u4F8B\r\n  service = {\r\n    // \u8BF7\u6C42\u9ED8\u8BA4\u4E3A\u5F02\u6B65\r\n    async getFileUrlByZyId():Promise<any>{\r\n      // send httpRequest\r\n      return promise\r\n    },\r\n    // \u63D0\u4F9B\u5BF9\u5E94\u8BF7\u6C42\u7684\u540C\u6B65\u65B9\u6CD5 (\u65B9\u6CD5\u540D\u540E\u62FC\u63A5 _sync)\r\n    getFileUrlByZyId_sync():any{\r\n      // send httpRequest\r\n      return result\r\n    }\r\n  }\r\n\r\n// \u8BBE\u8BA1\u8F6F\u4EF6\u7AEF\u4F7F\u7528 service\r\nfunction doSomething(){\r\n  // \u5F02\u6B65await\u63A5\u6536\r\n  const result = await service.getFileUrlByZyId()\r\n}\r\n\r\nconst result1 = service.getFileUrlByZyId_sync()\n"})}),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive danger",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"\u26A0\u8B66\u544A"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsxs)(n.p,{children:["\n\u867D\u7136\u63D0\u4F9B\u4E86\u5BF9\u5E94\u7684\u540C\u6B65\u65B9\u6CD5\uFF0C\u4F46",(0,s.jsx)(n.strong,{children:"\u5F3A\u70C8\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u540C\u6B65\u53D1\u9001\u8BF7\u6C42"}),"\u3002"]})})]}),"\n",(0,s.jsxs)(n.h3,{id:"11-api\u5B9A\u4E49",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#11-api\u5B9A\u4E49",children:"#"}),"1.1 api\u5B9A\u4E49"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"src/api/*.ts"})})," \u6587\u4EF6\u5939\u4E0B\u6587\u4EF6\u5BF9\u5E94\u6B63\u5E38\u7684api\u8BF7\u6C42\uFF0C\u5BF9\u63A5\u53E3\u7684 ",(0,s.jsx)(n.strong,{children:"\u7F13\u5B58"})," \u53CA ",(0,s.jsx)(n.strong,{children:"\u5E76\u53D1\u9650\u5236"})," \u5728proxy\u6587\u4EF6\u5939\u4E0B\u5BF9\u5E94 ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"src/api/*.ts"})})," \u7684\u6BCF\u4E2A\u6587\u4EF6\u914D\u7F6E"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=\u793A\u4F8B",children:'import { GetSomething } from "../api/*.ts"\r\n\r\ntype Option = {\r\n  cache?: boolean\r\n  limit?: boolean\r\n  sync?: boolean\r\n  transform: (any) => any,\r\n  cacheKey: (any) => string\r\n}\r\n\r\nexport default [\r\n  {\r\n    name: "GetSomething_Cache_Limit",\r\n    handler: GetSomething,\r\n    option: {\r\n      cache: true,\r\n      limit: true,\r\n      sync: false,\r\n      transform: (res)=>{\r\n        if (res.success){\r\n          // \u6210\u529F\u624D\u4F1A\u7F13\u5B58\r\n          return res\r\n        }\r\n      },\r\n      cacheKey: (params)=>{\r\n        // \u4F7F\u7528\u53C2\u6570\u751F\u6210\u552F\u4E00\u7684key\r\n        return "cache-key-xxx" + params.id\r\n      }\r\n    }\r\n  }\r\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u8BF4\u660E"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),'\uFF1Aservice\u66B4\u9732\u51FA\u7684\u65B9\u6CD5\u540D\uFF0C\u5982\u679C name="get123"\uFF0C\u5219\u8C03\u7528\u65F6service.get123(...)']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"handler"}),"\uFF1Aapi\u4E2D\u7684\u6B63\u5E38\u8BF7\u6C42\u65B9\u6CD5"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cache"}),"\uFF1A\u5BF9 ",(0,s.jsx)(n.code,{children:"handler"})," \u7ED3\u679C\u662F\u5426\u7F13\u5B58\uFF0C\u9ED8\u8BA4\u4E3A ",(0,s.jsx)(n.strong,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"sync"}),"\uFF1A",(0,s.jsx)(n.code,{children:"handler"})," \u662F\u5426\u4E3A\u540C\u6B65\uFF0C\u9ED8\u8BA4\u4E3A ",(0,s.jsx)(n.strong,{children:"false"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"transform"}),"\uFF1A",(0,s.jsx)(n.code,{children:"cache"})," \u4E3A ",(0,s.jsx)(n.strong,{children:"true"})," \u65F6\uFF0C\u5BF9 ",(0,s.jsx)(n.code,{children:"handler"})," \u7684\u8FD4\u56DE\u7ED3\u679C\u505A\u7F13\u5B58\u5904\u7406\uFF0C\u793A\u4F8B\u4E2D\u5BF9 res.success \u8FDB\u884C\u5224\u65AD\u662F\u5426\u7F13\u5B58,\u8FD4\u56DE\u503C\u4E3A ",(0,s.jsx)(n.strong,{children:"undefined"})," \u6216 ",(0,s.jsx)(n.strong,{children:"null"})," \u4E0D\u7F13\u5B58\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"cacheKey"}),"\uFF1A",(0,s.jsx)(n.code,{children:"cache"})," \u4E3A ",(0,s.jsx)(n.strong,{children:"true"})," \u65F6\uFF0C\u9700\u8981\u81EA\u5B9A\u4E49\u7F13\u5B58key\uFF0C\u51FD\u6570\u53C2\u6570\u4E3A ",(0,s.jsx)(n.code,{children:"hander"})," \u53C2\u6570\uFF0C\u8FD4\u56DE\u503C\u4E3A",(0,s.jsx)(n.strong,{children:"string"}),"\u7C7B\u578B"]}),"\n"]}),"\n",(0,s.jsxs)(n.h4,{id:"api\u7F13\u5B58",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#api\u7F13\u5B58",children:"#"}),"api\u7F13\u5B58"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"service"})," \u5BF9\u8C61\u53EF\u5BF9\u6307\u5B9A\u8BF7\u6C42\u7ED3\u679C\u505A\u7F13\u5B58\uFF0C\u65B9\u6CD5\u4E2D\u7684\u90E8\u5206\u53C2\u6570\u4F1A\u4F5C\u4E3A\u7F13\u5B58key\u7684\u4E00\u90E8\u5206"]}),"\n",(0,s.jsx)(t.Z,Object.assign({code:"flowchart TB\r\n    \u9700\u8981\u6570\u636E--\x3e|\u6709\u7F13\u5B58|\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6--\x3e\u5904\u7406\u6570\u636E\r\n    \u9700\u8981\u6570\u636E--\x3e|\u65E0\u7F13\u5B58|\u8C03\u7528\u63A5\u53E3--\x3e\u53D1\u9001\u8BF7\u6C42\\n\u83B7\u53D6\u6570\u636E--\x3e\u63A5\u53E3\u6570\u636E\\n\u52A0\u5165\u7F13\u5B58--\x3e\u5904\u7406\u6570\u636E\r\n    \u5904\u7406\u6570\u636E--\x3e\u8FD4\u56DE\u6574\u5408\u6570\u636E"},{config:{theme:"dark"}})),"\n",(0,s.jsxs)(n.div,{className:"rspress-directive warning",children:[(0,s.jsx)(n.div,{className:"rspress-directive-title",children:"\u6CE8\u610F"}),(0,s.jsx)(n.div,{className:"rspress-directive-content",children:(0,s.jsx)(n.p,{children:"\u7F13\u5B58\u4F1A\u5728\u9875\u9762\u5237\u65B0\u540E\u6E05\u7A7A"})})]}),"\n",(0,s.jsxs)(n.h4,{id:"\u8D44\u6E90\u7F13\u5B58",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#\u8D44\u6E90\u7F13\u5B58",children:"#"}),"\u8D44\u6E90\u7F13\u5B58"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7F13\u5B58\u5C42\u4F1A\u5BF9 ",(0,s.jsx)(n.code,{children:".mesh"}),"\u3001 ",(0,s.jsx)(n.code,{children:".mat"}),"\u3001 ",(0,s.jsx)(n.code,{children:".jpg"}),"\u3001 ",(0,s.jsx)(n.code,{children:".drs"}),"\u3001 ",(0,s.jsx)(n.code,{children:".json"}),"\u9759\u6001\u8D44\u6E90\u8FDB\u884C\u7F13\u5B58\u3002"]}),"\n","\n","\n","\n",(0,s.jsxs)(n.h2,{id:"2-\u540C\u6B65\u5F02\u6B65",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#2-\u540C\u6B65\u5F02\u6B65",children:"#"}),"2. \u540C\u6B65&\u5F02\u6B65"]}),"\n",(0,s.jsx)(n.p,{children:"\u540C\u6837\u9002\u7528\u4E8E\u5176\u4ED6\u540C\u6B65\u529F\u80FD"}),"\n",(0,s.jsxs)(n.h3,{id:"21-\u62C6\u5206",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#21-\u62C6\u5206",children:"#"}),"2.1 \u62C6\u5206"]}),"\n",(0,s.jsx)(n.p,{children:"\u8F6F\u4EF6\u5C06\u4E00\u4E2A\u529F\u80FD\u62C6\u5206\u4E3A\u9897\u7C92\u5EA6\u66F4\u7EC6\u7684\u82E5\u5E72\u4E2A\u529F\u80FD\u3002\u5C06\u90E8\u5206\u529F\u80FD\u66B4\u9732\u51FA\u53BB\uFF0C\u5728web\u7AEF\u8C03\u7528\uFF0C\u5B9E\u73B0\u63A7\u5236\u53CD\u8F6C"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4EE5\u767B\u5F55\u4E3E\u4F8B"}),"\n"]}),"\n","\n",(0,s.jsx)(t.Z,Object.assign({code:"flowchart TB\r\n    login--\x3e|\u5C06\u53C2\u6570\u4F20\u7ED9web|web_login\r\n    \u89E6\u53D1wasm\u66B4\u9732\u7684\u51FD\u6570--\x3e|\u4F20\u5165\u767B\u5F55\u4FE1\u606F|\u6821\u9A8C\u8FD4\u56DE\u7ED3\u679C\r\n    \u8F6F\u4EF6\u83B7\u53D6\u767B\u5F55\u4FE1\u606F--\x3e|\u4F20\u5165\u767B\u5F55\u4FE1\u606F|\u6821\u9A8C\u8FD4\u56DE\u7ED3\u679C\r\n    subgraph web\u7AEF\r\n    web_login--\x3e|\u53D1\u9001\u767B\u5F55\u8BF7\u6C42|web\u83B7\u53D6\u767B\u5F55\u4FE1\u606F--\x3e\u89E6\u53D1wasm\u66B4\u9732\u7684\u51FD\u6570\r\n    end\r\n    subgraph \u8BBE\u8BA1\u8F6F\u4EF6\r\n    login--\x3e|\u53D1\u9001\u767B\u5F55\u8BF7\u6C42|\u8F6F\u4EF6\u83B7\u53D6\u767B\u5F55\u4FE1\u606F\r\n    end\r\n    subgraph \u8BBE\u8BA1\u8F6F\u4EF6\u7AEF\u5206\u79BB\u51FA\u6821\u9A8C\u53CA\u540E\u7EED\u7684\u529F\u80FD\u5E76wasm\u66B4\u9732\u51FA\r\n    \u6821\u9A8C\u8FD4\u56DE\u7ED3\u679C--\x3e\u767B\u9646\u6210\u529F\r\n    \u6821\u9A8C\u8FD4\u56DE\u7ED3\u679C--\x3e\u767B\u9646\u5931\u8D25\r\n    end"},{config:{theme:"dark"}})),"\n","\n",(0,s.jsxs)(n.h3,{id:"22-\u52A0\u8F7D\u65F6",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#22-\u52A0\u8F7D\u65F6",children:"#"}),"2.2. \u52A0\u8F7D\u65F6"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5BF9\u4E8E\u52A0\u8F7D\u8017\u65F6\u4E45\u7684\u6A21\u578B\uFF0C\u9700\u8981\u4E00\u4E2A\u52A0\u8F7D\u906E\u7F69\u5E76\u663E\u793A\u8FDB\u5EA6"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=\u8C03\u7528",children:"window.__mitt__.emit('load-model', {\r\n  loading: boolean, // \u662F\u5426\u663E\u793A\u52A0\u8F7D\u8499\u7248\r\n  text: string      // \u9700\u8981\u663E\u793A\u5230mask\u4E0A\u7684\u6587\u672C\r\n})\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"3-utils",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#3-utils",children:"#"}),"3. utils"]}),"\n",(0,s.jsxs)(n.h3,{id:"31-\u9F20\u6807\u4E8B\u4EF6\u76D1\u542C",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#31-\u9F20\u6807\u4E8B\u4EF6\u76D1\u542C",children:"#"}),"3.1. \u9F20\u6807\u4E8B\u4EF6\u76D1\u542C"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=\u9F20\u6807\u4E8B\u4EF6 source code",children:'function useMouse(option) {\r\n  let _target;\r\n  if (option.target instanceof EventTarget) {\r\n    _target = option.target;\r\n  } else {\r\n    if (document.querySelector(option.target) == null) {\r\n      throw new Error("target is not HTMLElement");\r\n    } else {\r\n      _target = document.querySelector(option.target);\r\n    }\r\n  }\r\n  function cb(e) {\r\n    const o = {\r\n      mouseLeft: e.buttons == 1,\r\n      mouseRight: e.buttons == 2,\r\n      mouseMiddle: e.buttons == 4,\r\n      MouseEvent: e\r\n    };\r\n    option.onMove(o);\r\n  }\r\n  _target.addEventListener("mousemove", cb);\r\n  return {\r\n    clear: function() {\r\n      _target.removeEventListener("mousemove", cb);\r\n    }\r\n  };\r\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",meta:"title=\u7528\u6CD5",children:'const instance = useMouse({\r\n  target: "#canvas",\r\n  // \u79FB\u52A8\u65F6\u6267\u884C\u6B64\u51FD\u6570\r\n  onMove(e) {\r\n    console.log(e);\r\n    // e = {\r\n    //  mouseLeft: false,   \u79FB\u52A8\u65F6\u9F20\u6807\u662F\u5426\u5DE6\u952E\u6309\u4E0B\r\n    //  mouseRight: false,  \u79FB\u52A8\u65F6\u9F20\u6807\u662F\u5426\u53F3\u952E\u6309\u4E0B\r\n    //  mouseMiddle: false, \u79FB\u52A8\u65F6\u9F20\u6807\u662F\u5426\u4E2D\u952E\u6309\u4E0B\r\n    //  MouseEvent: {} \u539F\u751Fevent\u4E8B\u4EF6\r\n    //}\r\n  }\r\n})\r\n// \u79FB\u9664\u79FB\u52A8\u76D1\u542C\u4E8B\u4EF6\r\ninstance.clear()\n'})})]})}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}let a=d;d.__RSPRESS_PAGE_META={},d.__RSPRESS_PAGE_META["guide%2Fweb-design%2Fweb.mdx"]={toc:[{id:"1-api",text:"1. api",depth:2},{id:"11-api\u5B9A\u4E49",text:"1.1 api\u5B9A\u4E49",depth:3},{id:"api\u7F13\u5B58",text:"api\u7F13\u5B58",depth:4},{id:"\u8D44\u6E90\u7F13\u5B58",text:"\u8D44\u6E90\u7F13\u5B58",depth:4},{id:"2-\u540C\u6B65\u5F02\u6B65",text:"2. \u540C\u6B65&\u5F02\u6B65",depth:2},{id:"21-\u62C6\u5206",text:"2.1 \u62C6\u5206",depth:3},{id:"22-\u52A0\u8F7D\u65F6",text:"2.2. \u52A0\u8F7D\u65F6",depth:3},{id:"3-utils",text:"3. utils",depth:2},{id:"31-\u9F20\u6807\u4E8B\u4EF6\u76D1\u542C",text:"3.1. \u9F20\u6807\u4E8B\u4EF6\u76D1\u542C",depth:3}],title:"Web\u7AEF\u76F8\u5173\u8BF4\u660E",frontmatter:{}}}}]);