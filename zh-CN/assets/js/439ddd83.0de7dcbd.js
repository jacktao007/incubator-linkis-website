"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[94172],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),d=i,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||l;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},94328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const l={title:"\u5982\u4f55\u8fdb\u884c Kubernetes \u90e8\u7f72",authors:["jacktao"],tags:["github"]},a=void 0,o={permalink:"/zh-CN/blog/2022/07/16/deploy-linkis-with-kubernetes",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/i18n/zh-CN",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2022-07-16-deploy-linkis-with-kubernetes.md",title:"\u5982\u4f55\u8fdb\u884c Kubernetes \u90e8\u7f72",description:"1. \u4f9d\u8d56\u7248\u672c",date:"2022-07-16T00:00:00.000Z",formattedDate:"2022\u5e747\u670816\u65e5",tags:[{label:"github",permalink:"/zh-CN/blog/tags/github"}],readingTime:2.535,truncated:!1,authors:[{name:"jacktao",title:"\u5f00\u6e90\u8d21\u732e\u8005",url:"https://github.com/jacktao007",imageURL:"https://avatars.githubusercontent.com/u/1073365?v=4",key:"jacktao"}],prevItem:{title:"Linkis1.1.1 \u9002\u914d hadoop3.1.1 \u4ee5\u53ca\u90e8\u7f72\u5176\u4ed6\u7cfb\u7edf\u670d\u52a1",permalink:"/zh-CN/blog/2022/08/08/linkis111-compile-integration"},nextItem:{title:"\u5982\u4f55\u7f16\u5199 Github Action",permalink:"/zh-CN/blog/2022/07/04/how-to-add-auto-bot"}},s={authorsImageUrls:[void 0]},c=[{value:"1. \u4f9d\u8d56\u7248\u672c",id:"1-\u4f9d\u8d56\u7248\u672c",children:[]},{value:"2.\u5b89\u88c5docker",id:"2\u5b89\u88c5docker",children:[{value:"2.1 \u5b89\u88c5\u6559\u7a0b",id:"21-\u5b89\u88c5\u6559\u7a0b",children:[]},{value:"2.2 \u8bbe\u7f6e\u56fd\u5185\u955c\u50cf",id:"22-\u8bbe\u7f6e\u56fd\u5185\u955c\u50cf",children:[]}]},{value:"3. \u5b89\u88c5kind",id:"3-\u5b89\u88c5kind",children:[]},{value:"4. \u5b89\u88c5JDK \u548c Maven",id:"4-\u5b89\u88c5jdk-\u548c-maven",children:[]},{value:"5. \u5b89\u88c5NodeJS",id:"5-\u5b89\u88c5nodejs",children:[]},{value:"6. \u7f16\u8bd1linkis",id:"6-\u7f16\u8bd1linkis",children:[]},{value:"7. \u521b\u5efa\u96c6\u7fa4",id:"7-\u521b\u5efa\u96c6\u7fa4",children:[]},{value:"8. \u5b89\u88c5helm charts",id:"8-\u5b89\u88c5helm-charts",children:[]},{value:"9.\u8bbf\u95eelinkis\u9875\u9762",id:"9\u8bbf\u95eelinkis\u9875\u9762",children:[]},{value:"10.\u4f7f\u7528Linkis\u5ba2\u6237\u7aef\u6d4b\u8bd5",id:"10\u4f7f\u7528linkis\u5ba2\u6237\u7aef\u6d4b\u8bd5",children:[]},{value:"11.\u5b89\u88c5kubectl",id:"11\u5b89\u88c5kubectl",children:[]}],p={toc:c};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-\u4f9d\u8d56\u7248\u672c"},"1. \u4f9d\u8d56\u7248\u672c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"kind github\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind"},"https://github.com/kubernetes-sigs/kind"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"kind\u5b98\u7f51\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind.sigs.k8s.io/")))),(0,i.kt)("p",null,"\u7248\u672c:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kind 0.14.0"),(0,i.kt)("li",{parentName:"ul"},"docker  20.10.17"),(0,i.kt)("li",{parentName:"ul"},"node v14.19.3")),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"1.\u5148\u786e\u4fdd\u524d\u540e\u7aef\u80fd\u591f\u6b63\u5e38\u7f16\u8bd1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2.\u786e\u4fdd\u7ec4\u4ef6\u4f9d\u8d56\u7248\u672c")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"3.kind\u662f\u7528docker\u5bb9\u5668\u6a21\u62df\u8282\u70b9\u7684 \u673a\u5668\u91cd\u542f\u56de\u6765\u5bb9\u5668\u90fd\u53d8\u4e86 \u8c03\u5ea6\u5668\u5c31\u4e0d\u5de5\u4f5c\u4e86 \u8fd9\u4e2a\u662fkind\u7684limitation,\u5b98\u65b9\u6587\u6863\u6709\u8be6\u7ec6\u8bf4\u660e\u3002"))),(0,i.kt)("h2",{id:"2\u5b89\u88c5docker"},"2.\u5b89\u88c5docker"),(0,i.kt)("h3",{id:"21-\u5b89\u88c5\u6559\u7a0b"},"2.1 \u5b89\u88c5\u6559\u7a0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo yum install -y yum-utils device-mapper-persistent-data lvm2\n\nsudo yum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n\nsudo sed -i 's+download.docker.com+mirrors.aliyun.com/docker-ce+' /etc/yum.repos.d/docker-ce.repo\n\nsudo yum makecache fast\n\nsudo yum -y install docker-ce\n\nsystemctl start docker\n\nsystemctl enable docker\n")),(0,i.kt)("h3",{id:"22-\u8bbe\u7f6e\u56fd\u5185\u955c\u50cf"},"2.2 \u8bbe\u7f6e\u56fd\u5185\u955c\u50cf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'vi /etc/docker/daemon.json\n\n{\n\n"registry-mirrors": ["http://hub-mirror.c.163.com"],\n\n"insecure-registries": ["https://registry.mydomain.com","http://hub-mirror.c.163.com"]\n\n}\n')),(0,i.kt)("h2",{id:"3-\u5b89\u88c5kind"},"3. \u5b89\u88c5kind"),(0,i.kt)("p",null,"\uff081\uff09\u624b\u5de5\u4e0b\u8f7dkind\u4e8c\u8fdb\u5236"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/releases"},"https://github.com/kubernetes-sigs/kind/releases")),(0,i.kt)("p",null,"\uff082\uff09\u5b89\u88c5kind\u4e8c\u8fdb\u5236"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"chmod +x ./kind\n\nmv kind-linux-amd64 /usr/bin/kind\n")),(0,i.kt)("h2",{id:"4-\u5b89\u88c5jdk-\u548c-maven"},"4. \u5b89\u88c5JDK \u548c Maven"),(0,i.kt)("p",null,"\uff081\uff09\u53c2\u8003\u901a\u7528\u5b89\u88c5\u6559\u7a0b\uff0c\u5b89\u88c5\u5982\u4e0b\u7ec4\u4ef6"),(0,i.kt)("p",null,"jdk 1.8"),(0,i.kt)("p",null,"mavne 3.5+"),(0,i.kt)("h2",{id:"5-\u5b89\u88c5nodejs"},"5. \u5b89\u88c5NodeJS"),(0,i.kt)("p",null,"\uff081\uff09\u5b89\u88c5\u7248\u672c"),(0,i.kt)("p",null,"node v14.19.3"),(0,i.kt)("p",null,"\uff082\uff09\u5b89\u88c5nvm"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'export http_proxy=http://10.0.0.150:7890\n\nexport https_proxy=http://10.0.0.150:7890\n\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n\nexport NVM_DIR="$HOME/.nvm"\n\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\n')),(0,i.kt)("p",null,"\uff083\uff09\u5b89\u88c5nodejs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nvm ls-remote\n\nnvm install v14.19.3\n")),(0,i.kt)("p",null,"\uff084\uff09\u914d\u7f6eNPM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm config set registry https://registry.npmmirror.com\n\nnpm config set sass_binary_site https://registry.npmmirror.com/binary.html?path=node-sass/\n")),(0,i.kt)("p",null,"\uff085\uff09\u7f16\u8bd1\u524d\u7aef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install -g yarn\n\nyarn\n\nyarn build\n\nyarn \n")),(0,i.kt)("h2",{id:"6-\u7f16\u8bd1linkis"},"6. \u7f16\u8bd1linkis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\\# 1. When compiling for the first time, execute the following command first\n\n./mvnw -N install\n\n\\# 2. make the linkis distribution package\n\n\\# - Option 1: make the linkis distribution package only\n\n./mvnw clean install -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n\n\\# - Option 2: make the linkis distribution package and docker image\n\n./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n\n\\# - Option 3: linkis distribution package and docker image (included web)\n\n./mvnw clean install -Pdocker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true -Dlinkis.build.web=true\n")),(0,i.kt)("h2",{id:"7-\u521b\u5efa\u96c6\u7fa4"},"7. \u521b\u5efa\u96c6\u7fa4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dos2unix ./linkis-dist/helm/scripts/*.sh\n\n./linkis-dist/helm/scripts/create-test-kind.sh\n")),(0,i.kt)("h2",{id:"8-\u5b89\u88c5helm-charts"},"8. \u5b89\u88c5helm charts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," ./scripts/install-charts.sh linkis linkis-demo\n")),(0,i.kt)("h2",{id:"9\u8bbf\u95eelinkis\u9875\u9762"},"9.\u8bbf\u95eelinkis\u9875\u9762"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl port-forward -n linkis  --address=0.0.0.0 service/linkis-demo-web 8087:8087\n\nhttp://10.0.2.101:8087\n")),(0,i.kt)("h2",{id:"10\u4f7f\u7528linkis\u5ba2\u6237\u7aef\u6d4b\u8bd5"},"10.\u4f7f\u7528Linkis\u5ba2\u6237\u7aef\u6d4b\u8bd5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kubectl -n linkis exec -it linkis-demo-ps-publicservice-77d7685d9-f59ht -- bash\n./linkis-cli -engineType shell-1 -codeType shell -code "echo \\"hello\\" "  -submitUser hadoop -proxyUser hadoop\n')),(0,i.kt)("h2",{id:"11\u5b89\u88c5kubectl"},"11.\u5b89\u88c5kubectl"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cat <<EOF > /etc/yum.repos.d/kubernetes.repo\n[kubernetes]\nname=Kubernetes\nbaseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/\nenabled=1\ngpgcheck=1\nrepo_gpgcheck=1\ngpgkey=https://mirrors.aliyun.com/kubernetes/yum/doc/yum-key.gpg https://mirrors.aliyun.com/kubernetes/yum/doc/rpm-package-key.gpg\nEOF\n\nyum install -y --nogpgcheck kubectl\n\nkubectl config view\xa0\xa0\u67e5\u770b\u96c6\u7fa4\u4fe1\u606f\nkubectl config get-contexts\xa0\xa0\u5f97\u5230\u6240\u6709\u96c6\u7fa4context\u5bf9\u8c61\u4fe1\u606f\nkubectl cluster-info\xa0\xa0\u67e5\u770b\u5f53\u524d\u96c6\u7fa4\u60c5\u51b5\n")))}k.isMDXComponent=!0}}]);