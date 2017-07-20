// localStorage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    localValue:''
  },
  submitSet: function(e){
    var d = e.detail.value
    var key = d.setKey
    let value = d.setData
    if(!key){
      wx.showToast({
        title: '请输入key',
      })
    } else if (!value){
      wx.showToast({
        title: '请输入值',
      })
    }else{
      wx.setStorage({
        key: key,
        data: value 
      })
    }
  },
  submitSet2: function (e) {
    var d = e.detail.value
    var key = d.getKey
    var that = this
    var value = ''
    if (!key) {
      wx.showToast({
        title: '请输入key',
      })
    } else {
      wx.getStorage({
        key: key,
        success: function(res) {
          value = res.data
        },
        complete:function(){
          that.setData({
            localValue: value
          })
        }
      })
    }
  },
  submitSet3: function (e) {
    var d = e.detail.value
    var key = d.removeKey
    if (!key) {
      wx.showToast({
        title: '请输入key',
      })
    } else {
      wx.removeStorage({
        key: key,
        success: function(res) {
          console.log(res)
          wx.showToast({
            title: '删除内容' + res.errMsg,
          })
        },
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