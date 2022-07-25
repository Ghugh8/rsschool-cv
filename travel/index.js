window.onload=function() {
  document.querySelector('.menu_section').addEventListener('click', () => {
    document.querySelector('.navigation').classList.toggle('navigation_active');
})

  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.navigation').classList.remove('navigation_active');
})
    document.querySelector('.section_item').addEventListener('click', () => {
    document.querySelector('.navigation').classList.remove('navigation_active');
})
  document.querySelector('.navigation_list').addEventListener('click', () => {
    document.querySelector('.navigation').classList.remove('navigation_active');
})

const loginButton = document.querySelector('.login');
const accountButton = document.querySelector('.account');
const createButton = document.querySelector('.register-text');
const createLoginButton = document.querySelector('.register-text-create');
const popup = document.querySelector('.pop-up-desk');
const popupCreate = document.querySelector('.pop-up-create');
const bodyHidden = document.querySelector('.body');
const signIn = document.querySelector('.sign-in-btn');
const signUp = document.querySelector('.sign-up-btn');
let eMail = document.querySelector('.type-area-email');
let pass = document.querySelector('.type-area-pass');
let eMailCreate = document.querySelector('.type-area-email-create');
let passCreate = document.querySelector('.type-area-pass-create');


loginButton.addEventListener('click', () => {
  popup.classList.toggle('hidden')
  bodyHidden.classList.toggle('overflow')
})

createButton.addEventListener('click', () => {
  popup.classList.add('hidden')
  popupCreate.classList.remove('hidden')
})

createLoginButton.addEventListener('click', () => {
  popup.classList.remove('hidden')
  popupCreate.classList.add('hidden')
})


popup.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up-desk')) {
      popup.classList.toggle('hidden')
      bodyHidden.classList.toggle('overflow')
  }
})

popupCreate.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up-create')) {
      popupCreate.classList.toggle('hidden')
      bodyHidden.classList.toggle('overflow')
  }
})

accountButton.addEventListener('click', () => {
  popup.classList.toggle('hidden')
  bodyHidden.classList.toggle('overflow')
})

signIn.addEventListener('click', () => {
  alert('Your E-mail: ' + eMail.value)
});

signIn.addEventListener('click', () => {
  alert('Your Password: ' + pass.value)
});

signUp.addEventListener('click', () => {
  alert('Your E-mail: ' + eMailCreate.value)
});

signUp.addEventListener('click', () => {
  alert('Your Password: ' + passCreate.value)
});




let offset = 0;
const picturesSlider = document.querySelector('.destination-pic-slider');

document.querySelector('.pic-to-left').addEventListener('click', function() {
  offset = offset + 860;
  if (offset > 1440) {
    offset = 0;
  }
  picturesSlider.style.left = -offset + 'px';
})

document.querySelector('.pic-to-right').addEventListener('click', function() {
  offset = offset + 860;
  if (offset > 1440) {
    offset = 0;
  }
  picturesSlider.style.left = offset + 'px';
})
}
console.log('1.Слайдер изображений в секции destinations:\n- на десктоп варианте при клике на урезанную картинку слева или справа изображение меняется по принципу карусели +20/ выполнено;\n- три точки внизу отображают "номер слайда"/ не выполнено;\n- анимации плавного перемещения для слайдера +10/ выполнено;\n2. Нажатие на кнопку Login/Acoount:\n- логин попап соответствует верстке его закрытие происходит при клике вне попапа +25/ выполнено\n- логин попап имеет 2 инпута при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными +25/ выполнено\n3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up +25/ выполнено')