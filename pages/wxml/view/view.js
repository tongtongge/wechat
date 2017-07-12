// view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      { 'img': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'url': 'movable/movable' },
      { 'img': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'url': 'http://qq.com' },
      { 'img': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg', 'url': '/pages/wxml/view' }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  openUrl: function (event) {
    var url = event.currentTarget.dataset.url
    if (url) {
      wx.showModal({
        title: 'url',
        content: url,
        showCancel: true,
        cancelText: '取消',
        cancelColor: 'grey',
        confirmText: '确定',
        confirmColor: '',
        success: function (res) {
          if(res.confirm){
            console.log(res.confirm)
            wx.navigateTo({
              url: url,
              success: function(res) {},
              fail: function(res) {
                wx.showToast({
                  title: 'fail',
                  icon: '',
                  image: '',
                  duration: 0,
                  mask: true,
                  success: function(res) {},
                  fail: function(res) {},
                  complete: function(res) {},
                })
              },
              complete: function(res) {},
            })
          }
         },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})