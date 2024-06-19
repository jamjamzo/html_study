window.addEventListener('load', function () {
  clearMessages();

  var formElem = document.querySelector('form');
  formElem.onsubmit = submitForm;
});

function clearMessages() {
  var messages = document.getElementsByClassName('alert-message');
  for (var i = 0; i < messages.length; i++) {
    messages[i].style.display = 'none';
  }
}

function submitForm() {
  //account info
  var accountInput = document.querySelector('input[name="account"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var passwordConfirmInput = document.querySelector('input[name="password2"]');

  //select, radio, checkbox
  var nameInput = document.querySelector('input[id="id-name"]');
  var yearInput = document.querySelector('input[name="birth-year"]');
  var selectInput = document.querySelector('select[name="birth-month"]');
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

  return false;
}
