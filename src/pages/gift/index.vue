<template>
  <div class="container container-gift">
    <comheader></comheader>
    <div class="content">
      <div class="none-data-box" v-if="!state.gift_logs || state.gift_logs.length <= 0">
        <img class="none-data" src="/static/images/none-data.png" alt srcset>
        <p class="none-data-tip">亲，你还没有获得奖励呢</p>
      </div>
      <div class="data-box" v-else>
        <div class="title-wrapper">
          <div class="title-line"></div>
          <div class="title-name">领奖记录</div>
          <div class="title-line"></div>
        </div>

        <div class="rank-items">
          <scroll-view class="scroll-view" scroll-y>
            <div class="rank-item" v-for="(item,index) in state.gift_logs" :key="index">
              <div class="rank-item-box">
                <div class="rank-item-time">{{item.receive_time}}</div>
                <div class="rank-item-btn">
                  <div class="rank-item-name">{{item.prize_name}}</div>
                  <div v-if="item.trade_no" class="btn-get" :class="{ 'canot-btn-get': item.status == 1}" @click="getMoney(item)">{{item.status == 1 ? '已领取' : '领取'}}</div>
                </div>
              </div>
              <div class="h-line"></div>
            </div>
          </scroll-view>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-tip">
        <p>实物奖励需要到欧尚Style APP</p>
        <p>完善相关资料后，奖品才会邮寄到您手中</p>
      </div>
    </div>
    <com-tabbar></com-tabbar>
    <dial-all></dial-all>
  </div>
</template> 

<script>
import DialAll from './../../components/dial-all'
import ComHeader from './../../components/com-header'
import ComTabbar from './../../components/com-tabbar'
export default {
  components: {
    DialAll,
    comheader: ComHeader,
    ComTabbar
  },
  computed: {
    state () {
      return this.$store.state
    }
  },
  onShow () {
    this.$store.dispatch('getGiftLog')
  },
  methods: {
    async getMoney (item) {
      if (item.status === 0) {
        var result = await this.$api.getMoney({
          trade_no: item.trade_no
        })

        if (result.err_code === 0 || result.err_code === '0') {
          item.status = 1
        } else {
          this.$util.catchError(result.err_msg)
        }
      }
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
.container-gift {
  width c(750)
  height 100%
  display flex
  flex-direction column
  background #ffffff
  .content {
    flex 1
    display flex
    justify-content center
    align-items center
    background #ffffff
    .none-data-box {
      display flex
      flex-direction column
      justify-content center
      align-items center
    }
    .none-data {
      cwh(156, 169)
    }
    .none-data-tip {
      padding-top c(30)
      font-size c(36)
      color #333333
    }
    .data-box {
      height 100%
      display flex
      flex-direction column
    }
    .title-wrapper {
      display flex
      justify-content space-between
      align-items center
      cwh(690, 40)
      padding-top c(50)
    }
    .title-line {
      cwh(230, 0)
      border-bottom c(1) solid #40a46f
    }
    .title-name {
      font-size c(30)
      color #40a46f
    }
    .rank-items {
      flex 1
      font-size c(34)
      color #010101
      overflow-y auto
      .rank-item {
        width 100%
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        // border-bottom c(0.1) solid #d5d5d5
      }
      .rank-item-box {
        display flex
        width 100% - c(10)
        height c(88)
        padding 0 c(10)
        justify-content space-between
        align-items center
        box-sizing content-box
      }
    }
  }
  .scroll-view {
    height 100%
  }
  .footer {
    width 100%
    height c(210)
    background #ffffff
    display flex
    flex-direction column
    justify-content center
    align-items center
    .btn-back {
      font-size c(36)
      color #ee7d32
      padding-bottom c(20)
    }
    .footer-tip {
      text-align center
      font-size c(24)
      line-height 1.5
      color #666666
    }
  }
}
.tabbar {
  display flex
  justify-content center
  align-items center
  cwh(750, 95)
  background-color #f3f3f3
  box-shadow c(0) c(1) c(18) c(0) rgba(0, 0, 0, 0.14)
  margin-bottom c(-2px)
  > div {
    flex 1
    font-size c(20)
    line-height 1.5
    text-align center
    height  c(95)
    display flex
    flex-direction column
    justify-content center
    align-items center
    color: #757575;
  }
  .actived{
    color #ffffff
    background #ee7d32
  }
  .tabbar-icon1{
    cwh(36,32)
  }

  .tabbar-icon2{
    cwh(36,35)
  }


  .tabbar-icon3{
    cwh(32,32)
  }
}
.rank-item-btn{
  display flex
  align-items center
  .btn-get{
    width c(120)
    margin-left c(10)
    padding c(5) c(0)
    text-align center
    border c(1) solid #40a46f
    border-radius c(20)
    color #40a46f
    &.canot-btn-get{
      color #a1a1a1
      border none
    }
  }
}
</style>
