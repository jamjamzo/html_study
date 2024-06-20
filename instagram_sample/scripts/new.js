window.addEventListener('load', function () {
  var carousels = document.getElementsByClassName('.carousel');

  //캐러셀 이벤트를 등록하는 로직
  for (var i = 0; i < carousels.length; i++) {
    this.addEventListener(carousels[i]);
  }
});

function addEventListener(carouselElem) {
  var ulElem = carouselElem.querySelector('ul');
  var liElems = carouselElem.querySelectorAll('li');

  //너비값 조정
  var liWidth = liElems[0].clientWidth;
  var adjustedWidth = liElems.length * liWidth;
  ulElem.style.width = adjustedWidth + 'px';

  // 슬라이드 버튼 이벤트 등록
  var slideButtons = carouselElem.querySelectorAll('.slide')
  for (var i = 0; i < slideButtons.length; i++) {
    slideButtons[i].addEventListener('click', createListenerSlide(carouselElem));
  }
}

function createListenerSlide(carouselElem) {
  return function(event) {
    // click 이벤트리스너 호출되는 시점에 이벤트 객체를 넘겨줄 수 있다. 
    // currentTarget은 현재 클릭한 버튼 => 웹표준
    var clickedButton = event.currentTarget;
  }
}
