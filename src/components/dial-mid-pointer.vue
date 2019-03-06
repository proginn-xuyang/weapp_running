
<template>
  <div class="com-dial dial-mid-pointer" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
          <div>恭喜你抵达</div>
          <div>{{getters.mid_pointer.pointer_name}}</div>
      </div>
      <div class="content">
        <div class="content-header">
          <div>
            <div class="prize">{{getters.mid_pointer.gift_name}}</div>
            <div class="tip">本站奖励</div>
          </div>
          <img class="arrow" src="/static/images/arrow.png" alt="" srcset="" mode="aspectFill">
          <div>
            <div class="prize">{{getters.mid_pointer.next_pointer_gift_name}}</div>
            <div class="tip">下一站奖励</div>
          </div>
        </div>

        <div class="h-line"></div>
      
        <div v-if="getters.mid_pointer.is_has_prize">
          <div class="rank">作为本站前{{getters.mid_pointer.arrive}}名冲线者</div>
          <div class="select-tip">您可以选择：</div>
          <div class="select-option" :class="{'actived': !option}" @click="option = 0">
            <p>1、领取奖励，但活动需返回上一站点继续开始</p>
          </div>
          <div class="select-option" :class="{'actived': option}" @click="option = 1">
            <p>2、继续前进，并获得一定的步数奖励</p>
          </div>
        </div>
        <div v-else>
          <div class="rank">您是本站{{getters.mid_pointer.arrive}}名达到的用户</div>
          <div class="select-tip">该站点的奖励名额已经领取完毕</div>
        </div>
      </div>
      <div class="btns">
        <div class="btn" @click="openDial"> {{getters.mid_pointer.is_has_prize ? '考虑好了吗？请选择！':  '知道了，冲刺下一站'}}</div>
      </div>
      <div class="close">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  id: 4,
  data () {
    return {
      option: 0
    }
  },
  methods: {
    openDial () {
      if (this.option === 0) {
        this.$store.commit('openDial', 7)
      } else {
        this.$store.commit('openDial', 6)
      }
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
.dial-mid-pointer {
  .header {
    width (540)
    height auto
    display flex
    flex-direction column
    justify-content center
    align-items center
    margin auto
    padding c(10) 0
    font-size c(38)
    font-weight 800
    color #ffffff
  }
  .content {
    max-height c(500)
    flex-direction column
    font-size c(30)
    .h-line{
      width c(430)
    }

    .rank{
      width: c(430);
      font-size: c(28);
      color: #333333;
      text-align left
      margin c(30) auto c(5) auto
    }

    .select-tip{
      width: c(430);
      font-size: c(28);
      color: #999999;
      text-align left
      margin c(5) auto c(10) auto

    }
    .select-option{
      display flex
      justify-content center
      align-items center
      cwh(345, 83)
      background-color: #ffffff;
      border-radius: c(20);
      border: solid c(2) #3fa46f;

      padding 0 c(30) 0 c(60)
      margin c(10) auto
      font-size: c(24);
      color: #333333;
      text-indent c(-30)


      &.actived{
        background-color: #40a46f;
        border: solid c(2) #3fa46f;
        color: #ffffff;
      }
    }
  }
  .content-header{
    width c(430)
    height c(145)
    display flex
    justify-content space-around
    align-items center
    .prize{
      color: #f06b00;
      font-size c(24)
    }
    .arrow{
      cwh(42,30)
    }
    .tip{
      font-size c(30)
    }
  }

  .btns {
    .btn{
      cwh(430,68)
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

