<template>
  <div id="app">
    <keep-alive>  // 下一次进路由的时候不需要重新渲染组件
        <router-view/> <!--   //显示的内容是当前路由地址所对应的内容 在index.js中配置-->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>


</style>
