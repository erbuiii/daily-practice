//原生选择
// document.getElementById('a')
// 		.style
// 		.background = '#fcc';

//1601
// jQuery('#b')
// 	.css('background', '#ffc');

// $('input[type = "number"]')
// 	.css('background', '#f40');

// 1602
// $('.grandpa')
// 	.find('.child')
// 	.css('border', '1px solid #999');

// $('#child1')
// 	.parent()
// 	.css('border', '1px solid #666');

// $('#child1')
// 	.parents('.grandpa')
// 	.css('border', '1px solid #333');

// $('.child')
// 	.filter('.not-gay')
// 	.css('background', '#f40');

//1604
// $('.a')
// 	.css({
// 		color: 'red',
// 		background: '#999'
// 	});

// var b = $('.b').addClass('gray');
// console.log(b.hasClass('gray'));	//true

// var board = $('#board');

// // 闪烁
// function toggle() {
// 	if (board.hasClass('active')) {
// 		board.removeClass('active');
// 	} else {
// 		board.addClass('active');
// 	}
// }

// setInterval(toggle, 200

//1605
// var text = $('#b').text();
// // $('#a').text('LA');
// var html = $('#a').html();

// console.log("text: " + text);
// console.log("html: " + html);

// $('#a').append('<div>append</div>');
// $('#a').prepend('<div>prepend</div>');
// $('#a p').remove();

//1606
// var card = $('#card');
// var cardTrigger = $('#card-trigger');

// cardTrigger.on('click', function() {
// 	if (card.is(':visible')) {
// 		card.slideUp();
// 	} else {
// 		card.slideDown();
// 	}
// })

// card.on('mouseenter', function() {
// 	card.addClass('active');
// })

// card.on('mouseleave', function() {
// 	card.removeClass('active');
// })

//1608
var n = $('#nickname').val();
console.log("n:", n);

var nickname = $('#nickname');
nickname.focus(function() {
	console.log('focus!');
})

nickname.blur(function() {
	console.log('blur!');
})
nickname.select(function() {
	console.log('select!');
})

$('#login-trigger').click(function() {

	$('#login').submit();

})

console.log('hello');

