<template>
    <div class="com-tabbar">
      <div  :class="{'actived': state.tab_id === 1}" @click="navTab(1)">
        <div>
          <img class="tabbar-icon1" src="/static/images/menu-1-1.png" alt srcset v-if="state.tab_id === 1">
          <img class="tabbar-icon1" src="/static/images/menu-1-0.png" alt srcset v-else>
        </div>
        <div>首页</div>
      </div>
      <div  :class="{'actived': state.tab_id === 2}" @click="navTab(2)">
        <div>
          <img class="tabbar-icon2" src="/static/images/menu-2-1.png" alt srcset v-if="state.tab_id === 2">
          <img class="tabbar-icon2" src="/static/images/menu-2-0.png" alt srcset v-else>
        </div>
        <div>我的奖励</div>
      </div>
      <div  :class="{'actived': state.tab_id === 3}" @click="navTab(3)">
        <div>
          <img class="tabbar-icon3" src="/static/images/menu-3-1.png" alt srcset v-if="state.tab_id === 3">
          <img class="tabbar-icon3" src="/static/images/menu-3-0.png" alt srcset v-else>
        </div>
        <div>排行榜</div>
      </div>
    </div>
</template>


<script>
export default {
  computed: {
    state () {
      return this.$store.state
    }
  },
  methods: {
    navTab (tabId) {
      if (this.state.tab_id !== tabId) {
        this.$store.commit('setTabId', tabId)
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

.com-tabbar {
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
</style>

