# MediaBrowser

[![CI](https://github.com/EmmanuelTsouris/media-browser/actions/workflows/main.yml/badge.svg)](https://github.com/EmmanuelTsouris/media-browser/actions/workflows/main.yml)

[![CodeQL](https://github.com/EmmanuelTsouris/media-browser/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/EmmanuelTsouris/media-browser/actions/workflows/codeql-analysis.yml)

Live Demo https://emmanueltsouris.github.io/media-browser/

Media Browser is an updated version of [ng2-MediaBrowser](https://github.com/EmmanuelTsouris/ng2-MediaBrowser), an Angular 2 application I created to take a simple json list of media files and display them in a grid. When you select a thumbnail, a detail page is shown which lets you watch the video and read the description.

I wrote the original to learn the Angular Cli, and figured it was time to update the app to a newer version of Angular.

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5, upgraded to v8, and then  to v9 using `https://update.angular.io/`.

Thumbnails and Video content are stored in a seperate repo to keep this repo clean: https://github.com/EmmanuelTsouris/media-browser-content

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Deploy

Deployment is handled by [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages).

Run `ng deploy --base-href=/media-browser/` and the project will be deployed to https://<username>.github.io/media-browser

## Continous Deployment to GitHub Pages

When a commit occurs to the GitHub repo, a GitHub action deploys the changes to ghpages.

https://dev.to/jasonf/deploy-angular-to-github-pages-by-setting-up-a-workflow-in-github-171b

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
