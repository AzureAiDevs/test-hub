"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},26113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={slug:"day3",title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",authors:["Valentina"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day3.png",description:"Explore Conversational AI with the Azure OpenAI Service Playground https://azureaidevs.github.io/test-hub/2023-aia/day3 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},o=void 0,l={permalink:"/test-hub/2023-aia/day3",source:"@site/2023-aia/2023-04-04-openai-playground/index.md",title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",description:"Explore Conversational AI with the Azure OpenAI Service Playground https://azureaidevs.github.io/test-hub/2023-aia/day3 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI",date:"2023-04-04T00:00:00.000Z",formattedDate:"April 4, 2023",tags:[{label:"azure-ai",permalink:"/test-hub/2023-aia/tags/azure-ai"},{label:"azure-open-ai",permalink:"/test-hub/2023-aia/tags/azure-open-ai"},{label:"30-days-of-azure-ai",permalink:"/test-hub/2023-aia/tags/30-days-of-azure-ai"}],readingTime:2.3,hasTruncateMarker:!1,authors:[{name:"Valentina Alto",title:"Data&AI Azure Specialist at Microsoft",url:"https://github.com/Valentina-Alto",tag:"@altovalentina",imageURL:"https://github.com/Valentina-Alto.png",key:"Valentina"}],frontMatter:{slug:"day3",title:"3. \ud83c\udfc1Explore the Azure OpenAI Playground",authors:["Valentina"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Azure-OpenAI-Services","Azure-AI"],tags:["azure-ai","azure-open-ai","30-days-of-azure-ai"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day3.png",description:"Explore Conversational AI with the Azure OpenAI Service Playground https://azureaidevs.github.io/test-hub/2023-aia/day3 #30DaysOfAzureAI #AzureAiDevs #AI #OpenAI"},prevItem:{title:"2. \ud83c\udfc1Unleash the power of Azure OpenAI",permalink:"/test-hub/2023-aia/day2"},nextItem:{title:"4. \ud83c\udfc1Build a receipts app with Copilot",permalink:"/test-hub/2023-aia/day4"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\uddd3\ufe0f Day 3 of #30DaysOfAzureAI",id:"\ufe0f-day-3-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Getting started with the Azure OpenAI Playground",id:"-getting-started-with-the-azure-openai-playground",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"},"View today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,n.kt)("a",{parentName:"li",href:"https://developer.microsoft.com/en-us/Newsletter/"},"Monthly AI and Machine Learning Microsoft Tech Newsletter")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/3-explore-the-azure-openai-playground"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h2",{id:"\ufe0f-day-3-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 3 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Explore Conversational AI with the Azure OpenAI Service Playground")),(0,n.kt)("p",null,"Yesterday we talked was an introduction to the Azure OpenAI Service. Today we'll dig deeper into the Azure OpenAI Service Playground, so come along, it'll be fun."),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure OpenAI Playground."),(0,n.kt)("li",{parentName:"ul"},"Custom data sets, experiment management, and model visualization."),(0,n.kt)("li",{parentName:"ul"},"Flexible Azure OpenAI service offerings.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 3",src:a(98439).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/products/cognitive-services/openai-service?WT.mc_id=aiml-89446-dglover"},"Azure OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/cognitive-services/openai/quickstart?pivots=programming-language-studio&WT.mc_id=aiml-89446-dglover"},"Quickstart: Get started generating text using Azure OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/explore-azure-openai?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure OpenAI Service")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://startups.microsoft.com/blog/azure-openai-service-for-startups?WT.mc_id=aiml-89446-dglover"},"Case Study: Azure OpenAI Service powers the next generation of startups"))),(0,n.kt)("h2",{id:"-getting-started-with-the-azure-openai-playground"},"\ud83d\ude8c Getting started with the Azure OpenAI Playground"),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"},"today's article")," to gain an overview of language models and hyperparameters, with a focus on conversational AI models from OpenAI, and how to use the Azure OpenAI Service Playground to experiment with these models."),(0,n.kt)("p",null,"Learn about the three main categories of models offered by OpenAI: GPT-3, Codex, and Embeddings, and the different models available within each category. You'll learn how to tune hyperparameters to tailor the models to specific use cases, and how to consume the models using OpenAI's APIs."),(0,n.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/microsoftazure/azure-openai-playground-279f1f3da562"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/Discussions/discussions/categories/3-explore-the-azure-openai-playground"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/test-hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/test-hub/2023-aia/rss.xml"},(0,n.kt)("img",{src:a(78647).Z,width:"14",height:"14"})," Click to subscribe")))}d.isMDXComponent=!0},98439:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/banner-day3-812b5091437c209a92ed64df784742d9.png"},78647:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);