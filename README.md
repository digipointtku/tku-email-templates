# tku-email-templates
HTML email templates for Varaamo
## Usage
### Installation
Download or clone this repository and run 
```
npm install
```
### Build commands
To build all templates(Finnish, Swedish and English).
```
npm run-script build
```

To build the Finnish templates.
```
npm run-script build:finnish
```

To build the Swedish templates.
```
npm run-script build:swedish
```

To build the English templates.
```
npm run-script build:english
```

The minified/inlined pages are compiled to their own language specific folders under `build/`.
