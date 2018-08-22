;(function() {
	'use strict'

	// 事件调动中心
	var Event = new Vue();

	var alert_sound = document.getElementById('alert_sound');

	function copy(obj) {
		return Object.assign({}, obj);
	}

	// 封装子组件
	Vue.component('task', {
		template: '#task-tpl',
		props: ['todo'],
		methods: {
			// 告诉父组件，子组件想干什么
			action: function(name, params) {
				Event.$emit(name, params);
			}
		}
	})

	//新建vue实例 --> 父组件
	new Vue({
		el: '#main',
		data: {
			list: [],	//用一个数组存储清单数据
			last_id: 0,	//只增不减
			current: {}	//输入框的当前数据，以及完成状态
		},

		// 挂载时
		mounted: function() {
			var me = this;
			this.list = ms.get('list') || this.list;
			this.last_id = ms.get('last_id') || this.last_id;


			// 设置每隔1000ms检查一次
			setInterval(function() {
				me.check_alerts();
			}, 1000);

			// 在父级组件中 注册允许让子组件触发的方法
			Event.$on('remove', function(id) {
				if (id) {
					// 注意：此时的this和外部的this已经不同，所以不要用this
					me.remove(id);
				}
			});
			Event.$on('toggle_complete', function(id) {
				if (id) {
					// 注意：此时的this和外部的this已经不同，所以不要用this
					me.toggle_complete(id);
				}
			});
			Event.$on('set_current', function(id) {
				if (id) {
					// 注意：此时的this和外部的this已经不同，所以不要用this
					me.set_current(id);
				}
			});
			Event.$on('toggle_detail', function(id) {
				if (id) {
					// 注意：此时的this和外部的this已经不同，所以不要用this
					me.toggle_detail(id);
				}
			});
		},

		methods: {
			check_alerts: function() {
				var me = this;
				this.list.forEach(function(row, i) {
					var alert_at = row.alert_at; 
					if (!alert_at || row.alert_confirmed) return;		// 不需要提醒的信息，直接返回

					var alert_at = (new Date(alert_at)).getTime(); // 获取时间戳，用于对比提醒时间以及当前时间
					var now = (new Date()).getTime();			   // 当前时间

					if(now >= alert_at) {
						alert_sound.play();
						// 设置状态，提醒过一次之后就不再提醒（前面判断，直接返回）
						setTimeout(function() {
							var confirmed = confirm(row.title);
							Vue.set(me.list[i], 'alert_confirmed', confirmed);
						}, 0);

					}
				})
			},

			//包含了添加 & 更新 两种操作
			merge: function() {
				var is_update, id;
				is_update = id = this.current.id;

				if (is_update) {
					// find() 方法返回通过测试（函数内判断）的数组的第一个元素的值
					var index = this.find_index(id);

					// 错误方式： vue检测不到
					// this.list[index] = copy(this.current);
					Vue.set(this.list, index, copy(this.current));
				} else {
					var title = this.current.title;
					if (!title && title !== 0) return;
					// 错误写法：应该拷贝数据而非直接引用
					// this.list.push(this.current);
					var todo = copy(this.current);
					this.last_id ++;	//只在做添加操作时+1
					ms.set('last_id', this.last_id);
					todo.id = this.last_id;
					this.list.push(todo);
				}

				// ms.set('list',this.list);
				this.reset_current();
			},

			toggle_detail: function(id) {
				var index = this.find_index(id);
				this.list[index].show_detail;
				Vue.set(this.list[index], 'show_detail', !this.list[index].show_detail);
			},
			
			remove: function(id) {
				var index = this.find_index(id);
				this.list.splice(index, 1);
				// ms.set('list', this.list);
			},

			// next_id: function() {
			// 	return this.list.length + 1;
			// },

			set_current: function(todo) {
				this.current = copy(todo);
			},

			// 输入后清空
			reset_current: function() {
				this.set_current({});
			},

			// 通过id寻找索引
			find_index: function(id) {
				return this.list.findIndex(function(item) {
					return item.id == id;
				})
			},

			toggle_complete: function(id) {
				var i = this.find_index(id);
				Vue.set(this.list[i], 'completed', !this.list[i].completed);
			}
		},

		watch: {
			// 每次发生变化时，自动将数据存到localStorage中
			list: {
				deep: true,
				handler: function(new_val, old_val) {
					if (new_val) {
						ms.set('list', new_val);
					} else {
						ms.set('list', []);
					}
				}
			}
		}
	})

})();