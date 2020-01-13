<template>
	<div class="icons"> <!-- 外层元素做宽高比例 -->
		<div class="icon">
			<div class="icon-img">
			    <img class='icon-img-content' src="http://s.qunarzz.com/homenode/images/touchheader/piao.png">				
			</div>
			<p class="icon-desc">hot destination</p>
		</div>
		<div class="icon">
			<div class="icon-img">
			    <img class='icon-img-content' src="http://s.qunarzz.com/homenode/images/touchheader/piao.png">				
			</div>
			<p class="icon-desc">hot destination</p>
		</div>
		<div class="icon">
			<div class="icon-img">
			    <img class='icon-img-content' src="http://s.qunarzz.com/homenode/images/touchheader/piao.png">				
			</div>
			<p class="icon-desc">hot destination</p>
		</div>
		<div class="icon">
			<div class="icon-img">
			    <img class='icon-img-content' src="http://s.qunarzz.com/homenode/images/touchheader/piao.png">				
			</div>
			<p class="icon-desc">hot destination</p>
		</div>
		<div class="icon">
			<div class="icon-img">
			    <img class='icon-img-content' src="http://s.qunarzz.com/homenode/images/touchheader/piao.png">				
			</div>
			<p class="icon-desc">hot destination</p>
		</div>
		<div class="icon">
			<div class="icon-img">
			    <img class='icon-img-content' src="http://s.qunarzz.com/homenode/images/touchheader/piao.png">				
			</div>
			<p class="icon-desc">hot destination</p>
		</div>
		<div class="icon">
			<div class="icon-img">
			    <img class='icon-img-content' src="http://s.qunarzz.com/homenode/images/touchheader/piao.png">				
			</div>
			<p class="icon-desc">hot destination</p>
		</div>
		<div class="icon">
			<div class="icon-img">
			    <img class='icon-img-content' src="http://s.qunarzz.com/homenode/images/touchheader/piao.png">				
			</div>
			<p class="icon-desc">hot destination</p>
		</div>
	</div>
</template>

<script >
export default {
	name: 'HomeIcons'
}	
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
	.icons
		overflow: hidden
		width: 100%
		height: 0
		padding-bottom: 50% // 宽高比为2
		.icon
			position: relative
			overflow: hidden
			float: left			
			width: 25%
			height: 0
			padding-bottom: 25% // 宽度与高度一样 padding-bottom相对于父元素的width值
			.icon-img
				position: absolute
				top: 0
				left: 0
				right: 0
				bottom: .44rem
				box-sizing: border-box
				padding: .1rem
				.icon-img-content
					display: block
					margin: 0 auto
					height: 100%
			.icon-desc
				position: absolute
				left: 0
				right: 0
				bottom: 0	
				line-height: .44rem	
				height: .44rem
				text-align: center		
				color: $darkTextColor
				
</style>