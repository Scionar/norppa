# Norppa DS

## Install

```bash
yarn
```

## Development

Development is done in documentation package. Component package needs to be linnked to documentation inside monorepo.

Link component to documentation package. Use package name from package.json.

```bash
npx lerna add <package name> --scope="norppa-document"
```

Run develop environment.

```bash
(cd packages/document && yarn start)
```




