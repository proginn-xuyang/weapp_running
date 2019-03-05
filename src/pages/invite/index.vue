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
              <div :class="{'actived' : select_option === 1}" @click="select_option = 1;steps=1000">1000</div>
              <div :class="{'actived' : select_option === 2}" @click="select_option = 2;steps=2000">2000</div>
              <div :class="{'actived' : select_option >= 3}" @click="select_option = 3;steps=3000">3000</div>
            </div>
            <div class="detail-box">
              <div class="detail-box-count">
                <div>赠送</div>
                <div class="detail-box-content">{{steps}}</div>
                <div>步</div>
              </div>
              <div class="detail-box-left" v-if="(state.userinfo.today_step - steps) >= 0">
                <div>剩余可赠送</div>
                <div class="count">{{state.userinfo.today_step - steps}}步</div>
              </div>
              <div class="detail-box-left" v-else>
                <div>赠送的步数不足</div>
              </div>
            </div>
          </div>
          <div class="btns" @click="clickDonateStep">
            <div class="btn">
              马上赠送
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
    this.openid = this.$root.$mp.query.openid
    // TODO:测试,自己进入跳转到主页
    // this.openid = 'okMDr4qlBPd5CFngyVmIJ7CBnmgA'
    // this.openid = 'okMDr4mFuAKaq78dNYhtsASCvKpo'
    if (!this.openid) {
      this.clickBackHome()
    }
  },
  async onShow () {
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
      this.select_option = Math.floor(parseInt(this.state.userinfo.today_step) / 1000)
    }, 1000)
  },
  data () {
    return {
      openid: '',
      select_option: 0,
      today_step: 0
    }
  },
  methods: {
    clickDonateStep () {
      this.$util.click(this.$util.constant.马上赠送, () => {
        this.$store.dispatch('donateStep', {
          openid: this.openid,
          step: this.steps
        })
      })
    },
    clickBackHome () {
      this.$util.click(this.$util.constant.我也要参加, () => {
        wx.redirectTo({
          url: '/pages/index/main'
        })
      })
    }
  },
  computed: {
    state () {
      return this.$store.state
    },
    steps () {
      if (this.select_option >= 3) {
        return 3000
      } else if (this.select_option >= 0) {
        return this.select_option * 1000
      } else {
        return 0
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
    width c(480)
    display flex
    justify-content space-between
    margin c(30)
    > div{
      cwh(144, 75)
      line-height c(75)
      border-radius: c(10);
      background-color: #ffffff;
      border: solid c(2) #3fa46f;
      color #3fa46f
      text-align: center
      &.actived{
        background-color: #3fa46f;
        border: solid c(2) #3fa46f;
        color #ffffff
      }
    }
  }

  .detail-box{
    width c(480)
    display flex
    justify-content space-between
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