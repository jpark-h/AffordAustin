.DEFAULT_GOAL := all
MAKEFLAGS += --no-builtin-rules
SHELL         := bash

build-init:
	npm i
	npm run build
	serve -s build

frontend-init:
	npm i
	npm start

integrate:
	pip install pipenv
	pipenv run python ./backend/database_integrations/integration.py