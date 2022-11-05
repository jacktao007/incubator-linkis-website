"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[28044],{3905:(t,n,e)=>{e.d(n,{Zo:()=>m,kt:()=>y});var a=e(67294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function d(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=a.createContext({}),p=function(t){var n=a.useContext(u),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},m=function(t){var n=p(t.components);return a.createElement(u.Provider,{value:n},t.children)},o={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),k=p(e),y=r,g=k["".concat(u,".").concat(y)]||k[y]||o[y]||l;return e?a.createElement(g,i(i({ref:n},m),{},{components:e})):a.createElement(g,i({ref:n},m))}));function y(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var d={};for(var u in n)hasOwnProperty.call(n,u)&&(d[u]=n[u]);d.originalType=t,d.mdxType="string"==typeof t?t:r,i[1]=d;for(var p=2;p<l;p++)i[p]=e[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}k.displayName="MDXCreateElement"},86236:(t,n,e)=>{e.r(n),e.d(n,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=e(87462),r=(e(67294),e(3905));const l={title:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u8bbe\u8ba1",sidebar_position:1},i=void 0,d={unversionedId:"architecture/commons/variable",id:"version-1.3.0/architecture/commons/variable",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u8bbe\u8ba1",description:"1. \u603b\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/architecture/commons/variable.md",sourceDirName:"architecture/commons",slug:"/architecture/commons/variable",permalink:"/zh-CN/docs/latest/architecture/commons/variable",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.3.0/architecture/commons/variable.md",tags:[],version:"1.3.0",sidebarPosition:1,frontMatter:{title:"\u81ea\u5b9a\u4e49\u53d8\u91cf\u8bbe\u8ba1",sidebar_position:1},sidebar:"version-1.3.0/tutorialSidebar",previous:{title:"Linkis1.0 \u4e0e Linkis0.X \u7684\u533a\u522b\u7b80\u8ff0",permalink:"/zh-CN/docs/latest/architecture/difference-between-1.0-and-0.x"},next:{title:"RPC \u6a21\u5757",permalink:"/zh-CN/docs/latest/architecture/commons/rpc"}},u=[{value:"1. \u603b\u8ff0",id:"1-\u603b\u8ff0",children:[{value:"\u9700\u6c42\u80cc\u666f",id:"\u9700\u6c42\u80cc\u666f",children:[]},{value:"\u76ee\u6807",id:"\u76ee\u6807",children:[]}]},{value:"2. \u603b\u4f53\u8bbe\u8ba1",id:"2-\u603b\u4f53\u8bbe\u8ba1",children:[{value:"2.1 \u6280\u672f\u67b6\u6784",id:"21-\u6280\u672f\u67b6\u6784",children:[]},{value:"3 \u529f\u80fd\u4ecb\u7ecd",id:"3-\u529f\u80fd\u4ecb\u7ecd",children:[]},{value:"3.1 \u5185\u7f6e\u53d8\u91cf",id:"31-\u5185\u7f6e\u53d8\u91cf",children:[]},{value:"3.2 \u81ea\u5b9a\u4e49\u53d8\u91cf",id:"32-\u81ea\u5b9a\u4e49\u53d8\u91cf",children:[]},{value:"3.3 \u53d8\u91cf\u4f5c\u7528\u57df",id:"33-\u53d8\u91cf\u4f5c\u7528\u57df",children:[]}]}],p={toc:u};function m(t){let{components:n,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u603b\u8ff0"},"1. \u603b\u8ff0"),(0,r.kt)("h3",{id:"\u9700\u6c42\u80cc\u666f"},"\u9700\u6c42\u80cc\u666f"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u7528\u6237\u5e0c\u671b\u5728\u5199\u4ee3\u7801\u65f6\uff0c\u80fd\u591f\u5b9a\u4e49\u4e00\u4e9b\u516c\u5171\u53d8\u91cf\u7136\u540e\u6267\u884c\u7684\u65f6\u5019\u8fdb\u884c\u66ff\u6362\uff0c\u6bd4\u5982\u7528\u6237\u6bcf\u5929\u90fd\u4f1a\u6279\u91cf\u8dd1\u540c\u4e00\u6bb5sql\uff0c\u9700\u8981\u6307\u5b9a\u4e0a\u4e00\u5929\u7684\u5206\u533a\u65f6\u95f4\uff0c\u5982\u679c\u57fa\u4e8esql\u53bb\u5199\u4f1a\u6bd4\u8f83\u590d\u6742\u5982\u679c\u7cfb\u7edf\u63d0\u4f9b\u4e00\u4e2arun_date\u7684\u53d8\u91cf\u5c06\u4f1a\u975e\u5e38\u65b9\u4fbf\u4f7f\u7528\u3002"),(0,r.kt)("h3",{id:"\u76ee\u6807"},"\u76ee\u6807"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301\u4efb\u52a1\u4ee3\u7801\u7684\u53d8\u91cf\u66ff\u6362"),(0,r.kt)("li",{parentName:"ol"},"\u652f\u6301\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u652f\u6301\u7528\u6237\u5728\u811a\u672c\u548c\u63d0\u4ea4\u7ed9Linkis\u7684\u4efb\u52a1\u53c2\u6570\u5b9a\u4e49\u81ea\u5b9a\u4e49\u53d8\u91cf\uff0c\u652f\u6301\u7b80\u5355\u7684+\uff0c-\u7b49\u8ba1\u7b97"),(0,r.kt)("li",{parentName:"ol"},"\u9884\u8bbe\u7f6e\u7cfb\u7edf\u53d8\u91cf\uff1arun_date,run_month\uff0crun_today\u7b49\u7cfb\u7edf\u53d8\u91cf")),(0,r.kt)("h2",{id:"2-\u603b\u4f53\u8bbe\u8ba1"},"2. \u603b\u4f53\u8bbe\u8ba1"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u5728Linkis\u4efb\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u81ea\u5b9a\u4e49\u53d8\u91cf\u5728Entrance\u8fdb\u884c\uff0c\u4e3b\u8981\u901a\u8fc7Entrance\u5728\u4efb\u52a1\u63d0\u4ea4\u6267\u884c\u524d\u7684\u62e6\u622a\u5668\u8fdb\u884c\u62e6\u622a\u66ff\u6362\u5b9e\u73b0\uff0c\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u83b7\u53d6\u5230\u4efb\u52a1\u4ee3\u7801\u4e2d\u4f7f\u7528\u5230\u7684\u53d8\u91cf\u548c\u5b9a\u4e49\u7684\u53d8\u91cf\uff0c\u5e76\u901a\u8fc7\u4efb\u52a1\u4f20\u5165\u7684\u81ea\u5b9a\u4e49\u53d8\u91cf\u521d\u59cb\u503c\u5b8c\u6210\u4ee3\u7801\u7684\u66ff\u6362\uff0c\u53d8\u6210\u6700\u7ec8\u53ef\u4ee5\u6267\u884c\u7684\u4ee3\u7801\u3002"),(0,r.kt)("h3",{id:"21-\u6280\u672f\u67b6\u6784"},"2.1 \u6280\u672f\u67b6\u6784"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u81ea\u5b9a\u4e49\u53d8\u91cf\u6574\u4f53\u67b6\u6784\u5982\u4e0b\uff0c\u7528\u4e8e\u4efb\u52a1\u63d0\u4ea4\u8fc7\u6765\u540e\uff0c\u4f1a\u7ecf\u8fc7\u53d8\u91cf\u66ff\u6362\u62e6\u622a\u5668\u3002\u9996\u5148\u4f1a\u89e3\u6790\u51fa\u6240\u6709\u4ee3\u7801\u4e2d\u7528\u5230\u7684\u53d8\u91cf\u548c\u8868\u8fbe\u5f0f\uff0c\u7136\u540e\u901a\u8fc7\u548c\u7cfb\u7edf\u4ee5\u53ca\u7528\u6237\u81ea\u5b9a\u4e49\u7684\u53d8\u91cf\u521d\u59cb\u503c\u8fdb\u884c\u66ff\u6362\uff0c\u6700\u7ec8\u5c06\u89e3\u6790\u540e\u7684\u4ee3\u7801\u63d0\u4ea4\u7ed9EngineConn\u6267\u884c\u3002\u6240\u4ee5\u5230\u5e95\u5c42\u5f15\u64ce\u5df2\u7ecf\u662f\u66ff\u6362\u597d\u7684\u4ee3\u7801\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"var_arc",src:e(67529).Z})),(0,r.kt)("h3",{id:"3-\u529f\u80fd\u4ecb\u7ecd"},"3 \u529f\u80fd\u4ecb\u7ecd"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Linkis\u652f\u6301\u7684\u53d8\u91cf\u7c7b\u578b\u5206\u4e3a\u81ea\u5b9a\u4e49\u53d8\u91cf\u548c\u7cfb\u7edf\u5185\u7f6e\u53d8\u91cf\uff0c\u5185\u90e8\u53d8\u91cf\u662fLinkis\u9884\u5148\u5b9a\u4e49\u597d\u7684\uff0c\u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u4f7f\u7528\u3002\u7136\u540e\u4e0d\u540c\u7684\u53d8\u91cf\u7c7b\u578b\u652f\u6301\u4e0d\u540c\u7684\u8ba1\u7b97\u683c\u5f0f\uff1aString\u652f\u6301+\u3001\u6574\u6570\u5c0f\u6570\u652f\u6301+-*/,\u65e5\u671f\u652f\u6301+-\u3002"),(0,r.kt)("h3",{id:"31-\u5185\u7f6e\u53d8\u91cf"},"3.1 \u5185\u7f6e\u53d8\u91cf"),(0,r.kt)("p",null,"\u76ee\u524d\u5df2\u652f\u6301\u7684\u5185\u7f6e\u53d8\u91cf\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u542b\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53d8\u91cf\u503c\u4e3e\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","date"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\uff08\u652f\u6301\u7528\u6237\u81ea\u5df1\u8bbe\u5b9a\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a\u5f53\u524d\u65f6\u95f4\u7684\u524d\u4e00\u5929\uff09\uff0c\u5982\u4eca\u5929\u6267\u884c\u6628\u5929\u7684\u6570\u636e\uff0c\u5219\u4e3a\u6628\u5929\u7684\u65f6\u95f4\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20180129")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","date","_","std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4(\u6807\u51c6\u65e5\u671f\u683c\u5f0f)\uff0c\u5982\u4eca\u5929\u6267\u884c\u6628\u5929\u6570\u636e\uff0c\u5219\u4e3a\u6628\u5929\u7684\u65f6\u95f4\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2018-01-29")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_today"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"run_date (\u6570\u636e\u7edf\u8ba1\u65f6\u95f4) \u7684\u540e\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20211210")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_today_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"run_date (\u6570\u636e\u7edf\u8ba1\u65f6\u95f4) \u7684\u540e\u4e00\u5929\uff08\u6807\u51c6\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_mon"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u6708\uff0c\u683c\u5f0f\u4e3a yyyyMM"),(0,r.kt)("td",{parentName:"tr",align:null},"202112")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_mon_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u6708\uff08\u6807\u51c6\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u6708\u7684\u7b2c\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20180101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","begin","_","std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u6708\u7684\u7b2c\u4e00\u5929(\u6807\u51c6\u65e5\u671f\u683c\u5f0f)\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2018-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"run_today \u6240\u5728\u6708\u7684\u7b2c\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20211201")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"run_today \u6240\u5728\u6708\u7684\u7b2c\u4e00\u5929\uff08\u6807\u51c6\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u6708\u7684\u6700\u540e\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20180131")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run","_","month","_","end","_","std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u6708\u7684\u6700\u540e\u4e00\u5929(\u6807\u51c6\u65e5\u671f\u683c\u5f0f)\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2018-01-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"run_today \u6240\u5728\u6708\u7684\u6700\u540e\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20211231")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_month_now_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"run_today \u6240\u5728\u6708\u7684\u6700\u540e\u4e00\u5929\uff08\u6807\u51c6\u65e5\u671f\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u5b63\u5ea6\u7684\u7b2c\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210401")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u5b63\u5ea6\u7684\u6700\u540e\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210630")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u534a\u5e74\u7684\u7b2c\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u534a\u5e74\u7684\u6700\u540e\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210630")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_begin"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u5e74\u7684\u7b2c\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20210101")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_end"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u5e74\u7684\u6700\u540e\u4e00\u5929\uff0c\u683c\u5f0f\u4e3a yyyyMMdd"),(0,r.kt)("td",{parentName:"tr",align:null},"20211231")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u5b63\u5ea6\u7684\u7b2c\u4e00\u5929\uff08\u6807\u51c6\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-10-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_quarter_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u5b63\u5ea6\u7684\u6700\u540e\u4e00\u5929\uff08\u6807\u51c6\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u534a\u5e74\u7684\u7b2c\u4e00\u5929\uff08\u6807\u51c6\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-07-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_half_year_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u534a\u5e74\u7684\u6700\u540e\u4e00\u5929\uff08\u6807\u51c6\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-31")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_begin_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u5e74\u7684\u7b2c\u4e00\u5929\uff08\u6807\u51c6\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-01-01")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"run_year_end_std"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u7edf\u8ba1\u65f6\u95f4\u6240\u5728\u5e74\u7684\u6700\u540e\u4e00\u5929\uff08\u6807\u51c6\u683c\u5f0f\uff09\uff0c\u683c\u5f0f\u4e3a yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"2021-12-31")))),(0,r.kt)("p",null,"\u5177\u4f53\u7ec6\u8282\uff1a"),(0,r.kt)("p",null,"1\u3001run_date\u4e3a\u6838\u5fc3\u81ea\u5e26\u65e5\u671f\u53d8\u91cf\uff0c\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u65e5\u671f\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u9ed8\u8ba4\u4e3a\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u7684\u524d\u4e00\u5929\u3002\n2\u3001\u5176\u4ed6\u884d\u751f\u5185\u7f6e\u65e5\u671f\u53d8\u91cf\u5b9a\u4e49\uff1a\u5176\u4ed6\u65e5\u671f\u5185\u7f6e\u53d8\u91cf\u90fd\u662f\u76f8\u5bf9run_date\u8ba1\u7b97\u51fa\u6765\u7684\uff0c\u4e00\u65e6run_date\u53d8\u5316\uff0c\u5176\u4ed6\u53d8\u91cf\u503c\u4e5f\u4f1a\u81ea\u52a8\u8ddf\u7740\u53d8\u5316\uff0c\u5176\u4ed6\u65e5\u671f\u53d8\u91cf\u4e0d\u652f\u6301\u8bbe\u7f6e\u521d\u59cb\u503c\uff0c\u53ea\u80fd\u901a\u8fc7\u4fee\u6539run_date\u8fdb\u884c\u4fee\u6539\u3002\n3\u3001\u5185\u7f6e\u53d8\u91cf\u652f\u6301\u66f4\u52a0\u4e30\u5bcc\u7684\u4f7f\u7528\u573a\u666f\uff1a${run_date-1}\u4e3arun_data\u7684\u524d\u4e00\u5929\uff1b${run_month_begin-1}\u4e3arun_month_begin\u7684\u4e0a\u4e2a\u6708\u7684\u7b2c\u4e00\u5929\uff0c\u8fd9\u91cc\u7684-1\u8868\u793a\u51cf\u4e00\u4e2a\u6708\u3002"),(0,r.kt)("h3",{id:"32-\u81ea\u5b9a\u4e49\u53d8\u91cf"},"3.2 \u81ea\u5b9a\u4e49\u53d8\u91cf"),(0,r.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49\u53d8\u91cf\uff1f\u5148\u5b9a\u4e49\uff0c\u540e\u4f7f\u7528\u7684\u7528\u6237\u53d8\u91cf\u3002\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\u6682\u65f6\u652f\u6301\u5b57\u7b26\u4e32\uff0c\u6574\u6570\uff0c\u6d6e\u70b9\u6570\u53d8\u91cf\u7684\u5b9a\u4e49\uff0c\u5176\u4e2d\u5b57\u7b26\u4e32\u652f\u6301+\u6cd5\uff0c\u6574\u6570\u548c\u6d6e\u70b9\u6570\u652f\u6301+-*/\u65b9\u6cd5\u3002\u7528\u6237\u81ea\u5b9a\u4e49\u53d8\u91cf\u4e0eSparkSQL\u548cHQL\u672c\u8eab\u652f\u6301\u7684set\u53d8\u91cf\u8bed\u6cd5\u4e0d\u51b2\u7a81\uff0c\u4f46\u662f\u4e0d\u5141\u8bb8\u540c\u540d\u3002\u5982\u4f55\u5b9a\u4e49\u548c\u4f7f\u7528\u81ea\u5b9a\u4e49\u53d8\u91cf\uff1f\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"## \u4ee3\u7801\u4e2d\u5b9a\u4e49\uff0c\u5728\u4efb\u52a1\u4ee3\u7801\u524d\u8fdb\u884c\u6307\u5b9a\nsql\u7c7b\u578b\u5b9a\u4e49\u65b9\u5f0f\uff1a\n--@set f=20.1\npython/Shell\u7c7b\u578b\u5b9a\u4e49\u5982\u4e0b\uff1a\n#@set f=20.1\n\u6ce8\u610f\uff1a\u53ea\u652f\u6301\u4e00\u884c\u5b9a\u4e49\u4e00\u4e2a\u53d8\u91cf\n")),(0,r.kt)("p",null,"\u4f7f\u7528\u90fd\u662f\u76f4\u63a5\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"{varName\u8868\u8fbe\u5f0f},\u5982${f*2}")),(0,r.kt)("h3",{id:"33-\u53d8\u91cf\u4f5c\u7528\u57df"},"3.3 \u53d8\u91cf\u4f5c\u7528\u57df"),(0,r.kt)("p",null,"\u5728linkis\u4e2d\u81ea\u5b9a\u4e49\u53d8\u91cf\u4e5f\u6709\u4f5c\u7528\u57df\uff0c\u4f18\u5148\u7ea7\u4e3a\u811a\u672c\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u5927\u4e8e\u5728\u4efb\u52a1\u53c2\u6570\u4e2d\u5b9a\u4e49\u7684Variable\u5927\u4e8e\u5185\u7f6e\u7684run_date\u53d8\u91cf\u3002\u4efb\u52a1\u53c2\u6570\u4e2d\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'## restful\n{\n    "executionContent": {"code": "select \\"${f-1}\\";", "runType":  "sql"},\n    "params": {\n                    "variable": {f: "20.1"},\n                    "configuration": {\n                            "runtime": {\n                                "linkis.openlookeng.url":"http://127.0.0.1:9090"\n                                }\n                            }\n                    },\n    "source":  {"scriptPath": "file:///mnt/bdp/hadoop/1.sql"},\n    "labels": {\n        "engineType": "spark-2.4.3",\n        "userCreator": "hadoop-IDE"\n    }\n}\n## java SDK\nJobSubmitAction.builder\n  .addExecuteCode(code)\n  .setStartupParams(startupMap)\n  .setUser(user) //submit user\n  .addExecuteUser(user) //execute user\n  .setLabels(labels)\n  .setVariableMap(varMap) //setVar\n  .build\n')))}m.isMDXComponent=!0},67529:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/var_arc-c922fa1f418fb6125ecc7d0af1534c3c.png"}}]);