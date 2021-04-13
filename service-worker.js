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

var precacheConfig = [["/11f1a2fc.html","28a1d91822018a9968d51884f2cabe10"],["/1f7e3876.html","13453e3a416865e7747221090623fc5d"],["/2b244555.html","2a584179966567ba1ec5174b9fea6810"],["/2c7854e6.html","c1b55d36552908507e46d6e027e5cb3c"],["/2ee2518d.html","a9b0de757cc44c2b5369ae99b87cf64c"],["/30422b3f.html","235f4e4d21b867221998b634ced5c9d5"],["/3494bf09.html","1b4502c2690f702e8338908042b3f02a"],["/3e4cf0e1.html","b35efb2c6222e95560fdae83175cdeb3"],["/404.html","f969886169ac18d9097cf462191ae6ff"],["/4283e7c2.html","bf69d6108c25b35e9963c73f2bb02fdc"],["/47008bfe.html","6d7cbf7f5e172fcc1a6241ddbb870b55"],["/496761e5.html","87a319080e0c6d5a6aad44cc7d58ee32"],["/49ab854f.html","8c7d8f0cadc753108b0de99799cbf060"],["/4a17b156.html","ec866c5db64d0a043d65ae94dbb3f4a1"],["/51f11683.html","0ea43dc00637eb839a9d0aecebadc832"],["/6057642a.html","da90615115357c0573ac2cfaaa103cd9"],["/60816787.html","740a737fb53ec0658f386b1362ea2b89"],["/68083ed.html","5264e1b4b2b70648419d33053f9f9795"],["/71e2d2d3.html","d7c2b7878f97cc8b35606d908f6aa58e"],["/748a29a4.html","9c2f2a29255b81b2439f1759d6b0ee82"],["/7bc26341.html","2a8d262e16d552a28b5c65214bf94d1e"],["/7cee40bf.html","f3f60bb32f022236464b764fe53d621b"],["/836982c.html","2b90455bc7e0148c7051bac7718efe1e"],["/83d82948.html","8c772699eeb9cf6708b9dccae739db00"],["/8856403.html","015aab753d0cd44ca4ed16072e2c9584"],["/8bc291e6.html","124646a9a1b15d4a2dd1146e5c6123da"],["/8d39085b.html","d44329825b9a272b1c75b5cc29224641"],["/9341b494.html","819e1a7e7ad000ce55e7b89a5d392a13"],["/96ccccce.html","4c9613d2b0d3765d844edd64ec35c134"],["/98d114e8.html","bb78379c6fb482b8edc3d1dc39da8018"],["/a1be303c.html","96e4ebdf91472e2a7b0e12da686bf3c5"],["/a81556f1.html","cbdcba328de68ec7af19272d458cfd1a"],["/aa96c821.html","04d9154677b2ab0cad4954d42a222daf"],["/ab1d37b.html","076049e85d719af7fc343010656e40c4"],["/about/index.html","f3e4b10f5e9faca208b20cc16bf25fac"],["/af886b34.html","9109df4189d30165d8f3ba3bf2483b65"],["/archives/2020/08/index.html","c331af092a670c594a8a5e37951d557e"],["/archives/2020/08/page/2/index.html","5cb773150fda97d2db7596a49b3de9e8"],["/archives/2020/08/page/3/index.html","1e026b8f2280f50aff401f9d06f85af0"],["/archives/2020/09/index.html","0b941a06e359bbf2ace89bd1d71a1de3"],["/archives/2020/09/page/2/index.html","ceca981a02ff85d590ef59bbee542d44"],["/archives/2020/10/index.html","ecb6bace06b45777cc3865cbf44c6212"],["/archives/2020/11/index.html","24d7e368a69a39dec3ed124b38b2b143"],["/archives/2020/index.html","e104a194794d167aef73ff978035f4a0"],["/archives/2020/page/2/index.html","d39ee98e5b420df0ba7180aa4c83b8e5"],["/archives/2020/page/3/index.html","b829ff0a80585912b5db4c2faf56d023"],["/archives/2020/page/4/index.html","25c86a8a72308fa4c396170025c1170e"],["/archives/2021/02/index.html","2907faad5064a72acad099fea3f860f7"],["/archives/2021/03/index.html","4f39bb274762215457f145d417afbee9"],["/archives/2021/04/index.html","0b9f562faad53fd24b5db72518813ba1"],["/archives/2021/index.html","c2e1ed9ad4264fbcb30bd4a4471df99d"],["/archives/index.html","ab62f260a28bbe11edf33b89b5ed7321"],["/archives/page/2/index.html","a153e9835a479530cb88ebd39dd9d825"],["/archives/page/3/index.html","29132cc865c0fa0a8d3886f2cb1a93a3"],["/archives/page/4/index.html","282daba69b43cc4266286bcaafc96519"],["/archives/page/5/index.html","d421e15893d07a620379648b0db14910"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","a4ab31450cdf9cc1f6cf0535ca2b47fe"],["/bangumis/index.html","3b98b10caa236a9beae1f92579924c13"],["/bf3a65a4.html","d42b769c68e1a434e13154d894abc13b"],["/c1ee638c.html","65b5e267cb34568880c67db9971edde2"],["/c3119b08.html","5501023ed44da671bfa4adc5874e9a10"],["/categories/index.html","17ce07bf18f60903a7ef116a7111ef80"],["/categories/文章/index.html","fbedd7bd978c2860ae847b99a6d2b489"],["/categories/文章/page/2/index.html","67b149566b63afe20e95e9fad8572f98"],["/categories/文章/page/3/index.html","b8ce909a1476ccaf7a4d5e16b5651ca0"],["/categories/通知/index.html","31a7a6a564e4a010e0bb335527d9984e"],["/categories/通知/page/2/index.html","48b14f15554a4b09cc8a5c4a8f5d9b44"],["/cd843bca.html","8eef3889517716b73091b0f16b52b2e9"],["/codemao/join.html","48660e7636c1d294235fe93309be8545"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","35378bb3dc77d7bfc8f9dc7954c3bdd8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","68815b426244036d970da2cef9ccab67"],["/d2bd8f46.html","4b0f066148e7c898e528477b958d8a72"],["/d46f6783.html","84a1b843d201aa8e3bef414716ac172b"],["/da033cd3.html","756e283321bbaf584efa45bfed752004"],["/e4d07d47.html","b38037f45666a2a066c5a811af241fd0"],["/f6485125.html","daad65504625d9c8684151505f1f7f34"],["/fa1bfef3.html","c7ef15f00ae1c7269bed5e2d3fa30c65"],["/fe275fd0.html","97cd47a8daf79559c7a549e6bb655d22"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","652a4cd64ec5b983664072ccf14dceca"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","cd1b22f2dd33eec12abe3eba88b6bf9f"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","50f9d5bc2526ba593afd8316214399db"],["/page/2/index.html","a6e555c4c507a43c7a570e16bdb78712"],["/page/3/index.html","59d2fa656d288830a1a53e9b4705229b"],["/page/4/index.html","183bc959193d1186e5a3042a0c9b733c"],["/page/5/index.html","466752ae31bf0bc354f210b7720e4950"],["/random.html","5ad92965796894646404a709e81cbc05"],["/shuoshuo/index.html","cfa3f39742f10dd27bdcdb056276b529"],["/tags/2020/index.html","5ac3bed38ec23a306bfebcc03082ef83"],["/tags/404-网站/index.html","69d82f2b58b92750e38d3577f7b28c33"],["/tags/CF/index.html","f1078aba9929d9ce70a5470e895eb31c"],["/tags/CFW/index.html","6749b8d8a31be995c4bdb3a39a6bb078"],["/tags/Cloud-flare/index.html","b0e68cd91a81531a141dbedd4ae6df6e"],["/tags/FA/index.html","a980444e746fde5528114db8bf846b52"],["/tags/Termux/index.html","e547db088af21fb0045c2f2ad29e6ed6"],["/tags/Windows/index.html","b05596b626427eab6979f884b875f0ab"],["/tags/Windows10/index.html","3dd38f36db3a096a945584ef1754a35c"],["/tags/android/index.html","30dec291ab862d8ec8ded8c8562c1a94"],["/tags/app/index.html","a15e12d9f2ecb24b8720cc32e57eeb6f"],["/tags/bilibili/index.html","7f2b3c04d6cb26d423b6f6dfe9eeaea4"],["/tags/dao-voice/index.html","0abd27a2c29f8038b6a587d297917e47"],["/tags/debian/index.html","0e8d9932fa31740624c8f343890c8229"],["/tags/download/index.html","452605b9fc0cd5196677ef1204fe24dc"],["/tags/fusionapp/index.html","8cedb14916c1b58b0a159e39ad4131a3"],["/tags/gh-page/index.html","457d81cae410c83587f7ff7f831599e9"],["/tags/git/index.html","add558513c52e6e53386e3c9a8110d99"],["/tags/gitee-page/index.html","b8366adafd4b0764b6464d40a1ea6c34"],["/tags/gitee/index.html","f4662a5b2f267b69bc4c6453a75fdeb5"],["/tags/github-page/index.html","83f31a7b89aeebafa2e9d9e129bc51b0"],["/tags/github/index.html","d94d5e2afb8c2db239cb467bee081644"],["/tags/githubpage/index.html","241681bc9347785bd8d26fd90df893a2"],["/tags/hello-world/index.html","619aa0a6e30fde3f43d4660a0a5373e4"],["/tags/hexo/index.html","0d52371af8e99add845d4db9b692946b"],["/tags/iframe/index.html","336ec5baf8dc3f48b53e5b2e34f40dbf"],["/tags/index.html","8357f9883fcb965f6980c6e90616af28"],["/tags/java/index.html","8c759b05e6479737203a7efc4f489c8d"],["/tags/linux/index.html","006c77ae18d9de5bf16465a06ac44e78"],["/tags/liunx/index.html","7bc99aa3da519e8280e739b89b8206c9"],["/tags/markdown/index.html","3746f9d1cb005dd134c64e920600847d"],["/tags/md/index.html","93805ac8eb32d1c8b7c9828da83e35ab"],["/tags/md编辑器/index.html","6b51df3de5a684913bc2b09d9678ab26"],["/tags/minecraft-JE/index.html","0ceb30f9446112351a11f28e1729b514"],["/tags/minecraft/index.html","e3818e99a26bc91d9cb975c4e5417cf3"],["/tags/minecraftJE/index.html","8ee052e9cc03fd22293c8da4b941ba29"],["/tags/node-js/index.html","e4dfb865627ebe5787eca65fe45e29e5"],["/tags/node/index.html","6187542dd9e5deb963606584a271e902"],["/tags/picgo/index.html","1d51edc7748ff1e59f5ac22f28778afb"],["/tags/ssh/index.html","0fd1472fc529c9ed1ea674eb934c5d42"],["/tags/vercel/index.html","02d61967cda24c7ee7017887cba34454"],["/tags/website/index.html","18ab2f18346229cd7a35a16b3238391b"],["/tags/win10安装/index.html","1f26d028b09ffab36808dfd8279c2f02"],["/tags/wmz-blog/index.html","3781e89e1df008afc07442d763888dd6"],["/tags/免翻墙/index.html","02c5223bad17d37fd66b2469c976997c"],["/tags/回顾/index.html","05f50e28dfdc719f3d6c4f97239ce2c9"],["/tags/图床/index.html","b05f1f0becde226475cabc66b8b2ac80"],["/tags/在线聊天/index.html","0c63e5f40cd36a62cca7f6082000f0e0"],["/tags/安装/index.html","89939e264d86f756ba9043b48312b5b5"],["/tags/工具/index.html","debd082fe9ae2c7894f4c217d77b90b5"],["/tags/我的世界/index.html","b285f645d8ce86cccbc9ec21dfc7869d"],["/tags/折腾/index.html","29151cc521d405e0d2a5b445852783b6"],["/tags/搭建/index.html","620f31022a5a18e8a314b07a1b383abb"],["/tags/教程/index.html","ac76baf675ae13d530b2e5cf5ef4a477"],["/tags/更换/index.html","f2fde1d5ede36a1fe846dfa6833b16c2"],["/tags/更新/index.html","59b6d473e13297755198acf77d74e3f9"],["/tags/更新了/index.html","b2185da44f90e9bf005ce3f672384e7a"],["/tags/测试/index.html","d8befb50304bc912ecbcbea4e1a925cb"],["/tags/百度统计/index.html","e2e078e68fc4e8613bdea6c01a19abad"],["/tags/看法/index.html","625120f60b555b8ce057fcaadd2dc38b"],["/tags/系统安装/index.html","9d01984f8fe570e4338de19568b18a7f"],["/tags/迷你世界/index.html","029bad17383fbf0cc68530a033037ad2"],["/tags/通知/index.html","15d95f25791018c0a01688e119391caf"],["/tags/邮箱/index.html","0b8090b4b831635b0e1463ec9f1e9c02"],["/tags/随笔/index.html","df0a06ba2e13db7cced34dbe833082cf"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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




