# Makefile: install & run site in ./Code
SHELL := /bin/sh
NPM := cd Code && npm

.PHONY: help install dev build preview clean
help: ; @echo "install|dev|build|preview|clean"
install: ; $(NPM) install
dev: ; $(NPM) run dev
build: ; $(NPM) run build
preview: ; $(NPM) run preview
clean:
	@rm -rf Code/dist

supervisor:
	node scripts/clean-on-save.mjs
