<template>
  <!-- <div class="circle-outer">
    <div class="circle-inner"></div>
  </div>-->
  <div class="container container-index">
    <img class="abs home-bg" src="/static/images/home-bg.png" alt srcset mode="scaleToFill"></img>
 
    <img class="abs logo" src="/static/images/logo.png" alt="" srcset="">

    <img class="abs h-center banner" src="/static/images/banner.png" alt="" srcset="">
    <!-- 步数 -->
    <div class="abs summary">
      <div class="summary-detail">
        <div class="summary-title">今日步数</div>
        <div class="summary-today-total-count">16050</div>
        <div class="summary-today-left-count">离每日红包还差5000步</div>
        <div class="btn-log">
          <span>获赠记录></span>
        </div>
      </div>
      <img src="/static/images/home-summary.png" alt srcset class="summary-bg" mode="scaleToFill">
    </div>

    <div class="abs jiasu-box">
      <img class="btn-jiasu" src="/static/images/btn-jiasu.png" alt srcset>
    </div>

    <div class="abs rule-box">
      <img class="btn-rule" src="/static/images/btn-rule.png" alt srcset>
    </div>

    <!-- 邀请好友 -->
    <div class="abs invite-box">
      <img class="btn-invite" src="/static/images/btn-invite.png" alt srcset mode="scaleToFill">
    </div>

    <!-- 里程 -->
    <div class="abs licheng">
      <img class="licheng-logo" src="/static/images/licheng-logo.png" alt mode="scaleToFill">
      <div class="licheng-tip1">
        离下一个里程碑还差
        <span class="licheng-left-count">4KM</span>
      </div>

      <div class="licheng-tip2">每日红包收益将直接存入微信零钱账户</div>

      <div class="licheng-total-count">
        <img
          class="licheng-address-icon"
          src="/static/images/licheng-address-icon.png"
          alt
          srcset
          mode="scaleToFill"
        >
        <p>已达50000步</p>
      </div>

      <div class="h-center licheng-map">
        <div class="abs h-center licheng-map-steps normal"></div>
        <div class="abs h-center licheng-map-steps steps">
          <div class="abs licheng-map-steps progress"></div>
          <div class="abs h-center step-box">
            <div class="licheng-map-step actived"></div>
            <div class="licheng-map-step actived"></div>
            <div class="licheng-map-step actived"></div>
            <div class="licheng-map-step"></div>
            <div class="licheng-map-step"></div>
          </div>
        </div>

        <div class="licheng-map-infos">
          <div class="licheng-map-info">
            <div class="address">南滨公园</div>
            <div class="distance">起点</div>
          </div>
          <div class="licheng-map-info">
            <div class="address">洪崖洞</div>
            <div class="distance">5KM</div>
          </div>
          <div class="licheng-map-info">
            <div class="address">李子坝</div>
            <div class="distance">10KM</div>
          </div>
          <div class="licheng-map-info">
            <div class="address">磁器口</div>
            <div class="distance">45KM</div>
          </div>
          <div class="licheng-map-info">
            <div class="address">欧尚X-house</div>
            <div class="distance">46KM</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 站点 -->
    <div class="abs zhandian">
      <img class="zhandian-map" src="/static/images/zhandian.png" alt srcset mode="scaleToFill">

      <div class="abs zhandian-step" :class="'zhandian-step' + (i+2) " v-for="i in 11" :key="i">
        <img class="address-small-icon" src="/static/images/address-small-icon0.png" alt mode="scaleToFill" >
      </div>

      <div class="abs address-tip address-tip1" :class="'dazhandian-tip' + (i+2) " v-for="i in 4" :key="i">
        已领取奖品
      </div>


     
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      zhandian: [{ name: '', distancs: '' }]
    }
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
  },

  computed: {
    state () {
      return this.$store.state
    }
  }
}
</script>

<style lang="stylus" scoped>
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
.container-index {
  width c(750)
  height c(3113)
  background #025527
  display flex
  flex-direction column
  justify-content flex-start
  align-items center
}

.home-bg{
  cwh(750, 1677)
}

.logo{
  cwh(455, 33)
  ptl(22, 68)
}

.banner{
  cwh(660, 225)
  top c(136)
}

