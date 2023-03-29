"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4239],{88704:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var i=a(87462),n=(a(67294),a(3905)),s=a(30925);const l={slug:"day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbNLP Models in Excel w/ ONNX Runtime",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day12.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Build an Excel Add-in with ONNX Runtime Web for NLP Tasks https://azureaidevs.github.io/test-hub/2023-aia/day12"},r=void 0,o={permalink:"/test-hub/2023-aia/day12",source:"@site/2023-aia/2023-04-13-inside-onnx-excel/index.md",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbNLP Models in Excel w/ ONNX Runtime",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Build an Excel Add-in with ONNX Runtime Web for NLP Tasks https://azureaidevs.github.io/test-hub/2023-aia/day12",date:"2023-04-13T00:00:00.000Z",formattedDate:"April 13, 2023",tags:[{label:"ai-april",permalink:"/test-hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/test-hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/test-hub/2023-aia/tags/app-developers"}],readingTime:2.96,hasTruncateMarker:!1,authors:[{name:"Cassie Breviu",title:"Senior Program Manager",url:"https://github.com/cassiebreviu",tag:"@CassieBreviu",imageURL:"https://github.com/cassiebreviu/bio/blob/master/cassieb.png?raw=true",key:"Cassie"}],frontMatter:{slug:"day12",title:"12. \ud83e\uddd1\u200d\ud83d\udcbbNLP Models in Excel w/ ONNX Runtime",authors:["Cassie"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["onnx","JavaScript","Excel","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day12.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Build an Excel Add-in with ONNX Runtime Web for NLP Tasks https://azureaidevs.github.io/test-hub/2023-aia/day12"},prevItem:{title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",permalink:"/test-hub/2023-aia/day11"},nextItem:{title:"13. \ud83e\uddd1\u200d\ud83d\udcbbCopilot's updated AI model",permalink:"/test-hub/2023-aia/day13"}},d={authorsImageUrls:[void 0]},u=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 12 of #30DaysOfAzureAI",id:"\ufe0f-day-12-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Build an Excel Add-in with ONNX Runtime Web for Inferencing NLP models on Device",id:"-build-an-excel-add-in-with-onnx-runtime-web-for-inferencing-nlp-models-on-device",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],h={toc:u};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/test-hub/2023-aia/day12"}),(0,n.kt)("meta",{name:"twitter:title",content:"NLP Models in Excel w/ ONNX Runtime"}),(0,n.kt)("meta",{name:"twitter:description",content:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Build an Excel Add-in with ONNX Runtime Web for NLP Tasks"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day12.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/test-hub/2023-aia/day12"}),(0,n.kt)("meta",{property:"og:title",content:"NLP Models in Excel w/ ONNX Runtime"}),(0,n.kt)("meta",{property:"og:description",content:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 12 of #30DaysOfAzureAI. Build an Excel Add-in with ONNX Runtime Web for NLP Tasks"}),(0,n.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day12.png"}),(0,n.kt)("meta",{property:"og:type",content:"article"}),(0,n.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,n.kt)("link",{rel:"canonical",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"View today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/azure-ai-app-developers"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h3",{id:"please-share"},"Please share"),(0,n.kt)(s.Z,{page_url:"https://azureaidevs.github.io/test-hub/2023-aia/day12",image_url:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day12.png",title:"NLP Models in Excel w/ ONNX Runtime",description:"\ud83e\uddd1\u200d\ud83d\udcbbDay 12 of #30DaysOfAzureAI. Excel + NLP + ONNX = \ud83d\udd25! Get ready to build a powerful Excel add-in with BERT NLP using the ONNX Runtime.",hashtags:"AI,ONNXRuntime",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,n.kt)("h2",{id:"\ufe0f-day-12-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 12 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Build an Excel Add-in with ONNX Runtime Web for NLP Tasks")),(0,n.kt)("p",null,'Yesterday was all about building cross-platform intelligent apps with .NET MAUI and ONNX. Today is for people looking to extend Excel with BERT NLP tasks enabled by ONNX Runtime Web in JavaScript. Wait, was "Excel, BERT, JavaScript and ONNX" used in the same sentence?\ud83d\ude04 Yup, they were, so follow along to learn more.'),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Excel Add-ins with Natural Language Processing using BERT and the ONNX Runtime."),(0,n.kt)("li",{parentName:"ul"},"Step-by-step instructions and code examples.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},(0,n.kt)("img",{alt:"Image banner for day 12",src:a(28279).Z,width:"1920",height:"1080"}))),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard"))),(0,n.kt)("h2",{id:"-build-an-excel-add-in-with-onnx-runtime-web-for-inferencing-nlp-models-on-device"},"\ud83d\ude8c Build an Excel Add-in with ONNX Runtime Web for Inferencing NLP models on Device"),(0,n.kt)("p",null,"Read ",(0,n.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"today's article")," about building an Excel Add-in with ONNX Runtime and JavaScript with on device inferencing. You'll learn how ONNX Runtime enables the inference of ML models cross-platform even locally in an Excel add-in! "),(0,n.kt)("p",null,"The tasks in this example will show you how to perform the natural language processing tasks of sentiment analysis and question and answering all locally within a spreadsheet. \xa0",(0,n.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"Today's article")," provides step-by-step instructions and code examples to help readers follow along in building the add-in."),(0,n.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://onnxruntime.ai/docs/tutorials/web/excel-addin-bert-js.html"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/azure-ai-app-developers"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/test-hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/test-hub/2023-aia/rss.xml"},(0,n.kt)("img",{alt:"The image is the RSS feed available icon",src:a(78647).Z,width:"14",height:"14"})," Click to subscribe")))}c.isMDXComponent=!0},30925:(e,t,a)=>{a.d(t,{Z:()=>m});var i=a(67294),n=a(46616),s=a(87385),l=a(69641),r=a(78854),o=a(16573),d=a(1020),u=a(48137),h=a(66339),c=a(53597),p=a(37332);function m(e){let{page_url:t,image_url:a,title:m,hashtags:g,hashtag:b,description:N}=e;return i.createElement("div",null,i.createElement(n.Z,{url:t,title:N,hashtags:[g]},i.createElement(s.Z,{size:32,round:!0})),"\xa0",i.createElement(l.Z,{url:t,image:a},i.createElement(r.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:t,quote:m,hashtag:b},i.createElement(d.Z,{size:32,round:!0})),"\xa0",i.createElement(c.Z,{title:m,url:t},i.createElement(p.Z,{size:32,round:!0})),"\xa0",i.createElement(u.Z,{subject:m,body:N,url:t},i.createElement(h.Z,{size:32,round:!0})))}},28279:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day12-060fdb09af81b71ae1437405d7691a47.png"},78647:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);