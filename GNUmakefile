
build:
	jossy ./lib/color.js > color.js
	borschik -t js -i color.js -o color.min.js

test: build
	cp ./gradient.js ./tests/gradient.js
	coffee ./tests/gradient-test.coffee


.PHONY: build
