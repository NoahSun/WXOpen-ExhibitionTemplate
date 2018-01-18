//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindContact: function (arg) {
    console.log(arg);
  },
  bindShowModal: function (arg) {
    console.log(arg);
    wx.showModal({
      title: "一个自定义Modal Title",
      content: "自定义的Modal Content",
      showCancel: true,
      cancelText: "关闭",
      cancelColor: "#AF20BB",
      confirmText: "确认",
      confirmColor: "#3CC51F",
      success: function ({ confirm, cancel }) {
        if (confirm) {
          console.log("Confirm");
        } else if (cancel) {
          console.log("Cancel");
        }
      },
      fail: function () {
        console.log("fail");
      },
      complete: function () {
        console.log("complete");
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady: function () {
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
