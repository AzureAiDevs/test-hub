"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[271],{1764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var i=a(87462),n=(a(67294),a(3905)),r=a(30925);const o={slug:"day17",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day17.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 17 of #30DaysOfAzureAI. Unlock the potential of your ML projects with Azure ML Components & Pipelines. Streamline your development, boost productivity and take your hardwork to new heights. Begin with Azure ML today!"},l=void 0,s={permalink:"/hub/2023-aia/day17",source:"@site/2023-aia/2023-04-18-azureml-pipelines/index.md",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 17 of #30DaysOfAzureAI. Unlock the potential of your ML projects with Azure ML Components & Pipelines. Streamline your development, boost productivity and take your hardwork to new heights. Begin with Azure ML today!",date:"2023-04-18T00:00:00.000Z",formattedDate:"April 18, 2023",tags:[{label:"ai-april",permalink:"/hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/hub/2023-aia/tags/ml-developers"},{label:"azure-ml",permalink:"/hub/2023-aia/tags/azure-ml"},{label:"data-scientist",permalink:"/hub/2023-aia/tags/data-scientist"}],readingTime:2.195,hasTruncateMarker:!1,authors:[{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AI/ML",url:"https://github.com/bstollnitz",source_image_url:"https://github.com/bstollnitz.png",tag:"@beastollnitz",imageURL:"https://raw.githubusercontent.com/AzureAiDevs/30_days_blog_generator/main/assets/authors/Bea.png",key:"Bea"}],frontMatter:{slug:"day17",title:"17. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Model Dev with Azure ML",authors:["Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","ml-developers","azure-ml","data-scientist"],image:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day17.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 17 of #30DaysOfAzureAI. Unlock the potential of your ML projects with Azure ML Components & Pipelines. Streamline your development, boost productivity and take your hardwork to new heights. Begin with Azure ML today!"},prevItem:{title:"16. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cScaling Model Dev with Azure ML",permalink:"/hub/2023-aia/day16"},nextItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/hub/2023-aia/day18"}},u={authorsImageUrls:[void 0]},h=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 17 of #30DaysOfAzureAI",id:"\ufe0f-day-17-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c How to train using pipelines and components in Azure ML",id:"-how-to-train-using-pipelines-and-components-in-azure-ml",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2},{value:"\ud83e\uddf2 Subscribe",id:"-subscribe",level:2}],p={toc:h};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("meta",{name:"twitter:url",content:"https://azureaidevs.github.io/hub/2023-aia/day17"}),(0,n.kt)("meta",{name:"twitter:title",content:"Streamline Model Dev with Azure ML"}),(0,n.kt)("meta",{name:"twitter:description",content:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 17 of #30DaysOfAzureAI. Unlock the potential of your ML projects with Azure ML Components & Pipelines. Streamline your development, boost productivity and take your hardwork to new heights. Begin with Azure ML today!"}),(0,n.kt)("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day17.png"}),(0,n.kt)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.kt)("link",{rel:"canonical",href:"https://bea.stollnitz.com/blog/aml-pipeline/"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://bea.stollnitz.com/blog/aml-pipeline/"},"View today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf7f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-ai-show"},"Tune into the AI Show")),(0,n.kt)("li",{parentName:"ul"},"\ud83e\uddec ",(0,n.kt)("a",{parentName:"li",href:"/hub/humans-in-ai"},"Connect with Humans in AI")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-tech-community"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\u2764\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/ai-april-mvp-program"},"Learn about the Microsoft MVP Program")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://forms.office.com/r/GhtwgHVP9L"},"Suggest a topic for a future post"))),(0,n.kt)("h3",{id:"please-share"},"Please share"),(0,n.kt)(r.Z,{page_url:"https://azureaidevs.github.io/hub/2023-aia/day17",image_url:"https://raw.githubusercontent.com/AzureAiDevs/hub/main/website/static/img/2023-aia/banner-day17.png",title:"Streamline Model Dev with Azure ML",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 17 of #30DaysOfAzureAI. Unlock the potential of your ML projects with Azure ML Components & Pipelines. Streamline your development, boost productivity and take your hardwork to new heights. Begin with Azure ML today!",hashtags:"AzureML",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,n.kt)("h2",{id:"\ufe0f-day-17-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 17 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Streamlining ML Development with Azure ML Components & Pipelines")),(0,n.kt)("p",null,"Yesterday we learned about training and deploying machine learning models using Azure ML. Today is all about streamlining ML Development with Azure ML Components & Pipelines."),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure ML components and pipelines")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-pipeline/"},(0,n.kt)("img",{alt:"Image banner for day 17",src:a(94092).Z,width:"1920",height:"1080"}))),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/intro-to-azure-ml?WT.mc_id=aiml-89446-dglover"},"Learn Module: Introduction to Azure Machine Learning")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/overview-what-is-azure-machine-learning?WT.mc_id=aiml-89446-dglover"},"What is Azure Machine Learning?"))),(0,n.kt)("h2",{id:"-how-to-train-using-pipelines-and-components-in-azure-ml"},"\ud83d\ude8c How to train using pipelines and components in Azure ML"),(0,n.kt)("p",null,"Check out ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-pipeline/"},"today's article")," to take your machine leaning projects to new heights with Azure ML components and pipelines! Learn how to break down your training code into components, and how to connect those components into a pipeline. Organizing your work into steps with components and pipelines will boost your productivity, especially as the complexity of your project increases."),(0,n.kt)("p",null,"The goal for today is for you to be able to evaluate the benefits of components and pipelines for your own project, and to understand the technical aspects of implementing them."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6151).Z,width:"3000",height:"1557"})),(0,n.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://bea.stollnitz.com/blog/aml-pipeline/"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/hub/discussions/categories/azure-ml-developers"},"You can ask questions about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("h2",{id:"-subscribe"},"\ud83e\uddf2 Subscribe"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcec ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/azure-ai-dev-newsletter"},"Subscribe to the monthly Azure AI and Machine Learning Tech Newsletter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azureaidevs.github.io/hub/2023-aia/rss.xml"},(0,n.kt)("img",{alt:"The image is the blog RSS feed available icon",src:a(78647).Z,width:"14",height:"14"})," Subscribe to the blog RSS XML feed"))))}m.isMDXComponent=!0},30925:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(67294),n=a(46616),r=a(87385),o=a(69641),l=a(78854),s=a(16573),u=a(1020),h=a(48137),p=a(66339),m=a(53597),d=a(37332);function c(e){let{page_url:t,image_url:a,title:c,hashtags:g,hashtag:A,description:k}=e;return i.createElement("div",null,i.createElement(n.Z,{url:t,title:k,hashtags:[g]},i.createElement(r.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:t,image:a},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:t,quote:c,hashtag:A},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(m.Z,{title:c,url:t},i.createElement(d.Z,{size:32,round:!0})),"\xa0",i.createElement(h.Z,{subject:c,body:k,url:t},i.createElement(p.Z,{size:32,round:!0})))}},6151:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/image-be3fc8bf4716c04cb23e2e27c5dd6ac9.png"},94092:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day17-77430d657d4c6fffa83122d46b7a5609.png"},78647:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);