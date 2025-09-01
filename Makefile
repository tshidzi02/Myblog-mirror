# Makefile: install & run site in ./Code
SHELL := /bin/sh
NPM := cd MYPROJECT1 && npm

.PHONY: help install dev build preview clean
help: ; @echo "install|dev|build|preview|clean"
install: ; $(NPM) install
dev: ; $(NPM) run dev
build: ; $(NPM) run build
preview: ; $(NPM) run preview
clean:
	@rm -rf MYPROJECT1/dist

supervisor:
	node scripts/clean-on-save.mjs
