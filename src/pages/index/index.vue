<template>
  <div class="container container-wrapper">
    <div class="scroll-wrapper">
        <scroll-view class="container-index">
        <img class="abs home-bg" src="/static/images/home-bg.png" alt srcset mode="scaleToFill"></img>
        <img class="abs logo" src="/static/images/logo.png" alt="" srcset="">
        <img class="abs h-center banner" src="/static/images/banner.png" alt="" srcset="">

        <!-- 用户的步数情况 -->
        <com-userinfo :isOwner="true"></com-userinfo>

        <!-- 加速按键 -->
        <com-btn-jiasu></com-btn-jiasu>

        <!-- 规则按键 -->
        <com-btn-rule></com-btn-rule>

        <!-- 邀请好友 -->
        <!-- <div class="abs h-center invite-box" @click="clickDial">
          <img class="btn-invite" src="/static/images/btn-invite.png" alt srcset mode="scaleToFill">
          <button class="btn" open-type="share"></button>
        </div> -->

        <button class="abs h-center invite-box" open-type="share">
          <img class="btn-invite" src="/static/images/btn-invite.png" alt srcset mode="scaleToFill">
        </button>

        <!-- 里程 -->
        <div class="abs h-center licheng">
          <img class="licheng-logo" src="/static/images/licheng-logo.png" alt mode="scaleToFill">
          <div class="licheng-tip1">
            离下一个里程碑还差
            <span class="licheng-left-count">{{getters.left_all_step}}KM</span>
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
            <p>已达{{state.userinfo.total_step}}步</p>
          </div>

          <div class="h-center licheng-map">
            <div class="abs h-center licheng-map-steps normal"></div>
            <div class="abs h-center licheng-map-steps steps">
              <div class="abs licheng-map-steps progress" :style="{'width': getters.progress + '%'}"></div>
              <div class="abs h-center step-box">
                <div class="licheng-map-step" :class="{'actived': (state.userinfo.total_step  / state.step_to_mi) >= getters.key_zhandians[i >= 4 ? 4 : i].step}"  v-for="i in 5" :key="i">
                </div>
              </div>
            </div>

            <div class="licheng-map-infos">
              <div class="licheng-map-info" v-for="(item, index) in getters.key_zhandians" :key="index">
                <div class="address">{{item.name}}</div>
                <div class="distance">{{item.step === 0 ? '起点' : (item.step / 1000) + 'KM'}}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 站点 -->
        <div class="abs h-center zhandian">
          <img class="zhandian-map" src="/static/images/zhandian.png" alt srcset mode="scaleToFill">

          <div class="abs zhandian-step" :class="'zhandian-step' + (i+2) " v-for="i in 11" :key="i">
            <img class="address-small-icon"  src="/static/images/address-small-icon1.png" alt mode="scaleToFill" v-if="(state.userinfo.total_step / state.step_to_mi) > state.zhandians[(i+1)  >= 11 ? 11 : (i+1) ].step">
            <img class="address-small-icon"  src="/static/images/address-small-icon0.png" alt mode="scaleToFill" v-else>
          </div>

          <div class="abs zhandian-view" :class="'zhandian-view' + (i+1) " v-for="i in 12" :key="i" @click="clickZhanInfo(i)">
          </div>

          <div class="abs address-tip address-tip2" :class="'dazhandian-tip' + (i+2) " v-for="i in 4" :key="i">
            已领取奖品
          </div>
        </div>
      </scroll-view>
    </div>
    <com-tabbar></com-tabbar>
    <div :class="{'loading': loading}"></div>
    <dial-all></dial-all>
    <!-- <dial-auth></dial-auth> -->
    <!-- <dial-gift-money v-if="state.userinfo.phone && state.userinfo.user && getters.guafen.is_has_prize"></dial-gift-money> -->
    <button v-if="!state.userinfo.phone && state.userinfo.user" class="abs h-center v-center getPhoneNumber" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"></button>
    <button v-if="!state.userinfo.user" class="abs h-center v-center getUserInfo" open-type="getUserInfo" @getuserinfo="getUserInfo"></button>
    <!-- <dial-dealer></dial-dealer> -->
    <dial-mid-pointer></dial-mid-pointer>
  </div>
 
</template>

<script>
import DialAll from './../../components/dial-all'
import DialAuth from './../../components/dial-auth'
import DialGiftMoney from './../../components/dial-gift-money'
import DialMidPointer from './../../components/dial-mid-pointer'
import DialDealer from './../../components/dial-dealer'
import ComUserinfo from './../../components/com-userinfo'
import ComBtnJiasu from './../../components/com-btn-jiasu'
import ComBtnRule from './../../components/com-btn-rule'
import ComTabbar from './../../components/com-tabbar'
export default {
  components: {
    DialAll,
    DialAuth,
    DialGiftMoney,
    DialMidPointer,
    DialDealer,
    ComUserinfo,
    ComBtnJiasu,
    ComBtnRule,
    ComTabbar
  },
  data () {
    return {
      loading: true,
      zhandian: [{ name: '', distancs: '' }]
    }
  },
  onShow () {
    this.loading = true
    wx.showLoading({
      title: '加载中'
    })

    setTimeout(() => {
      this.loading = false
      wx.hideLoading()
    }, 1000)
  },
  onShareAppMessage (res) {
    if (res.from === 'button') {
      console.log('来自页面内转发按钮')
    }
    return {
      title: '还差几步我就能获得红包啦，求赠送~',
      path: `/pages/invite/main?openid=${this.state.userinfo.openid}`
    }
  },
  methods: {
    /**
     * 获取手机号
     */
    async getPhoneNumber (e) {
      await this.$store.dispatch('getPhoneNumber', e)
    },
    /**
     * 获取用户信息
     */
    async getUserInfo (e) {
      await this.$store.dispatch('getUserInfo', e)
    },
    clickZhanInfo (i) {
      this.$store.commit('openDialZhanDianInfo', i)
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

.getPhoneNumber{
  z-index 10000
  background rgba(0,0,0,0.6)
}

.getUserInfo{
  z-index 10000
  background rgba(0,0,0,0.6)
}

.container-wrapper{
  width 100%
  height 100%

  display flex
  flex-direction column
}

.scroll-wrapper{
  flex 1
  overflow-y auto
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

.fixed{
  position fixed
  top 0
  bottom 0
  left 0
  right 0
}

.home-bg{
  cwh(750, 1677)
}

.banner{
  cwh(668, 231)
  top c(136)
}

.invite-box {
  top c(890)
  background transparent
  border none
  cwh(720, 113)
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
        top c(-6)
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

.zhandian-view{
  background rgba(0,0,0,0.5);
  cwh(175,100)
}

.zhandian-view1{
  ptl(135, 0)
}

.zhandian-view2{
  ptl(276, 113)
}

.zhandian-view3{
  ptl(497, 131)
}

.zhandian-view4{
  ptl(350, 377)
}

.zhandian-view5{
  ptl(510, 583)
}

.zhandian-view6{
  ptl(27, 376)
}

.zhandian-view7{
  ptl(175, 641)
}

.zhandian-view8{
  ptl(320, 911)
}

.zhandian-view9{
  ptl(529, 692)
}

.zhandian-view10{
  ptl(508, 1132)
}

.zhandian-view11{
  ptl(17, 932)
}

.zhandian-view12{
  ptl(200, 1214)
}

.loading{
  position absolute 
  top 0
  bottom 0
  left 0
  right 0
  // background rgba(255,255,255, 0.8)
}
</style> 