<template>
  <div class="wrapper">
	  <swiper :options="swiperOption">
	    <!-- slides -->
	    <swiper-slide v-for="item of swiperList" :key="item.id">
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
	data () {
      return {
      	swiperOption:{
      		pagination: '.swiper-pagination',
      		loop: true // 轮播图循环
      	},
      	swiperList: [{
      		id:'0001',
      		imgUrl:'http://imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      	},{
      		id:'0002',
      		imgUrl:'http://imgs.qunarzz.com/vc/ad/7c/fe/037d1a400372ff57b0030d1d1c.jpg_92.jpg'
      	},{
      		id:'0003',
      		imgUrl:'http://imgs.qunarzz.com/vc/24/36/10/3fc94d042ae62de380581d4c98.jpg_92.jpg'
      	}]
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