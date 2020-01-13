<template>
	<div class="icons"> <!-- 外层元素做宽高比例 -->
		<swiper>
			<swiper-slide>
				<div class="icon">
					<div class="icon-img">
					    <img class='icon-img-content' src="http://s.qunarzz.com/homenode/images/touchheader/piao.png">				
					</div>
					<p class="icon-desc">hot destination</p>
				</div>	
			</swiper-slide>
	    </swiper>
	</div>
</template>

<script >
export default {
	name: 'HomeIcons',
	data: function(){
		return {
			iconList: [{
				id: '0001',
				imgUrl: 'http://s.qunarzz.com/homenode/images/touchheader/piao.png',
				desc:'hot destination'
			},{
				id: '0002',
				imgUrl: 'http://s.qunarzz.com/homenode/images/touchheader/flight.png',
				desc:'flight'				
			},{
				id: '0003',
				imgUrl: 'http://s.qunarzz.com/homenode/images/touchheader/train.png',
				desc:'train'					
			},{
				id: '0004',
				imgUrl: 'http://s.qunarzz.com/homenode/images/touchheader/package.png',
				desc:'holiday'				
			},{
				id: '0005',
				imgUrl: 'http://s.qunarzz.com/homenode/images/touchheader/piao.png',
				desc:'hot destination'
			},{
				id: '0006',
				imgUrl: 'http://s.qunarzz.com/homenode/images/touchheader/flight.png',
				desc:'flight'				
			},{
				id: '0007',
				imgUrl: 'http://s.qunarzz.com/homenode/images/touchheader/train.png',
				desc:'train'					
			},{
				id: '0008',
				imgUrl: 'http://s.qunarzz.com/homenode/images/touchheader/package.png',
				desc:'holiday'				
			},{
				id: '0009',
				imgUrl: 'http://s.qunarzz.com/homenode/images/touchheader/hotel.png',
				desc:'hotel'				
			}]
		}
	}
}	
</script>

<style lang="stylus" scoped>
    @import '~styles/variables.styl'
	.icons >>> .swiper-container
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