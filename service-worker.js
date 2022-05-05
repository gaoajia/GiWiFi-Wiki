/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1403cd89f757dea8876d3a868a166351"
  },
  {
    "url": "assets/css/0.styles.49e40d0b.css",
    "revision": "1bd6ecd6d8bda907bf037a093c5b2be2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a7c83129.js",
    "revision": "45fb822b6a52812c64b7f9267e2992cb"
  },
  {
    "url": "assets/js/11.d8a892ac.js",
    "revision": "9e0df58c5cfb31b639a57088097712c6"
  },
  {
    "url": "assets/js/12.54ef4062.js",
    "revision": "49ff1d8a568e396dda6daf21f5c79b67"
  },
  {
    "url": "assets/js/13.5984b4de.js",
    "revision": "a47ba4959db09bfe5034e15c3eb005fb"
  },
  {
    "url": "assets/js/14.723f29c6.js",
    "revision": "6e65e8cac386c21387b587e3f0a399c2"
  },
  {
    "url": "assets/js/15.0f6a9c91.js",
    "revision": "f8e4a90aaadfe74d588e6fc8e0073667"
  },
  {
    "url": "assets/js/16.c3438061.js",
    "revision": "13a2eed104196ed830df828d3440353a"
  },
  {
    "url": "assets/js/17.3d775ac3.js",
    "revision": "4c6b29ab89d49e4468fd3e0321889e0f"
  },
  {
    "url": "assets/js/18.07ee6394.js",
    "revision": "6655cf3964b78725814d86aaa7bcef6c"
  },
  {
    "url": "assets/js/19.0b476b34.js",
    "revision": "a057c8df36cf7198934c7a59db97d9da"
  },
  {
    "url": "assets/js/20.457f0b30.js",
    "revision": "f96cd1de4f947a0cb7d47f8e30471252"
  },
  {
    "url": "assets/js/21.60f95f8b.js",
    "revision": "6ede96b2149fc71e61d5b8fcd0a91213"
  },
  {
    "url": "assets/js/22.dbfee9c7.js",
    "revision": "58ea526f4bfd13d33837ccd6cef3a322"
  },
  {
    "url": "assets/js/23.701de97b.js",
    "revision": "92598e4500348bfe84fd8f745eec817b"
  },
  {
    "url": "assets/js/24.d108f66f.js",
    "revision": "49ac52efb823a8185507fd7767793764"
  },
  {
    "url": "assets/js/25.68f75641.js",
    "revision": "b821d118dab638431be154beebfd7959"
  },
  {
    "url": "assets/js/26.59879f52.js",
    "revision": "0fc39da333c5ea0e86a374e635dd031a"
  },
  {
    "url": "assets/js/27.0d4e4fb1.js",
    "revision": "b027e01830e53f935b4effa7210d1ca3"
  },
  {
    "url": "assets/js/28.8ab31405.js",
    "revision": "d03283412f5bfb379e9ca4712592f1aa"
  },
  {
    "url": "assets/js/29.5d2be6b8.js",
    "revision": "2942f8d689784745a0040e08dbbedd5a"
  },
  {
    "url": "assets/js/3.f9ce0fb2.js",
    "revision": "0a1915ab8b0419c54275ddbc084da15f"
  },
  {
    "url": "assets/js/30.0cdbcc62.js",
    "revision": "4a37ba1b9ca2b88bab6c46b3f35a1417"
  },
  {
    "url": "assets/js/31.094a2061.js",
    "revision": "8297e271b9c1d19be99c164f9a8645db"
  },
  {
    "url": "assets/js/32.2a9cabf3.js",
    "revision": "b13f04c2411ee959788c26acfb2cab06"
  },
  {
    "url": "assets/js/33.50a0785b.js",
    "revision": "f9b8b6e1e686834747519d612829991f"
  },
  {
    "url": "assets/js/34.57f59262.js",
    "revision": "c9d51bb0e02bbf96136c41241c516c1d"
  },
  {
    "url": "assets/js/4.e46e8f53.js",
    "revision": "1c6304e4e8c5e1af8f7167d1dbd86c04"
  },
  {
    "url": "assets/js/5.bfccea96.js",
    "revision": "260ae834ac0b4b3fb769cb72196cc456"
  },
  {
    "url": "assets/js/6.ff030478.js",
    "revision": "c23ed10bb957bae936db7320b4b30a35"
  },
  {
    "url": "assets/js/7.ec491545.js",
    "revision": "aa3e167314212135cc56f2777db10f50"
  },
  {
    "url": "assets/js/8.e7339d37.js",
    "revision": "558e7ef4b65de9ccc14e26c69c972fcf"
  },
  {
    "url": "assets/js/9.d547c163.js",
    "revision": "8ea2466902d0cc58f0355776732c8e4c"
  },
  {
    "url": "assets/js/app.0764b9be.js",
    "revision": "ec347ca786be344b9430f686a6d41d2f"
  },
  {
    "url": "assets/js/vendors~docsearch.40dac22c.js",
    "revision": "e7bd9ae0809b267c85ff7cf4d79c42e6"
  },
  {
    "url": "blog/index.html",
    "revision": "235f1606dabc9fe34d02468d4cb0d374"
  },
  {
    "url": "img/general-128-128.png",
    "revision": "d36f9d3d785443b43cf4793e0041d5a4"
  },
  {
    "url": "img/general-16-16.png",
    "revision": "c4b622f7b32d2636af981175c9e157fe"
  },
  {
    "url": "img/general-256-256.png",
    "revision": "ba88591a057b1b9e67a848abb63e3596"
  },
  {
    "url": "img/general-32-32.png",
    "revision": "83f778451654a93d77279332ff9ed4c8"
  },
  {
    "url": "img/general-48-48.png",
    "revision": "f2889f73712dba6250c3ebd243ecc577"
  },
  {
    "url": "img/general-64-64.png",
    "revision": "d22fa82a5bfa00194a640424cc09b160"
  },
  {
    "url": "img/general-90-90.png",
    "revision": "e9ffbe0d10b7488544b10752d0058ab2"
  },
  {
    "url": "img/marketplace-128-128.png",
    "revision": "d36f9d3d785443b43cf4793e0041d5a4"
  },
  {
    "url": "img/marketplace-512-512.png",
    "revision": "50529c682ce62b8443e5a67fdea2caf3"
  },
  {
    "url": "index.html",
    "revision": "cda58ef68d3f12613b74cf5b409fd763"
  },
  {
    "url": "markmap/01.html",
    "revision": "dd371c2f62cb9d9271072fece34c9ad4"
  },
  {
    "url": "pages/0fc1d2/index.html",
    "revision": "abc14c39cbe3c0596fea353d3efc8b20"
  },
  {
    "url": "pages/1b12ed/index.html",
    "revision": "9e00ac8b98d60a07797290ba0f52a895"
  },
  {
    "url": "pages/22640f/index.html",
    "revision": "53df484c57cda7bb7b79d5c401a55d12"
  },
  {
    "url": "pages/2f674a/index.html",
    "revision": "5e4bec62ead7c10630aca5f2d1b6b322"
  },
  {
    "url": "pages/33d574/index.html",
    "revision": "adc2db0a906fcf552e46333c21aabcd0"
  },
  {
    "url": "pages/3a4bef/index.html",
    "revision": "ded7779d03e03b798da517187e02893c"
  },
  {
    "url": "pages/3e7666/index.html",
    "revision": "22f1a32c9e87ac52a01b662a265160ef"
  },
  {
    "url": "pages/472500/index.html",
    "revision": "01e7a0a1906799bf0bb251676119923a"
  },
  {
    "url": "pages/514a88/index.html",
    "revision": "c09ba1f893706cf8b21956481ca48433"
  },
  {
    "url": "pages/52d5c3/index.html",
    "revision": "6e3b591eceecc5106473d323532aef09"
  },
  {
    "url": "pages/5dfce5/index.html",
    "revision": "eeba0f18e7eb9b987b132854b288bcca"
  },
  {
    "url": "pages/793dcb/index.html",
    "revision": "b6a964674e57f32b0e9e7db87c4aa950"
  },
  {
    "url": "pages/9cc27d/index.html",
    "revision": "47924fb7967858e56c1ee2bd323a0b3a"
  },
  {
    "url": "pages/a20ce8/index.html",
    "revision": "504fef21229c09e19cf56de20d37d2bc"
  },
  {
    "url": "pages/a2f161/index.html",
    "revision": "749664e736e3503a69d440e5ec3d102d"
  },
  {
    "url": "pages/c791f0/index.html",
    "revision": "09dc56da5d972147e3c4a6b7812021b7"
  },
  {
    "url": "pages/db78e2/index.html",
    "revision": "34739e345e57ee54249d455708d60cd2"
  },
  {
    "url": "pages/dd027d/index.html",
    "revision": "70298cd011f459929aa340c20baa6e3a"
  },
  {
    "url": "pages/e42d5f/index.html",
    "revision": "04bd82c1e439b5b0e9ad48dafb9600a4"
  },
  {
    "url": "pages/ed7f92/index.html",
    "revision": "b5fbb03434a95debe38c8b3f6221313c"
  },
  {
    "url": "pages/f14bdb/index.html",
    "revision": "54268d561cd7164c9fcbe51fbd3af5a7"
  },
  {
    "url": "pages/zhet/index.html",
    "revision": "b870f4619afada289f3ffdce1557ab15"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
