<template>
  <div class="sinnger">
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      singers:[]
    }
  },
  created() {
    this.getSingerList()
  },
  methods: {
    getSingerList(){
      this.axios.get('/proxy2/cgi-bin/musicu.fcg?-=getUCGI9776082646055826&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%2C%22cv%22%3A0%7D%2C%22singerList%22%3A%7B%22module%22%3A%22Music.SingerListServer%22%2C%22method%22%3A%22get_singer_list%22%2C%22param%22%3A%7B%22area%22%3A-100%2C%22sex%22%3A-100%2C%22genre%22%3A-100%2C%22index%22%3A-100%2C%22sin%22%3A0%2C%22cur_page%22%3A1%7D%7D%7D').then(result => {
        if(result.status === 200){
          this.singers = result.data.singerList.data.singerlist
          // console.log(result.data.singerList.data.singerlist)
        }
      })
    }
  },
}
</script>
<style lang="stylus" scoped>
.singer
  position fixed
  top 88px
  bottom 0
  width 100%
</style>
