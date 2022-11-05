"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[66908],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k=r.createContext({}),u=function(e){var t=r.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=u(e.components);return r.createElement(k.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,k=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,d=s["".concat(k,".").concat(m)]||s[m]||c[m]||p;return n?r.createElement(d,l(l({ref:t},o),{},{components:n})):r.createElement(d,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=s;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<p;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},36338:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>o,frontMatter:()=>p,metadata:()=>i,toc:()=>k});var r=n(87462),a=(n(67294),n(3905));const p={title:"UJES\u8bbe\u8ba1",sidebar_position:0},l=void 0,i={unversionedId:"architecture/ujes/ujes-design",id:"version-0.11.0/architecture/ujes/ujes-design",isDocsHomePage:!1,title:"UJES\u8bbe\u8ba1",description:"1 \u6587\u6863\u6982\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/ujes/ujes-design.md",sourceDirName:"architecture/ujes",slug:"/architecture/ujes/ujes-design",permalink:"/zh-CN/docs/0.11.0/architecture/ujes/ujes-design",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/architecture/ujes/ujes-design.md",tags:[],version:"0.11.0",sidebarPosition:0,frontMatter:{title:"UJES\u8bbe\u8ba1",sidebar_position:0},sidebar:"version-1.0.2/tutorialSidebar",previous:{title:"\u7ed3\u679c\u96c6\u6587\u4ef6\u5b58\u50a8",permalink:"/zh-CN/docs/0.11.0/architecture/storage/resultset-file"},next:{title:"Spark\u5f15\u64ce\u7684\u6587\u4ef6\u5bfc\u5165\u5bfc\u51fa",permalink:"/zh-CN/docs/0.11.0/architecture/ujes/file-import-and-export-structure"}},k=[{value:"1 \u6587\u6863\u6982\u8ff0",id:"1-\u6587\u6863\u6982\u8ff0",children:[{value:"1.1 \u9879\u76ee\u80cc\u666f",id:"11-\u9879\u76ee\u80cc\u666f",children:[]},{value:"1.2 \u540d\u8bcd\u89e3\u91ca",id:"12-\u540d\u8bcd\u89e3\u91ca",children:[]}]},{value:"2 \u6574\u4f53\u67b6\u6784",id:"2-\u6574\u4f53\u67b6\u6784",children:[]},{value:"3 \u903b\u8f91\u67b6\u6784",id:"3-\u903b\u8f91\u67b6\u6784",children:[{value:"3.1 UJES\u4f5c\u4e1a\u6267\u884c\u4e3b\u6d41\u7a0b",id:"31-ujes\u4f5c\u4e1a\u6267\u884c\u4e3b\u6d41\u7a0b",children:[]},{value:"3.2 \u67b6\u6784\u7684\u7ec6\u8282\u4ee5\u53ca\u4f18\u5316",id:"32-\u67b6\u6784\u7684\u7ec6\u8282\u4ee5\u53ca\u4f18\u5316",children:[]}]},{value:"4 \u63a5\u53e3\u8bbe\u8ba1",id:"4-\u63a5\u53e3\u8bbe\u8ba1",children:[{value:"4.1 \u5bf9\u5916\u63a5\u53e3\u8bbe\u8ba1",id:"41-\u5bf9\u5916\u63a5\u53e3\u8bbe\u8ba1",children:[]},{value:"4.2 \u6846\u67b6\u63a5\u5165\u63a5\u53e3\u8bbe\u8ba1",id:"42-\u6846\u67b6\u63a5\u5165\u63a5\u53e3\u8bbe\u8ba1",children:[]},{value:"4.3 \u5185\u90e8\u529f\u80fd\u6a21\u5757\u63a5\u53e3\u8bbe\u8ba1",id:"43-\u5185\u90e8\u529f\u80fd\u6a21\u5757\u63a5\u53e3\u8bbe\u8ba1",children:[]}]},{value:"5 \u90e8\u7f72\u67b6\u6784",id:"5-\u90e8\u7f72\u67b6\u6784",children:[{value:"5.1 \u4f20\u7edf\u90e8\u7f72\u65b9\u5f0f",id:"51-\u4f20\u7edf\u90e8\u7f72\u65b9\u5f0f",children:[]}]}],u={toc:k};function o(e){let{components:t,...p}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u6587\u6863\u6982\u8ff0"},"1 \u6587\u6863\u6982\u8ff0"),(0,a.kt)("h3",{id:"11-\u9879\u76ee\u80cc\u666f"},"1.1 \u9879\u76ee\u80cc\u666f"),(0,a.kt)("p",null,"UJES(Unified Job Execution Service)\uff0c\u7edf\u4e00\u4f5c\u4e1a\u6267\u884c\u670d\u52a1\u662fLinkis\u7684\u6838\u5fc3\u7ec4\u4ef6\u4e4b\u4e00\u3002\u9879\u76ee\u4ee5\u5fae\u670d\u52a1\u67b6\u6784\u7684\u5b9e\u73b0\u65b9\u5f0f\uff0c\u4e3a\u5927\u6570\u636e\u751f\u6001\u5708\u63d0\u4f9b\u4e86\u4e00\u79cd\u5927\u6570\u636e\u4f5c\u4e1a\u63d0\u4ea4\u7684\u5168\u65b0\u901a\u7528\u6846\u67b6\u65b9\u6848\uff0c\u540c\u65f6\u89e3\u51b3\u73b0\u6709\u5e02\u9762\u4e0a\u540c\u7c7b\u5f00\u6e90\u9879\u76ee\u7684\u4e00\u4e9b\u4f7f\u7528\u4e0a\u7684\u75db\u70b9\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u6863\u9002\u5408\u4e8e\u5bf9\u5927\u6570\u636e\u529f\u80fd\u5e73\u53f0\uff0c\u7279\u522b\u662fhadoop\u5927\u6570\u636e\u751f\u6001\u5708\uff0c\u6709\u4e00\u5b9a\u5de5\u4f5c\u7ecf\u9a8c\u6216\u6709\u5b66\u4e60\u5174\u8da3\u7684\u4eba\u9605\u8bfb\u3002"),(0,a.kt)("h3",{id:"12-\u540d\u8bcd\u89e3\u91ca"},"1.2 \u540d\u8bcd\u89e3\u91ca"),(0,a.kt)("p",null,"\u6587\u6863\u4f1a\u5728\u540e\u6587\u4f7f\u7528\u5230\u4e00\u4e9b\u9879\u76ee\u4e2d\u7684\u4e13\u6709\u540d\u8bcd\uff0c\u5728\u672c\u8282\u4e2d\u5bf9\u8fd9\u4e9b\u540d\u8bcd\u8fdb\u884c\u89e3\u91ca\u3002"),(0,a.kt)("p",null,"1) \u7f51\u5173:"),(0,a.kt)("p",null," UJES\u7684\u7f51\u5173\uff0c\u57fa\u4e8eSpring Cloud Gateway\u8fdb\u884c\u4e86\u63d2\u4ef6\u5316\u529f\u80fd\u589e\u5f3a\uff0c\u65b0\u589e\u4e86WebSocket\u4e00\u5bf9\u591a\u80fd\u529b\u7684\u7f51\u5173\u670d\u52a1\uff0c\u4e3b\u8981\u7528\u4e8e\u8f6c\u53d1\u7528\u6237\u8bf7\u6c42\u5230\u6307\u5b9a\u7684\u5fae\u670d\u52a1\u3002"),(0,a.kt)("p",null,"2) \u5165\u53e3\u5fae\u670d\u52a1:"),(0,a.kt)("p",null," UJES\u7684\u5165\u53e3\u5fae\u670d\u52a1\u662f\u7528\u6237\u67d0\u4e00\u7c7b\u4f5c\u4e1a\u5168\u7a0b\u7684\u7ba1\u7406\u8005\u3002\u4ece\u4f5c\u4e1a\u751f\u6210\u5230\u63d0\u4ea4\u5230\u6267\u884c\u5f15\u64ce\uff0c\u518d\u5230\u4f5c\u4e1a\u4fe1\u606f\u53cd\u9988\u7ed9\u7528\u6237\u548c\u4f5c\u4e1a\u5173\u95ed\uff0c\u5165\u53e3\u5fae\u670d\u52a1\u7ba1\u7406\u4e86\u4e00\u4e2a\u4f5c\u4e1a\u7684\u751f\u547d\u5468\u671f\u3002"),(0,a.kt)("p",null,"3) \u5f15\u64ce\u7ba1\u7406\u5668:"),(0,a.kt)("p",null," UJES\u7684\u5f15\u64ce\u7ba1\u7406\u5668\u662f\u5904\u7406\u542f\u52a8\u5f15\u64ce\u8bf7\u6c42\u7684\u5fae\u670d\u52a1\uff0c\u540c\u65f6\u4e5f\u76d1\u63a7\u5f15\u64ce\u7684\u751f\u547d\u72b6\u6001\u3002"),(0,a.kt)("p",null,"4) \u6267\u884c\u5f15\u64ce:"),(0,a.kt)("p",null," UJES\u7684\u6267\u884c\u5f15\u64ce\u662f\u771f\u6b63\u6267\u884c\u7528\u6237\u4f5c\u4e1a\u7684\u5fae\u670d\u52a1\uff0c\u5b83\u7531\u5f15\u64ce\u7ba1\u7406\u5668\u542f\u52a8\uff0c\u5e76\u548c\u63d0\u4ea4\u7ed9\u5b83\u4f5c\u4e1a\u7684\u5165\u53e3\u8fdb\u884c\u4ea4\u4e92\uff0c\u5c06\u4f5c\u4e1a\u6b63\u786e\u6267\u884c\uff0c\u5e76\u53cd\u9988\u7528\u6237\u9700\u8981\u7684\u5404\u79cd\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"5) \u5e94\u7528\u7ba1\u7406\u5668:"),(0,a.kt)("p",null," UJES\u7684\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u662f\u96c6\u7fa4\u4e2d\u6267\u884c\u5f15\u64ce\u5b9e\u4f8b\u4fe1\u606f\u7684\u7ef4\u7cfb\u8005\uff0c\u5165\u53e3\u5fae\u670d\u52a1\u60f3\u8981\u6267\u884c\u4f5c\u4e1a\uff0c\u603b\u662f\u9700\u8981\u8fd9\u4e9b\u4fe1\u606f\u6765\u83b7\u53d6\u4e00\u4e2a\u53ef\u4ee5\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce\u3002"),(0,a.kt)("h2",{id:"2-\u6574\u4f53\u67b6\u6784"},"2 \u6574\u4f53\u67b6\u6784"),(0,a.kt)("p",null,"\u6b63\u786e\u3001\u5b89\u5168\u5730\u8fde\u63a5\u7528\u6237\u548c\u6570\u636e\uff0c\u5e76\u4e3a\u7528\u6237\u63d0\u4f9b\u5f3a\u5927\u4e14\u6613\u7528\u7684\u6570\u636e\u4f5c\u4e1a\u63d0\u4ea4\u65b9\u5f0f\u662fUJES\u9879\u76ee\u7684\u76ee\u6807\u3002"),(0,a.kt)("p",null,"UJES\u7684\u5b9a\u4f4d\u662f\u8fde\u63a5\u4e0a\u5c42\u5e94\u7528\u7cfb\u7edf\u548c\u4e0b\u5c42\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u7684\u6865\u6881\u3002"),(0,a.kt)("p",null,"\u7528\u6237\u53ea\u9700\u8981\u5c06\u81ea\u5df1\u7684\u5927\u6570\u636e\u4f5c\u4e1a\u63d0\u4ea4\u5230UJES\uff0cUJES\u4f1a\u5c06\u4f5c\u4e1a\u63d0\u4ea4\u5230\u4e0b\u5c42\u7684\u8ba1\u7b97\u5b58\u50a8\u5f15\u64ce\u4e0a\u8fdb\u884c\u6267\u884c\uff0c\u4f5c\u4e1a\u8fd0\u884c\u4ea7\u751f\u7684\u65e5\u5fd7\u3001\u72b6\u6001\u3001\u8fdb\u5ea6\u3001\u7ed3\u679c\u7b49\u90fd\u4f1a\u7531UJES\u5b9e\u65f6\u8fd4\u56de\u7ed9\u7528\u6237\u3002"),(0,a.kt)("p",null,"UJES\u7684\u6574\u4f53\u67b6\u6784\u5982\u56fe2.1\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UJES\u6574\u4f53\u67b6\u6784\u56fe",src:n(82856).Z}),(0,a.kt)("br",null)),(0,a.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0cUJES\u6846\u67b6\u4f4d\u4e8e\u4e0a\u5c42\u5e94\u7528\u7cfb\u7edf\u4e0e\u4e0b\u5c42\u8ba1\u7b97\u5b58\u50a8\u7cfb\u7edf\u4e4b\u95f4\uff0c\u662f\u7528\u6237\u4f5c\u4e1a\u7684\u7ba1\u7406\u89d2\u8272\uff0c\u5b83\u5c06\u5927\u6570\u636e\u96c6\u7fa4\u7684\u6570\u636e\u5b58\u50a8\u3001\u8ba1\u7b97\u7b49\u529f\u80fd\u8fdb\u884c\u5c01\u88c5\uff0c\u63d0\u4f9b\u4e86\u4e00\u79cd\u7edf\u4e00\u7684\u4f5c\u4e1a\u63d0\u4ea4\u6846\u67b6\uff0c\u7528\u6237\u4e0d\u518d\u9700\u8981\u533a\u5206\u4f5c\u4e1a\u662fspark\u8fd8\u662fhive\u7b49\u7c7b\u578b\uff0c\u53ea\u9700\u8981\u63d0\u4ea4\u7ed9UJES\uff0c\u5c31\u53ef\u4ee5\u6b63\u786e\u5730\u8ba9\u96c6\u7fa4\u4e3a\u81ea\u5df1\u670d\u52a1\uff0c\u8282\u7701\u4e86\u7528\u6237\u6781\u5927\u7684\u5b66\u4e60\u6210\u672c\u3002"),(0,a.kt)("h2",{id:"3-\u903b\u8f91\u67b6\u6784"},"3 \u903b\u8f91\u67b6\u6784"),(0,a.kt)("p",null,"UJES\u7684\u903b\u8f91\u67b6\u6784\u662f\u57fa\u4e8e\u73b0\u4eca\u6d41\u884c\u7684\u5fae\u670d\u52a1\u67b6\u6784\u6a21\u5f0f\u8fdb\u884c\u8bbe\u8ba1\u3002"),(0,a.kt)("p",null,"\u5fae\u670d\u52a1\u67b6\u6784\u63d0\u5021\u5c06\u540e\u53f0\u670d\u52a1\u5212\u5206\u6210\u4e00\u7ec4\u5c0f\u7684\u670d\u52a1\uff0c\u5404\u4e2a\u5fae\u670d\u52a1\u4e4b\u95f4\u76f8\u4e92\u534f\u8c03\u3001\u4e92\u76f8\u914d\u5408\u3002"),(0,a.kt)("p",null,"\u5fae\u670d\u52a1\u548c\u5fae\u670d\u52a1\u4e4b\u95f4\u91c7\u7528\u8f7b\u91cf\u7ea7\u7684\u901a\u4fe1\u673a\u5236\u76f8\u4e92\u6c9f\u901a\uff08\u901a\u5e38\u662f\u57fa\u4e8eHTTP\u7684Restful API)\u3002"),(0,a.kt)("p",null,"\u8fd9\u79cd\u67b6\u6784\u6a21\u5f0f\u5177\u6709\u903b\u8f91\u6e05\u6670\u3001\u90e8\u7f72\u7b80\u5355\u3001\u6269\u5c55\u6027\u5f3a\u3001\u6280\u672f\u5f02\u6784\u3001\u9ad8\u53ef\u9760\u7b49\u4f18\u52bf\u3002"),(0,a.kt)("p",null,"UJES\u7684\u903b\u8f91\u67b6\u6784\u5982\u56fe3.1\u6240\u793a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"UJES\u903b\u8f91\u67b6\u6784\u56fe",src:n(47663).Z}),(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"31-ujes\u4f5c\u4e1a\u6267\u884c\u4e3b\u6d41\u7a0b"},"3.1 UJES\u4f5c\u4e1a\u6267\u884c\u4e3b\u6d41\u7a0b"),(0,a.kt)("p",null,"\u4e0b\u9762\u5c06\u7528\u4e00\u4e2a\u5b8c\u6574\u7684\u4f8b\u5b50\u6765\u8be6\u7ec6\u9610\u8ff0\u4ecb\u7ecdUJES\u9879\u76ee\u8fd0\u884c\u7684\u4e3b\u6d41\u7a0b\uff0c\u5e76\u5bf9\u56fe\u4e2d\u5fae\u670d\u52a1\u7ec4\u4ef6\u7684\u529f\u80fd\u8fdb\u884c\u4ecb\u7ecd\uff0c\u66f4\u591a\u7ec6\u8282\u4f1a\u5728\u4e3b\u6d41\u7a0b\u4e4b\u540e\u8fdb\u884c\u9610\u8ff0\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"1.\u7528\u6237\u63d0\u4ea4\u4f5c\u4e1a\uff0c\u7f51\u5173\u8f6c\u53d1")),(0,a.kt)("p",{parentName:"li"},"\u7528\u6237A\u901a\u8fc7Restful\u6216\u8005Websocket\u7b49\u65b9\u5f0f\u63d0\u4ea4\u81ea\u5df1\u7684\u5927\u6570\u636e\u4f5c\u4e1a\u5230UJES\u7684\u7f51\u5173\u5fae\u670d\u52a1\uff0c\u7f51\u5173\u6839\u636e\u6307\u5b9a\u7684\u4f5c\u4e1a\u7c7b\u578b\uff0c\u8f6c\u53d1\u7528\u6237\u8bf7\u6c42\u5230\u6307\u5b9a\u7684\u5165\u53e3\u5fae\u670d\u52a1\uff0c\u5982\u7528\u6237\u63d0\u4ea4\u4e86\u4e00\u6bb5spark-sql\u4ee3\u7801\uff0c\u7f51\u5173\u4f1a\u5c06\u8be5\u4f5c\u4e1a\u63d0\u4ea4\u5230Spark\u7684\u5165\u53e3\u5fae\u670d\u52a1\u4e2d\u3002"),(0,a.kt)("p",{parentName:"li"},"\u7531\u4e8e\u5165\u53e3\u5fae\u670d\u52a1\u53ef\u4ee5\u662f\u591a\u5b9e\u4f8b\u90e8\u7f72\u7684\uff0c\u7f51\u5173\u662f\u6309\u7167\u8d1f\u8f7d\u5747\u8861\u7684\u7b56\u7565\u8fdb\u884c\u8f6c\u53d1\u5230\u5408\u9002\u7684\u5fae\u670d\u52a1\u5b9e\u4f8b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"2.\u5165\u53e3\u7a0b\u5e8f\u8fdb\u884c\u89e3\u6790\u3001\u68c0\u67e5")),(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u7684\u4f5c\u4e1a\u88ab\u8f6c\u53d1\u5230Spark\u7684\u5165\u53e3\u5fae\u670d\u52a1\u4e4b\u540e\uff0c\u5165\u53e3\u4e2d\u7684\u89e3\u6790\u5668\u4f1a\u5c06\u7528\u6237\u63d0\u4ea4\u7684\u4f5c\u4e1a\u89e3\u6790\u6210\u4e00\u4e2a\u53ef\u7528\u4e8e\u8fd0\u884c\u7684\u4efb\u52a1\uff0c\u6301\u4e45\u5668\u4f1a\u5c06\u4efb\u52a1\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\u3002"),(0,a.kt)("p",{parentName:"li"},"\u540c\u65f6\u9884\u8bbe\u7f6e\u7684\u62e6\u622a\u5668\u4e5f\u4f1a\u8fdb\u884c\u811a\u672c\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\u66ff\u6362\uff0c\u6076\u610f\u4ee3\u7801\u68c0\u67e5\u7b49\u64cd\u4f5c\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u7528\u6237\u7684\u8bf7\u6c42\u88ab\u62e6\u622a\uff0c\u90a3\u4e48\u4ed6\u7684\u4ee3\u7801\u5c06\u4e0d\u4f1a\u88ab\u63d0\u4ea4\u5230\u96c6\u7fa4\u8fdb\u884c\u6267\u884c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"3.\u76d1\u542c\u5668\u7684\u8bbe\u7f6e")),(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u8fd0\u884c\u4ea7\u751f\u7684\u65e5\u5fd7\u3001\u8fdb\u5ea6\u3001\u72b6\u6001\u3001\u7ed3\u679c\u7b49\u4fe1\u606f\u4ea7\u751f\u4e4b\u540e\u9700\u8981\u8fdb\u884c\u5904\u7406\uff0c\u4f8b\u5982\u5c55\u73b0\u7ed9\u7528\u6237\u6216\u6301\u4e45\u5316\u5230\u6570\u636e\u5e93\u7b49\uff0c\u4e00\u822c\u8fd9\u79cd\u5904\u7406\u9700\u8981\u91c7\u7528\u4e8b\u4ef6\u603b\u7ebf\u548c\u76d1\u542c\u5668\u7684\u65b9\u5f0f\uff0c\u6240\u4ee5\u9700\u8981\u4e3a\u4efb\u52a1\u8bbe\u7f6e\u5404\u7c7b\u76d1\u542c\u5668\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"4.\u4efb\u52a1\u8fdb\u5165\u8c03\u5ea6\u5668")),(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u751f\u6210\u4e4b\u540e\uff0c\u4f1a\u8fdb\u5165\u8c03\u5ea6\u5668\u4e2d\u7b49\u5f85\u8c03\u5ea6\u6267\u884c\u3002"),(0,a.kt)("p",{parentName:"li"},"\u8c03\u5ea6\u5668\u4e2d\u7684\u6838\u5fc3\u6982\u5ff5\u662f\u6d88\u8d39\u961f\u5217\uff0c\u6d88\u8d39\u961f\u5217\u662f\u4ee5\u6d88\u8d39\u7ec4\u4f5c\u4e3a\u6807\u8bc6\u7684\uff0c\u6d88\u8d39\u7ec4\u4e00\u822c\u662f\u4ee5\u7528\u6237\u6240\u5728\u7684\u7cfb\u7edf\u548c\u7528\u6237\u4e24\u8005\u5171\u540c\u786e\u5b9a\uff0c\u5982\u7528\u6237Anna\u5728\u7cfb\u7edfTest\u4e2d\u5411UJES\u63d0\u4ea4\u4e86\u4efb\u52a1\uff0c\u90a3\u4e48\u6d88\u8d39\u7ec4\u53ef\u4ee5\u6807\u8bb0\u4e3aTest_Anna\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u8fdb\u5165\u8c03\u5ea6\u5668\u4e4b\u540e\uff0c\u4f1a\u6839\u636e\u7ec4\u7684\u6807\u8bc6\uff0c\u653e\u7f6e\u5230\u4e0d\u540c\u7684\u6d88\u8d39\u961f\u5217\u7b49\u5f85\u8c03\u5ea6\u3002"),(0,a.kt)("p",{parentName:"li"},"\u6d88\u8d39\u961f\u5217\u7684\u7ebf\u7a0b\u4e00\u822c\u91c7\u7528\u5355\u7ebf\u7a0b\u7684\u65b9\u5f0f\u5b9e\u73b0\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"5.\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u7684\u5de5\u4f5c\u2014\u2014\u63d0\u4f9b\u6267\u884c\u5f15\u64ce")),(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u4e00\u65e6\u88ab\u8c03\u5ea6\uff0c\u5165\u53e3\u5fae\u670d\u52a1\u5c31\u9700\u8981\u901a\u8fc7\u5f15\u64ce\u7533\u8bf7\u5668\u5411\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u8fdb\u884c\u7533\u8bf7\u6267\u884c\u5f15\u64ce\u7528\u4e8e\u6267\u884c\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u4f1a\u6839\u636e\u7528\u6237\u7684\u6d88\u8d39\u7ec4\u4fe1\u606f\u67e5\u770b\u96c6\u7fa4\u4e2d\u662f\u5426\u6709\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u7684\u5f15\u64ce\uff0c\u5982\u679c\u6709\u53ef\u4ee5\u7528\u4e8e\u6d88\u8d39\u7ec4\u4f7f\u7528\u7684\u6267\u884c\u5f15\u64ce\uff0c\u4f1a\u5c06\u8be5\u5f15\u64ce\u7684\u4fe1\u606f\u8fd4\u56de\u7ed9\u5165\u53e3\u5fae\u670d\u52a1\uff0c\u5165\u53e3\u5fae\u670d\u52a1\u4f1a\u5c06\u4efb\u52a1\u63d0\u4ea4\u5230\u8be5\u6267\u884c\u5f15\u64ce\u8fdb\u884c\u6267\u884c\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u53d1\u73b0\u5728\u96c6\u7fa4\u4e2d\u6ca1\u6709\u8be5\u6d88\u8d39\u7ec4\u53ef\u4ee5\u4f7f\u7528\u7684\u5f15\u64ce\uff0c\u5c31\u4f1a\u5411\u5f15\u64ce\u7ba1\u7406\u5668\u5fae\u670d\u52a1\u4e3a\u8be5\u6d88\u8d39\u7ec4\u7533\u8bf7\u4e00\u4e2a\u65b0\u7684\u6267\u884c\u5f15\u64ce\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5165\u53e3\u5fae\u670d\u52a1\u7684\u6d88\u8d39\u7ebf\u7a0b\u4f1a\u4e00\u76f4\u7b49\u5f85\u76f4\u5230\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u8fd4\u56de\u5f15\u64ce\u542f\u52a8\u6210\u529f\u3001\u5931\u8d25\u6216\u8005\u8d85\u65f6\u7684\u4fe1\u606f\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"6.\u5f15\u64ce\u7ba1\u7406\u5668\u5fae\u670d\u52a1\u2014\u2014\u542f\u52a8\u5e76\u7ba1\u7406\u5f15\u64ce")),(0,a.kt)("p",{parentName:"li"},"\u5f15\u64ce\u7ba1\u7406\u5668\u5fae\u670d\u52a1\u662f\u7528\u4e8e\u542f\u52a8\u5e76\u7ba1\u7406\u6267\u884c\u5f15\u64ce\u7684\u5fae\u670d\u52a1\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5f53\u5f15\u64ce\u7ba1\u7406\u5668\u6536\u5230\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u542f\u52a8\u4e00\u4e2a\u65b0\u5f15\u64ce\u7684\u8bf7\u6c42\uff0c\u8bf7\u6c42\u4f1a\u643a\u5e26\u7528\u6237\u7684\u6d88\u8d39\u7ec4\u4fe1\u606f\uff0c\u5f15\u64ce\u7ba1\u7406\u5668\u6839\u636e\u6d88\u8d39\u7ec4\u4fe1\u606f\u53bb\u5411\u8d44\u6e90\u7ba1\u7406\u5668\u7533\u8bf7\u8d44\u6e90\uff0c\u5982\u679c\u7528\u6237\u4ecd\u7136\u6709\u8db3\u591f\u7684\u8d44\u6e90\uff0c\u8d44\u6e90\u7ba1\u7406\u5668\u5c31\u4f1a\u5141\u8bb8\u5f15\u64ce\u7ba1\u7406\u5668\u4e3a\u7528\u6237\u542f\u52a8\u4e00\u4e2a\u65b0\u7684\u5f15\u64ce\uff0c\u5e76\u5e7f\u64ad\u5230\u5e94\u7528\u7ba1\u7406\u670d\u52a1\u5fae\u670d\u52a1\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"7.\u5165\u53e3\u5fae\u670d\u52a1\u63d0\u4ea4\u4efb\u52a1\u5230\u6267\u884c\u5f15\u64ce\u8fdb\u884c\u6267\u884c")),(0,a.kt)("p",{parentName:"li"},"\u6b65\u9aa47\u4e4b\u540e\uff0c\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u5df2\u7ecf\u83b7\u53d6\u5230\u4e86\u65b0\u542f\u52a8\u7684\u5f15\u64ce\u7684\u4fe1\u606f\uff0c\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u4f1a\u5c06\u8fd9\u4e2a\u5f15\u64ce\u7684\u4fe1\u606f\u8fd4\u56de\u7ed9\u5165\u53e3\u5fae\u670d\u52a1\uff0c\u5165\u53e3\u5fae\u670d\u52a1\u83b7\u53d6\u5230\u8fd9\u4e2a\u5f15\u64ce\u4fe1\u606f\u4e4b\u540e\uff0c\u5c31\u5c06\u4efb\u52a1\u63d0\u4ea4\u5230\u6539\u5f15\u64ce\u53bb\u6267\u884c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"8.\u5165\u53e3\u4e0e\u5f15\u64ce\u7684\u4ea4\u4e92")),(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u63d0\u4ea4\u5230\u6267\u884c\u5f15\u64ce\u4e4b\u540e\uff0c\u4efb\u52a1\u5728\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u4f1a\u4ea7\u751f\u65e5\u5fd7\u3001\u8fdb\u5ea6\u3001\u7ed3\u679c\u7b49\u4fe1\u606f\uff0c\u8fd9\u4e9b\u4fe1\u606f\u4f1a\u901a\u8fc7RPC\u7684\u65b9\u5f0f\u8fdb\u884c\u8fd4\u56de\u5230\u5165\u53e3\u5fae\u670d\u52a1\u4e2d\uff0c\u8fd4\u56de\u4fe1\u606f\u90fd\u4f1a\u643a\u5e26\u4efb\u52a1\u7684\u552f\u4e00\u6807\u8bc6\u4fe1\u606f\uff0c\u6839\u636e\u4efb\u52a1\u7684\u6807\u8bc6\u4fe1\u606f\uff0c\u5165\u53e3\u5fae\u670d\u52a1\u5c06\u8fd9\u4e9b\u4fe1\u606f\u6b63\u786e\u5730\u8fdb\u884c\u5904\u7406\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"9.\u4efb\u52a1\u7684\u5b8c\u6210")),(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u5728\u6267\u884c\u5f15\u64ce\u4e0a\u8fd0\u884c\u5b8c\u6bd5\u4e4b\u540e\uff0c\u4f1a\u5c06\u8fd0\u884c\u6210\u529f\u6216\u8005\u5931\u8d25\u7684\u72b6\u6001\u4fe1\u606f\u8fd4\u56de\u7ed9\u5165\u53e3\u5fae\u670d\u52a1\uff0c\u5165\u53e3\u5fae\u670d\u52a1\u4e2d\u7684\u4efb\u52a1\u72b6\u6001\u7ffb\u8f6c\u4e4b\u540e\uff0c\u6d88\u8d39\u961f\u5217\u4f1a\u7ee7\u7eed\u6d88\u8d39\u5728\u961f\u5217\u4e2d\u7684\u4efb\u52a1\u3002"))),(0,a.kt)("h3",{id:"32-\u67b6\u6784\u7684\u7ec6\u8282\u4ee5\u53ca\u4f18\u5316"},"3.2 \u67b6\u6784\u7684\u7ec6\u8282\u4ee5\u53ca\u4f18\u5316"),(0,a.kt)("p",null,"\u96643.1\u5c0f\u8282\u4e2d\u63cf\u8ff0\u7684\u4e3b\u6d41\u7a0b\u4e4b\u5916\uff0cUJES\u5728\u96c6\u7fa4\u7ba1\u7406\u548c\u6027\u80fd\u63d0\u4f18\u65b9\u9762\u4e5f\u6709\u81ea\u5df1\u7684\u5904\u7406\u6d41\u7a0b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"1. \u4efb\u52a1\u5206\u7c7b\u4e0e\u591a\u6837\u7684\u6d88\u8d39\u65b9\u5f0f")),(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u53ef\u4ee5\u6309\u7167\u81ea\u8eab\u7684\u7279\u70b9\u53ef\u4ee5\u5206\u7c7b\u6210\u4ee5\u4e0b\u51e0\u7c7b:\u5168\u65b0\u4efb\u52a1\u3001\u91cd\u8bd5\u4efb\u52a1\u3001\u91cd\u590d\u4efb\u52a1\u7b49\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5168\u65b0\u4efb\u52a1\u662f\u6307\u7528\u6237\u65b0\u63d0\u4ea4\u7684\u4efb\u52a1\uff0c\u91cd\u8bd5\u4efb\u52a1\u662f\u6307\u5728\u67d0\u4e9b\u7279\u5b9a\u60c5\u51b5\u4e0b\u8fd0\u884c\u5931\u8d25\u9700\u8981\u8fdb\u884c\u91cd\u8bd5\u7684\u4efb\u52a1\uff0c\u91cd\u590d\u4efb\u52a1\u662f\u6307\u4e0e\u4ee5\u524d\u63d0\u4ea4\u4efb\u52a1\u662f\u4e00\u81f4\u7684\u4efb\u52a1\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4efb\u52a1\u8fdb\u5165\u8c03\u5ea6\u5668\u7684\u6d88\u8d39\u961f\u5217\u4e4b\u540e\uff0c\u5982\u679c\u662f\u5168\u65b0\u4efb\u52a1\uff0c\u5c31\u4f1a\u8fdb\u5165FIFO\u7684\u6d88\u8d39\u5668(Consumer)\u8fdb\u884c\u6d88\u8d39\uff0c\u5982\u679c\u662f\u91cd\u590d\u4efb\u52a1\uff0c\u5219\u4f1a\u8fdb\u5165ReUse\u7684\u6d88\u8d39\u5668\u8fdb\u884c\u6d88\u8d39\uff0cReUse\u7684\u6d88\u8d39\u5668\u6240\u505a\u7684\u4e8b\u60c5\u5c31\u4f1a\u6bd4FIFO\u7b80\u5355\u5f88\u591a\uff0c\u53ea\u9700\u8981\u5c06\u539f\u6765\u4e00\u6837\u7684\u4efb\u52a1\u7684\u7ed3\u679c\u8fd4\u56de\u7ed9\u7528\u6237\u5c31\u884c\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"2. \u5f15\u64ce\u5e76\u53d1\u6570\u7684\u63a7\u5236")),(0,a.kt)("p",{parentName:"li"},"UJES\u4e2d\uff0c\u4e00\u4e2a\u7528\u6237\u53ef\u4ee5\u542f\u52a8\u7684\u5f15\u64ce\u662f\u53d7\u5230\u63a7\u5236\u7684\uff0c\u4f8b\u5982\u4e00\u4e2a\u7528\u6237\u6700\u591a\u53ef\u4ee5\u542f\u52a83\u4e2aSpark\u5f15\u64ce\u3002\u5e76\u53d1\u6570\u7684\u63a7\u5236\u662f\u5728\u5165\u53e3\u5fae\u670d\u52a1\u548c\u8d44\u6e90\u7ba1\u7406\u5668\u5fae\u670d\u52a1\u4e24\u8005\u53cc\u91cd\u4fdd\u8bc1\u8fdb\u884c\u63a7\u5236\u7684\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5165\u53e3\u5fae\u670d\u52a1\u4e2d\uff0c\u6bcf\u4e2a\u7528\u6237\u7684\u6d88\u8d39\u7ebf\u7a0b\u81f3\u591a\u53ea\u67093\u4e2a\u5904\u4e8e\u8fd0\u884c\u4e2d\u7684\u4efb\u52a1\uff0c\u8fd9\u6837\u6700\u591a\u5c31\u53ea\u4f1a\u4f7f\u7528\u4e09\u4e2a\u5f15\u64ce\u3002\u8d44\u6e90\u7ba1\u7406\u5fae\u670d\u52a1\u4e5f\u505a\u4e86\u8fd9\u6837\u7684\u4fdd\u8bc1\uff0c\u5982\u679c\u4e00\u4e2a\u7528\u6237\u8981\u542f\u52a8\u7b2c\u56db\u4e2a\u5f15\u64ce\uff0c\u5f15\u64ce\u7ba1\u7406\u5668\u9700\u8981\u4e3a\u8fd9\u4e2a\u7528\u6237\u53bb\u5411\u8d44\u6e90\u7ba1\u7406\u5fae\u670d\u52a1\u8bf7\u6c42\u8d44\u6e90\uff0c\u8d44\u6e90\u7ba1\u7406\u5fae\u670d\u52a1\u4f1a\u4ee5\u5f15\u64ce\u6570\u91cf\u8d85\u8fc7\u9650\u5236\u4e3a\u7531\u62d2\u7edd\u4e3a\u8be5\u7528\u6237\u63d0\u4f9b\u8d44\u6e90\uff0c\u7b2c\u56db\u4e2a\u5f15\u64ce\u5c31\u4f1a\u542f\u52a8\u5931\u8d25\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"3. \u6267\u884c\u5f15\u64ce\u7684\u5fc3\u8df3\u7ef4\u7cfb\u4e0e\u4e0d\u5065\u5eb7\u5f15\u64ce")),(0,a.kt)("p",{parentName:"li"},"\u5e94\u7528\u7ba1\u7406\u5fae\u670d\u52a1\u5728\u83b7\u53d6\u5230\u5f15\u64ce\u4fe1\u606f\u4e4b\u540e\uff0c\u9700\u8981\u548c\u5f15\u64ce\u8fdb\u884c\u5fc3\u8df3\u7684\u7ef4\u7cfb\uff0c\u4ee5\u786e\u4fdd\u5f15\u64ce\u7684\u8fdb\u7a0b\u662f\u4ecd\u7136\u5b58\u5728\u7684\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u5f15\u64ce\u4e00\u6bb5\u65f6\u95f4\u5185\u6ca1\u6709\u5fc3\u8df3\u8fd4\u56de\uff0c\u5c31\u4f1a\u5c06\u8be5\u5f15\u64ce\u52a0\u5165\u4e0d\u5065\u5eb7\u5f15\u64ce\u91cc\u9762\uff0c\u8fd9\u6837\u5165\u53e3\u8bf7\u6c42\u5f15\u64ce\u7684\u65f6\u5019\uff0c\u8fd9\u4e9b\u4e0d\u5065\u5eb7\u5f15\u64ce\u5c06\u4e0d\u4f1a\u88ab\u4f7f\u7528\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"4.\u5f15\u64ce\u7684\u81ea\u7136\u6d88\u4ea1\u4e0e\u7528\u6237\u4e3b\u52a8\u6740\u6b7b")),(0,a.kt)("p",{parentName:"li"},"\u5f15\u64ce\u7684\u5b58\u5728\u662f\u4f1a\u5360\u7528\u96c6\u7fa4\u8d44\u6e90\u7684\uff0c\u7279\u522b\u662fSpark\u5f15\u64ce\u4f1a\u5360\u7528\u8f83\u591a\u7684\u961f\u5217\u8d44\u6e90\uff0c\u6240\u4ee5\u5982\u679c\u5f15\u64ce\u7ba1\u7406\u5668\u68c0\u6d4b\u5230\u4e00\u4e2a\u6267\u884c\u5f15\u64ce\u957f\u65f6\u95f4\u6ca1\u6709\u88ab\u4f7f\u7528\uff0c\u90a3\u4e48\u9700\u8981\u5c06\u8be5\u5f15\u64ce\u8fdb\u884c\u6740\u6b7b\uff0c\u91ca\u653e\u96c6\u7fa4\u7684\u8d44\u6e90\uff0c\u6b63\u786e\u6740\u6b7b\u5f15\u64ce\u4e4b\u540e\u9700\u8981\u5411\u5e94\u7528\u7ba1\u7406\u5668\u8fdb\u884c\u5e7f\u64ad\u3002"),(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u5728\u4f7f\u7528UJES\u7684\u65f6\u5019\u4e5f\u4f1a\u6709\u4e3b\u52a8kill\u5f15\u64ce\u7684\u610f\u613f\uff0c\u7528\u6237\u63d0\u4ea4\u6740\u6b7b\u5f15\u64ce\u7684Restful\u8bf7\u6c42\u5230\u7f51\u5173\uff0c\u7f51\u5173\u8f6c\u53d1\u5230\u5f15\u64ce\u7ba1\u7406\u5668\uff0c\u5f15\u64ce\u7ba1\u7406\u5668\u5bf9\u5f15\u64ce\u8fdb\u884c\u6740\u6b7b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"5. \u591a\u79df\u6237\u9694\u79bb")),(0,a.kt)("p",{parentName:"li"},"\u591a\u79df\u6237\u9694\u79bb\u662f\u5927\u6570\u636e\u529f\u80fd\u5e73\u53f0\u7684\u4e00\u4e2a\u91cd\u8981\u529f\u80fd\uff0cUJES\u914d\u5408hadoop\u751f\u6001\u5708\u7ec4\u4ef6\u7684\u6743\u9650\u7ba1\u7406\u4ece\u67b6\u6784\u4e0a\u5c31\u5929\u7136\u652f\u6301\u591a\u79df\u6237\u9694\u79bb\u3002"),(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u4f5c\u4e1a\u662f\u5728\u6267\u884c\u5f15\u64ce\u4e0a\u8fdb\u884c\u6267\u884c\uff0cUJES\u7684\u8d44\u6e90\u7ba1\u7406\u5fae\u670d\u52a1\u5728\u542f\u52a8\u4e00\u4e2a\u65b0\u7684\u6267\u884c\u5f15\u64ce\u7684\u65f6\u5019\uff0c\u4f1a\u5207\u6362\u5230\u8be5\u7528\u6237\u53bb\u6267\u884c\u7cfb\u7edf\u547d\u4ee4\uff0c\u8fd9\u6837\u6267\u884c\u5f15\u64ce\u8fdb\u7a0b\u7684\u6743\u9650\u5c31\u662f\u8be5\u7528\u6237\u7684\u6743\u9650\uff0c\u4e0e\u5176\u4ed6\u7528\u6237\u542f\u52a8\u7684\u5f15\u64ce\u662f\u5b8c\u5168\u9694\u79bb\u7684\uff0c\u8fd9\u6837\u5c31\u5b9e\u73b0\u4e86\u591a\u79df\u6237\u9694\u79bb\u7684\u529f\u80fd\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"6. \u667a\u80fd\u8bca\u65ad")),(0,a.kt)("p",{parentName:"li"},"\u667a\u80fd\u8bca\u65ad\u662fUJES\u7684\u4e00\u4e2a\u8c03\u4f18\u6a21\u5757\uff0c\u5927\u6570\u636e\u4f5c\u4e1a\u5728\u6267\u884c\u7684\u65f6\u5019\u5f80\u5f80\u4f1a\u7528\u5230\u5927\u91cf\u6570\u636e\u505a\u8ba1\u7b97\uff0c\u540c\u65f6\u4e5f\u4f1a\u9700\u8981\u96c6\u7fa4\u4e2d\u5927\u91cf\u7684\u8d44\u6e90\uff0c\u4e00\u4e2a\u4f5c\u4e1a\u7684\u6267\u884c\u65f6\u95f4\u4f1a\u9700\u8981\u8f83\u957f\u7684\u65f6\u95f4\u3002"),(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u603b\u662f\u5e0c\u671b\u80fd\u591f\u5f97\u5230\u96c6\u7fa4\u7684\u53cd\u9988\uff0c\u6bd4\u5982\u6570\u636e\u662f\u5426\u662f\u503e\u659c\uff0c\u961f\u5217\u8d44\u6e90\u662f\u5426\u662f\u8db3\u591f\u7b49\u3002"),(0,a.kt)("p",{parentName:"li"},"\u667a\u80fd\u8bca\u65ad\u5c31\u662f\u4e3a\u8fd9\u79cd\u9700\u6c42\u6240\u8bbe\u5b9a\u7684\uff0c\u8bca\u65ad\u6a21\u5757\u53ef\u4ee5\u5728\u4f5c\u4e1a\u8fd0\u884c\u65f6\u5bf9\u7528\u6237\u4f5c\u4e1a\u7684\u8d44\u6e90\u548c\u6570\u636e\u8fdb\u884c\u5206\u6790\uff0c\u5e76\u628a\u5206\u6790\u7684\u5185\u5bb9\u5b9e\u65f6\u63a8\u9001\u7ed9\u7528\u6237\u3002"))),(0,a.kt)("h2",{id:"4-\u63a5\u53e3\u8bbe\u8ba1"},"4 \u63a5\u53e3\u8bbe\u8ba1"),(0,a.kt)("h3",{id:"41-\u5bf9\u5916\u63a5\u53e3\u8bbe\u8ba1"},"4.1 \u5bf9\u5916\u63a5\u53e3\u8bbe\u8ba1"),(0,a.kt)("p",null,"UJES\u5bf9\u5916\u63a5\u53e3\u662f\u6307\u4e0e\u7528\u6237\u4f7f\u7528\u548c\u4e0e\u96c6\u7fa4\u7684\u63a5\u53e3\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"1 \u7528\u6237\u63a5\u53e3")),(0,a.kt)("p",{parentName:"li"},"UJES\u7684\u4f7f\u7528\u7528\u6237\u63a5\u5165UJES\u7684\u65b9\u5f0f\u4e00\u822c\u6709Restful\u3001WebSocket\u4e24\u79cd\u65b9\u5f0f\u3002"),(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u9700\u8981\u5c06\u81ea\u5df1\u7684\u8bf7\u6c42\u6309\u7167\u89c4\u5b9a\u7684\u683c\u5f0f\u5c01\u88c5\u6210Json\uff0c\u7136\u540e\u901a\u8fc7post\u7684\u65b9\u5f0f\u63d0\u4ea4\u81ea\u5df1\u7684\u8bf7\u6c42\u3002"),(0,a.kt)("p",{parentName:"li"},"\u63a8\u8350\u7528\u6237\u4f7f\u7528\u91c7\u7528\u57fa\u4e8eweb\u7684\u65b9\u5f0f\u63a5\u5165UJES\u3002\u6570\u636e\u4ea4\u6362\u7684\u89c4\u8303\u4f1a\u5728\u6587\u540e\u7ed9\u51fa\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"2 \u96c6\u7fa4\u63a5\u53e3")),(0,a.kt)("p",{parentName:"li"},"UJES\u4e0e\u96c6\u7fa4\u7684\u4ea4\u4e92\u65b9\u5f0f\u662f\u6839\u636e\u5f15\u64ce\u7c7b\u578b\u51b3\u5b9a\u7684\u3002"),(0,a.kt)("p",{parentName:"li"},"\u5982\u56fe2.1\u6240\u793a\uff0cUJES\u7684\u6267\u884c\u5f15\u64ce\u662f\u6a2a\u8de8\u4e86UJES\u548c\u96c6\u7fa4\u4e24\u4e2a\u5c42\u9762\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4e3e\u4e00\u4e2a\u4f8b\u5b50\uff0cSpark\u6267\u884c\u5f15\u64ce\u662f\u901a\u8fc7Spark\u63d0\u4f9b\u7684Driver API\u4e0e\u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,a.kt)("p",{parentName:"li"},"\u7528\u6237\u5728\u4f7f\u7528UJES\u6846\u67b6\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u7684\u9700\u6c42\u548c\u7279\u70b9\u8fdb\u884c\u5bf9\u96c6\u7fa4\u6216\u8005\u662f\u5176\u4ed6\u670d\u52a1\u5668\u8d44\u6e90\u8fdb\u884c\u63a5\u53e3\u63a5\u5165\u3002"))),(0,a.kt)("h3",{id:"42-\u6846\u67b6\u63a5\u5165\u63a5\u53e3\u8bbe\u8ba1"},"4.2 \u6846\u67b6\u63a5\u5165\u63a5\u53e3\u8bbe\u8ba1"),(0,a.kt)("p",null,"UJES\u4f5c\u4e3a\u4e00\u4e2a\u6846\u67b6\uff0c\u6846\u67b6\u5f00\u53d1\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u8fdb\u884c\u63a5\u5165\u5f00\u53d1\u3002"),(0,a.kt)("p",null,"\u6846\u67b6\u7684\u63a5\u5165\u4e00\u822c\u91c7\u7528SDK\u7684\u65b9\u5f0f\uff0c\u7528\u6237\u901a\u8fc7maven\u6216gradle\u7b49\u4f9d\u8d56\u7ba1\u7406\u5f15\u5165UJES\u7684SDK\u4e4b\u540e\uff0c\u9700\u8981\u5b9e\u73b0\u4ee5\u4e0b\u51e0\u4e2a\u63a5\u53e3\u5c31\u53ef\u4ee5\u4f7f\u7528UJES\u6846\u67b6\u3002"),(0,a.kt)("p",null,"1) \u5165\u53e3\u5fae\u670d\u52a1\u63a5\u5165\u63a5\u53e3"),(0,a.kt)("p",null,"2) \u5f15\u64ce\u7ba1\u7406\u5668\u63a5\u5165\u63a5\u53e3"),(0,a.kt)("p",null,"3) \u5f15\u64ce\u63a5\u5165\u63a5\u53e3"),(0,a.kt)("p",null,"\u5177\u4f53\u53ef\u4ee5\u67e5\u770bUJES\u7684\u63a5\u5165\u6587\u6863\u3002"),(0,a.kt)("h3",{id:"43-\u5185\u90e8\u529f\u80fd\u6a21\u5757\u63a5\u53e3\u8bbe\u8ba1"},"4.3 \u5185\u90e8\u529f\u80fd\u6a21\u5757\u63a5\u53e3\u8bbe\u8ba1"),(0,a.kt)("p",null,"UJES\u5185\u90e8\u529f\u80fd\u6a21\u5757\u4e4b\u95f4\u7684\u4ea4\u4e92\u91c7\u7528\u4e86\u81ea\u7814\u7684\u57fa\u4e8eFeign\u7684RPC\u65b9\u5f0f\uff0cLinkis RPC\u67b6\u6784\u4ecb\u7ecd\u8bf7",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.11.0/architecture/commons/rpc"},"\u70b9\u51fb\u8fd9\u91cc"),"\u3002"),(0,a.kt)("p",null,"UJES\u7684Entrance\u3001EngineManager\u548cEngine\u90fd\u662f\u901a\u8fc7Linkis PRC\u8fdb\u884c\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"\u7279\u522b\u662fEntrance\u548cEngine\u4e4b\u95f4\u7684\u4ea4\u4e92\u3002Entrance\u901a\u8fc7Sender\u5c06\u7528\u6237\u8bf7\u6c42\u53d1\u9001\u7ed9Engine\u7684Receiver\uff0cEngine Receiver\u5c06\u53d1\u9001\u7aefEntrance\u7684Sender\u4fdd\u5b58\u5230\u5185\u5b58\uff0c\u5e76\u63d0\u4ea4\u6267\u884c\u7528\u6237\u8bf7\u6c42\uff0c\u4e00\u65e6\u6709\u65e5\u5fd7/\u8fdb\u5ea6/\u72b6\u6001\u4ea7\u751f\uff0c\u7acb\u9a6c\u901a\u8fc7\u7f13\u5b58\u7684Entrance Sender\uff0c\u5c06\u4fe1\u606f\u56de\u4f20\u7ed9Entrance\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"RPC\u6846\u67b6",src:n(49746).Z}),(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"5-\u90e8\u7f72\u67b6\u6784"},"5 \u90e8\u7f72\u67b6\u6784"),(0,a.kt)("h3",{id:"51-\u4f20\u7edf\u90e8\u7f72\u65b9\u5f0f"},"5.1 \u4f20\u7edf\u90e8\u7f72\u65b9\u5f0f"),(0,a.kt)("p",null,"\u8bf7\u67e5\u770b",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/0.11.0/deployment/quick-deploy"},"\u5feb\u901f\u90e8\u7f72\u6587\u6863"),"\u3002"))}o.isMDXComponent=!0},49746:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rpc_framework-30c495aad4c29e773aee743e92223228.png"},47663:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ujes_logical_architecture_diagram-82b7b1edbadeb689c1304385f821fa03.png"},82856:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ujes_overall_architecture_diagram-f7182d03c89b154dfda22d84a64de8d4.png"}}]);