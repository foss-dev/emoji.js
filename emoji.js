"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _emoji_list = require("./emoji_list");

var _emoji_list2 = _interopRequireDefault(_emoji_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Emoji = function () {
	function Emoji(opt) {
		_classCallCheck(this, Emoji);

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

	_createClass(Emoji, [{
		key: "useShortCode",
		value: function useShortCode() {
			var _this = this;

			if (this.shortcode) {
				var el = document.querySelectorAll("body *");

				el.forEach(function (v, k) {

					if (!v.dataset.emoji) {
						var data = v.innerText.match(/:(.*):/m);
						if (data) {
							var formatted = v.innerText.replace(new RegExp("\\:(.*):", "gm"), _emoji_list2.default[data[1]]);
							v.style.fontStyle = "normal";
							v.style.fontSize = _this.shortcodeSize;
							v.innerHTML = formatted;
						}
					}
				});
			}
		}
	}, {
		key: "init",
		value: function init() {
			var e = document.querySelectorAll("[data-emoji]");
			e.forEach(function (v, k) {
				v.style.fontStyle = "normal";
				v.innerHTML = _emoji_list2.default[v.dataset.emoji];
				if (v.dataset.emojiSize) {
					if (v.dataset.emojiSize.replace("px", "") > 0) {
						v.style.fontSize = v.dataset.emojiSize.replace("px", "") + "px";
					}
				}
			});
		}
	}, {
		key: "runShortCode",
		value: function runShortCode() {
			if (this.shortcode) {
				this.useShortCode();
			}
		}
	}]);

	return Emoji;
}();

exports.default = Emoji;
