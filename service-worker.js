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

var precacheConfig = [["/11f1a2fc.html","3ba4b59cd4700caf33ff15df51273d1d"],["/1f7e3876.html","da6b056b8ee9c2f45518edc4787ee609"],["/2b244555.html","c865d21675d27bcb7dc508221dcda7bc"],["/2c7854e6.html","635d1d1b347d9ab3b0879d641adbc5e5"],["/2ee2518d.html","0c17a605caaa33b92a96f96570ac5009"],["/30422b3f.html","36c1fa55bb2e0124ac8071217ba40809"],["/3494bf09.html","c55186fa99aff6e5aca5aa415a6e4856"],["/3e4cf0e1.html","4898cd48b976274106a6ddf3a2f984ca"],["/404.html","50128ab475b7db7139e9108819f05a45"],["/4283e7c2.html","ffaf953fa18c98317bce7cb5fcef1d01"],["/47008bfe.html","4eb4c810930539f7805bc9d3d39008c5"],["/496761e5.html","d86dfb5a771ef9cfd2c451a4cc8d4078"],["/49ab854f.html","e059472b1fed4410f619bee53839cd6f"],["/4a17b156.html","a20b096a80a27df6d12cd6f14c7891e0"],["/51f11683.html","5ea8d47ff379c69bdc75c7674bdb310f"],["/6057642a.html","24469b1d295fa8b58d9357363d614b6e"],["/60816787.html","36af20dbce886b1df8e3bad02b2e61c9"],["/68083ed.html","6a674d614d219497524cc7a365133ee5"],["/71e2d2d3.html","bea12b51356ccced8ce54ed727356596"],["/748a29a4.html","f0f38b9da4b5df34417331a4987c248a"],["/7bc26341.html","3faad0937d885bc029665ad35ed48c7d"],["/7cee40bf.html","4eaba96e20b3ad6d8b94389b9faa4e22"],["/836982c.html","1fb9717be0de736581831ff5ad37bbff"],["/83d82948.html","843cee16b5b9ba243dae86929444aeb9"],["/8856403.html","f8b3c0173ff0403e8149ee6c4d64a230"],["/8bc291e6.html","2cbb4c325da7e18bdee4725101790925"],["/8d39085b.html","b8458ea4dd38ae816d50bdea6075b5df"],["/9341b494.html","20cf2adc651b3e414ff2c8cf3b118053"],["/96ccccce.html","2c8162c5f8dbce0c2cfba1ca1d0538d3"],["/98d114e8.html","8fca493d2dcc4f899aa942d1cec12d8c"],["/a1be303c.html","84c3f32800bfd0d506c6712add9f13f0"],["/a81556f1.html","9a602866ca968f397639cb778a3cb8a0"],["/aa96c821.html","f3c6125c1a0fb196a5539252260962f6"],["/ab1d37b.html","bd4c6f12f699959955c134009a5155c3"],["/about/index.html","e814ab28e8634c1a978e98001ed8ed63"],["/af886b34.html","eb6879bd64f1b13705378c37d136e89b"],["/archives/2020/08/index.html","f64e0111dfda228c7251b25777fc104d"],["/archives/2020/08/page/2/index.html","c894ee6d5e3454182f5c9091700da556"],["/archives/2020/08/page/3/index.html","a723d9775b67837df3c11afc9723f118"],["/archives/2020/09/index.html","1b0e91f953cabd72d79f050b9b4ffb28"],["/archives/2020/09/page/2/index.html","46017b27a024bc2aba26d1612ebb564e"],["/archives/2020/10/index.html","351b95bf2f146dbb08a2a0038e3548ea"],["/archives/2020/11/index.html","756244dc9b9cbada84f4593693d5f019"],["/archives/2020/index.html","8d2e5ebbd5f26fa68ee8268e12de6456"],["/archives/2020/page/2/index.html","4fb09adc3d82374ef6e79ba26208109f"],["/archives/2020/page/3/index.html","9eaeb8323507a25f49a5c7fac901641e"],["/archives/2020/page/4/index.html","0a32a22f5bee620e6184531bdc2ae3ea"],["/archives/2021/02/index.html","289dd27419be8fb32f7312d5da897c1e"],["/archives/2021/03/index.html","4c1f7c798e87fc72c6cfa3b2c1aa599a"],["/archives/2021/04/index.html","39894b352d076d50dfc51f2e4c53bff8"],["/archives/2021/index.html","87c5cda55dddb046ad6071e0d5824137"],["/archives/index.html","4388f30e3192b8db2eaa9f8d8138b325"],["/archives/page/2/index.html","c32829cb6e861c5183c855e798793744"],["/archives/page/3/index.html","696feaeb2aeb6c15295be1f6709885b9"],["/archives/page/4/index.html","d3e29f3be2c2dace5d32d3096f33dbd9"],["/archives/page/5/index.html","e41664ed4dc8d937a16ac990c81d7067"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","69f3952cb2302de2576a2c3e6bba4995"],["/bf3a65a4.html","00ef10f889e5942e578d518dc71efb46"],["/c1ee638c.html","8ce61c0ef16ed9d83290c5956f8ad350"],["/c3119b08.html","f60e5edc27fbd2d66932b9acbc417cf4"],["/categories/index.html","b95cb0215ce23f28e850b2b0b990c892"],["/categories/文章/index.html","6d86660070e057b9916458b0eed951de"],["/categories/文章/page/2/index.html","89aea696ff4aa2acb3440f2a4b158dda"],["/categories/文章/page/3/index.html","09d34e375a42656cf9ef1508f9f285c8"],["/categories/通知/index.html","3c9fb320c484c1b4937839202e936247"],["/categories/通知/page/2/index.html","64b641a81097dae2f16a980101e0b967"],["/cd843bca.html","005d135657b973c08b01aa5bfaebe15d"],["/codemao/join.html","48180b7ba33a76338aa74310341c51ab"],["/css/index.css","35378bb3dc77d7bfc8f9dc7954c3bdd8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","e6d3d74d58372b72a829e3595042607f"],["/d2bd8f46.html","f6725612e3102dea0eee6f342b577018"],["/da033cd3.html","5cd7b01ec59f71771a215e5cfc0e299b"],["/e4d07d47.html","7d06a900e4dff79c4c946a3b5a83a0d2"],["/f6485125.html","8787e5e21443d32e7cd4e77f0772ad8d"],["/fa1bfef3.html","6a4ec93b63500583f6b22def03817e68"],["/fe275fd0.html","07be2fcb8e77fb8e7d526355e9b068bf"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2a4f7899d15baf89ee7f65e1cef91cde"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/link/index.html","356350cef4b5e4b5febcf1a1c7b4618c"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","106e3dd618d21781440485bf4e089a64"],["/page/2/index.html","6a28148258862061ed71800c60bd5de8"],["/page/3/index.html","fe630e2953f7175ecac6ccdef4d67ef3"],["/page/4/index.html","9d465ecfba76c2a0dad4cc458cb9648b"],["/page/5/index.html","e1f51661cc037cc449a47e72256ecff2"],["/random.html","184b7f390d3cbda268e2d15d0c2fda57"],["/tags/2020/index.html","a60950ddb8eb1e04a7c04d730af2793c"],["/tags/404-网站/index.html","addfefa2b2bd4c6b70010afa2c1e2aa5"],["/tags/CF/index.html","99cb4ff3b9fc99e0fa6705c2e0e106f1"],["/tags/CFW/index.html","1f41c69feda12b38c5a3b0f2992406ac"],["/tags/Cloud-flare/index.html","480677e1340b4f1e5d73d66b6169a42f"],["/tags/FA/index.html","fb1d3a5ee83e9456d51f7ab2e88ade9b"],["/tags/Termux/index.html","879cfd42a6ed59740d0deb76f12b5c73"],["/tags/Windows/index.html","4cde19c87ec403fd5f4f71a477714e21"],["/tags/Windows10/index.html","ae012841014ecd105c561a6fc3bb1132"],["/tags/android/index.html","a7205a6d678aaeb799816e46fb33ec11"],["/tags/app/index.html","8880d569a396030d01168fd36c36ca8c"],["/tags/bilibili/index.html","c93643003fec20562d4ff1d375f8b5cb"],["/tags/dao-voice/index.html","2f9d54c79e8ae89272df8be203b1af38"],["/tags/debian/index.html","e6fc9bc5169adb418dbd4e2ed8e2e7a4"],["/tags/download/index.html","f0287937295bacf98a524044dcb468e5"],["/tags/fusionapp/index.html","68d0176db4faffb6b52ce1fe9ebfed9d"],["/tags/gh-page/index.html","f063e35e4ba0186ba25c27eb522920b5"],["/tags/git/index.html","9d520c6d9a14e1696c2df2603febbdd4"],["/tags/gitee-page/index.html","b185528af53a64b917478a7a7cf1cfa4"],["/tags/gitee/index.html","1c7b384d669330894c7dc9f639ffe468"],["/tags/github-page/index.html","1b25fa6bfa971a0037c6c1b953a5528e"],["/tags/github/index.html","86ad795852f793f5eda478bfc565f004"],["/tags/githubpage/index.html","4486358e9d48181ea09a61cfa2f7749b"],["/tags/hello-world/index.html","2e134d50df03ba1d98210bcf925ecee3"],["/tags/hexo/index.html","114796c6f7285af697bc409e3d3770b1"],["/tags/iframe/index.html","24f5bf3b7653b0ddebcf04c6126d4845"],["/tags/index.html","291120ddd63047f164c2161e7097b5f9"],["/tags/java/index.html","2d6d8ea0b82d079c9fb9d41d867e5848"],["/tags/linux/index.html","fa3e075b1d9f05111365097f002cca94"],["/tags/liunx/index.html","8383cec5795e22dee055161dad271dbb"],["/tags/markdown/index.html","9b569e4f6145badfbeac017fdbf967eb"],["/tags/md/index.html","5a6bc115b47ca304d03008f2b8a23ce1"],["/tags/md编辑器/index.html","95d9091ca8c2606b59c8f4fd060875be"],["/tags/minecraft-JE/index.html","3a54897eaf33f6fd1745d03043fb188d"],["/tags/minecraft/index.html","ccc6f761fc0e2020a6cac12c52244a76"],["/tags/minecraftJE/index.html","e3bf2330ff3e038a5e73e3f8253596b8"],["/tags/node-js/index.html","b67bca21e11bb597f84f5816c818e5db"],["/tags/node/index.html","49c03fd5ade3af0cb46ba5c949fe73fe"],["/tags/picgo/index.html","e8e6fbc476a01b5d7ff210c747955fc1"],["/tags/ssh/index.html","2be00321fcd9cf282c91d2ff617b2a2b"],["/tags/vercel/index.html","429fcdb0176af68006c82023972f043f"],["/tags/website/index.html","098db5dda26c712f3f4d30a732a3955f"],["/tags/win10安装/index.html","8e1619292e519bb7077b106efed60e8d"],["/tags/wmz-blog/index.html","df68bcc018470f33e3b54ca534508116"],["/tags/免翻墙/index.html","cda1b0af7918d7ba877222a4dc535715"],["/tags/回顾/index.html","a8fa9e6d2e63bb263c945c586fbb6448"],["/tags/图床/index.html","d3df1789e47b997d43e8b12efbe7dcbe"],["/tags/在线聊天/index.html","d9d65604abdb71043799ad68d9a83b4e"],["/tags/安装/index.html","65affca2be76e07a3dd9a41cc9f95d13"],["/tags/工具/index.html","3628e6419fe039297dad7696fcbcca54"],["/tags/我的世界/index.html","4ed6231582af1286a347ae5ebabafd43"],["/tags/折腾/index.html","66b77ba9ea3265f67d0c2fb592c976fa"],["/tags/搭建/index.html","114f33c6f56823186bbdd1ab7dc25b88"],["/tags/教程/index.html","5ef4cc292941e0593148721f459979e8"],["/tags/更换/index.html","b67ed6daec3831fb9d7ab2077f388208"],["/tags/更新/index.html","159be64a3b9682bb8a3ea20f18d36756"],["/tags/更新了/index.html","ba8136cf19fde819152e97ba6eecb6ed"],["/tags/测试/index.html","a0a5ff1759d4184a8c6274527f4ce3df"],["/tags/百度统计/index.html","a2101c0abcdb780d41c154ac390e8185"],["/tags/看法/index.html","25fc7b76d56084d436fdb222cf848462"],["/tags/系统安装/index.html","847c34ac9cc04698acbf1e1b6105ee5a"],["/tags/迷你世界/index.html","e5eb48c384e535dfd0d3f57d2e90b2e6"],["/tags/通知/index.html","d3be2c5d4d1ee48c33ad9546d1e30fc5"],["/tags/邮箱/index.html","e687829ad0ebf7aa72e046c8c5db68cf"],["/tags/随笔/index.html","0edd840e02750925c2a113ca2d881da0"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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




