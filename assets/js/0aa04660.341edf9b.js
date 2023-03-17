"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1964],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,i,r=function(e,a){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),u=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},p=function(e){var a=u(e.components);return i.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},h=i.forwardRef((function(e,a){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),h=r,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||s;return t?i.createElement(m,n(n({ref:a},p),{},{components:t})):i.createElement(m,n({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var s=t.length,n=new Array(s);n[0]=h;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:r,n[1]=o;for(var u=2;u<s;u++)n[u]=t[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},21704:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=t(87462),r=(t(67294),t(3905));const s={slug:"day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers","machine-learning-debugging-tools","responsible-ai-tools"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day19.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/test-hub/2023-aia/day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics #AIforAll"},n=void 0,o={permalink:"/test-hub/2023-aia/day19",source:"@site/2023-aia/2023-04-20-rai-part-1/index.md",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",description:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/test-hub/2023-aia/day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics #AIforAll",date:"2023-04-20T00:00:00.000Z",formattedDate:"April 20, 2023",tags:[{label:"azure-ai",permalink:"/test-hub/2023-aia/tags/azure-ai"},{label:"responsible-ai",permalink:"/test-hub/2023-aia/tags/responsible-ai"},{label:"30-days-of-azure-ai",permalink:"/test-hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/test-hub/2023-aia/tags/ml-developers"},{label:"app-developers",permalink:"/test-hub/2023-aia/tags/app-developers"},{label:"machine-learning-debugging-tools",permalink:"/test-hub/2023-aia/tags/machine-learning-debugging-tools"},{label:"responsible-ai-tools",permalink:"/test-hub/2023-aia/tags/responsible-ai-tools"}],readingTime:2.395,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate",url:"https://github.com/ruyakubu",tag:"@ruthieyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers","machine-learning-debugging-tools","responsible-ai-tools"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day19.png",description:"Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/test-hub/2023-aia/day19 #30DaysOfAzureAI #AzureAiDevs #AI #AIEthics #AIforAll"},prevItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/test-hub/2023-aia/day18"},nextItem:{title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops w/ Azure MLOps",permalink:"/test-hub/2023-aia/day20"}},l={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day 19 of #30DaysOfAzureAI",id:"\ufe0f-day-19-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c What is Responsible AI Dashboard?",id:"-what-is-responsible-ai-dashboard",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],p={toc:u};function c(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"},"View today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/Newsletter/"},"Monthly AI and Machine Learning Microsoft Tech Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/19-debug-models-w/-responsible-ai"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"\ufe0f-day-19-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 19 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Guide to analyzing ML models for Responsible AI issues (Part 1)")),(0,r.kt)("p",null,'Yesterday we learned how to deploy ML models using Azure ML managed online endpoints. In the "Fundamentals" week we learned about the importance of Responsible AI. Today, we get practical, you\'ll learn about the Azure ML Responsible AI Dashboard and how it can help you build fairer ML models.'),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Azure ML RAI Dashboard."),(0,r.kt)("li",{parentName:"ul"},"Build fairer and responsible AI models."),(0,r.kt)("li",{parentName:"ul"},"Tools for responsible AI development, including model interoperability, error analysis, and counterfactual analysis.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 19",src:t(29715).Z,width:"834",height:"350"})),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://news.microsoft.com/source/features/ai/microsoft-approach-to-ai/#using-ai-responsibly?WT.mc_id=aiml-89446-dglover"},"Microsoft's approach to using AI responsibly")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blogs.microsoft.com/on-the-issues/2023/02/02/responsible-ai-chatgpt-artificial-intelligence?WT.mc_id=aiml-89446-dglover"},"Meeting the AI moment: advancing the future through responsible AI"))),(0,r.kt)("h2",{id:"-what-is-responsible-ai-dashboard"},"\ud83d\ude8c What is Responsible AI Dashboard?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"},"Today's article")," is about the Responsible AI (RAI) Dashboard is a suite of open-source tools that help developers create responsible AI models with features such as model statistics, data explorer, error analysis, model interpretability, counterfactual analysis, and causal inference. The dashboard is built on leading open-source tools such as ErrorAnalysis, InterpretML, Fairlearn, DiCE, and EconML, and it can be accessed through the Azure Machine Learning platform. The RAI components allow developers to troubleshoot and analyze models and make better decisions to produce more responsible AI systems."),(0,r.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/19-debug-models-w/-responsible-ai"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/test-hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/test-hub/2023-aia/rss.xml"},(0,r.kt)("img",{src:t(78647).Z,width:"14",height:"14"})," Click to subscribe")))}c.isMDXComponent=!0},29715:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day19-5a1412d792726cee1bfe955224d657ed.png"},78647:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);