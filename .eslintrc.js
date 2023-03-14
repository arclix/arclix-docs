module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:@typescript-eslint/recommended"],
    plugins: ["@typescript-eslint"],
    parserOptions: {
        ecmaFeatures: {
            tsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        "no-debugger": ["error"],
        "no-empty": ["warn", { allowEmptyCatch: true }],
        "no-process-exit": "off",
        "no-useless-escape": "off",
        "prefer-const": [
            "warn",
            {
                destructuring: "all",
            },
        ],
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-extra-semi": "off", // conflicts with prettier
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-var-requires": "off",
    },
};
