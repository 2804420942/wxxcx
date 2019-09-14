// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "hello world",
    src: "/img/wechat.jpg",
    userInfo: "",
    isShow: true
  },
  getMyInfo:function(e){
    console.log(e.detail.userInfo);
    let info = e.detail.userInfo;
    this.setData({
      name:info.nickName,
      src:info.avatarUrl,
      isShow: false
    })
  },
  handleClick(){
    wx.navigateTo({
      url: "/pages/list/list",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
      success:(data)=>{
        this.setData({
          name: data.userInfo.nickName,
          src: data.userInfo.avatarUrl,
          userInfo: data.userInfo
        })
        console.log(data);
      }
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