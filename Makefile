all:
	./node_modules/.bin/babel \
	--presets es2015 src/emoji.js \
	-o emoji.js

	./node_modules/.bin/uglifyjs \
	-o emoji.min.js \
	emoji.js

min:
	./node_modules/.bin/uglifyjs \
	-o emoji.min.js \
	src/emoji.js
