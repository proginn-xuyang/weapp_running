// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    dial: {
      is_show: 0
    },
    // 排行榜列表
    rank: {
      type: 0
    },
    /**
     * 奖品列表
     */
    gift: {
    },

    /**
     * 步数记录
     */
    steps: [{
      time: '2018.02.23 12:30:22',
      type: '好友赠送',
      step: 100
    }],

    /**
     * 用户信息
     */
    userinfo: {
      nickname: '草摩雨大战咸蛋超人',
      avaster: '/static/images/header.png'
    },
    /**
     * 每天的瓜分数据
     */
    guafen: {
      is_has_prize: 0, // 是否获得奖品
      money: 1.98, // 奖金额度
      time: '2019-3-2' // 获奖时间
    },
    /**
     * 终点
     */
    end_pointer: {
      is_has_prize: 1, // 0表示没有奖品，1表示有奖品
      rank: 1, // 终点排名
      gift_name: '欧尚车模', // 获得奖品的名称
      is_get_prize: 0 // 0表示没有领取奖品，1表示已经领取奖品
    },
    /**
     * 站点
     */
    mid_pointer: {
      is_has_prize: 0, // 0表示没有奖品，1表示有奖品
      rank: 123, // 到达本站的名次
      pointer_name: '江北石子山体育公园站', // 站点名称
      gift_name: '2.88元红包', // 本站奖品
      next_pointer_gift_name: '欧尚车模',
      free_step: 100 // 放弃本站奖品获得的步数
    },
    /**
     * 需要依次打开的对话框
     */
    dials: [

    ]
  },
  getters: {
    /**
     * 排行榜的类型
     * @param {*} state
     */
    rank_type (state) {
      if (state.rank.type === 0) {
        return '今日排行榜'
      } else {
        return '里程排行榜'
      }
    },
    /**
     * 步数获得记录
     * @param {*} state
     */
    all_step (state) {
      var items = []
      // TODO:
      for (let item of state.steps) {
        for (let i = 0; i < 10; i++) {
          items.push(item)
        }
      }
      return items
    },
    /**
     * 好友赠送的记录
     * @param {*} state
     */
    friend_step (state) {
      var items = []
      // TODO:
      for (let item of state.steps) {
        for (let i = 0; i < 10; i++) {
          items.push(item)
        }
      }
      return items
    }
  },
  mutations: {
    toggleDial (state) {
      state.dial.is_show ^= 1
    },
    toggleRankType (state) {
      state.rank.type ^= 1
    },
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  }
})

export default store
