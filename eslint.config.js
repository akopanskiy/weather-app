import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import globals from "globals";
import vueParser from "vue-eslint-parser";
import babelParser from "@babel/eslint-parser";

export default [
	js.configs.recommended,

	{
		files: ["**/*.vue", "**/*.js"],

		languageOptions: {
			parser: vueParser,
			parserOptions: {
				parser: babelParser,
				ecmaVersion: "latest",
				sourceType: "module",
				requireConfigFile: false
			},
			globals: globals.browser
		},

		plugins: {
			vue
		},

		rules: {
			indent: ["error", "tab"],
			quotes: ["error", "double"],
			"object-curly-spacing": ["error", "always"],
			"no-trailing-spaces": "error",
			"keyword-spacing": ["warn", { after: true }],
			semi: ["error", "always"],
			curly: "error",
			"no-cond-assign": "warn",
			"no-nested-ternary": "warn",
			"no-debugger": "warn",
			"no-fallthrough": "off",
			"prefer-const": ["warn", { ignoreReadBeforeAssign: true }],
			"no-var": "error",
			"no-shadow-restricted-names": "error",
			"no-undef": "error",
			"no-unused-vars": "off",
			"no-console": "off",
			"no-irregular-whitespace": "warn",
			"comma-dangle": "off",
			"func-call-spacing": "off",
			"no-unneeded-ternary": "warn",
			"object-property-newline": [
				"warn",
				{ allowMultiplePropertiesPerLine: true }
			],
			"one-var-declaration-per-line": ["error", "initializations"],
			"constructor-super": "warn",
			"no-dupe-class-members": "error",
			"no-duplicate-imports": "error",
			"no-useless-constructor": "warn",
			"object-shorthand": ["warn", "properties"],
			"prefer-destructuring": "warn",
			"no-tabs": 0,
			"no-empty": 0,
			"no-multiple-empty-lines": ["warn", { max: 2 }],

			/* Vue overrides */
			"vue/html-indent": "off",
			"vue/max-attributes-per-line": "off",
			"vue/singleline-html-element-content-newline": "off",
			"vue/multiline-html-element-content-newline": "off"
		}
	}
];
