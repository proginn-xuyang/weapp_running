
<template>
  <div class="com-dial dial-auth-userinfo" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="content">
        <div>
          <div class="title">授权获取您的昵称头像，更好的体验活动！</div>
        </div>
      </div>
      <div class="btns">
        <button class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo">知道了</button>
      </div>
      <div class="close" @click="closeDial"></div>
    </div>
  </div>
</template>

<script>
export default {
  id: 13,
  computed: {
    state () {
      return this.$store.state
    }
  },
  methods: {
    /**
     * 获取用户信息
     */
    async getUserInfo (e) {
      await this.$store.dispatch('getUserInfo', e)
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
.dial-auth-userinfo {
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

