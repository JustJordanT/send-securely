module.exports = {
    root: true,
    extends: ['@basis-theory/eslint-config/next'],
    ignorePatterns: ['load-tests/*.js'],
    rules: {
        "react/no-unescaped-entities": "off",
        "import/no-anonymous-default-export": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@next/next/no-page-custom-font": "off"
    }
};