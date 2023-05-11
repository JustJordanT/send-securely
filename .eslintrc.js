module.exports = {
    root: true,
    extends: ['@basis-theory/eslint-config/next'],
    ignorePatterns: ['load-tests/*.js'],
    rules: {
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off"
    }
};