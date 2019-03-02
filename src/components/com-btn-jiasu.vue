<template>
  <div class="abs com-btn-jiasu-box" @click="clickHandle">
        <img class="btn-jiasu" src="/static/images/btn-jiasu.png" alt srcset>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandle () {
      this.$util.click(this.$util.constant.我要加速, async () => {
        await this.$store.dispatch('jiasu')
      })
    }
  }
}
</script>

<style lang="stylus">
c(x) {
 ((x / 2) px)
}
cwh(x, y) {
  width  x == 0 ? auto : (x / 2) px
  height (y / 2) px
}
.com-btn-jiasu-box {
  top c(412)
  cwh(160, 68)
  left 0
  .btn-jiasu {
    cwh(160, 68)
  }
}
</style>

