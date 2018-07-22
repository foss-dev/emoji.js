// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const people = {
  "grinning": "&#x1f600;",
  "grin": "&#x1f601;",
  "joy": "&#x1f602;",
  "rofl": "&#x1f923;",
  "smiley": "&#x1f603;",
  "smile": "&#x1f604;",
  "sweat-smile": "&#x1f604;",
  "laughing": "&#x1f606;",
  "wink": "&#x1f609;",
  "blush": "&#x1f60A;",
  "yum": "&#x1f60B;",
  "sunglasses": "&#x1f60E;",
  "heart-eyes": "&#x1f60D;",
  "kissing-heart": "&#x1f618;",
  "kissing": "&#x1f617;",
  "kissing-smiling-eyes": "&#x1f619;",
  "kissing-closed-eyes": "&#x1f61A;",
  "relaxed": "&#x263A;",
  "slightly-smiling-face": "&#x1f642;",
  "hugging-face": "&#x1f917;",
  "star-eyes": "&#x1f929;",
  "thinking-face": "&#x1f914;",
  "raised-eyebrow": "&#x1f928;",
  "neutral-face": "&#x1f610;",
  "expressionless": "&#x1f611;",
  "no-mouth": "&#x1f636;",
  "eye-roll": "&#x1f644;",
  "smirk": "&#x1f60f;",
  "persevere": "&#x1f623;",
  "disappointed-relieved": "&#x1f625;",
  "open-mouth": "&#x1f62e;",
  "zipper-mouth-face": "&#x1f910;",
  "hushed": "&#x1f62f;",
  "sleepy": "&#x1f62a;",
  "tired-face": "&#x1f62b;",
  "sleeping": "&#x1f634;",
  "relieved": "&#x1f60c;",
  "stuck-out-tongue": "&#x1f61b;",
  "sout-tongue-winking-eye": "&#x1f61c;",
  "sout-tongue-closed-eyes": "&#x1f61d;",
  "drooling-face": "&#x1f924;",
  "unamused": "&#x1f612;",
  "sweat": "&#x1f613;",
  "pensive": "&#x1f614;",
  "confused": "&#x1f615;",
  "upside-down-face": "&#x1f643;",
  "money-mouth-face": "&#x1f911;",
  "astonished": "&#x1f632;",
  "frowning-face": "&#x2639;",
  "slightly-frowning-face": "&#x1f641;",
  "confounded": "&#x1f616;",
  "disappointed": "&#x1f61e;",
  "worried": "&#x1f61f;",
  "triumph": "&#x1f624;",
  "cry": "&#x1f622;",
  "sob": "&#x1f62d;"

  // TODO: from Downcast Face With Sweat to end
  // source: https://emojipedia.org/people/

};exports.default = people;
},{}],7:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const nature = {};

exports.default = nature;
},{}],5:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _people = require("./people");

var _people2 = _interopRequireDefault(_people);

var _nature = require("./nature");

var _nature2 = _interopRequireDefault(_nature);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let obj = {};

Object.assign(obj, _people2.default, _nature2.default);

exports.default = obj;
},{"./people":6,"./nature":7}],4:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require("./types");

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// resource https://emojipedia.org/people/
// resource 2 https://gist.github.com/tuchk4/78d0fb2453e6f250d4f8

const emojis = _types2.default;

exports.default = emojis;
},{"./types":5}],3:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emoji_list = require("./emoji_list");

var _emoji_list2 = _interopRequireDefault(_emoji_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Emoji {

  constructor(opt) {

    this.shortcode = false;
    this.shortcodeSize = "16px";

    if (opt) {
      if (opt.shortcode) {
        this.shortcode = opt.shortcode;
      }

      if (opt.shortcodeSize) {
        this.shortcodeSize = opt.shortcodeSize.toString().replace("px", "") > 0 ? opt.shortcodeSize.toString().replace("px", "") + "px" : "16px";
      }
    }
  }

  useShortCode() {
    if (this.shortcode) {
      const el = document.querySelectorAll("body *");

      el.forEach((v, k) => {

        if (!v.dataset.emoji) {
          let data = v.innerText.match(/:(.*):/m);
          if (data) {
            const formatted = v.innerText.replace(new RegExp("\\:(.*):", "gm"), _emoji_list2.default[data[1]]);
            v.style.fontStyle = "normal";
            v.style.fontSize = this.shortcodeSize;
            v.innerHTML = formatted;
          }
        }
      });
    }
  }

  init() {
    const e = document.querySelectorAll("[data-emoji]");
    e.forEach((v, k) => {
      v.style.fontStyle = "normal";
      v.innerHTML = _emoji_list2.default[v.dataset.emoji];
      if (v.dataset.emojiSize) {
        if (v.dataset.emojiSize.replace("px", "") > 0) {
          v.style.fontSize = v.dataset.emojiSize.replace("px", "") + "px";
        }
      }
    });
  }

  runShortCode() {
    if (this.shortcode) {
      this.useShortCode();
    }
  }
}

exports.default = Emoji;
},{"./emoji_list":4}],2:[function(require,module,exports) {
"use strict";

var _emoji = require("./emoji");

var _emoji2 = _interopRequireDefault(_emoji);

var _emoji_list = require("./emoji_list");

var _emoji_list2 = _interopRequireDefault(_emoji_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const emoji = new _emoji2.default();

const app = document.querySelector("#app");
app.innerHTML = "";

Object.keys(_emoji_list2.default).map(m => {
  const i = document.createElement("i");
  i.dataset.emoji = m;
  i.dataset.emojiSize = "36px";
  i.style.marginRight = "5px";

  app.appendChild(i);
});

emoji.init();

emoji.runShortCode();
},{"./emoji":3,"./emoji_list":4}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':36341/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
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
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,2])