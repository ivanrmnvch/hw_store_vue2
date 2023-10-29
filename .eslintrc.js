module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  plugins: ['vue', 'prettier', 'frabbit-vue'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'frabbit-vue/vue-no-unused-methods': 'error',
    'frabbit-vue/vue-no-unused-properties': 'error',
    'frabbit-vue/vue-no-unused-vuex-methods': 'error',
    'frabbit-vue/vue-no-unused-vuex-properties': 'error',
    'frabbit-vue/vue-static-class-order-ext': 'error',
    'no-console': 'warn',
    'no-bitwise': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'store', // for vuex store
          'state', // for vuex state
        ],
      },
    ],
  },
};
