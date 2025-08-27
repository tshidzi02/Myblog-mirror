# --------------------------------------------------
# Makefile — Vite + React (Windows-friendly)
# --------------------------------------------------

# Let me switch package managers easily: make NPM=pnpm dev
NPM ?= npm

# Show help when you run `make` with no arguments
.DEFAULT_GOAL := help

# These are "phony" targets (not real files)
.PHONY: help install dev build preview lint format clean

help:
	@echo Available targets:
	@echo   make install   - install deps with npm ci (uses package-lock.json exactly)
	@echo   make dev       - start Vite dev server (http://localhost:5173)
	@echo   make build     - build production bundle to ./dist
	@echo   make preview   - serve ./dist locally to verify the build
	@echo   make lint      - run ESLint on src
	@echo   make format    - format code with Prettier
	@echo   make clean     - remove node_modules and dist

install:
	$(NPM) ci

dev:
	$(NPM) run dev

build:
	$(NPM) run build

preview:
	$(NPM) run preview

lint:
	$(NPM) run lint

format:
	$(NPM) run format

clean:
	@if exist node_modules rmdir /S /Q node_modules
	@if exist dist rmdir /S /Q dist
