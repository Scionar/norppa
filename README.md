# Norppa DS

## Development

Repository uses [Rush monorepo manager](https://rushjs.io/). Please install the tool globally.

### Add new package

Development is done in documentation package. Component package needs to be linked to documentation inside monorepo.

Add new package to `./rush.json` configuration file on root. 

Update rush configuration with:

```bash
rush update
```

Link component to documentation package. Use package name from package.json.

```bash
(cd packages/document && rush add <package name>)
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




