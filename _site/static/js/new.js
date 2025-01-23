const slider = document.getElementById('compare-slider');
const srImage = document.querySelector('.sr');

slider.addEventListener('input', function () {
  const value = slider.value;
  // 根据滑动条值调整 SR 图像遮罩区域
  srImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});