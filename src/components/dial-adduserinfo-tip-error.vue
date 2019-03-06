
<template>
  <div class="com-dial dial-error" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
        <div>很遗憾</div>
      </div>
      <div class="content">
        <div>
          <div class="title">在今天的活动中</div>
          <div class="sub-title">您的步数尚未达到三万步</div>
          <div class="sub-title">请继续努力</div>
        </div>
      </div>
      <div class="btns" @click="clickKnow">
        <div class="btn">确定</div>
      </div>
      <div class="close">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickKnow () {
      this.$store.commit('openDial', 17)
    }
  },
  computed: {
    state () {
      return this.$store.state
    },
    getters () {
      return this.$store.getters
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
.dial-error {
  .content {
    flex-direction column
    font-size c(30)
    text-align center
  }
  .title {
    width c(430)
    padding c(30) 0 c(0) 0
    font-size c(30)
    font-weight 800
    color #40a570
  }
   .sub-title {
    width c(430)
    padding c(10) 0 c(0) 0
    font-size c(30)
    font-weight 800
    color #40a570
  }
}
</style>

