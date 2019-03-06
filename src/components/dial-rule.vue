
<template>
  <div class="com-dial dial-rule">
    <div class="com-dial-box">
      <div class="header">
        <img class="rule-title" src="/static/images/rule-title.png" alt="" srcset="" mode="aspectFill">
      </div>
      <div class="content">
        <div class="content-wrapper">
        活动时间：3月6日-3月20日，据说阳春三月，最适合健走。
        <div class="title">活动规则</div>
        1、每天健走就能获得奖励，个人健走步数上限20000步！每10000步=1KM，如提前下载并注册欧尚style App，每日签到后就能获得1.5倍加速。<br/>
        2、除自己健走产生步数外，你还可以“找好友帮忙凑步数”，~每人每天最多获得10位好友赠送，每个好友每天最多赠送你3000步~要是你的10位好友每天都赠送3000步，那简直是躺赢啊~
        <div class="title">奖品说明</div>
        奖品1：天天参加，天天有奖！每天步数（含赠送）达成30000步，就能get“每日奖”，瓜分每日现金红包大奖！<br/>
        奖品2：5km站为订制速干运动T恤（500名），10km站为运动蓝牙耳机（300名），21km站为安德玛运动外套（10名），42.195km终点站为亚瑟士高端跑鞋（5名）和订制荣誉奖牌（200名）,先到先得！
        <div class="title">领奖方式</div>
        现金红包将于每晚22：00发放，直接以红包形式发送至获奖者微信；里程奖励需获奖者登录欧尚style App完善相关资料并领取奖品，承办方会在活动结束后30天之内寄出奖品
        </div>
        <div class="title">本次活动最终解释权归长安欧尚汽车所有</div>
      </div>
      <div class="btns">
        <div class="btn" @click="closeDial">知道了</div>
      </div>
      <div class="close"></div>
    </div>
  </div>
</template>

<script>
export default {
  id: 12,
  methods: {
    closeDial () {
      this.$store.commit('closeDial')
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
.dial-rule {
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
  .header{
    cwh(660, 150)
  }
  .content {
    width c(660)
    flex-direction column
    font-size c(30)
    text-align center
    max-height c(600)
    overflow auto
    display block
  }
  .content-wrapper{
    width c(580)
    height  100%
    margin auto
    padding c(20) 0
    text-align left
    font-size c(24)
    line-height 1.5
  }
  .title {
    font-size c(24)
    font-weight 800
    color: #3ea26d;
  }

  .btns {
    cwh(660, 160)
  }

  .rule-title{
    cwh(523, 97)
  }
}
</style>

