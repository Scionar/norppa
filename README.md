# Norppa DS

## Development

Repository uses [Rush monorepo manager](https://rushjs.io/). Please install the tool globally.

Development is done in documentation package. Component package needs to be linnked to documentation inside monorepo.

Link component to documentation package. Use package name from package.json.

```bash
(cd packages/document && rush add <package name>)
```

Run develop environment.

```bash
rush build:watch
rush document
```




