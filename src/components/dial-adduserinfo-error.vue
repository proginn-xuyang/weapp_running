
<template>
  <div class="com-dial dial-error" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
        <div>提示</div>
      </div>
      <div class="content">
        <div>
          <div class="title">{{state.err_msg}}</div>
        </div>
      </div>
      <div class="btns" @click="closeDial">
        <div class="btn">知道了</div>
      </div>
      <div class="close"></div>
    </div>
  </div>
</template>

<script>
export default {
  id: 19,
  methods: {
    closeDial () {
      this.$store.commit('openDial', 18)
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
}
</style>

