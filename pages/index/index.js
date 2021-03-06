//index.js
const util = require('../../utils/util.js');
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  bindContact: function(arg) {
    console.log(arg);
  },
  bindChooseImg() {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths);
      }
    });
  },
  bindShowModal: function(arg) {
    console.log(arg);
    wx.showModal({
      title: '一个自定义Modal Title',
      content: '自定义的Modal Content',
      showCancel: true,
      cancelText: '关闭',
      cancelColor: '#AF20BB',
      confirmText: '确认',
      confirmColor: '#3CC51F',
      success: function({ confirm, cancel }) {
        if (confirm) {
          console.log('Confirm');
        } else if (cancel) {
          console.log('Cancel');
        }
      },
      fail: function() {
        console.log('fail');
      },
      complete: function() {
        console.log('complete');
      }
    });
  },
  onLoad: function() {
    console.log('onload');
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        if (res.userInfo) {
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          console.log(res);
          app.globalData.userInfo = res.userInfo;
          if (res.userInfo) {
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            });
          }
        }
      });
    }
    wx.startRecord({
      complete(res) {
        console.log(res);
      }
    });
  },
  onReady: function() {
    console.log(app.globalData.userInfo);
    if (!app.globalData.userInfo) {
      wx.authorize({
        scope: 'scope.userInfo',
        fail(res) {},
        complete(res) {
          console.log(res);
        }
      });
      wx.authorize({
        scope: 'scope.record',
        fail(res) {},
        complete(res) {
          console.log(res);
        }
      });
    }
  },
  onReachBottom() {
    console.log('on reach bottom');
  },
  onReady: function() {},
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    if (e.detail.userInfo) {
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      });
    }
  }
});
