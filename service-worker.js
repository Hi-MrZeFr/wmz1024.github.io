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

var precacheConfig = [["/11f1a2fc.html","ce407a27789d03a05ef3bfbd0cc4f538"],["/1f7e3876.html","b9758c36863cebcdf3f0b36314b87e0e"],["/2b244555.html","ca125f5e9b606a5e7358a8afd6f5ab05"],["/2c7854e6.html","f9be9b9ee905ca129646aa262de8c21c"],["/30422b3f.html","f4c41961044de1afa7e0b047e1bbc3e4"],["/3494bf09.html","b5a4d22c5d13c999f312a0767796672b"],["/3e4cf0e1.html","d6f94cf660af516bd33e6102e09453db"],["/404.html","d9ebec803ecb308b601c675fc7e867a2"],["/4283e7c2.html","87def62175f561b067c7058d81dad134"],["/47008bfe.html","2aac4a8a2b709e6aa78a3fcd663d5dfe"],["/496761e5.html","886f4cd0120a9ddf07fdc33c7ceac3bb"],["/49ab854f.html","2a76f3aedf3f206d63cd5b6606fffe3c"],["/51f11683.html","240dad18c2baf3104a620e18e34b6fea"],["/6057642a.html","2f9b29a684318865021e4d1b2624646a"],["/60816787.html","f8d12d99048d837a294a0300da674eaa"],["/68083ed.html","9c6c80bbc59c1f4b8b63da298729d46e"],["/71e2d2d3.html","1a8fcac5e6a882899605487a3f05eb0e"],["/748a29a4.html","9e850b0338bd35a754b9b2aaf19fae41"],["/7bc26341.html","110d24cfdebbee5efc3f1be8c3499223"],["/7cee40bf.html","6b44104eda7f51891ab522149c9c907c"],["/836982c.html","cfe8b358207e43dfb3f4a8fd0b1be07e"],["/83d82948.html","396e92c701141ee2c9ff80bb927fdd2e"],["/8856403.html","0b541afe1818ddaa7b78fe49e872a818"],["/8bc291e6.html","fa211f552c318167983138a83a704295"],["/8d39085b.html","0b146ac31e741ee7d311a419600ebade"],["/9341b494.html","a4b2ac68e0c53019a0efa401c03bfb00"],["/96ccccce.html","e3f667686f10c2f528c8d36be0fee4b5"],["/98d114e8.html","457276eb5de782bfc15bf8d8ce9ae443"],["/a1be303c.html","fb9f1050cc6b54dd22f79ff372cd4791"],["/a81556f1.html","4bbd16a2ce925ba4b74b8152189d66de"],["/aa96c821.html","3ae0185d6abb6b3427a326ba3a1b61fd"],["/ab1d37b.html","5b63bc1e96f961f4d57425235ddc381f"],["/about/index.html","cb0916ecb53f47c715f8c45400323edd"],["/af886b34.html","5c2fa59e122d810fe61051cad9b1cbff"],["/archives/2020/08/index.html","1c49c94ffa7892685faddbc7cf357972"],["/archives/2020/08/page/2/index.html","8f6d0cddb2bfeee451bc72c345a9e2fe"],["/archives/2020/08/page/3/index.html","bfbbcaae3ea4bb06be144bbf364088d5"],["/archives/2020/09/index.html","73c7eaeba7d5fd2acca8890fdc991fb7"],["/archives/2020/09/page/2/index.html","63984f6b7fa821e17777e25434e00aba"],["/archives/2020/10/index.html","2e99d333f5a4ffb048ad2959ace34127"],["/archives/2020/11/index.html","fb21a334890af0e5480015658e49d457"],["/archives/2020/index.html","d9ef9feb10a1b018203a0dc09b3817c9"],["/archives/2020/page/2/index.html","e7f5331f40cf2b263617e65d0e269fa7"],["/archives/2020/page/3/index.html","ce68e8d59fd1ff97366beee89194479f"],["/archives/2020/page/4/index.html","d41b847177d9cdc6c47076a5733cf7bb"],["/archives/2021/02/index.html","28bed31de3c7c370f1db01bb533af829"],["/archives/2021/03/index.html","115c89dea6028e505b88ad44142a9377"],["/archives/2021/index.html","33fe37e63991261a3b8a1a6ccc4f1817"],["/archives/index.html","9edb1f49433a39571800ca2c05e177c1"],["/archives/page/2/index.html","9520725b5c33c4a056c6941e5471e85e"],["/archives/page/3/index.html","07dd160f2234a89c26a37e116db83b25"],["/archives/page/4/index.html","2486a5db7a8b4015aa22472e4cd54b25"],["/archives/page/5/index.html","d3b87e1f12157351e6690d88bcc22160"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","a90e0da64b1024165963bfe2a0387713"],["/bf3a65a4.html","420577a4cc06faa41d2ebc229ca9bedb"],["/c1ee638c.html","62a83f687bafd15c053bcf24d87b28fb"],["/c3119b08.html","12b2dd07e6a4d210617f4b2dfbc0eb81"],["/categories/index.html","ddafe17fcbaf5dc106212c8db446be63"],["/cd843bca.html","1eb76e1d58024a54f54ed1ad401750e3"],["/codemao/join.html","0cd3fe844f22e034f12e2301ca42865f"],["/css/index.css","b22a7836f82a6a30e6ed60ee48d196a4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","45b45bb0b76beb5a20ef906033c1b5d1"],["/d2bd8f46.html","bb22dc5912b1c74951c2788ffe2dedde"],["/d46f6783.html","a236913a1acc45170ca107a6842c4b6b"],["/da033cd3.html","fdca7dd7dd3412e2d846ac42510d982d"],["/e4d07d47.html","aafef12a02da274db7a0005434a650c6"],["/f6485125.html","c57c5b8aee4ef79d643f3bcfee77563d"],["/fa1bfef3.html","c51490bb7d1f99cffe5ac8e770787253"],["/fe275fd0.html","cb8b319b32cb700de09540484c299e55"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a0a4b23c7c5d7aa4143ed5e36f2780c8"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/link/index.html","5827689636cf28ee3a9ea9d766b486a9"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","d89ac63ea35890e65eb352960fe9c008"],["/page/2/index.html","613517e1975465dc7638acbffaea8894"],["/page/3/index.html","69bf2570064b79be4a7f954337b2b56d"],["/page/4/index.html","229a84e1fe125fffbea7adcd4f66ff99"],["/page/5/index.html","bea5a44376e099ef0dc4344864ffa5a3"],["/random.html","73a2b174b958f0a354d5f9d32d5a253d"],["/tags/2020/index.html","8135ba9db25c128310fcf8273a03399c"],["/tags/404-网站/index.html","bb60d2140af0eaf6422edafd2472e21d"],["/tags/CF/index.html","8a6120e5250d7885d7951094598bf3f0"],["/tags/CFW/index.html","7ac74ddf90f47248f6e6357a6cac9fcd"],["/tags/Cloud-flare/index.html","c5aabaec2b1ed64a6d8b822dd6d195d2"],["/tags/FA/index.html","7267071790f215ba7e7fad45984218a4"],["/tags/Windows/index.html","5f72b3d2af5c14582515d397e6cb88c5"],["/tags/Windows10/index.html","e5db20c3d52a3d62e92e19fc98faf07b"],["/tags/android/index.html","34e044950b79117cc0c24e961cd30abe"],["/tags/app/index.html","89f09f68a6a67bfd6f043ef1a09a9e76"],["/tags/bilibili/index.html","731459510c3c6334c984c8fddda396d9"],["/tags/dao-voice/index.html","e915a6c728c115f7d74188e46a52574f"],["/tags/debian/index.html","9d3add73a4dd3b53d26a5999a78ed6d0"],["/tags/download/index.html","e82df708b2abd1f5dd4d014272354fc6"],["/tags/fusionapp/index.html","83a3e9ad9ab01e79dbc8811f92260628"],["/tags/gh-page/index.html","958b6d0f36d7d0ee188356e4ace7aa2a"],["/tags/git/index.html","13258c722619b2631f1e8c48a63bbb75"],["/tags/gitee-page/index.html","4fd8260fe06765ff9735fd0b6b4c48d8"],["/tags/gitee/index.html","7d46ce75f1c674c8f0c5f6d9d7a5baf8"],["/tags/github-page/index.html","7176921b928bf80e3b4d151e4591b384"],["/tags/github/index.html","5941e6e4fb4d1b649ec5fa5d74f812ef"],["/tags/githubpage/index.html","024423324fd64458cf8a30dbeec4b91e"],["/tags/hello-world/index.html","fdd8ad6977cbaceb68fd987c6d2a838e"],["/tags/hexo/index.html","c1b0b2bef1c7dfbe8b45660f3c7ef702"],["/tags/iframe/index.html","15683820fa432a9caa657f2b01a1d950"],["/tags/index.html","9a7c4e7a454fe1b58e052b5f1216adc2"],["/tags/java/index.html","ad5990fcdac0815517d25e0c66531b69"],["/tags/linux/index.html","cb5495b54361377f8eeb59bb3e8dbeec"],["/tags/liunx/index.html","75ea1dde31066f0aa7637bd6bb237138"],["/tags/markdown/index.html","05a494d39988479cff05f7288afcb17e"],["/tags/md/index.html","a2cc290cce60d968d8ff4ec3c1b0e81b"],["/tags/md编辑器/index.html","f5307041163540a2234b9d0fab4d9a2b"],["/tags/minecraft-JE/index.html","a8946be151dbdf019bf4a2b82451469d"],["/tags/minecraft/index.html","a573747186d1efe8a5e08faf67b7a7b8"],["/tags/minecraftJE/index.html","e8797d25d3c3d9c9e633240638cd3fb9"],["/tags/node-js/index.html","0336a64798a64f252b0988a1d07ef4cb"],["/tags/node/index.html","196ec1ed2dca10722a2db5402c70321d"],["/tags/picgo/index.html","ff45be8e3eb3ee9b906e27c00707fe36"],["/tags/ssh/index.html","d5aa8cf1d989325c7014d95dca214dc0"],["/tags/termux/index.html","05417bfe3e84dfbec467670fafcf101d"],["/tags/vercel/index.html","d903636040ad53bbd79641765928cb25"],["/tags/website/index.html","2b51579e697a592e15ff8cd29f806504"],["/tags/win10安装/index.html","c27e36aab027b79f8d399b03809a258c"],["/tags/wmz-blog/index.html","0367dd8a3831253be6f6dac392881ee5"],["/tags/免翻墙/index.html","ae3bd25b234853de489998b36293a1b3"],["/tags/回顾/index.html","b6b24978aa9984a4fa1db505a3db24b3"],["/tags/图床/index.html","bb4a8874549be1d946c9fb407b28443d"],["/tags/在线聊天/index.html","a5241a3a7bc843672eb5d3a6ac4f18b1"],["/tags/安装/index.html","25e2f2a4dc098516b7135e078baab00a"],["/tags/工具/index.html","2f3988e8b4b5b1f2eaeb127b01550272"],["/tags/折腾/index.html","881ed96682dfdc646a4b94dc3e79fb13"],["/tags/搭建/index.html","6bee3f0bcd887b6bf0068de55d525eab"],["/tags/教程/index.html","662d31dd7e521d8fba2d6fd97a231c2a"],["/tags/更换/index.html","ee8958c0168b320fa761bb1365918f9b"],["/tags/更新/index.html","f9332d4dd649e9cfa5d45c60c05be5ad"],["/tags/更新了/index.html","8d3eee5ad345babd4a7727d9ca3c9057"],["/tags/测试/index.html","bd61100f640ef1af409ef38ee1177841"],["/tags/百度统计/index.html","ce2b62b79f3e1192ebcf97c0839ba193"],["/tags/系统安装/index.html","fdca65ddee47a7a68cfe6db333bbcfc5"],["/tags/通知/index.html","4049589feb01c303ac5640d9c41ca02f"],["/tags/邮箱/index.html","4bda73f4f00c83df08441e7f21ec8fa6"],["/tags/随笔/index.html","378383f9070fef8627cd8498f6fb8e5a"],["/undefined.html","55baf118490309a292de4b326af657d5"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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




