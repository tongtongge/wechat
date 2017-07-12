// index.js

var statusArrs = [false]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showArr: statusArrs
  },
  opentype: function (e) {
    var url = e.currentTarget.dataset.url
    url = '../' + url
    wx.navigateTo({
      url: url
    })
  },
  //显示隐藏
  tigger: function (e) {
    var that = this;
    var num = e.currentTarget.dataset.num
    statusArrs[num] = !statusArrs[num]
    that.setData({
      showArr: statusArrs
    })
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