<!-- 1.模板：html结构 -->
<template>
  <div id="home">
    <!-- <h1>{{title}}</h1> -->
    <app-header></app-header>
    <users></users>
    <app-footer></app-footer>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
import Users from './Users.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {    
    name: 'home',
    data() {
        return {
            // title: '这是我的第一个Vue项目'
            users: [

            ],
            title: "传递的是一个值，(number string boolean)"
        }
    },
    //局部注册组件
    components: {
        "users": Users,
        "app-header": Header,
        "app-footer": Footer
    },
    //在页面加载之前获取数据
    created() {
        this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
            // console.log(data);
            this.users = data.body;
        })
    }
}
</script>

<style>
    h1 {
        color: purple;
    }
</style>
