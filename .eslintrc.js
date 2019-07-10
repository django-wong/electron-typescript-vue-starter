module.exports = {
    extends: [
        'plugin:vue/recommended'
    ],
    rules: {
        "vue/html-indent": ["warn", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }]
    }
}
