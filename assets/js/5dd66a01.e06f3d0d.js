"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1496],{85236:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(87462),n=(a(67294),a(3905)),o=a(30925);const r={slug:"day26",title:"26. \ud83c\udfedStable Diffusion on Azure ML",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","StableDiffusion"],tags:["ai-april","30-days-of-azure-ai","azure-ml","ml-engineers","app-developers","workshop"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day26.png",description:"\ud83c\udfedWelcome to day 26 of #30DaysOfAzureAI. How to run Stable Diffusion Web UI on Azure ML compute instances https://azureaidevs.github.io/test-hub/2023-aia/day26"},s=void 0,l={permalink:"/test-hub/2023-aia/day26",source:"@site/2023-aia/2023-04-28-stable-diffusion/index.md",title:"26. \ud83c\udfedStable Diffusion on Azure ML",description:"\ud83c\udfedWelcome to day 26 of #30DaysOfAzureAI. How to run Stable Diffusion Web UI on Azure ML compute instances https://azureaidevs.github.io/test-hub/2023-aia/day26",date:"2023-04-28T00:00:00.000Z",formattedDate:"April 28, 2023",tags:[{label:"ai-april",permalink:"/test-hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/test-hub/2023-aia/tags/30-days-of-azure-ai"},{label:"azure-ml",permalink:"/test-hub/2023-aia/tags/azure-ml"},{label:"ml-engineers",permalink:"/test-hub/2023-aia/tags/ml-engineers"},{label:"app-developers",permalink:"/test-hub/2023-aia/tags/app-developers"},{label:"workshop",permalink:"/test-hub/2023-aia/tags/workshop"}],readingTime:3.095,hasTruncateMarker:!1,authors:[{name:"Vlad Iliescu",title:"Head of AI at Strongbytes and Microsoft MVP",url:"https://github.com/vladiliescu",tag:"@vladiliescu",imageURL:"https://github.com/vladiliescu.png",key:"Vlad"}],frontMatter:{slug:"day26",title:"26. \ud83c\udfedStable Diffusion on Azure ML",authors:["Vlad"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","StableDiffusion"],tags:["ai-april","30-days-of-azure-ai","azure-ml","ml-engineers","app-developers","workshop"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day26.png",description:"\ud83c\udfedWelcome to day 26 of #30DaysOfAzureAI. How to run Stable Diffusion Web UI on Azure ML compute instances https://azureaidevs.github.io/test-hub/2023-aia/day26"},prevItem:{title:"25. \ud83c\udfedBuild a Patient Registration App",permalink:"/test-hub/2023-aia/day25"},nextItem:{title:"27. \ud83c\udfedEnhance CX with Azure Personalizer",permalink:"/test-hub/2023-aia/day27"}},u={authorsImageUrls:[void 0]},d=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 26 of #30DaysOfAzureAI",id:"\ufe0f-day-26-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Get creative with Stable Diffusion on Azure ML",id:"-get-creative-with-stable-diffusion-on-azure-ml",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],h={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/test-hub/2023-aia/day26"}),(0,n.kt)("meta",{name:"twitter:title",content:"Stable Diffusion on Azure ML"}),(0,n.kt)("meta",{name:"twitter:description",content:"\ud83c\udfedWelcome to day 26 of #30DaysOfAzureAI. How to run Stable Diffusion Web UI on Azure ML compute instances"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day26.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("meta",{property:"og:url",content:"https://azureaidevs.github.io/test-hub/2023-aia/day26"}),(0,n.kt)("meta",{property:"og:title",content:"Stable Diffusion on Azure ML"}),(0,n.kt)("meta",{property:"og:description",content:"\ud83c\udfedWelcome to day 26 of #30DaysOfAzureAI. How to run Stable Diffusion Web UI on Azure ML compute instances"}),(0,n.kt)("meta",{property:"og:image",content:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day26.png"}),(0,n.kt)("meta",{property:"og:type",content:"article"}),(0,n.kt)("meta",{property:"og:site_name",content:"Azure AI Developer"}),(0,n.kt)("link",{rel:"canonical",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"},"View today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/azure-ai-workshops"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h3",{id:"please-share"},"Please share"),(0,n.kt)(o.Z,{page_url:"https://azureaidevs.github.io/test-hub/2023-aia/day26",image_url:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day26.png",title:"Stable Diffusion on Azure ML",description:"\ud83c\udfedDay 26 of #30DaysOfAzureAI. Ready to explore Stable Diffusion's image generative model on Azure ML? Learn how to install and configure the web UI on GPU compute instances, and improve performance and security with our tips and tricks.",hashtags:"AI,AzureML",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,n.kt)("h2",{id:"\ufe0f-day-26-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 26 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How to run Stable Diffusion Web UI on Azure ML compute instances")),(0,n.kt)("p",null,"Yesterday we learned about how to build a Patient Registration app with Azure Form Recognizer. Today's your opportunity to be \"wowed\" by the power of image generative models and run Stable Diffusion on Azure ML. Let's go!"),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Azure ML resources necessary for running Stable Diffusion."),(0,n.kt)("li",{parentName:"ul"},"Installing and configuring Stable Diffusion Web UI on Azure ML GPU Compute Instances."),(0,n.kt)("li",{parentName:"ul"},"Tips and tricks for improving the performance and security of your installation.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"},(0,n.kt)("img",{alt:"Image banner for day 26",src:a(75716).Z,width:"1920",height:"1080"}))),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,n.kt)("li",{parentName:"ul"},"[What is Azure Machine Learning?]","(",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azur"},"https://learn.microsoft.com/azur"),"\ne/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover)")),(0,n.kt)("h2",{id:"-get-creative-with-stable-diffusion-on-azure-ml"},"\ud83d\ude8c Get creative with Stable Diffusion on Azure ML"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"},"Today's article")," takes you into the fascinating world of Stable Diffusion's image generative model - a model that can generate images of faces, animals, anything really. It's a lot of fun to play with, so let your imagination run wild."),(0,n.kt)("p",null,"You'll learn about the prerequisites required to run Stable Diffusion Web UI in Azure ML, and get access to custom code snippets that will help you get started. You'll also find out how to configure the Web UI to run on a GPU compute instance, and how to optimize your installation for prolonged usage."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(42416).Z,width:"1536",height:"768"})),(0,n.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://vladiliescu.net/stable-diffusion-web-ui-on-azure-ml/"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/azure-ai-workshops"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/test-hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/test-hub/2023-aia/rss.xml"},(0,n.kt)("img",{alt:"The image is the RSS feed available icon",src:a(78647).Z,width:"14",height:"14"})," Click to subscribe")))}c.isMDXComponent=!0},30925:(e,t,a)=>{a.d(t,{Z:()=>m});var i=a(67294),n=a(46616),o=a(87385),r=a(69641),s=a(78854),l=a(16573),u=a(1020),d=a(48137),h=a(66339),c=a(53597),p=a(37332);function m(e){let{page_url:t,image_url:a,title:m,hashtags:f,hashtag:g,description:b}=e;return i.createElement("div",null,i.createElement(n.Z,{url:t,title:b,hashtags:[f]},i.createElement(o.Z,{size:32,round:!0})),"\xa0",i.createElement(r.Z,{url:t,image:a},i.createElement(s.Z,{size:32,round:!0})),"\xa0",i.createElement(l.Z,{url:t,quote:m,hashtag:g},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(c.Z,{title:m,url:t},i.createElement(p.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{subject:m,body:b,url:t},i.createElement(h.Z,{size:32,round:!0})))}},42416:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-1c5cdbd1cd567ab75dd7c7b1fc6eaf3b.jpeg"},75716:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day26-edf827cb2aaad336c2bf3fd3fd67c0bc.png"},78647:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);