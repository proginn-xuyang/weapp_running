
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
            <div class="table-item" v-for="(item, index) in getters.all_step" :key="index">
              <div class="wrapper">
                <div class="time">
                  <span>2018.02.23</span>
                  <span>12:30:22</span>
                </div>
                <div class="type">
                  好友赠送
                </div>
                <div class="steps">
                  +1000
                </div>
              </div>
              <div class="h-line"></div>
            </div>
        </scroll-view>
      </div>  
      <div class="btns">btn</div>
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comdial',
  methods: {
    closeDial () {
      this.$store.commit('toggleDial')
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
    display flex
    flex-direction column
    // max-height c(400)
    height c(400)
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
  }

  .table-item{
      width c(491)
      height c(67)
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

