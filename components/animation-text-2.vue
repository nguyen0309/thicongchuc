<template>
    <div class="text-yellow fs-36 text-center animation-bg p-4 overflow-hidden h-700 ">
      <div class="wrap-span z-10">
        <span>Đừng</span> <span>đánh</span> <span>giá</span> <span>thấp</span> <span>bản</span> <span>thân,</span> <span>nhưng</span> <span>cũng</span> <span>đừng</span> <span>tự</span> <span>đề</span> <span>cao</span> <span>mình.</span> <span>Hãy</span> <span>trân</span> <span>trọng</span> <span>những</span> <span>gì</span> <span>đang</span> <span>có</span> <span>và</span> <span>không</span> <span>ngừng</span> <span>tiến</span> <span>tất</span> <span>lên,</span> <span>vì</span> <span>cuộc</span> <span>sống</span> <span>này</span> <span>vô</span> <span>thường</span> <span>lắm.</span> 
      </div>  
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
             
  </template>
  <style scoped>
  .animation-bg {
    margin-top: -3px;
    height: 678px;
    position: relative;
    background: transparent url(@/assets/img/working_2.jpg) no-repeat center;
    background-size: cover;
    text-align: center;
    transform: scale(0.94);
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  }
  .animation-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #1f0e00eb;
}
.wrap-span{
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
  
  @keyframes scale {
    100% {
      transform: scale(1);
    }
  }
  
  span {
    display: inline-block;
    opacity: 0;
    filter: blur(4px);
  }
  
  span:nth-child(1) {
    animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(2) {
    animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(3) {
    animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(4) {
    animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(5) {
    animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(6) {
    animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(7) {
    animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(8) {
    animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(9) {
    animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(10) {
    animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(11) {
    animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(12) {
    animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(13) {
    animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(14) {
    animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(15) {
    animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(16) {
    animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(17) {
    animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  
  span:nth-child(18) {
    animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(19) {
    animation: fade-in 0.8s 1.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(20) {
    animation: fade-in 0.8s 2.0s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(21) {
    animation: fade-in 0.8s 2.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(22) {
    animation: fade-in 0.8s 2.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(23) {
    animation: fade-in 0.8s 2.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(24) {
    animation: fade-in 0.8s 2.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(25) {
    animation: fade-in 0.8s 2.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(26) {
    animation: fade-in 0.8s 2.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(27) {
    animation: fade-in 0.8s 2.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(28) {
    animation: fade-in 0.8s 2.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(29) {
    animation: fade-in 0.8s 2.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(30) {
    animation: fade-in 0.8s 3.0s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(31) {
    animation: fade-in 0.8s 3.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(32) {
    animation: fade-in 0.8s 3.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }
  span:nth-child(33) {
    animation: fade-in 0.8s 3.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
  }

  
  @keyframes fade-in {
    100% {
      opacity: 1;
      filter: blur(0);
    }
  }
  </style>
  