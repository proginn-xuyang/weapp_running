
<template>
  <div class="com-dial dial-donate-failed" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
        <div>赠送失败</div>
      </div>
      <div class="content">
        <div>
          <div class="title">哎呀~今天您赠送太多次了</div>
          <div class="sub-title">歇歇明天继续吧~~</div>
        </div>
      </div>
      <div class="btns">
        <div class="btn">知道了</div>
      </div>
      <div class="close" @click="closeDial"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeDial () {
      this.$store.commit('toggleDial')
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
.dial-donate-failed {
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
}
</style>

