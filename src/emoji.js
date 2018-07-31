import emojis from "./emoji_list"

class Emoji {

	constructor(opt) {

		this.shortcode = false
		this.shortcodeSize = "16px"

		if (opt) {
			if (opt.shortcode) {
				this.shortcode = opt.shortcode
			}

			if (opt.shortcodeSize) {
				this.shortcodeSize = opt
					.shortcodeSize
					.toString()
					.replace("px", "") > 0 ? opt.shortcodeSize.toString().replace("px", "") + "px" : "16px"
			}
		}
	}

	useShortCode() {
		if (this.shortcode) {
			const el = document.querySelectorAll("body *")

			el.forEach((v, k) => {

				if (!v.dataset.emoji) {
					let data = v.innerText.match(/:(.*):/m)
					if (data) {
						const formatted = v.innerText.replace(new RegExp("\\:(.*):", "gm"), emojis[data[1]])
						v.style.fontStyle = "normal"
						v.style.fontSize = this.shortcodeSize
						v.innerHTML = formatted
					}

				}
			})
		}
	}

	init() {
		const e = document.querySelectorAll("[data-emoji]")
		e.forEach((v, k) => {
			v.style.fontStyle = "normal"
			v.innerHTML = emojis[v.dataset.emoji]
			if (v.dataset.emojiSize) {
				if (v.dataset.emojiSize.replace("px", "") > 0) {
					v.style.fontSize = v
						.dataset
						.emojiSize
						.replace("px", "") + "px"
				}
			}
		})
	}

	runShortCode() {
		if (this.shortcode) {
			this.useShortCode()
		}
	}
}

export default Emoji