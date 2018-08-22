<!-- 单文件组件：由三部分构成 -->
<template>
    <div class="container">
        <div class="row">
            <div class="col-sm">
                <!-- <app-announcement :html="html"> -->
                <app-announcement>
                    <p slot="one">我是p1</p>
                    <p slot="two">我是p2</p>
                </app-announcement>
                <app-article></app-article>
            </div>
        </div>
    </div>
</template>

<script>
//导出
export default {
    // data() {
    //     return {
    //         html: "<p>我是p标签</p>"
    //     }
    // }
}
</script>

<!-- 局部样式
    <style scoped>
 -->
<style>

</style>
