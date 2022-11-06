"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[94073],{3905:(t,a,e)=>{e.d(a,{Zo:()=>m,kt:()=>u});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function p(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=n.createContext({}),d=function(t){var a=n.useContext(s),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},m=function(t){var a=d(t.components);return n.createElement(s.Provider,{value:a},t.children)},o={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(e),u=r,c=k["".concat(s,".").concat(u)]||k[u]||o[u]||l;return e?n.createElement(c,i(i({ref:a},m),{},{components:e})):n.createElement(c,i({ref:a},m))}));function u(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=e[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},94237:(t,a,e)=>{e.r(a),e.d(a,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=e(87462),r=(e(67294),e(3905));const l={title:"Version Overview",sidebar_position:.1},i=void 0,p={unversionedId:"release",id:"release",isDocsHomePage:!1,title:"Version Overview",description:"- Build Linkis Docker Image",source:"@site/docs/release.md",sourceDirName:".",slug:"/release",permalink:"/docs/1.3.1/release",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/release.md",tags:[],version:"current",sidebarPosition:.1,frontMatter:{title:"Version Overview",sidebar_position:.1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/1.3.1/introduction"},next:{title:"Deploy without HDFS",permalink:"/docs/1.3.1/quick/deploy-without-hdfs"}},s=[{value:"Configuration Item",id:"configuration-item",children:[]},{value:"DB Table Changes",id:"db-table-changes",children:[]}],d={toc:s};function m(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.3.1/development/build-docker"},"Build Linkis Docker Image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.3.1/deployment/deploy-to-kubernetes"},"Linkis Docker LDH Quick Deployment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.3.1/development/debug-with-helm-charts"},"Development & Debugging with Kubernetes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2022/10/09/linkis-service-merge"},"PES Public Service Group Service Merge Details")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/1.3.1/user-guide/sso-with-redis"},"Session supports Redis shared storage"))),(0,r.kt)("h2",{id:"configuration-item"},"Configuration Item"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Module Name (Service Name)"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.host"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"redis connection IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.port"),(0,r.kt)("td",{parentName:"tr",align:null},"6379"),(0,r.kt)("td",{parentName:"tr",align:null},"redis connection port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.password"),(0,r.kt)("td",{parentName:"tr",align:null},"test123"),(0,r.kt)("td",{parentName:"tr",align:null},"redis connection password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis.session.redis.cache.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"redis sso switch")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-cs"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.restful.scan.packages"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.cs.server.restful"),(0,r.kt)("td",{parentName:"tr",align:null},"restful packages scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-cs"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.mapperLocations"),(0,r.kt)("td",{parentName:"tr",align:null},"classpath",(0,r.kt)("em",{parentName:"td"},":org/apache/linkis/cs/persistence/dao/impl/"),".xml"),(0,r.kt)("td",{parentName:"tr",align:null},"mapper scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-cs"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.typeAliasesPackage"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.cs.persistence.entity"),(0,r.kt)("td",{parentName:"tr",align:null},"table map entity class package path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-cs"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.BasePackage"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.cs.persistence.dao"),(0,r.kt)("td",{parentName:"tr",align:null},"Mybatis package scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-cs"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.server.port"),(0,r.kt)("td",{parentName:"tr",align:null},"9108"),(0,r.kt)("td",{parentName:"tr",align:null},"server port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-cs"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.eureka.instance.metadata-map.route"),(0,r.kt)("td",{parentName:"tr",align:null},"cs_1_dev"),(0,r.kt)("td",{parentName:"tr",align:null},"ps-cs route prefix(must be start with cs_)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-cs"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.cs.deserialize.replace_package_header.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to replace the packet header during deserialization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.restful.scan.packages"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.datasourcemanager.core.restful"),(0,r.kt)("td",{parentName:"tr",align:null},"restfu packages Scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.mapperLocations"),(0,r.kt)("td",{parentName:"tr",align:null},"classpath:org/apache/linkis/datasourcemanager/core/dao/mapper/*.xml"),(0,r.kt)("td",{parentName:"tr",align:null},"Mapper Scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.typeAliasesPackage"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.datasourcemanager.common.domain,org.apache.linkis.datasourcemanager.core.vo"),(0,r.kt)("td",{parentName:"tr",align:null},"table map entity class package path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.BasePackage"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.datasourcemanager.core.dao"),(0,r.kt)("td",{parentName:"tr",align:null},"Mybatis package scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"hive.meta.url"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"hive connection ip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"hive.meta.user"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"hive connection user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"hive.meta.password"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"hive connection password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.metadata.hive.encode.enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable BASE64 codec")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.server.port"),(0,r.kt)("td",{parentName:"tr",align:null},"9109"),(0,r.kt)("td",{parentName:"tr",align:null},"server port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.spring.main.allow-bean-definition-overriding"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether beans are allowed to define overrides")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.jackson.serialization.FAIL_ON_EMPTY_BEANS"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether empty beans are allowed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mdm.service.instance.expire-in-seconds"),(0,r.kt)("td",{parentName:"tr",align:null},"1800"),(0,r.kt)("td",{parentName:"tr",align:null},"server instance expire time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.restful.scan.packages"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.metadata.query.server.restful"),(0,r.kt)("td",{parentName:"tr",align:null},"restfu packages Scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.dsm.app.name"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"server name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-data-source-manager"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.server.port"),(0,r.kt)("td",{parentName:"tr",align:null},"9110"),(0,r.kt)("td",{parentName:"tr",align:null},"server port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.restful.scan.packages"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.cs.server.restful,org.apache.linkis.datasourcemanager.core.restful,org.apache.linkis.metadata.query.server.restful,org.apache.linkis.jobhistory.restful,org.apache.linkis.variable.restful,org.apache.linkis.configuration.restful,org.apache.linkis.udf.api,org.apache.linkis.filesystem.restful,org.apache.linkis.filesystem.restful,org.apache.linkis.instance.label.restful,org.apache.linkis.metadata.restful.api,org.apache.linkis.cs.server.restful,org.apache.linkis.bml.restful,org.apache.linkis.errorcode.server.restful"),(0,r.kt)("td",{parentName:"tr",align:null},"restfu packages Scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.mapperLocations"),(0,r.kt)("td",{parentName:"tr",align:null},"classpath",(0,r.kt)("em",{parentName:"td"},":org/apache/linkis/cs/persistence/dao/impl/"),".xml,classpath:org/apache/linkis/datasourcemanager/core/dao/mapper/",(0,r.kt)("em",{parentName:"td"},".xml,classpath:org/apache/linkis/jobhistory/dao/impl/"),".xml,classpath:org/apache/linkis/variable/dao/impl/",(0,r.kt)("em",{parentName:"td"},".xml,classpath:org/apache/linkis/configuration/dao/impl/"),".xml,classpath:org/apache/linkis/udf/dao/impl/",(0,r.kt)("em",{parentName:"td"},".xml,classpath:org/apache/linkis/instance/label/dao/impl/"),".xml,classpath:org/apache/linkis/metadata/hive/dao/impl/",(0,r.kt)("em",{parentName:"td"},".xml,org/apache/linkis/metadata/dao/impl/"),".xml,classpath:org/apache/linkis/bml/dao/impl/*.xml"),(0,r.kt)("td",{parentName:"tr",align:null},"Mapper Scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.typeAliasesPackage"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.cs.persistence.entity,org.apache.linkis.datasourcemanager.common.domain,org.apache.linkis.datasourcemanager.core.vo,org.apache.linkis.configuration.entity,org.apache.linkis.jobhistory.entity,org.apache.linkis.udf.entity,org.apache.linkis.variable.entity,org.apache.linkis.instance.label.entity,org.apache.linkis.manager.entity,org.apache.linkis.metadata.domain,org.apache.linkis.bml.entity"),(0,r.kt)("td",{parentName:"tr",align:null},"table map entity class package path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"UPDATE"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.server.mybatis.BasePackage"),(0,r.kt)("td",{parentName:"tr",align:null},"org.apache.linkis.cs.persistence.dao,org.apache.linkis.datasourcemanager.core.dao,org.apache.linkis.jobhistory.dao,org.apache.linkis.variable.dao,org.apache.linkis.configuration.dao,org.apache.linkis.udf.dao,org.apache.linkis.instance.label.dao,org.apache.linkis.metadata.hive.dao,org.apache.linkis.metadata.dao,org.apache.linkis.bml.dao,org.apache.linkis.errorcode.server.dao,org.apache.linkis.publicservice.common.lock.dao"),(0,r.kt)("td",{parentName:"tr",align:null},"Mybatis package scan path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.cs.deserialize.replace_package_header.enable"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to replace the packet header during deserialization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.rpc.conf.enable.local.message"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"enable local message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"wds.linkis.rpc.conf.local.app.list"),(0,r.kt)("td",{parentName:"tr",align:null},"linkis-ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"local app list")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.server.port"),(0,r.kt)("td",{parentName:"tr",align:null},"9105"),(0,r.kt)("td",{parentName:"tr",align:null},"server port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.spring.main.allow-bean-definition-overriding"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether beans are allowed to define overrides")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.spring.jackson.serialization.FAIL_ON_EMPTY_BEANS"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether empty beans are allowed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ps-publicservice"),(0,r.kt)("td",{parentName:"tr",align:null},"ADD"),(0,r.kt)("td",{parentName:"tr",align:null},"spring.eureka.instance.metadata-map.route"),(0,r.kt)("td",{parentName:"tr",align:null},"cs_1_dev"),(0,r.kt)("td",{parentName:"tr",align:null},"route prefix(must be start with cs_")))),(0,r.kt)("h2",{id:"db-table-changes"},"DB Table Changes"),(0,r.kt)("p",null,"For details, see the upgrade schema",(0,r.kt)("inlineCode",{parentName:"p"},"db/upgrade/1.3.0_schema")," file in the corresponding branch of the\ncode repository (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-linkis"},"https://github.com/apache/incubator-linkis"),")."))}m.isMDXComponent=!0}}]);