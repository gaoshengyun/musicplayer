<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slider-wrap">
        <slider>
          <div v-for="(item, index) in recommends" :key="item.id">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" alt="">
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li class="item" v-for="(item, index) in discList" :key="item.id">
            <div class="icon">
              <img :src="item.picUrl" alt="" width="60" height="60">
            </div>
            <div class="text">
              <h2 class="name">{{item.topTitle}}</h2>
              <p class="desc" v-for="(item1, index) in item.songList" :key="index">{{item1.singername}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Slider from '@/base/slider/slider'
export default {
   data() {
    return {
      recommends:[],
      discList:[]
    }
  },
  created() {
    this.getRecommend()
    this.getDiscList()
  },
  methods: {
    getRecommend(){
      this.axios.get('/proxy/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1552550604499&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1').then(result => {
        if (result.status === 200) {
          this.recommends = result.data.data.slider
          //console.log(result.data.data.slider)
        }
      })
    },
    getDiscList(){
      this.axios.get('/proxy/v8/fcg-bin/fcg_myqq_toplist.fcg?_=1552550604505&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1').then(result=>{
        if(result.status === 200){
          this.discList = result.data.data.topList
        }
      })
    }
  },
  components:{
    Slider
  }
}
</script>
<style scoped lang="stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        a
          display: block
          width: 100%
          overflow: hidden
          text-decoration: none
        img
          display: block
          width: 100%
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 12px
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 8px
        height: 8px
        border-radius: 50%
        background: $color-text-l
        &.active
          width: 20px
          border-radius: 5px
          background: $color-text-ll

</style>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
.recommend
    position fixed
    width 100%
    top 88px
    bottom 0
    .recommend-content
      height 100%
      overflow hidden
      .slider-wrap
        position relative
        width 100%
        overflow hidden
      .recommend-list
        .list-title
          height 65px
          line-height 65px
          text-align center
          font-size $font-size-medium
          color $color-theme
        .item
          display flex
          box-sizing border-box
          align-items center
          padding 0 20px 20px 20px
          .icon
            flex 0 0 60px
            width 60px
            padding-right 20px
          .text
            display flex
            flex-direction column
            justify-content:center
            flex 1
            line-height 20px
            overflow hidden
            font-size $font-size-medium
            .name
              margin-bottom 10px
              color $color-text
            .desc
              color $color-text-d
      .loading-container
        position absolute
        width 100%
        top 50%
        transform translateY(-50%)
</style>
