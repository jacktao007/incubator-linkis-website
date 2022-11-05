"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[16476],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(t),g=i,h=c["".concat(p,".").concat(g)]||c[g]||u[g]||a;return t?r.createElement(h,l(l({ref:n},d),{},{components:t})):r.createElement(h,l({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},42499:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={title:"Hive \u5f15\u64ce",sidebar_position:2},l=void 0,o={unversionedId:"engine-usage/hive",id:"version-1.1.3/engine-usage/hive",isDocsHomePage:!1,title:"Hive \u5f15\u64ce",description:"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X \u4e2d\uff0cHive\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/engine-usage/hive.md",sourceDirName:"engine-usage",slug:"/engine-usage/hive",permalink:"/zh-CN/docs/1.1.3/engine-usage/hive",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.3/engine-usage/hive.md",tags:[],version:"1.1.3",sidebarPosition:2,frontMatter:{title:"Hive \u5f15\u64ce",sidebar_position:2},sidebar:"version-1.1.3/tutorialSidebar",previous:{title:"Spark \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.3/engine-usage/spark"},next:{title:"Python \u5f15\u64ce",permalink:"/zh-CN/docs/1.1.3/engine-usage/python"}},p=[{value:"1.Hive\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",id:"1hive\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e",children:[]},{value:"2.Hive\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",id:"2hive\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72",children:[{value:"2.1 Hive\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",id:"21-hive\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1",children:[]},{value:"2.2 hive engineConn\u90e8\u7f72\u548c\u52a0\u8f7d",id:"22-hive-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d",children:[]},{value:"2.3 hive\u5f15\u64ce\u7684\u6807\u7b7e",id:"23-hive\u5f15\u64ce\u7684\u6807\u7b7e",children:[]}]},{value:"3.hive\u5f15\u64ce\u7684\u4f7f\u7528",id:"3hive\u5f15\u64ce\u7684\u4f7f\u7528",children:[{value:"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e",id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e",children:[]},{value:"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528",id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528",children:[]},{value:"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4",children:[]},{value:"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f",children:[]}]},{value:"4.Hive\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",id:"4hive\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e",children:[]},{value:"5.Hive\u4fee\u6539\u65e5\u5fd7\u5c55\u793a",id:"5hive\u4fee\u6539\u65e5\u5fd7\u5c55\u793a",children:[]}],s={toc:p};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u5728Linkis1.X \u4e2d\uff0cHive\u5f15\u64ce\u7684\u914d\u7f6e\u3001\u90e8\u7f72\u548c\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"1hive\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"},"1.Hive\u5f15\u64ce\u4f7f\u7528\u524d\u7684\u73af\u5883\u914d\u7f6e"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5e0c\u671b\u5728\u60a8\u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528hive\u5f15\u64ce\uff0c\u60a8\u9700\u8981\u4fdd\u8bc1\u4ee5\u4e0b\u7684\u73af\u5883\u53d8\u91cf\u5df2\u7ecf\u8bbe\u7f6e\u6b63\u786e\u5e76\u4e14\u5f15\u64ce\u7684\u542f\u52a8\u7528\u6237\u662f\u6709\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u7684\u3002"),(0,i.kt)("p",null,"\u5f3a\u70c8\u5efa\u8bae\u60a8\u5728\u6267\u884chive\u4efb\u52a1\u4e4b\u524d\uff0c\u68c0\u67e5\u4e0b\u6267\u884c\u7528\u6237\u7684\u8fd9\u4e9b\u73af\u5883\u53d8\u91cf\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u73af\u5883\u53d8\u91cf\u5185\u5bb9"),(0,i.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JAVA_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"JDK\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_HOME"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u5b89\u88c5\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HADOOP_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Hadoop\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HIVE_CONF_DIR"),(0,i.kt)("td",{parentName:"tr",align:null},"Hive\u914d\u7f6e\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b")))),(0,i.kt)("p",null,"\u88681-1 \u73af\u5883\u914d\u7f6e\u6e05\u5355"),(0,i.kt)("h2",{id:"2hive\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"},"2.Hive\u5f15\u64ce\u7684\u914d\u7f6e\u548c\u90e8\u7f72"),(0,i.kt)("h3",{id:"21-hive\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"},"2.1 Hive\u7248\u672c\u7684\u9009\u62e9\u548c\u7f16\u8bd1"),(0,i.kt)("p",null,"Hive\u7684\u7248\u672c\u662f\u652f\u6301hive1.x\u548chive2.x\uff0c\u9ed8\u8ba4\u662f\u652f\u6301hive on MapReduce\uff0c\u5982\u679c\u60a8\u60f3\u6539\u6210Hive\non Tez\uff0c\u9700\u8981\u60a8\u6309\u7167\u6b64pr\u8fdb\u884c\u4e00\u4e0b\u4fee\u6539\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis/pull/541"},"https://github.com/apache/incubator-linkis/pull/541")),(0,i.kt)("p",null,"\u9ed8\u8ba4\u652f\u6301\u7684hive\u7248\u672c\u662f1.2.1,\u5982\u679c\u60a8\u60f3\u4fee\u6539hive\u7684\u7248\u672c\uff0c\u6bd4\u5982\u60f3\u8981\u4fee\u6539\u62102.3.3\uff0c\u60a8\u53ef\u4ee5\u627e\u5230linkis-engineplugin-hive\u6a21\u5757\uff0c\u5c06\\<hive.version",">","\u6807\u7b7e\u8fdb\u884c\u6539\u62102.3.3\uff0c\u7136\u540e\u5355\u72ec\u7f16\u8bd1\u6b64\u6a21\u5757\u5373\u53ef"),(0,i.kt)("h3",{id:"22-hive-engineconn\u90e8\u7f72\u548c\u52a0\u8f7d"},"2.2 hive engineConn\u90e8\u7f72\u548c\u52a0\u8f7d"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u4e86\u60a8\u7684hive\u5f15\u64ce\u7684\u63d2\u4ef6\u5df2\u7ecf\u7f16\u8bd1\u5b8c\u6210\uff0c\u90a3\u4e48\u60a8\u9700\u8981\u5c06\u65b0\u7684\u63d2\u4ef6\u653e\u7f6e\u5230\u6307\u5b9a\u7684\u4f4d\u7f6e\u4e2d\u624d\u80fd\u52a0\u8f7d\uff0c\u5177\u4f53\u53ef\u4ee5\u53c2\u8003\u4e0b\u9762\u8fd9\u7bc7\u6587\u7ae0"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5")," "),(0,i.kt)("h3",{id:"23-hive\u5f15\u64ce\u7684\u6807\u7b7e"},"2.3 hive\u5f15\u64ce\u7684\u6807\u7b7e"),(0,i.kt)("p",null,"Linkis1.X\u662f\u901a\u8fc7\u6807\u7b7e\u6765\u8fdb\u884c\u7684\uff0c\u6240\u4ee5\u9700\u8981\u5728\u6211\u4eec\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u63d2\u5165\u7684\u65b9\u5f0f\u5982\u4e0b\u6587\u6240\u793a\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../deployment/engine-conn-plugin-installation"},"EngineConnPlugin\u5f15\u64ce\u63d2\u4ef6\u5b89\u88c5 > 2.2 \u7ba1\u7406\u53f0Configuration\u914d\u7f6e\u4fee\u6539\uff08\u53ef\u9009\uff09")," "),(0,i.kt)("h2",{id:"3hive\u5f15\u64ce\u7684\u4f7f\u7528"},"3.hive\u5f15\u64ce\u7684\u4f7f\u7528"),(0,i.kt)("h3",{id:"\u51c6\u5907\u64cd\u4f5c\u961f\u5217\u8bbe\u7f6e"},"\u51c6\u5907\u64cd\u4f5c\uff0c\u961f\u5217\u8bbe\u7f6e"),(0,i.kt)("p",null,"hive\u7684MapReduce\u4efb\u52a1\u662f\u9700\u8981\u7528\u5230yarn\u7684\u8d44\u6e90\uff0c\u6240\u4ee5\u9700\u8981\u60a8\u5728\u4e00\u5f00\u59cb\u5c31\u8bbe\u7f6e\u961f\u5217"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/168044735-99bc50cb-2521-4bc9-badb-305fd7cb82d6.png",alt:"yarn"}),"    "),(0,i.kt)("p",null,"\u56fe3-1 \u961f\u5217\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u60a8\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5728\u63d0\u4ea4\u53c2\u6570\u7684StartUpMap\u91cc\u9762\u6dfb\u52a0\u961f\u5217\u7684\u503c\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},'startupMap.put("wds.linkis.rm.yarnqueue", "dws")')),(0,i.kt)("h3",{id:"31-\u901a\u8fc7linkis-sdk\u8fdb\u884c\u4f7f\u7528"},"3.1 \u901a\u8fc7Linkis SDK\u8fdb\u884c\u4f7f\u7528"),(0,i.kt)("p",null,"Linkis\u63d0\u4f9b\u4e86Java\u548cScala \u7684SDK\u5411Linkis\u670d\u52a1\u7aef\u63d0\u4ea4\u4efb\u52a1. \u5177\u4f53\u53ef\u4ee5\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.3/user-guide/sdk-manual"},"JAVA SDK Manual"),".\n\u5bf9\u4e8eHive\u4efb\u52a1\u4f60\u53ea\u9700\u8981\u4fee\u6539Demo\u4e2d\u7684EngineConnType\u548cCodeType\u53c2\u6570\u5373\u53ef:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'        Map<String, Object> labels = new HashMap<String, Object>();\n        labels.put(LabelKeyConstant.ENGINE_TYPE_KEY, "hive-2.3.3"); // required engineType Label\n        labels.put(LabelKeyConstant.USER_CREATOR_TYPE_KEY, "hadoop-IDE");// required execute user and creator\n        labels.put(LabelKeyConstant.CODE_TYPE_KEY, "hql"); // required codeType\n')),(0,i.kt)("h3",{id:"32-\u901a\u8fc7linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"},"3.2 \u901a\u8fc7Linkis-cli\u8fdb\u884c\u4efb\u52a1\u63d0\u4ea4"),(0,i.kt)("p",null,"Linkis 1.0\u540e\u63d0\u4f9b\u4e86cli\u7684\u65b9\u5f0f\u63d0\u4ea4\u4efb\u52a1\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6307\u5b9a\u5bf9\u5e94\u7684EngineConn\u548cCodeType\u6807\u7b7e\u7c7b\u578b\u5373\u53ef\uff0cHive\u7684\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'sh ./bin/linkis-cli -engineType hive-2.3.3 -codeType hql -code "show tables"  -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("p",null,"\u5177\u4f53\u4f7f\u7528\u53ef\u4ee5\u53c2\u8003\uff1a ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/1.1.3/user-guide/linkiscli-manual"},"Linkis CLI Manual"),"."),(0,i.kt)("h3",{id:"33-scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"},"3.3 Scriptis\u7684\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/WeBankFinTech/Scriptis"},"Scriptis"),"\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u6700\u7b80\u5355\u7684\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165Scriptis\uff0c\u53f3\u952e\u76ee\u5f55\u7136\u540e\u65b0\u5efahive\u811a\u672c\u5e76\u7f16\u5199hivesql\u4ee3\u7801"),(0,i.kt)("p",null,"hive\u5f15\u64ce\u7684\u5b9e\u73b0\u65b9\u5f0f\u901a\u8fc7\u5b9e\u4f8b\u5316hive\u7684Driver\u5b9e\u4f8b\uff0c\u7136\u540e\u7531Driver\u6765\u63d0\u4ea4\u4efb\u52a1\uff0c\u5e76\u83b7\u53d6\u7ed3\u679c\u96c6\u5e76\u5c55\u793a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(75890).Z})),(0,i.kt)("p",null,"\u56fe3-2 hivesql\u7684\u6267\u884c\u6548\u679c\u622a\u56fe"),(0,i.kt)("h2",{id:"4hive\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"},"4.Hive\u5f15\u64ce\u7684\u7528\u6237\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u5f15\u64ce\u914d\u7f6e\uff0c\u7528\u6237\u8fd8\u53ef\u4ee5\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u8bbe\u7f6e\uff0c\u5305\u62echive Driver\u8fdb\u7a0b\u7684\u5185\u5b58\u5927\u5c0f\u7b49\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29391030/168044822-f217e4bb-a323-4837-bb26-fbfb6c138512.png",alt:"hive"}),"  "),(0,i.kt)("p",null,"\u56fe4-1 hive\u7684\u7528\u6237\u81ea\u5b9a\u4e49\u914d\u7f6e\u7ba1\u7406\u53f0"),(0,i.kt)("h2",{id:"5hive\u4fee\u6539\u65e5\u5fd7\u5c55\u793a"},"5.Hive\u4fee\u6539\u65e5\u5fd7\u5c55\u793a"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u7684\u65e5\u5fd7\u754c\u9762\u662f\u4e0d\u663e\u793aapplication_id\u4ee5\u53catask\u5b8c\u6210\u6570\u91cf\u7684,\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8f93\u51fa\u8be5\u65e5\u5fd7\n\u5f15\u64ce\u5185\u7684log4j2-engineconn.xml/log4j2.xml\u914d\u7f6e\u6587\u4ef6\u4e2d\u9700\u8981\u4fee\u6539\u7684\u4ee3\u7801\u5757\u5982\u4e0b\n1.appenders\u7ec4\u4ef6\u4e0b\u9700\u8981\u6dfb\u52a0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'        <Send name="SendPackage" >\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Send>\n')),(0,i.kt)("p",null,"2.root\u7ec4\u4ef6\u4e0b\u9700\u8981\u6dfb\u52a0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'        <appender-ref ref="SendPackage"/>\n')),(0,i.kt)("p",null,"3.loggers\u7ec4\u4ef6\u4e0b\u9700\u8981\u6dfb\u52a0"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'        <logger name="org.apache.hadoop.hive.ql.exec.StatsTask" level="info" additivity="true">\n            <appender-ref ref="SendPackage"/>\n        </logger>\n')),(0,i.kt)("p",null,"\u8fdb\u884c\u5982\u4e0a\u76f8\u5173\u4fee\u6539\u540e\u65e5\u5fd7\u53ef\u4ee5\u589e\u52a0\u4efb\u52a1task\u8fdb\u5ea6\u4fe1\u606f\uff0c\u663e\u793a\u4e3a\u5982\u4e0b\u6837\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2022-04-08 11:06:50.228 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Status: Running (Executing on YARN cluster with App id application_1631114297082_432445)\n2022-04-08 11:06:50.248 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: -/-  Reducer 2: 0/1  \n2022-04-08 11:06:52.417 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 0/1  Reducer 2: 0/1  \n2022-04-08 11:06:55.060 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 0(+1)/1  Reducer 2: 0/1  \n2022-04-08 11:06:57.495 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 1/1  Reducer 2: 0(+1)/1  \n2022-04-08 11:06:57.899 INFO  [Linkis-Default-Scheduler-Thread-3] SessionState 1111 printInfo - Map 1: 1/1  Reducer 2: 1/1  \n")),(0,i.kt)("p",null,"\u5b8c\u6574xml\u914d\u7f6e\u6587\u4ef6\u8303\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!--\n  ~ Copyright 2019 WeBank\n  ~\n  ~ Licensed under the Apache License, Version 2.0 (the "License");\n  ~ you may not use this file except in compliance with the License.\n  ~ You may obtain a copy of the License at\n  ~\n  ~ http://www.apache.org/licenses/LICENSE-2.0\n  ~\n  ~ Unless required by applicable law or agreed to in writing, software\n  ~ distributed under the License is distributed on an "AS IS" BASIS,\n  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  ~ See the License for the specific language governing permissions and\n  ~ limitations under the License.\n  --\x3e\n  \n<configuration status="error" monitorInterval="30">\n    <appenders>\n        <Console name="Console" target="SYSTEM_OUT">\n            <ThresholdFilter level="INFO" onMatch="ACCEPT" onMismatch="DENY"/>\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Console>\n\n        <Send name="Send" >\n            <Filters>\n                <ThresholdFilter level="WARN" onMatch="ACCEPT" onMismatch="DENY" />\n            </Filters>\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Send>\n\n        <Send name="SendPackage" >\n            <PatternLayout pattern="%d{yyyy-MM-dd HH:mm:ss.SSS} %-5level [%t] %logger{36} %L %M - %msg%xEx%n"/>\n        </Send>\n\n        <Console name="stderr" target="SYSTEM_ERR">\n            <ThresholdFilter level="ERROR" onMatch="ACCEPT" onMismatch="DENY" />\n            <PatternLayout pattern="%d{HH:mm:ss.SSS} %-5level %class{36} %L %M - %msg%xEx%n"/>\n        </Console>\n    </appenders>\n\n    <loggers>\n      <root level="INFO">\n            <appender-ref ref="stderr"/>\n            <appender-ref ref="Console"/>\n            <appender-ref ref="Send"/>\n            <appender-ref ref="SendPackage"/>\n        </root>\n        <logger name="org.apache.hadoop.hive.ql.exec.StatsTask" level="info" additivity="true">\n            <appender-ref ref="SendPackage"/>\n        </logger>\n        <logger name="org.springframework.boot.diagnostics.LoggingFailureAnalysisReporter" level="error" additivity="true">\n            <appender-ref ref="stderr"/>\n        </logger>\n        <logger name="com.netflix.discovery" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.hadoop.yarn" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.springframework" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.linkis.server.security" level="warn" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.hadoop.hive.ql.exec.mr.ExecDriver" level="fatal" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.apache.hadoop.hdfs.KeyProviderCache" level="fatal" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.spark_project.jetty" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.eclipse.jetty" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.springframework" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n        <logger name="org.reflections.Reflections" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n\n        <logger name="org.apache.hadoop.ipc.Client" level="ERROR" additivity="true">\n            <appender-ref ref="Send"/>\n        </logger>\n\n   </loggers>\n</configuration>\n')))}d.isMDXComponent=!0},75890:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/hive-run-8b2ae5eed34104e76acc380bad57fe24.png"}}]);