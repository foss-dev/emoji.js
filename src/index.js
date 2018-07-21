import Emoji from "./emoji"
import emojis from "./emoji_list"

const emoji = new Emoji()

const app = document.querySelector("#app")
app.innerHTML = ""

Object.keys(emojis).map(m => {
    const i = document.createElement("i")
    i.dataset.emoji = m
    i.dataset.emojiSize = "36px"
    i.style.marginRight = "5px"

    app.appendChild(i)
})

emoji.init()

emoji.runShortCode()