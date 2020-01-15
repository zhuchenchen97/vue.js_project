<template>
	<div class="header">
	  <div class="header-left">
	  	<div class="iconfont back-icon">&#xe624;</div>
	  </div>
	  <div class="header-input">
        <span class="iconfont">&#xe632;</span>
	    please input cities/scenic destinations</div>
	  <div class="header-right">
	  	{{this.city}}
	  	<span class="iconfont arrow-icon">&#xe6aa;</span>
	  </div>
	</div>	
</template>

<script >
export default {
	name: 'HomeHeader',
    props: {
        city: String
    }
}
</script>

<style lang="stylus" scoped>
    // 1rem = html font-size = 50px
    @import '~styles/variables.styl'
    .header
        line-height: .86rem
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
        	width: 1.24rem
        	text-align: center
        	.arrow-icon
        		margin-left: -.04rem
        		font-size: .24rem
        	
</style>