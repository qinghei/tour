// pages/reserve/reserve.js
Page({
  add: function () {
    var num = this.data.num;
    num++;
    var state = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      state: state
    })
  },
  /*点击减号*/
  incream: function () {
    var num = this.data.num;
    if (num > 1) {
      num--;
    }
    var state = num > 1 ? 'normal' : 'disable';
    this.setData({
      num: num,
      state: state
    })
  },
  pay:function(){
    console.log(111)
    wx.reLaunch({
      url: 'pages/liner/detail/reserve/orderdetail/orderdetail'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    num:1
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