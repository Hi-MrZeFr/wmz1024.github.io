if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise((async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},i=(i,a)=>{Promise.all(i.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(i)};self.define=(i,d,c)=>{a[i]||(a[i]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(d.map((i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}}))).then((e=>{const i=c(...e);return a.default||(a.default=i),a}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"11f1a2fc.html",revision:"3163b2a1b1728b6850ffddeb5b2d252b"},{url:"1f7e3876.html",revision:"d3635b3cee38eb66731fa6245ecd1eaa"},{url:"2b244555.html",revision:"3c0f5e199d2248c3cada7613f3056194"},{url:"2c7854e6.html",revision:"ba0f124174a87e988b43c9826678f644"},{url:"2ee2518d.html",revision:"cc32ef023f11c3c2ea9f6c054cb53e8c"},{url:"30422b3f.html",revision:"096536340266b9bec7b852be8f46e354"},{url:"3494bf09.html",revision:"14b283da53247792c2743e827677e58f"},{url:"3e4cf0e1.html",revision:"916629997354cb21b0fe2fcb80d56e3a"},{url:"404.html",revision:"23d1a3ce663cbdf038835f1acd14c317"},{url:"4283e7c2.html",revision:"6fa078807cf5111037d0d7f4e0cdc281"},{url:"47008bfe.html",revision:"786253324004e79c24ea530f8cf6b9bb"},{url:"496761e5.html",revision:"aaf529a008a60cdb87db9e3994b405e6"},{url:"49ab854f.html",revision:"5bfc05e1f14ace8ee67546b4596d9c94"},{url:"4a17b156.html",revision:"936b6a1b8cacb6f0a7e4f6ee8964e15e"},{url:"51f11683.html",revision:"8753fff8503348ee660cbb11f80eacec"},{url:"6057642a.html",revision:"4fa98ea5ccffa7c71706e3ca6902b6f7"},{url:"60816787.html",revision:"c8f9fd0f0f883effbda685073bd9e325"},{url:"68083ed.html",revision:"0ff0db4644978b6971fba234f8baf173"},{url:"71e2d2d3.html",revision:"f29d3bc105d0b7862aa5676161453060"},{url:"748a29a4.html",revision:"d8c0906612c52ef9b9c9ce18fb4059dd"},{url:"7bc26341.html",revision:"0f5ce3162d1e51bc648efa9b106f8f4f"},{url:"7cee40bf.html",revision:"8a9f72dfb3cba1b7fdfb16fe19fb2314"},{url:"836982c.html",revision:"b18cc81ac4ecb8ac7b2b34b704cbd4c2"},{url:"83d82948.html",revision:"8bcb719dc8fbb6dd1b59d8a2d50aa8a2"},{url:"8856403.html",revision:"d44a7670e5736ff8ec4ec3c681d9e17b"},{url:"8bc291e6.html",revision:"6bb0c9c2c7a847f5054c1ef805760708"},{url:"8d39085b.html",revision:"d8cbd18a75daaf0137a6345fac58d30d"},{url:"9341b494.html",revision:"e08011fb1fed4cde3fd7451797d78eb0"},{url:"96ccccce.html",revision:"8761f6381b4b0cf07a7922ddbac025aa"},{url:"98d114e8.html",revision:"2bc263ff81aaac3af919f5313984f661"},{url:"a1be303c.html",revision:"ef6540955a122b3d2bda866591b72777"},{url:"a81556f1.html",revision:"cca5daca7bcfb89cb56c64e8dc7e9ad5"},{url:"aa96c821.html",revision:"cdaeddb439305d4f4095ffba736d9116"},{url:"ab1d37b.html",revision:"5de63d9244ebb5ea6fd63d82111ba3ef"},{url:"about/index.html",revision:"ea5c5a6a37f0371b765a2dfa9eb65a60"},{url:"af886b34.html",revision:"4ef00e4a78c5f44ed2cb5dacdabdce57"},{url:"archives/2020/08/index.html",revision:"0bb40ab94885e5dd48698be6484de10c"},{url:"archives/2020/08/page/2/index.html",revision:"accd225966467c095caf814fa1152daa"},{url:"archives/2020/08/page/3/index.html",revision:"7edafd97c2e406c4e5f7366ac7c614ef"},{url:"archives/2020/09/index.html",revision:"e8fe32cfa9bbd40fd15532fa13772d84"},{url:"archives/2020/09/page/2/index.html",revision:"ca1ae788c536fb147afae031727c33c7"},{url:"archives/2020/10/index.html",revision:"c1ddbdcc218a92a6ffd4a2e895df8674"},{url:"archives/2020/11/index.html",revision:"1cd433d40ce0087aa45c3bd4a2cd1ebe"},{url:"archives/2020/index.html",revision:"8a5689698b0cff3ea45633c74e7516e1"},{url:"archives/2020/page/2/index.html",revision:"8eeb61e1dd3684d5777c3b76a97447e6"},{url:"archives/2020/page/3/index.html",revision:"d20f2352c1303f592600b9979abeedea"},{url:"archives/2020/page/4/index.html",revision:"405b2f22885cc894400fe4f16e9a4286"},{url:"archives/2021/02/index.html",revision:"fc915ff027a29ff870f07a4938cab038"},{url:"archives/2021/03/index.html",revision:"2cadc6467afe07f74420dbc290bcceb6"},{url:"archives/2021/04/index.html",revision:"d391889f88bd5f71c7e5b7cfc79300d7"},{url:"archives/2021/05/index.html",revision:"2a0ee750614c8ab00829697c8739db8c"},{url:"archives/2021/index.html",revision:"25aeed66a590dfc15c74fc0215c33fd1"},{url:"archives/2021/page/2/index.html",revision:"35ef2063a3966eb9a109b404512d9c94"},{url:"archives/index.html",revision:"c01e9013a3b136946d889100379b25e6"},{url:"archives/page/2/index.html",revision:"6018afef6bd736d004f51d2a48156ef3"},{url:"archives/page/3/index.html",revision:"4e1d1936d583e797eda2b5ec4375f055"},{url:"archives/page/4/index.html",revision:"3e5a4492c0c512aaaa48c19dfc876f85"},{url:"archives/page/5/index.html",revision:"49f3b0e4f7550392ebaf5f46295a1d61"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"assets/css/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"assets/js/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"assets/js/Meting.min.js",revision:"bfac0368480fd344282ec018d28f173d"},{url:"b28868d6.html",revision:"d35d9ce7b82faf6f6b80e8a718f53b56"},{url:"bangumis/index.html",revision:"db6e4bf92c6fb4e10d8f2ad62b993b08"},{url:"bf3a65a4.html",revision:"f50b9e1ace4fd9512da927383eb3d41c"},{url:"c1ee638c.html",revision:"1229c01d10bf27f764474024ef13d5bd"},{url:"c3119b08.html",revision:"40f00f46bc208ffef50396d7dfcf8ea5"},{url:"c6c9c4db.html",revision:"ece329c32d6583a138639b42f10442e6"},{url:"categories/index.html",revision:"1a19d645c91ecb5999460702da247c43"},{url:"categories/教程-html/index.html",revision:"4c09d39453fc37bc9cda8101958a11ff"},{url:"categories/文章/index.html",revision:"d71dc6f735039ffc70773703b0bbda31"},{url:"categories/文章/page/2/index.html",revision:"669b91c6277a00da5ba5e3876135e62a"},{url:"categories/文章/page/3/index.html",revision:"f77f350bfa7b0ac13071df0e6f7fe042"},{url:"categories/通知/index.html",revision:"90076006c43f649b2f26fb9d14b2c4e1"},{url:"categories/通知/page/2/index.html",revision:"3baa8d5503e245c5d599321d460c365a"},{url:"cd843bca.html",revision:"0c13684fd126f8159cd86e7acad3b1c9"},{url:"codemao/join.html",revision:"e9465ea84062bc8587a8f62b27110c5f"},{url:"css/hbe.style.css",revision:"a8bc819e01e001d3bc6ae03a2afad957"},{url:"css/index.css",revision:"42ca12d0ad5f7df4ecddbc251b6e4ba1"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"d28a09fd.html",revision:"e49af25d2454ac791ee5a93d051e074c"},{url:"d2bd8f46.html",revision:"a402ed48c692b07f643820dcfcf858ab"},{url:"d46f6783.html",revision:"0e77eb03af27bc62278ee58e789763a4"},{url:"da033cd3.html",revision:"badd6075f45971ae20ff6f0210b77fa5"},{url:"dfd2f59a.html",revision:"3abd61104898b9c5914b9f7553e056eb"},{url:"e4d07d47.html",revision:"82f188e95ddc00a785f291bd1c8411f4"},{url:"ede49718.html",revision:"20d1dc8d4b27a0cc9ddc47c21ca8718d"},{url:"f6485125.html",revision:"4537e91094a7fe2fbe247630791c3d62"},{url:"fa1bfef3.html",revision:"c0469f710668537d8e0e12303c07a6a7"},{url:"fe275fd0.html",revision:"15fb28d51050d07cba07a0c7e68b6a02"},{url:"from.html",revision:"a3c98c40cec05d338b14448217a95eeb"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"index.html",revision:"56adcafecdefa373f13fa623384ab458"},{url:"js/main.js",revision:"284b95d3ba335fd99e07ea05d0602eb7"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"jump.html",revision:"dc89b09701440dce9e8d495715fdd57f"},{url:"lib/hbe.js",revision:"4a7e94ac7224adfce4b0572ca5c57fef"},{url:"link/index.html",revision:"902126c40c192088ba3f46873017778c"},{url:"me.gif",revision:"700331096068bbc3dd093df09cd1e40a"},{url:"msgboard/index.html",revision:"7876ea1c0fa2b92db976f8a5e681183f"},{url:"other-page/dead-links/index.html",revision:"ffb53709deb49882c3ec5ba653bf546b"},{url:"other-page/video/index.html",revision:"1afb5da426e28de6127d8d75c156f5c1"},{url:"other/index.html",revision:"758b5f59bdca7ef024755e5e8678b418"},{url:"page/2/index.html",revision:"368c9eb4e7a39e4f3078e4942505795b"},{url:"page/3/index.html",revision:"6bf0c9cf5d1d5be5284644fa78bfa475"},{url:"page/4/index.html",revision:"d84e529adc07b0cbfeec852bdb7a4f45"},{url:"page/5/index.html",revision:"f3693d938ad4fd27865bc4aad28978b2"},{url:"random.html",revision:"f5916b3ac4439454de06eb690bdd4252"},{url:"shuoshuo/index.html",revision:"2d22e71fe97dd93663c2716f479c0106"},{url:"sw.js",revision:"2ac82fabace1fe517c4d05208208b62d"},{url:"tags/2020/index.html",revision:"9526f4e33df88ffa6dd7bd6c8fb51e03"},{url:"tags/404-网站/index.html",revision:"f7be86cd0290bbb67e51112b82be732d"},{url:"tags/android/index.html",revision:"a31e7d7c225bdd4e4a4073f2fd7ab753"},{url:"tags/app/index.html",revision:"8e324b117f9d2b20501032465a72b38c"},{url:"tags/bilibili/index.html",revision:"4a352e740398342706665e2d37b04ee4"},{url:"tags/CF/index.html",revision:"fe8cebacb3f792c08c729b81548a9a59"},{url:"tags/CFW/index.html",revision:"2d5ce5f48ba45bd5729b3bf4827cb931"},{url:"tags/Cloud-flare/index.html",revision:"6f2bdbd365dee73b3c676bb5920b0eb6"},{url:"tags/dao-voice/index.html",revision:"80f9bf391515cf94652c74a7bcdac857"},{url:"tags/debian/index.html",revision:"95bc72ac24e4f15a2bdffc04a221e8b5"},{url:"tags/download/index.html",revision:"a1369727fe56ed4994b4534e1bc487bf"},{url:"tags/FA/index.html",revision:"270a8bbe2e2767373dff74114245ed00"},{url:"tags/fusionapp/index.html",revision:"949a50fc3b4f7506f8b4177a5f4e4a9e"},{url:"tags/gh-page/index.html",revision:"8750e0a13c7fd2984ea6245ad1192122"},{url:"tags/git/index.html",revision:"afb97d8d115e7d11948f3c12fbee8e12"},{url:"tags/gitee-page/index.html",revision:"88bd4c2e2730e9c15ae8e809521773c7"},{url:"tags/gitee/index.html",revision:"7427a59083a95898d685129a93dd22ba"},{url:"tags/github-page/index.html",revision:"32891ba534aeb152ce42e3681182182b"},{url:"tags/github/index.html",revision:"85f0c6a566da815add1a3863b108af6a"},{url:"tags/githubpage/index.html",revision:"2e7cee4f307c91dc60d894db613e4c5f"},{url:"tags/hello-world/index.html",revision:"84f3f8d8d7b981e3b68b3ed55423b9dc"},{url:"tags/hexo/index.html",revision:"88ebb06e57d02e5cd37ee957804a59dd"},{url:"tags/html/index.html",revision:"140e5e63c85d8f6b520237a7c0ff2b0e"},{url:"tags/iframe/index.html",revision:"32b83d8d2d03eeb2809aa7dd4db44659"},{url:"tags/index.html",revision:"361905648b2c43b233335bcaefd6f1df"},{url:"tags/java/index.html",revision:"b1184724ac20c9f0674ee324cadf4e1c"},{url:"tags/linux/index.html",revision:"0c4222a77c7b3c07b8079af65533ed42"},{url:"tags/liunx/index.html",revision:"40012714be07d2f9e5367e180a21ce68"},{url:"tags/markdown/index.html",revision:"47241625aaaa1576fd440c4fa16f560f"},{url:"tags/md/index.html",revision:"9c871a2c85208334370853087f785a9a"},{url:"tags/md编辑器/index.html",revision:"c2400b10ca53f263e51aa986fa361053"},{url:"tags/minecraft-JE/index.html",revision:"20401aecb3b8273157bc286e8201aa46"},{url:"tags/minecraft/index.html",revision:"8d2a878a0e4c57dcd210b7b47dfa297d"},{url:"tags/minecraftJE/index.html",revision:"ee4732f234be4b30920421f1ef08f417"},{url:"tags/node-js/index.html",revision:"68e7baf4aa840c8a305bcb88a1f43026"},{url:"tags/node/index.html",revision:"6a912788e1319dd60b93e3f9c0eadcbe"},{url:"tags/picgo/index.html",revision:"ff76b0d91149b09f1e5f4e573a506297"},{url:"tags/ssh/index.html",revision:"295a0bb3e1b70b832e674ba9bfe862e1"},{url:"tags/termux/index.html",revision:"28d3d724f1d3d37ed6214bf7e32fdde6"},{url:"tags/vercel/index.html",revision:"3b270a219805edfc5e0a55f28c7ab69b"},{url:"tags/website/index.html",revision:"92b3be94f867a6f77b884d263e28c312"},{url:"tags/win10安装/index.html",revision:"a81ea2cd0e31c15a410deb726f03b5ef"},{url:"tags/Windows/index.html",revision:"bfafd91f3a6b03858d5a0d823c8ac3aa"},{url:"tags/Windows10/index.html",revision:"9e29126408b75eeabe212b220491bf41"},{url:"tags/wmz-blog/index.html",revision:"5e46abd0a1b3b663ef2070d1507cca68"},{url:"tags/免翻墙/index.html",revision:"a599ace9b1eab4a18e2b3089b88da245"},{url:"tags/回顾/index.html",revision:"68cd7dbfa868e9f930cbc7ed613fb9aa"},{url:"tags/图床/index.html",revision:"e9be32425a7c1d61f4936c9272c33988"},{url:"tags/在线聊天/index.html",revision:"d881e0fc29bfc3fdfdd7acb274969069"},{url:"tags/安装/index.html",revision:"bfa48db494266372d706f3ceb924a83e"},{url:"tags/工具/index.html",revision:"1d3a8ded6b7c6d37387cffe6cbca7535"},{url:"tags/我的世界/index.html",revision:"c8b3adc9978c8c107261f9813f02f48f"},{url:"tags/折腾/index.html",revision:"21f23ed89bc38657eb3836721ac14884"},{url:"tags/搭建/index.html",revision:"2df7d8c33162838e9f4ac4bb4ff6ca26"},{url:"tags/教程/index.html",revision:"0a54d50122e857e8d003c38866615922"},{url:"tags/更换/index.html",revision:"77138b341b469a55e164613662eed406"},{url:"tags/更新/index.html",revision:"da4deded80f5a36fec342b2ff06aa843"},{url:"tags/更新了/index.html",revision:"71a0d5ed4b2962eb2228800c8e12467a"},{url:"tags/测试/index.html",revision:"dcc339cc493dab02bc9f77b7f5541b03"},{url:"tags/百度统计/index.html",revision:"bf26e27f765b67745fb2ac34b8507241"},{url:"tags/看法/index.html",revision:"641e32f432f650811c9ec428e174c367"},{url:"tags/系统安装/index.html",revision:"a7df7aadf037e9aee635e8d32d8dcc19"},{url:"tags/迷你世界/index.html",revision:"978b573b3910c36c17598c1649d323d2"},{url:"tags/通知/index.html",revision:"265a3fdfe1a78401f2bb0546c9b90b4c"},{url:"tags/邮箱/index.html",revision:"856be6c4cf4aa3afb0326e109892e988"},{url:"tags/随笔/index.html",revision:"8917b502aa65f912c63628f7df2ce6ce"},{url:"update/index.html",revision:"1213b274f208d526580e6da33906e936"},{url:"wsimg/144.jpg",revision:"e81b36fdc50f547888a3db75a416da48"},{url:"wsimg/192.jpg",revision:"dff36f97e418309c1ea7c96a4c376e9e"},{url:"wsimg/36.jpg",revision:"ef6152ccce88e2a17fe4ad3c0977e23b"},{url:"wsimg/48.jpg",revision:"085823fb1b7f0445e853dea64e0ddf98"},{url:"wsimg/512.jpg",revision:"192ade4ecd44c84de0b9e2c951867110"},{url:"wsimg/72.jpg",revision:"a4b62f49424968d927c567adb8560c13"},{url:"wsimg/96.jpg",revision:"75398c65875f0e740375c80f2822019f"},{url:"wsimg/favicon16x16.jpg",revision:"b2630134eb8ad276490a5565acf54189"},{url:"wsimg/favicon72x72.svg",revision:"e9f105cba07936e976ecf7bb735e4e28"}],{})}));
//# sourceMappingURL=service-worker.js.map
