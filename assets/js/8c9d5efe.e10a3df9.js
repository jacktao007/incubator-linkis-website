"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[85547],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),g=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=g(e.components);return i.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=g(t),p=r,m=d["".concat(c,".").concat(p)]||d[p]||s[p]||a;return t?i.createElement(m,o(o({ref:n},u),{},{components:t})):i.createElement(m,o({ref:n},u))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var g=2;g<a;g++)o[g]=t[g];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6308:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const a={title:"EngineConnPlugin (ECP) Design",sidebar_position:3},o="EngineConnPlugin (ECP) architecture design",l={unversionedId:"architecture/computation-governance-services/engine/engine-conn-plugin",id:"version-1.2.0/architecture/computation-governance-services/engine/engine-conn-plugin",isDocsHomePage:!1,title:"EngineConnPlugin (ECP) Design",description:"The engine connector plug-in is an implementation that can dynamically load the engine connector and reduce the occurrence of version conflicts. It has the characteristics of convenient expansion, fast refresh, and selective loading. In order to allow developers to freely extend Linkis's Engine engine, and dynamically load engine dependencies to avoid version conflicts, the EngineConnPlugin was designed and developed, allowing new engines to be introduced into the execution life cycle of computing middleware by implementing established plug-in interfaces.",source:"@site/versioned_docs/version-1.2.0/architecture/computation-governance-services/engine/engine-conn-plugin.md",sourceDirName:"architecture/computation-governance-services/engine",slug:"/architecture/computation-governance-services/engine/engine-conn-plugin",permalink:"/docs/1.2.0/architecture/computation-governance-services/engine/engine-conn-plugin",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.2.0/architecture/computation-governance-services/engine/engine-conn-plugin.md",tags:[],version:"1.2.0",sidebarPosition:3,frontMatter:{title:"EngineConnPlugin (ECP) Design",sidebar_position:3},sidebar:"version-1.2.0/tutorialSidebar",previous:{title:"EngineConnManager Design",permalink:"/docs/1.2.0/architecture/computation-governance-services/engine/engine-conn-manager"},next:{title:"EngineConn Startup Process",permalink:"/docs/1.2.0/architecture/computation-governance-services/engine/add-an-engine-conn"}},c=[{value:"EngineConn-Plugin-Server",id:"engineconn-plugin-server",children:[]},{value:"EngineConn-Plugin-Loader Engine Connector Plugin Loader",id:"engineconn-plugin-loader-engine-connector-plugin-loader",children:[]},{value:"EngineConn-Plugin-Cache engine plug-in cache module",id:"engineconn-plugin-cache-engine-plug-in-cache-module",children:[]},{value:"EngineConn-Plugin-Core: Engine connector plug-in core module",id:"engineconn-plugin-core-engine-connector-plug-in-core-module",children:[]},{value:"EngineConn-Plugins: Engine connection plugin collection",id:"engineconn-plugins-engine-connection-plugin-collection",children:[]}],g={toc:c};function u(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"engineconnplugin-ecp-architecture-design"},"EngineConnPlugin (ECP) architecture design"),(0,r.kt)("p",null,"The engine connector plug-in is an implementation that can dynamically load the engine connector and reduce the occurrence of version conflicts. It has the characteristics of convenient expansion, fast refresh, and selective loading. In order to allow developers to freely extend Linkis's Engine engine, and dynamically load engine dependencies to avoid version conflicts, the EngineConnPlugin was designed and developed, allowing new engines to be introduced into the execution life cycle of computing middleware by implementing established plug-in interfaces.\nThe plug-in interface disassembles the definition of the engine, including parameter initialization, allocation of engine resources, construction of engine connections, and setting of engine default tags."),(0,r.kt)("p",null,"\u4e00\u3001ECP architecture diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(34885).Z})),(0,r.kt)("h1",{id:"introduction-to-the-second-level-module"},"Introduction to the second-level module:"),(0,r.kt)("h2",{id:"engineconn-plugin-server"},"EngineConn-Plugin-Server"),(0,r.kt)("p",null,"The engine connector plug-in service is an entrance service that provides external registration plug-ins, management plug-ins, and plug-in resource construction. The engine plug-in that is successfully registered and loaded will contain the logic of resource allocation and startup parameter configuration. During the engine initialization process, EngineConn\nOther services such as Manager call the logic of the corresponding plug-in in Plugin Server through RPC requests."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnLaunchService"),(0,r.kt)("td",{parentName:"tr",align:null},"Responsible for building the engine connector launch request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnResourceFactoryService"),(0,r.kt)("td",{parentName:"tr",align:null},"Responsible for generating engine resources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnResourceService"),(0,r.kt)("td",{parentName:"tr",align:null},"Responsible for downloading the resource files used by the engine connector from BML")))),(0,r.kt)("h2",{id:"engineconn-plugin-loader-engine-connector-plugin-loader"},"EngineConn-Plugin-Loader Engine Connector Plugin Loader"),(0,r.kt)("p",null,"The engine connector plug-in loader is a loader used to dynamically load the engine connector plug-ins according to request parameters, and has the characteristics of caching. The specific loading process is mainly composed of two parts: 1) Plug-in resources such as the main program package and program dependency packages are loaded locally (not open). 2) Plug-in resources are dynamically loaded from the local into the service process environment, for example, loaded into the JVM virtual machine through a class loader."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnPluginsResourceLoader"),(0,r.kt)("td",{parentName:"tr",align:null},"Load engine connector plug-in resources")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnPluginsLoader"),(0,r.kt)("td",{parentName:"tr",align:null},"Load the engine connector plug-in instance, or load an existing one from the cache")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnPluginClassLoader"),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamically instantiate engine connector instance from jar")))),(0,r.kt)("h2",{id:"engineconn-plugin-cache-engine-plug-in-cache-module"},"EngineConn-Plugin-Cache engine plug-in cache module"),(0,r.kt)("p",null,"Engine connector plug-in cache is a cache service specially used to cache loaded engine connectors, and supports the ability to read, update, and remove. The plug-in that has been loaded into the service process will be cached together with its class loader to prevent multiple loading from affecting efficiency; at the same time, the cache module will periodically notify the loader to update the plug-in resources. If changes are found, it will be reloaded and refreshed automatically Cache."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnPluginCache"),(0,r.kt)("td",{parentName:"tr",align:null},"Cache loaded engine connector instance")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RefreshPluginCacheContainer"),(0,r.kt)("td",{parentName:"tr",align:null},"Engine connector that refreshes the cache regularly")))),(0,r.kt)("h2",{id:"engineconn-plugin-core-engine-connector-plug-in-core-module"},"EngineConn-Plugin-Core: Engine connector plug-in core module"),(0,r.kt)("p",null,"The engine connector plug-in core module is the core module of the engine connector plug-in. Contains the implementation of the basic functions of the engine plug-in, such as the construction of the engine connector start command, the construction of the engine resource factory and the implementation of the core interface of the engine connector plug-in."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnLaunchBuilder"),(0,r.kt)("td",{parentName:"tr",align:null},"Build Engine Connector Launch Request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnFactory"),(0,r.kt)("td",{parentName:"tr",align:null},"Create Engine Connector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineConnPlugin"),(0,r.kt)("td",{parentName:"tr",align:null},"The engine connector plug-in implements the interface, including resources, commands, and instance construction methods.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EngineResourceFactory"),(0,r.kt)("td",{parentName:"tr",align:null},"Engine Resource Creation Factory")))),(0,r.kt)("h2",{id:"engineconn-plugins-engine-connection-plugin-collection"},"EngineConn-Plugins: Engine connection plugin collection"),(0,r.kt)("p",null,"The engine connection plug-in collection is used to place the default engine connector plug-in library that has been implemented based on the plug-in interface defined by us. Provides the default engine connector implementation, such as jdbc, spark, python, shell, etc. Users can refer to the implemented cases based on their own needs to implement more engine connectors."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"engineplugin-jdbc"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc engine connector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"engineplugin-shell"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell engine connector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"engineplugin-spark"),(0,r.kt)("td",{parentName:"tr",align:null},"spark engine connector")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"engineplugin-python"),(0,r.kt)("td",{parentName:"tr",align:null},"python engine connector")))))}u.isMDXComponent=!0},34885:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/linkis-engineConnPlugin-01-5d9970027c6f985ab516b63c50eeee01.png"}}]);