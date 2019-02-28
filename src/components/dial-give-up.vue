
<template>
  <div class="com-dial dial-give-up" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="content">
        <div>
          <div class="title">亲，你决定要放弃领取本站奖励继续前行了吗</div>
          <div class="sub-title">为你的勇气点赞，赠送你</div>
          <div class="steps">{{state.mid_pointer.free_step}}步</div>
        </div>
      </div>
      <div class="btns">
        <div class="btn">确定放弃奖励</div>
      </div>
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
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
.dial-give-up {
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
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin auto
    background #ffffff
    font-size c(30)
    text-align center
    border-top-left-radius c(20)
    border-top-right-radius c(20)
  }
  .title {
    width c(410)
    font-size: c(30);
    padding c(34)  0
  }
  .sub-title{
    padding c(10) 0 c(10) 0
  }
  .steps {
    font-size c(48)
    font-weight 800
    color #40a570
  }
}
</style>

