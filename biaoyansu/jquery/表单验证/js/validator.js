// 模块化思想，用来验证表单

// 给每一个input内置一个独立的验证，采用构造函数，
// 不污染全局变量

$(function() {
	'use strict';

	// 只暴露出一个接口 --> 一个构造函数
	/*
	    传进来的rule应该是一个对象
		rule = {
			max: 100,
			min: 5,
			max_length: 12,
			numeric: false
			...
		}
	*/
	window.Validator = function(val, rule) {
		//总验证：检测哪个方法需要被执行，哪个不需要
		this.is_valid = function(new_val) {
			var key;
			var val = new_val || val;	//用户输入的值已经不再是初始化时候的值

			// console.log(val);
			//如果不是必填项，且用户为填写任何内容，则直接判定为合法
			if (!rule.required && !val) 
				return true;
			for(key in rule) {

				//开头已经验证过required，因此不必再进行验证
				if (key === 'required') 
					continue;

				//动态触发每个验证规则，调用rule对象中相对应的方法
				var result = this['validate_' + key]();
				//如果有一条规则返回false，就可以停止验证了
				if (!result) return false;
			console.log('111');
			}

			return true;	//每一条验证都通过
		}

		//单个验证规则
		this.validate_max = function() {
			// input框输入的是字符串，先转为数值
			pre_max_min();
			//返回true/false
			return val <= rule.max;
		}

		this.validate_min = function() {
			pre_max_min();
			return val >= rule.min;
		}

		this.validate_maxlength = function() {
			//如果传的是数字，要转换成字符串
			pre_length();
			return val.length <= rule.maxlength;
		}

		this.validate_minlength = function() {
			pre_length();
			return val.length >= rule.minlength;
		}

		this.validate_numeric = function() {
			return $.isNumeric(val);
		}

		this.validate_required = function() {
			// 修剪首尾两头的空格
			var real_val = $.trim(val);
			if (!real_val && real_val !== 0) return false;
			return true;
		}

		// 验证输入用户名
		this.validate_pattern = function () {

			//通过字符串生成正则表达式，并测试用户输入的值是否匹配
			var reg = new RegExp(rule.pattern);
			return reg.test(val);
		}

		//用于this.validate_max或this.validate_min的前置工作
		function pre_max_min() {
			val = parseFloat(val);
		}

		//用于this.validate_maxlength或this.validate_minlength的前置工作
		function pre_length() {
			val = val.toString();	
		}
	}
})
