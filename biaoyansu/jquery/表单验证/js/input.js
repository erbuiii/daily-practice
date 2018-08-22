// 模块化思想，用来验证表单

// 给每一个input内置一个独立的验证，采用构造函数，
// 不污染全局变量

$(function() {
	'use strict';

	//传入一个选择器：找到需要绑定的input
	window.Input = function(selector) {
		var $ele,
			rule = {
				required: true
			},
			me = this;

		//需要暴露到外部：
		this.load_validator = function () {
			var val = this.get_val();
			this.validator = new Validator(val, rule);
		}

		this.get_val = function () {
			return $ele.val;
		}

		//初始化
		function init() {
			find_ele();
			parse_rule();
			me.load_validator();	//me --> window
			listen();
		}

		//监听输入框，变化 --> 检测

		function listen() {
			$ele.on('blur', function () {
			console.log($ele);
				var result = me.validator.is_valid(me.get_val());
				console.log('是否合法:', result);
			})
		}

		function find_ele() {
			if (selector instanceof jQuery) {
				//说明已经选好了
				$ele = selector;
			} else {
				$ele = $(selector);
			}
		}


		// 解析规则
		function parse_rule() {
			var rule_str = $ele.data('rule');
			if (!rule_str) return;

			var rule_arr = rule_str.split('|');		//["max: 100","min: 5",...]
			for (var i = 0; i < rule_arr.length; i++) {
				var item_str = rule_arr[i];
				var item_arr = item_str.split(':');	//["max","100","min","5",...]

				//每一条的键：每一条的值
				//如果不反序列化JSON.parse，item_arr[1]无论传的是什么值，都是一个字符串
				//使用JSON.parse，在填值的时候要用JSON的语法来写 --> 对于字符串要加上引号

				rule[item_arr[0]] = JSON.parse(item_arr[1]);	//pattern:"^[a-z0-9]$" | min:18
			}
		}


		init();
	}
})
