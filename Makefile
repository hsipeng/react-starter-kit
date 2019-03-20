YARN ?= yarn

install:
	@$(YARN) install
.PHONY: install

run:
	@$(YARN) cross-env NODE_ENV=development webpack-serve --open
.PHONY: run

# if we have lint already
lint:
	@$(YARN) eslint --config .eslintrc.js src
.PHONY: lint

build:
#	@rm -fr dist
	@$(YARN) cross-env NODE_ENV=production webpack
.PHONY: build


test:
#	@rm -fr dist
	@$(YARN)cross-env NODE_ENV=test jest --env=jsdom --notify --watchman=false
.PHONY: test

test-coverage:
#	@rm -fr dist
	@$(YARN) cross-env NODE_ENV=test jest --env=jsdom --notify --watchman=false -u --coverage
.PHONY: test-coverage
