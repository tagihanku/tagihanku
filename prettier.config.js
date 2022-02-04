module.exports = {
    printWidth: 120,
    tabWidth: 4,
    overrides: [
        {
            files: '*.js',
            options: {
                semi: false,
                singleQuote: true,
            },
        },
        {
            files: '*.scss',
            options: {
                semi: true,
                singleQuote: false,
            },
        },
    ],
}
