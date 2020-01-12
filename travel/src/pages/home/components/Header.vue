<template>
	<div class="header">
	  <div class="header-left">back</div>
	  <div class="header-input">please input cities/scenic destinations</div>
	  <div class="header-right">cities</div>
	</div>	
</template>

<script >
export default {
	name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
    // 1rem = html font-size = 50px
    .header
        line-height: .86rem
        display: flex
        background: #00BCD4
        color: #fff
        .header-left
        	width: .64rem
        .header-input
        	flex: 1
        	height: .64rem
        	line-height: .64rem
        	background: #fff
        	border-radius: .1rem 
        	margin-top : .12rem
        	margin-left : .2rem
        	color: #ccc
        .header-right
        	width: 1.24rem
        	text-align: center
        	
</style>