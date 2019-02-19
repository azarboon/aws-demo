module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'never'], // TODO: Up to debate
    'max-len': 'off', // Agreed within the project
  },
}
