# Norppa

Web component library.

## Development

Repository uses [Rush monorepo manager](https://rushjs.io/). Please install the tool globally.

### Add new package

Create component package:

```bash
rush create:component
```

Add new package to `./rush.json` configuration file on root. 

Update rush configuration with:

```bash
rush update
```

Development is done in documentation package. Link component to documentation package. Use package name from package.json.

```bash
(cd packages/document && rush add -p <package name>)
```


### Run develop environment

```bash
rush build:watch
rush document
```

... and open browser.

```
http://localhost:8080/
```




