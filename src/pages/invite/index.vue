<template>
  <div>
    <scroll-view class="container container-invite">
      <img class="abs home-bg" src="/static/images/home-bg.png" alt srcset mode="scaleToFill"></img>
      <img class="abs logo" src="/static/images/logo.png" alt="" srcset="">
      <img class="abs h-center banner" src="/static/images/banner.png" alt="" srcset="">

      <!-- 用户的步数情况 -->
      <com-userinfo-friend></com-userinfo-friend>

      <!-- 规则按键 -->
      <com-btn-rule></com-btn-rule>
      
      <!-- 赠送步数 -->
      <div class="abs h-center com-dial dial-invite">
        <div class="com-dial-box disable">
          <div class="header">
            <div>选择赠送的步数</div>
          </div>

          <div class="content">
            <div class="select-options">
              <div class="left" @click="addSteps(-1)">-</div>
              <div class="mid">
                <div class="abs show-count">{{steps}}步</div>
                <slider :value="steps" @changing="sliderChange" min="1" max="3000" style="width:100%"/>
              </div>
              <div class="right" @click="addSteps(1)">+</div>
            </div>
          </div>

          <div class="btns" @click="clickDonateStep">
            <div class="btn">
              马上赠送（{{stepsShow}}）
            </div>
          </div>
        </div>
      </div>

      <!-- 参与游戏 -->
      <div class="abs h-center invite-box" @click="clickBackHome">
        <img class="btn-join" src="/static/images/btn-join.png" alt srcset mode="scaleToFill">
      </div>
    </scroll-view>
    <dial-all></dial-all>
    <dial-custom></dial-custom>
  </div>
</template>

<script>
import DialAll from './../../components/dial-all'
import DialCustom from './../../components/dial-custom'
import ComUserinfoFriend from './../../components/com-userinfo-friend'
import ComBtnRule from './../../components/com-btn-rule'
import { setTimeout } from 'timers'
export default {
  components: {
    DialAll,
    DialCustom,
    ComUserinfoFriend,
    ComBtnRule
  },
  async onLoad () {
    console.log('onLoad')
    this.openid = this.$root.$mp.query.openid
    this.source = this.$root.$mp.query.source
    if (this.source) {
      this.$store.commit('setSource', this.source)
    }
    // TODO:测试,自己进入跳转到主页
    // this.openid = 'okMDr4qlBPd5CFngyVmIJ7CBnmgA'
    if (!this.openid || this.openid === this.$store.state.userinfo.openid) {
    // if (!this.openid) {
      this.clickBackHome()
    }
  },
  async onShow () {
    console.log('onShow')

    if (!this.openid) {
      return
    }
    await this.$store.dispatch('login')
    await this.$store.dispatch('getWeRunData')
    await this.$store.dispatch('getFriendUserinfo', {
      friend: this.openid
    })

    // TODO:BUG
    setTimeout(() => {
      // this.select_option = Math.floor(parseInt(this.state.userinfo.today_step) / 1000)
      this.steps = this.state.userinfo.today_step > 3000 ? 3000 : this.state.userinfo.today_step
    }, 1000)
  },
  data () {
    return {
      openid: '',
      select_option: 0,
      today_step: 0,
      steps: 0
    }
  },
  methods: {
    addSteps (i) {
      console.log(i)
      this.steps += i
      if (this.steps < 0) {
        this.steps = 0
      } else if (this.steps > 3000) {
        this.steps = 3000
      }
    },
    clickDonateStep () {
      if ((this.state.userinfo.today_step - this.steps) > 0) {
        this.$util.click(this.$util.constant.马上赠送, () => {
          this.$store.dispatch('donateStep', {
            openid: this.openid,
            step: this.steps
          })
        })
      } else {
        this.$util.catchError('您的步数不足')
      }
    },
    clickBackHome () {
      this.$util.click(this.$util.constant.我也要参加, () => {
        wx.redirectTo({
          url: '/pages/index/main'
        })
      })
    },
    sliderChange (e) {
      console.log(e.mp.detail.value)
      this.steps = e.mp.detail.value
    }
  },
  computed: {
    state () {
      return this.$store.state
    },
    stepsShow () {
      // if (this.select_option >= 3) {
      //   return 3000
      // } else if (this.select_option >= 0) {
      //   return this.select_option * 1000
      // } else {
      //   return 0
      // }

      if ((this.state.userinfo.today_step - this.steps) >= 0) {
        return '剩余可赠送' + (this.state.userinfo.today_step - this.steps)
      } else {
        return '赠送的步数不足'
      }
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
.container-invite {
  width c(750)
  height c(1669)
  background #025527
  display flex
  flex-direction column
  justify-content flex-start
  align-items center

  .home-bg{
    cwh(750, 1669)
  }

  .banner{
    cwh(668, 231)
    top c(136)
  }

  .rule-box {
    top c(412)
    cwh(160, 68)
    right 0
    .btn-rule {
      cwh(160, 68)
    }
  }

  .dial-invite{
    z-index 0
    top c(925)
    bottom unset
    position absolute
    background unset

    w = 660
    .header {
        width c(w)
    }

    .content {
      width c(w)
      flex-direction column
    }

    .btns {
      width c(w)
    }
  }

  .invite-box {
    top c(1479)
    cwh(664, 113)
    .btn-join {
      cwh(664, 113)
    }
  }

  .select-options{
    padding-top c(30)
    width c(480)
    display flex
    justify-content space-between
    margin c(30)
    > div{
      // cwh(144, 75)
      // line-height c(75)
      // border-radius: c(10);
      // background-color: #ffffff;
     
      box-sizing border-box
      color #3fa46f
      text-align: center
      &.actived{
        background-color: #3fa46f;
        border: solid c(2) #3fa46f;
        color #ffffff
      }
    }

    display flex
    justify-content center
    align-items center

    .left{
      cwh(50, 50)
      line-height c(48)
      border-radius c(24)
      display flex
      justify-content center
      align-items center
      border: solid c(1) #3fa46f;
    }

    .right{
      cwh(50, 50)
      line-height c(48)
      border-radius c(24)
      display flex
      justify-content center
      align-items center
      border: solid c(1) #3fa46f;
    }

    .mid{
      flex 1
      display flex
      justify-content center
      align-items center

      position relative
    }

    .show-count{
      top c(-40)
    }
  }

  .detail-box{
    width c(480)
    display flex
    justify-content center
    align-items center
  }

  .detail-box-count{
    display flex
    justify-content space-around
    align-items center
    cwh(287, 79)
    font-size: c(26);
    background-color: #ffd262;
    border-radius: c(10);

    .detail-box-content{
      cwh(126, 47)
      line-height c(47)
      text-align center
      background-color: #ffffff;
      border-radius: c(10);
    }
  }

  .detail-box-left{
    cwh(185, 79)
    display flex
    flex-direction column
    justify-content center
    align-items center

    border-radius: c(10);
    border: solid c(3) #ffd262;
    font-size: c(20);
    .count{
      color: #3fa46e;
    }
  }
}
</style> 