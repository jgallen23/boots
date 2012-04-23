
build:
	@git checkout master docs/boots.md
	#./node_modules/.bin/markx-project boots.md
	@~/code/markx-project/bin/markx-project.js --user jgallen23 --repo boots docs/boots.md

install:
	@npm install markx-project

preview: build
	@python -m SimpleHTTPServer 8001


.PHONY: build install
