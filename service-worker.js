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

var precacheConfig = [["/11f1a2fc.html","c2c02d8a4c059e445531b65c906421f4"],["/1f7e3876.html","689e0f079a49ae5fa90772b1fef138b0"],["/2b244555.html","19ccbe1a89455e05c967f8d225715371"],["/2c7854e6.html","f36a602eb4bf36b031f4f7fad2da1ff3"],["/2ee2518d.html","a9812173d5d739dbce2fe6d8d3d2cedb"],["/30422b3f.html","42f17540d8ac04c58a3f1fd592c67a95"],["/3494bf09.html","d13e54dc49ec401d156fe57548be862f"],["/3e4cf0e1.html","46662d88e462044a46a23d84e4654337"],["/404.html","db079e99f237a9ba07bf716fa07a2884"],["/4283e7c2.html","d3c9864b1b22d822567d5a1e7e7fc7a7"],["/47008bfe.html","c20bd2cc33bee65c5527ff6b8d535962"],["/496761e5.html","0359ce7b0f9784e88a88d59758bf21ae"],["/49ab854f.html","28437730a875c41b1a852471c2db5c89"],["/4a17b156.html","cfb88b481832dabe94c440cb864412c4"],["/51f11683.html","ca06e26b24e0edb53d3ba43417688b1c"],["/6057642a.html","4277a4aed20cb7acced263c6584114fe"],["/60816787.html","9cb67620d076d513386f940f9db21d47"],["/68083ed.html","e06b36bd636cf464871a1e60a2abc978"],["/71e2d2d3.html","118378b562ecb8889c79a81d0e121ee3"],["/748a29a4.html","f16cbac0382c20f39fb67781aba483f9"],["/7bc26341.html","9c33f61abb8b99a22850b7aecbdc3f57"],["/7cee40bf.html","35be129829f10ac32366949ff7c76f00"],["/836982c.html","8b173a10f0c07027f4ea9ca6b43b000d"],["/83d82948.html","df4df4e21d381e466f8bd43c8de878a9"],["/8856403.html","7b6d9ab049812002b1428c23927e382f"],["/8bc291e6.html","700a8ab19855d2794f6e2904969c451d"],["/8d39085b.html","41da7b16a6633d8c2d28c5d25d572b07"],["/9341b494.html","a212cac79fde5ff295d4dfabebc5c39b"],["/96ccccce.html","23f691f18e21d39258e0fd71c541457b"],["/98d114e8.html","a960f16ac6d691773cd742dcfdd8f155"],["/a1be303c.html","d05fa64e175bf4a5ca52f05282844a5e"],["/a81556f1.html","87f81404ebceaac375ff10e6a44ba5cb"],["/aa96c821.html","4b8bfdf1938b83716192a9e4a85d3199"],["/ab1d37b.html","9d23eadf184780eb2b1d06a9a2312fef"],["/about/index.html","17ea37db1f42ae5bb8907db63f18512d"],["/af886b34.html","dc213723033dfa91aa089f789f22231d"],["/archives/2020/08/index.html","375cc3db0a4c064b32dcd6eeb4a9cc3d"],["/archives/2020/08/page/2/index.html","9bef60a4684e21e9d83ce5f761febccd"],["/archives/2020/08/page/3/index.html","09a1f3bd76886057d6f5ce8a78e2038a"],["/archives/2020/09/index.html","580aaa04b319109bf91abcee02266b8b"],["/archives/2020/09/page/2/index.html","6b8fd7697e66fa4b9777b1917230bad0"],["/archives/2020/10/index.html","7951e99ca4e98001077c013e8f495d2a"],["/archives/2020/11/index.html","94be6e672d7220bfb4e54cd8bc41beda"],["/archives/2020/index.html","eddbbe0385abfb65ed3f6cc5e038acf8"],["/archives/2020/page/2/index.html","e7231694bbbc973f6d3bac142f526567"],["/archives/2020/page/3/index.html","bab112b6454189a1e29c900efb810c89"],["/archives/2020/page/4/index.html","e879c6501ae58fede522976e30eef171"],["/archives/2021/02/index.html","26c195291899c4350a85cd316735448c"],["/archives/2021/03/index.html","177a997aec1665a5f17cbe5a45372b04"],["/archives/2021/04/index.html","7ca8f627a4c62e6290f7c9e5b33a4fbb"],["/archives/2021/05/index.html","e2195c62f52df6828925a520253082af"],["/archives/2021/index.html","ddf43c9369082db1ea1bbfb39e8e10fc"],["/archives/2021/page/2/index.html","a86f808a6b0c188438b23eddb74c8b17"],["/archives/index.html","075e076f19222211fc703b3ba168acc2"],["/archives/page/2/index.html","e67cf1fa4fb6cc679a28e6042a14a6d0"],["/archives/page/3/index.html","60a622e02f324dd5cba71190b98cf517"],["/archives/page/4/index.html","86c167b992a83cd107ec978bf800a947"],["/archives/page/5/index.html","301ebf7ffb6bc7f438cf10f4a2f2ccea"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","45da6fd765dfd9e02a3b4c42eea656e0"],["/bangumis/index.html","17123761d372e9662ed8e1b5842d6e92"],["/bf3a65a4.html","0c29919ddecc1b7a98ee458b0a24d707"],["/c1ee638c.html","800c8d4ca93a0c22bf81e830c02ca9b0"],["/c3119b08.html","afb7c8e32a289aa191a6e265341370f6"],["/c6c9c4db.html","e40c37fb5afef567c6b2178cb6bc44ce"],["/categories/index.html","2a22c0ba01b60200a0b1f9520c69cb9f"],["/categories/教程-html/index.html","d1d23410eee2c5de05d1047e2f3d76a3"],["/categories/文章/index.html","63e265bdc30409cd58d6f8ac2d419bba"],["/categories/文章/page/2/index.html","6ad6ade1b80d807cc6d700daff7d7f91"],["/categories/文章/page/3/index.html","63b08d01c1a8935175055c0db8d48e58"],["/categories/通知/index.html","63fba7fb7f3fdb2f658bd62aa62231ca"],["/categories/通知/page/2/index.html","15c47c07597f22a2fbff9b73271b8720"],["/cd843bca.html","dfcd7e8beb18dc8f4819fe0dfd47cacf"],["/codemao/join.html","dac10a0a8833eab7baa59b586c5a44e5"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","42ca12d0ad5f7df4ecddbc251b6e4ba1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","a118e4c5d836fa04d1b498bff7a30a9b"],["/d2bd8f46.html","16c206c208f98db83ec2891e060021d9"],["/d46f6783.html","f05fd62af774e80c21f3ed2be8de3a89"],["/da033cd3.html","a018a6be4ffdf7b662d1fe84855d5f4f"],["/dfd2f59a.html","dcfb7f747f9e226384a666948dedf40d"],["/e4d07d47.html","3dfa25dae40cd47cc8640302ce2a8e31"],["/ede49718.html","482e265abb0db83f3e2e2872af5c6a9b"],["/f6485125.html","96544e8b3bad899d2e67a4136d37b034"],["/fa1bfef3.html","eed1d14eacb699a98251d67d479cb0de"],["/fe275fd0.html","80baec624e26f1b8e7d2b8036199420f"],["/from.html","a3c98c40cec05d338b14448217a95eeb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4407a6e3ee15afe25d3199836e18320a"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","2b4aede42fec27015a0981a745bf0d61"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","c9e027b6501c3ca1d9c4ee7ed246f1e9"],["/other-page/dead-links/index.html","ca564f9cba985198aa0efbc0c047224b"],["/other-page/video/index.html","9edf21988bb95aee37ee111a47c29962"],["/other/index.html","a394241d8db30ec326bbe778b6d33cb0"],["/page/2/index.html","ff5b40a7317e67644a5926b686db308c"],["/page/3/index.html","b811ad13467e81bd7f6010b6c4af9286"],["/page/4/index.html","15e54ab94ca962f3e7a1e5ee846aecd2"],["/page/5/index.html","fb444a18c83d0b0fad0a11de33409cc9"],["/random.html","948a334e5ec7a1db4e74e0cadca75e19"],["/shuoshuo/index.html","1366d4fb8934fae81046010d8a760086"],["/tags/2020/index.html","3e37d41f3cb5ce93b22d2eff85fac7e6"],["/tags/404-网站/index.html","9fc305af8a84f187de410a5ce86acd84"],["/tags/CF/index.html","2e3156d29cc52c5ef0bfe33b4fa433a1"],["/tags/CFW/index.html","1823c81fa2e67397f7fa00017c6684f1"],["/tags/Cloud-flare/index.html","58c4cd68b6f95f4f63f4e74f553e61e8"],["/tags/FA/index.html","ba4f30fa4240eee99b249afd530cb146"],["/tags/Windows/index.html","96768105504af3df3a737b179cc1d8bf"],["/tags/Windows10/index.html","bf6116f4eac976c2b814db1c8b580f0d"],["/tags/android/index.html","96e2f837db3dcea248a60310f5ef4117"],["/tags/app/index.html","734cf8b215fe2c4849b533aadc44b654"],["/tags/bilibili/index.html","a2f8e26a51105547b0841d1032205a4b"],["/tags/dao-voice/index.html","a3f873173788c4db67b39daa48dadc24"],["/tags/debian/index.html","2aea1502c4750a0bc13ee06f72da6081"],["/tags/download/index.html","e81cabe15a2a0c2f94756b719694663f"],["/tags/fusionapp/index.html","79f6ead6be1840282c31e895b81cd58a"],["/tags/gh-page/index.html","2bd904977994409fc5093d7bec75f990"],["/tags/git/index.html","c46eed3cc5ffc4860e083cd7bb080799"],["/tags/gitee-page/index.html","71463a62a2e5af9927f1a2103d1cf080"],["/tags/gitee/index.html","17dcbae4416c5c5f235db6d2f1868252"],["/tags/github-page/index.html","5062c15013cde47a1df025429b60f352"],["/tags/github/index.html","0ef00e066709280ea62154a1134ae2e4"],["/tags/githubpage/index.html","7fe746a0bba4583e497acdaba474262a"],["/tags/hello-world/index.html","5ecd8fa604073ea5ffb64f98e40dc9f6"],["/tags/hexo/index.html","10b4c9b625ed1e00e90eada962154af0"],["/tags/html/index.html","49854ac051e1cc2a78a6718a8adb0b8c"],["/tags/iframe/index.html","68808e97d11fed8830b4186e9497b780"],["/tags/index.html","5b436a807cd1df3820706d3208759f96"],["/tags/java/index.html","2a88599ccaca8f66b72d716eca4d5cd6"],["/tags/linux/index.html","db0b85b7b632ff949ff93660d361c40c"],["/tags/liunx/index.html","7e514cec1cf094142669aa07373b09a5"],["/tags/markdown/index.html","f2912fa8403089cefb7b36e72e6d20e3"],["/tags/md/index.html","d827c13a959447c0b4bb3ad3199d4042"],["/tags/md编辑器/index.html","94a073428bf45589f3c35b5d490649f5"],["/tags/minecraft-JE/index.html","c05e3963fd3b2003934933a1f7455d49"],["/tags/minecraft/index.html","d04c47374da31973cafe16f318762420"],["/tags/minecraftJE/index.html","1817b91e690c390d893a56340d6bc88f"],["/tags/node-js/index.html","2d9199699e29b8ee3e576d80e9c8ca70"],["/tags/node/index.html","e9f572dd71b809dcf5aba93004d704c6"],["/tags/picgo/index.html","378e508054eb3855f5c6f4de63361926"],["/tags/ssh/index.html","7ad53808aea33131dfbbaad276fa8092"],["/tags/termux/index.html","37ac690ccf4e91a21c88456d827a53c9"],["/tags/vercel/index.html","dfefd7882f0e12eeb55c7b436c4c24d8"],["/tags/website/index.html","7cca0c3d977ec7c68251084ca73e918e"],["/tags/win10安装/index.html","0ca5efa23e96e391eb0ee2cb51d6e175"],["/tags/wmz-blog/index.html","eb44f688eb804bc14cf532f6c2b5b9b8"],["/tags/免翻墙/index.html","cb8fc2761b00f897f65cc6556e9dd9f3"],["/tags/回顾/index.html","4efa2bfc19f95c3d786411e18f4ce5dc"],["/tags/图床/index.html","47971ebc80b5045640ba8da00cfbc019"],["/tags/在线聊天/index.html","49d731fde70cc38a0952595b7ce2a246"],["/tags/安装/index.html","9ef808b60bdc4325f458c1d19a0fe782"],["/tags/工具/index.html","a6bfbb01ccf350aed7bbb3eeea3c1ed7"],["/tags/我的世界/index.html","fc08fc694c51189ca87485e5209d22b9"],["/tags/折腾/index.html","5c479cd9ac4b91767491f1aca8cbb389"],["/tags/搭建/index.html","a1ae61a81c4259a6c2fd0c418557a1a8"],["/tags/教程/index.html","5f645500312c93c3141172b8312db87f"],["/tags/更换/index.html","5f5355d665b4f37aa7b6dad142fb0192"],["/tags/更新/index.html","462b2f5e1b3c42cf2d157c2264ebec5f"],["/tags/更新了/index.html","95274f6566a07cb3d1b8ba7079651c10"],["/tags/测试/index.html","8082ba5da43b49f332ae07d64462a268"],["/tags/百度统计/index.html","bc09324d08721d82931fbecc33645f71"],["/tags/看法/index.html","3c2c11a41c0b7d274525bcd10cd4ecc5"],["/tags/系统安装/index.html","8453ec4060ebc0d1b9f3cbb0a50e65dc"],["/tags/迷你世界/index.html","2afe0a30c591b4e292acf37eac56bf6b"],["/tags/通知/index.html","805045b6bd978be92e5d377ff2fcc15e"],["/tags/邮箱/index.html","7538e76f857888a099e06f2ed4c41485"],["/tags/随笔/index.html","7c4ba31d6e7d507f9b3ca4f4dc01ec94"],["/update/index.html","85bf98cb3aec18509a5e961e122f4d8c"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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




