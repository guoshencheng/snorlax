
module.exports = {
  extends: ["eslint:recommended", "plugin:node/recommended"],
  rules: {
    'space-infix-ops': ["error", {"int32Hint": false}],
    'no-var': 1,
    'prefer-const': 1,
  }
}
