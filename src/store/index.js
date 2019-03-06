import Vue from 'vue'
import Vuex from 'vuex'
import $util from './../utils'
import $api from './../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    source: '通用入口',
    step_to_mi: 10,
    game_today_step: 30000,
    /**
     * 每天目标步数
     */
    target_step: 30000,
    /**
     *  显示的对话框ID
     */
    dial_id: 0,
    /**
     * 菜单Tab的ID
     */
    tab_id: 1,
    /**
     * 用户信息
     */
    userinfo: {
      token: '',
      openid: '',
      today_step: '...', // 当前的步数
      total_step: '...', // 总的步数

      can_auth_werundata: 1, // 是否授权获取步数 0 否 1 是
      can_gufen: 0,

      user: 0, // 是否已添加用户微信信息 0 否 1 是
      phone: 0, // 是否已获取手机号 0 否 1 是

      nickname: '',
      avaster: ''
    },
    /**
     * 好友信息
     */
    friend_userinfo: {
      openid: '',
      today_step: '...',
      total_step: '...',
      avasterUrl: '',
      nickName: '欧尚铁粉'
    },
    // 排行榜类型
    rank_type: 0,
    /**
     * 当天排行榜
     */
    rank_today: [],
    /**
     * 当前的排名
     */
    rank_today_count: '...',
    /**
     * 当天排行榜榜最近一次获取时间
     */
    rank_today_last_time: 0,
    /**
     * 总排行榜
     */
    rank_all: [],
    /**
     * 当前的总排行
     */
    rank_all_count: '...',
    /**
     * 总排行榜最近一次获取时间
     */
    rank_all_last_time: 0,
    /**
     * 奖品列表
     */
    gift_logs: [],
    /**
     * 所有步数记录
     */
    all_step_logs: [],
    /**
     * 朋友赠送步数记录
     */
    friend_step_logs: [],
    /**
     * 站点信息
     */
    sites: [
    ],
    zhandians: [
      {
        id: 1,
        name: '南滨公园',
        detail: '重庆南滨海棠公园位于南岸区南滨路沿长江一侧，是一个开放式带状公园。公园分成187道路景观、六大主题景区、180景区连接段景观三大部分，园内现有全国最大的浮雕及最长的音乐灯饰。公园以绿色为生命、以文化为灵魂、以灯饰为特色，建成具有历史文化、巴渝文化特色的新型滨江公园。',
        step: 0
      },
      {
        id: 2,
        name: '长江索道',
        detail: '重庆长江索道全长1166米，连通重庆市的渝中区和南岸区，往返于渝中区和南岸区，已经运行30年，被誉为“万里长江第一条空中走廊”和“山城空中公共汽车”。 横跨长江，慢悠悠，晃荡荡，这是解读重庆“立体交通”与“山城外型符号”的最佳方式。',
        step: 2000
      }, {
        id: 3,
        name: '洪崖洞',
        detail: '洪崖洞，原名洪崖门，是古重庆城门之一，位于重庆市渝中区解放碑沧白路，地处长江、嘉陵江两江交汇的滨江地带，是兼具观光旅游、休闲度假等功能的旅游区  。以其巴渝传统建筑和民俗风貌特色而被评为国家AAAA级旅游景区。主要景点由吊脚楼、仿古商业街等景观组成，因形似电影《千与千寻》场景，而成为重庆网红打卡景点。',
        step: 5000,
        prize_name: ['订制速干运动T恤 500件']
      }, {
        id: 4,
        name: '大剧院',
        detail: '重庆大剧院位于重庆市江北区，是集歌剧、戏剧、音乐会演出，文化艺术交流，多功能为一体的大型社会文化设施。外观呈现“玻璃房子”，晶莹剔透，引人注目；可同时容纳3000多人，正厅和两层楼座的观众都拥有极优的舞台视线，内部音效有很强的实际演出效果，不用话筒就可使全场观众听到完美音效。目前已成功举办了《猫》、《大河之舞》、《歌舞青春》等众多演出。',
        step: 6500
      }, {
        id: 5,
        name: '曾家岩',
        detail: '曾家岩又称“周公馆”，位于渝中区中山四路，是当年中共南方局在市内的一个主要办公地点。1958年它和沙坪坝区红岩村13号中共中央南方局、八路军驻重庆办事处一起被列红岩革命纪念馆的组成部分，1961年成为全国重点文物保护单位。',
        step: 9000
      }, {
        id: 6,
        name: '李子坝',
        detail: '李子坝轻轨站位于嘉陵江畔的李子坝正街39号商住楼6-7层，其实它并非真正意义上的景点，但是因其“空中列车穿楼而过”成为蜚声中外的“网红车站”，吸引了广大有游客前来观光，大多数时候路过都能看到有人拿着手机在驻足拍摄，网红景点名不虚传。',
        step: 10000,
        prize_name: ['运动蓝牙耳机 300个'],
        left_count: 300
      }, {
        id: 7,
        name: '鹅岭二厂',
        detail: '鹅岭二厂是“重庆印制二厂”的简称，民国时期的“中央银行印钞厂”。随着时代的发展，印制二厂逐渐没落，中央银行也只剩旧址。念旧的重庆人民对它进行了改造和重建，在保留原有工业的基础上，增添了新潮的设计元素，改造后的鹅岭二厂充满工业和文艺气息，极具网红特质，吸引了大批美食、手工店、咖啡馆等的入驻，成为了不少摄影者、市民前往观光游览的打卡圣地。',
        step: 13000
      }, {
        id: 8,
        name: '重庆红岩革命纪念馆',
        detail: '红岩革命纪念馆，位于重庆市嘉陵江畔，与红岩村13 号、曾家岩50 号、桂园、《新华日报》旧址毗邻，它们都是抗日战争时期中共中央南方局的活动基地，是我党在国民党统治区巩固和发展抗日民族统一战线、领导人民群众进行革命斗争的中心。因业绩卓著，故设馆加以纪念。',
        step: 16000
      }, {
        id: 9,
        name: '磁器口',
        detail: '位于重庆沙坪坝区，每个城市都有一条主打当地美食的商业街，北京的王府井，成都的宽窄巷子，武汉的户部巷，重庆的磁器口也是这样的存在。磁器口古镇的主路两侧是各种摊贩店铺，人流拥挤嘈杂，也许很难感受到古老重庆的感觉。但深入其中，或转入旁边的小巷中，会探索它清净，古色古香的另一面；除了古老蜿蜒的石板路阶梯，老一辈重庆人真实生活展现在眼前。',
        step: 21000,
        prize_name: ['安德玛运动外套 10套']
      }, {
        id: 10,
        name: '石子山体育公园',
        detail: '北部新区中央有一条小山脉，呈东西走向，曲折蜿蜒，起伏平缓，有良好的天然植被，呈现出鲜明的丘陵山地自然风光——这就是照母山。历史对照母山特别偏爱，千百年的时光披沙拣金，在照母山沉淀：南宋状元冯时行曾在此结庐照母，明清时期牌坊在此完整保存，清润甘甜的孝母泉在此流淌。',
        step: 40000
      }, {
        id: 11,
        name: '照母山森林公园',
        detail: '重庆南滨海棠公园位于南岸区南滨路沿长江一侧，是一个开放式带状公园。公园分成187道路景观、六大主题景区、180景区连接段景观三大部分，园内现有全国最大的浮雕及最长的音乐灯饰。公园以绿色为生命、以文化为灵魂、以灯饰为特色，建成具有历史文化、巴渝文化特色的新型滨江公园。',
        step: 41000
      },
      {
        id: 12,
        name: '欧尚x-house',
        detail: 'X-House是欧尚汽车新零售模式线下的新型渠道之一，致力于提升欧尚汽车品牌形象，增强品牌溢价能力，具有车辆快保、养护等功能，同时也是品牌体验中心，将全方位打造客户生态圈。',
        step: 42195,
        prize_name: ['亚瑟士高端跑鞋 5双', '订制荣誉奖牌 200个']
      }
    ],
    /**
     * 预览的站点ID
     */
    zhandian_id: -1,
    /**
     * 每天瓜分数据
     */
    guafens: [],
    /**
     * 终点
     */
    end_pointer: {
      is_has_prize: 1, // 0表示没有奖品，1表示有奖品
      rank: 1, // 终点排名
      pointer_name: '终点站', // 站点名称
      gift_name: '欧尚车模', // 获得奖品的名称
      is_get_prize: 0 // 0表示没有领取奖品，1表示已经领取奖品
    },
    /**
     * 错误信息
     */
    err_msg: ''
  },
  getters: {
    me_circle1 (state) {
      if (!state.userinfo) {
        return 0
      }
      var c1 = (state.userinfo.today_step / state.game_today_step * 280) >= 180 ? 180 : (state.userinfo.today_step / state.game_today_step * 280)
      return c1
    },
    me_circle2 (state, getters) {
      if (!state.userinfo) {
        return 0
      }
      if (getters.me_circle1 === 180) {
        return (state.userinfo.today_step / state.game_today_step * 280) >= 280 ? 180 : (state.userinfo.today_step / state.game_today_step * 280 - 180)
      } else {
        return 0
      }
    },
    /**
     * 排行榜的类型
     * @param {*} state
     */
    rank_type (state) {
      if (state.rank_type === 0) {
        return '今日排行榜'
      } else {
        return '里程排行榜'
      }
    },
    /**
     * 排行榜数据
     * @param {*} state
     */
    ranks (state) {
      if (state.rank_type === 0) {
        return state.rank_today
      } else {
        return state.rank_all
      }
    },
    /**
     * 今日剩余步数
     * @param {*} state
     */
    left_step (state) {
      return state.target_step - state.userinfo.today_step
    },
    /**
     * 达到下一站的步数
     * @param {*} state
     */
    left_all_step (state, getters) {
      var miles = state.userinfo.total_step / state.step_to_mi
      var result = ''
      for (let i = 0; i < getters.key_zhandians.length - 1; i++) {
        const curr = getters.key_zhandians[i]
        const next = getters.key_zhandians[i + 1]
        if (miles >= curr.step && miles < next.step) {
          result = ((next.step - miles) / 1000).toFixed(2)
          break
        }
      }
      if (!result) { return '...' }
      return result
    },
    /**
     * 当前进度
     * @param {*} state
     */
    progress (state, getters) {
      var result = 0
      var percent = [22.64, 45.28, 67.92, 100]
      let miles = state.userinfo.total_step / state.step_to_mi

      if (miles < getters.key_zhandians[1].step) {
        let duanMiles = miles
        result = percent[0] * (duanMiles / getters.key_zhandians[1].step)
      } else if (miles < getters.key_zhandians[2].step) {
        let duanMiles = miles - getters.key_zhandians[1].step
        result = percent[0] + (percent[1] - percent[0]) * (duanMiles / (getters.key_zhandians[2].step - getters.key_zhandians[1].step))
      } else if (miles < getters.key_zhandians[3].step) {
        let duanMiles = miles - getters.key_zhandians[2].step
        result = percent[1] + (percent[2] - percent[1]) * (duanMiles / (getters.key_zhandians[3].step - getters.key_zhandians[2].step))
      } else if (miles < getters.key_zhandians[4].step) {
        let duanMiles = miles - getters.key_zhandians[3].step
        result = percent[2] + (percent[3] - percent[2]) * (duanMiles / (getters.key_zhandians[4].step - getters.key_zhandians[3].step))
      } else {
        result = 100
      }

      if (result >= 100) {
        return 100
      } else {
        return result
      }
    },
    /**
     * 地图上我的位置
     */
    locaiton (state) {
      var miles = state.userinfo.total_step / state.step_to_mi

      var next
      for (let i = 0; i < state.zhandians.length; i++) {
        var curr = state.zhandians[i]

        if ((i + 1) >= state.zhandians.length) {
          next = null
        } else {
          next = state.zhandians[i + 1]
        }

        if (miles > curr.step - 500 && miles <= curr.step + 500) {
          return i * 2 + 1
        } else {
          if (next == null) {
            if (miles > curr.step) {
              return 23
            } else {
              return 22
            }
          } else {
            if (miles > curr.step && miles <= next.step) {
              return (i + 1) * 2
            }
          }
        }
      }
    },
    /**
     * 好友剩余步数
     * @param {*} state
     */
    friend_left_step (state) {
      if (state.friend_userinfo.today_step === '...') {
        return '...'
      } else {
        return state.target_step - state.friend_userinfo.today_step
      }
    },
    /**
     * 获取站点信息
     */
    zhandian (state) {
      console.log('state.zhandians[state.zhandian_id]', state.zhandians[state.zhandian_id])
      return state.zhandians[state.zhandian_id]
    },
    zhandian_pic (state, getters) {
      // return getters.zhandian && '/static/images/' + getters.zhandian.name + '.jpg'
      return getters.zhandian && 'https://oschongma.e2capp.com/web-images/' + getters.zhandian.name + '.jpg'
    },
    /**
     * 关键站点
     */
    key_zhandians (state) {
      var site = []
      site.push(Object.assign(state.zhandians[0], {status: state.sites.length > 0 && state.sites[0].status}))
      site.push(Object.assign(state.zhandians[2], {status: state.sites.length > 0 && state.sites[1].status}))
      site.push(Object.assign(state.zhandians[5], {status: state.sites.length > 0 && state.sites[2].status}))
      site.push(Object.assign(state.zhandians[8], {status: state.sites.length > 0 && state.sites[3].status}))
      site.push(Object.assign(state.zhandians[11], {status: state.sites.length > 0 && state.sites[4].status}))
      console.log('key_zhandians', site)
      return site
    },
    /**
     * 每天的瓜分数据
     */
    guafen (state) {
      console.log('----guafen---')
      console.log(state.guafens)
      console.log('----guafen---')
      var len = state.guafens.length
      if (len > 0) {
        var obj = state.guafens[len - 1]
        obj.receive_time = obj.receive_time.split(' ')[0]

        var guafenItem = state.guafens[len - 1]
        console.log('----guafen---')
        console.log(guafenItem)
        console.log('----guafen---')
        return guafenItem
      }

      return {
        tips: -1, //  没有中奖记录
        money: '...', // 奖金额度
        time: '...' // 获奖时间
      }
    },
    /**
     * 中间站点
     * @param {*} state
     */
    mid_pointer (state) {
      let lastItem = null
      for (let i = state.sites.length - 1; i >= 0; --i) {
        const item = state.sites[i]
        if (item.status === 1) {
          // this.commit('setSiteCode', item.site_code)
          state.site_code = item.code
          console.log('lastItem', lastItem)
          return {
            is_has_prize: item.prize_surplus > 0, // 0表示没有奖品，1表示有奖品
            arrive: item.arrive + 1, // 到达本站的名次
            pointer_name: item.name, // 站点名称
            gift_name: item.prize_name, // 本站奖品
            next_pointer_gift_name: lastItem ? lastItem.prize_name : '',
            free_step: item.prev_reward // 放弃本站奖品获得的步数
          }
        }
        lastItem = item
      }

      return null
    }
  },
  mutations: {
    setSource (state, payload) {
      state.source = payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    reset (state, payload) {
      state = Object.assign(state, payload)
    },
    /**
     * 关闭对话框
     * @param {*} state
     */
    closeDial (state) {
      state.dial_id = 0
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 关闭奖品
     * @param {*} state
     */
    closeGiftMoney (state) {
      for (var item of state.guafens) {
        item.tips = 1
      }
      wx.setStorageSync('state', JSON.stringify(state))
      state.dial_id = 17
    },
    closeNoGiftMoney (state) {
      for (var item of state.guafens) {
        item.tips = 1
      }
      state.dial_id = 0
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 打开对应ID的对话框
     * @param {*} state
     * @param {*} payload
     */
    openDial (state, payload) {
      state.dial_id = payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 打开对应站点ID的对话框
     * @param {*} state
     * @param {*} payload
     */
    openDialZhanDianInfo (state, payload) {
      state.dial_id = 14
      state.zhandian_id = payload - 1
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置用户信息
     * @param {*} state
     * @param {*} payload
     */
    setUserinfo (state, payload) {
      state.userinfo = Object.assign(state.userinfo, payload)
      if (payload.token) {
        wx.setStorageSync('token', payload.token)
      }
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置瓜分数据
     * @param {*} state
     * @param {*} payload
     */
    setGuaFens (state, payload) {
      if (payload) {
        if (payload.tips === 0) {
          state.guafens.push(Object.assign({is_has_prize: 1}, payload))
        } else if (payload.tips === 2) {
          state.guafens.push(Object.assign({is_has_prize: 0}, payload))
        }
      }
    },
    setSite (state, payload) {
      state.sites = payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 领取奖品，设置站点CODE
     * @param {*} state
     * @param {*} payload
     */
    setSiteCode (state, payload) {
      state.site_code = payload
      console.log('state.userinfo', payload)
    },
    resetSite (state, payload) {
      for (var item of state.sites) {
        if (state.site_code === item.code) {
          item.status = payload
        }
      }
      console.log('state.userinfo', payload)
    },
    /**
     * 设置今日排行榜
     * @param {*} state
     * @param {*} payload
     */
    setRankToday (state, payload) {
      state.rank_today = payload.rank
      state.rank_today_count = payload.cu_rnum
      state.userinfo.avatarUrl = payload.cu_avatarUrl
      state.userinfo.nickName = payload.cu_nickName
      state.rank_today_last_time = Date.now()
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置总排行榜
     * @param {*} state
     * @param {*} payload
     */
    setRankAll (state, payload) {
      if (!payload.rank) return

      var ranks = []
      for (var item of payload.rank) {
        ranks.push(Object.assign(item, {
          step_km: Math.round(item.step / 10000 * 100) / 100
        }))
      }
      state.rank_all = ranks
      state.rank_all_count = payload.cu_rnum
      state.userinfo.total_step = payload.cu_step
      state.userinfo.total_step_km = Math.round(payload.cu_step / 10000 * 100) / 100
      state.userinfo.avatarUrl = payload.cu_avatarUrl
      state.userinfo.nickName = payload.cu_nickName
      state.rank_all_last_time = Date.now()
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 更改排行榜的类型
     * @param {*} state
     */
    toggleRankType (state) {
      state.rank_type ^= 1
      this.dispatch('getRank')
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置奖品
     * @param {*} state
     */
    setGiftLog (state, payload) {
      state.gift_logs = payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置朋友助力的步数
     * @param {*} state
     */
    setFriendStepLogs (state, payload) {
      state.friend_step_logs = payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置所有的步数记录
     * @param {*} state
     */
    setAllStepLogs (state, payload) {
      state.all_step_logs = payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置捐赠步数
     * @param {*} state
     * @param {*} payload
     */
    setDonateStep (state, payload) {
      state.userinfo.today_step -= payload
      state.friend_userinfo.today_step += payload
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 设置好友的信息
     * @param {*} state
     * @param {*} payload
     */
    setFriendUserinfo (state, payload) {
      state.friend_userinfo = Object.assign(state.friend_userinfo, payload)
      wx.setStorageSync('state', JSON.stringify(state))
    },
    /**
     * 清空好友的信息
     * @param {*} state
     */
    clearFriendUserinfo (state) {
      state.friend_userinfo.nickName = '欧尚铁粉'
      state.friend_userinfo.avasterUrl = 'http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIV8NmLonFjTsMrSPbw3uV6SkcMibuVPUyW8T6RmX9hYGg4TA78FfYHbp44Fyben2nqe9jpRDeZrFg/64'
      state.friend_userinfo.today_step = '...'
      state.friend_userinfo.total_step = '...'
    },
    setTabId (state, payload) {
      state.tab_id = payload
      var url = ''
      if (state.tab_id === 1) {
        url = '/pages/index/main'
      } else if (state.tab_id === 2) {
        url = '/pages/gift/main'
      } else if (state.tab_id === 3) {
        url = '/pages/rank/main'
      }
      wx.setStorageSync('state', JSON.stringify(state))

      // eslint-disable-next-line
      var pages = getCurrentPages()
      if (pages) {
        console.log(pages)
        for (let i = pages.length; i >= 1; --i) {
          const p = pages[i - 1]
          if (('/' + p.route) === url) {
            console.log('i:', pages.length - i)
            wx.navigateBack({
              delta: pages.length - i
            })
            return
          }
        }
      }

      wx.navigateTo({url})
    },
    /**
     * 设置错误信息
     * @param {*} state
     * @param {*} payload
     */
    setErrorMsg (state, payload) {
      state.err_msg = payload.error
      state.dial_id = payload.dialId || 15
      wx.setStorageSync('state', JSON.stringify(state))
    }
  },
  actions: {
    /**
     * JSCODE登录
     * @param {*} store
     */
    async login (store) {
      try {
        var token = wx.getStorageSync('token')
        var valid = await $util.wxApi.checkSession()
        if (valid && token) return

        var code = await $util.wxApi.login()
        var result = await $api.login({ js_code: code })

        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setUserinfo', result)
        } else {
          $util.catchError('登录失败')
        }
      } catch (error) {
        $util.catchError('登录失败')
      }
    },
    /**
     * 获取手机号
     * @param {*} store
     * @param {*} payload
     */
    async getPhoneNumber (store, payload) {
      try {
        var result = await $api.getPhoneNumber({
          encryptedData: payload.mp.detail.encryptedData,
          iv: payload.mp.detail.iv
        })

        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setUserinfo', { phone: 1 })
        } else {
          $util.catchError('手机号获取失败')
        }
      } catch (error) {
        $util.catchError(error)
      }
    },
    /**
     * 获取用户信息
     * @param {*} store
     * @param {*} payload
     */
    async getUserInfo (store, payload) {
      try {
        var result = await $api.getUserInfo({
          nickName: payload.mp.detail.userInfo.nickName,
          avatarUrl: payload.mp.detail.userInfo.avatarUrl,
          source: store.state.source || '通用入口'
        })
        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setUserinfo', { user: 1 })
        } else {
          $util.catchError('获取头像失败')
        }
      } catch (error) {
        $util.catchError('获取头像失败')
      }
    },

    /**
     * 获取运动步数
     * @param {*} store
     */
    async getWeRunData (store) {
      try {
        var runData = await $util.wxApi.getWeRunData()
        var result = await $api.getWeRunData(runData)
        if (result.err_code === 0 || result.err_code === '0') {
          store.commit('setUserinfo', {
            today_step: result.today_step,
            total_step: result.total_step,
            phone: result.phone,
            user: result.user,
            can_auth_werundata: 0,
            openid: result.openid,
            nickName: result.nickName
          })
          store.commit('setSite', result.site)
          store.commit('setGuaFens', result.redpack)
        } else {
          $util.catchError('获取步数失败')
        }
      } catch (error) {
        store.commit('setUserinfo', {
          can_auth_werundata: 1
        })
      }
    },
    /**
     * 加速
     * @param {*} store
     */
    async jiasu (store) {
      let result = await $api.jiasu()
      if (result.err_code === 0 || result.err_code === '0') {
        if (result.register > 0) {
          this.commit('openDial', 8)
          this.commit('setUserinfo', {
            today_step: result.today_step,
            total_step: result.total_step
          })
        } else {
          this.commit('openDial', 9)
        }
      } else {
        $util.catchError('加速失败')
      }
    },
    /**
     * 获取排行榜
     * @param {*} store
     */
    async getRank (store) {
      var result
      if (store.state.rank_type === 0) {
        result = await $api.getRankToday()
        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setRankToday', result.data)
        } else {
          $util.catchError('获取今日排行榜失败')
        }
      } else {
        result = await $api.getRankAll()
        if (result.err_code === 0 || result.err_code === '0') {
          this.commit('setRankAll', result.data)
        } else {
          $util.catchError('获取总排行榜失败')
        }
      }
    },
    /**
     * 获取奖品记录
     * @param {*} store
     */
    async getGiftLog (store) {
      let result = await $api.getGiftLog()
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setGiftLog', result.data)
      } else {
        $util.catchError('获取中奖记录失败')
      }
    },
    /**
     * 获取我的步数记录
     * @param {*} store
     */
    async getAllStepLogs (store) {
      let result = await $api.getAllStepLogs({page: 0})
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setAllStepLogs', result.data)
        this.commit('setUserinfo', {
          total_step: result.total_step,
          today_step: result.today_step
        })
      } else {
        $util.catchError('获取步数记录失败')
      }
    },
    /**
     * 获取朋友赠送的步数记录
     * @param {*} store
     */
    async getFriendStepLogs (store) {
      let result = await $api.getFriendStepLogs()
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setFriendStepLogs', result.data)
        this.commit('setUserinfo', {
          total_step: result.total_step,
          today_step: result.today_step
        })
      } else {
        $util.catchError('获取好友赠送记录失败')
      }
    },

    /**
     * 赠送步数
     * @param {*} store
     */
    async donateStep (store, payload) {
      if (payload.step <= 0) {
        $util.catchError('请选择您赠送的步数')
        return
      }
      let result = await $api.donateStep(payload)
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setDonateStep', payload.step)
        $util.catchError('赠送成功')
      } else {
        // $util.catchError('赠送步数失败')
        $util.catchError(result.err_msg)
      }
    },

    /**
     * 获取好友信息
     * @param {*} store
     */
    async getFriendUserinfo (store, payload) {
      this.commit('clearFriendUserinfo')
      let result = await $api.getFriendStep(payload)
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setFriendUserinfo', result)
      } else {
        $util.catchError('获取好友信息失败')
      }
    },
    /**
     * 获取奖品
     * @param {*} store
     * @param {*} payload
     */
    async getPrize (store, payload) {
      let result = await $api.getPrize({
        site_code: store.state.site_code,
        status: payload
      })
      if (result.err_code === 0 || result.err_code === '0') {
        this.commit('setUserinfo', {
          today_step: store.state.userinfo.today_step + result.reward_step,
          total_step: result.total_step
        })

        // 领取成功后，把站点的状态设置为已经领取
        this.commit('resetSite', payload)
        this.commit('closeDial')
      } else {
        $util.catchError('获取奖品失败')
      }
    }

  }
})

export default store
