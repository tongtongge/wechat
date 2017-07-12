// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    view1: true,
    view2: true,
    view3: true,
    view4: true,
    view5: true,
    view6: true,
    view7: true,
    view8: true,
  },
  opentype: function (e) {
    var url = e.currentTarget.dataset.type
    url = url + '/' + url
    wx.navigateTo({
      url: url
    })
  },

  tigger: function (e) {
    var num = e.currentTarget.dataset.num
    if (num == 1) {
      this.setData({
        view1: !this.data.view1
      })
    } else if (num == 2) {
      this.setData({
        view2: !this.data.view2
      })
    } else if (num == 3) {
      this.setData({
        view3: !this.data.view3
      })
    }
    else if (num == 4) {
      this.setData({
        view4: !this.data.view4
      })
    } else if (num == 5) {
      this.setData({
        view5: !this.data.view5
      })
    } else if (num == 6) {
      this.setData({
        view6: !this.data.view6
      })
    } else if (num == 7) {
      this.setData({
        view7: !this.data.view7
      })
    } else if (num == 8) {
      this.setData({
        view8: !this.data.view8
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
