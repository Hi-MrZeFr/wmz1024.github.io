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

var precacheConfig = [["/11f1a2fc.html","97dd1ba371082928473c1b185c21f073"],["/1f7e3876.html","0b0cbc2b290a63cad9a2c3d762323a75"],["/2b244555.html","24340725b570743099b45cde02eb2114"],["/2c7854e6.html","dc2d13f370b6cbeaf4c7de8c9a6fff53"],["/2ee2518d.html","a7f629ea261f85b0e654cff5eed6d542"],["/30422b3f.html","11d7fc455c72a1d9762ad57c32542550"],["/3494bf09.html","79345f5459e3cb46b4e1e4009f0bbde2"],["/3e4cf0e1.html","ac5ecac2449674cc5e8a223496f167a4"],["/404.html","4ab540c43ebee881b11b3f3a2b99a6cf"],["/4283e7c2.html","2ae2d8efb0e472634a14bdbf52511b1e"],["/47008bfe.html","3af3bf1040bc833d6824f8e09a088007"],["/496761e5.html","dede6477f605f1a53f2f1bed3e489744"],["/49ab854f.html","76c161e46c0bb5b657e4d9b195badba2"],["/4a17b156.html","f93b02afb9ca33dd43e725700416d3a6"],["/51f11683.html","4d1de3492d1983496cdc7d9dad725712"],["/6057642a.html","900d2649ee98b8a9c017ec704f2ed3c1"],["/60816787.html","f3d3b4cba72b703355e275046f85130c"],["/68083ed.html","2c3434bfce0afe25ca9faaf2c3588597"],["/71e2d2d3.html","0de2e45c0a257ae1a118443a8c1ed12e"],["/748a29a4.html","ccb3c3a25b3d4fa9c6b478a560201da6"],["/7bc26341.html","c0a67b642fc292b053bb9e82ef4d9b70"],["/7cee40bf.html","e711e091df0e02eb475da049d94cabed"],["/836982c.html","9b7a1b38566efc3d2f30859c4803c9bb"],["/83d82948.html","1eba982f260864aad47052610a6db3a8"],["/8856403.html","ba3d1b23deac5a90c52515536d35c608"],["/8bc291e6.html","b5ff9e2bfd90c6c421025aa63cf4f3ca"],["/8d39085b.html","36d8bbef71e10187a1f8cf26d0af007d"],["/9341b494.html","7f8fe34ee613d599d24eeb57a6ea3afd"],["/96ccccce.html","fbfd3baaf5d90ddfb242616e2dc69b38"],["/98d114e8.html","f5089a93831113ef8b8dae4a175e4900"],["/a1be303c.html","b6d0a96d865cb2fcca41587de5cefc1a"],["/a81556f1.html","da99d273c34d2a4100008d9b5acd9bfb"],["/aa96c821.html","bfbebf20911b26522bba9973018e4ede"],["/ab1d37b.html","cf26841a426ce96b435a0d2d74e393ff"],["/about/index.html","381f9cf072c367239539195c911f555a"],["/af886b34.html","42c21376bb7fb0c9ecf893f1c59ac507"],["/archives/2020/08/index.html","b89bfa4934fd0ce1afa4c35e360d49ac"],["/archives/2020/08/page/2/index.html","1dc247cca459413116ffddb207c27dca"],["/archives/2020/08/page/3/index.html","f6be2891d4a377224caf8251143820ed"],["/archives/2020/09/index.html","12065a58cd4fd0d24386dccbe2f2c1b8"],["/archives/2020/09/page/2/index.html","b28790c78e0b31a7f614440dbe59b1c9"],["/archives/2020/10/index.html","255ce01fa2d762a3d9fb3f23da30a802"],["/archives/2020/11/index.html","27c5d41baebddae6cbfaa8548e3b69bf"],["/archives/2020/index.html","ab9007626580133b1e351b6675678017"],["/archives/2020/page/2/index.html","1f1a3ec0f9db8b7fc866bc0f697ebae1"],["/archives/2020/page/3/index.html","2cf0da66721b5c35c9fe5c9ccbb8042e"],["/archives/2020/page/4/index.html","1bd7f58309d8166908b154b2285b1ffb"],["/archives/2021/02/index.html","d53339bf239de7fed8f7adf9b9f607c6"],["/archives/2021/03/index.html","6e604c2847621f27d603746718aba491"],["/archives/2021/04/index.html","dce0b327d2dd95e643a1602396e01123"],["/archives/2021/05/index.html","c8debbf5dc903c2fd09fc778da1628df"],["/archives/2021/index.html","c092f81130c2702921e11dc2557886cb"],["/archives/2021/page/2/index.html","23b754764bbd8f6081d3414e9c996b9d"],["/archives/index.html","02792b246da6c0198dd124a0dd3a6d7e"],["/archives/page/2/index.html","00c25973a46799399cef761b35bd0655"],["/archives/page/3/index.html","1c9f053ca36bef1b4986b96691553aed"],["/archives/page/4/index.html","4e85d9c6182bc9058d9ff7bfda24ea39"],["/archives/page/5/index.html","003214cd047bef6700e9da90728e4d0e"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","15475a88545aaf1250329c5818cd5034"],["/bangumis/index.html","30aff8e81f0288916d32f2a3d166671f"],["/bf3a65a4.html","35c4c1ea4df544cc613d04d088bdd098"],["/c1ee638c.html","1c79fe36dc90f6ec7abcfe743ebf3a8d"],["/c3119b08.html","a5093d813c568b2e2944a6f39af4a2bc"],["/c6c9c4db.html","3c95581dabc4aa9b70afcb6facc0848a"],["/categories/index.html","3cf1951a9703a01eeb683d09113bb6e8"],["/categories/教程-html/index.html","8cd916417fd6bc361112c13d3b06819b"],["/categories/文章/index.html","000b84b51665f9990faa599b2ae2c8a5"],["/categories/文章/page/2/index.html","0dd65e3a35cb29c04eb1cf0c9e212d8f"],["/categories/文章/page/3/index.html","1a7dd99b8c496e7a3a29221743cf79af"],["/categories/通知/index.html","10288c491dda2438e0ee400e4dd24f56"],["/categories/通知/page/2/index.html","fcbf05c7dda9a661dfa2da5b0556aa81"],["/cd843bca.html","44ac2f2630fff7c7799a10ef541ec13e"],["/codemao/join.html","ad177f6a34bdeb076ab734429bd21544"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","35378bb3dc77d7bfc8f9dc7954c3bdd8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","58a4c5c24484840cc8d602dcfd2081f8"],["/d2bd8f46.html","4bac11c6e152d4b9cbaa66e48d570c88"],["/d46f6783.html","eb0e53a1e8d3130bfb4fb522de354211"],["/da033cd3.html","553f99634b8196e892cad7c43f7ebdc9"],["/dfd2f59a.html","8d8e09047a13ac40e150001e2cc1cdae"],["/e4d07d47.html","f24f1cb086448c9bf2bf743c7ff6c5f7"],["/ede49718.html","4ae4eb247a9c49dec6bbc83a5966c612"],["/f6485125.html","ec3b0e7a64a93a5f0be357ef3a1b7a19"],["/fa1bfef3.html","fd7f9a5d93d98d3b8e51642d6cd09528"],["/fe275fd0.html","9e3433cd6543cefbdfabead7cc792b52"],["/from.html","a3c98c40cec05d338b14448217a95eeb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","568c390ba7acc8c1f2383a1d354448a0"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","2d3fb2dde6f4e23c6c6a63b8229e37a2"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","8c1ac0b3c63fb73845b4ece8d398dea8"],["/other-page/video/index.html","2e5614f285c27efc82acfff947586530"],["/other/index.html","937da1c79f722e5c54a3ad0b1760ec06"],["/page/2/index.html","10dec15ca141d32f125901950d8e0cbd"],["/page/3/index.html","4a8ae26f39e7111e7782af5e8b823017"],["/page/4/index.html","544a3cdf1b6b5da6c1899e32964ab985"],["/page/5/index.html","48ce5b0545c6cd6b5e551dbd94ed4484"],["/random.html","6bff3f8afa65ad00524ab2e57639ec52"],["/shuoshuo/index.html","3ee0b5131e4ee703e72fc96a1f02077d"],["/tags/2020/index.html","4ea0b2cf6b0db244a539f4d4bb0a3de6"],["/tags/404-网站/index.html","5c8f37edf0848902e2b8888be77e7306"],["/tags/CF/index.html","fc47c9711829696263bf1fec77b7330f"],["/tags/CFW/index.html","6798b3e395b7c1ebe58070b77123170c"],["/tags/Cloud-flare/index.html","56dfb1297d353485719822468b934a12"],["/tags/FA/index.html","fa5ee07fd9aa687a10bb9b3e02de828e"],["/tags/Termux/index.html","8b9f22bc9a7c261764496aa73a32d0dc"],["/tags/Windows/index.html","3e0776d29a4d7324ce6248208c231d3f"],["/tags/Windows10/index.html","67d00498113bf6f59a4c045fcad0810b"],["/tags/android/index.html","109ea20c6774148d7d967e8e80a82b34"],["/tags/app/index.html","0eebef6f3a47e93bb9c9448448425e71"],["/tags/bilibili/index.html","8319ed16f0403a1c985b239017105ab7"],["/tags/dao-voice/index.html","e8df449a1b498c9d6ed84b1e62f1bbb8"],["/tags/debian/index.html","c5ce445e0307f89362f800cf71634fef"],["/tags/download/index.html","86a94fc4d768deb153d230883f287023"],["/tags/fusionapp/index.html","3aa0c6c67bed06bfeeb89dac4c82387f"],["/tags/gh-page/index.html","76e1702d5159f18cc781f3f0da738487"],["/tags/git/index.html","1ccabf53b72f43795d0c745bc806f3ed"],["/tags/gitee-page/index.html","2b26b9b7234ef44ff251261cfd542206"],["/tags/gitee/index.html","fe84d19bb24508e02f4e388bcd06c81c"],["/tags/github-page/index.html","4ae747d8e61947af4d9b9c400ac61f0c"],["/tags/github/index.html","19c7954aed6ae268b448015e673a605d"],["/tags/githubpage/index.html","752ff217223a280f522e49c7af86a4ea"],["/tags/hello-world/index.html","28aa342c47451f7170f07f995ac487cb"],["/tags/hexo/index.html","9aaf635acffc0d508e4c89228ff122e5"],["/tags/html/index.html","a1d6e99fb375b3893ff9e000fdbc9ec2"],["/tags/iframe/index.html","977de52545668cc897eb3bbd0f39dd04"],["/tags/index.html","e9d3d6acc1d0b7259eff59925f341bd8"],["/tags/java/index.html","77bf84094a6b4ec1ad2723177f19aa0b"],["/tags/linux/index.html","6c991f95c3a6353e4f477002dc7db65f"],["/tags/liunx/index.html","2f9184021b3ba588bf09b6183ca346f0"],["/tags/markdown/index.html","256cbf88315158ba3604b02db3140f5f"],["/tags/md/index.html","53c17c4b58551aaeb31408f93c6a6b4b"],["/tags/md编辑器/index.html","cb1ba14298a26bd94eeaeb0096746a1d"],["/tags/minecraft-JE/index.html","aff47bfab66fbffbdb15156480e98f7c"],["/tags/minecraft/index.html","65a821c8523be338c04eac9a1e0295e0"],["/tags/minecraftJE/index.html","a614650ac2db6cf5058c18b647753797"],["/tags/node-js/index.html","a553cbdf9c4fc86e5e7d76b7d156fe8b"],["/tags/node/index.html","9aef467736f67917324fcb6e36abc051"],["/tags/picgo/index.html","5fd684688d923bbcfe728473c3bc110a"],["/tags/ssh/index.html","b3407ce75c4a648af1d39a3ee3ac964b"],["/tags/vercel/index.html","51bb7e282857586dcf72cd3571dc7e67"],["/tags/website/index.html","50584825b72ada92f2c603b40f364fa4"],["/tags/win10安装/index.html","8e7dc4d4e141032710dbbd905bd3a5f5"],["/tags/wmz-blog/index.html","07a5e80361ed6de22c46dae98970599e"],["/tags/免翻墙/index.html","5dcb84cd5665db7e195fa7198435b105"],["/tags/回顾/index.html","ae2c5889e4a7dc2ee7140ffcfdb317a9"],["/tags/图床/index.html","d7b903094e999f35e4818e7918f9b1f0"],["/tags/在线聊天/index.html","0962206ac4f7012a05daeec72a8bf94b"],["/tags/安装/index.html","cc0b8eecd0ab4912e4f59d13aaa6ba9d"],["/tags/工具/index.html","9c62fffb2ea24e5e39249514a37a13fb"],["/tags/我的世界/index.html","cb86a3d8f18920eff4a8b22234a013fc"],["/tags/折腾/index.html","7e9c9ce75b18718dbb07c7df3239a99d"],["/tags/搭建/index.html","be0bc258155ea3f70517f0af666c71a5"],["/tags/教程/index.html","ac547c7a6ec066bab1d5515ee823c431"],["/tags/更换/index.html","075a058acbe1f992c4ea6ee8b5bf9cb6"],["/tags/更新/index.html","68c39d711b4f8f0142a267d8c97aee16"],["/tags/更新了/index.html","4f2d8db7420ab144d94f129556c6ca79"],["/tags/测试/index.html","c667bb41927c400228455ae14d195672"],["/tags/百度统计/index.html","2814492c6a83e50dea0aa0d83f1dda39"],["/tags/看法/index.html","1cdfa8a74cc06ccca0efbd91162cccaa"],["/tags/系统安装/index.html","d024321bab596b316aa66336a972fa1b"],["/tags/迷你世界/index.html","b02a53cee60914dc8d1ffd1fb51509d7"],["/tags/通知/index.html","fdc145f9a088f41a4c165f71098523c3"],["/tags/邮箱/index.html","732a3dcb7935f56400157f675280b55b"],["/tags/随笔/index.html","507506c05d4d62de34bc0d8ca28c934f"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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