.jiasu-box {
  top c(412)
  cwh(160, 68)
  left 0
  .btn-jiasu {
    cwh(160, 68)
  }
}
.rule-box {
  top c(412)
  cwh(160, 68)
  right 0
  .btn-rule {
    cwh(160, 68)
  }
}
.summary {
  top c(379)
  width c(750)
  height c(699)
  display flex
  flex-direction column
  justify-content center
  align-items center
  .summary-detail {
    width c(442)
    height c(442)
    background #ffffff
    border-radius c((442 / 2))
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin-top c(-200)
  }
  .summary-bg {
    width c(750)
    height c(699)
    position absolute
    top 0
  }
  .summary-title {
    font-size c(36)
    font-weight 800
    line-height 1.5
    letter-spacing c(4)
    color #007e38
  }
  .summary-today-total-count {
    font-size c(115)
    font-weight 800
    color #ed7d32
  }
  .summary-today-left-count {
    font-size c(26)
    color #7cc39b
    margin-bottom c(24)
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
.invite-box {
  top c(890)
  cwh(664, 113)
  .btn-invite {
    cwh(664, 113)
  }
}
.licheng {
  top c(1046)
  cwh(660, 462)
  background-color #ffffff
  border-radius c(20)
  display flex
  flex-direction column
  align-items center
  .licheng-logo {
    cwh(78, 78)
    margin c(30) auto
  }
  .licheng-tip1 {
    font-size c(36)
    color #373737
    font-weight 800
  }
  .licheng-left-count {
    font-size c(36)
    color #36c375
    font-weight 800
  }
  .licheng-tip2 {
    font-size c(22)
    color #999999
    margin c(22) auto
  }
  .licheng-total-count {
    cwh(200, 50)
    display flex
    justify-content center
    align-items center
    p {
      font-size c(22)
      color #333333
      margin-left c(10)
    }
  }
  .licheng-address-icon {
    cwh(35, 43)
  }
  .licheng-map {
    cwh(660, 80)
  }
  .licheng-map-steps {
    cwh(608, 13)
    border-radius c((13 / 2))
    .licheng-map-step {
      cwh(21, 21)
      border-radius c((21 / 2))
      background-color #e6e6e6
      &.actived {
        background-color #f1b143
        border solid c(4) #ffffff
        border-radius c((30 / 2))
        // box-sizing border-box;
      }
      &:nth-of-type(4) {
        margin-right c(60)
      }
    }
    &.normal {
      background-color #e6e6e6
    }
    &.progress {
      left 0
      background-image linear-gradient(90deg, #85f5bc 1%, #3ea26d 100%), linear-gradient(#e6e6e6, #e6e6e6)
      width 60%
    }
    &.steps {
      .step-box {
        top c(-8)
        display flex
        justify-content space-between
        align-items center
      }
    }
  }
  .licheng-map-infos {
    margin-top c(50)
    display flex
    justify-content space-between
    align-items center
    cwh(640, 13)
    .licheng-map-info {
      // width c(200)
      .address {
        font-size c(20)
        color #333333
        text-align center
      }
      .distance {
        font-size c(18)
        color #999999
        text-align center
      }
      &:nth-of-type(1) {
        margin-left c(10)
      }
      &:nth-of-type(5) {
        .address {
          color #3ea26d
        }
      }
    }
  }
}
.zhandian {
  top c(1564)
  cwh(706, 1408)
}
.zhandian-map {
  cwh(706, 1408)
}
.zhandian-step2 {
  ptl(245, 215)
}
.zhandian-step3 {
  ptl(450, 225)
}
.zhandian-step4 {
  ptl(549, 427)
}
.zhandian-step5 {
  ptl(475, 597)
}
.zhandian-step6 {
  ptl(216, 439)
}
.zhandian-step7 {
  ptl(138, 728)
}
.zhandian-step8 {
  ptl(287, 915)
}
.zhandian-step9 {
  ptl(481, 755)
}
.zhandian-step10 {
  ptl(470, 1151)
}
.zhandian-step11 {
  ptl(208, 1031)
}
.zhandian-step12 {
  ptl(121, 1233)
}

.dazhandian-tip2{
  ptl(603, 249)
}

.dazhandian-tip3{
  ptl(0, 491)
}

.dazhandian-tip4{
  ptl(629, 803)
}

.dazhandian-tip5{
  ptl(316, 1382)
}

.address-small-icon {
  cwh(20, 34)
}

.address-big-icon {
  cwh(40, 56)
}

.address-tip{
  cwh(96, 26)
	border-radius: c(13)
  font-size: c(17);
  color: #ffffff;
  text-align center
  line-height c(26)
}
.address-tip0{
	background-color: #939393;
}

.address-tip1{
	background-color: #2bd46e;
}

.address-tip2{
 	background-color: #ee7d32;
}
</style>



  