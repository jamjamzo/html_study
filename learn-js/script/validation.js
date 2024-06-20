window.addEventListener('load', function () {
  clearMessages();

  var formElem = document.querySelector('form');
  formElem.onsubmit = submitForm;

  // 월 추가
  var selectInput = document.querySelector('select[name="birth-month"]');
  for (var i = 1; i <= 12; i++) {
    var option = document.createElement('option');
    option.innerHTML = i + '월';
    option.value = i;
    selectInput.appendChild(option);
  }
});

// alert-message "TEST" 지우기
function clearMessages() {
  var messages = document.getElementsByClassName('alert-message');
  for (var i = 0; i < messages.length; i++) {
    messages[i].style.display = 'none';
  }
}

// 메시지 보여주기?
function showMessage(inputElement, message) {
  var messageElem = inputElement.parentNode.querySelector('span');
  //span에 alert-message를 달아놨기 때문에 경고문장을 표시할 수 있다.
  messageElem.style.display = 'inline';
  messageElem.innerText = message;

  inputElement.focus();
}

// 완성된 폼 제출하기
function submitForm() {
  //account info
  var accountInput = document.querySelector('input[name="account"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var passwordConfirmInput = document.querySelector('input[name="password2"]');

  //select, radio, checkbox
  var nameInput = document.querySelector('input[id="id-name"]');
  var yearInput = document.querySelector('input[name="birth-year"]');
  //위에 월추가 했으므로 옮기겠음
  // var selectInput = document.querySelector('select[name="birth-month"]');
  var dayInput = document.querySelector('input[name="birth-day"]');
  var radioInput = document.querySelector('input[name="gender"]:checked');
  var checkInput = document.querySelector('input[name="agree"]');

  // 가져온 값 모두 출력
  console.log(accountInput.value);
  console.log(passwordInput.value);
  console.log(passwordConfirmInput.value);

  console.log(nameInput.value);
  console.log(
    yearInput.value + '년 ' + selectInput.value + '월 ' + dayInput.value
  );
  console.log(radioInput.value);
  console.log(checkInput.value);

  var success = true;

  if (accountInput.value.length < 6) {
    showMessage(accountInput, 'Fill out the blank more than 6 words.');
    success = false;
  }

  if (passwordInput.value.length < 10) {
    showMessage(passwordInput, 'Fill out the blank more than 10 words.');
    success = false;
  }

  if (passwordConfirmInput.value != passwordInput.value) {
    showMessage(passwordConfirmInput, 'Make sure if the password is same.');
    success = false;
  }

  return success;
}
