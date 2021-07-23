const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"2d67be972651fdfe6d15fb5d9329f4eb","url":"./11f1a2fc.html"},{"revision":"9ed7c99331b8ac711e030c38d55d6d52","url":"./1f7e3876.html"},{"revision":"f4d3f491d915b288c675b7d833f6feab","url":"./2b244555.html"},{"revision":"09b3a2aedecbffe3502c4a937f5e8764","url":"./2c7854e6.html"},{"revision":"02e02e2f094f9a3b414e094e3a0f533a","url":"./2ee2518d.html"},{"revision":"054dbe5960d394478808cdc255fad651","url":"./30422b3f.html"},{"revision":"85f7c24a20f41b632df7a7fb4b1d6d24","url":"./3494bf09.html"},{"revision":"7df82edb34747cfd6dd123866d853867","url":"./3e4cf0e1.html"},{"revision":"bcdea1e9d522eb498d7f9f171040ea0f","url":"./404.html"},{"revision":"62d0d10013b2712720479b0d9d0f536e","url":"./4283e7c2.html"},{"revision":"aac11d7cb443de758bdea0fedb8c526e","url":"./47008bfe.html"},{"revision":"344576ab020b460db3b778763eaf9daa","url":"./496761e5.html"},{"revision":"52cbc289c1503607542883d0d4b03234","url":"./49ab854f.html"},{"revision":"ceeceb4880627fa8f4e41d7df0a48d34","url":"./4a17b156.html"},{"revision":"e732fa5cb4ac8db8613792e5fdc71025","url":"./51f11683.html"},{"revision":"f38247c1e530703af7611525736ab351","url":"./6057642a.html"},{"revision":"4227ecd9e7f88dfd19bb58b18919141f","url":"./60816787.html"},{"revision":"5685e98abf24e6adfa8ddcbcea4b80b1","url":"./68083ed.html"},{"revision":"9652c54ba68b5b5002b521e5c798d0e3","url":"./71e2d2d3.html"},{"revision":"3baa5f5a98c5fd10a5830ec67fea94b8","url":"./748a29a4.html"},{"revision":"3dee6a76aff346676a06ab7a00fb04ba","url":"./7bc26341.html"},{"revision":"f885e411153687fe5f3ad041ad94e545","url":"./7cee40bf.html"},{"revision":"4fd302b7502f15cb5bc32ab61a876b03","url":"./836982c.html"},{"revision":"4c24340283ff32c9397808079abee55d","url":"./83d82948.html"},{"revision":"acdbbbba8275de4fd63a281ee75e7db9","url":"./8856403.html"},{"revision":"8a2e5a22d0736914f5333e22184bffcc","url":"./8bc291e6.html"},{"revision":"88aa63200655ec738090e1e0db7630da","url":"./8d39085b.html"},{"revision":"d1d509c2db533ae36a3c46a6bb956638","url":"./9341b494.html"},{"revision":"81dd672b391b410510f3611390e36370","url":"./96ccccce.html"},{"revision":"524a7756cdf35032f82198faace948cd","url":"./98d114e8.html"},{"revision":"4f86aa82b80773b4f007ad7a68fa92ae","url":"./a1be303c.html"},{"revision":"63e9016b79dd4f88acb02a475e3bb607","url":"./a65bc6b8.html"},{"revision":"fa84380ab7fcd02ec0ce0ac1fda08080","url":"./a81556f1.html"},{"revision":"27dd5fe0fa09782cd18a0116e817c8c7","url":"./a8acdd67.html"},{"revision":"149f83b479d20a58226a46950c17e2d4","url":"./aa96c821.html"},{"revision":"568e0fc4382e6e685e9978dba75c7293","url":"./ab1d37b.html"},{"revision":"cf6095e7bd511807ec9ae95bf16b0281","url":"./about/index.html"},{"revision":"fbcec9a144ac2324398bf220110b54f4","url":"./aeb2d36.html"},{"revision":"a9bd25aaaf2f1d700c28cdf73c9ae15c","url":"./af886b34.html"},{"revision":"5423b4f142d1c1541c9c6bfc8dd329b9","url":"./archives/2020/08/index.html"},{"revision":"396f47b9e77599edda403be8289e5ce4","url":"./archives/2020/08/page/2/index.html"},{"revision":"fe2f1c74f98ab243dceb81f3b13cf35f","url":"./archives/2020/08/page/3/index.html"},{"revision":"acb86129b559c1b2472e26dce0a4e762","url":"./archives/2020/09/index.html"},{"revision":"18529cfab73b60f7d660206c217a34c0","url":"./archives/2020/09/page/2/index.html"},{"revision":"4fd3408c78b5a48ce9ec95a5efe3b035","url":"./archives/2020/10/index.html"},{"revision":"c7c5d6f5604f99b572b5bcae88efa19b","url":"./archives/2020/11/index.html"},{"revision":"e79264844231c5862fbec0ef405cc561","url":"./archives/2020/index.html"},{"revision":"2d526341883f517e0ebd9dd51bfc5448","url":"./archives/2020/page/2/index.html"},{"revision":"fa926ec733c36d398bb6f32b647e448a","url":"./archives/2020/page/3/index.html"},{"revision":"3d514c244154e33d03725bdb114c30e9","url":"./archives/2020/page/4/index.html"},{"revision":"d87c736571af10b2a29ad5667b906be5","url":"./archives/2021/02/index.html"},{"revision":"2dcffbbbaff0e1a765eec412903c2640","url":"./archives/2021/03/index.html"},{"revision":"906c4064707d18d216cdd59e063b70c2","url":"./archives/2021/04/index.html"},{"revision":"c91140ae7d37ac49feb44bfa88be8af5","url":"./archives/2021/05/index.html"},{"revision":"99a56bfebf97c308267fe3cd2c030769","url":"./archives/2021/06/index.html"},{"revision":"65b3b73c458e84edd2d003f5c06ce753","url":"./archives/2021/07/index.html"},{"revision":"a05dda53a3d27f121b8ad020f5bf6352","url":"./archives/2021/index.html"},{"revision":"74e95e132147ba857e7a4049ff734c33","url":"./archives/2021/page/2/index.html"},{"revision":"bb3b1bc26f426ba79f19b9c3e018c7e1","url":"./archives/index.html"},{"revision":"ecea41bdbfbbb85ea8dbf198ff386e5c","url":"./archives/page/2/index.html"},{"revision":"bce630bcdd9ad61b0f1eb8fb3b0ebb06","url":"./archives/page/3/index.html"},{"revision":"92976b83ef877f1eda5b032a981f7001","url":"./archives/page/4/index.html"},{"revision":"10175c2c1c525bdfb3b7e75b3de0eb19","url":"./archives/page/5/index.html"},{"revision":"3935cef5f9df662f9bd26a7367c26f94","url":"./archives/page/6/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"5a62e1aef8bd1e58bf6529016e4c5f39","url":"./atom.xml"},{"revision":"53b0209623dfcbc30763bfb0f98bec27","url":"./b28868d6.html"},{"revision":"59010fc006d5d7464b5dfceab7be0488","url":"./baidusitemap.xml"},{"revision":"f8cc5163f41b31c4ff0cc1bd869ec2fc","url":"./bangumis/index.html"},{"revision":"c5e66f4c090492fa9c5947eaa3f0ce49","url":"./bf3a65a4.html"},{"revision":"40ca4b7de4b27a807ad9c54ec1b556e7","url":"./c-re.html"},{"revision":"48448d7a25c36848d673adedc27f1b47","url":"./c1ee638c.html"},{"revision":"c9a1846fd8eda82518e60f3d4cdf5f42","url":"./c3119b08.html"},{"revision":"9364204f6f1dac96b6139c5312aa6c83","url":"./c53c84e7.html"},{"revision":"e34e2d58d0d83872ffd1d402e1486105","url":"./c6c9c4db.html"},{"revision":"100cfb698470795f39eaddc49d64cf14","url":"./categories/index.html"},{"revision":"83865cbb19501ae355e1aaa12f395754","url":"./categories/教程-html/index.html"},{"revision":"c05766075e8e79fbaaf56b8eeb7bcfd2","url":"./categories/文章/index.html"},{"revision":"79a23ff825e01ae1b245ed556f4cf860","url":"./categories/文章/page/2/index.html"},{"revision":"8167c7297facd595c10f440276dcf79e","url":"./categories/文章/page/3/index.html"},{"revision":"570c3d91ac539facd9064946bd2c25f9","url":"./categories/文章/page/4/index.html"},{"revision":"a7a975724481f651130aa2292869f1f3","url":"./categories/文章/后端/index.html"},{"revision":"da2f7d29bc8e29e6de5853da8e28be95","url":"./categories/文章/续集/index.html"},{"revision":"55d33b2b68af174a02c73bd3496d56ef","url":"./categories/日记/index.html"},{"revision":"ab1f143b4e58cc1f6608aeaee3596ea1","url":"./categories/通知/index.html"},{"revision":"b4a6c26d0993ec0ac015717e784f2321","url":"./categories/通知/page/2/index.html"},{"revision":"22f87407931007eedda0cd8269ea1a57","url":"./cd843bca.html"},{"revision":"be381a6bf04a7485817413724ee07214","url":"./codemao/join.html"},{"revision":"ecc82c783d89458f95a83939599b4df9","url":"./comments/index.html"},{"revision":"a9a3712ca10c5d65b7af395d9dc53289","url":"./css/bilibiliBanner.css"},{"revision":"fb15fb1adb17841704902aa9c227f729","url":"./css/bilicard.css"},{"revision":"808bbddc4f4c56aee97a7af07f1f364f","url":"./css/coin.css"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"24afac82095e74871b55985e668be2c8","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"58262a32bfe27e754cdd732f5c63b636","url":"./d28a09fd.html"},{"revision":"3066456c8b42da8ecb0810087e3c593b","url":"./d2bd8f46.html"},{"revision":"0a5bb22ff44de9dc77dba92175729bac","url":"./d46f6783.html"},{"revision":"3838d21bec51b8aa058089616182e397","url":"./da033cd3.html"},{"revision":"fe3b6b3101a710576cd71c0b17afc3da","url":"./db5f4c9.html"},{"revision":"8e77b22eb7a1da12068703f3249ffefe","url":"./dfd2f59a.html"},{"revision":"b18ec3c4fb105b22db4c16ce23ed1b8c","url":"./e4d07d47.html"},{"revision":"0556a8c4293bfd483f84fffff147203e","url":"./ede49718.html"},{"revision":"d806ee270490df726e16ca2ae89a5b97","url":"./ee30bc12.html"},{"revision":"2d2195dcdb33c37d794269efd927a778","url":"./f053c80.html"},{"revision":"fe913557bbd7225d51c08f7fe1ae326f","url":"./f6485125.html"},{"revision":"7a42543de9fbe1df4f0642bbdc225828","url":"./fa1bfef3.html"},{"revision":"fcd5f6a29ab204e92ef0656aaa6b4046","url":"./fcircle/index.html"},{"revision":"12d8712dabd144fc44e347054bbf464c","url":"./fe275fd0.html"},{"revision":"d42f7e8f3c5a1d49c374916e3d588124","url":"./from.html"},{"revision":"b5a5bbc29f50de527fb8e2ee88db4940","url":"./index.html"},{"revision":"3977461395620c67690202f14bbc6058","url":"./js/bilibili-banner.js"},{"revision":"db0ef6fc56befa79cef5e478f9138324","url":"./js/coin.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"c56713403fe9375a51d3a0e660e80676","url":"./js/runtime.js"},{"revision":"fb9eaf607df5ea9ddfebfc57238add1d","url":"./js/SAO_Menu.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"60663de55410a8e5a2d1f71904dd022a","url":"./jump.html"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"d8056a181bf078aaba9346993540370b","url":"./link/index.html"},{"revision":"49d5b796b0a24b2e6a871aacdd457f1f","url":"./manifest.json"},{"revision":"d47577a5c4489b5ff0b734890d748e80","url":"./other-page/dead-links/index.html"},{"revision":"d08196d7ed1e04ae676fdce27e595264","url":"./other-page/video/index.html"},{"revision":"9cf2c7922528945e62bb93837fda8bc2","url":"./other-page/ziyuan/index.html"},{"revision":"33bb4c0df7b4d4266fa84ed885ae25bc","url":"./other/index.html"},{"revision":"9074d517e006a0db81f81f47b475ad88","url":"./other/s/NTRss88/index.html"},{"revision":"8423975925c57ce67dc146b7dd40e3c2","url":"./page/2/index.html"},{"revision":"40b713b7029bb81a42c43dfe0c026edc","url":"./page/3/index.html"},{"revision":"a114b816447b15287b2e22afe47b35c8","url":"./page/4/index.html"},{"revision":"0993ffff3285d2b8dc3fbe867f922a25","url":"./page/5/index.html"},{"revision":"870b6285fa37bf03c8ad91f50ce4e3c4","url":"./page/6/index.html"},{"revision":"d8f0f09e70953efc318365075ab35997","url":"./pcre.html"},{"revision":"8deda9120b36ee40e010aa0bf273f66a","url":"./random.html"},{"revision":"8d2fa11437d222d144d4a79f4be84064","url":"./search.xml"},{"revision":"c7284ccbebfc58639134a3b5279954e1","url":"./service-worker.js"},{"revision":"13c373da9e70e321224a8be4ea6511c6","url":"./shuoshuo/index.html"},{"revision":"98fd0371c2bd7f77cd918689985ca88b","url":"./sitemap.xml"},{"revision":"c4ad332318c24c129b593e63c467a911","url":"./support.html"},{"revision":"7e2f7ecd462dfbbbce32a0479a12dd11","url":"./tags/2020/index.html"},{"revision":"1bb667f5cd8f9875ffb132357ce096d0","url":"./tags/404-网站/index.html"},{"revision":"f96d8f7da5d53c790b97bc53db961337","url":"./tags/Android/index.html"},{"revision":"98f9f79cb4261a08a2ee8e2dccbd8930","url":"./tags/aplayer/index.html"},{"revision":"efe9497ecac877ed60a417fa3c2e0a69","url":"./tags/app/index.html"},{"revision":"d318a57a525a3420a327c9d00ff3c383","url":"./tags/bilibili/index.html"},{"revision":"3380027d6c26d216466e94f364e3f8e4","url":"./tags/CF/index.html"},{"revision":"eb6f0007de485e11dc64561af0110f5a","url":"./tags/CFW/index.html"},{"revision":"f085e887f1a740b0a233682aeb0a0fc9","url":"./tags/Cloud-flare/index.html"},{"revision":"885e815faac1cede6649ff682a06ebf1","url":"./tags/dao-voice/index.html"},{"revision":"4b69e04019e31b2966dc19508498afaa","url":"./tags/debian/index.html"},{"revision":"f69516b6874e70ef21168a6bfa0611f4","url":"./tags/download/index.html"},{"revision":"6c422bce26fe3bf6a3ef33cf4b22b944","url":"./tags/FA/index.html"},{"revision":"3db6f45b4d3155c46277dcf4efb54624","url":"./tags/fusionapp/index.html"},{"revision":"82eed2e33ab990b3f26ec3c7c9c15ee9","url":"./tags/gh-page/index.html"},{"revision":"f3ca248136953f193abad748c201ffe8","url":"./tags/git/index.html"},{"revision":"fb0a05b4c0b085c52cf4f7b285e37e79","url":"./tags/gitee-page/index.html"},{"revision":"60d5d5ef058e56c007848e4546e39d97","url":"./tags/gitee/index.html"},{"revision":"5288eb6914b8db269b1506d1502a0f42","url":"./tags/github-action/index.html"},{"revision":"e583395092d02ae99da0390186bd21c9","url":"./tags/github-page/index.html"},{"revision":"b75130e1d9f1efd65cbfb58acae72025","url":"./tags/github/index.html"},{"revision":"8b6e946e54336ede929e374b769baecc","url":"./tags/github/page/2/index.html"},{"revision":"a3d55f71b5fe944e22942b18771d3a99","url":"./tags/githubpage/index.html"},{"revision":"d238e2646a75d715d55d970a73070b65","url":"./tags/hello-world/index.html"},{"revision":"c23568c61e33dd0a261efda47e68fc3c","url":"./tags/hexo/index.html"},{"revision":"5342a766aab21e45636e406a796f4a12","url":"./tags/html/index.html"},{"revision":"97b04fe5276b35722231e503ff84ab8c","url":"./tags/iframe/index.html"},{"revision":"2808d29d99c4787c1576259b956616d4","url":"./tags/index.html"},{"revision":"702db33d35f7eeb27c9555ba65c2d7ad","url":"./tags/java/index.html"},{"revision":"4ced289fbff9a6dd9b43c15666eac7e8","url":"./tags/linux/index.html"},{"revision":"2202ff1f58ae284a589d96f794b4fe3e","url":"./tags/liunx/index.html"},{"revision":"5dcb809bbc6ee4accdc725dda9214cee","url":"./tags/markdown/index.html"},{"revision":"ae3927f6ad4831923927eaa5dd38cfff","url":"./tags/md/index.html"},{"revision":"2b4a616930a67975f417cef719a55dc3","url":"./tags/md编辑器/index.html"},{"revision":"cc916f2448b923188b49cf4a65a34c26","url":"./tags/minecraft-JE/index.html"},{"revision":"4b486d478d13bdfaf71012d3c006a6ef","url":"./tags/minecraft/index.html"},{"revision":"0e22966ff8dd2353663f55cfae142eba","url":"./tags/minecraftJE/index.html"},{"revision":"d21cfc0e2439726d244f4a8163ce4894","url":"./tags/node-js/index.html"},{"revision":"54be8dcc6aa439702ff244e1065eb801","url":"./tags/node/index.html"},{"revision":"3f471a5ef204c8a9d0852518487e6616","url":"./tags/php/index.html"},{"revision":"0745645cc180fb2578c568f00bd1c656","url":"./tags/picgo/index.html"},{"revision":"4cdbca71dbba6959548e861dbd7a0d36","url":"./tags/ssh/index.html"},{"revision":"42eac12657ad362a2bf9d757f9b633c0","url":"./tags/termux/index.html"},{"revision":"bb1c404c29ed51432ffa07874b9cf27d","url":"./tags/undertale/index.html"},{"revision":"3dfd747e19846ac8c753957665ab4205","url":"./tags/ut/index.html"},{"revision":"99a92593dccd6e95bd71536d25945597","url":"./tags/vercel/index.html"},{"revision":"50b2fc3dd4e1d3f15fc91e185a1ad937","url":"./tags/website/index.html"},{"revision":"fc2b80df87fa58cd150b3431bd30eb35","url":"./tags/win10安装/index.html"},{"revision":"32bf0a414fc356e316db8aaff09e1ca6","url":"./tags/Windows/index.html"},{"revision":"d9495f0b8ba072e58a16dd9bc1b0bd75","url":"./tags/Windows10/index.html"},{"revision":"453ea6aab5dd4bd9ede21772e40d4b6c","url":"./tags/wmz-blog/index.html"},{"revision":"7a64c21a078de8b14a4a532894e8b92e","url":"./tags/传说之下/index.html"},{"revision":"f5c8cdfbb777df283de803cf8913d544","url":"./tags/免翻墙/index.html"},{"revision":"9937d15bfafb8417e98b5f5f4edf6878","url":"./tags/动态网页/index.html"},{"revision":"b22f146117daa333da124584e2d4a874","url":"./tags/博客/index.html"},{"revision":"60be37fc7a7c382a8c499e2eae53b3f6","url":"./tags/回顾/index.html"},{"revision":"ffea4937409285d8cc11e1a690561288","url":"./tags/图床/index.html"},{"revision":"2347b2a1b6601b32eb9cf6a660702a1d","url":"./tags/在线聊天/index.html"},{"revision":"4c2e8833a1e6c63128f25a19a6c9641a","url":"./tags/安装/index.html"},{"revision":"807456b88a880553ecf5098b16ac0700","url":"./tags/工具/index.html"},{"revision":"1c31750bd0f47b4ec72cd3fe2fc43619","url":"./tags/我的世界/index.html"},{"revision":"e4a4f4a6cfb1710498bcb6cdcf80a7d0","url":"./tags/折腾/index.html"},{"revision":"206162de8ad101a2c972fe90df4c429b","url":"./tags/搭建/index.html"},{"revision":"334db0c8c7e29476ced88d88ad872b7a","url":"./tags/教程/index.html"},{"revision":"7c50e6d040a298a7d116008889e443c0","url":"./tags/日记/index.html"},{"revision":"d33f30473fd6ff34704664d0b0637d69","url":"./tags/更换/index.html"},{"revision":"5bbcd1774273529f6b3207f72aaad239","url":"./tags/更新/index.html"},{"revision":"8a679d6c4026eb8a382dae17f5401cc9","url":"./tags/更新了/index.html"},{"revision":"81a6ec0591d4684b96bc0caabc6bccf1","url":"./tags/服务器/index.html"},{"revision":"e0ed32e37a814c4360640c881309f9f2","url":"./tags/测试/index.html"},{"revision":"8cb73459762a76455da7eab6a841713c","url":"./tags/百度统计/index.html"},{"revision":"de26c8af9d80d0d5354045325e020bd4","url":"./tags/看法/index.html"},{"revision":"8a4682a2405ed2eb126c9912c9fefd65","url":"./tags/系统安装/index.html"},{"revision":"1d67ca52e5156c1445e0c9e6327af3f4","url":"./tags/袁隆平/index.html"},{"revision":"0380e00c10d75b74787da7f5cef67431","url":"./tags/迷你世界/index.html"},{"revision":"2ff058d7497e3cedba73c1503d1d4392","url":"./tags/通知/index.html"},{"revision":"3139e8bfe2d399fd1ba7aeba10d69fda","url":"./tags/邮箱/index.html"},{"revision":"3848dbef6adf6eb84ff482e57de58da3","url":"./tags/随笔/index.html"},{"revision":"f1581eb391618a3358dbfc2afa3fc37b","url":"./update/index.html"},{"revision":"0497fcadf6b83c75ec4df94ab5067d20","url":"./workbox-f7715658.js"},{"revision":"2cc326181fe44d1db9004867e62cd97f","url":"./wsimg/browserconfig.xml"},{"revision":"fd22f08ee5e557f5bfa0b9c082cf7623","url":"./wsimg/README.html"},{"revision":"ef6d498e54f639c8ee95928ea9904bc7","url":"./y-re.html"}],{
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