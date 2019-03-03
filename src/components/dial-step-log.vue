
<template>
  <div class="com-dial dial-step-log">
    <div class="com-dial-box">
      <div class="header">
        <div>步数增减明细</div>
      </div>
      <div class="content">
        <div class="table-header">
            <div>时间</div>
            <div>类型</div>
            <div>变动值</div>
        </div>
        <scroll-view class="table-items">
            <div class="table-item" v-for="(item, index) in state.all_step_logs" :key="index">
              <div class="wrapper">
                <div class="time">
                  {{item.record_time}}
                </div>
                <div class="type">
                  {{
                    item.type === 1 ? '运动步数' : 
                    item.type === 2 ? '获赠步数' : 
                    item.type === 3 ? '捐赠步数' : 
                    item.type === 4 ? '兑换步数' :  '放弃兑换奖励步数'
                  }}
                </div>
                <div class="steps">
                  {{item.step}}步
                </div>
              </div>
              <div class="h-line"></div>
            </div>
        </scroll-view>
      </div>  
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  id: 1,
  methods: {
    onShow () {
      this.$store.dispatch('getGiftLog')
    },
    closeDial () {
      this.$store.commit('closeDial')
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
  (((x / 2)) px)
}
ptl(x, y) {
  left (x / 2) px
  top (y / 2) px
}
cwh(x, y) {
  width x == 0 ? auto : (((x / 2))) px
  height (y / 2) px
}

.dial-step-log{
  .content {
    flex-direction column
    height c(485)
    border-bottom-left-radius c(20)
    border-bottom-right-radius c(20)
  }
  .table-header{
    margin-top c(24)
    cwh(491, 61)
    background-color: #41a570;
    font-size: c(24);
    color: #ffffff;
    display flex
    align-items center
    > div{
      flex 1
      text-align center
    }
  }

  .table-items{
    overflow-y auto
    flex 1
    width c(491)
    font-size: c(24);
    color: #ffffff;
    display flex
    flex-direction column
    justify-content  flex-start
    align-items flex-start
    padding-bottom c(30)
  }

  .table-item{
      width c(491)
      height c(90)
      text-align center
      color: #000000;
      display flex
      flex-direction column
      align-items center
      text-align center
      display flex
      .wrapper{
        width 100%
        padding c(10) 0
        display flex
        justify-content center
        align-items center
        > div{
          flex 1
        }
      }
      .time{
        display flex
        flex-direction column
      }
  }
}

</style>

