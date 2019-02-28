<template>
  <div class="container container-gift">
    <div class="header">
      <img class="header-img" src="/static/images/home-bg.png" alt srcset mode="widthFix">
      <img class="abs logo" src="/static/images/logo.png" alt srcset>
    </div>
    <div class="content">
      <div class="none-data-box" v-if="false">
        <img class="none-data" src="/static/images/none-data.png" alt srcset>
        <p class="none-data-tip">亲，你还没有获得奖励呢</p>
      </div>
      <div class="data-box">
        <div class="title">
          <div class="title-line"></div>
          <div class="title-name">领奖记录</div>
          <div class="title-line"></div>
        </div>

        <div class="rank-items">
          <scroll-view class="scroll-view" @scrolltoupper="scrolltoupper" @scrolltolower="scrolltolower" scroll-y>
            <div class="rank-item" v-for="i in 20" :key="i">
              <div class="rank-item-box">
                <div class="rank-item-time">2019年3月10日</div>
                <div class="rank-item-name">{{i}}元</div>
              </div>
              <div class="h-line"></div>
            </div>
          </scroll-view>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="btn-back" @click="btnBackHome">返回首页>></div>
      <div class="footer-tip">
        <p>实物奖励需要到欧尚Style APP</p>
        <p>完善相关资料后，奖品才会邮寄到您手中</p>
      </div>
    </div>
  </div>
</template> 

<script>
// Use Vuex

export default {
  computed: {
    state () {
      return this.$store.state
    }
  },
  methods: {
    btnBackHome () {
      // wx.showModal({
      //   title: '提示',
      //   content: '这是一个模态弹窗',
      //   success (res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })

      // wx.showNavigationBarLoading()
      // setTimeout(() => {
      //       wx.hideLoading()
      //     }, 1000)
      wx.navigateTo({
        url: '/pages/index/main',
        complete: () => {
        }
      })
    },
    scrolltoupper () {
      console.log('scrolltoupper')
      // 加载最新的数据
    },
    scrolltolower () {
      // 加载更多
      console.log('scrolltolower')
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
.container-gift {
  width c(750)
  height 100%
  display flex
  flex-direction column
  background #ffffff
  .header {
    width 100%
    height c(130)
    overflow hidden
    .header-img {
      cwh(750, 130)
    }
  }
  .content {
    flex 1
    display flex
    justify-content center
    align-items center
    background #ffffff
    .none-data-box {
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

    .data-box{
      height 100%
      display flex
      flex-direction column
    }

    .title{
      display flex
      justify-content space-between
      align-items center
      cwh(690, 40)
      padding-top c(50)
    }

    .title-line{
      cwh(230, 0)  
      border-bottom c(1) solid #40a46f 
    }

    .title-name{
      font-size: c(30);
    	color: #40a46f
    }

    .rank-items{
      flex 1
      font-size: c(34);
	    color: #010101;
      overflow-y auto
      .rank-item{
        width 100%
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        // border-bottom c(0.1) solid #d5d5d5
      }

      .rank-item-box{
        display flex
        width 100% - c(10)
        height c(88)
        padding 0 c(10) 
        justify-content space-between
        align-items center
        box-sizing content-box
      }
    }
  }

  .scroll-view{
    height 100%
  }

  .footer {
    width 100%
    height c(210)
    background #ffffff
    display flex
    flex-direction column
    justify-content center
    align-items center
    .btn-back {
      font-size c(36)
      color #ee7d32
      padding-bottom c(20)
    }
    .footer-tip {
      text-align center
      font-size c(24)
      line-height 1.5
      color #666666
    }
  }
}
</style>
