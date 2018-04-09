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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "c4a82bcf366ffcc442e61eba48f95f9c"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "0537952a90ea7858e3d06f65f6c00be2"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "03a018cf022531a78e8545688fca70e8"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "f9573cd9f30b5edcfcf44424aac56d6e"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "3efd64dbfdb49ef9371f7d4942208462"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "5150c90f8c0be15216bec43678401111"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "2059db16cf76635d1cdaedb779efce18"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "861936b33d15f2c30b48808b0ed443aa"
  },
  {
    "url": "index.html",
    "revision": "b7d92ef2d91d2b59ab99d3c45b56dbea"
  },
  {
    "url": "inline.318b50c57b4eba3d437b.bundle.js",
    "revision": "6eaa1608803b51f7d836604d9585670d"
  },
  {
    "url": "main.1c99a1fb243d4626a278.bundle.js",
    "revision": "b1070cca6530b1c3ae7ce3bb20d06d5d"
  },
  {
    "url": "manifest.json",
    "revision": "6769f869bf55d5b91073f4056f7e0292"
  },
  {
    "url": "polyfills.77d59861e39435768676.bundle.js",
    "revision": "768d8eab40af7318fdc217cce0277aa6"
  },
  {
    "url": "styles.ac89bfdd6de82636b768.bundle.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
