<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slide-wrap"></div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
   data() {
    return {
      
    }
  },
  created() {
    this.getRecommend()
  },
  methods: {
    getRecommend(){
      this.axios.get('/proxy/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1552550604499&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1').then(result => {
        if (result.status === 200) {
          console.log(result.data.data.slider)
        }
      })
    }
  },
}
</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable'
.recommend
  position fixed
  width 100%
  top 88px
  bottom 0
  .recommend-content
    height 100%
    overflow hidden
    .slide-wrap
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
          justify-content center
          flex 1
          line-height 20px
          overflow hidden
          font-size $font-size-medium
          .name
            margin-bottom 10px
            color $color-text
          .desc
            color $color-text
    .loading-container
      position absolute
      width 100%
      top 50%
      transform translateY(-50%)
</style>
