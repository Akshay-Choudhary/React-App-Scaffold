module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "arrow-body-style": ["error", "always"],
        "max-len": [1, 132, 2],
        "react/prefer-stateless-function": 0,
        "react/destructuring-assignment": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "react/jsx-filename-extension": 0,
        "strict": 0,
    }
};