const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "wlog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"1fcc0f18248db2219a97835fa8009c5e","url":"./2020/11f1a2fc.html"},{"revision":"5a17ee8967061a50a98f703911d6df17","url":"./2020/1f7e3876.html"},{"revision":"ecb6ac1d18803e5c56c318df3e858f80","url":"./2020/2c7854e6.html"},{"revision":"d9af8be66bdade18350732b5a58dfe0d","url":"./2020/30422b3f.html"},{"revision":"690b423980048fdcc3062cef783e89aa","url":"./2020/3494bf09.html"},{"revision":"6509f47996bfa391754573cb0293c5f9","url":"./2020/4283e7c2.html"},{"revision":"aa61704e22c94aa81e8f676c647e33c5","url":"./2020/47008bfe.html"},{"revision":"b769c2a7b804653ce627f43bf7c4ed81","url":"./2020/496761e5.html"},{"revision":"4f822f9950375f91bd1663b73972eb27","url":"./2020/51f11683.html"},{"revision":"4252191a904b36a4a5ea607ce403612d","url":"./2020/6057642a.html"},{"revision":"d98291bb74de58f12dc62218bcab270c","url":"./2020/60816787.html"},{"revision":"bf123e1e30749b85f785f93a44b11510","url":"./2020/68083ed.html"},{"revision":"c16d24f0b219d41fa30d6b2a61ef0281","url":"./2020/748a29a4.html"},{"revision":"5e549c82f574f410628130c5df36bb82","url":"./2020/7bc26341.html"},{"revision":"3c3f244ef8c75e2c483cb64655149738","url":"./2020/7cee40bf.html"},{"revision":"18e00506bc1296875b631a7e45225b1b","url":"./2020/836982c.html"},{"revision":"7400c8b2e0e165cbd0a9af41bf6395b1","url":"./2020/83d82948.html"},{"revision":"f0cdcc35f774073e74ab9613499c9988","url":"./2020/8856403.html"},{"revision":"bc64551aeed1ec72fc95d7be8404d57e","url":"./2020/8bc291e6.html"},{"revision":"632db84241291b002cbcc6f11934291a","url":"./2020/8d39085b.html"},{"revision":"1326fa310f0b4d555a6ab7a115d426dc","url":"./2020/9341b494.html"},{"revision":"88789e702695dd56bd59ecdff9c2da25","url":"./2020/96ccccce.html"},{"revision":"c79dd72ae5ddd851be34fb8f449fae66","url":"./2020/98d114e8.html"},{"revision":"49e61cea2cc8dcd99329f4907d731b3b","url":"./2020/a1be303c.html"},{"revision":"e83d7c3fc93c15c68e8420c143461684","url":"./2020/aa96c821.html"},{"revision":"ae15c43de0a1998dbd874569b43e3222","url":"./2020/b28868d6.html"},{"revision":"30bf70f20a4bd60b0f9e8ce3b695a0b0","url":"./2020/bf3a65a4.html"},{"revision":"54a49fd96d739dd43a4d57563ad3fded","url":"./2020/c1ee638c.html"},{"revision":"614457e6c5a2771cfb1f2143868a669f","url":"./2020/c3119b08.html"},{"revision":"742963773b8cb4339283384cfd15bb0b","url":"./2020/cd843bca.html"},{"revision":"6cca075e1ecb214da889569972380593","url":"./2020/d28a09fd.html"},{"revision":"f499b9daf11a8c68d70dd5f828af43b6","url":"./2020/d2bd8f46.html"},{"revision":"c178e097ed7c72f73836e7ad096bb2c5","url":"./2020/da033cd3.html"},{"revision":"06df62a00a8cd654db54f2c9efa53b60","url":"./2020/e4d07d47.html"},{"revision":"6a3bdc20d1ec9329e6aa53590b84bb43","url":"./2020/f6485125.html"},{"revision":"3406ffde937245f9d4a9d4aa1e2bbad2","url":"./2020/fa1bfef3.html"},{"revision":"6029d89d8ac7119687385b95d17df639","url":"./2020/fe275fd0.html"},{"revision":"002986d41fff1bd1c786eeb22c97f334","url":"./2021/2b244555.html"},{"revision":"fa44f4cf8a0403a852945a8defade24c","url":"./2021/2ee2518d.html"},{"revision":"da2219ffeb36e77be2b9827fd2160f6b","url":"./2021/2f3c3637.html"},{"revision":"f2de9c3d3886c6e92fe35839dd71cd07","url":"./2021/3e4cf0e1.html"},{"revision":"4c3981bf6835a2d57f089f91add7f669","url":"./2021/49ab854f.html"},{"revision":"b495621a533905ddc41903f286587652","url":"./2021/4a17b156.html"},{"revision":"892293fe2acb3d97ebf24527469c75c9","url":"./2021/5b2b3473.html"},{"revision":"516a7ab8c1a320ca9ca7adc183d0ce1b","url":"./2021/71e2d2d3.html"},{"revision":"802d9830b85627b8878aa2220cb6f51f","url":"./2021/87e1c0bc.html"},{"revision":"8739821e4accbfece2821e1cdb98c101","url":"./2021/a2bad115.html"},{"revision":"ab2168ac2ed9bfa04dd23b689ba23689","url":"./2021/a65bc6b8.html"},{"revision":"c9c32cd5f2fc85066bc957704061fdd5","url":"./2021/a81556f1.html"},{"revision":"4d9286247c6ed82e89f8ec03d6c5063c","url":"./2021/a8acdd67.html"},{"revision":"366289cdad2bd07ffe18ec947c125030","url":"./2021/ab1d37b.html"},{"revision":"dcd877fcbd7931de1f3d8397dad57260","url":"./2021/aeb2d36.html"},{"revision":"3e544c13bfd63ff14fdb813722b8b529","url":"./2021/af886b34.html"},{"revision":"2717940bdee71f75062e2ad31c93f6e0","url":"./2021/c48ef0f6.html"},{"revision":"ab70efda8468e8d6a9b85c9911370045","url":"./2021/c53c84e7.html"},{"revision":"9507bac660d1afb256b4c9539a1b2879","url":"./2021/c6c9c4db.html"},{"revision":"bad9749446be5ebe6ab6943e4ec5c2f9","url":"./2021/d46f6783.html"},{"revision":"d7210e0b5637d618dad73131afbd2db6","url":"./2021/db5f4c9.html"},{"revision":"f1e2de366a9edcfa3bb4cbaca78b8c0c","url":"./2021/dfd2f59a.html"},{"revision":"d4c4bba6d4a258339ddf06e58b5ffc13","url":"./2021/ede49718.html"},{"revision":"1de1dda84f54bd929b7a75a66b38f0c7","url":"./2021/ee30bc12.html"},{"revision":"1c4b25bb6d2815bdba13fb897d436bb9","url":"./2021/f053c80.html"},{"revision":"09bb88f8c3a873bb3c559fb88e223fd2","url":"./404.html"},{"revision":"f8c75a459a3bc75ae7fb62b00233f9bc","url":"./about/index.html"},{"revision":"868372dae117b6be8274c8a8c78bc188","url":"./archives/2020/08/index.html"},{"revision":"da9732f6d0d848730132a0dd7c39b49e","url":"./archives/2020/08/page/2/index.html"},{"revision":"d017c7aab5e4c7374e6e8d35bf143915","url":"./archives/2020/08/page/3/index.html"},{"revision":"5460a16b4d8c23037b5a7cebc06b260d","url":"./archives/2020/09/index.html"},{"revision":"39e1921df5f66ea512370f9366bc388c","url":"./archives/2020/09/page/2/index.html"},{"revision":"e206921a9867ee488649065d34d4f32c","url":"./archives/2020/10/index.html"},{"revision":"fba44905af2f01e4cf0adecc6cb1a63c","url":"./archives/2020/11/index.html"},{"revision":"36fe41cca16e3b8f144cb1a54a860df2","url":"./archives/2020/index.html"},{"revision":"72e7b0f6a9aca904b24cef89a6d9b10f","url":"./archives/2020/page/2/index.html"},{"revision":"636aba511c195bf218bdd452740944fc","url":"./archives/2020/page/3/index.html"},{"revision":"a5428a2892e57d24f319f60fd7411852","url":"./archives/2020/page/4/index.html"},{"revision":"dacdd3de7c25acb81075c024f9292421","url":"./archives/2021/02/index.html"},{"revision":"80e660c29a8f3b476ffbf53414451983","url":"./archives/2021/04/index.html"},{"revision":"8d212bde4310b1f720c825345b80f265","url":"./archives/2021/05/index.html"},{"revision":"d38591c9c5c20c636bca1d7795f3276c","url":"./archives/2021/06/index.html"},{"revision":"cf9446caff41927d63322b0025ff90b8","url":"./archives/2021/07/index.html"},{"revision":"5f533e8211a3a6e44077d7420f44f9fd","url":"./archives/2021/08/index.html"},{"revision":"f94868764e305da06821dc8d6a2cb0b1","url":"./archives/2021/09/index.html"},{"revision":"c252d41ff03cccab2a527ae20dd2b620","url":"./archives/2021/index.html"},{"revision":"f4ccc9ff7e5e0d0f11f758b099115945","url":"./archives/2021/page/2/index.html"},{"revision":"d2dde0e3bebfc83f141351d35f51c46a","url":"./archives/2021/page/3/index.html"},{"revision":"1e7d3bdf3998faa9b03bb7d51e51b5fe","url":"./archives/index.html"},{"revision":"f20efb31a76f21261b9078da9be9b34f","url":"./archives/page/2/index.html"},{"revision":"408a59dc646a148c6efba0360fb9b5c1","url":"./archives/page/3/index.html"},{"revision":"2515e58d9c0627b4f00bb7771013567a","url":"./archives/page/4/index.html"},{"revision":"85e5791f184d8d79f1f7160b45ea0c43","url":"./archives/page/5/index.html"},{"revision":"5a2ce29a40340888845b37e2ef48b4e8","url":"./archives/page/6/index.html"},{"revision":"be65ad56fb1cc8c5d95409155bfbeb5f","url":"./archives/page/7/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"661b65f2eaafd0e6f913bd5d3975436e","url":"./bangumis/index.html"},{"revision":"f9825df26698e07397aca81203a9b699","url":"./c-re.html"},{"revision":"ce5c7624c22981b13e75e4d60f5e8910","url":"./categories/index.html"},{"revision":"5f9f85610493f551374f299e6080fb9a","url":"./categories/教程-html/index.html"},{"revision":"e47e27d22d13d912a70491e95d55c9ed","url":"./categories/文章/index.html"},{"revision":"89263627913ad4ff9b08546306219c36","url":"./categories/文章/page/2/index.html"},{"revision":"ff5f8c800cc25df0be4d0fb62e5e7e30","url":"./categories/文章/page/3/index.html"},{"revision":"0daeb6bec3450c65fe3a33824ff32b47","url":"./categories/文章/page/4/index.html"},{"revision":"8285018baeff695fa225f92dbece7c65","url":"./categories/文章/博客周年/index.html"},{"revision":"e705ab8f69fd9c9012fe9b6655b48670","url":"./categories/文章/后端/index.html"},{"revision":"ad412c25ae5881de8afe1ca7ba2bb989","url":"./categories/文章/感受/index.html"},{"revision":"352f655e6df52cb08d64d1a2911656aa","url":"./categories/文章/笔记/index.html"},{"revision":"f75b6a323e1d03d264e5a0bf80273cd6","url":"./categories/文章/续集/index.html"},{"revision":"6fc7ca856da242e5f261ec4c9b0bc0e7","url":"./categories/日记/index.html"},{"revision":"4505378094680b71c9a3a8cb0cc99667","url":"./categories/通知/index.html"},{"revision":"e0d4ca2d9c80eba62fab3104ebf8b7c0","url":"./categories/通知/page/2/index.html"},{"revision":"c9dfb98b037b9cf3f1a8786740eb56c1","url":"./codemao/join.html"},{"revision":"b94775a9a54e8ed3f9cbd528111e135f","url":"./comments/index.html"},{"revision":"a9a3712ca10c5d65b7af395d9dc53289","url":"./css/bilibiliBanner.css"},{"revision":"fb15fb1adb17841704902aa9c227f729","url":"./css/bilicard.css"},{"revision":"aa687b8441c1dea2f0710f788723542f","url":"./css/card_botui.css"},{"revision":"808bbddc4f4c56aee97a7af07f1f364f","url":"./css/coin.css"},{"revision":"0a8e48088a60333db1759bf5cd1985ba","url":"./css/custom.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/customw.css"},{"revision":"8aae3872dd735df63ac60710f46e97be","url":"./css/gggwmlgxfc.css"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"085d261235446d6a10c1dbc04eec7e2c","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"17278ba5a32232695b85611fa5f99d77","url":"./fc/index.html"},{"revision":"38934eac0567b33d3171ace7237366de","url":"./from.html"},{"revision":"d9fecd20156177374c0be9345ef2ffb1","url":"./index.html"},{"revision":"3977461395620c67690202f14bbc6058","url":"./js/bilibili-banner.js"},{"revision":"546b558e9e8b3c6952b530d467406ad7","url":"./js/botui_init.js"},{"revision":"6aea941743f41c0649d742bdc80df352","url":"./js/botui.js"},{"revision":"db0ef6fc56befa79cef5e478f9138324","url":"./js/coin.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"c56713403fe9375a51d3a0e660e80676","url":"./js/runtime.js"},{"revision":"fb9eaf607df5ea9ddfebfc57238add1d","url":"./js/SAO_Menu.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"91b7e2a555e0c80cac63cc0c490e69e8","url":"./js/weather.js"},{"revision":"2d3e4205fb0aab1c7e64101a9b6583b0","url":"./jump.html"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"7aefb82943bd4616f9fe1269f0e7274f","url":"./link/index.html"},{"revision":"42e4950a21f49b6397207818bdc2dc56","url":"./manifest.json"},{"revision":"2435de6d6d2297e68b16e794576df5ba","url":"./other-page/dead-links/index.html"},{"revision":"497f408ca552ae266795a7b0228e8967","url":"./other-page/video/index.html"},{"revision":"4f5dbd2b0d721a8f9d50d3bb46d7404d","url":"./other-page/ziyuan/index.html"},{"revision":"a4d560f077d9fd4779fd74176f49064a","url":"./other/index.html"},{"revision":"2b9110e8b014722f76093b6083d7b52f","url":"./other/manifest.json"},{"revision":"966ab335c6a3e6466507310a58b4c687","url":"./other/s/NTRss88/index.html"},{"revision":"44674b80ed37edd80a2d51558f1c9889","url":"./page/2/index.html"},{"revision":"4ec91577cb1a8fd8c1d14714ca7f1336","url":"./page/3/index.html"},{"revision":"13d01394ff15de42f537dd24876fbc11","url":"./pcre.html"},{"revision":"2f11f4944abdaafca0589c7a4822b2a9","url":"./random.html"},{"revision":"f324f5b897de19509455f03cabc16de8","url":"./shuoshuo/index.html"},{"revision":"1abd8d7081103840ec994da1e33dd1c8","url":"./support.html"},{"revision":"73c50d387d132bcdb0ff9a89b066a2b8","url":"./tags/2020/index.html"},{"revision":"88b6e844992961c9e5db30f8e2650a3b","url":"./tags/404-网站/index.html"},{"revision":"43859cf327232097b987edf8e266c4cf","url":"./tags/android/index.html"},{"revision":"4a478625f2a55afc3f2d90d571dd5ba8","url":"./tags/Android/index.html"},{"revision":"f1a6fed196fe21b19ac1320b04ae059c","url":"./tags/aplayer/index.html"},{"revision":"9f565d79449f20c31515742d20395d4d","url":"./tags/app/index.html"},{"revision":"2c21a0eaf68cefbaa508b4f6517f27f4","url":"./tags/bilibili/index.html"},{"revision":"ddd725d5396d238e39ffb8e699d89fb0","url":"./tags/CF/index.html"},{"revision":"f705526f20db270e92ec748be5532de4","url":"./tags/CFW/index.html"},{"revision":"9af828bff397b247be99508bb7b42fa6","url":"./tags/Cloud-flare/index.html"},{"revision":"955d889ace27bf16c210b491e1c5f8fe","url":"./tags/dao-voice/index.html"},{"revision":"c8cc64bc333ec443551707da3ce16b9e","url":"./tags/debian/index.html"},{"revision":"d3bae1d6868f59037ee4452138ae2c29","url":"./tags/download/index.html"},{"revision":"15146bc37dfd87a294ddf4b94c9aa680","url":"./tags/FA/index.html"},{"revision":"4baea4ca9c79d83a94a3fe1cb34ae976","url":"./tags/fusionapp/index.html"},{"revision":"c1792aceb9b425a9a4e732a48de3b32f","url":"./tags/gh-page/index.html"},{"revision":"4cd78835feea1858b252fc79529090fd","url":"./tags/git/index.html"},{"revision":"0e7ed082260f66488d671299e1b821f0","url":"./tags/gitee-page/index.html"},{"revision":"325a15ce63c4cff9c55c9d1410f6a9e1","url":"./tags/gitee/index.html"},{"revision":"1aa53a5119098b586ad1a3eaedca6ffc","url":"./tags/github-action/index.html"},{"revision":"264bcf53f5bf6eefd9ccc41bb2cfe5b3","url":"./tags/github-page/index.html"},{"revision":"8057730f7f02778a54ad5700648d50aa","url":"./tags/github/index.html"},{"revision":"7cbe30587a8b70e4afc7b325db2bdff8","url":"./tags/github/page/2/index.html"},{"revision":"2c7479d8a5f18d7f61a30154711cc39e","url":"./tags/githubpage/index.html"},{"revision":"c6e30fbabb187a8e5ffb5a92eea36d82","url":"./tags/hello-world/index.html"},{"revision":"f1ce2e73c0e0882374ba566c88715e59","url":"./tags/hexo/index.html"},{"revision":"037b687f7dd047d29f7b16520f70cdd6","url":"./tags/html/index.html"},{"revision":"c45e348b376b8aff5635fb0889e478b4","url":"./tags/iframe/index.html"},{"revision":"eb0d0198d74e90f0991b182456df33f3","url":"./tags/index.html"},{"revision":"253eba77eef2a0cc8b1de7b4174eaa64","url":"./tags/java/index.html"},{"revision":"18c408a76f0401ceffca39d7ac27cb94","url":"./tags/linux/index.html"},{"revision":"e81673a0845d508e28f8bc6988aab71b","url":"./tags/liunx/index.html"},{"revision":"9cc4bd51da9f2bf390d2168c82edfd3d","url":"./tags/markdown/index.html"},{"revision":"42a0e8caab8892aedbe271ea6ba8e5ca","url":"./tags/md/index.html"},{"revision":"eb3943d2526afe8d568a504f5ac9dccf","url":"./tags/md编辑器/index.html"},{"revision":"accc284335eaa0527c79b3b7e149e82e","url":"./tags/minecraft-JE/index.html"},{"revision":"4dc80eb85e08ff292b5e0ff5180fbfde","url":"./tags/minecraft/index.html"},{"revision":"893d6f015ab37076fda4af7f3173d1cd","url":"./tags/minecraftJE/index.html"},{"revision":"e1545e4ddb2428467a6715566bb16c14","url":"./tags/node-js/index.html"},{"revision":"841eefbc44eb8db2047088eda4888bdb","url":"./tags/node/index.html"},{"revision":"cf9fc69cfaeedca80627c6b04765eb57","url":"./tags/php/index.html"},{"revision":"42aff4faeb37bf18f1d43fc187178339","url":"./tags/picgo/index.html"},{"revision":"5cfdc90027901dee9541052c449c0b82","url":"./tags/python/index.html"},{"revision":"d418c403a7e964e478578978761dfd00","url":"./tags/ssh/index.html"},{"revision":"276a2cd26e4e334463abbf2c113d6f81","url":"./tags/termux/index.html"},{"revision":"6e94f9cb6695f8bf284d87cf6282cfba","url":"./tags/Termux/index.html"},{"revision":"71e76c67a31bf677271880ec6410ca0c","url":"./tags/undertale/index.html"},{"revision":"37eb129ac6a4a7ef2a6c555c62cd5679","url":"./tags/ut/index.html"},{"revision":"ae733591f98f5bcc08d1b775d705f201","url":"./tags/vercel/index.html"},{"revision":"7326dc26bcc5afc90890ca6a8d875c1c","url":"./tags/website/index.html"},{"revision":"635302f1622d6c6963c29b57fe9876ed","url":"./tags/win10安装/index.html"},{"revision":"91f0d4e626aa979a63ce39fa9d85d717","url":"./tags/windows/index.html"},{"revision":"792262f0ce485c49a83b675f554c2217","url":"./tags/Windows/index.html"},{"revision":"dbe917a8daaa8eeff1b150dbbef6843f","url":"./tags/Windows10/index.html"},{"revision":"3dc8af2de6460955705de5354ab32780","url":"./tags/Windows11/index.html"},{"revision":"33f97065975f7fe556e1b9cd80c5af7f","url":"./tags/wmz-blog/index.html"},{"revision":"1d8a6bf6dd0957c32c143079212e2d76","url":"./tags/一周年/index.html"},{"revision":"e26e24b422462a9645510be5142dcf0d","url":"./tags/传说之下/index.html"},{"revision":"a17d4c998cbbe2ebd47d50b6af1a105f","url":"./tags/免翻墙/index.html"},{"revision":"f79ce194110e2a961b2cd8ebfab7c25c","url":"./tags/动态网页/index.html"},{"revision":"939aaeb7356f81a268dbbd729486f6ce","url":"./tags/博客/index.html"},{"revision":"51bc28cecd26b993736eb6e56aacafc2","url":"./tags/回顾/index.html"},{"revision":"2c514d90a8742d7bba849121ab437aae","url":"./tags/图床/index.html"},{"revision":"281caf3d1bb8acef3e3664cca1fc5964","url":"./tags/在线聊天/index.html"},{"revision":"5b70fbf4617aa6fa53c5f6d59c2b8b85","url":"./tags/安装/index.html"},{"revision":"5da96ea0d5b0f6d3f6e40c6d1d6a4567","url":"./tags/工具/index.html"},{"revision":"38021fe58631169617d76125a363c400","url":"./tags/我的世界/index.html"},{"revision":"0bb8e0df7a2f7129ada09c6fa15f9e95","url":"./tags/折腾/index.html"},{"revision":"af5213ef581087eeb32de837c0adf344","url":"./tags/搭建/index.html"},{"revision":"eea3a065546d7d08bd50a5565b6f4225","url":"./tags/教程/index.html"},{"revision":"0655b08190fdc44dd2442fb8a55b0a42","url":"./tags/日记/index.html"},{"revision":"14dc3b79de428a2148b2aa858ba267e9","url":"./tags/更换/index.html"},{"revision":"5715d4653f21eb641daabf043a12fd06","url":"./tags/更新/index.html"},{"revision":"333bbfdd980c1c94066a12ea139a9c5d","url":"./tags/更新了/index.html"},{"revision":"c0fafe5b9a81726c32771660fd1aaa68","url":"./tags/服务器/index.html"},{"revision":"2f700a716cc188cda1b467eeb5562e04","url":"./tags/测试/index.html"},{"revision":"a28be5517bc495dd53ec2ca20a530da4","url":"./tags/百度统计/index.html"},{"revision":"4d5636ff130489bc663a77dac94451b4","url":"./tags/看法/index.html"},{"revision":"62cffe57114d738922159811246ca617","url":"./tags/笔记/index.html"},{"revision":"9b52cb7a27f21f55ca0eeea52f4c6124","url":"./tags/系统安装/index.html"},{"revision":"c3bae41d4216e899a419fe33718bc861","url":"./tags/网站/index.html"},{"revision":"c09833ce470d9ab01c8dbc4e7eca7806","url":"./tags/袁隆平/index.html"},{"revision":"4738aa91b2f2b112e791e96dc836cfce","url":"./tags/迷你世界/index.html"},{"revision":"0ad69fe3b4a57074d66b7e45746367f8","url":"./tags/通知/index.html"},{"revision":"c1821399ffbf5cd8059cb5a0af97d92c","url":"./tags/邮箱/index.html"},{"revision":"5e1e39d944c9bada1df7f4e7c84118b9","url":"./tags/随笔/index.html"},{"revision":"b215dbe1bbe2de1b8135ed6bd2b0f770","url":"./twikoo.json"},{"revision":"911a26796968477dd08eea62812fcad9","url":"./update/index.html"},{"revision":"3896fa8ddd007e4683fd3db8cf07cfcf","url":"./wsimg/funnytitle.js"},{"revision":"bbd7ebfdb98e9d418cae6293e23fd6bc","url":"./wsimg/index-1.js"},{"revision":"0002c2fe2a451f9a6e14aad293713967","url":"./wsimg/index1.css"},{"revision":"03c91d036ecb720f8c0bd241253a3cdd","url":"./wsimg/README.html"},{"revision":"4d0a33ed83c3e3f2e4fd5e8031f9c39b","url":"./y-re.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();
// 以下资源需要再开，不然可能缓存过多

// Images
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

// Fonts
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

// Google Fonts
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

// Static Libraries
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

workbox.googleAnalytics.initialize();
