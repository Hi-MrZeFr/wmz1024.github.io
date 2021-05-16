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

var precacheConfig = [["/11f1a2fc.html","c2c02d8a4c059e445531b65c906421f4"],["/1f7e3876.html","689e0f079a49ae5fa90772b1fef138b0"],["/2b244555.html","19ccbe1a89455e05c967f8d225715371"],["/2c7854e6.html","f36a602eb4bf36b031f4f7fad2da1ff3"],["/2ee2518d.html","a9812173d5d739dbce2fe6d8d3d2cedb"],["/30422b3f.html","42f17540d8ac04c58a3f1fd592c67a95"],["/3494bf09.html","d13e54dc49ec401d156fe57548be862f"],["/3e4cf0e1.html","46662d88e462044a46a23d84e4654337"],["/404.html","1838ade51cd2fe03298e5b3690fbab47"],["/4283e7c2.html","d3c9864b1b22d822567d5a1e7e7fc7a7"],["/47008bfe.html","c20bd2cc33bee65c5527ff6b8d535962"],["/496761e5.html","0359ce7b0f9784e88a88d59758bf21ae"],["/49ab854f.html","28437730a875c41b1a852471c2db5c89"],["/4a17b156.html","cfb88b481832dabe94c440cb864412c4"],["/51f11683.html","ca06e26b24e0edb53d3ba43417688b1c"],["/6057642a.html","4277a4aed20cb7acced263c6584114fe"],["/60816787.html","9cb67620d076d513386f940f9db21d47"],["/68083ed.html","e06b36bd636cf464871a1e60a2abc978"],["/71e2d2d3.html","118378b562ecb8889c79a81d0e121ee3"],["/748a29a4.html","f16cbac0382c20f39fb67781aba483f9"],["/7bc26341.html","9c33f61abb8b99a22850b7aecbdc3f57"],["/7cee40bf.html","35be129829f10ac32366949ff7c76f00"],["/836982c.html","8b173a10f0c07027f4ea9ca6b43b000d"],["/83d82948.html","df4df4e21d381e466f8bd43c8de878a9"],["/8856403.html","7b6d9ab049812002b1428c23927e382f"],["/8bc291e6.html","700a8ab19855d2794f6e2904969c451d"],["/8d39085b.html","41da7b16a6633d8c2d28c5d25d572b07"],["/9341b494.html","a212cac79fde5ff295d4dfabebc5c39b"],["/96ccccce.html","23f691f18e21d39258e0fd71c541457b"],["/98d114e8.html","a960f16ac6d691773cd742dcfdd8f155"],["/a1be303c.html","d05fa64e175bf4a5ca52f05282844a5e"],["/a81556f1.html","87f81404ebceaac375ff10e6a44ba5cb"],["/aa96c821.html","4b8bfdf1938b83716192a9e4a85d3199"],["/ab1d37b.html","9d23eadf184780eb2b1d06a9a2312fef"],["/about/index.html","3ec1a66a811cb3d1ec7dd2c32abd4286"],["/af886b34.html","dc213723033dfa91aa089f789f22231d"],["/archives/2020/08/index.html","56980beecc9ca71a810421f20ece74d1"],["/archives/2020/08/page/2/index.html","33f5cadf5993747652c77916d84e0f9f"],["/archives/2020/08/page/3/index.html","a9b69d61cea41ad1e9fed764e4f41fec"],["/archives/2020/09/index.html","9794d15eaad62a5d9d1fab9035660790"],["/archives/2020/09/page/2/index.html","1c8f91d148826581d5c731f53c9c1ffb"],["/archives/2020/10/index.html","1092c56a88a15354f1e9316a5a3f74d3"],["/archives/2020/11/index.html","66395d9ff42610542f6de60b289ebe9d"],["/archives/2020/index.html","17a6797c0f7847929039306d5d9ab920"],["/archives/2020/page/2/index.html","796bf7495f7e606a22f72860e5f180d9"],["/archives/2020/page/3/index.html","06fc4362983bb1b72c7704f8e07af6ca"],["/archives/2020/page/4/index.html","a46d8e20c0b65d75921e9da8d82be013"],["/archives/2021/02/index.html","02c66e9f25e3f692edeb3811a64d18f7"],["/archives/2021/03/index.html","a7dac40669772658b8e860760174be12"],["/archives/2021/04/index.html","b65c5907196fcf9e24077b8a551bbf4a"],["/archives/2021/05/index.html","20cf6adc10fc246e23be16a0c74cbb75"],["/archives/2021/index.html","04350883e9a1cce2976b81b75e292421"],["/archives/2021/page/2/index.html","6d44f76e35d3f27cba432f2b5afcd282"],["/archives/index.html","082256ba8a739f28feb7309c8d71a39a"],["/archives/page/2/index.html","8226c1dde91d78333458f4f2dcf0a9b6"],["/archives/page/3/index.html","f0f38c2cea9f5d69922b81f017571b73"],["/archives/page/4/index.html","1da888c93d79d9e5161da0d6245c70c7"],["/archives/page/5/index.html","777ddcf63629d78ff278cde7a4976288"],["/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/b28868d6.html","45da6fd765dfd9e02a3b4c42eea656e0"],["/bangumis/index.html","8fdf45d167c57b2aa3ea80cd336960e8"],["/bf3a65a4.html","0c29919ddecc1b7a98ee458b0a24d707"],["/c1ee638c.html","800c8d4ca93a0c22bf81e830c02ca9b0"],["/c3119b08.html","afb7c8e32a289aa191a6e265341370f6"],["/c6c9c4db.html","e40c37fb5afef567c6b2178cb6bc44ce"],["/categories/index.html","2134ef81362ad731ced5264fd8a644ce"],["/categories/教程-html/index.html","093d52ffd842f4652619b2f9799898a2"],["/categories/文章/index.html","7b247de88682e98bea33b77bdb9b3610"],["/categories/文章/page/2/index.html","cad142074173cc4c2833b66fafa068e8"],["/categories/文章/page/3/index.html","56715e630245a1ac29500754fd6c6148"],["/categories/通知/index.html","c0bce4eae73742454b5bb0907e94399d"],["/categories/通知/page/2/index.html","acb24370643f192ee9ff57011688a5c6"],["/cd843bca.html","dfcd7e8beb18dc8f4819fe0dfd47cacf"],["/codemao/join.html","09fdd6a2ddd16f82c058f820407d2095"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","42ca12d0ad5f7df4ecddbc251b6e4ba1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/d28a09fd.html","a118e4c5d836fa04d1b498bff7a30a9b"],["/d2bd8f46.html","16c206c208f98db83ec2891e060021d9"],["/d46f6783.html","f05fd62af774e80c21f3ed2be8de3a89"],["/da033cd3.html","a018a6be4ffdf7b662d1fe84855d5f4f"],["/dfd2f59a.html","dcfb7f747f9e226384a666948dedf40d"],["/e4d07d47.html","3dfa25dae40cd47cc8640302ce2a8e31"],["/ede49718.html","482e265abb0db83f3e2e2872af5c6a9b"],["/f6485125.html","96544e8b3bad899d2e67a4136d37b034"],["/fa1bfef3.html","eed1d14eacb699a98251d67d479cb0de"],["/fe275fd0.html","80baec624e26f1b8e7d2b8036199420f"],["/from.html","a3c98c40cec05d338b14448217a95eeb"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2be313e90d5de78b2282f5b703b2f0d9"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/jump.html","dc89b09701440dce9e8d495715fdd57f"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","75d471e37b63e31e97d5c8c48ec111dc"],["/me.gif","700331096068bbc3dd093df09cd1e40a"],["/msgboard/index.html","6cffc09e02eae9eb5367a840cf15aadb"],["/other-page/dead-links/index.html","2a7fb7048460ea2308f20ec2fc6e92b4"],["/other-page/video/index.html","7acbdb62c9d85b57680f8e1824e6e0e3"],["/other/index.html","2d52b5ecb1d49e12037427c523bdca3e"],["/page/2/index.html","8742f492ab4ffc5daaa2f7687214141c"],["/page/3/index.html","8bb694b1612488aa438001f56b043602"],["/page/4/index.html","b9877fb6bbc4bcccd4dcf0033d0f5644"],["/page/5/index.html","0d78d8269664556ce00d886f5d460ad8"],["/random.html","e3bb817b717d86cea68a192824967162"],["/shuoshuo/index.html","ebfbc1a5b9b8d11f5fb3ab1264afd029"],["/tags/2020/index.html","94acf600172f46296a24108b8cbdf1ff"],["/tags/404-网站/index.html","4567c0328fd193db53cfe91882f3e16f"],["/tags/CF/index.html","25c5aaa2bcd49cb67d63eea508fd7924"],["/tags/CFW/index.html","3238732f72234ca9ecb252e068083624"],["/tags/Cloud-flare/index.html","96c24cfdcae9e33e5c62a491a41b40b5"],["/tags/FA/index.html","7f2b4514e886f32731436c11c3bfab80"],["/tags/Windows/index.html","85ac920b4855dba6d889dd9db8fedd9f"],["/tags/Windows10/index.html","ac70926b030ea3ba965e2575675b8d80"],["/tags/android/index.html","1c657f2999229096b543e49a213bf583"],["/tags/app/index.html","c368e08fa98435d12e295c807b76dd7a"],["/tags/bilibili/index.html","1181c8c998bb0ebd7ced94b4e3a2fd23"],["/tags/dao-voice/index.html","6a2ffeedba5bdedd90a2a652586b9845"],["/tags/debian/index.html","51695a8e77536ae9244b1f54fd6da370"],["/tags/download/index.html","5fcebcc922733e5b9b206428ba40e5c8"],["/tags/fusionapp/index.html","259a703e9e16f484ed5c02b721362892"],["/tags/gh-page/index.html","cb8e0b2643c31a8ce39864a85e31d165"],["/tags/git/index.html","6a3ce74b268b73f620829479f5930837"],["/tags/gitee-page/index.html","e5c024bca1993f9bb2e5be7bbe54a216"],["/tags/gitee/index.html","703ec05b0182fd56b3a236a3a2793ac8"],["/tags/github-page/index.html","7242b204885c420930c70a61bfa60a0e"],["/tags/github/index.html","6f06f49a946ffb70df88217c0c46df9e"],["/tags/githubpage/index.html","6e1d55ada977e8c3b009cbe5d5dd0edc"],["/tags/hello-world/index.html","8e5422c003175ec5ca4c6a9139c4a339"],["/tags/hexo/index.html","6bdf04333a1822f8dd1ecd2c34d34398"],["/tags/html/index.html","f329c34300937f6edef57e89b95e9ab9"],["/tags/iframe/index.html","f220609abfb911ea5565b1391994c91d"],["/tags/index.html","c055ba6c975fbdf9df6b7d9ab6f786d8"],["/tags/java/index.html","d34d41dbd9e1266d6c56e25a30ab5691"],["/tags/linux/index.html","9533d32cc6e9f011d96800d1026a3041"],["/tags/liunx/index.html","bdad428393d9bd49dcfc931cfb46bec7"],["/tags/markdown/index.html","b8d8cc9ab840af5bc6ea3221c9da80d8"],["/tags/md/index.html","a831e0f8ca92bf79986d497b64657a49"],["/tags/md编辑器/index.html","4ccc2584b0dbb36db94ffdaf74075f4e"],["/tags/minecraft-JE/index.html","c2f6439ea9b842b941092a0ec2e639a5"],["/tags/minecraft/index.html","c8c9732ad8551672ad81019e9beb412b"],["/tags/minecraftJE/index.html","fcfab421c4a82cc31e3bb55454871e10"],["/tags/node-js/index.html","789f96d39375242cc4c61a30407c3dec"],["/tags/node/index.html","29942e0f39053bc6f7fe3593fa704a1f"],["/tags/picgo/index.html","2ca03f167ce09622c114feccf5e9446d"],["/tags/ssh/index.html","d37bc5104485d8f51a09390388a6bce1"],["/tags/termux/index.html","75a308ef7e950da7440aaddce9b63c95"],["/tags/vercel/index.html","8339c927bc9a99f4e3f96a7d903cb574"],["/tags/website/index.html","4fbc32017ee54bccc4b511ce7504b83e"],["/tags/win10安装/index.html","52d2cffc57f3def11d417cbf496dece0"],["/tags/wmz-blog/index.html","60ee2f7101291e0b5f80bcae32b8a622"],["/tags/免翻墙/index.html","f25803644bc446c7fd5c18ba5ad501fe"],["/tags/回顾/index.html","02ff41e992054c788bef5585705d35c3"],["/tags/图床/index.html","8b2b667f31915ecf01336643afc64959"],["/tags/在线聊天/index.html","69353eac0f64e859db39b9b44126d1a8"],["/tags/安装/index.html","098c7e5aba1e13f4db34098dcc2b6ac2"],["/tags/工具/index.html","a7daf359a7795e3617d05646819cdc39"],["/tags/我的世界/index.html","bc672591bcdca2f4783a403f418e2b2f"],["/tags/折腾/index.html","413714b05785675f74257c616b6371b4"],["/tags/搭建/index.html","c1a05eeed1d8ee441bab982ace02ebc0"],["/tags/教程/index.html","777810113cb0ab876fee82e21723a6fe"],["/tags/更换/index.html","aa8edbdbce2449c839f876c581883840"],["/tags/更新/index.html","46a96bc38cdb3187359ee560ded463e0"],["/tags/更新了/index.html","61d3ac8518a81127e9a37f26b0400a89"],["/tags/测试/index.html","6110109892a48c2dc7e11ab4dfbea9ae"],["/tags/百度统计/index.html","40c3850c7c8d21faf41ac0cd0fd26871"],["/tags/看法/index.html","4d31bd96332c86bfb85065a790c3322f"],["/tags/系统安装/index.html","8d2dd94eafbec1edf30cb30166fceaa1"],["/tags/迷你世界/index.html","54f70e69489ed8cac4f14389191843ca"],["/tags/通知/index.html","5bdaa12d4823aefd5c72a7c124acce99"],["/tags/邮箱/index.html","be239da90633742bdb06626d5fbe3994"],["/tags/随笔/index.html","1114785c87ab512b89f99332360731fc"],["/update/index.html","e4d232c85c4c1fdb784c31b7ee856758"],["/wsimg/144.jpg","e81b36fdc50f547888a3db75a416da48"],["/wsimg/192.jpg","dff36f97e418309c1ea7c96a4c376e9e"],["/wsimg/36.jpg","ef6152ccce88e2a17fe4ad3c0977e23b"],["/wsimg/48.jpg","085823fb1b7f0445e853dea64e0ddf98"],["/wsimg/512.jpg","192ade4ecd44c84de0b9e2c951867110"],["/wsimg/72.jpg","a4b62f49424968d927c567adb8560c13"],["/wsimg/96.jpg","75398c65875f0e740375c80f2822019f"],["/wsimg/favicon16x16.jpg","b2630134eb8ad276490a5565acf54189"],["/wsimg/favicon72x72.svg","e9f105cba07936e976ecf7bb735e4e28"]];
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




