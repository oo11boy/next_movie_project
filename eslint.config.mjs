import next from "eslint-config-next";

export default [
  next,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "import/no-unresolved": "off",
      "import/order": [
        "error",
        {
          "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always"
        }
      ]
    },
    settings: {
      react: {
        version: "detect"
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    }
  }
];