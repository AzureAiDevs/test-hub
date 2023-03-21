"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1964],{21704:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>d});var i=t(87462),s=(t(67294),t(3905)),r=t(30925);const l={slug:"day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers","machine-learning-debugging-tools","responsible-ai-tools"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day19.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 19 of #30DaysOfAzureAI. Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/test-hub/2023-aia/day19 AzureAiDevs,AI AIEthics,AIforAll"},o=void 0,n={permalink:"/test-hub/2023-aia/day19",source:"@site/2023-aia/2023-04-20-rai-part-1/index.md",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 19 of #30DaysOfAzureAI. Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/test-hub/2023-aia/day19 AzureAiDevs,AI AIEthics,AIforAll",date:"2023-04-20T00:00:00.000Z",formattedDate:"April 20, 2023",tags:[{label:"azure-ai",permalink:"/test-hub/2023-aia/tags/azure-ai"},{label:"responsible-ai",permalink:"/test-hub/2023-aia/tags/responsible-ai"},{label:"30-days-of-azure-ai",permalink:"/test-hub/2023-aia/tags/30-days-of-azure-ai"},{label:"ml-developers",permalink:"/test-hub/2023-aia/tags/ml-developers"},{label:"app-developers",permalink:"/test-hub/2023-aia/tags/app-developers"},{label:"machine-learning-debugging-tools",permalink:"/test-hub/2023-aia/tags/machine-learning-debugging-tools"},{label:"responsible-ai-tools",permalink:"/test-hub/2023-aia/tags/responsible-ai-tools"}],readingTime:2.475,hasTruncateMarker:!1,authors:[{name:"Ruth Yakubu",title:"Principal Cloud Advocate",url:"https://github.com/ruyakubu",tag:"@ruthieyakubu",imageURL:"https://github.com/ruyakubu.png",key:"Ruth"}],frontMatter:{slug:"day19",title:"19. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cDebug models w/ Responsible AI",authors:["Ruth"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["Machine-Learning","Azure-AI","rai-privacy-security","rai-fairness","rai-transparency","rai-accountable","rai-inclusion","rai-reliable"],tags:["azure-ai","responsible-ai","30-days-of-azure-ai","ml-developers","app-developers","machine-learning-debugging-tools","responsible-ai-tools"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day19.png",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 19 of #30DaysOfAzureAI. Guide to analyzing ML models for Responsible AI issues (Part 1) https://azureaidevs.github.io/test-hub/2023-aia/day19 AzureAiDevs,AI AIEthics,AIforAll"},prevItem:{title:"18. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cAzure ML Managed Online Endpoints",permalink:"/test-hub/2023-aia/day18"},nextItem:{title:"20. \ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cStreamline Ops w/ Azure MLOps",permalink:"/test-hub/2023-aia/day20"}},u={authorsImageUrls:[void 0]},d=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 19 of #30DaysOfAzureAI",id:"\ufe0f-day-19-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c What is Responsible AI Dashboard?",id:"-what-is-responsible-ai-dashboard",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],h={toc:d};function p(e){let{components:a,...l}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,l,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("link",{rel:"canonical",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948?WT.mc_id=aiml-89446-dglover"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,s.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948?WT.mc_id=aiml-89446-dglover"},"View today's article")),(0,s.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,s.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,s.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,s.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,s.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/19-debug-models-w-responsible-ai"},"Ask a question about this post on GitHub Discussions")),(0,s.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,s.kt)("h3",{id:"please-share"},"Please share"),(0,s.kt)(r.Z,{page_url:"https://azureaidevs.github.io/test-hub/2023-aia/day19",image_url:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day19.png",title:"Debug models w/ Responsible AI",description:"\ud83e\uddd1\ud83c\udffd\u200d\ud83d\udd2cWelcome to day 19 of #30DaysOfAzureAI. Guide to analyzing ML models for Responsible AI issues (Part 1)",hashtags:"AzureAiDevs,AI,AIEthics,AIforAll",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,s.kt)("h2",{id:"\ufe0f-day-19-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 19 of #30DaysOfAzureAI"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Guide to analyzing ML models for Responsible AI issues (Part 1)")),(0,s.kt)("p",null,'Yesterday we learned how to deploy ML models using Azure ML managed online endpoints. In the "Fundamentals" week we learned about the importance of Responsible AI. Today, we get practical, you\'ll learn about the Azure ML Responsible AI Dashboard and how it can help you build fairer ML models.'),(0,s.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The Azure ML RAI Dashboard."),(0,s.kt)("li",{parentName:"ul"},"Build fairer and responsible AI models."),(0,s.kt)("li",{parentName:"ul"},"Tools for responsible AI development, including model interoperability, error analysis, and counterfactual analysis.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Image banner for day 19",src:t(29715).Z,width:"834",height:"350"})),(0,s.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://news.microsoft.com/source/features/ai/microsoft-approach-to-ai/#using-ai-responsibly?WT.mc_id=aiml-89446-dglover"},"Microsoft's approach to using AI responsibly")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://blogs.microsoft.com/on-the-issues/2023/02/02/responsible-ai-chatgpt-artificial-intelligence?WT.mc_id=aiml-89446-dglover"},"Meeting the AI moment: advancing the future through responsible AI"))),(0,s.kt)("h2",{id:"-what-is-responsible-ai-dashboard"},"\ud83d\ude8c What is Responsible AI Dashboard?"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948?WT.mc_id=aiml-89446-dglover"},"Today's article")," is about the Responsible AI (RAI) Dashboard is a suite of open-source tools that help developers create responsible AI models with features such as model statistics, data explorer, error analysis, model interpretability, counterfactual analysis, and causal inference. The dashboard is built on leading open-source tools such as ErrorAnalysis, InterpretML, Fairlearn, DiCE, and EconML, and it can be accessed through the Azure Machine Learning platform. The RAI components allow developers to troubleshoot and analyze models and make better decisions to produce more responsible AI systems."),(0,s.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,s.kt)("p",null,"Today's ",(0,s.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/ai-machine-learning-blog/getting-started-with-azure-machine-learning-responsible-ai/ba-p/3746948?WT.mc_id=aiml-89446-dglover"},"article"),"."),(0,s.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/19-debug-models-w-responsible-ai"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,s.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,s.kt)("p",null,"What's next? View the ",(0,s.kt)("a",{parentName:"p",href:"/test-hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/test-hub/2023-aia/rss.xml"},(0,s.kt)("img",{src:t(78647).Z,width:"14",height:"14"})," Click to subscribe")))}p.isMDXComponent=!0},30925:(e,a,t)=>{t.d(a,{Z:()=>m});var i=t(67294),s=t(46616),r=t(87385),l=t(69641),o=t(78854),n=t(16573),u=t(1020),d=t(48137),h=t(66339),p=t(53597),c=t(37332);function m(e){let{page_url:a,image_url:t,title:m,hashtags:b,hashtag:g,description:A}=e;return i.createElement("div",null,i.createElement(s.Z,{url:a,title:A,hashtags:[b]},i.createElement(r.Z,{size:32,round:!0})),"\xa0",i.createElement(l.Z,{url:a,image:t},i.createElement(o.Z,{size:32,round:!0})),"\xa0",i.createElement(n.Z,{url:a,quote:m,hashtag:g},i.createElement(u.Z,{size:32,round:!0})),"\xa0",i.createElement(p.Z,{title:m,url:a},i.createElement(c.Z,{size:32,round:!0})),"\xa0",i.createElement(d.Z,{subject:m,body:A,url:a},i.createElement(h.Z,{size:32,round:!0})))}},29715:(e,a,t)=>{t.d(a,{Z:()=>i});const i=t.p+"assets/images/banner-day19-5a1412d792726cee1bfe955224d657ed.png"},78647:(e,a,t)=>{t.d(a,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);