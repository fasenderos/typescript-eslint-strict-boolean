/* eslint-env node */
module.exports = {
    root: true,
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: './'
    },
    rules: {
        '@typescript-eslint/strict-boolean-expressions': ['error', {
            allowNullableObject: false,
        }]
    },
};