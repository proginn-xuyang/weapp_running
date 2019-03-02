
// import toast from './../utils/msg'

export default function (url, data, msg) {
  url = 'http://rap2api.taobao.org/app/mock/160507' + url
  var promise = new Promise((resolve, reject) => {
    var postData = data || {}
    if (postData.custom_loading_tip) {
      wx.showToast({
        title: postData.custom_loading_tip,
        icon: 'loading'
      })
    }

    var stateStr = wx.getStorageSync('state')
    if (stateStr) {
      var state = JSON.parse(stateStr)
      postData.token = state.userinfo.token
    }

    console.log('postData', postData)
    // 网络请求
    wx.request({
      url: url,
      data: postData,
      method: 'POST',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) { // 服务器返回数据
        resolve(res.data)
      },
      error: function (e) {
        console.error(e)
        reject(e)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
  return promise
}
