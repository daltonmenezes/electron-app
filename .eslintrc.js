module.exports = {
	env: {
		browser: true,
		es2021: true,
		es6: true, // enables es6 features
		jest: true,
	},
	extends: ['prettier', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'@typescript-eslint/no-empty-interface': 0,
		'prettier/prettier': [
			'error',
			{
				semi: false,
				singleQuote: true,
				tabWidth: 2,
				useTabs: true,
				trailingComma: 'es5',
			},
		],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': 'off',
		'max-len': [
			'error',
			{
				code: 150,
			},
		],
		'no-console': [
			'error',
			{
				allow: ['error'],
			},
		],
		'no-underscore-dangle': 'off',
	},
}
