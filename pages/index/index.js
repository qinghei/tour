//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list:[],
    nav:[],
    hot:[],
    you:[]
  },
  //轮播图
  getImageList: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/imagelist',
      success: (res) => {
        this.setData({ list: res.data });
      }
    })
  },
  //九宫格
  getNavList: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/nav',
      success: (res) => {
        this.setData({ nav: res.data });
      }
    })
  },
  //九宫格绑定事件
  handleJumpPage: function (event) {
    var id = event.target.dataset.id;
    if (id == 1) { wx.navigateTo({ url: '/pages/liner/liner' })};
    if (id == 2) {wx.navigateTo({ url: '/pages/ticket/ticket' })}
  },
  //热门目的地
  getHot: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/hot',
      success: (res) => {
        this.setData({ hot: res.data });
      }
    })
  },
  //优选旅程
  getYou: function () {
    wx.request({
      url: 'http://127.0.0.1:3001/youxuan',
      success: (res) => {
        this.setData({ you: res.data });
      }
    })
  },
  onLoad: function () {
    this.getImageList();
    this.getNavList();
    this.getHot();
    this.getYou();
  }
})
