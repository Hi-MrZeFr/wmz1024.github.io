const workboxVersion="6.2.4";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.4/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"wmz1024"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"6180371ccc3ec8f215996611623a72ea",url:"./11f1a2fc.html"},{revision:"9135600dcc4c4734d5c279f9f685c9b8",url:"./1f7e3876.html"},{revision:"09d6140609fe515ceeac3ede7561d034",url:"./2b244555.html"},{revision:"afb75f4207024c9598227deca030775e",url:"./2c7854e6.html"},{revision:"69070ea660aad11ba713e26b6dcaf2b4",url:"./2ee2518d.html"},{revision:"0eaa3db5c31f5d15bdce52d32bf5cd27",url:"./2f3c3637.html"},{revision:"36537fbff1b4c605d09452d0fd3c5e99",url:"./30422b3f.html"},{revision:"f9c070d4d38e7ca17d708d605325def6",url:"./3494bf09.html"},{revision:"0e83d415f6eaf257590ce0e8676d6ad6",url:"./3e4cf0e1.html"},{revision:"5864f26007b5de0d4ebbe37e68017992",url:"./404.html"},{revision:"256e4b31952b83eff5b7882180c22b2d",url:"./4283e7c2.html"},{revision:"b46375c938922c23b63e3c6da46c4f75",url:"./47008bfe.html"},{revision:"fc95d7dc37362872f34848f85d17eca7",url:"./496761e5.html"},{revision:"c2319678712b15b5eebef843e1f65b86",url:"./49ab854f.html"},{revision:"e11f802bea271b19d72f1c9fb71220b0",url:"./4a17b156.html"},{revision:"0e5a7792d11c7a71f428d445c01229c3",url:"./51f11683.html"},{revision:"a479902c78ea50b525d84b77f8291a9b",url:"./5b2b3473.html"},{revision:"f0df394a2863598fda6f681155f36ad3",url:"./6057642a.html"},{revision:"760921cddd324a171c167070849480a3",url:"./60816787.html"},{revision:"0cb141c078b5634fab50f93ee5c0a934",url:"./68083ed.html"},{revision:"2c7b5e5d34a7f6f115d5e4d0f6ce68c1",url:"./71e2d2d3.html"},{revision:"6e43a78b561efdc06272bf224b34dbc5",url:"./748a29a4.html"},{revision:"43d3aaf3ff6c7cc93f6b4b1a1347764e",url:"./7bc26341.html"},{revision:"3f62beb36de448896e3b46c2da881a92",url:"./7cee40bf.html"},{revision:"3bee2ea11c94a3757395fc136eee806b",url:"./836982c.html"},{revision:"e2da15750628401971271af461a415b9",url:"./83d82948.html"},{revision:"55098c18dc7a2ecaa15ad8d73dbe62ad",url:"./87e1c0bc.html"},{revision:"f83c0ba72cab7374d02f4d4fcf13e4be",url:"./8856403.html"},{revision:"9a0d7711a1e85a24540f0cb5895d2c6f",url:"./8bc291e6.html"},{revision:"7e11e201592251332fdda97eaa1e2f73",url:"./8d39085b.html"},{revision:"a425e0f11eb8809fe5a63fec4a12cf47",url:"./9341b494.html"},{revision:"d3b51b9ffd3f07eccaed3f92c062325b",url:"./96ccccce.html"},{revision:"1f18d190c071650997e626f4d5af3f58",url:"./98d114e8.html"},{revision:"859ffa3fdf295240e5a796b8057c48c7",url:"./a1be303c.html"},{revision:"51cd0e0f39338a19905f57a14369e915",url:"./a65bc6b8.html"},{revision:"29a4bcde266ddfc23c0e9832c1077338",url:"./a81556f1.html"},{revision:"2c3510949b3d1cabee67c573c563226b",url:"./a8acdd67.html"},{revision:"02ee70b550b9ea480551f2c4f0d8fb87",url:"./aa96c821.html"},{revision:"add9535d1d2e2c5705b0d6103154f731",url:"./ab1d37b.html"},{revision:"a63c38277c42a9d57a920d08a0ec7cad",url:"./about/index.html"},{revision:"12a65ca42146e73b1c6e08d76d28cc18",url:"./aeb2d36.html"},{revision:"41ca14c907d4702fb26a260a7e224cd3",url:"./af886b34.html"},{revision:"37ab02c608ea25267fbccd4c577c42d6",url:"./archives/2020/08/index.html"},{revision:"51ac3ae3ae92a92e88184e478eb73594",url:"./archives/2020/08/page/2/index.html"},{revision:"3b33d060bafeb68b2e66a8377dccaa4e",url:"./archives/2020/08/page/3/index.html"},{revision:"91683505a24acc651da2838fa31a9427",url:"./archives/2020/09/index.html"},{revision:"e2611c646a9f4d38be96b2569d6bb911",url:"./archives/2020/09/page/2/index.html"},{revision:"b2996da95bf4de18cb38c731f18550e0",url:"./archives/2020/10/index.html"},{revision:"c8881999069571eb1cfba349fe8f90be",url:"./archives/2020/11/index.html"},{revision:"9b5e8b6e01d66150711463b206174e8f",url:"./archives/2020/index.html"},{revision:"12deed83b5453f6ff2dc40b741825654",url:"./archives/2020/page/2/index.html"},{revision:"e403147bd290026ebb807fe481ce7ad6",url:"./archives/2020/page/3/index.html"},{revision:"7989db6f0e4e6581e384ef28abf99516",url:"./archives/2020/page/4/index.html"},{revision:"cddd4778758503bdcc62eff28c7b9675",url:"./archives/2021/02/index.html"},{revision:"cd8bd4f5bce4097702115217f50b2e1c",url:"./archives/2021/04/index.html"},{revision:"864a121e481ec5c70cbc9b82eff32645",url:"./archives/2021/05/index.html"},{revision:"a43652ec78812a7dc2cf148a21c0f010",url:"./archives/2021/06/index.html"},{revision:"5606157f853167d640f656d6e30cb968",url:"./archives/2021/07/index.html"},{revision:"5a99832a1ff98d3f990b6f098a1ad3ac",url:"./archives/2021/08/index.html"},{revision:"59a5c3433b9464bddf68912c23c579eb",url:"./archives/2021/09/index.html"},{revision:"78da8411e2a7850610f67e5e95c21a35",url:"./archives/2021/index.html"},{revision:"efd2191eefda9581cc0f509ff2298981",url:"./archives/2021/page/2/index.html"},{revision:"0f4daf6fd38c7328757f637cfb6a031f",url:"./archives/2021/page/3/index.html"},{revision:"9a2a793ab0e89143f44c9306ece38531",url:"./archives/index.html"},{revision:"31cf88a6c50f380ae0f3551eecfa777f",url:"./archives/page/2/index.html"},{revision:"6a1fa2fe722220e36e4ec3cee5dbc25a",url:"./archives/page/3/index.html"},{revision:"595d2139505cd4b5fc67fb529b5999c9",url:"./archives/page/4/index.html"},{revision:"07967521432908b276ae4fab1fb69740",url:"./archives/page/5/index.html"},{revision:"e36441de099078f554fabcd9e7f01d5d",url:"./archives/page/6/index.html"},{revision:"381d23262224538c43bec1c06454a116",url:"./archives/page/7/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"e7fe3ec01a3f9a6d5e9e80537701d2a3",url:"./b28868d6.html"},{revision:"ad46d2927c0829195bc6c76fcdd311bf",url:"./bangumis/index.html"},{revision:"54aa846797f8580198800dcdc41bd172",url:"./bf3a65a4.html"},{revision:"40ca4b7de4b27a807ad9c54ec1b556e7",url:"./c-re.html"},{revision:"fe63115fff2db430b3830ca24f7faf2d",url:"./c1ee638c.html"},{revision:"36fb539dbb065e68fc73a7a0efcb8ab4",url:"./c3119b08.html"},{revision:"1affc17ebe8594f1fcb573e363e80b33",url:"./c48ef0f6.html"},{revision:"dfb437a89b78773ccc9c0203759ed437",url:"./c53c84e7.html"},{revision:"22f88e85577014ae3f3920870b77fbac",url:"./c6c9c4db.html"},{revision:"a1d9dcdd7e798d7dfe82b4827d24d585",url:"./categories/index.html"},{revision:"273b73d0923cd03c051762a4cf03e8f8",url:"./categories/教程-html/index.html"},{revision:"16c3c40e87fb63c18cf2ee1b4b817a89",url:"./categories/文章/index.html"},{revision:"0102a90768a2fa06134a94be2594dd4c",url:"./categories/文章/page/2/index.html"},{revision:"d206a127686653bc43cfd0459d12db65",url:"./categories/文章/page/3/index.html"},{revision:"33b0a9a72f3265a90d2afe78728622eb",url:"./categories/文章/page/4/index.html"},{revision:"987c9e40cbf8f63cb34251def10d29d1",url:"./categories/文章/博客周年/index.html"},{revision:"2d723673c7df23910ec623e449ddb058",url:"./categories/文章/后端/index.html"},{revision:"e56a45bed4faaa4c1e626e9ba5a0f590",url:"./categories/文章/感受/index.html"},{revision:"88114af414fa32149cab6176ce4a2016",url:"./categories/文章/笔记/index.html"},{revision:"50a7cc505b9f2be6ea8f6fba6b52389d",url:"./categories/文章/续集/index.html"},{revision:"1016737f8f1a9f1cc90cbfbd71927209",url:"./categories/日记/index.html"},{revision:"0921dc56dc000094945e400fd949a449",url:"./categories/通知/index.html"},{revision:"837699ae44e5cd9a7385b4819ecb6bae",url:"./categories/通知/page/2/index.html"},{revision:"1963f69452327495b34178df488b0a65",url:"./cd843bca.html"},{revision:"f18d490bcf7d1d2a13706b656efc91c1",url:"./codemao/join.html"},{revision:"3a350b8436f804e0b89a446db68d498c",url:"./comments/index.html"},{revision:"a9a3712ca10c5d65b7af395d9dc53289",url:"./css/bilibiliBanner.css"},{revision:"fb15fb1adb17841704902aa9c227f729",url:"./css/bilicard.css"},{revision:"aa687b8441c1dea2f0710f788723542f",url:"./css/card_botui.css"},{revision:"808bbddc4f4c56aee97a7af07f1f364f",url:"./css/coin.css"},{revision:"0a8e48088a60333db1759bf5cd1985ba",url:"./css/custom.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/customw.css"},{revision:"8aae3872dd735df63ac60710f46e97be",url:"./css/gggwmlgxfc.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"085d261235446d6a10c1dbc04eec7e2c",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"1c02146d00ebf8d5550270263b2cfcd7",url:"./d28a09fd.html"},{revision:"a1f6e48bd814da508cf7d313d55cc465",url:"./d2bd8f46.html"},{revision:"d935b2a4621726f57fc2bb80d5225991",url:"./d46f6783.html"},{revision:"3ffdfed794490fdbe6c3b3f82ded72d1",url:"./da033cd3.html"},{revision:"0296f98c40165b22d3b41697558e1c78",url:"./db5f4c9.html"},{revision:"8b7e4add20f7cc0e7af4e5ec79fead37",url:"./dfd2f59a.html"},{revision:"5d9e5bf253548162c5a3fe62fcb8812c",url:"./e4d07d47.html"},{revision:"88374fd64e668899ef0889dc7c63fa21",url:"./ede49718.html"},{revision:"b2887f8858f4b2d32bc90a6ce606cbc2",url:"./ee30bc12.html"},{revision:"06ae1f058d713d3b2c1a9054dbc19f4f",url:"./f053c80.html"},{revision:"327ab6804ec5d0ef002bfa6c740bafdc",url:"./f6485125.html"},{revision:"561a50163355384be9df672a24512f12",url:"./fa1bfef3.html"},{revision:"ce7a6a6d13ae2852030e8bfff5cd3fbb",url:"./fc/index.html"},{revision:"4ba4c642581400a7fd540fc43b455218",url:"./fe275fd0.html"},{revision:"d42f7e8f3c5a1d49c374916e3d588124",url:"./from.html"},{revision:"13d9dae551ca341254b85ba3de3d88e1",url:"./index.html"},{revision:"3977461395620c67690202f14bbc6058",url:"./js/bilibili-banner.js"},{revision:"546b558e9e8b3c6952b530d467406ad7",url:"./js/botui_init.js"},{revision:"6aea941743f41c0649d742bdc80df352",url:"./js/botui.js"},{revision:"db0ef6fc56befa79cef5e478f9138324",url:"./js/coin.js"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"c56713403fe9375a51d3a0e660e80676",url:"./js/runtime.js"},{revision:"fb9eaf607df5ea9ddfebfc57238add1d",url:"./js/SAO_Menu.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"91b7e2a555e0c80cac63cc0c490e69e8",url:"./js/weather.js"},{revision:"60663de55410a8e5a2d1f71904dd022a",url:"./jump.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"f6ab0fe7aa77fce8eab6e1728fb5278c",url:"./link/index.html"},{revision:"d2385edbbbc34032b90a29762c72fbb1",url:"./manifest.json"},{revision:"65130914386dad157b56d72daea549ad",url:"./other-page/dead-links/index.html"},{revision:"d55fb5f3a38fb65f9cfb2e13fb5a7718",url:"./other-page/video/index.html"},{revision:"f1d8011c8ff42694b7cff7b1850fe448",url:"./other-page/ziyuan/index.html"},{revision:"c004068e3dffbbeec4d476ff72b1b53f",url:"./other/index.html"},{revision:"b969b72df9db082b03b50d1dad083902",url:"./other/s/NTRss88/index.html"},{revision:"4094bdf41b8b4fe26660a44a50a59807",url:"./page/2/index.html"},{revision:"79ec3bc780191ae2a516e36bcdca6bb7",url:"./page/3/index.html"},{revision:"d8f0f09e70953efc318365075ab35997",url:"./pcre.html"},{revision:"7856f1ec46e5e1f20cb882a32e0ff5c9",url:"./random.html"},{revision:"84657ac06c80144210832ec173aa541a",url:"./service-worker.js"},{revision:"07e24fa3779e0f7bcb8c622d762784b2",url:"./shuoshuo/index.html"},{revision:"c4ad332318c24c129b593e63c467a911",url:"./support.html"},{revision:"6aa6bdd15f3902af97806f2cf342b099",url:"./tags/2020/index.html"},{revision:"36c72defe28f9af5efe0f48d172f5888",url:"./tags/404-网站/index.html"},{revision:"6905727df274c79654074a088a687fb0",url:"./tags/android/index.html"},{revision:"69762c89c01f865024b77e28e33e11b0",url:"./tags/aplayer/index.html"},{revision:"4895e83a9725ff78082411134c219870",url:"./tags/app/index.html"},{revision:"6389a2390143e21a1b4c8b29107b3f76",url:"./tags/bilibili/index.html"},{revision:"085edcf4177ec83a61dc9fd479ebbeef",url:"./tags/CF/index.html"},{revision:"95c9bd6086141e307ae4f2bcb764e0e2",url:"./tags/CFW/index.html"},{revision:"2df5ecbc14c91897f84af599dde5f72a",url:"./tags/Cloud-flare/index.html"},{revision:"1f33ba2260a3334e03038b864c5859cc",url:"./tags/dao-voice/index.html"},{revision:"09db8a21d06fa6256b56cbe7e5d354e6",url:"./tags/debian/index.html"},{revision:"aaa6534acf7f27232dfefb8cb7687e12",url:"./tags/download/index.html"},{revision:"e610bb553eb3fb1bbb2cc4abfafebc2c",url:"./tags/FA/index.html"},{revision:"86683ec329f6653c1a22efffdc64cdca",url:"./tags/fusionapp/index.html"},{revision:"e112b75b9cfdbd6f20d91a7e54ee6d8b",url:"./tags/gh-page/index.html"},{revision:"0b35b4635ab58cb3c4324a097314905f",url:"./tags/git/index.html"},{revision:"a8ef8416e0775d89aa855b21a1d8afeb",url:"./tags/gitee-page/index.html"},{revision:"4ea054b106912d67caa45be5c978fdd9",url:"./tags/gitee/index.html"},{revision:"65acdb2d59da4e13836c844a7cb5584a",url:"./tags/github-action/index.html"},{revision:"7f63982f9f2ced68bcf1e7bfdbb77b1a",url:"./tags/github-page/index.html"},{revision:"c29d6b606a7f08ab41fa2cdbca449b39",url:"./tags/github/index.html"},{revision:"550ea2dfe46c7d8c9366a3d97d4bafd3",url:"./tags/github/page/2/index.html"},{revision:"bc4fd5b96a889bd6c038f6869e36ee9a",url:"./tags/githubpage/index.html"},{revision:"7ccb2abd5acdf511a964e4017383f489",url:"./tags/hello-world/index.html"},{revision:"7e738de953dff1ff605c93aebcc63889",url:"./tags/hexo/index.html"},{revision:"bee807be93d3fe67e3ab294660cd78e3",url:"./tags/html/index.html"},{revision:"2830790d7000876c411432b0d2e20ca6",url:"./tags/iframe/index.html"},{revision:"c6185872c00b9da15410615b5d79534f",url:"./tags/index.html"},{revision:"70263b9cd339889ade7e2f0df77c3904",url:"./tags/java/index.html"},{revision:"c347719e3d80ebece3eaa580bf3ece99",url:"./tags/linux/index.html"},{revision:"a55d4df258c79bc89a58ed5c167f37c0",url:"./tags/liunx/index.html"},{revision:"7d52a0c8002276b7115c7d3f4ca19ada",url:"./tags/markdown/index.html"},{revision:"baf2845d1633a2173832efdb63017141",url:"./tags/md/index.html"},{revision:"d9540eb7bb10eb05ec30717c947dacbe",url:"./tags/md编辑器/index.html"},{revision:"da5b2c5ae8a775ff93e6cc41d4717f80",url:"./tags/minecraft-JE/index.html"},{revision:"76f1eccfb561da7e5617317e00fa43e9",url:"./tags/minecraft/index.html"},{revision:"5c5ffdfed6d660b82cc74954dbefeca0",url:"./tags/minecraftJE/index.html"},{revision:"d1c90b0a2dca7553c3d4d892189804c9",url:"./tags/node-js/index.html"},{revision:"83d721890edd77a93812b678f1a23983",url:"./tags/node/index.html"},{revision:"9cc1df92ea8826e5946ce77d67a7a600",url:"./tags/php/index.html"},{revision:"def1d0481b77ed8cb6b36f18ebb0b170",url:"./tags/picgo/index.html"},{revision:"81cabce38120446221bb382af6ebb040",url:"./tags/python/index.html"},{revision:"241ed189b50e05258e30fdc23cb1fa4e",url:"./tags/ssh/index.html"},{revision:"ca9931a736f2e8c0de379bca1d7bb7e6",url:"./tags/termux/index.html"},{revision:"57c7f8a8b1eb5cc29d45e52f160cb808",url:"./tags/undertale/index.html"},{revision:"570b55ff07d721146bb6223ab51bd675",url:"./tags/ut/index.html"},{revision:"4bc83e0569f4a3de8e3a12589a8b7118",url:"./tags/vercel/index.html"},{revision:"0e61370c888939a29f729d902e6c9552",url:"./tags/website/index.html"},{revision:"4f7af822a5ba9677daed9fe3c7aa7461",url:"./tags/win10安装/index.html"},{revision:"01645505df47ae0d93787b3702321848",url:"./tags/Windows/index.html"},{revision:"1d1df8ec74a521383e7a0ba1d8a1b472",url:"./tags/Windows10/index.html"},{revision:"36d7aeae988cf08f46fff7fc5f697f1d",url:"./tags/Windows11/index.html"},{revision:"076e5f8c9bebcef9711b5c11a06ca4ab",url:"./tags/wmz-blog/index.html"},{revision:"1a6038e7812213953b04708027feed65",url:"./tags/一周年/index.html"},{revision:"4cd7c4e25aaa8035c73547e460c20715",url:"./tags/传说之下/index.html"},{revision:"928d3d862866e64384f7546bfb111dff",url:"./tags/免翻墙/index.html"},{revision:"16d864f8174a376a0af08b8a149410c5",url:"./tags/动态网页/index.html"},{revision:"bf142098c4951ac972151c768c1f037b",url:"./tags/博客/index.html"},{revision:"10eae3feb6675f15e5e380d84e8a41f5",url:"./tags/回顾/index.html"},{revision:"cb186d10df1a79b8360c96c5f1539295",url:"./tags/图床/index.html"},{revision:"2777e55712d993bdf99ab7fadf4367fa",url:"./tags/在线聊天/index.html"},{revision:"a27bb462fcc998cd00ea2674dda198f6",url:"./tags/安装/index.html"},{revision:"495ae3f944d26e9d39cfc77f1603d030",url:"./tags/工具/index.html"},{revision:"4bd9841b0fec77352c1316c59e37dc9d",url:"./tags/我的世界/index.html"},{revision:"31aba56d8b3f5115a00678dea03895a6",url:"./tags/折腾/index.html"},{revision:"fcb0287758602401b42a295f82876426",url:"./tags/搭建/index.html"},{revision:"9ffa3450b51de5cdb56d5a2e5ca9dd21",url:"./tags/教程/index.html"},{revision:"962a958cf70fbe0494259eaadd271d3c",url:"./tags/日记/index.html"},{revision:"0362d8081f76ad575c5978fe74d85f5a",url:"./tags/更换/index.html"},{revision:"9a08e34a38eb19980a119af01a550892",url:"./tags/更新/index.html"},{revision:"621a7c2254b71803441701f6cafe2f75",url:"./tags/更新了/index.html"},{revision:"0057709e793925f9aa47fa948b7fb2b9",url:"./tags/服务器/index.html"},{revision:"da8d0f9bdb86460ff9230a18ed98e13d",url:"./tags/测试/index.html"},{revision:"dcd1ea66e3bd9d96383b104a490371d1",url:"./tags/百度统计/index.html"},{revision:"4499ba8809c867f2491c7a6e5581e56a",url:"./tags/看法/index.html"},{revision:"9a6d29defe2609955e39840c330757da",url:"./tags/笔记/index.html"},{revision:"4c38b1e388c1ea08a67cb82a536d19d1",url:"./tags/系统安装/index.html"},{revision:"ca4fc9f50871c0260cb83d21d0452ddf",url:"./tags/袁隆平/index.html"},{revision:"262ad91e4175020f8bffcb471a6e48a2",url:"./tags/迷你世界/index.html"},{revision:"2ccb378641e022cd4680900e3291ea13",url:"./tags/通知/index.html"},{revision:"b36f86ccc30cdea2f8430d6b4470a84f",url:"./tags/邮箱/index.html"},{revision:"382eb2cc38f22acdf62ec64fb7231448",url:"./tags/随笔/index.html"},{revision:"2fb7551ea8ccfb3bb4aa0c187299ec7b",url:"./update/index.html"},{revision:"2ac02f39d8d89c2d743c84a9c16adcea",url:"./workbox-f70be019.js"},{revision:"2c21fc178283614c4f4fce9bc6d02b30",url:"./wsimg/funnytitle.js"},{revision:"151ad43939a0d1a895c56531a7db62c0",url:"./wsimg/index-1.js"},{revision:"894ad29814051e75a07b165622548b4b",url:"./wsimg/index1.css"},{revision:"c1072cc4bf7e03097dbaa39769e2840c",url:"./wsimg/README.html"},{revision:"ef6d498e54f639c8ee95928ea9904bc7",url:"./y-re.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();