// 给整个文档加上最外层是因为：main.js依赖的validator.js使用jQuery
// validator.js 要在整个文档加载完毕之后才运行 == documen.ready
// 要保证main.js在validator.js之后加载

$(function() {

	// 越核心的东西放在前面

	// 选中页面中所有的input[data-rule]

	//自定义属性里是字符串，解析每一个input的验证规则

	// 验证

	/*var validator = new Validator('!', {
		max: 100,
		min: 18,
		maxlength: 5,
		pattern: '^[A-z0-9]*$',	//* 允许为空
	});

	var result = validator.validate_pattern();
	console.log('result:', result);*/

	var test = new Input('#test');
	var valid = test.validator.is_valid();
	console.log('valid:', valid);
})