/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/11f1a2fc.html","4fd67a424c0c9b7a0dbe8d28ed9b5ad5"],["/1f7e3876.html","482e61892cc4f7fa785b6940fa644281"],["/2b244555.html","f434c79ce5f815c608ac6a1dfaee70b7"],["/2c7854e6.html","5542fefc136f00aec259d89f4cb1a829"],["/2ee2518d.html","581283841cde5fa13524c25273a360d5"],["/30422b3f.html","3ecfa4f9b6532624a3e3f5fe247f3c4e"],["/3494bf09.html","31b59c4b4ed1a91d4a0ee75b0d071b6b"],["/3e4cf0e1.html","d62ac046b80ef68033cf95f304a1f7ba"],["/404.html","525dec2ebf977e6262113a77bfd43b5d"],["/4283e7c2.html","1d5ab7b61f22c279975ef21c9e18b6fb"],["/47008bfe.html","a4fcd687ed31b4720b4c11a952ba8073"],["/496761e5.html","7f944204f216adc3eeea539ba397a53d"],["/49ab854f.html","07bc17ffaa243ec3ea8d2ebbe1bacc94"],["/4a17b156.html","41f71524655aade6d27582c75ea3bab8"],["/51f11683.html","7a29f3e29c121ba4f4020da3acf87846"],["/6057642a.html","cb990de488f23904da295c30070776e2"],["/60816787.html","9ca23c5a6c0474036ef0e249a18c1ec4"],["/68083ed.html","28cc0f128356c9c1de184efab54ac27e"],["/71e2d2d3.html","dbba8d0ae7b5361f8f62465fef933c1d"],["/748a29a4.html","e60ceeba5b1ed42e0aa93e855843ece6"],["/7bc26341.html","7998b7c3d9b879c13f0b44db876ecfe9"],["/7cee40bf.html","187412efb75bf4a7547617b85741225c"],["/836982c.html","5815042d02d64278d840afa9d7261a2e"],["/83d82948.html","15b903a9fee9f0e0f1b6fd1c64c9ba14"],["/8856403.html","75ee47a28089203b139f706953d3c513"],["/8bc291e6.html","fad1984e1a65f87851d8a9e85cd05131"],["/8d39085b.html","20b67063cbe42c9e71e6cf63cd1e5350"],["/9341b494.html","dfa3cbcbf988efa7c768326e0370c5e7"],["/96ccccce.html","46f341ad13b9f1a99ee85fc5fea45265"],["/98d114e8.html","2bf5b45ee5629dc70862b591f9346a8a"],["/a1be303c.html","a58ca557c9cad1959b8f6f3d5d8421e9"],["/a81556f1.html","0704602243691dc970001358c1ef077c"],["/aa96c821.html","212a6603dca427615125fc8c37285f6a"],["/ab1d37b.html","866076f323a488a387d06d71035ce2b5"],["/about/index.html","5cb93a2c6189eb0bd6bbbed879f3f984"],["/af886b34.html","8513dbf28900df7bd8c7a39b23ab0acb"],["/archives/2020/08/index.html","6545cc2dfe6e6f93ca8be3be29986204"],["/archives/2020/08/page/2/index.html","2491ff82a76898f9006cd5f4154be09a"],["/archives/2020/08/page/3/index.html","0e5a6985cb0d310e0d7b2d39fbcab067"],["/archives/2020/09/index.html","4909c72fd312e76f12f17c129497de6a"],["/archives/2020/09/page/2/index.html","c35237f5faf8e484efd7f3849ecaaab7"],["/archives/2020/10/index.html","552a17de463bb7c45f736558d1920de9"],["/archives/2020/11/index.html","74527df6c9feca26ca2bb878a71d98cd"],["/archives/2020/index.html","76794f4493f776f1065e1e5499c4563c"],["/archives/2020/page/2/index.html","5147790479023f52f2a672d00eb1de2f"],["/archives/2020/page/3/index.html","a60ae538655aa4438356663c587e5459"],["/archives/2020/page/4/index.html","a63153265806cf89af433d42280ecb71"],["/archives/2021/02/index.html","48512b79c5a26c6d406cd2d2113775ca"],["/archives/2021/03/index.html","2ad278a30f41a70a7d11eb95c9030dd5"],["/archives/2021/04/index.html","64f3093c40dd2554314870c0dc4df364"],["/archives/2021/05/index.html","cc8cb72861e69906f49141155fa5a2e6"],["/archives/2021/index.html","447038c4cd8ca3faadd1f6c8e3de071c"],["/archives/2021/page/2/index.html","9858c5e84baa4ceefb20d11c035b886e"],["/archives/index.html","ef68daf497ec8e69f85af20186f188c0"],["/archives/page/2/index.html","5135b670e6470fd29b463152da8ab95b"],["/archives/page/3/index.html","911f3b6c272a40911db59629235dab1f"],["/archives/page/4/index.html","208d2b43fcbbae28dc2153e0e67c6a3b"],["/archives/page/5/index.html","e67b8a38e182c681bc97a1ee1058812d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","6fff3e6eee30d17dd7cee563bf545e91"],["/bangumis/index.html","bf167c3e07d9e470e72fdc15c746f819"],["/bf3a65a4.html","4c36af0b1897f8693e50f5ab4a1bf760"],["/c1ee638c.html","bbc7740e171d5a5094c47366a46aae48"],["/c3119b08.html","038687c0b0a23c93590d21dc30d14d8b"],["/c6c9c4db.html","963b990b38702ebdacc3c3a7f48d3e42"],["/categories/index.html","41922604feebcd3141e37ccab4435dc3"],["/categories/教程-html/index.html","b347f91796687b3310b3d98d2160c7f4"],["/categories/文章/index.html","3d169621dba15a4ae2099d8dad46d556"],["/categories/文章/page/2/index.html","dd8d15c0b115a5e688f9cd2c41ee25ee"],["/categories/文章/page/3/index.html","8b5c448bd27cff457ae54e616662e194"],["/categories/通知/index.html","7f7aec8f46cfcc9ccf6df2a8e4e18eb2"],["/categories/通知/page/2/index.html","62cb1444ac814e1c1fde02decf913bfd"],["/cd843bca.html","34b122c0b862c6ae09307baf6c26f4b1"],["/codemao/join.html","41695ecfc51583353cf969ec0a634e69"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","35378bb3dc77d7bfc8f9dc7954c3bdd8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","2acb09af2625ac28e997a1f3861f76a5"],["/d2bd8f46.html","0be7bf8df3e1e85f96919c9bd07e9421"],["/d46f6783.html","67ba146e00fc5936815f1d5c1a97cd34"],["/da033cd3.html","fabdb7ba2199aaa3012feded5ce09291"],["/dfd2f59a.html","fe260672ed0f201eadbadafb7a412920"],["/e4d07d47.html","15e250d18707d3c36b6c019112bd5dde"],["/ede49718.html","095b1485441dca5b65a33a0e062c8e68"],["/f6485125.html","d9900c375d3c0595c131acaafbd7574a"],["/fa1bfef3.html","0d1d05ce2285c889c0bc01460ecddfe4"],["/fe275fd0.html","2bffb6f37ea2026fe1f41bdd5dd94c5b"],["/from.html","a3c98c40cec05d338b14448217a95eeb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4e02fd1396328bc53e5bb2a0779976c8"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","d34cb44ef4d7187a729f00933fcbdf33"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","e00a7ede973a0c6cbc96fe21fa21943f"],["/other-page/video/index.html","fee678c518c61e5cd146cb6c79bdf2c0"],["/other/index.html","16fe5b0447cc320e608cedbe25a3ef36"],["/page/2/index.html","7e37e398ac19d7b61cd68f64ce1d54d8"],["/page/3/index.html","781c72e4f8ec78a88b8f6da2cc286bee"],["/page/4/index.html","033fb1495973bc65cda1a2b4fe215782"],["/page/5/index.html","369b65071dec15b702eb9e2d1967358f"],["/random.html","5cb6bef5ae129dadb1246572e0a7f4cd"],["/shuoshuo/index.html","f170ba5d5d1e63815ccafba95fb380c4"],["/tags/2020/index.html","a05c89eb0ade5f91012257c8f584e7da"],["/tags/404-网站/index.html","25b2b2fc2e6531a5286d94a5fa06052b"],["/tags/CF/index.html","39f4cc2424b6b3491ad12dea0153020a"],["/tags/CFW/index.html","8ce5ecc61b6a71f377b2cb5d9161b024"],["/tags/Cloud-flare/index.html","80fbdfda8a1f2b9eb1a0f51c48b7a878"],["/tags/FA/index.html","41c86f9b9f0f76fc9598056c2553d768"],["/tags/Termux/index.html","8f57f55e679eedeebcc7ba7aa18ca0b7"],["/tags/Windows/index.html","ff239f04801bac913344748e54d180d7"],["/tags/Windows10/index.html","be66fa07a0edcbcab7c0580d638d109c"],["/tags/android/index.html","07653e546a8305fa65b2744cc986efe7"],["/tags/app/index.html","be970c2807cd69a57c90448ff196bbf8"],["/tags/bilibili/index.html","8d86ea9579010830357015a6f3d463a3"],["/tags/dao-voice/index.html","251021697a5f0c2da39a59dd8c02f52b"],["/tags/debian/index.html","541258accbbf05dd571a7208ef4e0122"],["/tags/download/index.html","64439630b733baa6ab2d435feb15a18f"],["/tags/fusionapp/index.html","817dccf68435108564c68fa689ea72e8"],["/tags/gh-page/index.html","bc94bcceded9675e8d9980fa664ea3e7"],["/tags/git/index.html","6277c975e92cd8cca8d6bfa126887574"],["/tags/gitee-page/index.html","c5ea5911e1522c415ac7f8b9199eb175"],["/tags/gitee/index.html","cb1ee902b657dfc57a876d407cf72f9a"],["/tags/github-page/index.html","028584d6e5ad5feaebdf813909e5716b"],["/tags/github/index.html","fdf8dcdf411ba297b5121e051d40fa79"],["/tags/githubpage/index.html","4b115568ec0bb1a985b112ae68b6a06c"],["/tags/hello-world/index.html","0a491d915d59d1f55ed03170d6accbdb"],["/tags/hexo/index.html","4e488af81d9240db67ba10d0457ea1bf"],["/tags/html/index.html","af4c19d3dcc8e6f5019b572df69b1c9b"],["/tags/iframe/index.html","cb56f84de80be4b9962621db014d6d6b"],["/tags/index.html","20f8ed8f32df4d4750d3e382fd9550b8"],["/tags/java/index.html","6711b6ca17c3f657b89ce8095dbee780"],["/tags/linux/index.html","d6ebb8806176d9b359803ba58b9bf252"],["/tags/liunx/index.html","3a7c985a44df3f8ce4ab30dbf2a9affa"],["/tags/markdown/index.html","3b9f87b23115837ae41e04d74d701d31"],["/tags/md/index.html","f77a3668cf7ed6f0e94dc5dacfad2c54"],["/tags/md编辑器/index.html","aa9184598a9761e5f7624b3767c074ec"],["/tags/minecraft-JE/index.html","eed5174e858859113d00cee0291f32ad"],["/tags/minecraft/index.html","5b1e8a127cecbd4817ccbf75e854fc5f"],["/tags/minecraftJE/index.html","fb2c8a9f2c79db86e41165a0652761c8"],["/tags/node-js/index.html","9c2a135896cc656742a2a98445938113"],["/tags/node/index.html","c6c54dc518a9806d5b3c4d56a8f50026"],["/tags/picgo/index.html","598ec6dd20380a4ba5cd9851da916df2"],["/tags/ssh/index.html","f1a878a7236bf22653cb986ccd964cec"],["/tags/vercel/index.html","b3fdf91e4d35e733a3ff53301c5a4f45"],["/tags/website/index.html","03039095e54ae4455dfc5d67bc7e2017"],["/tags/win10安装/index.html","2c117c5d538c77cbe75f8c2053096821"],["/tags/wmz-blog/index.html","df2efc76d7d21ff54a2f7603fafc4c43"],["/tags/免翻墙/index.html","c42bb1ed0bfded3cd7772726b07e34e8"],["/tags/回顾/index.html","fa604cfe35362536eb5982dc738f177d"],["/tags/图床/index.html","48c98b90dce51fc177d0df57c339d85a"],["/tags/在线聊天/index.html","05365dd9d40e4df9db67ee34ec260a91"],["/tags/安装/index.html","94b632933e389c71ba0e3b0bacd31bdf"],["/tags/工具/index.html","d212a2a15d64557278da270bdec20338"],["/tags/我的世界/index.html","0cd1c66074f56c821e425e1ea10e6bea"],["/tags/折腾/index.html","3a2d06f331a0601dad2dbaa34ba5ea14"],["/tags/搭建/index.html","a729db53bbe3936e28355f79381b6a5c"],["/tags/教程/index.html","d8328d806dad78289a4723dbd7029550"],["/tags/更换/index.html","547f5173dcbe83a1086f992d91cbb468"],["/tags/更新/index.html","465354771d7e97edefb6eb426d198164"],["/tags/更新了/index.html","8a6b08b3a29df2f2f763596ff7f20ec1"],["/tags/测试/index.html","463fec52ade3c1770909a4362536d615"],["/tags/百度统计/index.html","05064b1b166fe519c8d23d424192598b"],["/tags/看法/index.html","fa3f4864c7263469fc5a865704b5c204"],["/tags/系统安装/index.html","8815acebe05c292defdfa927ff75503d"],["/tags/迷你世界/index.html","26408bed7582594188acf1d373d8ee90"],["/tags/通知/index.html","21ef89f9f5f7ac5a67b1cba0a38c728b"],["/tags/邮箱/index.html","3b063b0b6a4bce7beac681566eb91fa9"],["/tags/随笔/index.html","7480eb59d4fdfe8c9537c1e6bc232c9d"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://wmzwsa.xyz"});




