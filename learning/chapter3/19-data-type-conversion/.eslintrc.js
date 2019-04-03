module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"rules": {
		/* 마지막 쉼표에 관한 규칙을 수정했습니다.
			하지만 이 파일을 JSON 파일이므로, 마지막 쉼표를 허용하는
			이 파일에는 마지막 쉼표를 쓸 수 없습니다. */
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"indent": [
			"error",
			"tab"
		],
		"no-console": "off",
		"no-restricted-syntax": [
			"error",
			{
				"selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
				"message": "Unexpected property on console object was called"
			}
		]
	}
};
