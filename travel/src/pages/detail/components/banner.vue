<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://imgs.qunarzz.com/vs_ceph_vs_tts/e802ce19-7950-419c-b790-39fb364cf7f6.jpg_r_480x320x90_b8313d0d.jpg"/>
            <div class="banner-info">
                <div class="banner-tittle">AAAAA景区</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe647;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallery :imgs="imgs" 
                        v-show="showGallery"
                        @close="handleGalleryClose"
        ></common-gallery>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallery: false,
            imgs: ['http://imgs.qunarzz.com/p/tts2/1811/1f/ec1030a0e6845c02.jpg_180x120_75656c79.jpg','http://imgs.qunarzz.com/vs_ceph_vs_tts/45adc913-5fc7-4d83-9e49-0227c6902801.jpg_180x120_e23be2dc.jpg']
        }
    },
    methods: {
        handleBannerClick () {
           this.showGallery = true;
        },
        handleGalleryClose () {
            this.showGallery = false;
        }
    },
    components: {
        CommonGallery
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: .6rem
            color: #fff
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-tittle
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                margin-top: .14rem
                padding: 0 .4rem
                line-height: .32rem
                height: .32rem
                border-radius: .2rem
                background: rgba(0,0,0,.8)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>