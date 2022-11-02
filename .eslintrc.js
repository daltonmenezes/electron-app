module.exports = {
	env: {
		browser: true,
		es2021: true,
		es6: true, // enables es6 features
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'prettier',
		'plugin:@next/next/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
		JSX: 'readonly',
		React: 'readonly',
		shallow: true,
		render: true,
		mount: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
	],
	ignorePatterns: ["**/redux/**"],
	rules: {
		'@typescript-eslint/array-type': [
			'error',
			{
				default: 'generic',
			},
		],
		'@typescript-eslint/consistent-type-assertions': [
			'error',
			{
				assertionStyle: 'as',
			},
		],
		'@typescript-eslint/no-shadow': [
			'error',
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
		],
		'@typescript-eslint/no-use-before-define': [
			'error',
		],
		'react/jsx-wrap-multilines': 'off',
		'no-return-assign': 0,
		'no-param-reassign': 0,
		'no-use-before-define': 'off',
		'react/jsx-uses-react': 1,
		'react/jsx-uses-vars': 1,
		'no-unused-vars': 'off',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: [
					'.ts',
					'.tsx',
				],
			},
		],
		'react/jsx-indent': [
			2,
			'tab',
		],
		'react/jsx-indent-props': [
			2,
			'tab',
		],
		'react/no-array-index-key': 1,
		'no-shadow': 'off',
		'no-else-return': 'error',
		'import/prefer-default-export': 'off',
		'arrow-parens': 'off',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					[
						'internal',
						'unknown',
					],
					[
						'parent',
						'sibling',
					],
					'index',
				],
				'newlines-between': 'always',
				alphabetize: {
					order: 'asc',
				},
			},
		],
		'import/extensions': 'off',
		indent: [
			'error',
			'tab',
			{ 'SwitchCase': 1 },
		],
		'@typescript-eslint/indent': [
			'error',
			'tab',
			{
				ignoredNodes: [
					'JSXElement *',
					'JSXElement',
				],
				'SwitchCase': 1
			},
		],
		'no-tabs': 'off',
		'max-len': [
			'error',
			{
				code: 150,
			},
		],
		'react/prop-types': 'off',
		'no-console': [
			'error',
			{
				allow: [
					'error',
				],
			},
		],
		'no-underscore-dangle': 'off',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'off',
		"react/no-unescaped-entities": [
			"error",
			{
				"forbid": [
					{
						char: ">",
						alternatives: ['&gt;']
					},
					{
						char: "}",
						alternatives: ['&#125;']
					}
				]
			}
		],
		"react/function-component-definition": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/interactive-supports-focus": "off",
		"no-nested-ternary": "off",
		"no-plusplus": "off",
		"react/destructuring-assignment": "off",
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: [
					'.js',
					'.jsx',
					'.ts',
					'.tsx',
				],
				paths: [
					'.',
				],
			},
			typescript: {},
		},
	},
};
