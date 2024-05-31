module.exports = {
    root: true,
    env: {
        node: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    ignorePatterns: ['dist'],
    parser: '@typescript-eslint/parser',
    plugins: [],
    rules: {
        // Regler här om det behövas (?)
    }
}
