console.log('hi');

window.addEventListener('load', function () {
  var carousels = document.getElementsByClassName('carousel');

  //캐러셀 이벤트를 등록하는 로직
  for (var i = 0; i < carousels.length; i++) {
    addEventListener(carousels[i]);
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
  var slideButtons = carouselElem.querySelectorAll('.slide');
  for (var i = 0; i < slideButtons.length; i++) {
    slideButtons[i].addEventListener(
      'click',
      createListenerSlide(carouselElem)
    );
  }
}

function createListenerSlide(carouselElem) {
  return function (event) {
    // click 이벤트리스너 호출되는 시점에 이벤트 객체를 넘겨줄 수 있다.
    // currentTarget은 현재 클릭한 버튼 => 웹표준
    var clickedButton = event.currentTarget;

    //값 가져오기
    var liElems = carouselElem.querySelectorAll('li');
    var liCount = liElems.length;
    // var currentIndex = carouselElem.attributes.data.value;
    // attributes는 속성을 나타내는 NamedNodeMap을 반환합니다. 여기서는 dataset 속성을 사용하여 data-* 속성 값을 가져와야 합니다:
    var currentIndex = parseInt(carouselElem.dataset.value);

    // 슬라이드 버튼 체크
    if (
      clickedButton.classList.contains('slide-right') &&
      currentIndex < liCount - 1
    ) {
      currentIndex++;
      scrollDiv(carouselElem, currentIndex);
    } else if (
      clickedButton.classList.contains('slide-left') &&
      currentIndex > 0
    ) {
      currentIndex--;
      scrollDiv(carouselElem, currentIndex);
    }
  };

  // 인디케이터 업데이트

  // 슬라이드 버튼 보여줌 업데이트

  // 새롭게 보여지는 이미지 인덱스 값을 현재 data값으로 업데이트
  // carouselElem.attributes.data.value = currentIndex;
  //이 부분에서도 attributes 대신 dataset을 사용해야 합니다:
  carouselElem.dataset.value = currentIndex;
}

function scrollDiv(carouselElem, nextIndex) {
  var scrollable = carouselElem.querySelector('.carousel-container');
  var liWidth = scrollable.clientWidth;
  var newLeft = liWidth * nextIndex;

  scrollable.scrollTo({ left: newLeft, behavior: 'smooth' });
}
