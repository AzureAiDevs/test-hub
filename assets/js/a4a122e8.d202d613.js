"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8940],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,h=p["".concat(o,".").concat(m)]||p[m]||c[m]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:i,s[1]=l;for(var u=2;u<r;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5599:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={slug:"day18",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day18.png",description:"Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/test-hub/2023-aia/day18 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},s=void 0,l={permalink:"/test-hub/2023-aia/day18",source:"@site/2023-aia/2023-04-19-azureml-endpoints/index.md",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",description:"Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/test-hub/2023-aia/day18 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML",date:"2023-04-19T00:00:00.000Z",formattedDate:"April 19, 2023",tags:[{label:"ai-april",permalink:"/test-hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/test-hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/test-hub/2023-aia/tags/ml-developers"},{label:"azure-ml",permalink:"/test-hub/2023-aia/tags/azure-ml"},{label:"data-scientist",permalink:"/test-hub/2023-aia/tags/data-scientist"}],readingTime:2.19,hasTruncateMarker:!1,authors:[{name:"Vlad Iliescu",title:"Head of AI at Strongbytes and Microsoft MVP",url:"https://github.com/vladiliescu",tag:"@vladiliescu",imageURL:"https://github.com/vladiliescu.png",key:"Vlad"}],frontMatter:{slug:"day18",title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day18.png",description:"Azure ML Managed Online Endpoints - A Quickstart https://azureaidevs.github.io/test-hub/2023-aia/day18 #30DaysOfAzureAI #AzureAiDevs #AI #AzureML"},prevItem:{title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",permalink:"/test-hub/2023-aia/day17"},nextItem:{title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",permalink:"/test-hub/2023-aia/day19"}},o={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day 18 of #30DaysOfAzureAI",id:"\ufe0f-day-18-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Get started with Azure ML&#39;s managed online endpoints",id:"-get-started-with-azure-mls-managed-online-endpoints",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,i.kt)("a",{parentName:"li",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"View today's article")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,i.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/Newsletter/"},"Monthly AI and Machine Learning Microsoft Tech Newsletter")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,i.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/18-azure-ml-managed-online-endpoints"},"Ask a question about this post on GitHub Discussions")),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,i.kt)("h2",{id:"\ufe0f-day-18-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 18 of #30DaysOfAzureAI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Azure ML Managed Online Endpoints - A Quickstart")),(0,i.kt)("p",null,"Yesterday we learned how to streamline ML Development with Azure ML. Today, we'll learn how to deploy ML models using Azure ML managed online endpoints."),(0,i.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"What are Azure ML managed online endpoints."),(0,i.kt)("li",{parentName:"ol"},"The three main components of an online endpoint."),(0,i.kt)("li",{parentName:"ol"},"How to deploy one or more models under the same endpoint.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Image banner for day 18",src:a(47608).Z,width:"834",height:"350"})),(0,i.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,i.kt)("h2",{id:"-get-started-with-azure-mls-managed-online-endpoints"},"\ud83d\ude8c Get started with Azure ML's managed online endpoints"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"Today's article")," discusses the benefits of using Azure Machine Learning's managed online endpoints and compares them to Azure Container Instances. The author outlines three main reasons why they prefer managed online endpoints: built-in security, native blue/green deployments, and auto-scaling with Azure Monitor."),(0,i.kt)("p",null,"Step-by-step instructions are provided for for deploying an online endpoint that translates API inputs to something a machine learning model can handle, invokes the model, and returns formatted results."),(0,i.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,i.kt)("p",null,"Today's ",(0,i.kt)("a",{parentName:"p",href:"https://vladiliescu.net/aml-managed-endpoints-quickstart/"},"article"),"."),(0,i.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/18-azure-ml-managed-online-endpoints"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,i.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,i.kt)("p",null,"What's next? View the ",(0,i.kt)("a",{parentName:"p",href:"/test-hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/test-hub/2023-aia/rss.xml"},(0,i.kt)("img",{src:a(78647).Z,width:"14",height:"14"})," Click to subscribe")))}p.isMDXComponent=!0},47608:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/banner-day18-833aa8307e96a53f610777f726e18e23.png"},78647:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);