<template>
  <div class="com-header">
    <img class="header-img" src="/static/images/home-bg.png" alt srcset mode="widthFix">
    <img class="abs logo" src="/static/images/logo.png" alt srcset>
  </div>
</template>

<script>
export default {
  name: 'com-header'
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
  width x == 0 ? auto : ((((x / 2)))) px
  height (y / 2) px
}
.com-header {
  width 100%
  height c(130)
  overflow hidden
  .header-img {
    cwh(750, 130)
  }
}
</style>

