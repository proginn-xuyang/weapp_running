<template>
  <div class="com-dial">
    <div class="header">
     header
    </div>
    <div class="content" >
      content
    </div>
  </div>
</template>

<script>
export default {
  name: 'com-dial',
  props: ['header', 'content']
}
</script>

<style lang="stylus">
c(x) {
 ((x / 2) px)
}
ptl(x, y) {
  left (x / 2) px
  top (y / 2) px
}
cwh(x, y) {
  width  x == 0 ? auto : (x / 2) px
  height (y / 2) px
}

.com-dial{
  position absolute
  cwh(540, 0)
  .header{
    cwh(724, 110)
    background-image: linear-gradient(90deg, #85f5bc 1%, #3ea26d 100%), linear-gradient(#000000, #000000);}
}
</style>

