// info.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: 'Welcome',
    userInfo: {},
    gender: '未知',
    staff: [{ firstName: 'Hulk', lastName: 'Hu' }, { firstName: 'Shang', lastName: 'You' }, { firstName: 'Gideon', lastName: 'Lin' }],
    a: 1,
    b: 2,
    objectArray: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' }
    ],
    numberArray: [1, 2, 3, 4]
  },
  switch: function (e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      console.log("x:"+x+",y:"+y)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function (e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function (e) {
    this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  },
  getGender: function (gender) {
    var str = ''
    if (gender == 1) { str = '男' }
    else if (gender == 2) { str = '女' }
    else if (gender == 0) { str = '未知' }
    return str;
  },

  longtap:function(e){
    console.log(wx.openBluetoothAdapter)
     if (!wx.openBluetoothAdapter) {
       wx.openBluetoothAdapter()
     } else {
       // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
       wx.showModal({
         title: '提示',
         content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
       })
     }
  },
  upper: function(){
     wx.showToast({
       title: '顶部或者左边',
     })
  },
  lower: function () {
    wx.showToast({
      title: '底部或者右边',
    })
  },
  /**
   * 自定义函数，绑定事件
   */
  viewTap: function (e) {
    this.setData({
      motto: '羁绊是什么意思'
    })
    console.log(e)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    //that.setData({
    // userInfo: app.globalData.userInfo
    // })

    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        gender: that.getGender(userInfo.gender)
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.userInfo)
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
   * 只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
   */
  onShareAppMessage: function () {
    return {
      title: '羁绊是什么意思',
      path: '/pages/user/info?id=123'
    }
  }
})