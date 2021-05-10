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

var precacheConfig = [["/11f1a2fc.html","0c230fa1e93c0fe9d6c32943d8be12fe"],["/1f7e3876.html","2c4aaf357a1cf2f1aa79045f3005595b"],["/2b244555.html","2000d44ff8a2aeff3c76677eff9bd4ef"],["/2c7854e6.html","7c84a3ac6a4fccf4454f4f44c4f84f2d"],["/2ee2518d.html","327bbc2b3e44da9b72b0de65c2a3ca6f"],["/30422b3f.html","2e72a60e60b902ca03291c54299f283e"],["/3494bf09.html","58ef02ce07fb11749ae520a53f99b07e"],["/3e4cf0e1.html","4994577d7b80b5d427d038513e799e33"],["/404.html","53c527b7e795423e5f13a50956b67afc"],["/4283e7c2.html","540b240dddd03196bc31a2e76e9f7a7f"],["/47008bfe.html","1cb47676509ec8030851536cf2d95061"],["/496761e5.html","e947ae5b05879dfaa7ce13a6bb043595"],["/49ab854f.html","42daf6242db3cab2d92c769d8e38c3f0"],["/4a17b156.html","4ac79b4d6306d87cf72c00f17f68d289"],["/51f11683.html","5d835c80b8880f78ebc427271e5d19c4"],["/6057642a.html","7cc18126ad0f257ee114e56a72b938aa"],["/60816787.html","7bfd2ba0e8cbc0be77006d0920c9cfde"],["/68083ed.html","c7f57298e4aead78217cea5f1f4349b3"],["/71e2d2d3.html","c14a07838723b72c6e8c8365a3a965ff"],["/748a29a4.html","77b329a8809596e998f32d00d9f65101"],["/7bc26341.html","60e8e02e860eca581357061cbc7117df"],["/7cee40bf.html","c998d4d39eca1ba0743cd70685b63746"],["/836982c.html","6ae9ebf4ac520324cdc7004cd5676d22"],["/83d82948.html","f8e4492d406bf04edb02e8ec72e3f5b4"],["/8856403.html","bec00adcb2a7972b46d2146f1644ff02"],["/8bc291e6.html","9eadb5467711106ef483be1a96f82f55"],["/8d39085b.html","1f400af34aeebe053499ecb26595291c"],["/9341b494.html","fdb58d6ff4ff6d9be277d1564fffd18a"],["/96ccccce.html","64afccf208c44ba68a8e1a83a2ed9adc"],["/98d114e8.html","9314010f43450d301352bee119d87df7"],["/a1be303c.html","0ce2ca6984e40377786f8b3d21ded7a6"],["/a81556f1.html","0a6057c3478620f7d1036a24b536819a"],["/aa96c821.html","be213e5b0c6ff4233f2659e946c1d42a"],["/ab1d37b.html","c666c741803b78cf221506b5028bb52e"],["/about/index.html","1acc6905f8343b7cc0e346de5122c297"],["/af886b34.html","8efcd5aad5181932351be123249aebde"],["/archives/2020/08/index.html","fe8f075ca321b204f96816f70e4058cd"],["/archives/2020/08/page/2/index.html","517a903897bde6c1e05d0a5e8823567a"],["/archives/2020/08/page/3/index.html","f31a40dd18b2d4d12e5671ad5cada8c0"],["/archives/2020/09/index.html","d53ac20da618b6d76c7fd45505249863"],["/archives/2020/09/page/2/index.html","1f9c8aed0b2bb49080cbdf44a0c70fe3"],["/archives/2020/10/index.html","9bb1fcf15843ab676724c1037068e54c"],["/archives/2020/11/index.html","1eca4742a4299cef797258fcb5552e28"],["/archives/2020/index.html","cb1852c95fe8d6239bde5b7f6f8f2334"],["/archives/2020/page/2/index.html","7b474aef2a243c4b83e8d2f7399a11a2"],["/archives/2020/page/3/index.html","69858488746528e2a9d77eb32ca3299c"],["/archives/2020/page/4/index.html","d43b147c2c1936aeabbd53784e2ae6f1"],["/archives/2021/02/index.html","a8239c48e1d9def642d69e0d7de593ae"],["/archives/2021/03/index.html","69208cdd03d6374e2d4495b2365f902e"],["/archives/2021/04/index.html","a964c5bb953747d898acf6c4ecb337d5"],["/archives/2021/05/index.html","28ba3d9db018d620cd9538bfe2e4d9aa"],["/archives/2021/index.html","c947443f77cf50a6ec3ffd0c7cad70ad"],["/archives/2021/page/2/index.html","1a1475f393d875a5bf93125bcd9ff6e0"],["/archives/index.html","0bcd4f9b6b95e04e468b7fe2408c7389"],["/archives/page/2/index.html","28cf28ec99e0343c9eea1b79b6a5959d"],["/archives/page/3/index.html","1f2fbbaaac782feb0e88c9b2898fed73"],["/archives/page/4/index.html","e96cea0fd937a8f9b0116b6d8ca2917d"],["/archives/page/5/index.html","de77aafcc0630b4f424b97bc2728797d"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","be298b7d2acc9038e916ece315049ee7"],["/bangumis/index.html","947fff5ed342e223d35e4cacd45ce298"],["/bf3a65a4.html","1564e610ec4c6ee8c1912f0a874cdc13"],["/c1ee638c.html","0285168b5119e21708d63f2f3a97ddf4"],["/c3119b08.html","832ff0c71c4c594bdf601430affdd5e8"],["/c6c9c4db.html","e1cd432ec624be72fa54f7e383977cf3"],["/categories/index.html","23478cc0f7c4682aa818042ad04abf13"],["/categories/教程-html/index.html","c13e4b7e02871e7574951c2c9b72a32e"],["/categories/文章/index.html","f1426bc0d9429297299ed5ddff99dd57"],["/categories/文章/page/2/index.html","82a03076184a2f51d7c0fdfa55ec9a9e"],["/categories/文章/page/3/index.html","0a652ab07cf25238d1459c222c20d8c9"],["/categories/通知/index.html","b15ed689ac882a3ea8c26f84e32b9352"],["/categories/通知/page/2/index.html","f6dcf538085ee4c3f85bb7e8a4dc7610"],["/cd843bca.html","1f53e895fddf3dde7de67b786a7024f4"],["/codemao/join.html","68e981bee7a902bbb71e1c41d3136fee"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","35378bb3dc77d7bfc8f9dc7954c3bdd8"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","b691a1bf567bd8370e07054566e47df7"],["/d2bd8f46.html","b003e3f34eff8df5acd9e285f1e90399"],["/d46f6783.html","978a8a371c7eb22d825b4bcfcb7f8475"],["/da033cd3.html","ec6b7bdb618a8e78d344eaa81f4f91e0"],["/dfd2f59a.html","6c6422a008d8718a4760624457ac5616"],["/e4d07d47.html","c43caeaac29c4a0ee78c39f8f0f72769"],["/ede49718.html","bde8b421a8b664770dcc1397ba3eab92"],["/f6485125.html","754818a1116bc41614558af72c95b556"],["/fa1bfef3.html","7759b074e2c82c66e16cd55c8ef037ec"],["/fe275fd0.html","142b95426ed3ad567d82470d3a7fa78f"],["/from.html","a3c98c40cec05d338b14448217a95eeb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fb10e203a44b61ff8934a52f598831cb"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","941d25802e6e4313b5a05d24be867a94"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","029f5341897ba6c2b71bbe2d1313fca2"],["/other-page/dead-links/index.html","57a87bc97cf9b69f635515dd7954d65f"],["/other-page/video/index.html","1dfea5ff3271a21cec8a288e15e8f18a"],["/other/index.html","d218a5a9e30dc516218688c4f5b7113d"],["/page/2/index.html","ba39fe864cf43d9f8bef22e57cb7363f"],["/page/3/index.html","3ba8df59894f3d338d8eac495b49b350"],["/page/4/index.html","340de25756b0f2cd5eb0468c19cfd89f"],["/page/5/index.html","8633e916d547eb9b9f73f06af3d10341"],["/random.html","2f24500ca60905d4b3b1a8539f9c307b"],["/shuoshuo/index.html","87220e3fcf756d52d983371687f08ee6"],["/tags/2020/index.html","c5927443fde60b5099c574c94c7ca6c3"],["/tags/404-网站/index.html","52ef6d6fa3b16bc7807180b20f24c32e"],["/tags/CF/index.html","5823fa18323c2fb0084f70b968cebb23"],["/tags/CFW/index.html","24562b2793e754c3eb254c85c98ff96a"],["/tags/Cloud-flare/index.html","c9d774a1e42d879cdac57d018ac7bf14"],["/tags/FA/index.html","7f7af588c12916c05d8ed22ca8a26304"],["/tags/Termux/index.html","5c49c764f3d66a7b6c5362e96093dfd3"],["/tags/Windows/index.html","b14f04fb14c30ca99841d1a51b10e94d"],["/tags/Windows10/index.html","e6036ec9bd7c7148687b0f7330731a68"],["/tags/android/index.html","34b533b7557f8412408005e545a5ef4b"],["/tags/app/index.html","52111ad9c85f57df1505347647be1647"],["/tags/bilibili/index.html","4e94252304dddfda52e6a57a6e50a5f2"],["/tags/dao-voice/index.html","8ba5eae03fc5e5ab61c9d25ec5e099b8"],["/tags/debian/index.html","82615b59516ffda39a772ceacf600d90"],["/tags/download/index.html","80c50d966cf143efde9a625cd880a272"],["/tags/fusionapp/index.html","4492978542b1c6bb2e04af2e4f83d21a"],["/tags/gh-page/index.html","2eddc31d340299ccd66403042c725851"],["/tags/git/index.html","e5cedb655b13170232256edb8a8a7504"],["/tags/gitee-page/index.html","bcc35274420127df4ece80c52081b8c8"],["/tags/gitee/index.html","4eb9955a7c0a1c86cdc6957a74e16cfc"],["/tags/github-page/index.html","59444e2e48fbaeca32b7314f47992fd8"],["/tags/github/index.html","7acea93336de7bfd1ab0081093c3eebc"],["/tags/githubpage/index.html","1d4db84b22010b2e0896d1fddfb42c57"],["/tags/hello-world/index.html","53743fece9e2c9aabef9eb7eadc0e124"],["/tags/hexo/index.html","ecc9fc45c55341edf9171083373bc37b"],["/tags/html/index.html","0031d189b4155dc5c970147810fa21f4"],["/tags/iframe/index.html","6f6eeb963ed6bd4788eecfd3b1e13ad5"],["/tags/index.html","79c746877616256666ad2869fc8c10f4"],["/tags/java/index.html","437d9eefdb792fb1629efc661e3ac6b6"],["/tags/linux/index.html","fc0f5fb496e4dee70c16b162e9c4cd3e"],["/tags/liunx/index.html","990c8d1ad1caa41804ed3d6a7a4f8120"],["/tags/markdown/index.html","386db1715108df5a3231b06b374866e7"],["/tags/md/index.html","1c29d52b3bd6682cb48285bfc7bfeed6"],["/tags/md编辑器/index.html","98a49118cbde6928ddc26fc4671b1052"],["/tags/minecraft-JE/index.html","2de57bd264adfda75c0a0389defd3cc0"],["/tags/minecraft/index.html","0fba009023c471830ab5295e1239ab85"],["/tags/minecraftJE/index.html","06b0205845309a3a7f1d52d8aeef8d8e"],["/tags/node-js/index.html","8d18bb6ed827953a0d0386d9e5117776"],["/tags/node/index.html","81d602a76a0ded14b1645341be7918cd"],["/tags/picgo/index.html","cead39093808ecfc7fac37ee382405ee"],["/tags/ssh/index.html","e02ba8aff957ab056ba552e158fd230a"],["/tags/vercel/index.html","d03db8b530272d9ed4938668a6ef30c1"],["/tags/website/index.html","cd4c6be7182e4a899e7ef0a9bd95ad05"],["/tags/win10安装/index.html","70b0e0fe7e64241cb12284bcd487f779"],["/tags/wmz-blog/index.html","160c02cf1f8a9428176f9a41dbaed850"],["/tags/免翻墙/index.html","dd9ccbcb95024c8f3dfe8013e2222af5"],["/tags/回顾/index.html","67df64d880bf1f20f537b1fa6ecc7d14"],["/tags/图床/index.html","a98223895bab95c9b214e04c4a5a9c90"],["/tags/在线聊天/index.html","2dff57c185a071ace769c6b7059460b4"],["/tags/安装/index.html","1cf62afa9fc96b3884f1afd82548c2a4"],["/tags/工具/index.html","6e4843e27458c15a17198395b0ec642c"],["/tags/我的世界/index.html","8154c062d8afeb4ae9cc8c2e638f246e"],["/tags/折腾/index.html","cbda247e7b59c8ec5fe3ef37bfdf898b"],["/tags/搭建/index.html","d7197595392813cc609eb56aa5f27c02"],["/tags/教程/index.html","1576fe19d86bd6ded71b6904183a4736"],["/tags/更换/index.html","800bfc5d80f0ffb0800236cdb346e998"],["/tags/更新/index.html","fe5c4c9428aed0d1af2a1a65af326271"],["/tags/更新了/index.html","6c2bd283d66c410dd4dd57144b113416"],["/tags/测试/index.html","3eee26b743b0ed6a0303509549559127"],["/tags/百度统计/index.html","0607b42bbb79179619f65c3b32d06efc"],["/tags/看法/index.html","e89ce3745e41c551ac23feb1da83f977"],["/tags/系统安装/index.html","973335df6387a69ef97189ce7183836e"],["/tags/迷你世界/index.html","a5d60a1730c3581c507821b1a1a3ea8f"],["/tags/通知/index.html","90ea9d318e8fb7e32f751ea02ddd1ed6"],["/tags/邮箱/index.html","58e3a1f4448ee64edf312f382bcd8a79"],["/tags/随笔/index.html","94fe2780f14fedaf5342d7ae9c344c82"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://blog.wmz.link"});




