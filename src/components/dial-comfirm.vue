
<template>
  <div class="com-dial dial-comfirm" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="content">
        <div>
          <div class="title">亲，确认领取本站奖励</div>
          <div class="sub-title">并返回上一站点开始吗？</div>
        </div>
      </div>
      <div class="btns">
        <div class="btn" @click="getPrize">确定</div>
      </div>
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  id: 7,
  methods: {
    closeDial () {
      this.$store.commit('closeDial')
    },
    getPrize () {
      this.$store.dispatch('getPrize', 2)
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
.dial-comfirm {
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
    width c(540)
    flex-direction column
    font-size c(30)
    text-align center
    border-top-left-radius c(20)
    border-top-right-radius c(20)
  }
  .title {
    width c(410)
    font-size: c(30);
    padding c(30) 0 c(0) 0
  }
  .sub-title{
    padding c(10) 0 c(10) 0
  }
}
</style>

