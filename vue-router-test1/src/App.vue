<template>
    <div id="app">
        <img src="./assets/logo.png">
        <header>
            <!-- router-link：定义点击后导航到哪个路径下 -->
            <router-link to="/home">Home</router-link>
            <router-link to="/about">About</router-link>

            <!-- 增加两个到user组件的导航，使用了不同的to属性 -->
            <router-link to="/user/123">User123</router-link>

            <!-- 命名路由 -->
            <router-link :to="{name:'user', params:{id:456}}">User</router-link>
            <!-- <router-link to="/user/456">User456</router-link> -->
        </header>

        <!-- 对应组件内容渲染到router-view中 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>