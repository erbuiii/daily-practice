<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
    <div>
        <!-- <a href="javascript:;" @click="$store.state.dialog.show = true">点击</a> -->
        <!-- 使用mutations后 -->
        <!-- 使用$store.commit('switch_dialog')来触发mutations中的switch_dialog方法 -->
        <!-- <a href="javascript:;" @click="$store.commit('switch_dialog')">点击</a> -->

        <!-- 使用action执行多个mutations -->
        <!-- 使用$store.dispatch('switch_dialog')来触发action中的switch_dialog方法 -->
        <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击</a>

        <t-dialog></t-dialog>
        
    </div>
</template>

<script>
import Dialog from './components/Dialog.vue'
export default {
  name: 'App',
  components: {
    't-dialog': Dialog
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
