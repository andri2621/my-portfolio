module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-max-length': [1, 'always', 600],
    //   TODO Add Scope Enum Here
    // 'scope-enum': [2, 'always', ['yourscope', 'yourscope']],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'chore',
        'style',
        'refactor',
        'ci',
        'test',
        'perf',
        'revert',
        'vercel',
        'wip',
      ],
    ],
  },
};
