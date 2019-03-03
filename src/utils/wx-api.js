let wxApi = {}

/**
 * 登录
 */
wxApi.login = function () {
  return new Promise((resolve, reject) => {
    wx.login({
      complete (res) {
        if (res.code) {
          resolve(res.code)
        } else {
          reject(new Error('获取CODE失败'))
        }
      }
    })
  })
}

wxApi.checkSession = function () {
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success () {
        resolve(true)
      },
      fail () {
        resolve(false)
      }
    })
  })
}

/**
 * 获取微信步数
 */
wxApi.getWeRunData = function () {
  return new Promise((resolve, reject) => {
    wx.getWeRunData({
      complete (res) {
        if (res.encryptedData) {
          resolve(res)
        } else {
          reject(new Error('获取运动数据失败'))
        }
      }
    })
  })
}

export default wxApi
