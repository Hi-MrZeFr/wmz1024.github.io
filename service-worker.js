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

var precacheConfig = [["/11f1a2fc.html","17c0b4db78389fe5aea6430d534a4671"],["/1f7e3876.html","b90657125d20045b7a5a20d07de67efa"],["/2b244555.html","5127bce408cb17ae2b64a76b9451ad21"],["/2c7854e6.html","df777957ea22f362618b4742bd8aef01"],["/2ee2518d.html","e7b81999470b2a42a0e1b22a2ca2a1fc"],["/30422b3f.html","2316f0346471cf464fca604736ea6cea"],["/3494bf09.html","a5b1d7a815bd91dced45b87a9465597a"],["/3e4cf0e1.html","cc6476fe0db5f2d8a1a9622b58a6e69e"],["/404.html","a10cef1c94ddb5e20d8f3a36b307463f"],["/4283e7c2.html","9ce2fc2c7925e7990f233ce62e716bc8"],["/47008bfe.html","74b6ce62acf98c0c6fa41ccc1c3b5fe9"],["/496761e5.html","e8b985d5b4f8515316dae3e296e79d14"],["/49ab854f.html","261ba4cdae31e9e4aeeaded8fac9275c"],["/4a17b156.html","156cfac4e6b05e9a93e0c59739d0b54b"],["/51f11683.html","87a40124c162783339d0c39ba987097b"],["/6057642a.html","c21eb5a841be1104217dcfc53407be0b"],["/60816787.html","8a3e9caeab67ea70c19d3fc1b8fc9e94"],["/68083ed.html","a7771b29e43495f14803f3b50106fd3e"],["/71e2d2d3.html","3e2f2870d019afa9dc2e52d5199e877f"],["/748a29a4.html","4c247fb445cafb549ba6dce7a7e5602a"],["/7bc26341.html","3f88adcd64b8bd0e71d84fa14d5f71d2"],["/7cee40bf.html","cc93a44e2e6d73977c87ea7198bbc5f3"],["/836982c.html","969e97e5cfda7a6d5aa222340f066489"],["/83d82948.html","cfc4fe3cec50a6749b0d8dba55f156ea"],["/8856403.html","1a7e5cf2b7d6a71568d0116e017c481b"],["/8bc291e6.html","3c36ae1db1c3f37caaca52f5ba2a5c62"],["/8d39085b.html","15ab58a22d7771dcc497ac00b4dc1f01"],["/9341b494.html","cda1ac0315b9d6021fceed659e95b8e1"],["/96ccccce.html","3f874d980afbdd80eb0278bdda6cd407"],["/98d114e8.html","8b4bb252351b7683668e267c107d614e"],["/a1be303c.html","ad94863ba20a4c90123e9e7aed539861"],["/a81556f1.html","1e0511d60d35c4c11592ec7b4b7b74eb"],["/aa96c821.html","49c78c01fa21c022f0dbf918caea50a3"],["/ab1d37b.html","0a786b7ae0b24f57408cc022eb4d0f2d"],["/about/index.html","07b5d426f6e1c36c177807e90f95dce6"],["/af886b34.html","3ffd88165e7a890be254d0b0929c5b03"],["/archives/2020/08/index.html","5f0fd3932abdffb63308904d92688a5a"],["/archives/2020/08/page/2/index.html","f5de92c110d269aed0bd7d7a900fe57d"],["/archives/2020/08/page/3/index.html","3b3df41fb03f2c5e9bdd1f020de3689e"],["/archives/2020/09/index.html","8459bef3d11eccefcb2f7fb844b9e0a0"],["/archives/2020/09/page/2/index.html","b44d65e0aba957f5abd7e24b219afeb4"],["/archives/2020/10/index.html","5e83ff0373ad2b962a1a9056c4b544a6"],["/archives/2020/11/index.html","ad1f057d4933a0baf732678b2657ce65"],["/archives/2020/index.html","9986a5c1b68c18cc165024f4536b2eb6"],["/archives/2020/page/2/index.html","eca4580211adc8a5c4d689295d9bda0f"],["/archives/2020/page/3/index.html","306ab92c9f3a36a6c8667ac289f4aef8"],["/archives/2020/page/4/index.html","cee4df23548ab19e6db8391b404f5ece"],["/archives/2021/02/index.html","9414cb1b30f1b0c1b738342ac9870f9e"],["/archives/2021/03/index.html","4e9eb42087324cc811c1fe4dc3c32c24"],["/archives/2021/04/index.html","2014a3ecb43658a2b2b18ca1a18cc0c5"],["/archives/2021/05/index.html","f9d27a260ba22c372f0a70d1065c5036"],["/archives/2021/index.html","2f303f098237f04f2cd940cde9a9f36b"],["/archives/2021/page/2/index.html","3e8bbaa2db65d9eeb50de3698404e0dc"],["/archives/index.html","277f7863ef02342693881f27fcae3264"],["/archives/page/2/index.html","06707e7ab519f8a158f7ff627e05b706"],["/archives/page/3/index.html","0ecd6d6920afcc16c5d956694ad99bc3"],["/archives/page/4/index.html","2eb5f9de5a36443abeb299fe8db37588"],["/archives/page/5/index.html","79923448077de09f2c8f3d55a7a3d2fb"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","d230d34533144793175bc4591c8ae97c"],["/bangumis/index.html","7818c681dd148ea9d92a7d1ed695b43f"],["/bf3a65a4.html","879ff20980cecde6719b19257f7a7d82"],["/c1ee638c.html","586023d5d7e1c6e93a723885eedb6de3"],["/c3119b08.html","a14855de72c4365c89e742a041bb6ea6"],["/c6c9c4db.html","91d5a9198f0f44a066d45409ed63f734"],["/categories/index.html","eb69821d104b51c21fbfbfd66a8ca3ec"],["/categories/教程-html/index.html","ed1d3a348866165ffbe5d0c6e5681f38"],["/categories/文章/index.html","6c8bef89babb6c5f49b7e5337aacf9c2"],["/categories/文章/page/2/index.html","6dc3a3c76dba12151109381112dab0be"],["/categories/文章/page/3/index.html","c3f1d4785c6dfbebd99a212d4133fa6d"],["/categories/通知/index.html","da5408e95e45f2ca5017816c3b69ca6c"],["/categories/通知/page/2/index.html","84861a50ad8af8c5dda0bcd70f8cae78"],["/cd843bca.html","03dfeb52a1dcf3ff93fe62776cb71657"],["/codemao/join.html","34928aba781eb5bc5f31275af5f5597f"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","35378bb3dc77d7bfc8f9dc7954c3bdd8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","5f22debf572b18981fe41b371b560697"],["/d2bd8f46.html","9f6dedb28210ed096a5e94e4f49e3fa9"],["/d46f6783.html","e7bfc473b0b8774fc3dbaf3425d49089"],["/da033cd3.html","3565a5c03d087bb7df12d0ff7f6956b5"],["/dfd2f59a.html","e8c6934060f4b486119af6d05ca2e3f0"],["/e4d07d47.html","a433d6548f45e2173338212a671c496f"],["/ede49718.html","409e45bd2b2c3cc86c9db6afb802f1fa"],["/f6485125.html","82d939604b58285e3532d2d8d1c2a76c"],["/fa1bfef3.html","cfd516c57e1854f897ffa849176ec142"],["/fe275fd0.html","78aa7d0b034c32c343f24e9492e99f67"],["/from.html","a3c98c40cec05d338b14448217a95eeb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","dc4c6ba33fa92b6c22adc102fdd33577"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","ce85cec5ffcfc539a21bc0a316774cf4"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","086d9f6879f248f92eacb576c4b854e7"],["/other-page/video/index.html","129b1de5b0ff122373b11b889645894a"],["/other/index.html","5ad890677bcff84bd96e0a87b193151c"],["/page/2/index.html","94ef24e81b2efb0d60ca216a182e6631"],["/page/3/index.html","d866feacf1bacd306965d90b931ef54f"],["/page/4/index.html","32072519a3a3a3769195b98d9110f14c"],["/page/5/index.html","4345269b8368801521b1c57be55c6ddc"],["/random.html","6bff3f8afa65ad00524ab2e57639ec52"],["/shuoshuo/index.html","1a587dd5b622f307ed7c16ee022a06e2"],["/tags/2020/index.html","975cfdfedbe01dd7c0ab1c59c3bbc3da"],["/tags/404-网站/index.html","92f8a9e5a9800caa7a4955772dffb6ee"],["/tags/CF/index.html","b3059c91e090bc6d72bf96671118ff91"],["/tags/CFW/index.html","8934080d39e4bcb03368e5f58d0abd68"],["/tags/Cloud-flare/index.html","2b207088443944b0e341abc50b4db223"],["/tags/FA/index.html","561219ba40d3a12207f669eb8f738caa"],["/tags/Termux/index.html","d82c84bf7c138c3ad55614bde62e1d7a"],["/tags/Windows/index.html","15ae8ea679d8230450aae6d2d5bebba1"],["/tags/Windows10/index.html","d5f4ae49e17afda5032d7424474bd517"],["/tags/android/index.html","302aa25b3117b676b243b8a859af3783"],["/tags/app/index.html","1232411b5c137fa7f16af65b46afe59e"],["/tags/bilibili/index.html","d6798ea347a5982719391dce8adb3216"],["/tags/dao-voice/index.html","45ca143789f022f4fe3609e8017dc0f5"],["/tags/debian/index.html","b6e599547cb15a4cbd279a2959b024e1"],["/tags/download/index.html","c74d6a36821a0a1d89b1d975ad52ae83"],["/tags/fusionapp/index.html","e4e6e43b311bac753ab7efe0b8877c55"],["/tags/gh-page/index.html","ff96b4526bcf1dc9a221fdce78f6b99f"],["/tags/git/index.html","ba156f1f2d1424ca628922907a04cc4f"],["/tags/gitee-page/index.html","5af436a1bdc1714e45ab5db4bf00aa80"],["/tags/gitee/index.html","6a873ec3bb9c3dc4798a102f01c4afc1"],["/tags/github-page/index.html","228ebed847d7055f346b52b7b714289a"],["/tags/github/index.html","4817cde34ba824e071a1288557165ba1"],["/tags/githubpage/index.html","edbe08709e87bb11dea9e28b7f1e38a4"],["/tags/hello-world/index.html","3ad28a9c7db36eb18c989facef7eb65b"],["/tags/hexo/index.html","141278079ad9133e9837e7de9d6077a2"],["/tags/html/index.html","913fa0ab00aa1c045de6c94462c515c0"],["/tags/iframe/index.html","4b9840b316d7332ecaaf570d2bf1c2bc"],["/tags/index.html","f16efa21b966010ffa57e15f34ec2d47"],["/tags/java/index.html","da82ea9e3a715ce4cc7625dadde91450"],["/tags/linux/index.html","5c98048e66053f978ef5bcb350b243cc"],["/tags/liunx/index.html","effae8b59ce10195fb14d83c96833271"],["/tags/markdown/index.html","09bb1a2d0b9a15e60fa3e56969abdaef"],["/tags/md/index.html","9b84e640e38e17e74ab68e1d6594a285"],["/tags/md编辑器/index.html","79a452d73d334d5f39be3517a71026ed"],["/tags/minecraft-JE/index.html","c5ee79d63fbd19305f8b6714f97be3a4"],["/tags/minecraft/index.html","2ecad99c2643d8a7721c5af3f0af6f45"],["/tags/minecraftJE/index.html","9c2b252f75e78dfff3a2cd4c3947c35c"],["/tags/node-js/index.html","7c0a7e9988903ee907bd1741bbecc678"],["/tags/node/index.html","b5857370e733896962340771fd9667d3"],["/tags/picgo/index.html","5b2b69b33b12155475b40f22210a4dc6"],["/tags/ssh/index.html","060bbb84bcc621a6dee3ad9056759629"],["/tags/vercel/index.html","dbbc86e9f2fd4e88516128b7ed261dfc"],["/tags/website/index.html","eb1f8510f283eb7e6189cb8ced9aa70a"],["/tags/win10安装/index.html","bbd58c2f70f1cbdda984dde89b5a232d"],["/tags/wmz-blog/index.html","97581be6ec830a44bf7fa7d16516c45d"],["/tags/免翻墙/index.html","63ec40d909e109503133b640b10d253e"],["/tags/回顾/index.html","6157d6060e28466fab6db04e938787a8"],["/tags/图床/index.html","219c6d4f1f46dc0f7d33e5271fa588ea"],["/tags/在线聊天/index.html","47b900bdaf0b3b6308f2a6415471a9c6"],["/tags/安装/index.html","7476da981e8e4ac6440190400e69d36a"],["/tags/工具/index.html","99ff65d13dc5e3dd0548adfcdda6079b"],["/tags/我的世界/index.html","c8343452013e87fdd79a61069e715519"],["/tags/折腾/index.html","aee0bec0ccb151f93f553f930df8c20f"],["/tags/搭建/index.html","04996b2860d9c9f63e8630b280613d42"],["/tags/教程/index.html","4bdf8d71c1e77c1adcde6e50e8eca711"],["/tags/更换/index.html","81d967f3f66fd0147552196f2132375b"],["/tags/更新/index.html","a02d483f50af34bace163d6203eb3bf7"],["/tags/更新了/index.html","bcb0844be2a33ca3f1838161e72e8f26"],["/tags/测试/index.html","43542bd594958352fd7ad2331f99ee5f"],["/tags/百度统计/index.html","404096e17a21551d47208ddcaa65a3be"],["/tags/看法/index.html","da0d3f6e67c6a12f0b3f9a442f355c4f"],["/tags/系统安装/index.html","1c14c84c1b86de9b97f6482a5a45ddeb"],["/tags/迷你世界/index.html","d5166b4e582d11c27c068059aaebbad2"],["/tags/通知/index.html","6d6d56763b14c22a09256300c7098c39"],["/tags/邮箱/index.html","47bf9e9964cc5bcf1020fb2975b6900c"],["/tags/随笔/index.html","295e8bc5007419d16125e121466c0378"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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




