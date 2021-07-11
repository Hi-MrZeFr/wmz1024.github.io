const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"c19a3fd0b4a10608144c639ccf89bfb1","url":"./11f1a2fc.html"},{"revision":"b646f0cc810e4230f4735eccfdb1ed01","url":"./1f7e3876.html"},{"revision":"679e88fe297c96c8383fda3ea9077c98","url":"./2b244555.html"},{"revision":"0f00ae2236eb0923ba1c8452e84c7bef","url":"./2c7854e6.html"},{"revision":"f0e458c3d3478dae8d7fd255a2b92e7b","url":"./2ee2518d.html"},{"revision":"780a9624a8d7e74cc631330f750ba2df","url":"./30422b3f.html"},{"revision":"817e6596978c83a2b459f9bb61438e40","url":"./3494bf09.html"},{"revision":"681f86ba7d066243c56d0bad17ba4bd2","url":"./3e4cf0e1.html"},{"revision":"4b53a13833a9cf8e9ebd0199b225e61c","url":"./404.html"},{"revision":"c1934427cdaf6a563f507c522f6d0d12","url":"./4283e7c2.html"},{"revision":"a4f83bd30eb83e5f9ef05637834ee154","url":"./47008bfe.html"},{"revision":"24e22cb9f8f197644bfc03911538efc3","url":"./496761e5.html"},{"revision":"0d692588652aa3ef35ddb9c5b47ee29d","url":"./49ab854f.html"},{"revision":"7ea0ceac73d791d762bb07f82c7a9387","url":"./4a17b156.html"},{"revision":"7f3272bf9024818403f3008325075951","url":"./51f11683.html"},{"revision":"f9d1d2a61c0fb5bf49b79e19243e2722","url":"./6057642a.html"},{"revision":"97f78e85a5b06502572de18096e5014b","url":"./60816787.html"},{"revision":"6d6504c95bf1aad9d051db9e75fe1fd9","url":"./68083ed.html"},{"revision":"59f8b2e41eb4e36b9bb6a75a0d31adfc","url":"./71e2d2d3.html"},{"revision":"13bf70edfc84b4582b8dffea2f7801c9","url":"./748a29a4.html"},{"revision":"45699d61ad1c597a53f34e0b7f8127ca","url":"./7bc26341.html"},{"revision":"b4bb5462d43f1fb0961d77826d4d4e86","url":"./7cee40bf.html"},{"revision":"9bf5ba8d9478a25accc0c18127080709","url":"./836982c.html"},{"revision":"a7df888aa7fe00af8150d2e864300918","url":"./83d82948.html"},{"revision":"7ef679ad89635af379f41a9ba7d4009d","url":"./8856403.html"},{"revision":"516e22140fa592c452fdfd38493127d1","url":"./8bc291e6.html"},{"revision":"1f0315d5cc74011f641bdffe9541fb0c","url":"./8d39085b.html"},{"revision":"245d49f249bbce42a7d10940f77cb34f","url":"./9341b494.html"},{"revision":"0206a21743a6d8ce79fe82ec3efaff05","url":"./96ccccce.html"},{"revision":"8b7e870742839e87b349e115276c9f6e","url":"./98d114e8.html"},{"revision":"b68ff78dda087149c717607066bd7146","url":"./a1be303c.html"},{"revision":"3586bea559cad3f5ec91b44a7c81a7c9","url":"./a65bc6b8.html"},{"revision":"f7e4cd1539e104daee629c8280041cf4","url":"./a81556f1.html"},{"revision":"cbc5fceddb1f842b1f4b81f92c85f7b7","url":"./a8acdd67.html"},{"revision":"1d89457046af553e3074e93dc6aafcfd","url":"./aa96c821.html"},{"revision":"067fc91f2951034a36d430b15d4548c0","url":"./ab1d37b.html"},{"revision":"863464d75edb795e9b63991bfedad85c","url":"./about/index.html"},{"revision":"4d698042c75f6379f1d61d33e3e48407","url":"./aeb2d36.html"},{"revision":"b70d65ca182a6a45316b7e3f7756e72b","url":"./af886b34.html"},{"revision":"157ac76766343724803af5a9a5d9ae45","url":"./archives/2020/08/index.html"},{"revision":"ee3d73c54277ef8d5580e6b59c47f446","url":"./archives/2020/08/page/2/index.html"},{"revision":"7a1613922c2ee521f3708cb1dc340635","url":"./archives/2020/08/page/3/index.html"},{"revision":"08963354ffffb738f9ad1af8cd0c324f","url":"./archives/2020/09/index.html"},{"revision":"8d00bf5753e8b61304603cff5b0a0cd7","url":"./archives/2020/09/page/2/index.html"},{"revision":"6e52c1c2db9f722aaaa60897f1122a07","url":"./archives/2020/10/index.html"},{"revision":"c0e1344e29c9748d048b2bba106e64bf","url":"./archives/2020/11/index.html"},{"revision":"84ef69a170f7a78aa069466d6567a19c","url":"./archives/2020/index.html"},{"revision":"3e5d8fd04796ebe9af1bf3eccecefcac","url":"./archives/2020/page/2/index.html"},{"revision":"1dc995091562a20cda4de133e7e98ce6","url":"./archives/2020/page/3/index.html"},{"revision":"b314591a28a7736264131c0c6ceafd22","url":"./archives/2020/page/4/index.html"},{"revision":"b6eb32b93fef520d9a170b90df1a82fd","url":"./archives/2021/02/index.html"},{"revision":"10806b232adee65fce63181f60b50de8","url":"./archives/2021/03/index.html"},{"revision":"78b2e1ac1c798a9d543a96cfd7436d2d","url":"./archives/2021/04/index.html"},{"revision":"38b82c4a87c678340e690c7e97255419","url":"./archives/2021/05/index.html"},{"revision":"e8fbd86ce89e0f21fdf9eab395f9612a","url":"./archives/2021/06/index.html"},{"revision":"ae1895c6db8fd199f74bd34e7b3174ff","url":"./archives/2021/index.html"},{"revision":"cd3af950f02cca27bafed8346b6d86ef","url":"./archives/2021/page/2/index.html"},{"revision":"8fc5eae49663dd4fe4a41713c1edeec4","url":"./archives/index.html"},{"revision":"fb140e2ac8f34f50de1f448c45508711","url":"./archives/page/2/index.html"},{"revision":"faa23d92d1e78eb24380c8c0431b90d9","url":"./archives/page/3/index.html"},{"revision":"983a60c9b54ef483d17dc97f48fe1891","url":"./archives/page/4/index.html"},{"revision":"2d050f7543f2d35354ee4e0251438eb8","url":"./archives/page/5/index.html"},{"revision":"44e41a0efe2c74894c2297d3b578b21d","url":"./archives/page/6/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"842aba17a5a7ce0018bf09be757d4e82","url":"./atom.xml"},{"revision":"d8b47e5bc40db0a903ebdf881abb8462","url":"./b28868d6.html"},{"revision":"8f3f289ba7bd9913273f41035b2d2cef","url":"./baidusitemap.xml"},{"revision":"3f12e7f3cf8d6dc6f7db6e08032254b0","url":"./bangumis/index.html"},{"revision":"a5a916a65b05c1c37c3f8383466c7902","url":"./bf3a65a4.html"},{"revision":"40ca4b7de4b27a807ad9c54ec1b556e7","url":"./c-re.html"},{"revision":"a2965a381a3fe48e32b27d7bac181a8f","url":"./c1ee638c.html"},{"revision":"38eeec6abdf50d1643cda72c38c64e17","url":"./c3119b08.html"},{"revision":"8f6728be5fbb1c0e2a82af0ef51d27df","url":"./c53c84e7.html"},{"revision":"7853132bab588ecac40df4ed318e34ea","url":"./c6c9c4db.html"},{"revision":"0ae7b847ca735f3415976b4cb32f32de","url":"./categories/index.html"},{"revision":"c9646afd8d00cb0ffb9b967c521b2957","url":"./categories/教程-html/index.html"},{"revision":"b4c98bdc10ece8e834bd359393298844","url":"./categories/文章/index.html"},{"revision":"905825de82b950d12f2be87811909f09","url":"./categories/文章/page/2/index.html"},{"revision":"ea8b43571eb4b60b6de8682cb83f5678","url":"./categories/文章/page/3/index.html"},{"revision":"81e8d2274df4be306835396fe5202d97","url":"./categories/文章/page/4/index.html"},{"revision":"4d5685986414d44075c7354c98d4e327","url":"./categories/文章/后端/index.html"},{"revision":"78f21afa7328414bc1be3888b5134ff1","url":"./categories/文章/续集/index.html"},{"revision":"d6ef9bb80972b9a3a72683aa1439b6f6","url":"./categories/日记/index.html"},{"revision":"c71913c179ef929dd5c142115a4b456e","url":"./categories/通知/index.html"},{"revision":"a3cbbcbda330175ad8ce94084a6c7922","url":"./categories/通知/page/2/index.html"},{"revision":"c9de1a10f160abadf3327c802d5fc096","url":"./cd843bca.html"},{"revision":"a5cb089081deaa18eff81d705474b05c","url":"./codemao/join.html"},{"revision":"32069c95f32d37607dd342e7a53fc096","url":"./comments/index.html"},{"revision":"a9a3712ca10c5d65b7af395d9dc53289","url":"./css/bilibiliBanner.css"},{"revision":"fb15fb1adb17841704902aa9c227f729","url":"./css/bilicard.css"},{"revision":"808bbddc4f4c56aee97a7af07f1f364f","url":"./css/coin.css"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"24afac82095e74871b55985e668be2c8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"0937bcb5f3a66cc1dde1ab63f6958c4f","url":"./d28a09fd.html"},{"revision":"66d944b16231e90a62d317efd9b17205","url":"./d2bd8f46.html"},{"revision":"28af1bcee3788b9dd4bcb0d4033305a4","url":"./d46f6783.html"},{"revision":"2c39eef13afb9aa9510f8d960a364a52","url":"./da033cd3.html"},{"revision":"13187eb8229819839e5f9dfbe70870b5","url":"./db5f4c9.html"},{"revision":"a4fcb13f03045c95acdb00eb15d094b9","url":"./dfd2f59a.html"},{"revision":"df57f4035de61bfd2e562ee7efeb2789","url":"./e4d07d47.html"},{"revision":"ea3313bb49be211d9d6085d99dd1a743","url":"./ede49718.html"},{"revision":"1deab0c8c560b5f83c158b5d6cf4d133","url":"./ee30bc12.html"},{"revision":"a3a2833c62683144a6f42d61fd56fb21","url":"./f6485125.html"},{"revision":"de557e610d8635092b67e388582c5d1a","url":"./fa1bfef3.html"},{"revision":"ec37e4ccaa607314fd5ddd9f49442a69","url":"./fcircle/index.html"},{"revision":"360a93f13e34ffb3012afc15fd943a9c","url":"./fe275fd0.html"},{"revision":"d42f7e8f3c5a1d49c374916e3d588124","url":"./from.html"},{"revision":"afab459a1e61ae9cbb1f27a7cd0bb5fe","url":"./index.html"},{"revision":"3977461395620c67690202f14bbc6058","url":"./js/bilibili-banner.js"},{"revision":"db0ef6fc56befa79cef5e478f9138324","url":"./js/coin.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"c56713403fe9375a51d3a0e660e80676","url":"./js/runtime.js"},{"revision":"fb9eaf607df5ea9ddfebfc57238add1d","url":"./js/SAO_Menu.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"60663de55410a8e5a2d1f71904dd022a","url":"./jump.html"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"ac908722f4e17d07d0c11291662155ea","url":"./link/index.html"},{"revision":"49d5b796b0a24b2e6a871aacdd457f1f","url":"./manifest.json"},{"revision":"eb57e7af9e85e394c43a2b0a891fc593","url":"./other-page/dead-links/index.html"},{"revision":"2302ed1e5548c37036b589f68a01dc16","url":"./other-page/video/index.html"},{"revision":"afda498291fe4777a73b8271c6269446","url":"./other-page/ziyuan/index.html"},{"revision":"eec6a98883c0f12125da114f9119bc8a","url":"./other/index.html"},{"revision":"a1ec7f844d93f7696d173ce8548f77c9","url":"./page/2/index.html"},{"revision":"59284035f6b44919ff0a7849d79eaa2f","url":"./page/3/index.html"},{"revision":"b49d4c65969ba7796067587a7489a73b","url":"./page/4/index.html"},{"revision":"65051ba26d12e185c2cd8a37205da0fd","url":"./page/5/index.html"},{"revision":"e0ff00f7628b2ade7631b34f7d882277","url":"./page/6/index.html"},{"revision":"d8f0f09e70953efc318365075ab35997","url":"./pcre.html"},{"revision":"28cc2ff4bbbafeec282fbe2d3cc5ea0c","url":"./random.html"},{"revision":"b9455c8c9137615ad4f9dcb363d910c0","url":"./search.xml"},{"revision":"9e141d08830d6bf41f1a4c5c28a4a196","url":"./service-worker.js"},{"revision":"9f3d61be67b1818329be0ce18173bb02","url":"./shuoshuo/index.html"},{"revision":"24648d6093233405a99d338dd439b522","url":"./sitemap.xml"},{"revision":"c4ad332318c24c129b593e63c467a911","url":"./support.html"},{"revision":"bd8692bf1a08cc5dbbf1409b641b934e","url":"./tags/2020/index.html"},{"revision":"b8ad9e07b45287a2fe9613eb42ba7a5d","url":"./tags/404-网站/index.html"},{"revision":"e5984ba50dc51a8488389339ce841c27","url":"./tags/android/index.html"},{"revision":"453b6f9cd2b4e073954046de673f821f","url":"./tags/aplayer/index.html"},{"revision":"f62c92020b7f5ca701b62a309e904afa","url":"./tags/app/index.html"},{"revision":"d69ba1647bed838fe1ef49340cfa75bb","url":"./tags/bilibili/index.html"},{"revision":"361e70141b0db1a9da0647abb0dccb20","url":"./tags/CF/index.html"},{"revision":"942470b071a21ef71360d99b8d8ec520","url":"./tags/CFW/index.html"},{"revision":"a4212f67f06accf3af5cfa60bc09d32d","url":"./tags/Cloud-flare/index.html"},{"revision":"068820c22de1235a924752485c956e19","url":"./tags/dao-voice/index.html"},{"revision":"d7b1134cc07b8ac251e76dc61db63e71","url":"./tags/debian/index.html"},{"revision":"748b4006b76a4b769af60f7ef3e0487f","url":"./tags/download/index.html"},{"revision":"c7fdd3ed6c27b7bddd74b61b36b40048","url":"./tags/FA/index.html"},{"revision":"3b87eb4881793629d9f73819df9b4ecf","url":"./tags/fusionapp/index.html"},{"revision":"b7a951b910e4de640fafd17e2bc70871","url":"./tags/gh-page/index.html"},{"revision":"0f8c459f66e15d6aaf8862d7f5ebaf0a","url":"./tags/git/index.html"},{"revision":"35d32f3871ce1da71aef72e8ba999f12","url":"./tags/gitee-page/index.html"},{"revision":"8d0dc6e8a447573204b6dc8369bc25ff","url":"./tags/gitee/index.html"},{"revision":"26ded842fdb7268dbdc54bdbee04cda3","url":"./tags/github-page/index.html"},{"revision":"be01b3f7a6b2dfbb06be85224c12a4a2","url":"./tags/github/index.html"},{"revision":"282a28a68be8ef4d13fcbd2f0407762c","url":"./tags/githubpage/index.html"},{"revision":"8cd71c593e8247e581f16fc7345f30de","url":"./tags/hello-world/index.html"},{"revision":"1ad7bb60f5bbc07728e3823f573db929","url":"./tags/hexo/index.html"},{"revision":"95dafa2b7d2629b2bf7541391992b490","url":"./tags/html/index.html"},{"revision":"a75c03d94802b7c0d94ddb696a75e181","url":"./tags/iframe/index.html"},{"revision":"a60e828e6350aa7fd77ff1bd873b0f02","url":"./tags/index.html"},{"revision":"52dd0fc7e71f96656ae89c27d21651a3","url":"./tags/java/index.html"},{"revision":"6489ede272f9811509c7d4536e70b333","url":"./tags/linux/index.html"},{"revision":"3d695987a2e27556599a70915ceca0a3","url":"./tags/liunx/index.html"},{"revision":"096de6ca24e111a9a978435e9fec3f55","url":"./tags/markdown/index.html"},{"revision":"ab21670253d6d56db9da77bc891cd2b6","url":"./tags/md/index.html"},{"revision":"09187a57e2a4e4c9bc8b7e783b4d6483","url":"./tags/md编辑器/index.html"},{"revision":"e6f5c78315579f862ea8cfd417442257","url":"./tags/minecraft-JE/index.html"},{"revision":"c27dfccd3c2b69fa4cc2bf828f0f5406","url":"./tags/minecraft/index.html"},{"revision":"4736c3ab01d76f9ac0f09c79e7c94be9","url":"./tags/minecraftJE/index.html"},{"revision":"834cf778e48224b5a025b1194347dee4","url":"./tags/node-js/index.html"},{"revision":"2f6b51c717adaebc2c4c93a2dd13fab8","url":"./tags/node/index.html"},{"revision":"0b95d4651e8104aab46095d04849dc59","url":"./tags/php/index.html"},{"revision":"8193eac90c212c731b683868f2431991","url":"./tags/picgo/index.html"},{"revision":"49a30ef00ee3f09f71e17abd260e52ac","url":"./tags/ssh/index.html"},{"revision":"7494488d76e734a17add7e1882e8ee7e","url":"./tags/termux/index.html"},{"revision":"3a25bec6b7ee9bf7c77f0d855e8230eb","url":"./tags/undertale/index.html"},{"revision":"310607fc96d2cdd79bbb28c00c31953c","url":"./tags/ut/index.html"},{"revision":"49c4d768e3d000f1b69f205ae4179d38","url":"./tags/vercel/index.html"},{"revision":"320a003f7a2f5f1ab92309a68069d52f","url":"./tags/website/index.html"},{"revision":"3676808a9605d1ae3136604aa516ff8e","url":"./tags/win10安装/index.html"},{"revision":"697142debed1058ddcf7972dd7be6d26","url":"./tags/Windows/index.html"},{"revision":"cc9988e79f7b9d6035e0d52feef1db84","url":"./tags/Windows10/index.html"},{"revision":"4d67ed91f59fc29098141539b007e6b3","url":"./tags/wmz-blog/index.html"},{"revision":"7ae61a236de0234879fba6332f60f2fb","url":"./tags/传说之下/index.html"},{"revision":"9a291dd9f98c20b6c413d17d95743d93","url":"./tags/免翻墙/index.html"},{"revision":"c0a230d0b93cc9478edfad5f0b19e64f","url":"./tags/动态网页/index.html"},{"revision":"0a4079223445028ccbe4816e8dab5159","url":"./tags/回顾/index.html"},{"revision":"3bfea3f4739ff7a8cc5874d9df01ec49","url":"./tags/图床/index.html"},{"revision":"355143f0c8284b2e9101f4168eb8f004","url":"./tags/在线聊天/index.html"},{"revision":"73b66d0798f84dc2938e6cbb6a23caea","url":"./tags/安装/index.html"},{"revision":"6bbdd5874e0c122cb095c1dc1eb3ce8b","url":"./tags/工具/index.html"},{"revision":"4d21a5b8f9add83bc0103fb6712ecf45","url":"./tags/我的世界/index.html"},{"revision":"1791708f9cbd05683a623b080bde6093","url":"./tags/折腾/index.html"},{"revision":"b5ff99008a955b432506319f31ef3e09","url":"./tags/搭建/index.html"},{"revision":"e6c4bedeb81ec826b1b7e80b1f264f83","url":"./tags/教程/index.html"},{"revision":"c4cd4bc3a592917da16f848baab94029","url":"./tags/日记/index.html"},{"revision":"6695e8a32d32d65d3f7865634ca620e4","url":"./tags/更换/index.html"},{"revision":"dd259ad96662983f923e8e08ec59f038","url":"./tags/更新/index.html"},{"revision":"5a49a43abe177650af1a56a73d845f9f","url":"./tags/更新了/index.html"},{"revision":"1dd00ab15c5cceae3bced2c01c1dc912","url":"./tags/服务器/index.html"},{"revision":"c779bb45eceb03ae8299afbc1be31c77","url":"./tags/测试/index.html"},{"revision":"b9e1f2c6c06d8a2a222347b7e0829ee7","url":"./tags/百度统计/index.html"},{"revision":"a699f0b02cbdc94de73cba57e1758bb8","url":"./tags/看法/index.html"},{"revision":"3b25c7ff060c9b4dc3895efe30fb745a","url":"./tags/系统安装/index.html"},{"revision":"739552b14d438242b390798f63ff6f88","url":"./tags/袁隆平/index.html"},{"revision":"2633562991a1d6fb9b91ca6e8c26d8fd","url":"./tags/迷你世界/index.html"},{"revision":"2f14443a71c23441bf175b7b18c7e8d9","url":"./tags/通知/index.html"},{"revision":"be77f49249a5b0a383a6e11dfd5c0230","url":"./tags/邮箱/index.html"},{"revision":"83eef4e84f78940016c623e2a254e799","url":"./tags/随笔/index.html"},{"revision":"ba1ecdc4f8bd369a668478c7a1cd2e40","url":"./update/index.html"},{"revision":"0497fcadf6b83c75ec4df94ab5067d20","url":"./workbox-f7715658.js"},{"revision":"2cc326181fe44d1db9004867e62cd97f","url":"./wsimg/browserconfig.xml"},{"revision":"6643dedace64874fd99d8ab54458c0b8","url":"./wsimg/README.html"},{"revision":"ef6d498e54f639c8ee95928ea9904bc7","url":"./y-re.html"}],{
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