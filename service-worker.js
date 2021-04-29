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

var precacheConfig = [["/11f1a2fc.html","5d9d45a4d57698062a1f12709b2497d0"],["/1f7e3876.html","ddc9ba0896a7f5154f9a84814aed3113"],["/2b244555.html","e8743a33dbc28a2c83efe4d4a4dcf516"],["/2c7854e6.html","1063a6961da72ddfed783d8dd04bea05"],["/2ee2518d.html","64535db482ee4613a300c9ce92c157a5"],["/30422b3f.html","ef9b70d01f65dc2281f8bfbbecaed0c0"],["/3494bf09.html","a275599b12c7e2b086fec63512b8cd51"],["/3e4cf0e1.html","5885abdf296ef9043c4ffcafac1fcbb4"],["/404.html","243f0b8fbc6ddf81f92a13318f8f63bb"],["/4283e7c2.html","677010723adfadbdd13df39e719f8d5f"],["/47008bfe.html","427462bcbe81fc1ef68d551c17ea10ec"],["/496761e5.html","4e07363a1302f5eadf06cbff2ea0a0ce"],["/49ab854f.html","5ea32c3b0f8b876b746b5cd4d726de1a"],["/4a17b156.html","d4ea13acf3d418bbcd092ca8a753b697"],["/51f11683.html","1ece2d4b3b5effa524df96fd2de7a4ea"],["/6057642a.html","e7d129e45b62ad83ff673a6420e2f2fc"],["/60816787.html","90e5e53a1135baf77c24b91890fdb38f"],["/68083ed.html","72b388b8c01f65fe9c9f1f48dcc0a23c"],["/71e2d2d3.html","c2fecfe3a9c65c805b91a5b39467f952"],["/748a29a4.html","481df89216e0dc3a14639cb57cfa8433"],["/7bc26341.html","a4a708d241a59c902eec29e35bd51d30"],["/7cee40bf.html","bdcf5ea50dfd542aac4492a68701e41b"],["/836982c.html","c51c4d397471262ed11a941c73128814"],["/83d82948.html","ab2397676f44fdf0a4b6d639f1930db3"],["/8856403.html","7acf623f929531b2a48eed2541356d76"],["/8bc291e6.html","c07061a4c2c6354c44563be3ff0b721a"],["/8d39085b.html","752f5f0311e2b68d971665dd964a55fe"],["/9341b494.html","a8636311cb547d86ae4599576c9dd5c9"],["/96ccccce.html","c30cf6f0700abfbf40a2b3f89fee8c57"],["/98d114e8.html","a91a40dc4fc0a844a34e51e8988feb1f"],["/a1be303c.html","2845a3c749d45c525e8e0f14adff4cfd"],["/a81556f1.html","3e95ec3916eb830739d4328db605bf63"],["/aa96c821.html","3a71843f7558f35b100f1fbc86be6070"],["/ab1d37b.html","7b54b224d4e33f8ccbd73e555204cf69"],["/about/index.html","a70171d5b5871be79f544951f4688c3d"],["/af886b34.html","57cf68e1c2b571f67f6e3f3b3f87b027"],["/archives/2020/08/index.html","0b4e64438aa03ecdaf3e831541f7d032"],["/archives/2020/08/page/2/index.html","31accfd404c634c45e2c807ca658d236"],["/archives/2020/08/page/3/index.html","c42cdf21b396c1c8857162ac9b9e74f4"],["/archives/2020/09/index.html","1febd67f7c7e87b0046b30a371800e6d"],["/archives/2020/09/page/2/index.html","b8c134ea4880fa2782d96a6a00e548f5"],["/archives/2020/10/index.html","ec1272255217b4d57cb7427454ff77bc"],["/archives/2020/11/index.html","1564b2b0a9bfae3118c21ca47e4e145f"],["/archives/2020/index.html","8bedfaae314d39e4233c530a7282be2a"],["/archives/2020/page/2/index.html","ea672b0a44c0297607cd17cb2ac6f020"],["/archives/2020/page/3/index.html","165ec76257e6952aed9f6acb436fdc73"],["/archives/2020/page/4/index.html","2a8f06b0eae71bc1184f15be5056819a"],["/archives/2021/02/index.html","2d8baeb7dd3c4e6622c2d34f9a3a26fe"],["/archives/2021/03/index.html","93099984a69a9a1841f0731bd6c8c318"],["/archives/2021/04/index.html","b51119c659714178b69c3e9184efa19e"],["/archives/2021/index.html","146e779bf6f69f75d0c81da8aff08471"],["/archives/index.html","ea5aee8336a98a1cb1b5a14a90436733"],["/archives/page/2/index.html","6dde6800ce1678b85d7f26e1d9cca535"],["/archives/page/3/index.html","c5dd4adc124f44b5ddb21394acff2935"],["/archives/page/4/index.html","a7d20abf5bfa0b6eb1a0cb0b6ff1e8d7"],["/archives/page/5/index.html","436fe36a6246e2b7bea630ebad752c35"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","7e194c7d9cd66377b48a406679a3b86c"],["/bangumis/index.html","3fbe2cd684af013b7e73c9422dc0f1c4"],["/bf3a65a4.html","eed6dc5248ed464333dcf73f9831ae45"],["/c1ee638c.html","16e1229cf1396a8c8bec09eea4d84453"],["/c3119b08.html","d97fc48a78f17dc5939c261bdfc39607"],["/categories/index.html","f18f0bed5467a834b253bb5db503f402"],["/categories/文章/index.html","ffb75d1502eff88c31228d063b144583"],["/categories/文章/page/2/index.html","4974df02e095987bc1ea4c709283194c"],["/categories/文章/page/3/index.html","be2224a0063449d70c5ed6756428e8ce"],["/categories/通知/index.html","3512ab96da2d6d01509eab13d633f308"],["/categories/通知/page/2/index.html","f18539fcda1ed2dd7c644c073db82e8f"],["/cd843bca.html","6e0b54554a5c5eb545eca4c10a83da31"],["/codemao/join.html","de3fbe8d478335e5927bdcf5c9360bfa"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","35378bb3dc77d7bfc8f9dc7954c3bdd8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","ad25d2f61c61335b405fbbda012294d3"],["/d2bd8f46.html","504e4c11b55e5735a6e7711d10b9df66"],["/d46f6783.html","6a6b265507e05bdeb2cce811a1e10d53"],["/da033cd3.html","23b4b285aceb74c45e2d12e597c08065"],["/e4d07d47.html","d7570ef3982fc810a474fd8d3a1b0133"],["/f6485125.html","faae92834282eb0f71c6d3199475956e"],["/fa1bfef3.html","8c3dd4db026dde84b7410c60366f44a2"],["/fe275fd0.html","6017ef977c419c50da0cf86a89e0c074"],["/from.html","1019ba14d6b754cf462737129f7b0070"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","706865bd971f3595c8bab16a374896d2"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","ef1662f35d945b670dc58bdc9c0ae9a6"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","5400f39bbc92733e693dfba7afec6d34"],["/other/index.html","d4b7fdcd0f72116c539af22614be1b26"],["/page/2/index.html","7e77ea027fcb9e8d29a430309c16536c"],["/page/3/index.html","690198f51c65cad23c01ad3135ef360b"],["/page/4/index.html","af8076ec9cef7dbf11adab462a65c268"],["/page/5/index.html","c4a0659e2235452c351634a25868779a"],["/random.html","98d6a10debaa402affab06041d080cc9"],["/shuoshuo/index.html","399e82893a7cb631797d69351b97dbee"],["/tags/2020/index.html","acad845bf1543f8bcf8119bc77b3bd29"],["/tags/404-网站/index.html","55ed7891a731c1c3f88fd41e8af9d827"],["/tags/CF/index.html","173891400ab2901ee1e4320ec1192fb0"],["/tags/CFW/index.html","aa5ac17ed94fd64edfc2d6c23812065f"],["/tags/Cloud-flare/index.html","e081917706eca31524a0c18e85ca2578"],["/tags/FA/index.html","228a3cbd5e7db3c3cd3de57e270de9d2"],["/tags/Termux/index.html","1513d2207cf7466ce91eab531e742caf"],["/tags/Windows/index.html","eefcc1e98644bb507e701498dc5d7c45"],["/tags/Windows10/index.html","c1fbfb848a7eb9a3e43139d36c0284e8"],["/tags/android/index.html","1603ec092bea0abfd23958a3827bf949"],["/tags/app/index.html","8fb306aae90f18a99ffe09271485dba6"],["/tags/bilibili/index.html","e01f725fa22d888cbfd1cfd63027c2af"],["/tags/dao-voice/index.html","b10f394ee794f552b52f729ebd4d0ca1"],["/tags/debian/index.html","d0ab0b36562d9abac8303f2167a2503a"],["/tags/download/index.html","d32a1476158d57c2beb77ae6f8430e80"],["/tags/fusionapp/index.html","024448b481b7b07a77f2c43a03d00fb3"],["/tags/gh-page/index.html","8d6d2af726011c02dbe1eabb3a08aa62"],["/tags/git/index.html","b9b1b9c9bf6491a75b0312e1687a64f3"],["/tags/gitee-page/index.html","cede28a3238934720d569e87331001b3"],["/tags/gitee/index.html","a1b63f76c01b2e7a1af0677915817ba6"],["/tags/github-page/index.html","426474ac5cc34721c2ae4b51f88dd10f"],["/tags/github/index.html","8ed2a295a8706e4d333fc085b701cf82"],["/tags/githubpage/index.html","6194be8742bce9a9e698fd3848967add"],["/tags/hello-world/index.html","289a4f8f513e8a4bd522b5c0b9b22fe3"],["/tags/hexo/index.html","7df1b12170eb93fb9d80f26bfba92a45"],["/tags/iframe/index.html","b89e7437c45e2883313134f684eefc42"],["/tags/index.html","5e8cd09d4a08d03761077c9c41b636dc"],["/tags/java/index.html","d42be254249ef4170c4b2d1c48702e22"],["/tags/linux/index.html","fb3bfcbfb16f6e8297f6e39fa70ab2d0"],["/tags/liunx/index.html","4c0441b98f6cf6486465c79f5001897e"],["/tags/markdown/index.html","7a639e07fac148f57eae3c70be49c551"],["/tags/md/index.html","79881cd48f13379f9b6f6d0283e4caaf"],["/tags/md编辑器/index.html","64cbed2b76de45bb966e6e0b4840c93f"],["/tags/minecraft-JE/index.html","5ff125d9fe838d6a011b4e9955bae1a9"],["/tags/minecraft/index.html","88859b6425357b721b584ed0acde1db6"],["/tags/minecraftJE/index.html","21be1de2758c1a9b458908989107bb1a"],["/tags/node-js/index.html","fa35f7e9b588de865380ee4359f57eac"],["/tags/node/index.html","659f33739a3e80288e78258373e6c755"],["/tags/picgo/index.html","9e34c72c094820c3abf21da7db93453a"],["/tags/ssh/index.html","7bf3db45d39fc9f768d2a1089e4b9cb9"],["/tags/vercel/index.html","26f5469765bad9e3b28997e1092eba63"],["/tags/website/index.html","69e62e245c60ca845f1eee29e7d04a83"],["/tags/win10安装/index.html","b49f18632a0cfbf993bf0f3cba83aeb3"],["/tags/wmz-blog/index.html","a0fd63b6af1717387a99c960b2f2b8b7"],["/tags/免翻墙/index.html","54b581baae9a497398afe06739a46be4"],["/tags/回顾/index.html","82c71944ea58f741e14959a6d3bd9ea2"],["/tags/图床/index.html","a1cab17640132b71ef319929ff61df8d"],["/tags/在线聊天/index.html","130cb86db6c65c8d89f808ec58765403"],["/tags/安装/index.html","12d7c05689006e1dae55ff5609a062e1"],["/tags/工具/index.html","5568a32083e2824ba3c9d00e6baa6db1"],["/tags/我的世界/index.html","e035b4a3aa82759a71c6df7c105e86d0"],["/tags/折腾/index.html","670c8d2b7811c32155193b9310235175"],["/tags/搭建/index.html","6ce1e848ca9030dc4a301afa35fec7ac"],["/tags/教程/index.html","28107101f50fad8a23245dd71b54d023"],["/tags/更换/index.html","f7b8acb02f2d1ef93d96c0e3ceac64cc"],["/tags/更新/index.html","8f1bc46d8d6835a9e72c56cbbf763c42"],["/tags/更新了/index.html","0169eedc51463d207b2c3b61380f5f9e"],["/tags/测试/index.html","4f8c82303f649db45bce82a73696a75c"],["/tags/百度统计/index.html","0117286fd8f821e56c2ec7af02591fe2"],["/tags/看法/index.html","c0e2e0e8768b4fcffa5a60859919116a"],["/tags/系统安装/index.html","1505703d7d0b57b1302af93a31eea929"],["/tags/迷你世界/index.html","4b24ef2f01aedfe8ac65048d010e89c6"],["/tags/通知/index.html","a57543035eb3a9f76d4708eb4d97a074"],["/tags/邮箱/index.html","dbf95250c12c0f2cea374068fb2637d4"],["/tags/随笔/index.html","5a0214022f29238a6cce168c38d798cf"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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




