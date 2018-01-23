//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log('onLoad')
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  onReady: function () {
    console.log('onReady')
  },
  onShow: function () {
    console.log('onShow')
  },
  onHide: function () {
    console.log('onHide')
  },
  onUnload: function () {
    console.log('onUnload')
  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },
  onReachBottom: function () {
    console.log('onReachBottom')
  },
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  },
  onPageScroll: function () {
    console.log('onPageScroll')
  }
})
