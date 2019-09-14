// pages/detail/detail.js
let datas = require("../../datas/list-data.js");
let appDatas = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {},
    index: null,
    isCollected: false,
    isMusicPlay: false
  },
  handleCollection(){
    let isCollected = !this.data.isCollected;
    this.setData({
      isCollected
    })
    let title = isCollected?"收藏成功":"取消收藏";
    wx.showToast({
      title,
      icon: "success"
    });
    wx.getStorage({
      key: 'isCollected',
      success: (datas) => {
        let obj = datas.data;
        let { index } = this.data;
        obj[index] = isCollected;
        wx.setStorage({
          key: 'isCollected',
          data: obj,
        });
      },
    })
    
  },
  handleMusicPlay(){
    let isMusicPlay = !this.data.isMusicPlay;
    this.setData({
      isMusicPlay
    });
    if(isMusicPlay){
      let {dataUrl,title} = this.data.detailObj.music;
      wx.playBackgroundAudio({
        dataUrl,
        title
      });
    }else{
      wx.pauseBackgroundAudio();
    }
  },
  handleShare(){
    wx.showActionSheet({
      itemList: ["分享到微信","分享到qq空间","分享到微博"],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index;
    this.setData({
      detailObj: datas.list_data[index],
      index
    });
    let detailStorage = wx.getStorageSync("isCollected");
    if(!detailStorage){
      wx.setStorageSync("isCollected", {});
    }
    if(detailStorage[index]){
      this.setData({
        isCollected: true
      });
    }
    else {
      this.setData({
        isCollected: false
      })
    }
    wx.onBackgroundAudioPlay(()=>{
      this.setData({
        isMusicPlay:true
      });
      appDatas.data.isPlay = true;
      appDatas.data.pageIndex = index;
    });
    wx.onBackgroundAudioPause(() => { 
      this.setData({ 
        isMusicPlay: false 
      }); 
      appDatas.data.isPlay = false;
      //appDatas.data.pageIndex = index;
    });
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