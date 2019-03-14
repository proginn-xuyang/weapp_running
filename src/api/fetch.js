
// import toast from './../utils/msg'
import $store from './../store'

export default function (url, data, msg) {
  // url = 'http://rap2api.taobao.org/app/mock/160507' + url
  url = 'https://oschongma.e2capp.com' + url
  var promise = new Promise((resolve, reject) => {
    var postData = data || {}
    if (postData.custom_loading_tip) {
      wx.showToast({
        title: postData.custom_loading_tip,
        icon: 'loading'
      })
    }

    var token = wx.getStorageSync('token')
    // console.log('postData', postData)
    // token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvcGVuaWQiOiJva01EcjRyWG8tUHpXTmNfT2kxc0lhdUZqczZNIiwiZXhwIjoxNTUyMDMyMTEwNjAxfQ.MjJeP6CcA4314l_je2o8_1kmNzH7UtAUi3kAtmrum4o'
    // postData = Object.assign(postData, {
    //   is_test: 1
    // })

    // 网络请求
    wx.request({
      url: url,
      data: postData,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'token': token
      },

      success: function (res) { // 服务器返回数据
        resolve(res.data)
      },
      error: function (e) {
        reject(e)
      },
      complete: async function (res) {
        if (res.data.err_code === '001') {
          wx.setStorageSync('token', '')
          await $store.dispatch('login')
          await $store.dispatch('getWeRunData')
        }
        wx.hideLoading()
      }
    })
  })
  return promise
}
