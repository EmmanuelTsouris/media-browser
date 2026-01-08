# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Media Browser is an Angular v21 application that displays media files (videos) in a grid layout and allows users to watch them on a detail page. The media content (thumbnails and videos) is stored in a separate repository: https://github.com/EmmanuelTsouris/media-browser-content

**Live Demo:** https://emmanueltsouris.github.io/media-browser/

This project has been continuously upgraded through all major Angular versions (7 → 21) using https://update.angular.io/ as a guide.

## Commands

### Development
```bash
npm start              # Start dev server at http://localhost:4200
ng serve               # Alternative to npm start
```

### Building
```bash
npm run build          # Development build (default)
ng build               # Same as npm run build
ng build --configuration production  # Production build
```

**IMPORTANT:** Angular v21 uses the new **application builder** which outputs to `dist/media-browser/browser/` (not `dist/media-browser/`). This affects deployment workflows.

### Testing
```bash
npm test               # Run all tests in watch mode
ng test                # Same as npm test
npm test -- --watch=false  # Run tests once without watch
ng test --include='**/about.component.spec.ts'  # Run specific test file
```

All tests use Jasmine + Karma. Test files use `waitForAsync` (not deprecated `async`) and `TestBed.inject()` (not deprecated `TestBed.get()`).

### Deployment
```bash
ng deploy --base-href=/media-browser/  # Manual deploy to GitHub Pages
```

**Automatic Deployment:** GitHub Actions automatically deploys to `gh-pages` branch on every push to `main`. See `.github/workflows/main.yml`.

### Code Generation
```bash
ng generate component component-name
ng generate service service-name
ng generate directive|pipe|guard|interface|enum|module
```

## Architecture

### Module Structure
This is an **NgModule-based** application (not standalone components). All components have `standalone: false` in their decorators.

- **AppModule** (`app.module.ts`): Root module that imports Angular Material modules
- **AppRoutingModule** (`app-routing.module.ts`): Routing configuration

### Routing Architecture
```
/              → GridComponent (media grid)
/grid          → GridComponent
/about         → AboutComponent
/watch/:id     → WatchComponent (video player)
/watch         → Redirects to /grid
/**            → PageNotFoundComponent (404)
```

### Component Hierarchy
```
AppComponent (root with mat-toolbar)
├── GridComponent - Displays media thumbnails in mat-grid-list
├── WatchComponent - Video player with mat-card
├── AboutComponent
└── PageNotFoundComponent
```

### Data Flow
1. **MediaService** (`src/app/media/media.service.ts`) provides data via Observables
2. Data comes from **MediaList** mock array (`src/app/media/mock-medialist.ts`)
3. Components use `async` pipe to subscribe to Observables in templates
4. Route parameters flow through `ActivatedRoute` → component → service

**Key Pattern:**
```typescript
// Components get data via Observable streams
this.media$ = this.route.paramMap.pipe(
  switchMap((params: ParamMap) =>
    this.service.getMedia(params.get('id') ?? ''))
);
```

Templates handle null safety with `*ngIf`:
```html
<mat-card *ngIf="media$ | async as media">
  <!-- Safe to use media here -->
</mat-card>
```

### Angular Material Usage
The app uses Angular Material v21 with the **indigo-pink** theme:
- `MatToolbarModule` - Top navigation
- `MatGridListModule` - Media grid layout
- `MatCardModule` - Media cards and video player
- `MatSidenavModule` - Side navigation (if used)

When adding new Material components to tests, import the required modules in `TestBed.configureTestingModule()`.

## TypeScript Configuration

The project uses **strict TypeScript mode**:
- `strict: true`
- `noImplicitReturns: true`
- `noFallthroughCasesInSwitch: true`
- `moduleResolution: "bundler"` (Angular v21 requirement)

### Definite Assignment Assertions
Observable properties use the `!` operator for initialization:
```typescript
mediaFiles$!: Observable<Media[]>;  // Initialized in ngOnInit()
```

This is the standard pattern for properties initialized in lifecycle hooks.

## Testing Patterns

### Angular v21 Breaking Changes
When writing tests, use current APIs:
- ✅ `waitForAsync()` instead of deprecated `async()`
- ✅ `TestBed.inject()` instead of deprecated `TestBed.get()`

### Required Test Imports
Components using routing need `RouterTestingModule`:
```typescript
imports: [ RouterTestingModule ]
```

Components using Material need the specific Material modules:
```typescript
imports: [
  RouterTestingModule,
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatButtonModule
]
```

## Build Output Structure

**Development builds** (`npm run build`):
- Output: `dist/media-browser/browser/`
- Includes source maps
- No optimization

**Production builds** (`ng build --configuration production`):
- Output: `dist/media-browser/browser/`
- Optimized and minified
- Output hashing enabled
- Bundle size budgets: 2MB warning, 5MB error

## Deployment Notes

### GitHub Pages Deployment
The GitHub Actions workflow deploys to `gh-pages` branch using `angular-cli-ghpages@3.0.2`.

**Critical:** The workflow must point to `dist/media-browser/browser/` (not `dist/media-browser/`) due to Angular v21's application builder output structure.

If deployment fails with "cannot stat 'dist/media-browser/index.html'", check that `angular_dist_build_folder` in `.github/workflows/main.yml` points to the correct directory.

## Common Gotchas

1. **Build Output Path:** Angular v21's application builder outputs to `dist/media-browser/browser/`, not `dist/media-browser/`

2. **Null Coalescing in Routes:** When getting route params, always provide a fallback:
   ```typescript
   params.get('id') ?? ''  // Not params.get('id')
   ```

3. **Observable Types:** Components return `Observable<Media | undefined>` when a media item might not be found. Templates handle this with `*ngIf`.

4. **Module Imports:** This is NOT a standalone components app. All components must be declared in `AppModule` and have `standalone: false`.

5. **Material Theme:** The app uses the prebuilt `indigo-pink` theme. Custom theming should extend this.

## Development Workflow

1. Make changes to source files
2. Dev server auto-reloads (if running `npm start`)
3. Run tests: `npm test`
4. Build for production: `ng build --configuration production`
5. Commit changes (tests run in CI)
6. Push to `main` → Automatic deployment to GitHub Pages

## Node.js Version
The project requires:
- Node.js v20.19.0+ or v22.12.0+ or v24.0.0+
- Avoid odd-numbered Node versions (not LTS)
