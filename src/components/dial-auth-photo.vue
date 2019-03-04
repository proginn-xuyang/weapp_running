
<template>
  <div class="com-dial dial-auth-photo" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="content">
        <div>
          <div class="title">授权保存到相册功能！</div>
        </div>
      </div>
      <div class="btns">
        <button class="btn" open-type="openSetting" @opensetting="openSetting">知道了</button>
      </div>
      <div class="close" @click="closeDial"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    state () {
      return this.$store.state
    }
  },
  methods: {
    openSetting () {
      this.$store.commit('openDial', 9)
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
.dial-auth-photo {
  .content {
    font-size c(34)
    text-align center
    border-top-left-radius c(20)
    border-top-right-radius c(20)
  }
  .title {
    width c(410)
    font-size: c(30);
    padding c(30) 0 c(0) 0
  }
}
</style>

