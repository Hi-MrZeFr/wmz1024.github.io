const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"fa82e63ba6b2b338ef35668315120048","url":"./11f1a2fc.html"},{"revision":"219f057dbcbf8fe003520de73f31a6df","url":"./1f7e3876.html"},{"revision":"dc7be0895a60654a1fee7e017e393cba","url":"./2b244555.html"},{"revision":"5469aa32abfc5146ddb0889fb589f61b","url":"./2c7854e6.html"},{"revision":"4c7e5cc5cc03f9852b9e5cd0ed100d2e","url":"./2ee2518d.html"},{"revision":"87498fbffc7b58ae48d971a8d6ea8b30","url":"./30422b3f.html"},{"revision":"34b4cb0d2b29d2153e8c6983568e051f","url":"./3494bf09.html"},{"revision":"a72cf313a07a03ca7519b22a762c94c3","url":"./3e4cf0e1.html"},{"revision":"45ca1e2f64eebc296f694eb4a0271b5b","url":"./404.html"},{"revision":"0e1a60987349bcb25e98ffeddd4d5acb","url":"./4283e7c2.html"},{"revision":"99bea2a6b6b61a81935edc9b6d8948e7","url":"./47008bfe.html"},{"revision":"c07ce5f46cda96ceb28d5ed1a7c34cda","url":"./496761e5.html"},{"revision":"c844f5789b0a2c5616528f2950f138f1","url":"./49ab854f.html"},{"revision":"f24d2983e46998a4606438330e894415","url":"./4a17b156.html"},{"revision":"e75e973a38f9cff8c3b6c55269fbb712","url":"./51f11683.html"},{"revision":"5a907bd3817f9df3b78f1f1c10216fbe","url":"./5b2b3473.html"},{"revision":"9d6645348299a4b35f58947998af5292","url":"./6057642a.html"},{"revision":"72571156744e53c6a9ba6472d591c39f","url":"./60816787.html"},{"revision":"a8c3a8b2cfda1813b9c7cb36f47f9c74","url":"./68083ed.html"},{"revision":"e5e38772b51586d39f4f2fd15f165c5c","url":"./71e2d2d3.html"},{"revision":"9c9dad4e7b51442028da151ffd7d4940","url":"./748a29a4.html"},{"revision":"b4cec294d019f129bc108952ef8c9d41","url":"./7bc26341.html"},{"revision":"9a82dc34b127bbd4bafed9093d15a4a8","url":"./7cee40bf.html"},{"revision":"ef176104165cdcfadea9a0763a33c5f8","url":"./836982c.html"},{"revision":"edbf3c013ea172db57aeec2dc03d6e0a","url":"./83d82948.html"},{"revision":"b8a1214b4c881c9148a6104e471989a8","url":"./87e1c0bc.html"},{"revision":"6adc0d62a4cf7069364e520e27be72e3","url":"./8856403.html"},{"revision":"9b95be574f8a25ef794db5adafd92b9e","url":"./8bc291e6.html"},{"revision":"776f46d89f12458cdc5645da22fa11ee","url":"./8d39085b.html"},{"revision":"a62564ecf34411f2e327bf5aee3d73e9","url":"./9341b494.html"},{"revision":"71d39e81bb783c5383ca32ea5318b487","url":"./96ccccce.html"},{"revision":"56c8f42a41f0a5996eeacba79573d960","url":"./98d114e8.html"},{"revision":"a7ec90453c20569ee7af0eac4d7a6171","url":"./a1be303c.html"},{"revision":"601f72914c05a75bec50eadd24eef683","url":"./a65bc6b8.html"},{"revision":"370cc292022a5011b794417357fb7d8f","url":"./a81556f1.html"},{"revision":"53815304b35fe56a649dc9c7457c769d","url":"./a8acdd67.html"},{"revision":"8c8e83788fc61bb79a3a31a579b9e393","url":"./aa96c821.html"},{"revision":"ef79e137c68379f33388dedff81be473","url":"./ab1d37b.html"},{"revision":"f00e3fbfff412706d3cc4c1c1f5d28f6","url":"./about/index.html"},{"revision":"7375943327659f9d9eeb34ec794e57a1","url":"./aeb2d36.html"},{"revision":"85043a8b0ab6439b1003d365d6e499aa","url":"./af886b34.html"},{"revision":"3f65ef2a4f0584cde61883c67effd909","url":"./archives/2020/08/index.html"},{"revision":"d7d157f78de1d89b5d20256d4e0715bc","url":"./archives/2020/08/page/2/index.html"},{"revision":"8fa06a99d8cea778f2d8731da4b2718f","url":"./archives/2020/08/page/3/index.html"},{"revision":"620408846deb58e5d9138c866aa5da0c","url":"./archives/2020/09/index.html"},{"revision":"b25528a6eb2a9f925a7d548c1234078f","url":"./archives/2020/09/page/2/index.html"},{"revision":"3bc615267998d005c032b664bc420476","url":"./archives/2020/10/index.html"},{"revision":"84dd7aef28a3401d523b5f93b88863ba","url":"./archives/2020/11/index.html"},{"revision":"67965eebdd337e005b3c04f97cbc1ff8","url":"./archives/2020/index.html"},{"revision":"67b700ed4da00a17aa45a1b78f40f282","url":"./archives/2020/page/2/index.html"},{"revision":"ae9eb36dba16e8d6480e7812e4eb7873","url":"./archives/2020/page/3/index.html"},{"revision":"3dfbb644bf2f0409546761a69fdb6e6a","url":"./archives/2020/page/4/index.html"},{"revision":"49e5ac43c74345dc677c44a4d0bde975","url":"./archives/2021/02/index.html"},{"revision":"619a99f9c190494fc575290b642831e2","url":"./archives/2021/04/index.html"},{"revision":"e32f7ba23a0ae5cc630e4f8b1ce31c2d","url":"./archives/2021/05/index.html"},{"revision":"420fd1a4916990ddab0ca40117e42f74","url":"./archives/2021/06/index.html"},{"revision":"aa006ecf87c07f9a2c289da6c15b214c","url":"./archives/2021/07/index.html"},{"revision":"2f8eeac2f6ae209566016379cbe9ee98","url":"./archives/2021/08/index.html"},{"revision":"f7cd74f875ec128b25793248a16efb40","url":"./archives/2021/index.html"},{"revision":"8e8d3889b53b86ef4a1c62e8867d12a5","url":"./archives/2021/page/2/index.html"},{"revision":"b88b469bf4615ed3d25d8e56f7c4211f","url":"./archives/2021/page/3/index.html"},{"revision":"d9b7a7558bc99355599d239ab6988422","url":"./archives/index.html"},{"revision":"9c4af490bd2b00b6665fba9075376991","url":"./archives/page/2/index.html"},{"revision":"6a34c2e0cd9e4d4892860f823337537e","url":"./archives/page/3/index.html"},{"revision":"cb9957ddf89857c6ac6c6908f5bb6b7a","url":"./archives/page/4/index.html"},{"revision":"c9e794205a54796b8c19a58625a1d5a8","url":"./archives/page/5/index.html"},{"revision":"fdf98ed0e1840d9e27b732a5bf53002a","url":"./archives/page/6/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"8d59c769e023a86aa67fb9782864637e","url":"./atom.xml"},{"revision":"520b04058bf13402d82cb0efc66abd47","url":"./b28868d6.html"},{"revision":"41e6f6ff46244efcaa5ab63780b96c94","url":"./baidusitemap.xml"},{"revision":"9eb64852d1f1f74645033cf3410de54a","url":"./bangumis/index.html"},{"revision":"e13f57087960f914a45307149e8ce958","url":"./bf3a65a4.html"},{"revision":"40ca4b7de4b27a807ad9c54ec1b556e7","url":"./c-re.html"},{"revision":"4eabe2579341ac87e602416030ec371a","url":"./c1ee638c.html"},{"revision":"a6944ff4c5fec44c3e7a4ff9e6c928de","url":"./c3119b08.html"},{"revision":"20b13449e8c3ba296c40592d7cde0c50","url":"./c48ef0f6.html"},{"revision":"1b292a03a553004733d854a45712fb7b","url":"./c53c84e7.html"},{"revision":"43a2837f81da3f4148f1585c1ffd22d9","url":"./c6c9c4db.html"},{"revision":"961ee2032279094603096fd45e797a62","url":"./categories/index.html"},{"revision":"c6b8f3255a6cae5208af5c721bf3e35f","url":"./categories/教程-html/index.html"},{"revision":"e72bf74e1a1c69cefcb00352c2eb1b62","url":"./categories/文章/index.html"},{"revision":"285dd17efc5d2f276370513ccf4e4859","url":"./categories/文章/page/2/index.html"},{"revision":"6464978afbe25d46ebc95d5aa7a26ac9","url":"./categories/文章/page/3/index.html"},{"revision":"fc198ecd9ce4f54c96635e921b4b46b2","url":"./categories/文章/page/4/index.html"},{"revision":"1467a3112d3d951b15bbf6ff244af977","url":"./categories/文章/博客周年/index.html"},{"revision":"3c5ad3abcfa455e3f4a18a7cbf554192","url":"./categories/文章/后端/index.html"},{"revision":"1425bc2863849d3863bad6c421c09fd7","url":"./categories/文章/笔记/index.html"},{"revision":"cda2307275dc6607e27c2b18fa2fcc39","url":"./categories/文章/续集/index.html"},{"revision":"e266126b89fd82a4bf11927729fbed71","url":"./categories/日记/index.html"},{"revision":"bea5e9a9ba3cfdbbe85ad7d9160ecb6f","url":"./categories/通知/index.html"},{"revision":"2adaf00a1508031e0aca45bc7f5db1cf","url":"./categories/通知/page/2/index.html"},{"revision":"5137bdf7923abeffa0431e88cefb796e","url":"./cd843bca.html"},{"revision":"3f77f44f6f5d02cab50bcb9fa71f0cab","url":"./codemao/join.html"},{"revision":"83863556e45fb612df90cbe6cb1e3a2e","url":"./comments/index.html"},{"revision":"a9a3712ca10c5d65b7af395d9dc53289","url":"./css/bilibiliBanner.css"},{"revision":"fb15fb1adb17841704902aa9c227f729","url":"./css/bilicard.css"},{"revision":"aa687b8441c1dea2f0710f788723542f","url":"./css/card_botui.css"},{"revision":"808bbddc4f4c56aee97a7af07f1f364f","url":"./css/coin.css"},{"revision":"0a8e48088a60333db1759bf5cd1985ba","url":"./css/custom.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/customw.css"},{"revision":"8aae3872dd735df63ac60710f46e97be","url":"./css/gggwmlgxfc.css"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"085d261235446d6a10c1dbc04eec7e2c","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"9723fdb774a5c674889a36127f6840b7","url":"./d28a09fd.html"},{"revision":"ed34deb4747b1ce9639f1d3b4db87495","url":"./d2bd8f46.html"},{"revision":"0c7c7e2fc86f3ab5c7b6534d171b3ff7","url":"./d46f6783.html"},{"revision":"e84dcc9e401e40efc9dadbd1a223c79f","url":"./da033cd3.html"},{"revision":"1842046765d5e89381ece7729b3e7c86","url":"./db5f4c9.html"},{"revision":"2b860fcd8bf161340e75ca1a46c5cf06","url":"./dfd2f59a.html"},{"revision":"f73e49072678dff8189c4dbf76be8996","url":"./e4d07d47.html"},{"revision":"1ea1a0e6cff3d6ad2d50bc6a1d0335d5","url":"./ede49718.html"},{"revision":"60314d97b39bdee48c2a7736b2200727","url":"./ee30bc12.html"},{"revision":"a9781a56e34c3b7382b2de168ff2b3a4","url":"./f053c80.html"},{"revision":"2b297b8d9943ba62cdb5e35cbef25477","url":"./f6485125.html"},{"revision":"5a546f11c4633d8eba83b3706fd743e3","url":"./fa1bfef3.html"},{"revision":"92a692fc903f452c37e8ea0d7c529560","url":"./fcircle/index.html"},{"revision":"ee0af92b9cf83a7fd8390cdf6c7186e3","url":"./fe275fd0.html"},{"revision":"d42f7e8f3c5a1d49c374916e3d588124","url":"./from.html"},{"revision":"33dbc6367b950e49b4af0be047b8666c","url":"./index.html"},{"revision":"3977461395620c67690202f14bbc6058","url":"./js/bilibili-banner.js"},{"revision":"546b558e9e8b3c6952b530d467406ad7","url":"./js/botui_init.js"},{"revision":"6aea941743f41c0649d742bdc80df352","url":"./js/botui.js"},{"revision":"db0ef6fc56befa79cef5e478f9138324","url":"./js/coin.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"c56713403fe9375a51d3a0e660e80676","url":"./js/runtime.js"},{"revision":"fb9eaf607df5ea9ddfebfc57238add1d","url":"./js/SAO_Menu.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"60663de55410a8e5a2d1f71904dd022a","url":"./jump.html"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"96f358804165277d1b5257f0441f8601","url":"./link/index.html"},{"revision":"d2385edbbbc34032b90a29762c72fbb1","url":"./manifest.json"},{"revision":"9defdafe8c3bcacf2a00f6196eb1903c","url":"./other-page/dead-links/index.html"},{"revision":"11b34fc0375833ed592f02667bfd42fc","url":"./other-page/video/index.html"},{"revision":"33dbf2b1c9e82c8e22a940b7aa860c30","url":"./other-page/ziyuan/index.html"},{"revision":"03b43f1530e1e384935abc1bb9ad23bb","url":"./other/index.html"},{"revision":"d6b7dcedcfbb32ad865950e29d00838f","url":"./other/s/NTRss88/index.html"},{"revision":"b004b69e638e5ea9baee213d68d5cbdd","url":"./page/2/index.html"},{"revision":"d8f0f09e70953efc318365075ab35997","url":"./pcre.html"},{"revision":"8634029ebce49a6f6c46d460fcf10046","url":"./random.html"},{"revision":"81b9beeac87d7bccece831f7df5f3b78","url":"./search.xml"},{"revision":"9b4f5d78171baf66ee92adde05fc1c10","url":"./service-worker.js"},{"revision":"0107b15c5b7306def0d886979936dd9c","url":"./shuoshuo/index.html"},{"revision":"fdc084375f19c96624d53b9521201dc3","url":"./sitemap.xml"},{"revision":"c4ad332318c24c129b593e63c467a911","url":"./support.html"},{"revision":"d534f2e0f58d39dc02e1fa9cd208aa1e","url":"./tags/2020/index.html"},{"revision":"3969b1a5e3a741ac6dadc12f180fa462","url":"./tags/404-网站/index.html"},{"revision":"ab6dde1676c91c4eb9f5388ca8022257","url":"./tags/android/index.html"},{"revision":"89936fa56d45decd9c91bef6b79eb3b1","url":"./tags/aplayer/index.html"},{"revision":"2114da71f441d9fa0108ff5703eb6ee0","url":"./tags/app/index.html"},{"revision":"19fa38767d8fd4a1813821ff216109b4","url":"./tags/bilibili/index.html"},{"revision":"a5ecf201699485f9ebb0f6bed524caa8","url":"./tags/CF/index.html"},{"revision":"ec2348f0ce045a5d937e69635b820077","url":"./tags/CFW/index.html"},{"revision":"4da92b25b2a93791181f3b4b303aa6ae","url":"./tags/Cloud-flare/index.html"},{"revision":"064b45dcab5d08ef3a985b2609a87be4","url":"./tags/dao-voice/index.html"},{"revision":"4b6ec0d078cc5d4e184a631f9c8b4d4e","url":"./tags/debian/index.html"},{"revision":"e8b805f015206bd2b5912354eafc2c3b","url":"./tags/download/index.html"},{"revision":"419d0fc925c8c51dd7417cfcd863b393","url":"./tags/FA/index.html"},{"revision":"9d8f997e1089f29e2ecef70e2340d001","url":"./tags/fusionapp/index.html"},{"revision":"9add2bce08548afea39ca3af89c92065","url":"./tags/gh-page/index.html"},{"revision":"8223e3e486959c9d4c0004a13c1b2a4d","url":"./tags/git/index.html"},{"revision":"8e31da6af76e54a4f421d9d60db3b6de","url":"./tags/gitee-page/index.html"},{"revision":"a5b659c9a4a9d39a4f42818df43de5c5","url":"./tags/gitee/index.html"},{"revision":"ff0ac519a06d8755ed6a68fa55fb3e9d","url":"./tags/github-action/index.html"},{"revision":"1ca69738a25086bfca839b6388252f1a","url":"./tags/github-page/index.html"},{"revision":"2e94176a93f78550eb0e73555eec3437","url":"./tags/github/index.html"},{"revision":"2019bd26676e2c84747b1b88b299f607","url":"./tags/github/page/2/index.html"},{"revision":"7bc248757e09b63df01d39ca3555f41d","url":"./tags/githubpage/index.html"},{"revision":"f4089d43aafc764d014214d713cea219","url":"./tags/hello-world/index.html"},{"revision":"087e13f612ecdcdc6326b56119a4e4eb","url":"./tags/hexo/index.html"},{"revision":"4df3a97fab2c4de3244938d91fbcea65","url":"./tags/html/index.html"},{"revision":"f5ac0eaaaa5e1e9b7b3288be6042ecef","url":"./tags/iframe/index.html"},{"revision":"ce2a9787c159b5e6e243cb7bc3d2e6b8","url":"./tags/index.html"},{"revision":"d35b0ab9b1025134ce4e753992c7dbd0","url":"./tags/java/index.html"},{"revision":"efe7021dffe8fc4ed0b4400400ebc66d","url":"./tags/linux/index.html"},{"revision":"d18f652bd3ab9a95c25c020e53fe0b1f","url":"./tags/liunx/index.html"},{"revision":"db145ac7a5350f19ef091312fdab66a9","url":"./tags/markdown/index.html"},{"revision":"4b51031c570fd645f3f0b989e9cadc3b","url":"./tags/md/index.html"},{"revision":"b230016b4c12f0d27d15939837d2c89b","url":"./tags/md编辑器/index.html"},{"revision":"448d91333f1d89dafd08293a67914834","url":"./tags/minecraft-JE/index.html"},{"revision":"1b346f361593170d9d5cb4e877a77c16","url":"./tags/minecraft/index.html"},{"revision":"7b851d20f0160b79b43ad07d94b0333a","url":"./tags/minecraftJE/index.html"},{"revision":"5d89ac61d155e3c667450f8f27beec78","url":"./tags/node-js/index.html"},{"revision":"3a42ac4e23176735604f5f65a34a3708","url":"./tags/node/index.html"},{"revision":"ac4c8cf88b905ac95218e4b32bcd004b","url":"./tags/php/index.html"},{"revision":"b2d2618ca1d8e57f11a68542d5947993","url":"./tags/picgo/index.html"},{"revision":"bef430e59c84fb20893af3bed5022bba","url":"./tags/python/index.html"},{"revision":"a8f57b9d56c609bf9a341aa005000b3d","url":"./tags/ssh/index.html"},{"revision":"326eda824cf933d86c8e9f64c6740dbb","url":"./tags/termux/index.html"},{"revision":"6cefd9d41554b5d8f1959ae38ebf4cb1","url":"./tags/undertale/index.html"},{"revision":"5d8b5657643d3a40ff347af77069d3bb","url":"./tags/ut/index.html"},{"revision":"ca4768017fb0c2ef19c91d2ba8405bb6","url":"./tags/vercel/index.html"},{"revision":"527760dc1eda1c3f2dd596dd4eeaff0b","url":"./tags/website/index.html"},{"revision":"f06b96f0b0a32e764b70da76f1a41c54","url":"./tags/win10安装/index.html"},{"revision":"2c67aa26f062256c771898f1b184c65f","url":"./tags/Windows/index.html"},{"revision":"452d325e06ec7466df8765c5d8ae85d5","url":"./tags/Windows10/index.html"},{"revision":"9568600f54e69c2f8ff72ca8b7dd4a83","url":"./tags/wmz-blog/index.html"},{"revision":"b8db50d68479d0ead7e710e8628ad202","url":"./tags/一周年/index.html"},{"revision":"fee546fac130d419d301aba3d521899a","url":"./tags/传说之下/index.html"},{"revision":"4761238ab8ff4efe4a8e4dead8b0c39a","url":"./tags/免翻墙/index.html"},{"revision":"9b515dcfb6c941334498f349a5be7b70","url":"./tags/动态网页/index.html"},{"revision":"7d717b5db0af62c6942b5b19b9ebc018","url":"./tags/博客/index.html"},{"revision":"488f30daaedf9b0d715a50c6fdfa8b83","url":"./tags/回顾/index.html"},{"revision":"fd42c1155ec20db128fa8dc102b13fab","url":"./tags/图床/index.html"},{"revision":"94f4794236eaf109038a4a194a27b56e","url":"./tags/在线聊天/index.html"},{"revision":"03f17519f695ef4857cb3ae30de4b865","url":"./tags/安装/index.html"},{"revision":"d291974fa370e83fb8ad94514da64b96","url":"./tags/工具/index.html"},{"revision":"042e37c2263061d22ec63fadc4c80adf","url":"./tags/我的世界/index.html"},{"revision":"595374a58f6c2473e645d33ddfe9709f","url":"./tags/折腾/index.html"},{"revision":"ef3dd237c7f352fda3a929de8262bc51","url":"./tags/搭建/index.html"},{"revision":"9f2c0f3da3351adc79dd95a73489dda6","url":"./tags/教程/index.html"},{"revision":"379ed718cd9159565dc14770fa45438a","url":"./tags/日记/index.html"},{"revision":"61fe59d8d75d0aa2bf7ade3c5ec60c80","url":"./tags/更换/index.html"},{"revision":"3a2287de1a82995aa5cb082801fd2aaf","url":"./tags/更新/index.html"},{"revision":"888423647e37a60adafcd0a6758f743e","url":"./tags/更新了/index.html"},{"revision":"4a009d680f54be59be0c49ef3e8a282d","url":"./tags/服务器/index.html"},{"revision":"ba8b0a80195583f6425b305496887e76","url":"./tags/测试/index.html"},{"revision":"578e8066820413cfcd3ec3e7b7d2a311","url":"./tags/百度统计/index.html"},{"revision":"f31e92c2aed5daa7c3d7e028c2244a74","url":"./tags/看法/index.html"},{"revision":"27382748805e80ed0871e4e04936244e","url":"./tags/笔记/index.html"},{"revision":"5a54eba012966c93b17bdc60549acaca","url":"./tags/系统安装/index.html"},{"revision":"5104d6edb15e3099f12256b3614199b3","url":"./tags/袁隆平/index.html"},{"revision":"2b968fd2744d2c637616e189bc29f97c","url":"./tags/迷你世界/index.html"},{"revision":"be053b51a5619ae16bf3d5e93a5e5cf2","url":"./tags/通知/index.html"},{"revision":"e68e97b88ab2c83e4994ffa7efc7cf0d","url":"./tags/邮箱/index.html"},{"revision":"0c91d012a79d4d25f12c52309a0e3eff","url":"./tags/随笔/index.html"},{"revision":"587784cdcc61596315790d403c6c8035","url":"./update/index.html"},{"revision":"0497fcadf6b83c75ec4df94ab5067d20","url":"./workbox-f7715658.js"},{"revision":"2cc326181fe44d1db9004867e62cd97f","url":"./wsimg/browserconfig.xml"},{"revision":"2c21fc178283614c4f4fce9bc6d02b30","url":"./wsimg/funnytitle.js"},{"revision":"151ad43939a0d1a895c56531a7db62c0","url":"./wsimg/index-1.js"},{"revision":"894ad29814051e75a07b165622548b4b","url":"./wsimg/index1.css"},{"revision":"5549ddde86ecf68239e9c02266e99b22","url":"./wsimg/README.html"},{"revision":"ef6d498e54f639c8ee95928ea9904bc7","url":"./y-re.html"}],{
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