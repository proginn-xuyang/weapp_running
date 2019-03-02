
<template>
  <div class="com-dial dial-jiasu-failed" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
        <div>1.5倍加速神器，想要吗？</div>
      </div>
      <div class="content">
        <div>
          <div class="title">嘻嘻，保存二维码图片扫码下载</div>
          <div class="sub-title">并注册欧尚style App来获取吧~</div>
          <img class="scan" src="/static/images/scan.jpg" alt="" srcset="" mode="aspectFill">
        </div>
      </div>
      <div class="btns">
        <div class="btn">保存二维码</div>
      </div>
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  id: 9,
  methods: {
    closeDial () {
      this.$store.commit('closeDial')
    }
  },
  computed: {
    state () {
      return this.$store.state
    }
  }
}
</script>

<style lang="stylus">

c(x) {
  ((x / 2) px)
}
ptl(x, y) {
  left (x / 2) px
  top (y / 2) px
}
cwh(x, y) {
  width x == 0 ? auto : (((((x / 2))))) px
  height (y / 2) px
}
.dial-jiasu-failed {
  position fixed
  z-index 100000
  top 0
  bottom 0
  left 0
  right 0
  margin auto
  background rgba(0, 0, 0, 0.8)
  display flex
  justify-content center
  align-items center
  .content {
    flex-direction column
    font-size c(30)
    text-align center
  }
  .title {
    width c(430)
    padding c(30) 0 c(0) 0
  }
  .sub-title{
    padding c(10) 0 c(10) 0
  }
  .scan{
    padding-top c(30)
    cwh(240, 240)
  }
}
</style>

