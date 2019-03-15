<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="recommends.length" class="slide-wrap">
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
      </div>
    </div>
  </div>
</template>
<script>
import Slider from '@/base/slider/slider'
export default {
   data() {
    return {
      recommends:[]
    }
  },
  created() {
    this.getRecommend()
  },
  methods: {
    getRecommend(){
      this.axios.get('/proxy/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1552550604499&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1').then(result => {
        if (result.status === 200) {
          this.recommends = result.data.data.slider
          //console.log(result.data.data.slider)
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