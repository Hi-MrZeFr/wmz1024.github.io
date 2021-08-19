const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"436ef0666e2b9b39cf080d35fc38756b","url":"./11f1a2fc.html"},{"revision":"0b1dc8c406a5b31b748feb33f9a02415","url":"./1f7e3876.html"},{"revision":"afcbed8fbfb3f277cd0010aaeed375a3","url":"./2b244555.html"},{"revision":"d8fdc28040bd874ef60c8abb85e2eb58","url":"./2c7854e6.html"},{"revision":"c77378a502e72d07e395f0179c7376bc","url":"./2ee2518d.html"},{"revision":"7d23bb9bda09b380e4a3f1ad9f6cc48d","url":"./30422b3f.html"},{"revision":"a10d72e281f9d2056b09029923572f74","url":"./3494bf09.html"},{"revision":"8da14ef5ca3a0757efb998eed9bed258","url":"./3e4cf0e1.html"},{"revision":"f3225259236fd34d5f3f194318ba895f","url":"./404.html"},{"revision":"f1c976d70e0488c1e3866f9ff448a668","url":"./4283e7c2.html"},{"revision":"44b580f767433b7f3063863dd8d50962","url":"./47008bfe.html"},{"revision":"1bbee11fe43ad8785cf0dd4ef0848bae","url":"./496761e5.html"},{"revision":"9a2b000b589e0ebb7d0c85df5b4e844e","url":"./49ab854f.html"},{"revision":"b4822fadefbfa69562ebdcb4ebb3238e","url":"./4a17b156.html"},{"revision":"344c1a8ca319db33a68e050f4ccee59d","url":"./51f11683.html"},{"revision":"be6e234f13ac9082a2318fa27f495546","url":"./5b2b3473.html"},{"revision":"b57c4a7ad727bb4bb3cc40af1fedd475","url":"./6057642a.html"},{"revision":"0e59f388f0716c9c15d4d62492790fc7","url":"./60816787.html"},{"revision":"d30ac48741f750b091860c35bfd0ae6a","url":"./68083ed.html"},{"revision":"a6c34bb112f75fb09227b4a795ff7a6b","url":"./71e2d2d3.html"},{"revision":"6fba22c2e40b36e11500e2ba7ad7ed3c","url":"./748a29a4.html"},{"revision":"0a6133ce5f7bffdd72641a2c0af22196","url":"./7bc26341.html"},{"revision":"3558e49217cc4d170c6e1e098caff2e7","url":"./7cee40bf.html"},{"revision":"13f4fe482f24c344d630df2089c91bb7","url":"./836982c.html"},{"revision":"23e911e3e8bcf2df3b4ee3e15e772a96","url":"./83d82948.html"},{"revision":"eedf5ff64bfe974706ec6fe70626b070","url":"./87e1c0bc.html"},{"revision":"1fb370cee04566c46b48605a6810f16a","url":"./8856403.html"},{"revision":"3646196d8eee575a05123c4aeacc0b9d","url":"./8bc291e6.html"},{"revision":"e636a7972a27dc5b512e95f278954c18","url":"./8d39085b.html"},{"revision":"bfc12bed29cdfa504e14b7b0620d8fcf","url":"./9341b494.html"},{"revision":"c5607467738202882c291217e21f6a03","url":"./96ccccce.html"},{"revision":"d5c4b21058235cd939a51fffc73a5e03","url":"./98d114e8.html"},{"revision":"191a909b13d962d1d32624f0e3233477","url":"./a1be303c.html"},{"revision":"3f24a3033e229531e1235383838c672f","url":"./a65bc6b8.html"},{"revision":"a6cc999da4261dc409545e66d0d864d0","url":"./a81556f1.html"},{"revision":"cf436ac795927a7c2790e1b5fb4d6dc3","url":"./a8acdd67.html"},{"revision":"5e869389b2669781bd4cbb28a0a9b844","url":"./aa96c821.html"},{"revision":"f288080050045a27cd517c424202c6c3","url":"./ab1d37b.html"},{"revision":"09f085b42545392335859cbd993d5f81","url":"./about/index.html"},{"revision":"7f36e14fdef8967e2f498c2a99fa43c8","url":"./aeb2d36.html"},{"revision":"248498c54f0e6eaac624db66bee92fe5","url":"./af886b34.html"},{"revision":"04d52babd372df369fed863f7647d284","url":"./archives/2020/08/index.html"},{"revision":"5d6fdb9e73364b522b3a2ea190b5e6af","url":"./archives/2020/08/page/2/index.html"},{"revision":"806c15649aecee71fb8d0254fe5b3b73","url":"./archives/2020/08/page/3/index.html"},{"revision":"5adc48eca1f6ba6332889d91acd01b6f","url":"./archives/2020/09/index.html"},{"revision":"a0bf4dc3954b70187594e38828468777","url":"./archives/2020/09/page/2/index.html"},{"revision":"c7ffa0a8337a5f10b8fb6171e79701d4","url":"./archives/2020/10/index.html"},{"revision":"de9f9a1f233df4d7e7c4c01c65cd402c","url":"./archives/2020/11/index.html"},{"revision":"d0409273bb598c024cd66ddbd4577896","url":"./archives/2020/index.html"},{"revision":"e0f43887aac9bd68640cf8ea8575d40c","url":"./archives/2020/page/2/index.html"},{"revision":"0950ca3bee8bf0f427e0dc5890a5bb9c","url":"./archives/2020/page/3/index.html"},{"revision":"d020e8f13184eb98ca1bbbda9fb882af","url":"./archives/2020/page/4/index.html"},{"revision":"bfafc4029bf6205061c54d94ebb53f4e","url":"./archives/2021/02/index.html"},{"revision":"89de48fd94b189cd908bc5f0ea6bdf07","url":"./archives/2021/03/index.html"},{"revision":"e96b80effda8724e6eb5103d817e2380","url":"./archives/2021/04/index.html"},{"revision":"3058b7c40f8444209e123de6ebd0c4c6","url":"./archives/2021/05/index.html"},{"revision":"073a517e72574f531a3a46d5b9b30140","url":"./archives/2021/06/index.html"},{"revision":"dde5fe17b4835c4cbdc4ed6fadd8a9e4","url":"./archives/2021/07/index.html"},{"revision":"a8661f05fdda7a30bbc7ddfd72bde4b3","url":"./archives/2021/08/index.html"},{"revision":"73ae973382a4fb3f20c7891cc6ce6bec","url":"./archives/2021/index.html"},{"revision":"5d3dfdb5be75ba8065c20c038543c19f","url":"./archives/2021/page/2/index.html"},{"revision":"5616d6ed75c149977c25f9a529090545","url":"./archives/2021/page/3/index.html"},{"revision":"9e7efbc65bfe6208fac8b539ea5f9237","url":"./archives/index.html"},{"revision":"dd15fbda971aa1ab302d1a58f2b3a65f","url":"./archives/page/2/index.html"},{"revision":"bcdf5de622ca158bfdb35a9553f94d60","url":"./archives/page/3/index.html"},{"revision":"a2b2ba9dccddfd181044668db137074a","url":"./archives/page/4/index.html"},{"revision":"32846f62e2196663cdd5150ec12322bc","url":"./archives/page/5/index.html"},{"revision":"36b8a07da4930e0c71dbf1aaa4c4a42b","url":"./archives/page/6/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"5e4311d508d6d3443d4cd4cc341e72fe","url":"./atom.xml"},{"revision":"0daaacb0d9371f943d370ac26fa7df14","url":"./b28868d6.html"},{"revision":"81b63208f627ea16944a2067d6e5db9d","url":"./baidusitemap.xml"},{"revision":"189ee8ca61e421f6d5be65fc2450d540","url":"./bangumis/index.html"},{"revision":"5e63fb8be410ff5647cc3b94062507fc","url":"./bf3a65a4.html"},{"revision":"40ca4b7de4b27a807ad9c54ec1b556e7","url":"./c-re.html"},{"revision":"f6f42d09df9fd8c55b5b9970a811731c","url":"./c1ee638c.html"},{"revision":"b7c6172b46c383932e8ee90e3749fed4","url":"./c3119b08.html"},{"revision":"957caf11a46a948c00919bca5e058c98","url":"./c48ef0f6.html"},{"revision":"6495f3afe31dfa80be8e0771ecd0e43c","url":"./c53c84e7.html"},{"revision":"d5ef2fed10666c701908069978267651","url":"./c6c9c4db.html"},{"revision":"1bae03bbbcea3c38c065328d35d02bc0","url":"./categories/index.html"},{"revision":"4d0b5ce0e3f3d0818c5a755fe9605aaf","url":"./categories/教程-html/index.html"},{"revision":"ab0dc28c21c0ec5227159825ae5f73de","url":"./categories/文章/index.html"},{"revision":"b4befd4693aa7c3a8cb167e89b98ff60","url":"./categories/文章/page/2/index.html"},{"revision":"00ebd6ee98fa11000dc9c33ce8c61aef","url":"./categories/文章/page/3/index.html"},{"revision":"ca82467f0aafc6b9724fe7e5df047784","url":"./categories/文章/page/4/index.html"},{"revision":"59406db5a4733f3231251367459fb110","url":"./categories/文章/博客周年/index.html"},{"revision":"296132a476e32be10ee123cde5d8496b","url":"./categories/文章/后端/index.html"},{"revision":"e0f5a65f767e150f2b9e9cafe6724181","url":"./categories/文章/笔记/index.html"},{"revision":"a536cbc8d43fad969726ce0d5b123235","url":"./categories/文章/续集/index.html"},{"revision":"1531614e7440ea5c9b68d281cd0919a4","url":"./categories/日记/index.html"},{"revision":"1213f7d7ed4a7a931d707c0444501801","url":"./categories/通知/index.html"},{"revision":"2cf541058489b30edeaebb3b8fb8d760","url":"./categories/通知/page/2/index.html"},{"revision":"e967885d7e38343cb2467b077b44c39b","url":"./cd843bca.html"},{"revision":"ff90aa1373ce16658654e3088ef7db3a","url":"./codemao/join.html"},{"revision":"b4bf85b11fe8f67e82ce416955a89fab","url":"./comments/index.html"},{"revision":"a9a3712ca10c5d65b7af395d9dc53289","url":"./css/bilibiliBanner.css"},{"revision":"fb15fb1adb17841704902aa9c227f729","url":"./css/bilicard.css"},{"revision":"808bbddc4f4c56aee97a7af07f1f364f","url":"./css/coin.css"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"24afac82095e74871b55985e668be2c8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"d2d07fd596dd56ca9f04c4f899e308df","url":"./d28a09fd.html"},{"revision":"19a326cdc46f5e8ee2e9f906e407ee53","url":"./d2bd8f46.html"},{"revision":"c1de1c446c435ae81127678ede5b37d0","url":"./d46f6783.html"},{"revision":"169ca995798eeb6572e9a6d2c7ccc759","url":"./da033cd3.html"},{"revision":"61b2faa2d023d06886a08f95ddea20c1","url":"./db5f4c9.html"},{"revision":"897b1a2af1eb9d113cc31bbd71cf4a0c","url":"./dfd2f59a.html"},{"revision":"cbabe3802a98f8e9de58e04ab30b3ef6","url":"./e4d07d47.html"},{"revision":"c6330dd890c7e8ba51322312e31b8aa4","url":"./ede49718.html"},{"revision":"1c4f318f883fcaf08c0784e48b5b4b1d","url":"./ee30bc12.html"},{"revision":"52e009aded7916ae47a6838b2232bae1","url":"./f053c80.html"},{"revision":"72c572a6c23dd5e333656683f6282bf0","url":"./f6485125.html"},{"revision":"4fce38e371e4764a79cd79906ae36770","url":"./fa1bfef3.html"},{"revision":"85c37b9f367634ff43ae8b2a2a62789a","url":"./fcircle/index.html"},{"revision":"7002600a41c92edd7d272d1afd871d28","url":"./fe275fd0.html"},{"revision":"d42f7e8f3c5a1d49c374916e3d588124","url":"./from.html"},{"revision":"3b93b1a873bd983e6efe953b45c724ec","url":"./index.html"},{"revision":"3977461395620c67690202f14bbc6058","url":"./js/bilibili-banner.js"},{"revision":"db0ef6fc56befa79cef5e478f9138324","url":"./js/coin.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"c56713403fe9375a51d3a0e660e80676","url":"./js/runtime.js"},{"revision":"fb9eaf607df5ea9ddfebfc57238add1d","url":"./js/SAO_Menu.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"60663de55410a8e5a2d1f71904dd022a","url":"./jump.html"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"7ca66e216199d4e63504d0307e0a3002","url":"./link/index.html"},{"revision":"49d5b796b0a24b2e6a871aacdd457f1f","url":"./manifest.json"},{"revision":"16e187c08849327590faf47f2fb05368","url":"./other-page/dead-links/index.html"},{"revision":"68f1585821a77f7cc4759c177baa13ce","url":"./other-page/video/index.html"},{"revision":"6aac3e468cc0e53b77ca2f8b5185a410","url":"./other-page/ziyuan/index.html"},{"revision":"3b3c180a188d979a9857672a35ded7f3","url":"./other/index.html"},{"revision":"da680c454a8d779cc03ec5f41728d7f3","url":"./other/s/NTRss88/index.html"},{"revision":"f259438114ece38fd67f5eab37491092","url":"./page/2/index.html"},{"revision":"069da7817ccb3a38bdbdc9f3666958c8","url":"./page/3/index.html"},{"revision":"d1d13b451f5ffe6066058671dc559079","url":"./page/4/index.html"},{"revision":"4beef8bbfef4fb7575a778d22102258c","url":"./page/5/index.html"},{"revision":"5142dc0102bed6fa7871f903fdd2147d","url":"./page/6/index.html"},{"revision":"d8f0f09e70953efc318365075ab35997","url":"./pcre.html"},{"revision":"cc661cf3c014098196b477b70611e28e","url":"./random.html"},{"revision":"bfb995614b331dcfc63c95bac605e308","url":"./search.xml"},{"revision":"33dd1f57ecb6084a6cdb15e8de5e5b6f","url":"./service-worker.js"},{"revision":"980f3969860187424eead1cd3b55a054","url":"./shuoshuo/index.html"},{"revision":"63a116523bca6cda1ab4c0192efc6f42","url":"./sitemap.xml"},{"revision":"c4ad332318c24c129b593e63c467a911","url":"./support.html"},{"revision":"ed8c1864ae5c61133e13fc768066e9d4","url":"./tags/2020/index.html"},{"revision":"8442dc783eec19daea84ae40cc45f792","url":"./tags/404-网站/index.html"},{"revision":"f21ff874772e302221abc76a73bc9304","url":"./tags/android/index.html"},{"revision":"822cd4521fb78a50e2887030d88cfc88","url":"./tags/aplayer/index.html"},{"revision":"2c7450a8c20842b31208f6c251914ac2","url":"./tags/app/index.html"},{"revision":"b79160c9fbd5f0ac4a16ee2f958e0a5e","url":"./tags/bilibili/index.html"},{"revision":"f586ba3f564302bbca68d82ef2a3597b","url":"./tags/CF/index.html"},{"revision":"2bf7f1abeabc39a400c71b31d0d48413","url":"./tags/CFW/index.html"},{"revision":"a7a099aa81be5129caae0b838db5cc67","url":"./tags/Cloud-flare/index.html"},{"revision":"4e20359be494388bb38c4cf295a9b754","url":"./tags/dao-voice/index.html"},{"revision":"c83e44bf98652794b30b8ff80b15a32b","url":"./tags/debian/index.html"},{"revision":"86a1b8f658f22e1b0bb71b2cc723ddfe","url":"./tags/download/index.html"},{"revision":"be8f0725fea7a78d5a9392d5c4894d89","url":"./tags/FA/index.html"},{"revision":"5d71d948ee11c61c8801de706bf6a2b9","url":"./tags/fusionapp/index.html"},{"revision":"f94386986564a4b783c21a170614aab2","url":"./tags/gh-page/index.html"},{"revision":"8d5f046804b533073b5f16c673c79ac6","url":"./tags/git/index.html"},{"revision":"2bd422a8ed1ba991a31e709d7fe9fa77","url":"./tags/gitee-page/index.html"},{"revision":"9bf5f5beb9eaff5a97a56142e3141330","url":"./tags/gitee/index.html"},{"revision":"0e773c4657cf7eb20269e0547a42dda2","url":"./tags/github-action/index.html"},{"revision":"541abec7f13c8dbd855964bf11f7a2df","url":"./tags/github-page/index.html"},{"revision":"96e2f294980a6b96a488d732b093117c","url":"./tags/github/index.html"},{"revision":"d3d2e6066c963a106e7017be7a4111f4","url":"./tags/github/page/2/index.html"},{"revision":"9d21a8ce5db587f2f43b729db3702d6a","url":"./tags/githubpage/index.html"},{"revision":"89830b6c9a10a2f226a835f8759334cb","url":"./tags/hello-world/index.html"},{"revision":"88af96064d1357688417cdf92db08620","url":"./tags/hexo/index.html"},{"revision":"8c375222e49dbe6367c8bef549ce5d07","url":"./tags/html/index.html"},{"revision":"354b02140ad5811207fdcd0b34dbec3f","url":"./tags/iframe/index.html"},{"revision":"56829676f6d7e37a7ba0e78a0234c0e2","url":"./tags/index.html"},{"revision":"e70c358181465a3e3cdfb35923a35c23","url":"./tags/java/index.html"},{"revision":"e9a02668e64bff64bd195f05530339be","url":"./tags/linux/index.html"},{"revision":"5c9f5848bf348d9e9aa02e4cad7455df","url":"./tags/liunx/index.html"},{"revision":"3adcf8acff8b6c83315af4b77b2a7d8a","url":"./tags/markdown/index.html"},{"revision":"c3b39a084a5571a8e1c7ed5f813355e7","url":"./tags/md/index.html"},{"revision":"c1401043818ce3e6a22847bf7eb5c554","url":"./tags/md编辑器/index.html"},{"revision":"1b0cb94bad545d6249beb9250ac59d36","url":"./tags/minecraft-JE/index.html"},{"revision":"0e56b430adf8f8bfbae33386009b07dd","url":"./tags/minecraft/index.html"},{"revision":"f8e4c8db3a18f9b15832f444bac79191","url":"./tags/minecraftJE/index.html"},{"revision":"4858928ca5642d740cd10c06a33ef89d","url":"./tags/node-js/index.html"},{"revision":"92bc3e62e1fb106653e7ea7466393017","url":"./tags/node/index.html"},{"revision":"838686314b806247817bb07dff82796c","url":"./tags/php/index.html"},{"revision":"613d61512ce2feaaf33c40642a9c4dfc","url":"./tags/picgo/index.html"},{"revision":"646bfb06cef0e0504d7997b5d4329785","url":"./tags/python/index.html"},{"revision":"5ff37fe359f2717bb85815abd1ecef16","url":"./tags/ssh/index.html"},{"revision":"993d525a1e7db1c25a3887f5514b29e4","url":"./tags/termux/index.html"},{"revision":"318fb19cc0c2952a40cd49c9bd7c7e73","url":"./tags/undertale/index.html"},{"revision":"d0cf5c38c4899cf315e96c3770d4269f","url":"./tags/ut/index.html"},{"revision":"f5446bd052216b11ce3ff071bc60e8ab","url":"./tags/vercel/index.html"},{"revision":"9097af5f435576ff1b3c10080430487d","url":"./tags/website/index.html"},{"revision":"7d265fba3a8bcc330572dda05a98d2c3","url":"./tags/win10安装/index.html"},{"revision":"b6b088dad0258c1281774f4156297260","url":"./tags/Windows/index.html"},{"revision":"034ff8a40e9946eb739db7ce5679cabb","url":"./tags/Windows10/index.html"},{"revision":"3b142510cd77cb39574acb4856cc582b","url":"./tags/wmz-blog/index.html"},{"revision":"a14fda0e8b1efff21098853f73232e87","url":"./tags/一周年/index.html"},{"revision":"92ad1cb36e60d337e06067d6f943aff2","url":"./tags/传说之下/index.html"},{"revision":"f2dccc8b7699b7702088de1813cf89a1","url":"./tags/免翻墙/index.html"},{"revision":"d6d1cac64c9fa6a9a12ac31e2db3ff8a","url":"./tags/动态网页/index.html"},{"revision":"5d8210c5de54e3a6a2ad6fcc19ea487a","url":"./tags/博客/index.html"},{"revision":"ef92a1e0fbbd105d3ba06ab7245dca92","url":"./tags/回顾/index.html"},{"revision":"49152ae19be568474720b19eb094e5b7","url":"./tags/图床/index.html"},{"revision":"40494e395a9b73e4d4e90f1b42c0f6e3","url":"./tags/在线聊天/index.html"},{"revision":"6ae0105b028bd588422f48cb7c3154a1","url":"./tags/安装/index.html"},{"revision":"f76b138e006b5b539a0cec0b0c88f8e7","url":"./tags/工具/index.html"},{"revision":"34ffc4b35831743ec299db5f58a501e2","url":"./tags/我的世界/index.html"},{"revision":"293ac1c1f3e91e7a6f63cbff5ebb46a2","url":"./tags/折腾/index.html"},{"revision":"4ed89abdfe8213f47aa4ee95d8d0b246","url":"./tags/搭建/index.html"},{"revision":"76d34bb4fa0248f9b36e01a65bdb80d8","url":"./tags/教程/index.html"},{"revision":"850808abcdb849aca951b16afcc3cb70","url":"./tags/日记/index.html"},{"revision":"fb9c3587bb17a6994ba9db8b3855c424","url":"./tags/更换/index.html"},{"revision":"4f2bae0519866ba06d9bfe8ee3721ad3","url":"./tags/更新/index.html"},{"revision":"6289fa4795492a88c32e5c6b3bfb3ff3","url":"./tags/更新了/index.html"},{"revision":"5d2ac66c7a413e34aadd3e64af0a7190","url":"./tags/服务器/index.html"},{"revision":"3b3a6bc6a10a141d62d40dd612377f37","url":"./tags/测试/index.html"},{"revision":"bb4f2b1bf972cdb822a636cc84dbba97","url":"./tags/百度统计/index.html"},{"revision":"0aa46550fe3e824c571aa02dabaa6a60","url":"./tags/看法/index.html"},{"revision":"c8bc565d36cd3d4b6ac733ebb803865c","url":"./tags/笔记/index.html"},{"revision":"83509db053225472b92487f746bfd736","url":"./tags/系统安装/index.html"},{"revision":"1908c1427290728a9e653f59ce5c8d36","url":"./tags/袁隆平/index.html"},{"revision":"70f248e0f348aa8cd429644e8d59420c","url":"./tags/迷你世界/index.html"},{"revision":"ef2eda66b2359b4514f7708da1911b08","url":"./tags/通知/index.html"},{"revision":"656ee070fed21f987b02a67983b2f22b","url":"./tags/邮箱/index.html"},{"revision":"9807a7467e9ef49532fb951e33be6d31","url":"./tags/随笔/index.html"},{"revision":"ac47fd4f4ad1a5f893dca05de97e2fd4","url":"./update/index.html"},{"revision":"0497fcadf6b83c75ec4df94ab5067d20","url":"./workbox-f7715658.js"},{"revision":"2cc326181fe44d1db9004867e62cd97f","url":"./wsimg/browserconfig.xml"},{"revision":"6eaec915b2a49dd02063e5f38d7a41de","url":"./wsimg/README.html"},{"revision":"ef6d498e54f639c8ee95928ea9904bc7","url":"./y-re.html"}],{
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