// pages/list/list.js
let datas = require("../../datas/list-data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: []
  },
  toDetail(e){
    let index = e.currentTarget.dataset.index;
-    
    wx.navigateTo({
      url: '/pages/detail/detail?index='+index
    })
  },
  carouselToDetail(e){
    let index = e.target.dataset.index;
      wx.navigateTo({
        url: '/pages/detail/detail?index=' + index
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr: datas.list_data
    })
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