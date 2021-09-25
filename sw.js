const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "wlog"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"0034d933a597f189f36342bbf18006e4","url":"./2020/11f1a2fc.html"},{"revision":"f77d3f5e7432b765793ebb5b8945820f","url":"./2020/1f7e3876.html"},{"revision":"a8e7a5b92361dc3fcd4e2a9090a7eac1","url":"./2020/2c7854e6.html"},{"revision":"e6799e29013a52b9b17c2f3775d8033c","url":"./2020/30422b3f.html"},{"revision":"bff8110c0216d44e7e640394efc5cb98","url":"./2020/3494bf09.html"},{"revision":"97f146fd03bb7ba8ca405ec5037f336f","url":"./2020/4283e7c2.html"},{"revision":"1f0a61d4301e016b6febe0e9e385e786","url":"./2020/47008bfe.html"},{"revision":"a70ea54ebb6791fc0053a5afc2a7920e","url":"./2020/496761e5.html"},{"revision":"502a3cb753cd9b87e676c2a391e9b191","url":"./2020/51f11683.html"},{"revision":"4b0ad56634f6876b9b45d001a289f512","url":"./2020/6057642a.html"},{"revision":"fa963e6af3c0a46244bf9b3f5466a8a8","url":"./2020/60816787.html"},{"revision":"3d5b6e1ff497500c305c90a9640ab659","url":"./2020/68083ed.html"},{"revision":"731c127599b16e4bcd936839bb9959e1","url":"./2020/748a29a4.html"},{"revision":"c1f0216061316beac58358db3feda911","url":"./2020/7bc26341.html"},{"revision":"8c8a1f7f7258e9e6a429efcd42dc7c11","url":"./2020/7cee40bf.html"},{"revision":"d39ffc60560c3a9b8869991ffd598466","url":"./2020/836982c.html"},{"revision":"9e703522cfd7e733f82f2747f076b5b8","url":"./2020/83d82948.html"},{"revision":"88cd572988da95c43fc3b268ec87500f","url":"./2020/8856403.html"},{"revision":"82bc0404b5fb898d82adc60865425b83","url":"./2020/8bc291e6.html"},{"revision":"7acde9776b301947d94d02e7fa3874af","url":"./2020/8d39085b.html"},{"revision":"47e2e734adb4c55ad05e0617f28fdb50","url":"./2020/9341b494.html"},{"revision":"500c14332f7f9ef113f9fb98faa251fd","url":"./2020/96ccccce.html"},{"revision":"abd6e7e4826f9e74b14a093f459df9b7","url":"./2020/98d114e8.html"},{"revision":"bd91b63159a342a6fd99e5f9c05bd002","url":"./2020/a1be303c.html"},{"revision":"92c93dc0a78b3df7902b9423d7b67eb8","url":"./2020/aa96c821.html"},{"revision":"24485a9392e030f8b39a1e138ddca036","url":"./2020/b28868d6.html"},{"revision":"5317182a444d3598ac520baa47d16e56","url":"./2020/bf3a65a4.html"},{"revision":"f5b048786fd364ce69e57f6f8536d1e3","url":"./2020/c1ee638c.html"},{"revision":"e4a96d7a4ebe906e66cec2375bb73f1f","url":"./2020/c3119b08.html"},{"revision":"b4f7bb93702d666cba0700777b234cfa","url":"./2020/cd843bca.html"},{"revision":"62b9d6bb074df78908c470b7b4191113","url":"./2020/d28a09fd.html"},{"revision":"365fe0ed1e748dd8f9d9f623cf27353c","url":"./2020/d2bd8f46.html"},{"revision":"ec3604e17fd54585359f91a8b0374d6c","url":"./2020/da033cd3.html"},{"revision":"643df2e83a8cbd44720b76cd2e1a2b95","url":"./2020/e4d07d47.html"},{"revision":"6bf93bb6335dfe5a3b8d8fc0f955fee8","url":"./2020/f6485125.html"},{"revision":"089ccb766f40c48f0a5d6b25a29e7978","url":"./2020/fa1bfef3.html"},{"revision":"d9731a8ff4ef097d0ce54faf64b00ffd","url":"./2020/fe275fd0.html"},{"revision":"4b45876ea99c446f3367781d79c45b5e","url":"./2021/2b244555.html"},{"revision":"f66647a959dcd65e9ba7bf4e6ca42bc2","url":"./2021/2ee2518d.html"},{"revision":"574516621b0a7e0fc0fe27e068216873","url":"./2021/2f3c3637.html"},{"revision":"f8d2878ec22b0401e2a0eb7930affad0","url":"./2021/3e4cf0e1.html"},{"revision":"8f7bd06d412a78cd043e4e5188cefb0c","url":"./2021/49ab854f.html"},{"revision":"df0db8cd1544a9cc5c4567e2cd9cefbb","url":"./2021/4a17b156.html"},{"revision":"876104b2f2cf8c31d32eb765b8ac1927","url":"./2021/5b2b3473.html"},{"revision":"ecf9af5437ca4974f048ea35451500f5","url":"./2021/71e2d2d3.html"},{"revision":"7efe2702a3fa9d15ab71114423708636","url":"./2021/87e1c0bc.html"},{"revision":"55d37b1cbbf6b023f0f0d5d1f56711ec","url":"./2021/a2bad115.html"},{"revision":"2d0a49591e8e8e8b8b7df82c07142e3f","url":"./2021/a65bc6b8.html"},{"revision":"cf3b94651a774d8277abe9d27aa43add","url":"./2021/a81556f1.html"},{"revision":"b98bc80f6e17484501584bf2ea1da51b","url":"./2021/a8acdd67.html"},{"revision":"3059f61af6493fe54a86cb23c2dfda9a","url":"./2021/ab1d37b.html"},{"revision":"08d7057a5bfbcb7e04c1a3314912c9e7","url":"./2021/aeb2d36.html"},{"revision":"e9216f0d56b72e7a176fe1051a54e50a","url":"./2021/af886b34.html"},{"revision":"3ad143039126b08beeb5b74658888702","url":"./2021/c48ef0f6.html"},{"revision":"1e7305c6b7515d0d3950910523e97f56","url":"./2021/c53c84e7.html"},{"revision":"8b647c09d4bc42f171906a567f0b13b9","url":"./2021/c6c9c4db.html"},{"revision":"1f9c4c2171f40a94e066752825fa76b3","url":"./2021/d46f6783.html"},{"revision":"34a89107a401cb49f2a437a900d52683","url":"./2021/db5f4c9.html"},{"revision":"171c87e217f66a831442bbb71c33d1c7","url":"./2021/dfd2f59a.html"},{"revision":"bd3e9067c8e37e5de4ff5f28dda4b933","url":"./2021/ede49718.html"},{"revision":"8d184d6429b0d4ae45fa676686f7c69f","url":"./2021/ee30bc12.html"},{"revision":"3b353ae66c56957a47cce7dc3d6aa450","url":"./2021/f053c80.html"},{"revision":"e781c7f10616156b677f154b2b7579dc","url":"./404.html"},{"revision":"7853721e4e7d2c891fd3b1de60efea57","url":"./about/index.html"},{"revision":"bdeaae3c3ca7d3392ec772dcd65bb863","url":"./archives/2020/08/index.html"},{"revision":"77c195b4433afc5ba4d9d272eb0b233a","url":"./archives/2020/08/page/2/index.html"},{"revision":"0f1c3e181d120cd93504ef7bdabe686a","url":"./archives/2020/08/page/3/index.html"},{"revision":"37c8f08bd94cf79c1b46a178c2235df0","url":"./archives/2020/09/index.html"},{"revision":"4611561e0f8318b6cef7fba7a981bad6","url":"./archives/2020/09/page/2/index.html"},{"revision":"0bd7cec27379070b5009e213d466c86e","url":"./archives/2020/10/index.html"},{"revision":"a1baeae1c9f26cf998908955829a8e38","url":"./archives/2020/11/index.html"},{"revision":"5ff0526abb89a31e406a001cea73a3c7","url":"./archives/2020/index.html"},{"revision":"310f8e4b294a90f03d535fd458afd4e8","url":"./archives/2020/page/2/index.html"},{"revision":"6117831488f8a9636b356d3d6d5101d3","url":"./archives/2020/page/3/index.html"},{"revision":"9547c8a3808771a779703bb9493816cb","url":"./archives/2020/page/4/index.html"},{"revision":"bf3b33cce256511d0c3f2424ade5c143","url":"./archives/2021/02/index.html"},{"revision":"fa3fbed4d73353654c74d75a7191a12a","url":"./archives/2021/04/index.html"},{"revision":"daca13d2eef64a7fde0c6665baa3b3fc","url":"./archives/2021/05/index.html"},{"revision":"d74351fcbc8ee3779c4b04a2dca53234","url":"./archives/2021/06/index.html"},{"revision":"2d145977be3e308b3f1214be79b16422","url":"./archives/2021/07/index.html"},{"revision":"bf2e8980870bb075e250b034320b371f","url":"./archives/2021/08/index.html"},{"revision":"0112f181764406328130eb9aa987a957","url":"./archives/2021/09/index.html"},{"revision":"8add683af10b72d42ad49c7a7cdcd266","url":"./archives/2021/index.html"},{"revision":"ca92200896f627513d9fcb0f7cd547e9","url":"./archives/2021/page/2/index.html"},{"revision":"37e7257b25dee7ce4ff1a55bcf44a9f1","url":"./archives/2021/page/3/index.html"},{"revision":"893a9c64e80f72613282d52faf24afd5","url":"./archives/index.html"},{"revision":"c66f9d9c534fba30763ed1c7eddcd1de","url":"./archives/page/2/index.html"},{"revision":"26d2979d5d21eb5537347c498fa9383b","url":"./archives/page/3/index.html"},{"revision":"f015f9e097aabbbdce907878742a9cdf","url":"./archives/page/4/index.html"},{"revision":"07881844ab6332d0c57ae14971c8c32f","url":"./archives/page/5/index.html"},{"revision":"744dd60627e3a9af146a42293bc27ba8","url":"./archives/page/6/index.html"},{"revision":"0cdd5b0df7c51d2459d6160f66d86098","url":"./archives/page/7/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"ff82c1930bf28f5085ab55702ae442bf","url":"./bangumis/index.html"},{"revision":"f9825df26698e07397aca81203a9b699","url":"./c-re.html"},{"revision":"e9f24cd68992049d2b46b50e961f3c5d","url":"./categories/index.html"},{"revision":"fb1bbb054a163e5b6b0f03c24fc46c1e","url":"./categories/教程-html/index.html"},{"revision":"77b5d1da9365455030e5a8fb32486e24","url":"./categories/文章/index.html"},{"revision":"cc38144a3e52d09979d88ff231028a9e","url":"./categories/文章/page/2/index.html"},{"revision":"a4ac379dac583e358c72286e03bed1ef","url":"./categories/文章/page/3/index.html"},{"revision":"adfbb9fdc6a5ab439895b3195fb54a2e","url":"./categories/文章/page/4/index.html"},{"revision":"db9adb9ca35a84ca916ef71b98a4b208","url":"./categories/文章/博客周年/index.html"},{"revision":"e3dc01a6774e62314a584c240b9e5c2d","url":"./categories/文章/后端/index.html"},{"revision":"763100770ddf6876e279c20d6033dcab","url":"./categories/文章/感受/index.html"},{"revision":"96cf998d917bfe6054d651a6c400251a","url":"./categories/文章/笔记/index.html"},{"revision":"d4b6f7ea23349135b4a30927b3448f9d","url":"./categories/文章/续集/index.html"},{"revision":"370a390e23106749bda5a844686b760d","url":"./categories/日记/index.html"},{"revision":"5e234af7a015db4806d98396caf7682d","url":"./categories/通知/index.html"},{"revision":"4b736b4c31a1c84652410b652676ff62","url":"./categories/通知/page/2/index.html"},{"revision":"ce42f1ae0758c46c55abffe4809efe53","url":"./codemao/join.html"},{"revision":"d37d316b82928880a192091be992579a","url":"./comments/index.html"},{"revision":"a9a3712ca10c5d65b7af395d9dc53289","url":"./css/bilibiliBanner.css"},{"revision":"fb15fb1adb17841704902aa9c227f729","url":"./css/bilicard.css"},{"revision":"aa687b8441c1dea2f0710f788723542f","url":"./css/card_botui.css"},{"revision":"808bbddc4f4c56aee97a7af07f1f364f","url":"./css/coin.css"},{"revision":"0a8e48088a60333db1759bf5cd1985ba","url":"./css/custom.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/customw.css"},{"revision":"8aae3872dd735df63ac60710f46e97be","url":"./css/gggwmlgxfc.css"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"085d261235446d6a10c1dbc04eec7e2c","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"195e0a3f1c37a8447e5fb490f36faff5","url":"./fc/index.html"},{"revision":"38934eac0567b33d3171ace7237366de","url":"./from.html"},{"revision":"72db74f4efc2b5a90b4e8de1f914abc5","url":"./index.html"},{"revision":"3977461395620c67690202f14bbc6058","url":"./js/bilibili-banner.js"},{"revision":"546b558e9e8b3c6952b530d467406ad7","url":"./js/botui_init.js"},{"revision":"6aea941743f41c0649d742bdc80df352","url":"./js/botui.js"},{"revision":"db0ef6fc56befa79cef5e478f9138324","url":"./js/coin.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"c56713403fe9375a51d3a0e660e80676","url":"./js/runtime.js"},{"revision":"fb9eaf607df5ea9ddfebfc57238add1d","url":"./js/SAO_Menu.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"91b7e2a555e0c80cac63cc0c490e69e8","url":"./js/weather.js"},{"revision":"2d3e4205fb0aab1c7e64101a9b6583b0","url":"./jump.html"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"eda6069d31a163cecd7a06b123b3bd05","url":"./link/index.html"},{"revision":"42e4950a21f49b6397207818bdc2dc56","url":"./manifest.json"},{"revision":"bca2ee0e2d35e70006415b84a15c8678","url":"./other-page/dead-links/index.html"},{"revision":"8bad99c125579fd1882d1c593e10f611","url":"./other-page/video/index.html"},{"revision":"faa1da7972c34f3b728605391942433a","url":"./other-page/ziyuan/index.html"},{"revision":"646d322157f3a5d88ed7acce2165cdce","url":"./other/index.html"},{"revision":"2b9110e8b014722f76093b6083d7b52f","url":"./other/manifest.json"},{"revision":"b2357b169f93ab4af021d7cfc1a1ba7a","url":"./other/s/NTRss88/index.html"},{"revision":"f4589ba24df3b6e148164c635bbd599c","url":"./page/2/index.html"},{"revision":"a37d8442e427d4949467127b31ccef1f","url":"./page/3/index.html"},{"revision":"13d01394ff15de42f537dd24876fbc11","url":"./pcre.html"},{"revision":"3042373f07d714782675f3b1e2a91ddc","url":"./random.html"},{"revision":"344c8ad40dbe3e3b43f3fc70c192fda1","url":"./shuoshuo/index.html"},{"revision":"1abd8d7081103840ec994da1e33dd1c8","url":"./support.html"},{"revision":"6237ff1459f50f82757c06d8a1da4cda","url":"./tags/2020/index.html"},{"revision":"dd75b28e721fc87fd078ff818b14655b","url":"./tags/404-网站/index.html"},{"revision":"c46b2b8a4ac5bb27662465a5d5d3cdbc","url":"./tags/android/index.html"},{"revision":"28738eb1f68fe2959f428435acda9b92","url":"./tags/Android/index.html"},{"revision":"53dfa7b871629a699481c5404a6f2c7f","url":"./tags/aplayer/index.html"},{"revision":"aae1a490fcbdbfdb2578c4a13bf74856","url":"./tags/app/index.html"},{"revision":"cf74f57d6b2915b48dffcf249fb9557a","url":"./tags/bilibili/index.html"},{"revision":"06d611b26e479e6db26eff19e6d53d46","url":"./tags/CF/index.html"},{"revision":"29a81b35c5f66ca5fc2a42f34ba1843d","url":"./tags/CFW/index.html"},{"revision":"ffc5d2e0251c77ccfe05e2b4f95487a1","url":"./tags/Cloud-flare/index.html"},{"revision":"3b423d98136090724e9e79afb3c527a3","url":"./tags/dao-voice/index.html"},{"revision":"5743df2ab6d404374306f2cd221a7804","url":"./tags/debian/index.html"},{"revision":"49873e0e29d56e50ce7db298849bdbc7","url":"./tags/download/index.html"},{"revision":"697cebfc6ca706abe9269f1f20e42775","url":"./tags/FA/index.html"},{"revision":"1f623e3763838bb859998f75727668da","url":"./tags/fusionapp/index.html"},{"revision":"ecab082bd4d2564b5f959ab854a44403","url":"./tags/gh-page/index.html"},{"revision":"418be832355b87ae0eb2d79f4eef91f2","url":"./tags/git/index.html"},{"revision":"f4a725711e013096b4d4c64093ecc60f","url":"./tags/gitee-page/index.html"},{"revision":"1d94b2a278fd0eacb7edb00050eb64d2","url":"./tags/gitee/index.html"},{"revision":"939e6fcf47e716cae63721c173bd9f44","url":"./tags/github-action/index.html"},{"revision":"3da93702549b957c279d97e1864a1075","url":"./tags/github-page/index.html"},{"revision":"cacc7bcf4768706532a578dcc61abdae","url":"./tags/github/index.html"},{"revision":"a9e2a8d8f5dc21fe5f1fe53a6980ab69","url":"./tags/github/page/2/index.html"},{"revision":"45c3987648adabe86c3de10ba32eed4f","url":"./tags/githubpage/index.html"},{"revision":"0bdab7c8dd6405a118b53e3e7488b419","url":"./tags/hello-world/index.html"},{"revision":"4efd9c44db2536f3920801b39f51cd38","url":"./tags/hexo/index.html"},{"revision":"514c747d71055854d6adb7fb8f7ce409","url":"./tags/html/index.html"},{"revision":"b0d7aecfd10c985eaf480ae5f8050fff","url":"./tags/iframe/index.html"},{"revision":"76513a20098c44d1c34b5bfb4583164c","url":"./tags/index.html"},{"revision":"1ba387ef78ebffe27d2beb2006d354c5","url":"./tags/java/index.html"},{"revision":"e0780dab46dfceefbbaeb555d71e6a99","url":"./tags/linux/index.html"},{"revision":"65df23204ba2acf46aae2b7d5fbb3a31","url":"./tags/liunx/index.html"},{"revision":"2beacd9095097678a5623aa5b45d67d4","url":"./tags/markdown/index.html"},{"revision":"2cbdcb762f69c180c91767244519529e","url":"./tags/md/index.html"},{"revision":"1845cbdf266b0fa32b5d0418f4cde378","url":"./tags/md编辑器/index.html"},{"revision":"2f9d07e91ac197b53ad15bc30185b6ea","url":"./tags/minecraft-JE/index.html"},{"revision":"10c6fc886f42d7e5177bb2df7dce2373","url":"./tags/minecraft/index.html"},{"revision":"aefc3fb9e1c4e1d160dd1e317c11a81f","url":"./tags/minecraftJE/index.html"},{"revision":"e26c53fcf10b74258f065370d418808f","url":"./tags/node-js/index.html"},{"revision":"c37465794ffc726de4c0f9b115f01909","url":"./tags/node/index.html"},{"revision":"7fa20cdc60188889ad4dd1e92a9b72e4","url":"./tags/php/index.html"},{"revision":"2ae71b36355c675605eb3cbe7afd951f","url":"./tags/picgo/index.html"},{"revision":"31a2814ee7f149de1cda3c309f9a66d3","url":"./tags/python/index.html"},{"revision":"28594eb792fa94ec1730c30a218392c5","url":"./tags/ssh/index.html"},{"revision":"8321cd63b086dbd806b246bd4514102c","url":"./tags/termux/index.html"},{"revision":"5246d812a11197224541a17a9e55b439","url":"./tags/Termux/index.html"},{"revision":"672ef9b2f9b38c989b1b877f8942587b","url":"./tags/undertale/index.html"},{"revision":"88e9fc82e444205512dba94bd5f5534a","url":"./tags/ut/index.html"},{"revision":"21839e6b74a86ed75de43aa59ef0ec85","url":"./tags/vercel/index.html"},{"revision":"5557a76303ccc2a39ac0746ceed0fc5f","url":"./tags/website/index.html"},{"revision":"d316a4fb933df36e8cd3db54a38c89b5","url":"./tags/win10安装/index.html"},{"revision":"abe25269f9c2f2c6e94a7fcbf7ff1be9","url":"./tags/windows/index.html"},{"revision":"ec56af3849a56481a41c59aeaff5e4b1","url":"./tags/Windows/index.html"},{"revision":"ac126bd97741d8be2a440031a864b4f8","url":"./tags/Windows10/index.html"},{"revision":"b4c70ae6851fc40d9490ea5aba0dfa15","url":"./tags/Windows11/index.html"},{"revision":"2dc637fa5f70ef477cd9b5853b04aacf","url":"./tags/wmz-blog/index.html"},{"revision":"f6081841fa680eaa036edfa56c11ae32","url":"./tags/一周年/index.html"},{"revision":"559d5ff20b3bd29b3e5af3bff7f46745","url":"./tags/传说之下/index.html"},{"revision":"af13060fc472d82d5d4d9e5b61c85ef2","url":"./tags/免翻墙/index.html"},{"revision":"d9e0722b8f67d4397baa6c7e208bf107","url":"./tags/动态网页/index.html"},{"revision":"dff6d4a3c74e27c0cb460e82a074521f","url":"./tags/博客/index.html"},{"revision":"ab8a787ad2aac641210b6ea18ef9b244","url":"./tags/回顾/index.html"},{"revision":"cb384575e0935168043378c08821f964","url":"./tags/图床/index.html"},{"revision":"aaddafb2d54d6a0f16311b9269a06ac4","url":"./tags/在线聊天/index.html"},{"revision":"722b51d26eed86c4dc346bac2dfa31c2","url":"./tags/安装/index.html"},{"revision":"07bef7d5c6314b0d0107ffec70219315","url":"./tags/工具/index.html"},{"revision":"a82831715fa32ed7e67bd512a9ee4a52","url":"./tags/我的世界/index.html"},{"revision":"34bf53b6f8ed858de488a62e68dc70d8","url":"./tags/折腾/index.html"},{"revision":"429f14afa883b8bd0dd502cf17daf89c","url":"./tags/搭建/index.html"},{"revision":"0bc6a6dad59128a10622578dca7e4028","url":"./tags/教程/index.html"},{"revision":"c8c2c310193d786f74769f5f3f7e83ab","url":"./tags/日记/index.html"},{"revision":"d46075cc9b28d9e5e25a51e29f39e84a","url":"./tags/更换/index.html"},{"revision":"21a95ae051b1f692d22cd40cce758bf9","url":"./tags/更新/index.html"},{"revision":"db6306bb129ec27ee53b271353adab6e","url":"./tags/更新了/index.html"},{"revision":"99a1c793b45cc7e2819a532d5a735195","url":"./tags/服务器/index.html"},{"revision":"08308b16c95c99e6ac9464cff75c9408","url":"./tags/测试/index.html"},{"revision":"55db2620a97311c281718e2693f18e26","url":"./tags/百度统计/index.html"},{"revision":"cc7da4b9654c75e8f4a37cf89edf0ea6","url":"./tags/看法/index.html"},{"revision":"07b8834c09ee91e816dcd2e528714f89","url":"./tags/笔记/index.html"},{"revision":"9bce18a41bf22ecf72322a58b6f5dc38","url":"./tags/系统安装/index.html"},{"revision":"25128f972e29a398b47a2317152304a6","url":"./tags/网站/index.html"},{"revision":"e645a4eb90185e35363fddc8837c1e47","url":"./tags/袁隆平/index.html"},{"revision":"d0aaa4561785d466fd65dd8d75f87ea1","url":"./tags/迷你世界/index.html"},{"revision":"bba7c271c2c25fe1da8249a05b752631","url":"./tags/通知/index.html"},{"revision":"c65a4e266ee7129aae1a1be10d82035b","url":"./tags/邮箱/index.html"},{"revision":"2d6caf609cda04921be0c03f4c4f1fec","url":"./tags/随笔/index.html"},{"revision":"b215dbe1bbe2de1b8135ed6bd2b0f770","url":"./twikoo.json"},{"revision":"e9d35b4ea736a349ca53f6b0a334aa41","url":"./update/index.html"},{"revision":"3896fa8ddd007e4683fd3db8cf07cfcf","url":"./wsimg/funnytitle.js"},{"revision":"bbd7ebfdb98e9d418cae6293e23fd6bc","url":"./wsimg/index-1.js"},{"revision":"0002c2fe2a451f9a6e14aad293713967","url":"./wsimg/index1.css"},{"revision":"1fd67c07ce48b67e9629bdd759c2efea","url":"./wsimg/README.html"},{"revision":"4d0a33ed83c3e3f2e4fd5e8031f9c39b","url":"./y-re.html"}],{
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
