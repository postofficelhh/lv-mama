window.mySwipe = new Swipe(document.getElementById('slider'), {
    // startSlide: 3, 轮播图从第几张开始
    speed: 400, // 过渡的滚动速度
    auto: 1500,// 单位是ms
    continuous: true,//轮播图是否循环播放
    stopPropagation: false// 是否停止冒泡
  });