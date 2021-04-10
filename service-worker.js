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

var precacheConfig = [["/11f1a2fc.html","7842242b45e0bfe645810b50db7818ea"],["/1f7e3876.html","c7bc9455a04d3bd82710635b1d95373f"],["/2b244555.html","819cc09cfe355b590ff46361a8fa6bd3"],["/2c7854e6.html","4720123e2497b3fb1fe3fdbfe78939c6"],["/30422b3f.html","e53d42c3a7a0169362017c07dacc796e"],["/3494bf09.html","1d78be7bb5e44b3aef219b64dc7bfc5e"],["/3e4cf0e1.html","946539ab98d6b51f6b8ac3c1d393f5ea"],["/404.html","a51cc0679c7eeb72dc6d24536bf67c71"],["/4283e7c2.html","f6b0b04a99f7cbc7dd26a62d04494f98"],["/47008bfe.html","1d3af44d66fdc9a0676bb6d402e4e440"],["/496761e5.html","fde06512334444f1160e51ab5d308652"],["/49ab854f.html","eafae27d9d72293749a0d7132a8fd6b2"],["/51f11683.html","5f077d3ac739ee6e1f59a037e775ca6e"],["/6057642a.html","08f36b1cf808e6c276f9eadbf8b56279"],["/60816787.html","6d77f1b1d6184b8e414bc58ef99d25e7"],["/68083ed.html","2571a58c667d4e83edb937f8af9f14ab"],["/71e2d2d3.html","34f8d9949ab8bc9314e0b5e75f29c74a"],["/748a29a4.html","27b1c1fa1031387888f266bc95983595"],["/7bc26341.html","7505b90699a07d22f2b1061b09d88e25"],["/7cee40bf.html","f607a46c0d97b4bbe2392fb1ecc963c4"],["/836982c.html","b93f87c1cd0c1b35d7f18f71411ed487"],["/83d82948.html","210607643816339e1933abeb1638a5ab"],["/8856403.html","3fedac1a3585ff8e35bb962bb8df702e"],["/8bc291e6.html","b8862341691723c913a00fec7f375e0a"],["/8d39085b.html","fc9fe6bd4ed09696877b1b0f202675b3"],["/9341b494.html","a0ec0588102f446adcd0806b249d100d"],["/96ccccce.html","b6d9664f3387e84c5f59d5ea1e3ab5d2"],["/98d114e8.html","0c80f954bb87ab33d3e1fcec62d6567d"],["/a1be303c.html","eca685f9e210e9541ddd4c9be988e06f"],["/a81556f1.html","63578fcff5539f293bf092e73c650bd0"],["/aa96c821.html","b129cab7171db6653ccc065d23be8830"],["/ab1d37b.html","01a3062734f5e4e0270c4910154e3272"],["/about/index.html","30af9d80af256e1f02d10553008ba876"],["/af886b34.html","8abd0d0d0b5bec40dbbb11e4bd5f578f"],["/archives/2020/08/index.html","fa077cb5b995698e47d22ccb64be4425"],["/archives/2020/08/page/2/index.html","d1d93c26a84f24d1418e71e05337e39a"],["/archives/2020/08/page/3/index.html","dc56b96de0710fbf10ee807fa8b3026f"],["/archives/2020/09/index.html","099e2d9c4c4bbd10b13e5fd185b49d85"],["/archives/2020/09/page/2/index.html","fd06e6b696d78ba1b8455ea5c772b141"],["/archives/2020/10/index.html","00626118111e1cd6a020282e8c97f262"],["/archives/2020/11/index.html","9a283af96031023f0384ac7cafb2dfb7"],["/archives/2020/index.html","26a693817e2121caebeb045a1b98a99a"],["/archives/2020/page/2/index.html","6f100a35daceb156e558350b9fbcd1cb"],["/archives/2020/page/3/index.html","d4ad3762e4ca80472a71a6dec4b99e43"],["/archives/2020/page/4/index.html","22edc5d9474b51a7950f3543ee72c56c"],["/archives/2021/02/index.html","38441511ab8c1ce1dfc20f3efe7aaa66"],["/archives/2021/03/index.html","332ee1467ba67b7f04aa0b41ec782909"],["/archives/2021/index.html","fa857197aa3492665ae8990a9b1f56c8"],["/archives/index.html","a9105db7ac9336dd9cd6900876c8b616"],["/archives/page/2/index.html","f71b2a2743ffa187a4cd7775284788f4"],["/archives/page/3/index.html","3209e3d136c2272e3c6fe09b6fef10b1"],["/archives/page/4/index.html","269c4628a28142b271eefcbc3d3b78ad"],["/archives/page/5/index.html","e0f56cff4b15323ef7939cee4058aa57"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","648bac6d8837b410223a61a5932c7f16"],["/bf3a65a4.html","a5ba1fcad4ac321d50639337ead2cf54"],["/c1ee638c.html","4a3cc8b093c04ddcdc7969c9cf6abbd0"],["/c3119b08.html","869f654847fa2180f749132dc48f1766"],["/categories/index.html","fdf1a3efca6b8437e3effa491c509f31"],["/cd843bca.html","80b48ee8a811595cfdceb3a015218ddb"],["/codemao/join.html","4a72377cd3e75fe97fd2af07c7c8b2eb"],["/css/index.css","b22a7836f82a6a30e6ed60ee48d196a4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","261298ccfae6789622590845050345b4"],["/d2bd8f46.html","8be182266290f9baa09165b7fff26759"],["/d46f6783.html","dc94c63448f93436732c5cb45f16c965"],["/da033cd3.html","68ef77eea3bc86fc03399a066857f37a"],["/e4d07d47.html","3fcf2bdc90ee0efa5e41b2e90fa674c9"],["/f6485125.html","941bd7b89863e178dc3e2ddb1db5cf15"],["/fa1bfef3.html","e9f39be4b5a704d21032eb520124befb"],["/fe275fd0.html","198f3c64dc19863044ccc8bf9d9d2f73"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","406f1dd7bbc1e53bfd9ce9fa7fa23f02"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/link/index.html","3c6fffe932c3880199f664dc67384c31"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","2306a50ccb4f215d2dcdd1596bdeff83"],["/page/2/index.html","9cdf5414530ce90e8472c50e48279fd6"],["/page/3/index.html","5534e6b32c7a34dccd313bce0a161228"],["/page/4/index.html","d6d75977902e51665dd96d8517c484fe"],["/page/5/index.html","b98f5809b249ac848f2a36d2a7512743"],["/random.html","abeb7363faafa263d65b7c6c070dfd1c"],["/tags/2020/index.html","91f7f0f7ebabe226a9bfa20c374b0b85"],["/tags/404-网站/index.html","8f1f0eca840f427937db1b5de4b23685"],["/tags/CF/index.html","eab9e91029cc4b5a6f6d8aa085dcd228"],["/tags/CFW/index.html","54ed502f2037ed0abb5668968d169afb"],["/tags/Cloud-flare/index.html","18fab3daf8dcb957175288b6b968a081"],["/tags/FA/index.html","68a1758b2619484d386e014f6dd93511"],["/tags/Windows/index.html","f1446f03a2b325b3cff510f459867b83"],["/tags/Windows10/index.html","51907ee6f794c13b3fb400f30eb16366"],["/tags/android/index.html","052eb118b617dd2e21e012f53f38168b"],["/tags/app/index.html","05c2edb95af403a28ae5683c56827181"],["/tags/bilibili/index.html","f004cdd67c463c6969b583b9bd875985"],["/tags/dao-voice/index.html","8591f52246932ddc9bbb976518670c95"],["/tags/debian/index.html","dc0adf09ae11c38d85d8589e65fd28aa"],["/tags/download/index.html","84d70305870dc2ae30dead25c077b0eb"],["/tags/fusionapp/index.html","446ff11d4384c0ed2483b92c5e689f6c"],["/tags/gh-page/index.html","6a71c9711882ad1630e1d5ed34fc7a12"],["/tags/git/index.html","2002fcc7d0e2226f5c3a3dbb8ad871a2"],["/tags/gitee-page/index.html","f12e83a392cdfef2273d1706ef5e10fc"],["/tags/gitee/index.html","ba742c807e62dc0e00acab96f9f7c8e0"],["/tags/github-page/index.html","90201026e778a5576cc028b15d9f0142"],["/tags/github/index.html","749d37c6f610ff1e2991729f6c435219"],["/tags/githubpage/index.html","b7498c21e29d044f3f77b1d5f4db3607"],["/tags/hello-world/index.html","2961b076edf07c6af03dd8669ea91652"],["/tags/hexo/index.html","f759b096d2919554458e411a819b9b37"],["/tags/iframe/index.html","147b89c1974798a34517701ac485bf4b"],["/tags/index.html","3ca9c073f1928356912eea75d500ff94"],["/tags/java/index.html","63d65a7eb3974ba46b4f5f23bd0db938"],["/tags/linux/index.html","f8e099b8f3288f0471786d2ac7ef7e15"],["/tags/liunx/index.html","6a16aca351f4b2f117ee3c94186e26db"],["/tags/markdown/index.html","98fa34aab256f9f20cb2b6bd5cea20b5"],["/tags/md/index.html","ef000fffd1d56a5e9be12b01100332aa"],["/tags/md编辑器/index.html","6d09835b88962f36fcc638cb6f7f2db2"],["/tags/minecraft-JE/index.html","57ef39df74057553241a14d7f9bc97c1"],["/tags/minecraft/index.html","15c386244125db6faae5d903c763eba5"],["/tags/minecraftJE/index.html","e83268656e07b130b573322712f7830a"],["/tags/node-js/index.html","0ee69a3e7bbd643e808b426d31d0bfcf"],["/tags/node/index.html","1aa9c0a5f0f4ce1e0dda750f9eda5050"],["/tags/picgo/index.html","ba38a937a235d2fde4b5de3342ea6e3a"],["/tags/ssh/index.html","175189fd6e58cbc7ddaedabf9de8c6b3"],["/tags/termux/index.html","6d75afa41cf48cd0e2e045f0ce523a83"],["/tags/vercel/index.html","c9877d6b021f5845f9422d9499ff78c8"],["/tags/website/index.html","c3af5e3b031c3c2583f8bbeaa5b4c100"],["/tags/win10安装/index.html","614eb73a1bcbae8a8f9d883f7f7d5862"],["/tags/wmz-blog/index.html","ad1724da9fc35fb0561dbb7c62161270"],["/tags/免翻墙/index.html","c68b664baebb987c7dfaabcd658bcd20"],["/tags/回顾/index.html","5111acf7075721e520ed38701c4f0b70"],["/tags/图床/index.html","25c43de961f945f87f9d44ebfd0acafa"],["/tags/在线聊天/index.html","4121330dbe4ea34e848f8fe078cd41bb"],["/tags/安装/index.html","75ac6ac44c79bd15cce8eb05c1a39663"],["/tags/工具/index.html","5c9e921f78f68ba06cd4a5a20e0fbb5d"],["/tags/折腾/index.html","3690d9d4b4163da07d640adbe75db1b1"],["/tags/搭建/index.html","a00e6d537ee6a3fd566f3fbd8ca97be8"],["/tags/教程/index.html","5d09fc09c774704b319adb080f6b0d45"],["/tags/更换/index.html","cad5ebde9b175cb495284f78f8cb61b9"],["/tags/更新/index.html","1c4381ededcf252978a0dde72c8c32ab"],["/tags/更新了/index.html","5f110bb5abe08fe300079ffd5e9e09e7"],["/tags/测试/index.html","7f81788d97debfa7719f6c9184238a62"],["/tags/百度统计/index.html","bb6b37b8382c4092d3d5f9b66168b388"],["/tags/系统安装/index.html","eda4cdd1348bb65350435a821bcb7ebb"],["/tags/通知/index.html","040d59fa581f7edcaf9616ec4da9dc40"],["/tags/邮箱/index.html","17b444d22aadbe081ca0c0e32dc55afe"],["/tags/随笔/index.html","27efd32f6ddf275f720ff3769e0a6f81"],["/undefined.html","0da915912e36396591edbadf8682c00f"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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




