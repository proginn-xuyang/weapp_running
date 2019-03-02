<template>
  <div class="abs com-btn-rule-box" @click="clickHandle">
      <img class="btn-rule" src="/static/images/btn-rule.png" alt srcset>
  </div>
</template>

<script>
export default {
  methods: {
    clickHandle () {
      this.$util.click(this.$util.constant.活动规则, async () => {
        await this.$store.commit('openDial', this.$util.constant.DialRule)
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

.com-btn-rule-box {
  top c(412)
  cwh(160, 68)
  right 0
  .btn-rule {
    cwh(160, 68)
  }
}
</style>

