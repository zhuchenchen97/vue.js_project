<template>
	<div>
	   <home-header></home-header>
	   <home-swiper></home-swiper>
	   <home-icons></home-icons>
	   <home-recommend></home-recommend>
	   <home-weekend></home-weekend>
	</div>	
</template>

<script >
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
	name: 'Home',
	components:{
		HomeHeader : HomeHeader,
		HomeSwiper : HomeSwiper,
		HomeIcons : HomeIcons,
		HomeRecommend : HomeRecommend,
		HomeWeekend: HomeWeekend
	},
	methods: {
        getHomeInfo() {
        	axios.get('/static/mock/index.json') // 请求一个url
        	    .then(this.getHomeInfoSuccess)
        },
        getHomeInfoSuccess(res) {
        	console.log(res)
        }
	},
	mounted () {
		this.getHomeInfo()
	}
}
</script>

<style>
	.home {
		font-size: 50px;
	}
</style>