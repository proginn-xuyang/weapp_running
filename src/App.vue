<script>
export default {
  async onShow () {
    var stateStr = wx.getStorageSync('state')
    if (stateStr) {
      this.$store.commit('reset', JSON.parse(stateStr))
    }
    await this.$store.dispatch('login')
    await this.$store.dispatch('getWeRunData')
  }
}
</script>

<style lang="stylus">
@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

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
page, container {
  padding 0px
  margin 0px
}
.container {
  width 100%
  height 100%
}

.scroll-view{
  height 100%
}
  
page {
  padding 0px
  margin 0px
  background #025527
  width 100%
  height 100%
}
.abs {
  position absolute
}
.h-center {
  left 0
  right 0
  margin auto
}
.v-center {
  top 0
  bottom 0
  margin auto
}
.logo {
  cwh(455, 33)
  ptl(22, 68)
}
.h-line {
  width 100%
  height c(1)
  border none
  border-bottom c(1) solid #c5c5c5
  transform scaleY(0.5)
  transform-origin 0 0
}

// 对话框模块
.com-dial {
  position fixed
  z-index 100000
  top 0
  bottom 0
  left 0
  right 0
  margin auto
  background rgba(0, 0, 0, 0.8)
  display flex
  justify-content center
  align-items center

  .com-dial-box{
    animation-name: fadeInDown;
    animation-duration: 1s;
    animation-fill-mode: both;
    &.disable{
      animation-name: unset;
    }
  }

  .header {
    cwh(540, 110)
    display flex
    justify-content center
    align-items center
    margin auto
    background-image linear-gradient(90deg, #85f5bc 1%, #3ea26d 100%), linear-gradient(#000000, #000000)
    border-top-left-radius c(20)
    border-top-right-radius c(20)
    font-size c(38)
    font-weight 800
    color #ffffff
  }

  .content {
    width c(540)
    display flex
    justify-content center
    align-items center
    margin c(-1) auto auto auto
    background #ffffff
  }

  .btns {
    cwh(540, 160)
    display flex
    justify-content center
    align-items center
    margin auto
    background #ffffff
    margin c(-1) auto auto auto
    border-bottom-left-radius c(20)
    border-bottom-right-radius c(20)
    .btn {
      cwh(400, 68)
      background-image linear-gradient(
        90deg,
        #ef8b3b 0%,
        #fbd565 100%
      ), linear-gradient(
        90deg,
        #bccbf9 0%,
        #26c1db 100%
      )
      background-blend-mode normal, normal
      border-radius c(34)
      font-size c(26)
      color #ffffff
      line-height c(68)
      text-align center
    }
  }

  .close {
    height c(160)
    display flex
    justify-content center
    align-items center
    .btn-close {
      cwh(71, 71)
    }
  }
}

.com-user {
  flex 1
  display flex
  justify-content flex-start
  align-items center
  .avaster{
    cwh(46,46)
    border-radius c(46 / 2)
  }
  .nickname {
    flex 1
    padding-left c(5)
    font-size c(26)
    color #010101
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    max-width c(150)
  }
}

button::after{
  border:none;
}

input{
  outline:none;
  border:none;
  list-style: none;
}

</style>

