# MediaBrowser

[![CI](https://github.com/EmmanuelTsouris/media-browser/actions/workflows/main.yml/badge.svg)](https://github.com/EmmanuelTsouris/media-browser/actions/workflows/main.yml)

Live Demo https://emmanueltsouris.github.io/media-browser/

Media Browser is an updated version of [ng2-MediaBrowser](https://github.com/EmmanuelTsouris/ng2-MediaBrowser), an Angular 2 application I created to take a simple json list of media files and display them in a grid. When you select a thumbnail, a detail page is shown which lets you watch the video and read the description.

I wrote the original to learn the Angular Cli, and figured it was time to update the app to a newer version of Angular.

This project was originally generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5 and has been upgraded to each major version (8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21) by using `https://update.angular.io/` as a guide.

**Current Version:** Angular v21 with the new application builder.

## Features

- **Angular Material Design** - Modern UI components including toolbars, cards, icons, and buttons
- **Video Gallery** - Grid layout with thumbnails and interactive hover effects
- **Play Icon Overlays** - Visual feedback with animated play icons on thumbnail hover
- **Video Playback** - Full-featured video player with poster images and controls
- **Responsive Navigation** - Icon-based toolbar with tooltips for better UX

Thumbnails and Video content are stored in a separate repo to keep this repo clean: https://github.com/EmmanuelTsouris/media-browser-content

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/media-browser/browser/` directory.

For a production build, use:
```bash
ng build --configuration production
```

**Note:** Angular v21 uses the new application builder which outputs files to `dist/media-browser/browser/` instead of directly to `dist/media-browser/`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

To run tests once without watch mode:
```bash
ng test --watch=false
```

## Deploy

Deployment is handled by [angular-cli-ghpages](https://github.com/angular-schule/angular-cli-ghpages) (v3.0.2+).

Run `ng deploy --base-href=/media-browser/` and the project will be deployed to https://<username>.github.io/media-browser

## Continuous Deployment to GitHub Pages

When a commit is pushed to the `main` branch, a GitHub Actions workflow automatically deploys the changes to the `gh-pages` branch.

https://dev.to/jasonf/deploy-angular-to-github-pages-by-setting-up-a-workflow-in-github-171b

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
