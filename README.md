# tku-email-templates
HTML email templates for Varaamo & Monitori
## Usage
### Installation
Download or clone this repository and run 
```
npm install
```
### Build commands
To build Varaamo & Monitori templates(Finnish, Swedish and English).
```
npm run-script build
```

To build Varaamo/Monitori templates(Finnish, Swedish and English).
```
npm run-script build:varaamo:all
npm run-script build:monitori:all
```

To build the Finnish templates.
```
npm run-script build:varaamo:finnish
npm run-script build:monitori:finnish
```

To build the Swedish templates.
```
npm run-script build:varaamo:swedish
npm run-script build:monitori:swedish
```

To build the English templates.
```
npm run-script build:varaamo:english
npm run-script build:monitori:english
```

The minified/inlined pages are compiled to their own language specific folders under `build/(varaamo|monitori)/`.
