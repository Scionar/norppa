module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('controller', {
    description: 'application controller logic',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{ camelCase name }}/src/{{ camelCase name }}.ts',
        templateFile: 'plop-templates/component/src/component.ts.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{ camelCase name }}/src/index.ts',
        templateFile: 'plop-templates/component/src/index.ts.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{ camelCase name }}/.gitignore',
        templateFile: 'plop-templates/component/.gitignore.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{ camelCase name }}/package.json',
        templateFile: 'plop-templates/component/package.json.hbs'
      },
      {
        type: 'add',
        path: 'packages/{{ camelCase name }}/tsconfig.json',
        templateFile: 'plop-templates/component/tsconfig.json.hbs'
      }
    ]
  });
};
