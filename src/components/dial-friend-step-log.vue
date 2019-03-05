
<template>
  <div class="com-dial dial-friend-step-log">
    <div class="com-dial-box">
      <div class="header">
        <div>获赠记录</div>
      </div>
      <div class="content">
        <scroll-view class="table-items" v-if="!state.friend_step_logs && state.friend_step_logs.length > 0">
            <div class="table-item" v-for="(item, index) in state.friend_step_logs" :key="index">
              <div class="wrapper">
                <div class="com-user">
                  <img class="avaster" :src="item.avatarUrl" alt srcset mode="aspectFill">
                  <div class="nickname">{{item.nickName}}</div>
                </div>
                <div class="steps">
                  +{{item.step}}步
                </div>
              </div>
            </div>
        </scroll-view>
        <div class="none-data-box">
          <img class="none-data" src="/static/images/none-data.png" alt srcset>
          <p class="none-data-tip">亲，还没有好友给你赠送哦</p>
          <p class="none-data-tip">快去分享吧！</p>
        </div>
      </div>  
      <div class="close" @click="closeDial">
        <img class="btn-close" src="/static/images/btn-close.png" alt srcset mode="aspectFill">
      </div>
    </div>
  </div>
</template>

<script>
import ComUser from './com-user'
export default {
  id: 2,
  components: {
    ComUser
  },
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

.dial-friend-step-log{
  .content {
    flex-direction column
    height c(485)
    border-bottom-left-radius c(20)
    border-bottom-right-radius c(20)
  }

  .table-items{
    overflow-y auto
    cwh(320,400)
    font-size: c(24);
    color: #ffffff;
    display flex
    flex-direction column
    justify-content  flex-start
    align-items flex-start
    margin c(30)
    padding c(10) c(30) c(30) c(30)

   
    border 1px solid #28c1db
    border-radius c(20)
  }

  .table-item{
      width c(320)
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
        .steps{
          flex 1
          text-align right
        }
      }
      .time{
        display flex
        flex-direction column
      }
  }

  .none-data-box{
    display flex
    flex-direction column
    justify-content center
    align-items center
  }

  .none-data {
    cwh(156, 169)
  }
  .none-data-tip {
    padding-top c(30)
    font-size c(36)
    color #333333
  }
}

</style>

