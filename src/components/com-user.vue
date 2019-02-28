<template>
  <div class="com-user">
    <img class="avaster" src="/static/images/header.png" alt srcset mode="aspectFill">
    <div class="nickname">许许杨许杨许杨许杨许杨杨</div>
  </div>
</template>

<style lang="stylus">
c(x) {
  (((x / 2))) px
}
cwh(x, y) {
  width x == 0 ? auto : ((((x / 2)))) px
  height (y / 2) px
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
</style>

