/* 封装原生的localStorage */
;(function() {

	// 暴露接口

	window.ms = {
		set: set,
		get: get,
	};

	function set(key, val) {
		localStorage.setItem(key, JSON.stringify(val));
	}

	function get(key) {
		var json = localStorage.getItem(key);
		if (json) {
			// json格式的字符串 --> 转化
			return JSON.parse(json);
		}
	}
})();

// ms.set('name', '北北');
// var name = ms.get('name');
// console.log('name:', name);