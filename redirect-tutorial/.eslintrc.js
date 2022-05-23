{
    "extends": [
        "react-app",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "prettier"
    ],
    "rules": {
    "react/react-in-jsx-scope": 0,
        "prettier/prettier": [ "warn", { "endOfLine": "auto", "useTabs": false} ],
        "arrow-body-style": ["error", "as-needed"],
        "eqeqeq": ["error", "smart"]
},
    "globals": {
    "React": "writable"
}
}