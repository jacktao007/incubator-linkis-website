"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[92725],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),b=a,d=m["".concat(c,".").concat(b)]||m[b]||u[b]||i;return t?n.createElement(d,l(l({ref:r},p),{},{components:t})):n.createElement(d,l({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9638:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={title:"LabelManager \u67b6\u6784",sidebar_position:2},l=void 0,o={unversionedId:"architecture/computation-governance-services/linkis-manager/label-manager",id:"version-1.0.3/architecture/computation-governance-services/linkis-manager/label-manager",isDocsHomePage:!1,title:"LabelManager \u67b6\u6784",description:"\u7b80\u8ff0",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/architecture/computation-governance-services/linkis-manager/label-manager.md",sourceDirName:"architecture/computation-governance-services/linkis-manager",slug:"/architecture/computation-governance-services/linkis-manager/label-manager",permalink:"/zh-CN/docs/1.0.3/architecture/computation-governance-services/linkis-manager/label-manager",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.3/architecture/computation-governance-services/linkis-manager/label-manager.md",tags:[],version:"1.0.3",sidebarPosition:2,frontMatter:{title:"LabelManager \u67b6\u6784",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"AppManager \u67b6\u6784",permalink:"/zh-CN/docs/1.0.3/architecture/computation-governance-services/linkis-manager/app-manager"},next:{title:"ResourceManager \u67b6\u6784",permalink:"/zh-CN/docs/1.0.3/architecture/computation-governance-services/linkis-manager/resource-manager"}},c=[{value:"\u6574\u4f53\u67b6\u6784\u793a\u610f",id:"\u6574\u4f53\u67b6\u6784\u793a\u610f",children:[]},{value:"\u4e00. LabelBuilder\u89e3\u6790\u6d41\u7a0b",id:"\u4e00-labelbuilder\u89e3\u6790\u6d41\u7a0b",children:[]},{value:"\u4e8c. NodeLabelScorer\u6253\u5206\u6d41\u7a0b",id:"\u4e8c-nodelabelscorer\u6253\u5206\u6d41\u7a0b",children:[]}],s={toc:c};function p(e){let{components:r,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u7b80\u8ff0"},"\u7b80\u8ff0"),(0,a.kt)("p",null,"LabelManager\u662fLinkis\u4e2d\u5bf9\u4e0a\u5c42\u5e94\u7528\u63d0\u4f9b\u6807\u7b7e\u670d\u52a1\u7684\u529f\u80fd\u6a21\u7ec4\uff0c\u8fd0\u7528\u6807\u7b7e\u6280\u672f\u7ba1\u7406\u96c6\u7fa4\u8d44\u6e90\u5206\u914d\u3001\u670d\u52a1\u8282\u70b9\u9009\u4e3e\u3001\u7528\u6237\u6743\u9650\u5339\u914d\u4ee5\u53ca\u7f51\u5173\u8def\u7531\u8f6c\u53d1\uff1b\u5305\u542b\u652f\u6301\u5404\u79cd\u81ea\u5b9a\u4e49Label\u6807\u7b7e\u7684\u6cdb\u5316\u89e3\u6790\u5904\u7406\u5de5\u5177\uff0c\u4ee5\u53ca\u901a\u7528\u7684\u6807\u7b7e\u5339\u914d\u8bc4\u5206\u5668\u3002"),(0,a.kt)("h3",{id:"\u6574\u4f53\u67b6\u6784\u793a\u610f"},"\u6574\u4f53\u67b6\u6784\u793a\u610f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u6574\u4f53\u67b6\u6784\u793a\u610f\u56fe",src:t(83850).Z}),"  "),(0,a.kt)("h4",{id:"\u67b6\u6784\u8bf4\u660e"},"\u67b6\u6784\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LabelBuilder: \u627f\u62c5\u7740\u6807\u7b7e\u89e3\u6790\u7684\u5de5\u4f5c\uff0c\u4ece\u8f93\u5165\u7684\u6807\u7b7e\u7c7b\u578b\u3001\u5173\u952e\u5b57\u6216\u8005\u5b57\u7b26\u6570\u503c\u4e2d\u89e3\u6790\u5f97\u5230\u5177\u4f53\u7684\u6807\u7b7e\u5b9e\u4f53\uff0c\u6709\u9ed8\u8ba4\u7684\u6cdb\u5316\u5b9e\u73b0\u7c7b\u4e5f\u53ef\u505a\u81ea\u5b9a\u4e49\u6269\u5c55\u3002"),(0,a.kt)("li",{parentName:"ul"},"LabelEntities: \u6307\u4ee3\u6807\u7b7e\u5b9e\u4f53\u96c6\u5408\uff0c\u6709\u4e14\u5305\u542b\u96c6\u7fa4\u6807\u7b7e\uff0c\u914d\u7f6e\u6807\u7b7e\uff0c\u5f15\u64ce\u6807\u7b7e\uff0c\u8282\u70b9\u6807\u7b7e\uff0c\u8def\u7531\u6807\u7b7e\uff0c\u641c\u7d22\u6807\u7b7e\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"NodeLabelService: \u5b9e\u4f8b/\u8282\u70b9\u4e0e\u6807\u7b7e\u7684\u5173\u8054\u670d\u52a1\u63a5\u53e3\u7c7b\uff0c\u5b9a\u4e49\u5bf9\u4e24\u8005\u5173\u8054\u5173\u7cfb\u7684\u589e\u5220\u6539\u67e5\u4ee5\u53ca\u6839\u636e\u6807\u7b7e\u5339\u914d\u5b9e\u4f8b/\u8282\u70b9\u7684\u63a5\u53e3\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"UserLabelService: \u58f0\u660e\u7528\u6237\u4e0e\u6807\u7b7e\u7684\u5173\u8054\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"ResourceLabelService: \u58f0\u660e\u96c6\u7fa4\u8d44\u6e90\u4e0e\u6807\u7b7e\u7684\u5173\u8054\u64cd\u4f5c\uff0c\u6d89\u53ca\u5230\u5bf9\u7ec4\u5408\u6807\u7b7e\u7684\u8d44\u6e90\u7ba1\u7406\uff0c\u6e05\u7406\u6216\u8bbe\u7f6e\u6807\u7b7e\u5173\u8054\u7684\u8d44\u6e90\u6570\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"NodeLabelScorer: \u8282\u70b9\u6807\u7b7e\u8bc4\u5206\u5668\uff0c\u5bf9\u5e94\u4e0d\u540c\u7684\u6807\u7b7e\u5339\u914d\u7b97\u6cd5\u7684\u5b9e\u73b0\uff0c\u4f7f\u7528\u8bc4\u5206\u8868\u793a\u8282\u70b9\u7684\u6807\u7b7e\u5339\u914d\u5ea6\u3002")),(0,a.kt)("h3",{id:"\u4e00-labelbuilder\u89e3\u6790\u6d41\u7a0b"},"\u4e00. LabelBuilder\u89e3\u6790\u6d41\u7a0b"),(0,a.kt)("p",null,"\u4ee5\u6cdb\u5316\u6807\u7b7e\u89e3\u6790\u7c7bGenericLabelBuilder\u4e3a\u4f8b\uff0c\u9610\u660e\u6574\u4f53\u6d41\u7a0b:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"\u6cdb\u5316\u6807\u7b7e\u89e3\u6790\u6d41\u7a0b",src:t(93530).Z}),(0,a.kt)("br",{parentName:"p"}),"\n","\u6807\u7b7e\u89e3\u6790/\u6784\u5efa\u7684\u6d41\u7a0b\u6982\u62ec\u5305\u542b\u51e0\u6b65:  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e\u8f93\u5165\u9009\u62e9\u8981\u6784\u5efa\u89e3\u6790\u7684\u5408\u9002\u6807\u7b7e\u7c7b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e\u6807\u7b7e\u7c7b\u7684\u5b9a\u4e49\u4fe1\u606f\uff0c\u9012\u5f52\u89e3\u6790\u6cdb\u578b\u7ed3\u6784\uff0c\u5f97\u5230\u5177\u4f53\u7684\u6807\u7b7e\u503c\u7c7b\u578b\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8f6c\u5316\u8f93\u5165\u503c\u5bf9\u8c61\u5230\u6807\u7b7e\u503c\u7c7b\u578b\uff0c\u8fd0\u7528\u9690\u5f0f\u8f6c\u5316\u6216\u6b63\u53cd\u89e3\u6790\u6846\u67b6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u636e1-3\u7684\u8fd4\u56de\uff0c\u5b9e\u4f8b\u5316\u6807\u7b7e\uff0c\u5e76\u6839\u636e\u4e0d\u540c\u7684\u6807\u7b7e\u7c7b\u8fdb\u884c\u4e00\u4e9b\u540e\u7f6e\u64cd\u4f5c\u3002")),(0,a.kt)("h3",{id:"\u4e8c-nodelabelscorer\u6253\u5206\u6d41\u7a0b"},"\u4e8c. NodeLabelScorer\u6253\u5206\u6d41\u7a0b"),(0,a.kt)("p",null,"\u4e3a\u4e86\u6839\u636eLinkis\u7528\u6237\u6267\u884c\u8bf7\u6c42\u4e2d\u9644\u5e26\u7684\u6807\u7b7e\u5217\u8868\u6311\u9009\u5408\u9002\u7684\u5f15\u64ce\u8282\u70b9\uff0c\u9700\u8981\u5bf9\u7b26\u5408\u7684\u5f15\u64ce\u5217\u8868\u505a\u62e9\u4f18\uff0c\u91cf\u5316\u4e3a\u5f15\u64ce\u8282\u70b9\u7684\u6807\u7b7e\u5339\u914d\u5ea6\u5373\u8bc4\u5206\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u5728\u6807\u7b7e\u5b9a\u4e49\u91cc\uff0c\u6bcf\u4e2a\u6807\u7b7e\u90fd\u6709feature\u7279\u5f81\u503c\uff0c\u5206\u522b\u4e3aCORE\uff0cSUITABLE\uff0cPRIORITIZED\uff0cOPTIONAL\uff0c\u6bcf\u4e2a\u7279\u5f81\u503c\u90fd\u6709\u4e00\u4e2aboost\u503c\uff0c\u76f8\u5f53\u4e8e\u6743\u91cd\u548c\u6fc0\u52b1\u503c\uff0c\n\u540c\u65f6\u6709\u4e9b\u7279\u5f81\u4f8bCORE\u548cSUITABLE\u4e3a\u5fc5\u987b\u552f\u4e00\u7279\u5f81\u5373\u5728\u5339\u914d\u8fc7\u7a0b\u4e2d\u9700\u505a\u5f3a\u8fc7\u6ee4\uff0c\u4e14\u4e00\u4e2a\u8282\u70b9\u53ea\u80fd\u5206\u522b\u5173\u8054\u4e00\u4e2aCORE/SUITABLE\u6807\u7b7e\u3002",(0,a.kt)("br",{parentName:"p"}),"\n","\u6839\u636e\u73b0\u6709\u6807\u7b7e\uff0c\u8282\u70b9\uff0c\u8bf7\u6c42\u9644\u5e26\u6807\u7b7e\u4e09\u8005\u4e4b\u95f4\u7684\u5173\u7cfb\uff0c\u53ef\u4ee5\u7ed8\u5236\u51fa\u5982\u4e0b\u793a\u610f\u56fe\uff1a",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"\u6807\u7b7e\u6253\u5206",src:t(88247).Z}),"  "),(0,a.kt)("p",null,"\u81ea\u5e26\u7684\u9ed8\u8ba4\u8bc4\u5206\u903b\u8f91\u8fc7\u7a0b\u5e94\u5927\u4f53\u5305\u542b\u4ee5\u4e0b\u51e0\u70b9\u6b65\u9aa4:  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u65b9\u6cd5\u7684\u8f93\u5165\u5e94\u8be5\u4e3a\u4e24\u7ec4\u7f51\u7edc\u5173\u7cfb\u5217\u8868\uff0c\u5206\u522b\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"Label -> Node")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"Node -> Label"),"\uff0c \u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"Node -> Label"),"\u5173\u7cfb\u91cc\u7684Node\u8282\u70b9\u5fc5\u987b\u5177\u6709\u8bf7\u6c42\u91cc\u6d89\u53ca\u5230\u6240\u6709CORE\u4ee5\u53caSUITABLE\u7279\u5f81\u7684\u6807\u7b7e\uff0c\u8fd9\u4e9b\u8282\u70b9\u4e5f\u79f0\u4e3a\u5907\u9009\u8282\u70b9\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u6b65\u904d\u5386\u8ba1\u7b97",(0,a.kt)("inlineCode",{parentName:"li"},"Node -> Label"),"\u5173\u7cfb\u5217\u8868\uff0c\u904d\u5386\u6bcf\u4e2a\u8282\u70b9\u5173\u8054\u7684\u6807\u7b7eLabel\uff0c\u8fd9\u4e00\u6b65\u5148\u7ed9\u6807\u7b7e\u6253\u5206\uff0c\u5982\u679c\u6807\u7b7e\u4e0d\u662f\u8bf7\u6c42\u4e2d\u9644\u5e26\u7684\u6807\u7b7e\uff0c\u6253\u5206\u4e3a0\uff0c\n\u5426\u5219\u6253\u5206\u4e3a\uff1a (\u57fa\u672c\u5206/\u8be5\u6807\u7b7e\u5bf9\u5e94\u7279\u5f81\u503c\u5728\u8bf7\u6c42\u4e2d\u7684\u51fa\u73b0\u6b21\u6570) * \u5bf9\u5e94\u7279\u5f81\u503c\u7684\u6fc0\u52b1\u503c\uff0c\u5176\u4e2d\u57fa\u672c\u5206\u9ed8\u8ba4\u4e3a1\uff0c\u8282\u70b9\u7684\u521d\u59cb\u5206\u4e3a\u76f8\u5173\u8054\u7684\u6807\u7b7e\u6253\u5206\u7684\u603b\u548c\uff1b\u5176\u4e2d\u56e0\u4e3aCORE/SUITABLE\u7c7b\u578b\u6807\u7b7e\u4e3a\u5fc5\u987b\u552f\u4e00\u6807\u7b7e\uff0c\u51fa\u73b0\u6b21\u6570\u6052\u5b9a\u4e3a1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5f97\u5230\u8282\u70b9\u7684\u521d\u59cb\u5206\u540e\uff0c\u7b2c\u4e8c\u6b65\u904d\u5386\u8ba1\u7b97",(0,a.kt)("inlineCode",{parentName:"li"},"Label -> Node"),"\u5173\u7cfb\uff0c\u7531\u4e8e\u7b2c\u4e00\u6b65\u4e2d\u5ffd\u7565\u4e86\u975e\u8bf7\u6c42\u9644\u5e26\u6807\u7b7e\u5bf9\u8bc4\u5206\u7684\u4f5c\u7528\uff0c\u4f46\u65e0\u5173\u6807\u7b7e\u6bd4\u91cd\u786e\u5b9e\u4f1a\u5bf9\u8bc4\u5206\u9020\u6210\u5f71\u54cd\uff0c\u5bf9\u5e94\u8fd9\u7c7b\u7684\u6807\u7b7e\u7edf\u4e00\u6253\u4e0aUNKNOWN\u7684\u7279\u5f81\uff0c\u540c\u6837\u8be5\u7279\u5f81\u4e5f\u6709\u76f8\u5bf9\u5e94\u7684\u6fc0\u52b1\u503c\uff1b\n\u6211\u4eec\u8bbe\u5b9a\u65e0\u5173\u6807\u7b7e\u5173\u8054\u7684\u5907\u9009\u8282\u70b9\u5360\u603b\u5173\u8054\u8282\u70b9\u7684\u6bd4\u91cd\u8d8a\u9ad8\uff0c\u5bf9\u8bc4\u5206\u7684\u5f71\u54cd\u8d8a\u663e\u8457\uff0c\u4ee5\u6b64\u53ef\u4ee5\u5bf9\u7b2c\u4e00\u6b65\u5f97\u51fa\u7684\u8282\u70b9\u521d\u59cb\u5206\u505a\u8fdb\u4e00\u6b65\u7d2f\u52a0\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5bf9\u5f97\u5230\u7684\u5907\u9009\u8282\u70b9\u7684\u5206\u6570\u505a\u6807\u51c6\u5dee\u5f52\u4e00\u5316\uff0c\u5e76\u6392\u5e8f\u3002")))}p.isMDXComponent=!0},93530:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/label_manager_builder-b33de0cbd74bb075493baa19cb1147bc.png"},83850:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/label_manager_global-eb08b6d4ae0c8f67384a47d26b9261eb.png"},88247:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/label_manager_scorer-5c4028cc59bcf35cd3cb24e0d8518e1d.png"}}]);