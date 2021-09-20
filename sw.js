const workboxVersion="6.3.0";importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js"),workbox.core.setCacheNameDetails({prefix:"wmz1024"}),workbox.core.skipWaiting(),workbox.core.clientsClaim(),workbox.precaching.precacheAndRoute([{revision:"82cdfb8ff23a3396ab7a78ba75249a2c",url:"./11f1a2fc.html"},{revision:"e27164faafa1008f7d2dd40fe15047d6",url:"./1f7e3876.html"},{revision:"15636fa18718e32c1c487dd6b1a3e677",url:"./2b244555.html"},{revision:"82b291fbf868e307a8e920911a4d9650",url:"./2c7854e6.html"},{revision:"bcfcca92027255e0e741835b2ecba4d5",url:"./2ee2518d.html"},{revision:"87a673fce3ff39dc9168baaca9710c18",url:"./2f3c3637.html"},{revision:"41013ab27cedbe66d32746f8adff0cb1",url:"./30422b3f.html"},{revision:"14fac18b3b53b0abc70aa753da80344d",url:"./3494bf09.html"},{revision:"1d4772498ad9b275eda6045c614bdbce",url:"./3e4cf0e1.html"},{revision:"9f5adae946521b304f48bc3568f4b680",url:"./404.html"},{revision:"71c4c80f268b1ce8815bb03987e42dbd",url:"./4283e7c2.html"},{revision:"177ff6b4a1670721d8ddb61046e0e55a",url:"./47008bfe.html"},{revision:"4a7548f5c7eb172324af2683fee41748",url:"./496761e5.html"},{revision:"946d646171178398526fcc44f85a5ff8",url:"./49ab854f.html"},{revision:"16a1aa4199c1d27c588251a02f27f644",url:"./4a17b156.html"},{revision:"66c69385d524944a805833b665c2a266",url:"./51f11683.html"},{revision:"4487f999f86effe6f9c7c3594d697a7f",url:"./5b2b3473.html"},{revision:"45bb5af0d1e059667681fc63e2ef096e",url:"./6057642a.html"},{revision:"dd3770c56c0bbac8b3057989e3963a2a",url:"./60816787.html"},{revision:"98fa8dd94d2978a45f926dc9abfd47ee",url:"./68083ed.html"},{revision:"e8bb3813d86ade8d5362aaf811654290",url:"./71e2d2d3.html"},{revision:"15aedf7c29d1d8a355142d3f598c1c5f",url:"./748a29a4.html"},{revision:"b969584d5be6e1815a0ffe5531286287",url:"./7bc26341.html"},{revision:"1731ae0cb0afc55cc30cb25fff9dcfda",url:"./7cee40bf.html"},{revision:"7f64b55d623efe88949e0df546ff3ac6",url:"./836982c.html"},{revision:"2ac83379fe0d8fe525a80b3a73082003",url:"./83d82948.html"},{revision:"d79040cb175c7d63f5935c94bbe62899",url:"./87e1c0bc.html"},{revision:"c8da4a07193e46fd6fd4397158c8a0e2",url:"./8856403.html"},{revision:"03da8a4a6ab3742e59e8bf23aa0cc4ef",url:"./8bc291e6.html"},{revision:"f9db527847a4cf6e81a8bf4cc86f9a4b",url:"./8d39085b.html"},{revision:"849288363ed88ccac6c56c7cb0abf48f",url:"./9341b494.html"},{revision:"0534ab17ac3f307ddc234baec50981d9",url:"./96ccccce.html"},{revision:"04414074bb36faefe142390cb6577a9f",url:"./98d114e8.html"},{revision:"ac96b9ad99ade4179670778ad0b75467",url:"./a1be303c.html"},{revision:"fd69ec9b4f5964aba8f381cc0f914d3b",url:"./a2bad115.html"},{revision:"28949212f07cfc498e3b2ac546eccefd",url:"./a65bc6b8.html"},{revision:"771d213218e2f36707a14a4be3f6edfd",url:"./a81556f1.html"},{revision:"16ad0c4b86e608897ebcce4bbb1aede7",url:"./a8acdd67.html"},{revision:"2137746b862be4401b88fae8d1c7dd71",url:"./aa96c821.html"},{revision:"ec6bccde672b98505e650619081d8b6c",url:"./ab1d37b.html"},{revision:"83dae8341461cb9b5b4350c5f81abb26",url:"./about/index.html"},{revision:"2e665faa90566ae96f91e582e5396741",url:"./aeb2d36.html"},{revision:"5ab1f8856a35c4937ae4f9f37730cabe",url:"./af886b34.html"},{revision:"26e167f298a192baff8e8cfd6e646c6a",url:"./archives/2020/08/index.html"},{revision:"ede55b9ecca4122f8ec432faeeb32b0b",url:"./archives/2020/08/page/2/index.html"},{revision:"9d759b2d6c45292c4889805297ff29ee",url:"./archives/2020/08/page/3/index.html"},{revision:"559f8f4f481dbe4ff90e77c4d66916bb",url:"./archives/2020/09/index.html"},{revision:"1af2ea24fce32cae9c79191270ec5394",url:"./archives/2020/09/page/2/index.html"},{revision:"f99845e837c1776e3428857afa535d8a",url:"./archives/2020/10/index.html"},{revision:"5c9eddd685a4705d5f302b66e3f3ce91",url:"./archives/2020/11/index.html"},{revision:"1c202ec58ae3ce8703f9d3e6d5d6bd3e",url:"./archives/2020/index.html"},{revision:"4c5bd56ffde811fcc72e4742e40d653a",url:"./archives/2020/page/2/index.html"},{revision:"92883ef298b1bfc036c4f258e05b84f4",url:"./archives/2020/page/3/index.html"},{revision:"58a0bb7697a9462128a8b51fd1ca5ad2",url:"./archives/2020/page/4/index.html"},{revision:"bbac5e3b0470b025a96f159dc4d18158",url:"./archives/2021/02/index.html"},{revision:"1e27d4faa87dfc6f85a74abfae5f7554",url:"./archives/2021/04/index.html"},{revision:"2a8e023fe78c0d1a4be30f737d7c4ca3",url:"./archives/2021/05/index.html"},{revision:"b9bdac436f3844fdf751eb3934058cd0",url:"./archives/2021/06/index.html"},{revision:"084afa271bd4c4a1297d46c034d58925",url:"./archives/2021/07/index.html"},{revision:"c9fafd80646a6c148037867596d80aca",url:"./archives/2021/08/index.html"},{revision:"145ca9173a9d33f6ac1ef8b9de8ac447",url:"./archives/2021/09/index.html"},{revision:"64df242be99eebb7b30b0ce4f63b25f0",url:"./archives/2021/index.html"},{revision:"efed65c5af921cc9e46db9a787c80a31",url:"./archives/2021/page/2/index.html"},{revision:"d5b427c1b678bd5bd1a25770d346f891",url:"./archives/2021/page/3/index.html"},{revision:"108a81db2b6c481de4a08d56e4927071",url:"./archives/index.html"},{revision:"d801b94488c259b7a115ec9109e95152",url:"./archives/page/2/index.html"},{revision:"b75b3781694f5e7c23b072600beb9630",url:"./archives/page/3/index.html"},{revision:"a477f6c53eea775bbd83076d8d774fb0",url:"./archives/page/4/index.html"},{revision:"66b62174f0720ff0229472e2d2b2b2e2",url:"./archives/page/5/index.html"},{revision:"80950c43c01041db2a8d59e500116346",url:"./archives/page/6/index.html"},{revision:"e0dd521bf3cc678a36de3f489a89f520",url:"./archives/page/7/index.html"},{revision:"d5d2500bfe8443b42baaefe4996ee532",url:"./assets/algolia/algoliasearch.js"},{revision:"9c5e51e57e2b1d888950bf4cb5708c49",url:"./assets/algolia/algoliasearch.min.js"},{revision:"ce9b0e62645c036a143f639b92e7789f",url:"./assets/algolia/algoliasearchLite.js"},{revision:"c2d71f042c879659dbc97f8853b62f21",url:"./assets/algolia/algoliasearchLite.min.js"},{revision:"fbe994054426fadb2dff69d824c5c67a",url:"./assets/css/APlayer.min.css"},{revision:"8f1017e7a73737e631ff95fa51e4e7d7",url:"./assets/js/APlayer.min.js"},{revision:"bfac0368480fd344282ec018d28f173d",url:"./assets/js/Meting.min.js"},{revision:"0457849a012aaab085f6ea737ba58efc",url:"./b28868d6.html"},{revision:"b0a16a50c66ad75d489dc88061f2c67c",url:"./bangumis/index.html"},{revision:"f9449f6191fbcb1fd45053dcdac2fdb6",url:"./bf3a65a4.html"},{revision:"40ca4b7de4b27a807ad9c54ec1b556e7",url:"./c-re.html"},{revision:"a77df43e581d8232affc3d7f39930a40",url:"./c1ee638c.html"},{revision:"10ef30ca20756f3e67738d9236efa71b",url:"./c3119b08.html"},{revision:"67ac22ac0731d2eb4c085763527d21bf",url:"./c48ef0f6.html"},{revision:"283c41d75e0b538514d8331ab5a7e486",url:"./c53c84e7.html"},{revision:"1fcd960651d2adb5a38d73ccdc257c0d",url:"./c6c9c4db.html"},{revision:"989dd450791aecc139d15452d9f45642",url:"./categories/index.html"},{revision:"ab8ad215140af0636a4dc046c33b16d0",url:"./categories/教程-html/index.html"},{revision:"ff73303e1c7f58d8d22ce33c4cf3b0b7",url:"./categories/文章/index.html"},{revision:"66555e4fafaa9b7bd6842ce3ce2b2d9e",url:"./categories/文章/page/2/index.html"},{revision:"254d797f9f45cbc074294c975d66be3a",url:"./categories/文章/page/3/index.html"},{revision:"c5910253216d08740bf02480401b16c8",url:"./categories/文章/page/4/index.html"},{revision:"d00b980040f76aded55dd7452c4e284c",url:"./categories/文章/博客周年/index.html"},{revision:"044a5d86b434272f741d132c77072517",url:"./categories/文章/后端/index.html"},{revision:"3721f6b6497af98dbe976b70cec61aaa",url:"./categories/文章/感受/index.html"},{revision:"8b3d8252345d4e9b5a30a437aff2a1a8",url:"./categories/文章/笔记/index.html"},{revision:"a6a5cc7edb987892380a5bf707620677",url:"./categories/文章/续集/index.html"},{revision:"58139ccca765b75b6e9ecfb005ed910d",url:"./categories/日记/index.html"},{revision:"ed6fbc3f256d9810fc14be635e6dfa81",url:"./categories/通知/index.html"},{revision:"68b2937a36f9244f1ffe1911f2d2127b",url:"./categories/通知/page/2/index.html"},{revision:"9b9af011e4c5dacf744e35cf4556fe82",url:"./cd843bca.html"},{revision:"ed185f0c3378eb5ed749fdc4e1772c98",url:"./codemao/join.html"},{revision:"9dac2a83c7015250f9e4cceac487f165",url:"./comments/index.html"},{revision:"a9a3712ca10c5d65b7af395d9dc53289",url:"./css/bilibiliBanner.css"},{revision:"fb15fb1adb17841704902aa9c227f729",url:"./css/bilicard.css"},{revision:"aa687b8441c1dea2f0710f788723542f",url:"./css/card_botui.css"},{revision:"808bbddc4f4c56aee97a7af07f1f364f",url:"./css/coin.css"},{revision:"0a8e48088a60333db1759bf5cd1985ba",url:"./css/custom.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/customw.css"},{revision:"8aae3872dd735df63ac60710f46e97be",url:"./css/gggwmlgxfc.css"},{revision:"a8bc819e01e001d3bc6ae03a2afad957",url:"./css/hbe.style.css"},{revision:"085d261235446d6a10c1dbc04eec7e2c",url:"./css/index.css"},{revision:"d41d8cd98f00b204e9800998ecf8427e",url:"./css/var.css"},{revision:"dc5be86666853501d1c33f80d448b685",url:"./d28a09fd.html"},{revision:"61921a4efa0ea48237129889f19f3ade",url:"./d2bd8f46.html"},{revision:"43cc8706838a3e7e581b91c54725fb09",url:"./d46f6783.html"},{revision:"2be0b7ba31e23698e9088acebc2f5f81",url:"./da033cd3.html"},{revision:"fe18f6d2ab9e657012874b1e7a0b33c8",url:"./db5f4c9.html"},{revision:"ddc6154354b6e45ae300b4cad6a0535e",url:"./dfd2f59a.html"},{revision:"3401a787f8787cf2a1b0345a1accbabc",url:"./e4d07d47.html"},{revision:"929a7d4386c5457d915303b8634050f3",url:"./ede49718.html"},{revision:"6e5a72ff11e29691cb1401a3969c2cac",url:"./ee30bc12.html"},{revision:"9c569a8ee200e4bc97629949ca75e718",url:"./f053c80.html"},{revision:"a93a835683ae3815f31a8424f3eeb868",url:"./f6485125.html"},{revision:"73b4ed298c97d39db8aef4bdb294d915",url:"./fa1bfef3.html"},{revision:"a84e6fdba021d81f38f74ff2eaeab7b2",url:"./fc/index.html"},{revision:"5a87170e158d06f0114a3af15404e267",url:"./fe275fd0.html"},{revision:"d42f7e8f3c5a1d49c374916e3d588124",url:"./from.html"},{revision:"605b7bf2601645ef1712e6c3ddaf8dd3",url:"./index.html"},{revision:"3977461395620c67690202f14bbc6058",url:"./js/bilibili-banner.js"},{revision:"546b558e9e8b3c6952b530d467406ad7",url:"./js/botui_init.js"},{revision:"6aea941743f41c0649d742bdc80df352",url:"./js/botui.js"},{revision:"db0ef6fc56befa79cef5e478f9138324",url:"./js/coin.js"},{revision:"f468f3bc967338f2dd7a6e06c2eef692",url:"./js/main.js"},{revision:"c56713403fe9375a51d3a0e660e80676",url:"./js/runtime.js"},{revision:"fb9eaf607df5ea9ddfebfc57238add1d",url:"./js/SAO_Menu.js"},{revision:"533d980c0d50a0d0d7fe34c41a3e2100",url:"./js/search/algolia.js"},{revision:"acb62dcdf7e90930da3f6bf07349fc21",url:"./js/search/local-search.js"},{revision:"b3810513e04b13b2d18c6b779c883f85",url:"./js/tw_cn.js"},{revision:"4cfc631de0e5f6ff12b2833cac848f27",url:"./js/utils.js"},{revision:"91b7e2a555e0c80cac63cc0c490e69e8",url:"./js/weather.js"},{revision:"60663de55410a8e5a2d1f71904dd022a",url:"./jump.html"},{revision:"4a7e94ac7224adfce4b0572ca5c57fef",url:"./lib/hbe.js"},{revision:"aeb4bd0c39a424306ff42aeab9353ac6",url:"./link/index.html"},{revision:"d2385edbbbc34032b90a29762c72fbb1",url:"./manifest.json"},{revision:"f1fa014fce4e28facdb6d73d79157f23",url:"./other-page/dead-links/index.html"},{revision:"1ca13709698205721c1de92dc6a0813a",url:"./other-page/video/index.html"},{revision:"ed0c25d784c9b9ac16a40f52a8dba12f",url:"./other-page/ziyuan/index.html"},{revision:"8ad658b16d7544fc75e1a5746ffbc8e8",url:"./other/index.html"},{revision:"fe39a832bc03a96184ecf4fc296e4194",url:"./other/manifest.json"},{revision:"7baafd0051d82453aca8dd95c06f63f5",url:"./other/s/NTRss88/index.html"},{revision:"27695b3b09e409ff18159750515a755f",url:"./page/2/index.html"},{revision:"5b49ed5ff57035aaaf81420dc9594f2b",url:"./page/3/index.html"},{revision:"d8f0f09e70953efc318365075ab35997",url:"./pcre.html"},{revision:"6be07df90cb4f37d7b8f5f39eb6b13f4",url:"./random.html"},{revision:"d95b32f4b734734379e87f65f765b8f0",url:"./shuoshuo/index.html"},{revision:"c4ad332318c24c129b593e63c467a911",url:"./support.html"},{revision:"9fdaa73394710f65d8fa2a067d77bf8d",url:"./tags/2020/index.html"},{revision:"755aa1bb29ea2c921f59bc37acfcd586",url:"./tags/404-网站/index.html"},{revision:"a37480d3f42ad30f6c5ba6710f856fba",url:"./tags/android/index.html"},{revision:"a25b8d2a62c8bb5d2d1c06d4960d2ea9",url:"./tags/aplayer/index.html"},{revision:"9ab02785cedac13c9ed67c0d4027d9b7",url:"./tags/app/index.html"},{revision:"375a82ed426fbc5967bbaf6d1fb55395",url:"./tags/bilibili/index.html"},{revision:"5ee41377de17a80376d165cf6f410d6f",url:"./tags/CF/index.html"},{revision:"31c243e76630ed72c9500e09ae3202bd",url:"./tags/CFW/index.html"},{revision:"2e364aaea3661b669e0b13c3a26912ec",url:"./tags/Cloud-flare/index.html"},{revision:"1d9ec898855e4be1ce365b7883e814b2",url:"./tags/dao-voice/index.html"},{revision:"284115a253e544560efd3702f9a4cc97",url:"./tags/debian/index.html"},{revision:"2f60ba6e39546a69fb1a5c42d05a2517",url:"./tags/download/index.html"},{revision:"5466bd9abb4e6c7a988626aeaa6ccfa6",url:"./tags/FA/index.html"},{revision:"35fef20a87c344fbe5cc4dab64e22322",url:"./tags/fusionapp/index.html"},{revision:"1e8c9e885cd3aadd74174dc21c9aed76",url:"./tags/gh-page/index.html"},{revision:"217947109b7ef2208e89f8178c5fd80c",url:"./tags/git/index.html"},{revision:"860cb13ca92e76ed64893e2831a704f1",url:"./tags/gitee-page/index.html"},{revision:"f33beacbc3e9b86aecec5000355d1591",url:"./tags/gitee/index.html"},{revision:"4012a763a83b4e7b36e37bfab30265d3",url:"./tags/github-action/index.html"},{revision:"4db406826f044a9cc819221fbe515293",url:"./tags/github-page/index.html"},{revision:"7dcc0138d8aec59426dd7a298ff179d6",url:"./tags/github/index.html"},{revision:"09a404f2cadba9b4f7ad4f04d09f622a",url:"./tags/github/page/2/index.html"},{revision:"1983e1f483c12810634658bfb147eab2",url:"./tags/githubpage/index.html"},{revision:"ae3e4b901aaf81fbf94b8062ea8f0b91",url:"./tags/hello-world/index.html"},{revision:"fcd8db2bc22335ddb73e23e167c59480",url:"./tags/hexo/index.html"},{revision:"c273e19fadf889b04bf4f30ff6c350aa",url:"./tags/html/index.html"},{revision:"2ce8822ed82499960ac0a9c39cde0416",url:"./tags/iframe/index.html"},{revision:"902b328384f7716a48c8ee348917f52a",url:"./tags/index.html"},{revision:"3aee6215104bcc37dfddd04c9c628fd3",url:"./tags/java/index.html"},{revision:"d94189483eb9bbeb06b20af53b38e13d",url:"./tags/linux/index.html"},{revision:"7326b46310b9ad5792a6063e9289183a",url:"./tags/liunx/index.html"},{revision:"1cb5edeaa8309ac5217515e2be0861d0",url:"./tags/markdown/index.html"},{revision:"f739365f83c536d98d0d7b543369cb7a",url:"./tags/md/index.html"},{revision:"888f94802d2745e49f32da30d1f5f1e7",url:"./tags/md编辑器/index.html"},{revision:"ff8d478d709443341a8179a50b81974f",url:"./tags/minecraft-JE/index.html"},{revision:"ea533e23bcd0641bbc057f3d145c06e2",url:"./tags/minecraft/index.html"},{revision:"e1e2db6a0a77e2f7e0d9e6097a321653",url:"./tags/minecraftJE/index.html"},{revision:"157b70aeb041100c0407a959e5aa9058",url:"./tags/node-js/index.html"},{revision:"df29dcb40284ec54327e78c25b1d51b4",url:"./tags/node/index.html"},{revision:"518bbc31023bb07684cc08abba1c209f",url:"./tags/php/index.html"},{revision:"e97894ad400b0e1bb7d956032e160a2b",url:"./tags/picgo/index.html"},{revision:"37ff13bd9ec16ad1ff0774aa613a2d62",url:"./tags/python/index.html"},{revision:"3a7d6be1a89fadd725501f2a007cc0d0",url:"./tags/ssh/index.html"},{revision:"04853a32980773523f1be0f4bcdcb105",url:"./tags/termux/index.html"},{revision:"a14841d427c41ce3486a1d7ea3b99714",url:"./tags/undertale/index.html"},{revision:"ec3b1cb2582282eba807de38f48a1989",url:"./tags/ut/index.html"},{revision:"60b06e498a439724396df0fe81b57328",url:"./tags/vercel/index.html"},{revision:"f7f7d10f869d450e82b526243037d035",url:"./tags/website/index.html"},{revision:"7cb228612e1ba9368d834483aac4d17c",url:"./tags/win10安装/index.html"},{revision:"98dce53a12666d11e767207076ffa4f4",url:"./tags/Windows/index.html"},{revision:"fb2caf0e4b9706535509833531d03ee5",url:"./tags/Windows10/index.html"},{revision:"e869af63549fcd50a0a9867c74222214",url:"./tags/Windows11/index.html"},{revision:"727728b3b12ad34fdd51a1ee8b6585a5",url:"./tags/wmz-blog/index.html"},{revision:"00fc11d639e28097d22fdd1a87308ac6",url:"./tags/一周年/index.html"},{revision:"cea41bb8e56e28ba54a0f6a979f034ce",url:"./tags/传说之下/index.html"},{revision:"bc44decb3ad3437a1e6c953906070141",url:"./tags/免翻墙/index.html"},{revision:"9b04a9e3e09a58fb6c45e06b345f627e",url:"./tags/动态网页/index.html"},{revision:"d66a3d1475884dbde7b73832ce22aae5",url:"./tags/博客/index.html"},{revision:"aadaadae28907d56c0e19da6708b5733",url:"./tags/回顾/index.html"},{revision:"ee7f8b3196a4ff6bc1c2a665553da9c8",url:"./tags/图床/index.html"},{revision:"f824081e2c9610ba267f4ba0e725cb63",url:"./tags/在线聊天/index.html"},{revision:"3db21dcf12f60688b5eaada0d5a69548",url:"./tags/安装/index.html"},{revision:"466e412a6cc251b3023bd0ce989bd497",url:"./tags/工具/index.html"},{revision:"c917c99ee18a8b17fd387e9021301aee",url:"./tags/我的世界/index.html"},{revision:"2c6bc767cfba488eb1e227f36626eecc",url:"./tags/折腾/index.html"},{revision:"10bf10d8a1c5e977bbf3a3a1509ba9b3",url:"./tags/搭建/index.html"},{revision:"7f80e3f805632f66c0e7c03481e56482",url:"./tags/教程/index.html"},{revision:"2c360b78eadaef55be798f72a0e68d4a",url:"./tags/日记/index.html"},{revision:"af59e2a29c805946fcbf2625c9cb20b5",url:"./tags/更换/index.html"},{revision:"19e6b735adff292b587a53f467ecf8fb",url:"./tags/更新/index.html"},{revision:"fda6848da171109ea66efba5071b7762",url:"./tags/更新了/index.html"},{revision:"55d3abae47319fbff47c81f9e34a2fc9",url:"./tags/服务器/index.html"},{revision:"d493581a9d6f1c8ca8ae3d2fa3da7850",url:"./tags/测试/index.html"},{revision:"6225a8d0761ae163dcdcbd76147a79e2",url:"./tags/百度统计/index.html"},{revision:"26b0c2f0be92483611853a97664e1350",url:"./tags/看法/index.html"},{revision:"a7820731a54208cdcaa65ad0b61c2c90",url:"./tags/笔记/index.html"},{revision:"b07b0a615b16fc4163f0f58862858456",url:"./tags/系统安装/index.html"},{revision:"2fc8f851214afb4866ccd562c89a7f08",url:"./tags/网站/index.html"},{revision:"a218738a336a7a22895313f1082b8a9b",url:"./tags/袁隆平/index.html"},{revision:"afcc7610b9b6ca9d15dd7674a1e8ac95",url:"./tags/迷你世界/index.html"},{revision:"11fea25b21e639d1babc1631a1ae1c1b",url:"./tags/通知/index.html"},{revision:"d2098103ecab7ec0991cbaf7c2e791e2",url:"./tags/邮箱/index.html"},{revision:"1dd98d218342f4a922580b66b1de4f08",url:"./tags/随笔/index.html"},{revision:"ca0b729da79f62f0df4ba80c90883334",url:"./twikoo.json"},{revision:"90f16119060b8e486c870d6b94f850d8",url:"./update/index.html"},{revision:"2c21fc178283614c4f4fce9bc6d02b30",url:"./wsimg/funnytitle.js"},{revision:"151ad43939a0d1a895c56531a7db62c0",url:"./wsimg/index-1.js"},{revision:"894ad29814051e75a07b165622548b4b",url:"./wsimg/index1.css"},{revision:"d34c413619f989593ec6842ebdd62e1b",url:"./wsimg/README.html"},{revision:"ef6d498e54f639c8ee95928ea9904bc7",url:"./y-re.html"}]),workbox.precaching.cleanupOutdatedCaches(),workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,new workbox.strategies.CacheFirst({cacheName:"images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/\.(?:eot|ttf|woff|woff2)$/,new workbox.strategies.CacheFirst({cacheName:"fonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/cdn\.jsdelivr\.net/,new workbox.strategies.CacheFirst({cacheName:"static-libs",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.routing.registerRoute(/^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,new workbox.strategies.CacheFirst({cacheName:"external-images",plugins:[new workbox.expiration.ExpirationPlugin({maxEntries:1e3,maxAgeSeconds:2592e3}),new workbox.cacheableResponse.CacheableResponsePlugin({statuses:[0,200]})]})),workbox.googleAnalytics.initialize();