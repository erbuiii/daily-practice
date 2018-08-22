// var trigger = $('#trigger');
// var card = $('#card');
// var loaded = false;	//记录请求加载情况

// trigger.on('click', function() {
// 	// card.toggle();  //使用这种写法：每次点击隐藏还会发出一次请求

// 	if (card.is(':visible')) {
// 		card.slideUp();
// 	} else {

// 		//优化：引入loaded，如果已经加载过一次，则不再请求
// 		if (!loaded) {
// 			card.load('card.html');
// 			loaded = true;
// 		}

// 			card.slideDown();

// 	}

// })

// 1610
// $.ajax('http://api.github.com/users/biaoyansu')
	$.ajax('http://music.163.com/outchain/player?type=2&id=516392300&auto=1&height=66&bg=e8e8e8')
$.ajax('')
	.done(function(data) {
		console.log("data:", data);
	})

// var form = $('#search'),
// 	input = $('input#username'),
// 	result = $('#result'),
// 	username;

// //检测用户提交事件
// form.on('submit', function(e) {

// 	//禁止浏览器的默认操作：提交表单，整页刷新
// 	e.preventDefault();

// 	//动态获取值，拼接url
// 	username = input.val();
// 	// $.ajax('http://api.github.com/users/' + username)
// 		.done(function(data) {
// 			console.log("data:", data);
// 			var html = 
// 				'<div>用户名：' + data.login + '</div>' + 
// 				'<div>介绍：' + (data.bio || '无') + '</div>';
// 			result.html(html);
// 		})

// })

// $.ajax({
// 	url: 'http://api.github.com/users/biaoyansu',
// 	method: 'get',
// 	data: {
// 		username: 'ebb',
// 		password: '123',
// 	},
// 	success: function() {
// 		console.log('成功！');
// 	},
// 	error: function() {

// 	}
// })