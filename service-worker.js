if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,c)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=c(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"11f1a2fc.html",revision:"72859b8f31de381285634d6b6c0bf2ab"},{url:"1f7e3876.html",revision:"dd19fda523c570546e7b2ff653a676d2"},{url:"2b244555.html",revision:"39b67dcc77cf1cbb8517be95c3db751e"},{url:"2c7854e6.html",revision:"fe5410053758a1d58d20d99cc1e80e78"},{url:"2ee2518d.html",revision:"24fd76f9db4b90b0a9556db748b3c311"},{url:"30422b3f.html",revision:"a5ca22d463227d058c483c469a63f6e7"},{url:"3494bf09.html",revision:"14ef1731f04efb7360b7cd286f139a62"},{url:"3e4cf0e1.html",revision:"ae97e988a22e988dce78b6aae01964a6"},{url:"404.html",revision:"8641c3f42f32c9bea1b5f4835abbbc0e"},{url:"4283e7c2.html",revision:"c4902b705aaa46e97c4a077f8fc8b1f4"},{url:"47008bfe.html",revision:"228a57d743be0248dfe26386806e3d55"},{url:"496761e5.html",revision:"99052d8b04e853c32b67151250310142"},{url:"49ab854f.html",revision:"b983722f6cdc6fa490c931ced6d9308a"},{url:"4a17b156.html",revision:"93b0cd30a50bfdc6412d1deed5b9ad5c"},{url:"51f11683.html",revision:"3adc7efe3ee2a43c6f3dbcd089c1435c"},{url:"6057642a.html",revision:"03042e050c1d40d90695f4754401e3b1"},{url:"60816787.html",revision:"6ac96845f1631aa8c5f6e439fbe35c0e"},{url:"68083ed.html",revision:"ca2c6e9dc15985336cf076bca683c04f"},{url:"71e2d2d3.html",revision:"a3253efcad9f4b590cd106ee5f374df2"},{url:"748a29a4.html",revision:"eca8845e845b5c691c502ab78ba116c1"},{url:"7bc26341.html",revision:"228274d402a7fcd02ffa2e60bbde8e14"},{url:"7cee40bf.html",revision:"70b26a148fd452738ed59e17cd0f3b74"},{url:"836982c.html",revision:"7c356acca188f54811f2d35ee86e1616"},{url:"83d82948.html",revision:"e75758905219a32f88c093eadb190055"},{url:"8856403.html",revision:"6fcad1bd8f1a2d5cb54e375c65c24e2d"},{url:"8bc291e6.html",revision:"df8c595a51c7a7bb913cfac76e6613e0"},{url:"8d39085b.html",revision:"f85699287d059eea4d12cc951f486626"},{url:"9341b494.html",revision:"9d2e08465e39a7e383d20a43356bce76"},{url:"96ccccce.html",revision:"abe10230c2a973dd02501185e489186d"},{url:"98d114e8.html",revision:"029abf4677f25abe42013e99d3c943d9"},{url:"a1be303c.html",revision:"901a79963c0520946ab705258cfbdc45"},{url:"a81556f1.html",revision:"29af6141371539e4e1bd5aaf36aa79e2"},{url:"a8acdd67.html",revision:"328cc3877805bc31952500636cd91bde"},{url:"aa96c821.html",revision:"c894fe24d9af7e36a08b3a4e6bac5580"},{url:"ab1d37b.html",revision:"004e31ee10dece0f7e9d0c4577744dbc"},{url:"about/index.html",revision:"b85f27893072e37f8ecebadcc62ac516"},{url:"af886b34.html",revision:"4c009373063d246dddb9ac4132edac4d"},{url:"archives/2020/08/index.html",revision:"1bce72527e85a8b4bad43a27dcaaf93e"},{url:"archives/2020/08/page/2/index.html",revision:"3c8f4329de24949934730794ace15ff0"},{url:"archives/2020/08/page/3/index.html",revision:"d76bfd396a5ea1e5ccdfb744c6a8eefe"},{url:"archives/2020/09/index.html",revision:"86f4ff6c6bcaf3e75496a60130b6434b"},{url:"archives/2020/09/page/2/index.html",revision:"71194674cedae03a2fc99011b3820b87"},{url:"archives/2020/10/index.html",revision:"cf450a87594d5730aacc15709cd08e6b"},{url:"archives/2020/11/index.html",revision:"443e500320d66f79ad767ca1310f56e9"},{url:"archives/2020/index.html",revision:"cd0133b1eefdba8d3880d5a5b798a069"},{url:"archives/2020/page/2/index.html",revision:"9c728018f8c8871a8462c519487a7177"},{url:"archives/2020/page/3/index.html",revision:"84f3fc3418fc2ed588a265bdc0d979ff"},{url:"archives/2020/page/4/index.html",revision:"b8d6e176164f932a6a298a235fa89879"},{url:"archives/2021/02/index.html",revision:"57e10c937f9f5e80decf0c06de66fa16"},{url:"archives/2021/03/index.html",revision:"2ac452c01e83e906729fbcde28d846f4"},{url:"archives/2021/04/index.html",revision:"d0c48cc23393290ea7947393944f44ea"},{url:"archives/2021/05/index.html",revision:"88d4d5d05689e79d6a983fcf3748d7f2"},{url:"archives/2021/index.html",revision:"9bcc8562ee3ea24ef34e533b0d0d0d9a"},{url:"archives/2021/page/2/index.html",revision:"f9aab2a6d9dbb3c4b83dd9771ff059f6"},{url:"archives/index.html",revision:"9a4cd8e2ef365d2f5a2fb36fda2d4c36"},{url:"archives/page/2/index.html",revision:"8deefbeda08457acfe9217ec2618dc03"},{url:"archives/page/3/index.html",revision:"180f36159e32121fb730a4fcb6dfda4c"},{url:"archives/page/4/index.html",revision:"6a42f42e46c37130f0319d04361e2083"},{url:"archives/page/5/index.html",revision:"5de0e081c4033e1ba38a7720f2195145"},{url:"archives/page/6/index.html",revision:"f379107b55555ad60a62e76e10468663"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"b28868d6.html",revision:"d6224b41390f6b4ea05c69fe5478efdd"},{url:"bangumis/index.html",revision:"59363976bb2037d4e92e5b808850d8ca"},{url:"bf3a65a4.html",revision:"449ee23989091ba1679f8ac4f857186d"},{url:"c1ee638c.html",revision:"d5e6e55235cd05978b367fdc5f7a44a0"},{url:"c3119b08.html",revision:"7a8fbd7e36ec26cb3a5020478f662bbc"},{url:"c53c84e7.html",revision:"0928b78c9205f4acc85f98f44ab6adee"},{url:"c6c9c4db.html",revision:"7e7070a1ccf91095c99d1614228fdfdc"},{url:"categories/index.html",revision:"aeb693e3864476061a62369812c66890"},{url:"categories/教程-html/index.html",revision:"0acc3be44488d5b751b421c0cb6689eb"},{url:"categories/文章/index.html",revision:"db541462ec8d9470fdee63ea0561fbe4"},{url:"categories/文章/page/2/index.html",revision:"b1e2f0c54eae6c6d40e0f2649adfb379"},{url:"categories/文章/page/3/index.html",revision:"ae6e27853812e5c1cd74ce9431c624f0"},{url:"categories/文章/后端/index.html",revision:"1fc950592ae793783fcad6e259a6e031"},{url:"categories/文章/续集/index.html",revision:"27c3616f29182a53949caaefee239c09"},{url:"categories/通知/index.html",revision:"a13648572abfac6a9d119ac8dc2e7178"},{url:"categories/通知/page/2/index.html",revision:"79501cae29193e6261d5273dc3f8d690"},{url:"cd843bca.html",revision:"97b5647e8344dc8c19abfffbe8e93af7"},{url:"codemao/join.html",revision:"9b24517c112a9de2658ebb6455405121"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"42ca12d0ad5f7df4ecddbc251b6e4ba1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"d28a09fd.html",revision:"242d158e43336ecd09e55ee05f8b2204"},{url:"d2bd8f46.html",revision:"4b09f2a8ea859273f634c69d59d00e38"},{url:"d46f6783.html",revision:"1d143b13eb8f342147a1f289f378b22d"},{url:"da033cd3.html",revision:"fe186f11b7dc5c2f28acff08cf95572c"},{url:"db5f4c9.html",revision:"731468188a060444aee1b1ed1d5b4168"},{url:"dfd2f59a.html",revision:"10707470052666026d3a7bb02debb682"},{url:"e4d07d47.html",revision:"4bfb0c75ed51071b23168e1468d9a6f5"},{url:"ede49718.html",revision:"65d248b818d673a7f4f20fb6b5354ef1"},{url:"ee30bc12.html",revision:"a1169b5995e4358b16194da20623c47a"},{url:"f6485125.html",revision:"928cdc0a346d0326eb34920841183be4"},{url:"fa1bfef3.html",revision:"1c2b907499166fa4e3b9408d89612e85"},{url:"fe275fd0.html",revision:"8abd7ab15d9512027e0e87bdeb78464d"},{url:"from.html",revision:"a3c98c40cec05d338b14448217a95eeb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"71bd0b65e18795accf3ec7a52cc70aad"},{url:"js/main.js",revision:"284b95d3ba335fd99e07ea05d0602eb7"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"jump.html",revision:"dc89b09701440dce9e8d495715fdd57f"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"70b56360af919df1e5c929c65a2d897a"},{url:"me.gif",revision:"700331096068bbc3dd093df09cd1e40a"},{url:"msgboard/index.html",revision:"71fe8029eb623102a5ccd0a67d5d2f52"},{url:"other-page/dead-links/index.html",revision:"1cbf554c64aa8f390b6b93fd30b8a2b8"},{url:"other-page/video/index.html",revision:"0261ba68338dbfbba967afd6e103cc3d"},{url:"other/index.html",revision:"cd21c1ff5bcaea5a50de9e7113d6c6b5"},{url:"page/2/index.html",revision:"c265a659af4d3ec4432c8ffe4107694b"},{url:"page/3/index.html",revision:"a12aa9f4967c2d3f1a4a93607bd18ee4"},{url:"page/4/index.html",revision:"b06c4702d44e9805baf471c9fed4085d"},{url:"page/5/index.html",revision:"cbf3a7ca35301824f11aab0064ab495b"},{url:"page/6/index.html",revision:"71b7bcc7d31211adb2df6efc347c2226"},{url:"random.html",revision:"ab0ead147d0cd3f5fc460fc244252420"},{url:"shuoshuo/index.html",revision:"ed41636235b08e228a9fb8a7a4894c3f"},{url:"sw.js",revision:"2ac82fabace1fe517c4d05208208b62d"},{url:"tags/2020/index.html",revision:"763dbadbf0aaa1d75dfbe58e8d12a6e9"},{url:"tags/404-网站/index.html",revision:"3de7986c34eff807573a8938b9cad573"},{url:"tags/android/index.html",revision:"5a2b2e9f3231f08327e3b31e594f13df"},{url:"tags/aplayer/index.html",revision:"ac32a2cb2dd8db04d02d66cd0cbf506a"},{url:"tags/app/index.html",revision:"b68ba20fe6799e2ad6170a6358aef95e"},{url:"tags/bilibili/index.html",revision:"261fe343ba5a9bd704f12961488b4e7a"},{url:"tags/CF/index.html",revision:"ad980a8a16dcb70a3f431be1d043ccb2"},{url:"tags/CFW/index.html",revision:"45bd9c708100d451ee74620f02d6f101"},{url:"tags/Cloud-flare/index.html",revision:"630005cf21c3729df26e0162341a5bf9"},{url:"tags/dao-voice/index.html",revision:"cf12537f88ff7efae61fc9d9fbed78ab"},{url:"tags/debian/index.html",revision:"b1fea308e60c3665c9f9cc2acdff223a"},{url:"tags/download/index.html",revision:"786a6edcf33a5c0f7b3ad09c691fdb7c"},{url:"tags/FA/index.html",revision:"27a00a76c9a89f623afdabc59aba0acd"},{url:"tags/fusionapp/index.html",revision:"5b90841dd09939a52504c1091d2167b6"},{url:"tags/gh-page/index.html",revision:"606fbf299a7bfdf7bca919537f622f7c"},{url:"tags/git/index.html",revision:"dfd0e2ab518b703bbdb5d6e57702500d"},{url:"tags/gitee-page/index.html",revision:"bf120d665a2e06f9b4ded878f66f4a62"},{url:"tags/gitee/index.html",revision:"d1970f94fa0f5aa2a93be9658944957b"},{url:"tags/github-page/index.html",revision:"151e8767dd9dcb0932a0b56605dbc217"},{url:"tags/github/index.html",revision:"0e03fa0bc3767ec0f6ca053065bf1e86"},{url:"tags/githubpage/index.html",revision:"580c2c7582af8663733bc338190d2f87"},{url:"tags/hello-world/index.html",revision:"6bce0ef5699e3006a6e07181357c6178"},{url:"tags/hexo/index.html",revision:"786702b78f6687ffe9b33c7e43a6308d"},{url:"tags/html/index.html",revision:"71e14b41cc753b0c5b35896189135348"},{url:"tags/iframe/index.html",revision:"10759b751e3b53d6723d67b141826555"},{url:"tags/index.html",revision:"c26147b856347ab42de3a30f90ea19fb"},{url:"tags/java/index.html",revision:"38c78d6b8f6c78b921827230d76435a0"},{url:"tags/linux/index.html",revision:"5371fa8f2b5a901c82b6964ceed54a04"},{url:"tags/liunx/index.html",revision:"5611ddda3c7d5cc7661fd4968dc2505d"},{url:"tags/markdown/index.html",revision:"9e7c6adfdc8f2b7dc89c4d427460590a"},{url:"tags/md/index.html",revision:"03a9ac47cbf5e16c59904d8c475bcac8"},{url:"tags/md编辑器/index.html",revision:"cd6e8fa2d2c3c6ab3cd10d6c5b490e50"},{url:"tags/minecraft-JE/index.html",revision:"81780c8cadac1bfa6850ec5f6a2a2be4"},{url:"tags/minecraft/index.html",revision:"f4bc9a865dd80aa895d521797ba39f83"},{url:"tags/minecraftJE/index.html",revision:"a977428e943ec0817b6e2b5b8049b5c1"},{url:"tags/node-js/index.html",revision:"bf73ff7d577f156c9b16282b9dfa7ec1"},{url:"tags/node/index.html",revision:"5b041dfb6a04c42580c65931d0bce8b0"},{url:"tags/php/index.html",revision:"06c1dadfc1d5c089e8f79b2aa588f487"},{url:"tags/picgo/index.html",revision:"b58f1eb6a29b53d7c615ec5c1360a871"},{url:"tags/ssh/index.html",revision:"557762939364095c191541129b8edf44"},{url:"tags/termux/index.html",revision:"1e9a30ae8ee243c5d30b120dd4c88cec"},{url:"tags/vercel/index.html",revision:"55108d992cda574873711450e01da09e"},{url:"tags/website/index.html",revision:"92e60467d4062834babf174d0fc538b2"},{url:"tags/win10安装/index.html",revision:"b58476b5ad38ef83d9d7a55b3a66bd3b"},{url:"tags/Windows/index.html",revision:"1d114ddea06b01a42da41f07a6ee474b"},{url:"tags/Windows10/index.html",revision:"64de1b54f55d0cf1eef1a80c1701824e"},{url:"tags/wmz-blog/index.html",revision:"75e88a8a8e14251d85ba2db5b4c592ae"},{url:"tags/免翻墙/index.html",revision:"ab8ad8a30f83a69d9fcaaffd64312fff"},{url:"tags/动态网页/index.html",revision:"011353e0c170260362604c1d03795383"},{url:"tags/回顾/index.html",revision:"10af981eae66b96a8e69a0956c85e603"},{url:"tags/图床/index.html",revision:"60b87bb0fd228f94d714e3550e2923d7"},{url:"tags/在线聊天/index.html",revision:"60526e960db4d3f954aeb177cda10e22"},{url:"tags/安装/index.html",revision:"ca26c4b6ee0e70538324e9c2573ed962"},{url:"tags/工具/index.html",revision:"a7429fbb4776125d296bf7240a8c8a5b"},{url:"tags/我的世界/index.html",revision:"e9cf152ce64b4f509df9b109557548c9"},{url:"tags/折腾/index.html",revision:"a39a622d11bbd0e0eae32d968aa25211"},{url:"tags/搭建/index.html",revision:"89e0bfa5367849a16d4ec0c92fc37bb4"},{url:"tags/教程/index.html",revision:"83062039fe51d6369fbbdc5e3507705b"},{url:"tags/更换/index.html",revision:"dfa8097f189ee1b90d33fb80f98d1a83"},{url:"tags/更新/index.html",revision:"53b1649b94c3ef8bbe2680a1fa52bae6"},{url:"tags/更新了/index.html",revision:"6deded3b96e856e006f270ae9fdcc4f9"},{url:"tags/服务器/index.html",revision:"224f5f9bd6d88b0c0aa711d79198ba2d"},{url:"tags/测试/index.html",revision:"861df9b2e51a382ae459807a840200e3"},{url:"tags/百度统计/index.html",revision:"400209ffe93a5d637e02d534fba8acc1"},{url:"tags/看法/index.html",revision:"4db2c6f2035bcdc90986b3a192aa157a"},{url:"tags/系统安装/index.html",revision:"5011664f6a439f6fcaed9fda99abb807"},{url:"tags/袁隆平/index.html",revision:"b8ab2364c00c16ba502b2abbf1778c28"},{url:"tags/迷你世界/index.html",revision:"50af100dfcd80a0064b31ed994e6d805"},{url:"tags/通知/index.html",revision:"c331c46baa4ea6fab855f4f4a4034ecf"},{url:"tags/邮箱/index.html",revision:"6cc97c143bc7772253065bd83abb1cb4"},{url:"tags/随笔/index.html",revision:"b07a374eda7dc025e5ccc9ec8291f262"},{url:"update/index.html",revision:"2d83794c9f6746b74ffcdc9093542a5d"},{url:"wsimg/144.jpg",revision:"e81b36fdc50f547888a3db75a416da48"},{url:"wsimg/192.jpg",revision:"dff36f97e418309c1ea7c96a4c376e9e"},{url:"wsimg/36.jpg",revision:"ef6152ccce88e2a17fe4ad3c0977e23b"},{url:"wsimg/48.jpg",revision:"085823fb1b7f0445e853dea64e0ddf98"},{url:"wsimg/512.jpg",revision:"192ade4ecd44c84de0b9e2c951867110"},{url:"wsimg/72.jpg",revision:"a4b62f49424968d927c567adb8560c13"},{url:"wsimg/96.jpg",revision:"75398c65875f0e740375c80f2822019f"},{url:"wsimg/favicon16x16.jpg",revision:"b2630134eb8ad276490a5565acf54189"},{url:"wsimg/favicon72x72.svg",revision:"e9f105cba07936e976ecf7bb735e4e28"}],{})}));
//# sourceMappingURL=service-worker.js.map
