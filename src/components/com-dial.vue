
<template>
  <div class="com-dial" :class="{'actived': state.dial.is_show}" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
        <div>步数增减明细</div>
      </div>
      <div class="content">
        <div>content</div>
      </div>
      <div class="btns">btn</div>
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comdial',
  props: ['header', 'content'],
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
  (((x / 2)) px)
}
ptl(x, y) {
  left (x / 2) px
  top (y / 2) px
}
cwh(x, y) {
  width x == 0 ? auto : (((x / 2))) px
  height (y / 2) px
}
.com-dial {
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
  &.actived {
    opacity 1
  }
  .header {
    cwh(540, 110)
    display flex
    justify-content center
    align-items center
    margin auto
    background-image linear-gradient(90deg, #85f5bc 1%, #3ea26d 100%), linear-gradient(#000000, #000000)
    border-top-left-radius c(20)
    border-top-right-radius c(20)
    font-size c(38)
    font-weight 800
    color #ffffff
  }
  .content {
    width c(540)
    height c(310)
    display flex
    justify-content center
    align-items center
    margin auto
    background #ffffff
  }
  .btns {
    cwh(540, 160)
    display flex
    justify-content center
    align-items center
    margin auto
    background #f2f2f2
    border-bottom-left-radius c(20)
    border-bottom-right-radius c(20)
  }
  .close {
    height c(160)
    display flex
    justify-content center
    align-items center
    .btn-close {
      cwh(71, 71)
    }
  }
}
</style>

