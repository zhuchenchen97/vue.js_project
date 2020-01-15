<template>
  <div class="wrapper">
	  <swiper :options="swiperOption" v-if="showSwiper">
	    <!-- slides -->
	    <swiper-slide v-for="item of list" :key="item.id">
	    	<img class="swiper-img" :src="item.imgUrl">
	    </swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination" slot="pagination"></div>
	  </swiper>
  </div>	
</template>

<script>
export default { // 在子组件定义data时data是个函数
	name: 'HomeSwiper',
  props: {
    list: Array
  },
	data () {
      return {
      	swiperOption:{
      		pagination: '.swiper-pagination',
          autoplay: 3000,
      		loop: true // 轮播图循环
      	}
      }
	},
  computed: {
    showSwiper(){
      return this.list.length
    }
  }
}	
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active // 样式穿透
    	background: #fff !important
    .wrapper // 实现宽高比例自适应
    	width: 100%
    	overflow: hidden
    	height: 0
    	padding-bottom: 30.5% // 高度相当于宽度自动撑开30.5%
    	background: #eee	
		.swiper-img 
			width: 100%
  
</style>