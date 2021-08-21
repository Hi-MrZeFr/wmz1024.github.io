const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"18bf015b30ec5b1bd4c31c33bbf53bbf","url":"./11f1a2fc.html"},{"revision":"046fd4741f17333b08c17fdaebbe1c6f","url":"./1f7e3876.html"},{"revision":"0b6f21102b8d913285d4aa3f4cb46a9a","url":"./2b244555.html"},{"revision":"e67863b28ecf145e034e9ab9feb09ba1","url":"./2c7854e6.html"},{"revision":"6994fc7c3cf8731afefb4a9c9fbd4973","url":"./2ee2518d.html"},{"revision":"98db7f8f53db077b1e4f03498cbae16b","url":"./30422b3f.html"},{"revision":"f4b506d703a39327915faba4e6d86d72","url":"./3494bf09.html"},{"revision":"8aaed91eaf63c29b2532a58e1be67d29","url":"./3e4cf0e1.html"},{"revision":"23285d0f61da212debc7a8aaded07ea9","url":"./404.html"},{"revision":"46d6c41c769124dd65f160c141bd168a","url":"./4283e7c2.html"},{"revision":"a06ce3aa0689322edd068fa4cb67327d","url":"./47008bfe.html"},{"revision":"0feca28676582dee3fbb58a490564d5a","url":"./496761e5.html"},{"revision":"e4d3c10ee07197810bf78133ff2b0fc7","url":"./49ab854f.html"},{"revision":"6738c57822762447f2c496070a9c10ce","url":"./4a17b156.html"},{"revision":"496f04f4e824413272cac50c2dd1c440","url":"./51f11683.html"},{"revision":"e7c80b376d977d1e7200c7850d2dd51e","url":"./5b2b3473.html"},{"revision":"76ddc9a2e95aa9001baf20b547159af0","url":"./6057642a.html"},{"revision":"deedf65f8056c7cdd6fa7be5ea14a2f6","url":"./60816787.html"},{"revision":"1bcb3f4bf1112dd3491345f9a314789d","url":"./68083ed.html"},{"revision":"efd2945da3261dec9f21b860f9a1f923","url":"./71e2d2d3.html"},{"revision":"2caf84341ba20ad951c90117fc4a4496","url":"./748a29a4.html"},{"revision":"11cf4659b419fb39796a885eacef4f3a","url":"./7bc26341.html"},{"revision":"2d33a3bae0c548c94f3872b6df41ff29","url":"./7cee40bf.html"},{"revision":"bdada65f00242c113d33bbfc8b3e01f0","url":"./836982c.html"},{"revision":"89345a8325131356f7872d2e645b2d41","url":"./83d82948.html"},{"revision":"c450654c5351926bfe119976b9c47cff","url":"./87e1c0bc.html"},{"revision":"fcf78ead6bc778ad42a7ebc196492e9e","url":"./8856403.html"},{"revision":"ec9fd57ded26cd698163ef92a1f63b9c","url":"./8bc291e6.html"},{"revision":"f23a2382bbfebe72aae82203ae9825c7","url":"./8d39085b.html"},{"revision":"f8720a99329883aa08289ab8730daeed","url":"./9341b494.html"},{"revision":"4c5f066052439ecc2519071702840ae9","url":"./96ccccce.html"},{"revision":"8e21427c166591864a789165f5c1e011","url":"./98d114e8.html"},{"revision":"ece01e7ae644c5f4eefdaac8aae97580","url":"./a1be303c.html"},{"revision":"68dbfb9ae180181a1353765d133522fa","url":"./a65bc6b8.html"},{"revision":"f3c64a6d1028d3f0464325c8dc8e45ba","url":"./a81556f1.html"},{"revision":"0370081e7b2e10016a91882cccbe38ed","url":"./a8acdd67.html"},{"revision":"b8676104b6360b7f5acf4cab910ee735","url":"./aa96c821.html"},{"revision":"92e900f9f8c9f938d872ac82f9825f0d","url":"./ab1d37b.html"},{"revision":"b73755e83db939b2670e3c844bd8ef07","url":"./about/index.html"},{"revision":"9b3009926a2f92f0b0b0fa81204af3aa","url":"./aeb2d36.html"},{"revision":"ea1be6d08b1d57cc4dc84919e0d83c8c","url":"./af886b34.html"},{"revision":"fda5a250f4d4c04588431f7ee4058350","url":"./archives/2020/08/index.html"},{"revision":"4d4bca97163b8c924811e8ba3bc1408e","url":"./archives/2020/08/page/2/index.html"},{"revision":"162dfd043619d11d32521be11f5079d7","url":"./archives/2020/08/page/3/index.html"},{"revision":"2746c06907dc51ba0e22e880ce22e509","url":"./archives/2020/09/index.html"},{"revision":"a64562a167a9b7362117b74b49ee07a5","url":"./archives/2020/09/page/2/index.html"},{"revision":"8c1766c71c443bb72606f3dae08485c5","url":"./archives/2020/10/index.html"},{"revision":"e9cb632fb6315a676bd1775725725e23","url":"./archives/2020/11/index.html"},{"revision":"4db889cc7132aab418fdff3a129e7f2d","url":"./archives/2020/index.html"},{"revision":"59558d06a63ec57fd50eb30820d689c4","url":"./archives/2020/page/2/index.html"},{"revision":"b75615f9bb04006b654658dd0be4342a","url":"./archives/2020/page/3/index.html"},{"revision":"4e0bb55ff55f0c7c41e5bb46406040cc","url":"./archives/2020/page/4/index.html"},{"revision":"1bd98c997e4492398f8fcdb55d6efbe8","url":"./archives/2021/02/index.html"},{"revision":"21c77c3802baa89d0809bc33fe3dfbf2","url":"./archives/2021/03/index.html"},{"revision":"7a588d290a0b0aa3eeff7b7ed28d8902","url":"./archives/2021/04/index.html"},{"revision":"57a7aa5e0b99ef346302f401330cbf72","url":"./archives/2021/05/index.html"},{"revision":"85aa20f78a9b565e9296b083689221f5","url":"./archives/2021/06/index.html"},{"revision":"cb1f0c4654e5c39c1fae3f62b6ca5b14","url":"./archives/2021/07/index.html"},{"revision":"4b00163eea236807aac9e4be4178dcee","url":"./archives/2021/08/index.html"},{"revision":"94c797aa7b0d044e8578f2af9e945f74","url":"./archives/2021/index.html"},{"revision":"f7cd35f9a14844abd47d736204091a4f","url":"./archives/2021/page/2/index.html"},{"revision":"d07d3e3af97916f5322fd4d28b7492f8","url":"./archives/2021/page/3/index.html"},{"revision":"ebcffccb5a63c3259bab4ad6532f32ba","url":"./archives/index.html"},{"revision":"7b1988faa15f30ddce46d5622c5adb1b","url":"./archives/page/2/index.html"},{"revision":"623f019d562f3948e359f9eb771fef53","url":"./archives/page/3/index.html"},{"revision":"f8fcc325e18d4891403c6f5558e103a6","url":"./archives/page/4/index.html"},{"revision":"cae9294c47cb053de6e9a2aced8f7c9d","url":"./archives/page/5/index.html"},{"revision":"86cbab8f3415f50dc7a519faf55ff399","url":"./archives/page/6/index.html"},{"revision":"d5d2500bfe8443b42baaefe4996ee532","url":"./assets/algolia/algoliasearch.js"},{"revision":"9c5e51e57e2b1d888950bf4cb5708c49","url":"./assets/algolia/algoliasearch.min.js"},{"revision":"ce9b0e62645c036a143f639b92e7789f","url":"./assets/algolia/algoliasearchLite.js"},{"revision":"c2d71f042c879659dbc97f8853b62f21","url":"./assets/algolia/algoliasearchLite.min.js"},{"revision":"fbe994054426fadb2dff69d824c5c67a","url":"./assets/css/APlayer.min.css"},{"revision":"8f1017e7a73737e631ff95fa51e4e7d7","url":"./assets/js/APlayer.min.js"},{"revision":"bfac0368480fd344282ec018d28f173d","url":"./assets/js/Meting.min.js"},{"revision":"5e4311d508d6d3443d4cd4cc341e72fe","url":"./atom.xml"},{"revision":"2f986632661e5cd9b595a755f948999e","url":"./b28868d6.html"},{"revision":"81b63208f627ea16944a2067d6e5db9d","url":"./baidusitemap.xml"},{"revision":"9bee83b850a0723a4d99da862e2c3109","url":"./bangumis/index.html"},{"revision":"047977eda5e6cc30c51ef233bd1f90b8","url":"./bf3a65a4.html"},{"revision":"40ca4b7de4b27a807ad9c54ec1b556e7","url":"./c-re.html"},{"revision":"ca2fd98e68fa4576441104d948aed1d4","url":"./c1ee638c.html"},{"revision":"5562721b7f504dddc54cacf14d1532b0","url":"./c3119b08.html"},{"revision":"7fedac70f37abb27a9e8e6fd9e6f97d0","url":"./c48ef0f6.html"},{"revision":"3f57d8589c7ed07c9983d26aba6b1090","url":"./c53c84e7.html"},{"revision":"502cb705c226cd3a467ffbe475827a94","url":"./c6c9c4db.html"},{"revision":"7d66e147d86e6b7903dce040d2c038d7","url":"./categories/index.html"},{"revision":"e1f823c9e8a1e5a19246d510a7c653b4","url":"./categories/教程-html/index.html"},{"revision":"c6949c03de2f25b505307c92be432556","url":"./categories/文章/index.html"},{"revision":"6d5db0140d273342747e6a76374c0c41","url":"./categories/文章/page/2/index.html"},{"revision":"20856df907f79dc680760ebfacdf0f7e","url":"./categories/文章/page/3/index.html"},{"revision":"332f05bc08b771ce8eccbdbf0c02db48","url":"./categories/文章/page/4/index.html"},{"revision":"72a36b12e9abaef1ce97f09e3f6d7f9c","url":"./categories/文章/博客周年/index.html"},{"revision":"01e73f140ede8494216b1353fc98bf87","url":"./categories/文章/后端/index.html"},{"revision":"9a4e7a517882c372eb82560792fa3ab2","url":"./categories/文章/笔记/index.html"},{"revision":"a73efa6bc66dd516bb189325528f7754","url":"./categories/文章/续集/index.html"},{"revision":"47f12419dd1bd7338f6d5b11c452539a","url":"./categories/日记/index.html"},{"revision":"e3c83c14c707e5dc6986b1bd475d7d7a","url":"./categories/通知/index.html"},{"revision":"53b32bc317b4ee4c0b0f35be29ed35a0","url":"./categories/通知/page/2/index.html"},{"revision":"4d7377357ee29ff9abb892362b42d780","url":"./cd843bca.html"},{"revision":"476193f3212342b282e43179becceca3","url":"./codemao/join.html"},{"revision":"e29dfa98cc9aadcc960aa8fb6d8f219d","url":"./comments/index.html"},{"revision":"a9a3712ca10c5d65b7af395d9dc53289","url":"./css/bilibiliBanner.css"},{"revision":"fb15fb1adb17841704902aa9c227f729","url":"./css/bilicard.css"},{"revision":"808bbddc4f4c56aee97a7af07f1f364f","url":"./css/coin.css"},{"revision":"a8bc819e01e001d3bc6ae03a2afad957","url":"./css/hbe.style.css"},{"revision":"2f5f8a44dd35f9041ddbfc39195706f7","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"b73f5525827bd1252cd567fc2074af44","url":"./d28a09fd.html"},{"revision":"236658d9296d5fe69e4551a320787163","url":"./d2bd8f46.html"},{"revision":"ab9433947d1c9d31d947ba85565bfc74","url":"./d46f6783.html"},{"revision":"11f0636989240faa86620b1268164ffd","url":"./da033cd3.html"},{"revision":"a97b4f9cecf2ed42e1e42b9827c9af09","url":"./db5f4c9.html"},{"revision":"bb199c2b0571799d33d5bd3cc2ff441c","url":"./dfd2f59a.html"},{"revision":"0db40866f8a498a958650fb62d0bc1d1","url":"./e4d07d47.html"},{"revision":"b87bd698cf59f336daa58eb9b3524150","url":"./ede49718.html"},{"revision":"89e2bc9f9ea25b27931527e6ac329a30","url":"./ee30bc12.html"},{"revision":"7ff3436fbe31aa1aff0036200e68d0f1","url":"./f053c80.html"},{"revision":"79165458a57e77346ab44f94007b6b4e","url":"./f6485125.html"},{"revision":"77996c1ce3d608b4bad2813b02a88a92","url":"./fa1bfef3.html"},{"revision":"f0cb832190e39dfbf4e93bdca50f8650","url":"./fcircle/index.html"},{"revision":"10e2fb11cb197d901961087c366a356d","url":"./fe275fd0.html"},{"revision":"d42f7e8f3c5a1d49c374916e3d588124","url":"./from.html"},{"revision":"bb4d8005a2f559c7190feb2d875799be","url":"./index.html"},{"revision":"3977461395620c67690202f14bbc6058","url":"./js/bilibili-banner.js"},{"revision":"db0ef6fc56befa79cef5e478f9138324","url":"./js/coin.js"},{"revision":"f468f3bc967338f2dd7a6e06c2eef692","url":"./js/main.js"},{"revision":"c56713403fe9375a51d3a0e660e80676","url":"./js/runtime.js"},{"revision":"fb9eaf607df5ea9ddfebfc57238add1d","url":"./js/SAO_Menu.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"4cfc631de0e5f6ff12b2833cac848f27","url":"./js/utils.js"},{"revision":"60663de55410a8e5a2d1f71904dd022a","url":"./jump.html"},{"revision":"4a7e94ac7224adfce4b0572ca5c57fef","url":"./lib/hbe.js"},{"revision":"510d9dfbee7906d7f0b7bc5d64aac06b","url":"./link/index.html"},{"revision":"49d5b796b0a24b2e6a871aacdd457f1f","url":"./manifest.json"},{"revision":"bb5ee34f764432edbef27188931465a4","url":"./other-page/dead-links/index.html"},{"revision":"c7ed9753c72f5ecceac844c6a473f5fe","url":"./other-page/video/index.html"},{"revision":"1927900de07a7a139526b3f984c9eca3","url":"./other-page/ziyuan/index.html"},{"revision":"da07fe62d39b4980d2bf2b423138f068","url":"./other/index.html"},{"revision":"77033c3baff599104b87a250681ebaf0","url":"./other/s/NTRss88/index.html"},{"revision":"40bbbcbc0f024806a84eda9ce69a1a8a","url":"./page/2/index.html"},{"revision":"6e16f63dcb1eae85f3cc8a12c03bfabe","url":"./page/3/index.html"},{"revision":"2734916c93756540b763a3a6e12e3003","url":"./page/4/index.html"},{"revision":"6706ae85239e86de040dc22782c00170","url":"./page/5/index.html"},{"revision":"9435368377b8520292003c9a2407dc0a","url":"./page/6/index.html"},{"revision":"d8f0f09e70953efc318365075ab35997","url":"./pcre.html"},{"revision":"cc661cf3c014098196b477b70611e28e","url":"./random.html"},{"revision":"22a06f860f2538c43dac2798c9a6b0f5","url":"./search.xml"},{"revision":"dbd428519490bf3bbdcd4d01be4bd2f4","url":"./service-worker.js"},{"revision":"92d207cb3e33755a56ae8b89a27a07d4","url":"./shuoshuo/index.html"},{"revision":"d70889ca0d0d192c6b2f7ca508e33ba0","url":"./sitemap.xml"},{"revision":"c4ad332318c24c129b593e63c467a911","url":"./support.html"},{"revision":"55d76a4cd47da3eb0ecb452b72c7d35f","url":"./tags/2020/index.html"},{"revision":"00011e6e6cb1c392a35d3fa65419e7a8","url":"./tags/404-网站/index.html"},{"revision":"b7ebb0e6bdd658d1cdd00ebfcf39355c","url":"./tags/android/index.html"},{"revision":"ac0400b82b4e7751a6ab2d29efbc688c","url":"./tags/aplayer/index.html"},{"revision":"b38ecc76cb308d85fb6c2323f6673733","url":"./tags/app/index.html"},{"revision":"16ce9969291e861c617d8715554bc8d7","url":"./tags/bilibili/index.html"},{"revision":"d149137c7ef6e8ee83a542a1cb14d3b0","url":"./tags/CF/index.html"},{"revision":"1239e33ea8ae4c1e9a79e7164a5dbf91","url":"./tags/CFW/index.html"},{"revision":"687ceccaa39840378a5397b4bdbded3e","url":"./tags/Cloud-flare/index.html"},{"revision":"1ddbc38bf8c578974d2494cd45e30bb4","url":"./tags/dao-voice/index.html"},{"revision":"d1b61e791eee3d986557f0592eb23eb5","url":"./tags/debian/index.html"},{"revision":"c6830500fe367c6604aa4e2163c68739","url":"./tags/download/index.html"},{"revision":"d253fa2a11d178e64e762ece79c6663f","url":"./tags/FA/index.html"},{"revision":"3276d34f85aa46420fcd83500806b202","url":"./tags/fusionapp/index.html"},{"revision":"125d9162da8b861ca250f66840de43c9","url":"./tags/gh-page/index.html"},{"revision":"016b0bb8c098f6bcd030ab61d6baf022","url":"./tags/git/index.html"},{"revision":"e6d5a3e367e4cabb02110a35da6605d4","url":"./tags/gitee-page/index.html"},{"revision":"f34a1cef4c405711bd6bc22cb776b8a4","url":"./tags/gitee/index.html"},{"revision":"0ff9e67d927741baf24bcb326ccaac82","url":"./tags/github-action/index.html"},{"revision":"fe185ad6d6e7d8057533b1145aedf4df","url":"./tags/github-page/index.html"},{"revision":"d4133e04bc08e00e55cf98f18d517381","url":"./tags/github/index.html"},{"revision":"121d1a916dd36b51d9fc16791c72a9cc","url":"./tags/github/page/2/index.html"},{"revision":"e04d9daf4eeb949b97adba73c93d4620","url":"./tags/githubpage/index.html"},{"revision":"044e37705f25842d5025e7aa6c4a7487","url":"./tags/hello-world/index.html"},{"revision":"eee865ef6833957ef7d17d718cd37346","url":"./tags/hexo/index.html"},{"revision":"05ac3e55ab599969cf23f1df3813f042","url":"./tags/html/index.html"},{"revision":"3b875b8f5a8a79b36c8d888ed9822571","url":"./tags/iframe/index.html"},{"revision":"1e81a3a78e5ab64558195029b8d83bbf","url":"./tags/index.html"},{"revision":"e19ab5beb1282418f30fa11b2ab5e0d5","url":"./tags/java/index.html"},{"revision":"85df782bc653029499ced5b9e3e0eb28","url":"./tags/linux/index.html"},{"revision":"dcfa032e463b1f770813675b60489c36","url":"./tags/liunx/index.html"},{"revision":"ec851f772cbab61ff9d20650a49fd3a5","url":"./tags/markdown/index.html"},{"revision":"b591ce74920455f3ed138a0740b857f4","url":"./tags/md/index.html"},{"revision":"f18262dbf630abd60f434f45c35527e9","url":"./tags/md编辑器/index.html"},{"revision":"d083c58384105de66c3c223faca80d20","url":"./tags/minecraft-JE/index.html"},{"revision":"967f4cc01a4570d09ec82d79ea93cd75","url":"./tags/minecraft/index.html"},{"revision":"3c2b37267694407e1198555b3cf43bd3","url":"./tags/minecraftJE/index.html"},{"revision":"5b7cbb4be50cfc6367bfd8caf885b80d","url":"./tags/node-js/index.html"},{"revision":"cf1735e7b28cc28d818037bf48b47271","url":"./tags/node/index.html"},{"revision":"7e2adec09a6ef07f583485ca98e77571","url":"./tags/php/index.html"},{"revision":"eec1c67dd5ad3b88b7c672fe20db5a67","url":"./tags/picgo/index.html"},{"revision":"9c3ae522b5a880bd659704c8df90fa40","url":"./tags/python/index.html"},{"revision":"dd53c9c46d0af0b5171a8be410736f96","url":"./tags/ssh/index.html"},{"revision":"d99c7197af9ede301317c41ac793d520","url":"./tags/termux/index.html"},{"revision":"c9735d9c1463a05659fdc22c6b5b8484","url":"./tags/undertale/index.html"},{"revision":"2050bbfe398daeadf5dc1da61de748bd","url":"./tags/ut/index.html"},{"revision":"80261833fa78c877f3dcca655d0e6237","url":"./tags/vercel/index.html"},{"revision":"d96e3a4d734fcdec89b95f427d8a1b69","url":"./tags/website/index.html"},{"revision":"11f918e5816960e012277142b25eccc7","url":"./tags/win10安装/index.html"},{"revision":"2aacdd99893d9e69ae2658bc81df26cb","url":"./tags/Windows/index.html"},{"revision":"e997e89a13d54e089db934d96eed49a7","url":"./tags/Windows10/index.html"},{"revision":"9416c5d03ca19d6c8a534c512e59da40","url":"./tags/wmz-blog/index.html"},{"revision":"2aa68d015060bb2588d6430cde222a06","url":"./tags/一周年/index.html"},{"revision":"8f59bf38f873c9bd9848edfc1b6e2b24","url":"./tags/传说之下/index.html"},{"revision":"5c88276edccb05cf23768e8fbd58ba0a","url":"./tags/免翻墙/index.html"},{"revision":"c8d143ebcc752519e2cca6ccfa47cd70","url":"./tags/动态网页/index.html"},{"revision":"9ceb158cf4b26e03d68c27ba847d6f3c","url":"./tags/博客/index.html"},{"revision":"65ae10c57fc271d8ccb88cc7700bfe3c","url":"./tags/回顾/index.html"},{"revision":"617716044a18dff0eb4d0307a7f3b0eb","url":"./tags/图床/index.html"},{"revision":"7c8ea6961edea4e962f70096a5a668b7","url":"./tags/在线聊天/index.html"},{"revision":"871cde306c21feec76ed8e6b80bdc2fe","url":"./tags/安装/index.html"},{"revision":"7781188f47eb631eda60d63c6dfe868c","url":"./tags/工具/index.html"},{"revision":"7ce2bc82c4a27f209f5358d37976a79f","url":"./tags/我的世界/index.html"},{"revision":"2c0169983d936d7e154b7db880b4bb5b","url":"./tags/折腾/index.html"},{"revision":"7eea0394b57b5f5490b478eb96fdf492","url":"./tags/搭建/index.html"},{"revision":"9833f0a802cfe85701324c90e81a6dc5","url":"./tags/教程/index.html"},{"revision":"496659f0c975216dde4e1be53737858b","url":"./tags/日记/index.html"},{"revision":"a7eddbeadcac17d96cd2f625c46226ea","url":"./tags/更换/index.html"},{"revision":"163644e6bf284796584542efe8f857a3","url":"./tags/更新/index.html"},{"revision":"292250632bea2390500deaa98feb50f1","url":"./tags/更新了/index.html"},{"revision":"11a176a4e0d2461fd91c62b613f71ed7","url":"./tags/服务器/index.html"},{"revision":"ebc44e34c2961a6491eef436136b0389","url":"./tags/测试/index.html"},{"revision":"0d90a2eb2a49d7d48e8799304cc90a72","url":"./tags/百度统计/index.html"},{"revision":"8d6285b0bf50bf8fd0914a606f08c67b","url":"./tags/看法/index.html"},{"revision":"1a17c302c4e6e7238579a69160b487de","url":"./tags/笔记/index.html"},{"revision":"f7c5c310a834a87293abad3a9a7767f4","url":"./tags/系统安装/index.html"},{"revision":"7acef131c4908c77c7ed149ab33710fc","url":"./tags/袁隆平/index.html"},{"revision":"a4ecf4f1fd9a77d1d3a370e4b7ddf154","url":"./tags/迷你世界/index.html"},{"revision":"8e394bea39935db0bb184a095398e678","url":"./tags/通知/index.html"},{"revision":"b60a5e9a78719c43a84a41b87f3279e7","url":"./tags/邮箱/index.html"},{"revision":"a9a4292745ad27b7a6a4a04d21c780af","url":"./tags/随笔/index.html"},{"revision":"0791c87777f6f376cddafc63c5326bb1","url":"./update/index.html"},{"revision":"0497fcadf6b83c75ec4df94ab5067d20","url":"./workbox-f7715658.js"},{"revision":"2cc326181fe44d1db9004867e62cd97f","url":"./wsimg/browserconfig.xml"},{"revision":"9eb28ac4533a4f7d58e6d4490932ea3c","url":"./wsimg/index-1.js"},{"revision":"894ad29814051e75a07b165622548b4b","url":"./wsimg/index1.css"},{"revision":"1cbef85e62619086a54ef8e8dba40f82","url":"./wsimg/README.html"},{"revision":"ef6d498e54f639c8ee95928ea9904bc7","url":"./y-re.html"}],{
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