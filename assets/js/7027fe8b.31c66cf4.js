"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9494],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(a),h=r,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return a?i.createElement(m,n(n({ref:t},d),{},{components:a})):i.createElement(m,n({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,n=new Array(o);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,n[1]=l;for(var u=2;u<o;u++)n[u]=a[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},42468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=a(87462),r=(a(67294),a(3905));const o={slug:"day13",title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",authors:["Shuyin"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Copilot","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day13.png",description:"GitHub Copilot Upgraded: Faster, More Accurate, and More Secure Code https://azureaidevs.github.io/hub/2023-aia/day13 #30DaysOfAzureAI #AzureAiDevs #AI #Copilot"},n=void 0,l={permalink:"/hub/2023-aia/day13",source:"@site/2023-aia/2023-04-14-copilot/index.md",title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",description:"GitHub Copilot Upgraded: Faster, More Accurate, and More Secure Code https://azureaidevs.github.io/hub/2023-aia/day13 #30DaysOfAzureAI #AzureAiDevs #AI #Copilot",date:"2023-04-14T00:00:00.000Z",formattedDate:"April 14, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/hub/2023-aia/tags/app-developers"},{label:"copilot",permalink:"/hub/2023-aia/tags/copilot"}],readingTime:2.29,hasTruncateMarker:!1,authors:[{name:"Shuyin Zhao",title:"Senior Director Of Product Management",url:"https://github.com/shuyinzjk",tag:"@newmomrules",imageURL:"https://github.com/shuyinzjk.png",key:"Shuyin"}],frontMatter:{slug:"day13",title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",authors:["Shuyin"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Copilot","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers","copilot"],image:"https://azureaidevs.github.io/hub/img/2023-aia/banner-day13.png",description:"GitHub Copilot Upgraded: Faster, More Accurate, and More Secure Code https://azureaidevs.github.io/hub/2023-aia/day13 #30DaysOfAzureAI #AzureAiDevs #AI #Copilot"},prevItem:{title:"12. \ud83e\uddd1\u200d\ud83d\udcbbNLP Models in Excel w/ ONNX Runtime",permalink:"/hub/2023-aia/day12"},nextItem:{title:"14. \ud83e\uddd1\u200d\ud83d\udcbbBlazor apps and Azure OpenAI",permalink:"/hub/2023-aia/day14"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day 13 of #30DaysOfAzureAI",id:"\ufe0f-day-13-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Advances in GitHub&#39;s Copilot code generative models",id:"-advances-in-githubs-copilot-code-generative-models",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://github.blog/2023-02-14-github-copilot-now-has-a-better-ai-model-and-new-capabilities/"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,r.kt)("a",{parentName:"li",href:"https://github.blog/2023-02-14-github-copilot-now-has-a-better-ai-model-and-new-capabilities/"},"View today's article")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,r.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/Newsletter/"},"Monthly AI and Machine Learning Microsoft Tech Newsletter")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,r.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/13-copilot's-updated-ai-model"},"Ask a question about this post on GitHub Discussions")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,r.kt)("h2",{id:"\ufe0f-day-13-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 13 of #30DaysOfAzureAI"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GitHub Copilot Upgraded: Faster, More Accurate, and More Secure Code")),(0,r.kt)("p",null,"Yesterday was all about creating intelligent Excel Add-ins. Today is a look at GitHub Copilot advances to boast productivity, and build better, smarter, safer intelligent apps."),(0,r.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copilot's improved suggestions and the new Fill-In-the-Middle paradigm."),(0,r.kt)("li",{parentName:"ul"},"VS Code extension with a lightweight model and improved acceptance rate."),(0,r.kt)("li",{parentName:"ul"},"AI-based vulnerability prevention system to provide alternative suggestions. ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Image banner for day 13",src:a(75780).Z,width:"834",height:"350"})),(0,r.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.blog/2021-06-29-introducing-github-copilot-ai-pair-programmer?WT.mc_id=aiml-89446-dglover"},"Introducing GitHub Copilot: your AI pair programmer"))),(0,r.kt)("h2",{id:"-advances-in-githubs-copilot-code-generative-models"},"\ud83d\ude8c Advances in GitHub's Copilot code generative models"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.blog/2023-02-14-github-copilot-now-has-a-better-ai-model-and-new-capabilities/"},"Today's article")," looks at the updates to GitHub's Copilot with the goal of improving code suggestions and responsiveness for developers. The underlying Codex model has been updated to deliver better results for code synthesis and the Fill-In-the-Middle paradigm has been introduced for better prompts for code suggestions. "),(0,r.kt)("p",null,"Additionally, an AI-based vulnerability prevention system has been introduced to identify and block insecure coding patterns in real-time. The system uses language models to quickly detect vulnerable patterns, including hardcoded credentials and SQL injections, even in incomplete code fragments. Vulnerable code suggestions are replaced with alternative suggestions."),(0,r.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,r.kt)("p",null,"Today's ",(0,r.kt)("a",{parentName:"p",href:"https://github.blog/2023-02-14-github-copilot-now-has-a-better-ai-model-and-new-capabilities/"},"article"),"."),(0,r.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/13-copilot's-updated-ai-model"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,r.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,r.kt)("p",null,"What's next? View the ",(0,r.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,r.kt)("img",{src:a(78647).Z,width:"14",height:"14"})," Click to subscribe")))}p.isMDXComponent=!0},75780:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day13-ba9f0c81ebb87973b496d7b1d558a42e.png"},78647:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);