

<template>
  <div class="com-dial dial-gift-money" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
        <img class="header-avaster" :src="state.userinfo.avaster" alt srcset>
        <div class="header-detail">
          <span class="nickname">{{state.userinfo.nickname}}</span>
          <span class="time">在{{getters.guafen.receive_time}}的活动中瓜分到</span>
        </div>
      </div>
      <div class="content">
        <div class="money">
          <span>{{getters.guafen.prize_name}}</span>
          <span class="unit">元</span>
        </div>
        <div class="tip">已经存入微信零钱账户</div>
        <div class="note">请再接再厉!</div>
      </div>
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  id: 3,
  methods: {
    closeDial () {
      this.$store.commit('closeGiftMoney')
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
.dial-gift-money {
  .header {
    cwh(540, 150)
    font-size c(38)
    font-weight 800
    color #ffffff
  }
  .header-avaster {
    cwh(100, 100)
    border-radius c((100 / 2))
    margin auto c(16)
  }
  .header-detail {
    flex 1
    text-align left
    display flex
    flex-direction column
    justify-content center
    align-items flex-start
    .nickname {
      font-size c(28)
      font-weight 800
      line-height 2
    }
    .time {
      font-size c(24)
      font-weight 400
    }
  }
  .content {
    width c(540)
    height c(310)
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    margin auto
    background #ffffff
    border-bottom-left-radius c(20)
    border-bottom-right-radius c(20)
    .money {
      margin-top c(30)
      font-size c(100)
      color #ec716c
      .unit{
        font-size c(30)
      }
      
    }
    .tip {
      font-size c(22)
      color #666666
      margin-top c(-25)
      line-height 2
    }
    .note {
      font-size c(30)
      color #333333
    }
  }
}
</style>

