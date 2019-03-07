<template>
  <div class="container container-rank">
    <comheader></comheader>
    <div class="btns">
      <div class="btn btn-left" :class="{'actived': state.rank_type === 0}" @click="toggleRankType">今日排行榜</div>
      <div class="btn btn-right" :class="{'actived': state.rank_type === 1}" @click="toggleRankType">里程排行榜</div>
    </div>
    <div class="content">
      <div class="none-data-box" v-if="false">
        <img class="none-data" src="/static/images/none-data.png" alt srcset>
        <p class="none-data-tip">排行榜暂无数据</p>
      </div>
      <div class="data-box">
        <div class="title">
          <div class="title-line"></div>
          <div class="title-name">{{getters.rank_type}}</div>
          <div class="title-line"></div>
        </div>

        <div class="my-rank">
          <div class="rank-items">
            <div class="userinfo">
              <img class="avaster" :src="state.userinfo.avatarUrl" alt="" srcset="" mode="aspectFill">
              <div class="userinfo-defail">
                <div>{{state.userinfo.nickName}}</div>
                <div>
                    {{!state.rank_type ? state.rank_today_count : state.rank_all_count}}名
                </div>
              </div>
            </div>
            <div class="steps" v-if="!state.rank_type">
              {{state.userinfo.today_step}}步 
            </div>
            <div class="steps" v-else>
              <div> {{state.userinfo.total_step_km}}KM</div>
              <div class="steps-total"> {{state.userinfo.total_step}}步 </div>
            </div>
          </div>
        </div>

        <div class="rank-items">
          <scroll-view
            class="scroll-view"
            scroll-y
          >
            <div class="rank-item" v-for="(item, index) in getters.ranks" :key="index">
              <div class="rank-item-box">
                <div class="rank-item-num">
                  <div :class="{'actived': index < 3}">{{index + 1}}</div>
                </div>
                <div class="rank-item-user">
                  <img class="avaster" lazy-load="true" :src="item.avatarUrl" alt="" srcset="" mode="aspectFill">
                  <div class="nickname">{{item.nickName}}</div>
                </div>
                <div class="rank-item-step" v-if="!state.rank_type">
                    <div> {{item.step}}步</div>
                </div>
                <div class="rank-item-step" v-else>
                  <div>{{item.step_km}}KM</div>
                  <div>{{item.step}}步</div>
                </div>
              </div>
              <div class="h-line"></div>
            </div>
          </scroll-view>
        </div>
      </div>
    </div>
    <com-tabbar></com-tabbar>
  </div>
</template> 

<script>
import ComHeader from './../../components/com-header'
import ComTabbar from './../../components/com-tabbar'
export default {
  components: {
    comheader: ComHeader,
    ComTabbar
  },
  onShow () {
    this.$store.dispatch('getRank')
  },
  computed: {
    state () {
      return this.$store.state
    },
    getters () {
      return this.$store.getters
    }
  },
  methods: {
    btnBackHome () {
      wx.navigateTo({
        url: '/pages/index/main',
        complete: () => {
        }
      })
    },
    toggleRankType () {
      this.$store.commit('toggleRankType')
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
.container-rank {
  width c(750)
  height 100%
  display flex
  flex-direction column
  background #ffffff

  .btns {
    cwh(676, 70)
    margin c(30) auto
    background #ffffff
    border-radius c(35)
    // border solid c(1) #eaeaea
    display flex
    box-sizing border-box

    .btn-left {
      border-top-left-radius c(35)
      border-bottom-left-radius c(35)
    }
    .btn-right {
      border-top-right-radius c(35)
      border-bottom-right-radius c(35)
    }
    .btn {
      flex 1
      font-size c(30)
      line-height c(70)
      text-align center
      box-sizing border-box
      border solid c(1) #eaeaea
      &.actived {
        color #40a46f
        background #def1e7
        border solid c(1) #40a46f
        font-weight 800
      }
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
    .data-box {
      height 100%
      display flex
      flex-direction column
    }
    .title {
      display flex
      justify-content space-between
      align-items center
      cwh(660, 40)
      margin-bottom c(30)
      margin-left auto 
      margin-right auto
    }
    .title-line {
      cwh(230, 0)
      border-bottom c(1) solid #40a46f
    }
    .title-name {
      font-size c(30)
      color #40a46f
    }
    .rank-items {
      width c(660)
      margin auto
      flex 1
      font-size c(34)
      color #010101
      overflow-y auto
      .rank-item {
        width 100%
        display flex
        flex-direction column
        justify-content space-between
        align-items center
        // border-bottom c(0.1) solid #d5d5d5
      }
      .rank-item-box {
        display flex
        width 100% - c(10)
        height c(160)
        padding 0 c(10)
        justify-content space-between
        align-items center
        box-sizing content-box
      }
      .rank-item-num{
        width c(170)
        margin-left c(-15)
        text-align center
        display flex
        justify-content center
        align-items center
        .actived{
          cwh(50,50)
	        background-color: #ef8b3b;
          border-radius c(50/2)
          color #ffffff
        }
      }
      .rank-item-user{
        flex 1
        display flex
        justify-content flex-start
        align-items center
        .nickname{
          flex 1
          padding-left c(15)
          font-size: c(26);
          color: #010101; 
        }
      }
      .rank-item-step{
        width c(170)
        font-size c(36)
        text-align right
        > div:nth-of-type(2){
          font-size c(20)
          color #40a46f
        }
      }
    }
  }

  .my-rank{
    cwh(750, 154)
	  background-color: #def1e7;
    .rank-items{
      cwh(660, 154)
      margin auto
      display flex
      justify-content space-between
      align-items center
    }

    .userinfo{
      display flex
      justify-content center
      align-items center
      .avaster{
        cwh(104,104)
        border-radius c(104/2)
        margin-right c(25)
      }

      .userinfo-detail{
        display flex
        flex-direction column
        justify-content center
        align-items center
        font-size c(26)
      }
    }

    .steps{
      font-size c(36)
      margin-right c(15)
      text-align right
      .steps-total{
        font-size c(20)
        color #40a46f
      }
    }
  }

 .avaster{
    cwh(80,80)
    border-radius c(40)
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
