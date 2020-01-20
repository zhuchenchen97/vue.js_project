<template>
	<div class="header">
	  <div class="header-left">
	  	<div class="iconfont back-icon">&#xe624;</div>
	  </div>
	  <div class="header-input">
        <span class="iconfont">&#xe632;</span>
	    please input cities/scenic destinations</div>
	  <router-link to='/city'>
          <div class="header-right">
    	  	{{this.currentCity}}
    	  	<span class="iconfont arrow-icon">&#xe6aa;</span>
    	  </div>
    </router-link>
	</div>	
</template>

<script >
import { mapState } from 'vuex'
export default {
	name: 'HomeHeader',
	computed: {
		...mapState({
           currentCity: 'city'
		})
	}
}
</script>

<style lang="stylus" scoped>
    // 1rem = html font-size = 50px
    @import '~styles/variables.styl'
    .header
        line-height: $headerHeight
        display: flex
        background: $bgColor
        color: #fff
        .header-left
        	width: .64rem
        	.back-icon
        		text-align: center
        		font-size: .4rem
        .header-input
        	flex: 1
        	height: .64rem
        	line-height: .64rem
        	background: #fff
        	border-radius: .1rem 
        	margin-top : .12rem
        	margin-left : .2rem
        	padding-left: .12rem
        	color: #ccc   
        .header-right 
        	min-width: 1.04rem   
        	padding: 0 .1rem
        	text-align: center
        	color: #fff      
        	.arrow-icon
        		margin-left: -.04rem
        		font-size: .24rem	
</style>