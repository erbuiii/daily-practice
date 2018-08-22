<!-- 根组件 -->
<!-- 1.模板：html结构 -->
<template>
  <div id="app">
    <ul>
        <!-- a标签：重新加载 -->
        <!-- 使用路由：router-link -->
        <li>
            <!-- <a href="/">Home</a> -->
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <!-- <a href="/helloworld">Hello</a> -->
            <router-link to="/helloworld">Hello</router-link>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<!-- 2.行为：处理逻辑 -->
<script>
export default {    
    name: 'app',
    data() {
        return {
        }
    },
    //跨域请求
    created() {
        //fetch
        // fetch("/apis/test/testToken.php", {
        //     method: "post",
        //     headers: {
        //         "Content-type": "application/json",
        //         token: "f4c902c9ae5a2a9d8f84868ad064e706"
        //     }
        //     body: JSON.stringify({
        //         username: "dfsdf",
        //         password: "123456"
        //     })
        // })
        // .then(result => {
        //     return result.json()
        // })
        // .then(data => {
        //     console.log(data)
        // })

        //axios
        this.$axios.post("/apis/test/testToken.php", {
            username: "dfsdf",
            password: "123456"
        }).then(data => {
            console.log(data)
        })
    }
}
</script>

<style>
    h1 {
        color: purple;
    }
</style>
