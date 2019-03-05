
<template>
  <div class="com-dial dial-zhandian" catchtouchmove="true">
    <div class="com-dial-box">
      <div class="header">
        <div>{{getters.zhandian.name}}</div>
      </div>
      <div class="content">
          <img class="banner" :src="getters.zhandian_pic" alt="" srcset="">
         <div class="title">
            <div class="title-line"></div>
            <div class="title-name">站点介绍</div>
            <div class="title-line"></div>
          </div>
        <div class="detail">
          {{getters.zhandian.detail}}
        </div>
        <div class="jiangli" v-if="getters.zhandian.prize_name">
          站点奖励
          <div v-for="(item,index) of getters.zhandian.prize_name" :key="index" >{{item}}</div>
          <!-- <div>剩余XXX份，加油冲鸭</div> -->
        </div>
      </div>
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  id: 5,
  methods: {
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
.dial-zhandian {
  .content {
    flex-direction column
    border-bottom-left-radius c(20)
    border-bottom-right-radius c(20)
    padding-bottom c(40)
  }

  .banner{
    cwh(453,230)
    padding-top c(30)
  }
  .title {
    display flex
    justify-content space-between
    align-items center
    cwh(450, 40)
    padding-top c(50)
  }
  .title-line {
    cwh(140, 0)
    border-bottom c(1) solid #ededed
  }
  .title-name {
    font-size c(30)
    color #333333
  }

  .detail{
    font-size c(24)
    padding c(40)
  }

  .jiangli{
    font-size c(30)
    font-weight 800
    padding 0 c(40) c(40) c(40)
    color #45ab75
    text-align center
  }
}
</style>

