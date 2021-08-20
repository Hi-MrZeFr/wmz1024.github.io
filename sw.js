const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"895622f7d67cd000ad5c10e92b3565f7","url":"./11f1a2fc.html"},{"revision":"63792a3b8681a485898dd5b28edf7be0","url":"./1f7e3876.html"},{"revision":"531110f4c99eefd30840c9b978829166","url":"./2b244555.html"},{"revision":"c9e87c6881e8868a7dff99574b2e6e79","url":"./2c7854e6.html"},{"revision":"60d0ad61328931f3e74853b5109af7e1","url":"./2ee2518d.html"},{"revision":"460e16745d710cc3df5387f519dcbd7c","url":"./30422b3f.html"},{"revision":"c3c691806cc4550d0c108de484b9727c","url":"./3494bf09.html"},{"revision":"e2b58ec29f8bfdf0f4e2f44fb780b338","url":"./3e4cf0e1.html"},{"revision":"bf8937779c20c5da6648be21cba89bd3","url":"./404.html"},{"revision":"1a0f7085ce7cebb3bc9e7acc1b0f10e7","url":"./4283e7c2.html"},{"revision":"61d83cf180406f09d8fe04902e42635f","url":"./47008bfe.html"},{"revision":"a743bd55696396e758e713760875e3fb","url":"./496761e5.html"},{"revision":"6cde8883574273ac890e2dc3b86e82c6","url":"./49ab854f.html"},{"revision":"5f3260ee6f65646285a86710d9f41aa9","url":"./4a17b156.html"},{"revision":"e3f2b97a8495a579d0652989a0ef1648","url":"./51f11683.html"},{"revision":"a6253c9ca721847392b4a7091eadff7d","url":"./5b2b3473.html"},{"revision":"56e7c7117f9ae9ef9502fcf9cf9561b2","url":"./6057642a.html"},{"revision":"daa62ae5555a0a08d18157309f743941","url":"./60816787.html"},{"revision":"7baf85cf7667fb186770cffd59cca8fb","url":"./68083ed.html"},{"revision":"54c382183ea0717a027366b57bb8b732","url":"./71e2d2d3.html"},{"revision":"925491dd87b154045d287356e6173afe","url":"./748a29a4.html"},{"revision":"c836014364019192dde927ffb7a75e6b","url":"./7bc26341.html"},{"revision":"a0013de9ea96913114850da143375397","url":"./7cee40bf.html"},{"revision":"3346d2c663f5e753ca4115c4624eb8bd","url":"./836982c.html"},{"revision":"f9f0da9322e4c50905bb2eeddcaaefd0","url":"./83d82948.html"},{"revision":"6b763a0bd03509f6f4305919cfbdd7c0","url":"./87e1c0bc.html"},{"revision":"30c4daea2e79d155e5d5e10ee510fbaa","url":"./8856403.html"},{"revision":"746ef249fbbba49a07532280323fe82a","url":"./8bc291e6.html"},{"revision":"d7880641d565466fe2e092717a2109e0","url":"./8d39085b.html"},{"revision":"7b9f2e1cffc690db02303b5ea751a058","url":"./9341b494.html"},{"revision":"5b94ec92f090e0d680eb90cb4fadee2b","url":"./96ccccce.html"},{"revision":"be9df0aa40bea689953ea920a225ce59","url":"./98d114e8.html"},{"revision":"f01809e4c2e11e91b042f3b1b0536d7c","url":"./a1be303c.html"},{"revision":"ea8f034f2aab53b39aa9b81581e2e70a","url":"./a65bc6b8.html"},{"revision":"656d65dad9352e27877f4897e2395a8d","url":"./a81556f1.html"},{"revision":"9a246a31d622aab93157f55cde9f911c","url":"./a8acdd67.html"},{"revision":"fbe8cb4df3294e0d78e236d1cdad12cc","url":"./aa96c821.html"},{"revision":"61621675fc8e236e4ebc151ab1d2bdd0","url":"./ab1d37b.html"},{"revision":"9936f57ef55cfee5d732394e84789085","url":"./about/index.html"},{"revision":"bd05b7c46089c7778d12a2a83d0daefe","url":"./aeb2d36.html"},{"revision":"dd2f2be54e0be5c9388db4eb5c20db35","url":"./af886b34.html"},{"revision":"512b957a855616e900e553bdaa2a13c8","url":"./archives/2020/08/index.html"},{"revision":"8a838319843baa1e2fbfa3efaf4ef078","url":"./archives/2020/08/page/2/index.html"},{"revision":"80992cdeea9ecfb6f1e3d99a2a388ab8","url":"./archives/2020/08/page/3/index.html"},{"revision":"d051f2d24d41ce0cea4a967e36fa84d3","url":"./archives/2020/09/index.html"},{"revision":"67077ce9892c25f92bb34b15fbb7dd30","url":"./archives/2020/09/page/2/index.html"},{"revision":"fa3c181fd91b630f3764e345764caf83","url":"./archives/2020/10/index.html"},{"revision":"dd7f142fe0594945c539fe70c40ae5f2","url":"./archives/2020/11/index.html"},{"revision":"e4e21863dbb3aa711751adaffb025de2","url":"./archives/2020/index.html"},{"revision":"3cce4b692a5e3d779c0f2aee3ecc4764","url":"./archives/2020/page/2/index.html"},{"revision":"53af1f0fc5d951c2e76d65487fa1a676","url":"./archives/2020/page/3/index.html"},{"revision":"00d32e4c7076964304e6aedfb5c6ccf5","url":"./archives/2020/page/4/index.html"},{"revision":"ac3a87f8afc17cb5df51bbb5ccbcd6f9","url":"./archives/2021/02/index.html"},{"revision":"e4ce4f4452e98f5c97ef4a561972a519","url":"./archives/2021/03/index.html"},{"revision":"a990cf4ad28dcfa35468f693b6529793","url":"./archives/2021/04/index.html"},{"revision":"d16e801b4fa49bd2efe12fd01ab66993","url":"./archives/2021/05/index.html"},{"revision":"229d69cb61ebb7ad7a07585f068bab8e","url":"./archives/2021/06/index.html"},{"revision":"978a550991639789b2cb441ca53858a8","url":"./archives/2021/07/index.html"},{"revision":"e4e228c8cfabff74a2aa4bc39e1e69fe","url":"./archives/2021/08/index.html"},{"revision":"31fa228b120d8bee5a5b19434c2993fe","url":"./archives/2021/index.html"},{"revision":"a2a6317f0e5bbda8faef3e731193c0a2","url":"./archives/2021/page/2/index.html"},{"revision":"7bd53e81b9e04081116f2993909fdbd0","url":"./archives/2021/page/3/index.html"},{"revision":"ce9b65928525fcca9903785ca0b7f9db","url":"./archives/index.html"},{"revision":"6a16ec4206207f0d6d8dd01405a1c494","url":"./archives/page/2/index.html"},{"revision":"f169ee0e52c9853fed5ea87ee2ae4736","url":"./archives/page/3/index.html"},{"revision":"c24184d46351df75809237891f65c9ef","url":"./archives/page/4/index.html"},{"revision":"4620ade8e6aaef5e61f34b1797a04a79","url":"./archives/page/5/index.html"},{"revision":"084f130c27f9a6d56795d88faa1d336a","url":"./archives/page/6/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"5e4311d508d6d3443d4cd4cc341e72fe","url":"./atom.xml"},{"revision":"01f65aa953778472d9d3f8757cc6cb38","url":"./b28868d6.html"},{"revision":"81b63208f627ea16944a2067d6e5db9d","url":"./baidusitemap.xml"},{"revision":"4800caa0a3cfcd66d75a7fc5dfdcdbbd","url":"./bangumis/index.html"},{"revision":"26d119c20bd9e8d77d26cb2292a3af35","url":"./bf3a65a4.html"},{"revision":"40ca4b7de4b27a807ad9c54ec1b556e7","url":"./c-re.html"},{"revision":"d5f1a1c54c6dd927266e0662589b7c37","url":"./c1ee638c.html"},{"revision":"e079e996893643d794188bdcfdadde1e","url":"./c3119b08.html"},{"revision":"0a43e5ae7d5ff4dd037563b218793263","url":"./c48ef0f6.html"},{"revision":"ed922bc13432e6088b9e26b3d55e6d8b","url":"./c53c84e7.html"},{"revision":"c7f10aa7373edc9e969591113db94ff1","url":"./c6c9c4db.html"},{"revision":"212a3a6201408434cc8bd2c7b2c2829b","url":"./categories/index.html"},{"revision":"19779c9caf9a8b6feb3526c6624a0806","url":"./categories/教程-html/index.html"},{"revision":"3490af1ef4ea675c1a694b41219aed33","url":"./categories/文章/index.html"},{"revision":"73892a0ffb57b9be1a11d6991abecdd5","url":"./categories/文章/page/2/index.html"},{"revision":"adfd677799a492efc0a87bcefc07ed51","url":"./categories/文章/page/3/index.html"},{"revision":"a1bbebbfd87b532485a58413efd17e0b","url":"./categories/文章/page/4/index.html"},{"revision":"3e2dc9aa6eaed55ae9c440f468ec8d26","url":"./categories/文章/博客周年/index.html"},{"revision":"93094c281e6c399623e5ffbca88d52b0","url":"./categories/文章/后端/index.html"},{"revision":"7ad54637019ec998b9c4b47b9d583a50","url":"./categories/文章/笔记/index.html"},{"revision":"cc9f90b2fe4ede95ead5d2ab7d47cabe","url":"./categories/文章/续集/index.html"},{"revision":"c7b24c72e8fa5b509597c0cc1cb683eb","url":"./categories/日记/index.html"},{"revision":"ce555cf857e74f8eca4439f5dae850f9","url":"./categories/通知/index.html"},{"revision":"c320efb5750db297db967f282ca02a54","url":"./categories/通知/page/2/index.html"},{"revision":"738b1d0f720b5d0caf137dfd12b4eaba","url":"./cd843bca.html"},{"revision":"8755f5fc3bcb52bc059b91729870a97c","url":"./codemao/join.html"},{"revision":"fe8e559379edae454bda3c26596c9c69","url":"./comments/index.html"},{"revision":"a9a3712ca10c5d65b7af395d9dc53289","url":"./css/bilibiliBanner.css"},{"revision":"fb15fb1adb17841704902aa9c227f729","url":"./css/bilicard.css"},{"revision":"808bbddc4f4c56aee97a7af07f1f364f","url":"./css/coin.css"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"2f5f8a44dd35f9041ddbfc39195706f7","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"27bace748f3a6ebab7697cc3b8ac46fc","url":"./d28a09fd.html"},{"revision":"9526c088681507acfd850e83529d141e","url":"./d2bd8f46.html"},{"revision":"90e603adfd8771d6c30484bf5d00e1b4","url":"./d46f6783.html"},{"revision":"5bfc3bbc95eccb75c55a14fe5047f631","url":"./da033cd3.html"},{"revision":"51bc9ea857d05050275cafff49fd0cd4","url":"./db5f4c9.html"},{"revision":"7440ea0a223a053b709adc05ffabda37","url":"./dfd2f59a.html"},{"revision":"c6f075f02bcb35c7f35d6e861289f7bf","url":"./e4d07d47.html"},{"revision":"e8dec31c7027ac76d518fb00d7d61964","url":"./ede49718.html"},{"revision":"8a6f9954e1932fdfa500480ecc391747","url":"./ee30bc12.html"},{"revision":"e922450956fee5af79e928c0795b6c38","url":"./f053c80.html"},{"revision":"0189aec65cbb9f8ac37d1a92549ffba3","url":"./f6485125.html"},{"revision":"7d742518af2e6c998c6da656992c69c1","url":"./fa1bfef3.html"},{"revision":"2c0a737d399624e60c8128cd41626f7c","url":"./fcircle/index.html"},{"revision":"3ef85615efe3d86060ec95a6c3fbd1ce","url":"./fe275fd0.html"},{"revision":"d42f7e8f3c5a1d49c374916e3d588124","url":"./from.html"},{"revision":"7353f8c310fea26f227f4a8ba42be7f6","url":"./index.html"},{"revision":"3977461395620c67690202f14bbc6058","url":"./js/bilibili-banner.js"},{"revision":"db0ef6fc56befa79cef5e478f9138324","url":"./js/coin.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"c56713403fe9375a51d3a0e660e80676","url":"./js/runtime.js"},{"revision":"fb9eaf607df5ea9ddfebfc57238add1d","url":"./js/SAO_Menu.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"60663de55410a8e5a2d1f71904dd022a","url":"./jump.html"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"4fe5d5f7390de544e3b7f81cba39b26c","url":"./link/index.html"},{"revision":"49d5b796b0a24b2e6a871aacdd457f1f","url":"./manifest.json"},{"revision":"a7b66f371b809ae1c1ffa206bc3e3aa7","url":"./other-page/dead-links/index.html"},{"revision":"4884116089b2e2fecd1576469d693b40","url":"./other-page/video/index.html"},{"revision":"02f1dcc7ee36357a91d2a95012d35145","url":"./other-page/ziyuan/index.html"},{"revision":"9fcc9b6eebf403871d636c2a0c2e9e32","url":"./other/index.html"},{"revision":"0a8dea0cbd2ba552543efad6d47d3926","url":"./other/s/NTRss88/index.html"},{"revision":"9c403bd1fae69447291ba6b02977f8d0","url":"./page/2/index.html"},{"revision":"3a394ed9f00e4d8f6bd642d34d880fb6","url":"./page/3/index.html"},{"revision":"e641a7f467a99486fef27a4aab6f440f","url":"./page/4/index.html"},{"revision":"b6555348fde6f88216766433a3e04f4a","url":"./page/5/index.html"},{"revision":"f616b8aaf01dee4a165430654060f36a","url":"./page/6/index.html"},{"revision":"d8f0f09e70953efc318365075ab35997","url":"./pcre.html"},{"revision":"cc661cf3c014098196b477b70611e28e","url":"./random.html"},{"revision":"07cf859a0023a9d7a5d2d93c4e42c26e","url":"./search.xml"},{"revision":"8207ba5a7c370ed564411140bb8fd4db","url":"./service-worker.js"},{"revision":"8e8fa63c4716f78cb1d46a1b62d25548","url":"./shuoshuo/index.html"},{"revision":"31535dcda9d56d32e67dcce441184226","url":"./sitemap.xml"},{"revision":"c4ad332318c24c129b593e63c467a911","url":"./support.html"},{"revision":"75cc4da71d349aa20913c7fd659de92b","url":"./tags/2020/index.html"},{"revision":"9764e21b5c6f99a22e2cbb87abc8d3d5","url":"./tags/404-网站/index.html"},{"revision":"a0cbe6654754995abb8c405894c3c7fc","url":"./tags/android/index.html"},{"revision":"ac2ec428e860591194b8b2b68a95a6df","url":"./tags/aplayer/index.html"},{"revision":"273def1b2b91a649002ddc5730b7d0c6","url":"./tags/app/index.html"},{"revision":"aa1b8720231ed07501e2a7da1b8e085e","url":"./tags/bilibili/index.html"},{"revision":"bd4bfcfc7e7af8500f1b258c93806beb","url":"./tags/CF/index.html"},{"revision":"f1a8deba5b526cd3435b2ac1daf502af","url":"./tags/CFW/index.html"},{"revision":"c6c15dc2ce3436708873a989bf9d64bb","url":"./tags/Cloud-flare/index.html"},{"revision":"8bef416ff6325829f09902160889ca5c","url":"./tags/dao-voice/index.html"},{"revision":"446dfb23d8bab5e94fd1a551dabc03e0","url":"./tags/debian/index.html"},{"revision":"c90e3e55fc9bf5168bc76e1b007247a5","url":"./tags/download/index.html"},{"revision":"1293f85520532821940a8dd8ef478a10","url":"./tags/FA/index.html"},{"revision":"651f3330ac6c6aa78a8c30cde512c31f","url":"./tags/fusionapp/index.html"},{"revision":"7d486cd1eba7a89af5ab257d1651f584","url":"./tags/gh-page/index.html"},{"revision":"5e27e03bb17b3ec5204f5694584f14be","url":"./tags/git/index.html"},{"revision":"25aa08ea4a7414779ff364990055b5f5","url":"./tags/gitee-page/index.html"},{"revision":"0b2377c0d7344f959d1df3dd59c2795e","url":"./tags/gitee/index.html"},{"revision":"4a5fee08baa9f57ef0739450d2bb7ddb","url":"./tags/github-action/index.html"},{"revision":"9be5834f771c8cb22ee3849718916a27","url":"./tags/github-page/index.html"},{"revision":"327fb9713cd0dabb487f82b65247a64d","url":"./tags/github/index.html"},{"revision":"055cb9f6fdcef976c45760c56d60dd35","url":"./tags/github/page/2/index.html"},{"revision":"7aff8f6b9ae65dbe614a71b92cebf884","url":"./tags/githubpage/index.html"},{"revision":"16911518c7d358cf6967086477a01d4e","url":"./tags/hello-world/index.html"},{"revision":"de7808ad00d783b3f4d23ff3b781aa74","url":"./tags/hexo/index.html"},{"revision":"4edfd687e30a7165bb6a4f5fa0a5c562","url":"./tags/html/index.html"},{"revision":"24bee198bd03cb92b34609f1ca99c72e","url":"./tags/iframe/index.html"},{"revision":"a48dc61a48093eeec2e073f2717f0c2c","url":"./tags/index.html"},{"revision":"0a48dea02278a2a506a6ea7c00ffaf64","url":"./tags/java/index.html"},{"revision":"c82d9d4cfc5c963b3627bc65efd135cd","url":"./tags/linux/index.html"},{"revision":"bc39229984c1dca7d70941ddc023bd6c","url":"./tags/liunx/index.html"},{"revision":"e6fb2f515c3b4b59729a40422f0a6ca6","url":"./tags/markdown/index.html"},{"revision":"e98da70096450a22d7468da846ea275d","url":"./tags/md/index.html"},{"revision":"51f3b42f064e23906799b538e2fa73e5","url":"./tags/md编辑器/index.html"},{"revision":"4d23c5d234a704b59c1ea7b3f2d6e607","url":"./tags/minecraft-JE/index.html"},{"revision":"8388232340e34a74aa6e5523b14053a2","url":"./tags/minecraft/index.html"},{"revision":"a31d17d895fb8976d45b0d2a897969d7","url":"./tags/minecraftJE/index.html"},{"revision":"a7dabdeefd223dd3734a03d98932f10a","url":"./tags/node-js/index.html"},{"revision":"44b383112c6cfc2a2fddc6f280c2d1d4","url":"./tags/node/index.html"},{"revision":"439374da5593afceebd9e8a2445d9e31","url":"./tags/php/index.html"},{"revision":"e98ed08643c10327e5e92acdf24e2d20","url":"./tags/picgo/index.html"},{"revision":"ada9d06d15f8905370796da3b3489f15","url":"./tags/python/index.html"},{"revision":"27c6ff9ea25b809a5cc86337e734029a","url":"./tags/ssh/index.html"},{"revision":"6c503ba6e3dc4af41c61e3dfea7e351a","url":"./tags/termux/index.html"},{"revision":"6a44c497c8f7ea32896730e154d65ffd","url":"./tags/undertale/index.html"},{"revision":"a7d71a75bf0043013622c42f0125f032","url":"./tags/ut/index.html"},{"revision":"4d2f2e0c77cbf82d53a9f9212bb89aa1","url":"./tags/vercel/index.html"},{"revision":"fc96f744b88816618e90a3f61b74dd66","url":"./tags/website/index.html"},{"revision":"c39476ca69f62e61383657c0dc96f767","url":"./tags/win10安装/index.html"},{"revision":"f4fbbbae4335dd6ddc923ead4ac4a438","url":"./tags/Windows/index.html"},{"revision":"eba2e38bc54ebe50921acf481d8dc72c","url":"./tags/Windows10/index.html"},{"revision":"9a29b7e5ac4af9affc27459d8cf967cb","url":"./tags/wmz-blog/index.html"},{"revision":"a541c1d2818050c7446871e26d53427e","url":"./tags/一周年/index.html"},{"revision":"37b955c77d4443ad3227394f3a94d2e1","url":"./tags/传说之下/index.html"},{"revision":"c18a6aada247081799d4b37a66dd0907","url":"./tags/免翻墙/index.html"},{"revision":"da71b2139e0b46fce9720f585f02c3bb","url":"./tags/动态网页/index.html"},{"revision":"52cee040cab79484dc78b1c6cd76251d","url":"./tags/博客/index.html"},{"revision":"ffcf1c0574723c2a93bd722b8efa424a","url":"./tags/回顾/index.html"},{"revision":"81aba30c5282ebca4c3881e65acf5064","url":"./tags/图床/index.html"},{"revision":"e302cc64bc9180cce489d49b24c763a9","url":"./tags/在线聊天/index.html"},{"revision":"6873a29de9781dfe1f7027894da71388","url":"./tags/安装/index.html"},{"revision":"9af9878f3eedba6a06e9ecda3ebf64e7","url":"./tags/工具/index.html"},{"revision":"061f9786708eb20daff77ac0ef663bb5","url":"./tags/我的世界/index.html"},{"revision":"2f6ad205d3e45954ebe1a9f05fe3a160","url":"./tags/折腾/index.html"},{"revision":"805ec0ca9fffff1c191cdafa810e72b4","url":"./tags/搭建/index.html"},{"revision":"90afd9aa705fd6a8bcea39aa5a77dfcf","url":"./tags/教程/index.html"},{"revision":"536484d4d644746a970d6539cd6e47ce","url":"./tags/日记/index.html"},{"revision":"b713add2cd69a7ea61017b9694a11e8e","url":"./tags/更换/index.html"},{"revision":"cf71eb785c521586ea44de654a0e8a27","url":"./tags/更新/index.html"},{"revision":"a7f4b541f6604c662498c791a862a1a8","url":"./tags/更新了/index.html"},{"revision":"6444e8966573ba731fc8f1fd4d772c17","url":"./tags/服务器/index.html"},{"revision":"b815bc589941207486569722e7debeb7","url":"./tags/测试/index.html"},{"revision":"b73ef9e9e86d268f90de9bab89db0459","url":"./tags/百度统计/index.html"},{"revision":"751a632db780e4ee25f9cdb83fa5bde5","url":"./tags/看法/index.html"},{"revision":"cba19509453b5465b6362fe30a289491","url":"./tags/笔记/index.html"},{"revision":"e9152e5a4ddca765ae57d80c654cd1bb","url":"./tags/系统安装/index.html"},{"revision":"ba4b207d061283fbb40f41173d8fa926","url":"./tags/袁隆平/index.html"},{"revision":"f973fac5af6d9b752e3c528fb35191ab","url":"./tags/迷你世界/index.html"},{"revision":"d62e31f615db7ce5f266232f0a815b4a","url":"./tags/通知/index.html"},{"revision":"747c3206b6f766a52c2a115df0088782","url":"./tags/邮箱/index.html"},{"revision":"c4f944d47404d8a60507861bce14b9dc","url":"./tags/随笔/index.html"},{"revision":"7c0ca56070cb70bb7df208cde76b5666","url":"./update/index.html"},{"revision":"0497fcadf6b83c75ec4df94ab5067d20","url":"./workbox-f7715658.js"},{"revision":"2cc326181fe44d1db9004867e62cd97f","url":"./wsimg/browserconfig.xml"},{"revision":"9eb28ac4533a4f7d58e6d4490932ea3c","url":"./wsimg/index-1.js"},{"revision":"894ad29814051e75a07b165622548b4b","url":"./wsimg/index1.css"},{"revision":"e4dafd5b0c3c0764e679a297087a418f","url":"./wsimg/README.html"},{"revision":"ef6d498e54f639c8ee95928ea9904bc7","url":"./y-re.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 可选内容 start 都选可能造成缓存过多 酌情保留。
// 图片资源
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 字体文件
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// 谷歌字体
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// jsdelivr的CDN资源
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);
// 可选内容 end 都选可能造成缓存过多 酌情保留。
workbox.googleAnalytics.initialize();