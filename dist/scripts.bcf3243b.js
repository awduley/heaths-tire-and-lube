// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/index.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\fonts\\contrailone-regular-webfont.woff2":[["contrailone-regular-webfont.aea26604.woff2","fonts/contrailone-regular-webfont.woff2"],"fonts/contrailone-regular-webfont.woff2"],"./..\\fonts\\contrailone-regular-webfont.woff":[["contrailone-regular-webfont.564bd574.woff","fonts/contrailone-regular-webfont.woff"],"fonts/contrailone-regular-webfont.woff"],"./..\\img\\main-background.png":[["main-background.f5fe48b6.png","img/main-background.png"],"img/main-background.png"],"./..\\img\\main-background-sm.png":[["main-background-sm.89511a84.png","img/main-background-sm.png"],"img/main-background-sm.png"],"./..\\img\\brushed-metal-sm.png":[["brushed-metal-sm.fd865cc4.png","img/brushed-metal-sm.png"],"img/brushed-metal-sm.png"],"./..\\img\\header-tire-sm.png":[["header-tire-sm.ae2a5248.png","img/header-tire-sm.png"],"img/header-tire-sm.png"],"./..\\img\\header-tire-md.png":[["header-tire-md.88b0bea6.png","img/header-tire-md.png"],"img/header-tire-md.png"],"./..\\img\\brushed-metal-md.png":[["brushed-metal-md.a08eb982.png","img/brushed-metal-md.png"],"img/brushed-metal-md.png"],"./..\\img\\header-tire-lg.png":[["header-tire-lg.f49097e1.png","img/header-tire-lg.png"],"img/header-tire-lg.png"],"./..\\img\\brushed-metal-lg.png":[["brushed-metal-lg.3f190fd6.png","img/brushed-metal-lg.png"],"img/brushed-metal-lg.png"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scripts/index.js":[function(require,module,exports) {
"use strict";

require("../scss/index.scss");

require("../cookie-policy.html");

// Variables from the DOM
var hamburgerBtn = document.querySelector('.nav-section__hamburger-btn');
var line1 = document.querySelector('.nav-section__line--line1');
var line2 = document.querySelector('.nav-section__line--line2');
var line3 = document.querySelector('.nav-section__line--line3');
var ulList = document.querySelector('.nav-section__ul-list');
var error = document.querySelector('.error'); // Script to make hamburger button functional

hamburgerBtn.addEventListener('click', function () {
  line1.classList.toggle('nav-section__line--line1-rotate');
  line2.classList.toggle('nav-section__line--line2-fade');
  line3.classList.toggle('nav-section__line--line3-rotate');
  ulList.classList.toggle('nav-section__drop-down'); // Watch to see if the user scrolls or the window goes above 576px wide. If so, the menu will hide again and the hamburger button will collapse

  addEventListener('scroll', function () {
    ulList.classList.remove('nav-section__drop-down');
    line1.classList.remove('nav-section__line--line1-rotate');
    line2.classList.remove('nav-section__line--line2-fade');
    line3.classList.remove('nav-section__line--line3-rotate');
  });
  addEventListener('resize', function () {
    if (window.innerWidth >= 576) {
      ulList.classList.remove('drop-down');
      line1.classList.remove('nav-section__line--line1-rotate');
      line2.classList.remove('nav-section__line--line2-fade');
      line3.classList.remove('nav-section__line--line3-rotate');
    } else if (window.innerWidth < 576) {
      ulList.classList.add('drop-down');
      line1.classList.add('nav-section__line--line1-rotate');
      line2.classList.add('nav-section__line--line2-fade');
      line3.classList.add('nav-section__line--line3-rotate');
    }
  });
}); // This will allow the page link to jump to a certain spot but a certain amount of pixals higher

window.addEventListener('hashchange', function () {
  window.scrollTo(window.scrollX, window.scrollY - 60);
}); // // Variables for the form element
// const form = document.querySelector('.contact-form');
// const name = document.getElementById('input-name');
// const email = document.getElementById('input-email');
// const message = document.getElementById('input-message');
// const cancelButton = document.querySelector('.cancel-button');
// const sendButton = document.querySelector('.send-button');
// // Function to reset form
// cancelButton.addEventListener('click', e => {
//   // HTML will automatically put the form back to its initial state unless we do
//   e.preventDefault();
//   // Programmatically we can reset it
// form.reset();
// });
// // // Function to validate the form and ultimately submit the name and email inputs, as well as the message from the textarea
// // form.addEventListener('submit', e => {
// //   e.preventDefault();
// //   checkInputs();
// // });
// // function checkInputs() {
// //   // Get the values from the inputs
// //   const nameValue = name.value.trim();
// //   const emailValue = email.value.trim();
// //   const messageValue = message.value.trim();
// //   // Check name input
// //   if(nameValue === '') {
// //     // Show error
// //     // Add error class
// //     setErrorFor(name, 'Name field can not be blank');
// //     nameValue === '' ? name.classList.add('input-field-error') : name.classList.add('input-field-success');
// //     nameValue !== '' ? name.classList.remove('input-field-error') : name.classList.remove('input-field-success');
// //   } else {
// //     // Add success class
// //     setSuccessFor(name);
// //   }
// //   // Check email input
// //   if(emailValue === '') {
// //     // Show Error
// //     // Add error class
// //     setErrorFor(email, 'Email field can not be blank');
// //     email.classList.add('input-field-error');
// //   } else if(!isEmail(emailValue)) {
// //     setErrorFor(email, 'Please enter a valid email');
// //     email.classList.add('input-field-error');
// //   } else {
// //     setSuccessFor(email)
// //   }
// //   // Check message input
// //   if(messageValue === '') {
// //     // Show Error
// //     // Add error class
// //     setErrorFor(message, 'Message field can not be blank');
// //     message.classList.add('input-field-error');
// //   } else {
// //     setSuccessFor(message)
// //   }
// // }
// // function setErrorFor(input, message) {
// //   let formError = input;
// //   formError.value = message;
// // };
// // function setSuccessFor(input) {
// // };
// // function isEmail(email) {
// // 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// // }
// Code to inject the Year in the paragraph element of the footer

var currentYearSpan = document.querySelector('.year');
var currentYear = new Date().getFullYear();
currentYearSpan.innerText = currentYear;
},{"../scss/index.scss":"scss/index.scss","../cookie-policy.html":"cookie-policy.html"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49943" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/bundle-loader.js":[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles.slice(0, -1)).then(function () {
          return require(id);
        }).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  return Promise.all(bundles.map(loadBundle));
}

var bundleLoaders = {};

function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;
var bundles = {};

function loadBundle(bundle) {
  var id;

  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];

  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.register(id, resolved);
      }

      return resolved;
    }).catch(function (e) {
      delete bundles[bundle];
      throw e;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/parcel-bundler/src/builtins/loaders/browser/html-loader.js":[function(require,module,exports) {
module.exports = function loadHTMLBundle(bundle) {
  return fetch(bundle).then(function (res) {
    return res.text();
  });
};
},{}],0:[function(require,module,exports) {
var b=require("../node_modules/parcel-bundler/src/builtins/bundle-loader.js");b.register("html",require("../node_modules/parcel-bundler/src/builtins/loaders/browser/html-loader.js"));b.load([["cookie-policy.html","cookie-policy.html"]]).then(function(){require("scripts/index.js");});
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js",0], null)
//# sourceMappingURL=/scripts.bcf3243b.js.map