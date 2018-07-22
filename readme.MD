# emoji.js

Unicode Emoji Wrapper with JavaScript

# Use as an HTML Element

There are two attributes to create emoji. The first attribute is related to emoji name. This attribute must be filled.

Second attribute is optional. An emoji size default by 15 px. You don't have to init this attribute.

```html
<i data-emoji="grinning" data-emoji-size="48"></i>
```

# Use as an Shortcode

For example, you have a rich text editor. You can use all emojis with their shortcode. This required an event like click.

```html
<span>This is an example. :grin:</span>
```

# JavaScript API

There are two example to understand `emoji.js`

## Default Initialize emoji.js

The default usage like below.

```javascript
import Emoji from "./emoji"

const emoji = new Emoji()

emoji.init()
```

## Shortcode Example

If you want to use with shortcodes you need to use like below. There are two optional arguments.

**shortcode** argument by default true and **shortcodeSize** argument by default 16px

```javascript
import Emoji from "./emoji"

const emoji = new Emoji({
    shortcode: true,
    shortcodeSize: 16
})


const btn = document.querySelector("#myEmoji")

btn.addEventListener("click", () => {
    // let's assume you clicked to `:grin:` to add your favorite editor.
    emoji.useShortCode()
})

```

## Resource

All emojis coming from [emojipedia](https://emojipedia.org/).

## Contribute

Please contribute to diversity.

## Help Categories

Currently, I need to complete [people](https://emojipedia.org/people/).

In order to help to this repository, you need to check the files under the `/src/types` folder. Please, respect the format.