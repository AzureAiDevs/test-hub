"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5454],{76362:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var i=a(87462),n=(a(67294),a(3905)),l=a(30925);const s={slug:"day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk","Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day11.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 11 of #30DaysOfAzureAI. Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/test-hub/2023-aia/day11 AzureAiDevs,AI ONNX,dotnet"},r=void 0,o={permalink:"/test-hub/2023-aia/day11",source:"@site/2023-aia/2023-04-12-onnx-dotnet/index.md",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 11 of #30DaysOfAzureAI. Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/test-hub/2023-aia/day11 AzureAiDevs,AI ONNX,dotnet",date:"2023-04-12T00:00:00.000Z",formattedDate:"April 12, 2023",tags:[{label:"ai-april",permalink:"/test-hub/2023-aia/tags/ai-april"},{label:"30-days-of-azure-ai",permalink:"/test-hub/2023-aia/tags/30-days-of-azure-ai"},{label:"app-developers",permalink:"/test-hub/2023-aia/tags/app-developers"}],readingTime:2.465,hasTruncateMarker:!1,authors:[{name:"Henk Boelman",title:"Senior Cloud Advocate",url:"https://github.com/hnky",tag:"@hboelman",imageURL:"https://github.com/hnky.png",key:"Henk"},{name:"Beatriz Stollnitz",title:"Principal Cloud Advocate AiMl",url:"https://github.com/bstollnitz",tag:"@beastollnitz",imageURL:"https://github.com/bstollnitz.png",key:"Bea"}],frontMatter:{slug:"day11",title:"11. \ud83e\uddd1\u200d\ud83d\udcbbCross-Platform AI with ONNX and .NET",authors:["Henk","Bea"],draft:!1,hide_table_of_contents:!1,toc_min_heading_level:2,toc_max_heading_level:3,keywords:["dotnet","onnx","vscode","Azure-AI"],tags:["ai-april","30-days-of-azure-ai","app-developers"],image:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day11.png",description:"\ud83e\uddd1\u200d\ud83d\udcbbWelcome to day 11 of #30DaysOfAzureAI. Building Cross-Platform AI Solutions with ONNX and .NET https://azureaidevs.github.io/test-hub/2023-aia/day11 AzureAiDevs,AI ONNX,dotnet"},prevItem:{title:"10. \ud83e\uddd1\u200d\ud83d\udcbbHow to build your own ChatGPT",permalink:"/test-hub/2023-aia/day10"},nextItem:{title:"12. \ud83e\uddd1\u200d\ud83d\udcbbNLP Models in Excel w/ ONNX Runtime",permalink:"/test-hub/2023-aia/day12"}},d={authorsImageUrls:[void 0,void 0]},u=[{value:"Please share",id:"please-share",level:3},{value:"\ud83d\uddd3\ufe0f Day 11 of #30DaysOfAzureAI",id:"\ufe0f-day-11-of-30daysofazureai",level:2},{value:"\ud83c\udfaf What we&#39;ll cover",id:"-what-well-cover",level:2},{value:"\ud83d\udcda References",id:"-references",level:2},{value:"\ud83d\ude8c Build cross-platform intelligent apps with ONNX and .NET",id:"-build-cross-platform-intelligent-apps-with-onnx-and-net",level:2},{value:"\ud83d\udc53 View today&#39;s article",id:"-view-todays-article",level:2},{value:"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?",id:"\ufe0f-questions",level:2},{value:"\ud83d\udccd 30 days roadmap",id:"-30-days-roadmap",level:2}],h={toc:u};function p(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://youtu.be/h6HWP5jpA5s"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc53 ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/h6HWP5jpA5s"},"View today's article")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udf24\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://aka.ms/30-days-of-azure-ai-challenge"},"Continue the Azure AI Cloud Skills Challenge")),(0,n.kt)("li",{parentName:"ul"},"\ud83c\udfeb ",(0,n.kt)("a",{parentName:"li",href:"https://techcommunity.microsoft.com/t5/artificial-intelligence-and/ct-p/AI"},"Bookmark the Azure AI Technical Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/11-cross-platform-ai-with-onnx-and-.net"},"Ask a question about this post on GitHub Discussions")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udca1 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/call-for-content"},"Suggest a topic for a future post"))),(0,n.kt)("h3",{id:"please-share"},"Please share"),(0,n.kt)(l.Z,{page_url:"https://azureaidevs.github.io/test-hub/2023-aia/day11",image_url:"https://azureaidevs.github.io/test-hub/img/2023-aia/banner-day11.png",title:"Cross-Platform AI with ONNX and .NET",description:"\ud83e\uddd1\u200d\ud83d\udcbbDay 11 of #30DaysOfAzureAI. Cross-platform AI support is here! Build intelligent apps with ONNX and .NET. Learn how AI integrates with traditional programming in today's video!",hashtags:"AzureAiDevs,AI,ONNX,dotnet",hashtag:"#30DaysOfAzureAi",mdxType:"Social"}),(0,n.kt)("h2",{id:"\ufe0f-day-11-of-30daysofazureai"},"\ud83d\uddd3\ufe0f Day 11 of #30DaysOfAzureAI"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Building Cross-Platform AI Solutions with ONNX and .NET")),(0,n.kt)("p",null,"Yesterday was all about the power of OpenAI to create intelligent dynamic apps. Today is for people looking to build cross-platform intelligent apps with .NET MAUI and ONNX."),(0,n.kt)("h2",{id:"-what-well-cover"},"\ud83c\udfaf What we'll cover"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build intelligent apps with ONNX and .NET. "),(0,n.kt)("li",{parentName:"ul"},"How AI is related to traditional programming.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Image banner for day 11",src:a(88073).Z,width:"834",height:"350"})),(0,n.kt)("h2",{id:"-references"},"\ud83d\udcda References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://onnx.ai/index.html"},"Open Neural Network Exchange (ONNX) Open Standard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/apps/maui?WT.mc_id=aiml-89446-dglover"},".NET Multi-platform App UI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/machine-learning/concept-onnx?WT.mc_id=aiml-89446-dglover"},"ONNX and Azure Machine Learning: Create and accelerate ML models")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/training/modules/add-machine-learning-to-uwp-app?WT.mc_id=aiml-89446-dglover"},"Create a machine learning model for offline use on a Windows device"))),(0,n.kt)("h2",{id:"-build-cross-platform-intelligent-apps-with-onnx-and-net"},"\ud83d\ude8c Build cross-platform intelligent apps with ONNX and .NET"),(0,n.kt)("p",null,"Watch ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/h6HWP5jpA5s"},"today's video")," about machine learning models using ONNX and .NET. The presenters, Bea and Henk, start with an overview of AI and machine learning, explaining that machine learning is a subset of AI that involves creating a model that can learn from data and make predictions without being explicitly programmed. They discuss deep learning, a subset of machine learning that uses artificial neural network and is well-suited to big data."),(0,n.kt)("iframe",{width:"100%",height:"420",src:"https://www.youtube.com/embed/h6HWP5jpA5s",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"-view-todays-article"},"\ud83d\udc53 View today's article"),(0,n.kt)("p",null,"Today's ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/h6HWP5jpA5s"},"article"),"."),(0,n.kt)("h2",{id:"\ufe0f-questions"},"\ud83d\ude4b\ud83c\udffe\u200d\u2642\ufe0f Questions?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureAiDevs/test-hub/discussions/categories/11-cross-platform-ai-with-onnx-and-.net"},"Remember, you can ask a question about this post on GitHub Discussions")),(0,n.kt)("h2",{id:"-30-days-roadmap"},"\ud83d\udccd 30 days roadmap"),(0,n.kt)("p",null,"What's next? View the ",(0,n.kt)("a",{parentName:"p",href:"/test-hub/roadmap/30days"},"#30DaysOfAzureAI Roadmap")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azureaidevs.github.io/test-hub/2023-aia/rss.xml"},(0,n.kt)("img",{src:a(78647).Z,width:"14",height:"14"})," Click to subscribe")))}p.isMDXComponent=!0},30925:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(67294),n=a(46616),l=a(87385),s=a(69641),r=a(78854),o=a(16573),d=a(1020),u=a(48137),h=a(66339),p=a(53597),m=a(37332);function c(e){let{page_url:t,image_url:a,title:c,hashtags:g,hashtag:A,description:f}=e;return i.createElement("div",null,i.createElement(n.Z,{url:t,title:f,hashtags:[g]},i.createElement(l.Z,{size:32,round:!0})),"\xa0",i.createElement(s.Z,{url:t,image:a},i.createElement(r.Z,{size:32,round:!0})),"\xa0",i.createElement(o.Z,{url:t,quote:c,hashtag:A},i.createElement(d.Z,{size:32,round:!0})),"\xa0",i.createElement(p.Z,{title:c,url:t},i.createElement(m.Z,{size:32,round:!0})),"\xa0",i.createElement(u.Z,{subject:c,body:f,url:t},i.createElement(h.Z,{size:32,round:!0})))}},88073:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/banner-day11-b17d5e8fecba63c8e602611bb63e315b.png"},78647:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAB0AAAAdAExheWBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAYdJREFUKJGdkT1o00EYxn93l38SSQtFEkQo0hZDUbEQEJdCEAWNlUKhSzq0m4MiuChaHCS0gqOrdOjQJYZQECWRQB1LoUPtZ4hdBCt+DkKUSi531+EvaPMB0Xe6O57fPe/7vGJ/dsDxHyX/nNQ/gQEAhCQ8XcH9+Ib7uInZXcJsPQe934Gj0YiuGDJ+EW/kEaGbr1FD421B8feMIhJF9g+jEmnkifP+f2tZ9KuHYOstHJWHN/YEdW4S+/UttYUJ9OItqP1EJdJ4qUwbx0CI8L2d308OUy6iCw+QPb0EJ7MQjKBf3MVsLDY4Go3O36C+Mof7VUWdGiE0lcN+30O/vO+neOEOeEcaQGcxlRL1pcfUnl7BftpGxOJ4V2cw5QL2/Sqi+xjqzGhzqiqRJjgxj+jpReeu+/OdvoaInsSsPfM18UsNoJB4qQxyIEkgeRtX/YxZzwMCNXgZ+27Zlx0/26LVchGswVRKANgPb3zx0T5c9Yu/50gUhGreI0KBM03Rtyp56NYhBHAAgCCJzTkM7XMAAAAASUVORK5CYII="}}]);