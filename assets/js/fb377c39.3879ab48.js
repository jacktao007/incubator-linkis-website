"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[63049],{3905:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>u});var t=i(67294);function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,o=function(e,n){if(null==e)return{};var i,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(o[i]=e[i]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=t.createContext({}),d=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},c=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(i),u=o,m=h["".concat(s,".").concat(u)]||h[u]||p[u]||a;return i?t.createElement(m,r(r({ref:n},c),{},{components:i})):t.createElement(m,r({ref:n},c))}));function u(e,n){var i=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=i[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,i)}h.displayName="MDXCreateElement"},46958:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=i(87462),o=(i(67294),i(3905));const a={title:"Deploy Apache Linkis1.1.1 and DSS1.1.0 based on CDH6.3.2",authors:["kevinWdong"],tags:["blog","linki1.1.1","hadoop3.0.0-cdh6.3.2","spark2.4.8","hive2.1.1"]},r=void 0,l={permalink:"/blog/2022/09/27/linkis111-deploy",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/blog/2022-09-27-linkis111-deploy/index.md",source:"@site/blog/2022-09-27-linkis111-deploy/index.md",title:"Deploy Apache Linkis1.1.1 and DSS1.1.0 based on CDH6.3.2",description:"With the development of business and the update and iteration of community products, we found that Linkis1. X has greatly improved its performance in terms of resource management and engine management, which can better meet the requirements of the construction of data middle stations. Compared with version 0.9.3 and the platform we used before, the user experience has also been greatly improved, and the problems such as the inability to view details on the task failure page have also been improved. Therefore, we decided to upgrade Linkis and the WDS suite. The following are the specific practical operations, which we hope will give you a reference.",date:"2022-09-27T00:00:00.000Z",formattedDate:"September 27, 2022",tags:[{label:"blog",permalink:"/blog/tags/blog"},{label:"linki1.1.1",permalink:"/blog/tags/linki-1-1-1"},{label:"hadoop3.0.0-cdh6.3.2",permalink:"/blog/tags/hadoop-3-0-0-cdh-6-3-2"},{label:"spark2.4.8",permalink:"/blog/tags/spark-2-4-8"},{label:"hive2.1.1",permalink:"/blog/tags/hive-2-1-1"}],readingTime:4.92,truncated:!1,authors:[{name:"kevinWdong",title:"contributors",url:"https://github.com/kongslove",imageURL:"https://avatars.githubusercontent.com/u/42604208?v=4",key:"kevinWdong"}],prevItem:{title:"Apache Linkis 1.3.0 PES(Public Enhancement Services) Some Service Merge",permalink:"/blog/2022/10/09/linkis-service-merge"},nextItem:{title:"Linkis1.1.1 adapts Hadoop 3.1.1 and deploys other services",permalink:"/blog/2022/08/08/linkis111-compile-integration"}},s={authorsImageUrls:[void 0]},d=[{value:"CDH6.3.2 Component versions",id:"cdh632-component-versions",children:[]},{value:"hardware environment\xa0",id:"hardware-environment",children:[]},{value:"2.1 Compile code or release installation package?",id:"21-compile-code-or-release-installation-package",children:[]},{value:"2.2 Problems encountered during deployment",id:"22-problems-encountered-during-deployment",children:[{value:"2.2.1  Kerberos configuration",id:"221--kerberos-configuration",children:[]},{value:"2.2.2  Error is reported after Hadoop dependency package is replaced",id:"222--error-is-reported-after-hadoop-dependency-package-is-replaced",children:[]},{value:"2.2.3 Running spark, python, etc. in script reports no plugin for XXX",id:"223-running-spark-python-etc-in-script-reports-no-plugin-for-xxx",children:[]},{value:"2.2.4 Python engine execution error, initialization failed",id:"224-python-engine-execution-error-initialization-failed",children:[]},{value:"2.2.5 Failed to run the pyspark task and reported an error",id:"225-failed-to-run-the-pyspark-task-and-reported-an-error",children:[]},{value:"2.2.6 Error occurs when executing the pyspark task",id:"226-error-occurs-when-executing-the-pyspark-task",children:[]},{value:"2.2.7 Proxy user exception during jdbc engine execution",id:"227-proxy-user-exception-during-jdbc-engine-execution",children:[]}]},{value:"3.1 The database list displayed on the left side of the DSS is incomplete",id:"31-the-database-list-displayed-on-the-left-side-of-the-dss-is-incomplete",children:[]},{value:"3.2 Error jdbc is reported when executing jdbc script in DSS workflow name is empty",id:"32-error-jdbc-is-reported-when-executing-jdbc-script-in-dss-workflow-name-is-empty",children:[]}],c={toc:d};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With the development of business and the update and iteration of community products, we found that Linkis1. X has greatly improved its performance in terms of resource management and engine management, which can better meet the requirements of the construction of data middle stations. Compared with version 0.9.3 and the platform we used before, the user experience has also been greatly improved, and the problems such as the inability to view details on the task failure page have also been improved. Therefore, we decided to upgrade Linkis and the WDS suite. The following are the specific practical operations, which we hope will give you a reference."),(0,o.kt)("h1",{id:"1environment"},"1.Environment"),(0,o.kt)("h2",{id:"cdh632-component-versions"},"CDH6.3.2 Component versions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hadoop:3.0.0-cdh6.3.2"),(0,o.kt)("li",{parentName:"ul"},"hive:2.1.1-cdh6.3.2"),(0,o.kt)("li",{parentName:"ul"},"spark\uff1a2.4.8")),(0,o.kt)("h2",{id:"hardware-environment"},"hardware environment\xa0"),(0,o.kt)("p",null,"128G cloud physical machine*2"),(0,o.kt)("h1",{id:"2-linkis-installation-and-deployment"},"2. Linkis installation and deployment"),(0,o.kt)("h2",{id:"21-compile-code-or-release-installation-package"},"2.1 Compile code or release installation package?"),(0,o.kt)("p",null,"This installation deployment adopts the release installation package method. In order to adapt to the company's CDH6.3.2 version, the dependency packages of hadoop and hive need to be replaced with the CDH6.3.2 version. Here, the installation package is directly replaced. The dependent packages and modules to be replaced are shown in the following list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"// Modules involved \n\nlinkis-engineconn-plugins/spark\nlinkis-engineconn-plugins/hive\n/linkis-commons/public-module\n/linkis-computation-governance/\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"// List of cdh packages that need to be replaced\n\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hive-shims-0.23-2.1.1-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hive-shims-scheduler-2.1.1-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-annotations-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-auth-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-hdfs-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/spark/dist/v2.4.8/lib/hadoop-hdfs-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-mapreduce-client-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-mapreduce-client-jobclient-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-yarn-api-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-yarn-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-yarn-server-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-hdfs-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-mapreduce-client-core-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-mapreduce-client-shuffle-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/hive/dist/v2.1.1/lib/hadoop-yarn-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-annotations-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-auth-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-mapreduce-client-core-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-yarn-api-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-yarn-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-engineconn-plugins/flink/dist/v1.12.2/lib/hadoop-yarn-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-commons/public-module/hadoop-annotations-3.0.0-cdh6.3.2.jar\n./lib/linkis-commons/public-module/hadoop-auth-3.0.0-cdh6.3.2.jar\n./lib/linkis-commons/public-module/hadoop-common-3.0.0-cdh6.3.2.jar\n./lib/linkis-commons/public-module/hadoop-hdfs-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-annotations-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-auth-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-yarn-api-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-yarn-client-3.0.0-cdh6.3.2.jar\n./lib/linkis-computation-governance/linkis-cg-linkismanager/hadoop-yarn-common-3.0.0-cdh6.3.2.jar\n\n")),(0,o.kt)("h2",{id:"22-problems-encountered-during-deployment"},"2.2 Problems encountered during deployment"),(0,o.kt)("h3",{id:"221--kerberos-configuration"},"2.2.1  Kerberos configuration"),(0,o.kt)("p",null,"It needs to be added in the linkis.properties public configuration"),(0,o.kt)("p",null,"Each engine conf also needs to be added"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"wds.linkis.keytab.enable=true\nwds.linkis.keytab.file=/hadoop/bigdata/kerberos/keytab\nwds.linkis.keytab.host.enabled=false\nwds.linkis.keytab.host=your_host\n")),(0,o.kt)("h3",{id:"222--error-is-reported-after-hadoop-dependency-package-is-replaced"},"2.2.2  Error is reported after Hadoop dependency package is replaced"),(0,o.kt)("p",null,"java.lang.NoClassDefFoundError:org/apache/commons/configuration2/Configuration"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(71773).Z})),(0,o.kt)("p",null,"Cause: Configuration class conflict. Add a commons-configuration2-2.1.1.jar under the linkis commons module to resolve the conflict"),(0,o.kt)("h3",{id:""}),(0,o.kt)("h3",{id:"223-running-spark-python-etc-in-script-reports-no-plugin-for-xxx"},"2.2.3 Running spark, python, etc. in script reports no plugin for XXX"),(0,o.kt)("p",null,"Phenomenon: After modifying the version of Spark/Python in the configuration file, the startup engine reports no plugin for XXX"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(79398).Z})),(0,o.kt)("p",null,"Reason: LabelCommonConfig.java and GovernanceCommonConf In scala, the version of the engine is written dead, the corresponding version is modified, and all jars containing these two classes (linkis computation governance common-1.1.1. jar and linkis label common-1.1.1. jar) in linkis and other components (including scheduleris) are replaced after compilation"),(0,o.kt)("h3",{id:"224-python-engine-execution-error-initialization-failed"},"2.2.4 Python engine execution error, initialization failed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify python. py and remove the imported pandas module"),(0,o.kt)("li",{parentName:"ul"},"Configure the python loading directory and modify the python engine's linkis-enginecon.properties")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plain"},"pythonVersion=/usr/local/bin/python3.6\n")),(0,o.kt)("h3",{id:"225-failed-to-run-the-pyspark-task-and-reported-an-error"},"2.2.5 Failed to run the pyspark task and reported an error"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(42926).Z})),(0,o.kt)("p",null,"Reason: PYSPARK is not set_ VERSION"),(0,o.kt)("p",null,"resolvent:"),(0,o.kt)("p",null,"Set two parameters in/etc/profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export PYSPARK_ PYTHON=/usr/local/bin/python3.6\nexport PYSPARK_ DRIVER_PYTHON=/usr/local/bin/python3.6\n")),(0,o.kt)("h3",{id:"226-error-occurs-when-executing-the-pyspark-task"},"2.2.6 Error occurs when executing the pyspark task"),(0,o.kt)("p",null,"java.lang.NoSuchFieldError: HIVE",(0,o.kt)("em",{parentName:"p"}," STATS")," JDBC_ TIMEOUT"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(7785).Z})),(0,o.kt)("p",null,"Reason: Spark 2.4.8 uses the hive1.2.1 package, but our hive has been upgraded to version 2.1.1. This parameter has been removed from hive2. Then the code in spark sql still calls the hive parameter, and then an error is reported,"),(0,o.kt)("p",null,"Therefore, HIVE is deleted from the spark sql/hive code",(0,o.kt)("em",{parentName:"p"}," STATS")," JDBC",(0,o.kt)("em",{parentName:"p"}," TIMEOUT This parameter is recompiled and packaged to replace the spark hive in spark 2.4.8")," 2.11-2.4.8.jar"),(0,o.kt)("h3",{id:"227-proxy-user-exception-during-jdbc-engine-execution"},"2.2.7 Proxy user exception during jdbc engine execution"),(0,o.kt)("p",null,"Phenomenon: User A is used to execute a jdbc task 1. The engine chooses to reuse it. Then I also use User B to execute a jdbc task 2. It is found that the submitter of task 2 is A"),(0,o.kt)("p",null,"Analysis reason:"),(0,o.kt)("p",null,"ConnectionManager::getConnection"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image",src:i(73961).Z})),(0,o.kt)("p",null,"When creating a datasource, we judge whether to create it according to the key. The key is a jdbc url, but this granularity may be a bit large, because different users may access the same datasource, such as hive. Their urls are the same, but their account passwords are different. So when the first user creates a datasource, the username has been specified. When the second user comes in, If the data source is found to exist, it will be used directly instead of creating a new data source. Therefore, the code submitted by user B will be executed by user A."),(0,o.kt)("p",null,"Solution: Reduce the key granularity of the data source cache map, and change it to jdbc. url+jdbc. user."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"DSS deployment\nThe installation process refers to the official website documents for installation configuration. The following describes some issues encountered in the installation and debugging process.")),(0,o.kt)("h2",{id:"31-the-database-list-displayed-on-the-left-side-of-the-dss-is-incomplete"},"3.1 The database list displayed on the left side of the DSS is incomplete"),(0,o.kt)("p",null,"Analysis: The database information displayed in the DSS data source module is from the hive metabase. However, because of the permission control through the Sentry in CDH6, most of the hive table metadata information does not exist in the hive metastore, so the displayed data is missing."),(0,o.kt)("p",null,"resolvent:"),(0,o.kt)("p",null,"The original logic is transformed into the way of using jdbc to link hive and obtain table data display from jdbc."),(0,o.kt)("p",null,"Simple logic description:"),(0,o.kt)("p",null,"The properties information of jdbc is obtained through the IDE jdbc configuration information configured on the linkis console."),(0,o.kt)("p",null,"DBS: Get the schema through connection. getMetaData()"),(0,o.kt)("p",null,"TBS: connection. getMetaData(). getTables() Get the tables under the corresponding db"),(0,o.kt)("p",null,"COLUMNS: Get the columns information of the table by executing describe table"),(0,o.kt)("h2",{id:"32-error-jdbc-is-reported-when-executing-jdbc-script-in-dss-workflow-name-is-empty"},"3.2 Error jdbc is reported when executing jdbc script in DSS workflow name is empty"),(0,o.kt)("p",null,"Analysis: The default creator in the dss workflow is Schedulis. Because the related engine parameters of Schedulis are not configured in the management console, the parameters read are all empty."),(0,o.kt)("p",null,"Adding a category of Schedulis to the console gives an error, \u201dThe Schedulis directory already exists. Because the creator in the scheduling system is schedulis, the Schedulis Category cannot be added. In order to better identify each system, the default creator in the dss workflow is changed to nod_exception. This parameter can add wds. linkis. flow. job. creator. v1=nod_execution in the dss flow execution server. properties."))}p.isMDXComponent=!0},71773:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/config-err-0b7267a47e539866aefbe8be9db6c197.png"},73961:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/jdbc-engine-analyze-e765a7057a729bb49816e9e7ebffc787.png"},79398:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/pugin-error-0b7267a47e539866aefbe8be9db6c197.png"},42926:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/pyspark-error-59e263d21e848c5bda995cdc900e0ca9.png"},7785:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/spark-hive-verion-error-73f07dc42df540b1aeb4ea048a131fa8.png"}}]);