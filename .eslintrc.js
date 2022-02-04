module.exports = {
    env: {
        browser: true,
    },
    extends: ['xo', 'prettier', 'plugin:react/recommended'],
    rules: {
        'prettier/prettier': 'error',
    },
    plugins: ['prettier'],
}
