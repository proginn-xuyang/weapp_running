<template>
  <div class="abs com-userinfo">
    <com-circle></com-circle>
    <div class="abs h-center summary-detail">
      <div v-if="isOwner">
        <div class="summary-title">今日步数</div>
        <div class="summary-today-total-count" @click="clickStepLog">{{state.userinfo.today_step}}</div>
        <div class="summary-today-left-count" v-if="getters.left_step > 0">离每日红包还差{{state.target_step - state.userinfo.today_step}}步</div>
        <div class="summary-today-left-count" v-else>等待开奖</div>
        <div class="btn-log" @click="clickFriendLog">
          <span>获赠记录></span>
        </div>
      </div>
      <div v-else>
        <div class="summary-title">今日步数</div>
        <div class="summary-today-total-count">{{state.friend_userinfo.today_step}}</div>
        <div class="summary-userinfo">
          <img class="summary-avaster" :src="state.friend_userinfo.avasterUrl" alt srcset>
          <div class="summary-nickname">{{state.friend_userinfo.nickName}}</div>
        </div>
        <div class="summary-today-left-count" v-if="getters.friend_left_step > 0">离每日红包还差{{state.target_step - state.friend_userinfo.today_step}}步</div>
      </div>
    </div>
    <img src="/static/images/home-summary.png" alt srcset class="summary-bg" mode="scaleToFill">
  </div>
</template>

<script>
import ComCircle from './com-circle'
export default {
  props: ['isOwner'],
  components: {
    ComCircle
  },
  methods: {
    clickStepLog () {
      this.$util.click(this.$util.constant.步数明细记录, async () => {
        await this.$store.dispatch('getAllStepLogs')
        await this.$store.commit('openDial', this.$util.constant.DialStepLog)
      })
    },
    clickFriendLog () {
      this.$util.click(this.$util.constant.好友赠送记录, async () => {
        await this.$store.dispatch('getFriendStepLogs')
        await this.$store.commit('openDial', this.$util.constant.DialFriendStepLog)
      })
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
  width  x == 0 ? auto : (x / 2) px
  height (y / 2) px
}
.com-userinfo {
  top c(379)
  width c(750)
  height c(699)
  display flex
  flex-direction column
  justify-content center
  align-items center
  w = 400
  .summary-detail {
    top c(15)
    width c(w)
    height c(w)
    display flex
    flex-direction column
    justify-content center
    align-items center
    > div{
      display flex
      flex-direction column
      justify-content center
      align-items center
    }
  }
  .summary-bg {
    width c(750)
    height c(699)
    position absolute
    top 0
    pointer-events:none;
  }
  .summary-title {
    font-size c(36)
    font-weight 800
    line-height 1.5
    letter-spacing c(4)
    color #007e38
  }
  .summary-today-total-count {
    font-size c(100)
    font-weight 800
    color #ed7d32
  }
  .summary-today-left-count {
    font-size c(26)
    color #7cc39b
    margin-bottom c(24)
  }
  .summary-userinfo {
    display flex
    justify-content center
    align-items center
    margin-bottom c(10)
  }
  .summary-avaster {
    cwh(80, 80)
    border-radius c(40)
    margin-top c(-20)
    z-index 100
  }
  .summary-nickname {
    height c(42)
    line-height c(42)
    padding 0 c(30)
    margin-left c(-20)
    background-image linear-gradient(
      90deg,
      #3ea26d 0%,
      #85f5bc 99%
    ), linear-gradient(
      #b4b4b4,
      #b4b4b4
    )
    background-blend-mode normal, normal
    border-top-right-radius c(20)
    border-bottom-right-radius c(20)
    font-size c(24)
    color #000000
    max-width c(200)
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
  }

  .btn-log {
    width c(159)
    height c(42)
    background-image linear-gradient(
      90deg,
      #3ea26d 0%,
      #85f5bc 99%
    ), linear-gradient(
      #b4b4b4,
      #b4b4b4
    )
    background-blend-mode normal, normal
    border-radius c(21)
    font-size c(22)
    line-height c(37)
    letter-spacing c(2)
    color #ffffff
    display flex
    justify-content center
    align-items center
  }
}
</style>


