
<template>
  <div class="com-dial dial-auth" catchtouchmove="true" v-if="state.userinfo.can_auth_werundata">
    <div class="com-dial-box">
      <div class="content">
        <div>
          <div class="title">授权获取运动步数后，才能参与活动哟！</div>
        </div>
      </div>
      <div class="btns">
        <button class="btn" open-type="openSetting">知道了</button>
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
.dial-auth {
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

