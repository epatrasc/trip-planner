module.exports = {
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  extends: 'airbnb-base',
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
