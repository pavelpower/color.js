
build:
	jossy ./lib/color.js > color.js
	borschik -t js -i color.js -o color.min.js

test: build
	cp ./color.js ./tests/color.js
	coffee ./tests/color-test.coffee


.PHONY: build
