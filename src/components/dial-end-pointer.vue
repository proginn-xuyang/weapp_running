
<template>
  <div class="com-dial dial-end-pointer" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
        <div>{{state.end_pointer. is_has_prize ? '太棒啦' : '棒棒哒'}}~恭喜您成功抵达终点</div>
      </div>
      <div class="content">
        <div v-if="state.end_pointer.is_has_prize">
          <div class="rank">作为第{{state.end_pointer.rank}}名冲线的超人</div>
          <div class="gift_name">你将获得欧尚汽车送出的{{state.end_pointer.gift_name}}哦~</div>
        </div>
        <div v-else>
          <div class="rank">你是本站第{{state.end_pointer.rank}}名，无缘大奖了</div>
          <div class="gift_name">不过跑完全程的你，也是我们心中的英雄哦~</div>
        </div>
      </div>
      <div class="btns">
        <div class="btn">{{state.end_pointer. is_has_prize ? '领取' : '领取'}}</div>
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
  (((x / 2))) px
}
ptl(x, y) {
  left (x / 2) px
  top (y / 2) px
}
cwh(x, y) {
  width x == 0 ? auto : ((((x / 2)))) px
  height (y / 2) px
}
.dial-end-pointer {
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
  .header {
    cwh(630, 110)
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
    width c(630)
    height c(170)
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin auto
    background #ffffff
    font-size c(30)
    text-align center
    .rank{
      line-height 2
    }
    .gift_name{
    }
  }
  .btns {
    cwh(630, 160)
    display flex
    justify-content center
    align-items center
    margin auto
    background #ffffff
    border-bottom-left-radius c(20)
    border-bottom-right-radius c(20)

    .btn{
      cwh(400,68)
      background-image: linear-gradient(90deg, 
        #ef8b3b 0%, 
        #fbd565 100%), 
      linear-gradient(90deg, 
        #bccbf9 0%, 
        #26c1db 100%);
      background-blend-mode: normal, normal;
      border-radius: c(34);
      font-size: c(26);
      color: #ffffff;
      line-height c(68)
      text-align center
    }
  }
}
</style>

