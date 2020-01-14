<template>
	<div>
		<div class="title">Hot products</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl">
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">more info</button>	
				</div>
			</li>
		</ul>
	</div>
</template>

<script >
export default {
	name: 'HomeRecommend',
	data (){
		return {
			recommendList:[{
				id:'0001',
				imgUrl:'https://media-cdn.tripadvisor.com/media/photo-s/1a/63/4f/ae/caption.jpg',
				title:'Vancouver Seaplane Tour',
				desc:'See the city of Vancouver'
			},{
				id:'0002',
				imgUrl:'https://media-cdn.tripadvisor.com/media/photo-s/1a/63/4f/ae/caption.jpg',
				title:'Vancouver Seaplane Tour',
				desc:'See the city of Vancouver'
			},{
				id:'0003',
				imgUrl:'https://media-cdn.tripadvisor.com/media/photo-s/1a/63/4f/ae/caption.jpg',
				title:'Vancouver Seaplane Tour',
				desc:'See the city of Vancouver'
			}]
		}
	}
}	
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item
		overflow: hidden
		display: flex
		height: 1.9rem
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			flex: 1 //自动撑开剩余宽度
			padding: .1rem
			min-width: 0 //?
			.item-title
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .4rem
				color: #ccc
				ellipsis()
			.item-button
				line-height: .44rem
				margin-top: .16rem
				background: #ff9300
				padding: 0 .2rem
				border-radius: .06rem
				color: #fff
</style>