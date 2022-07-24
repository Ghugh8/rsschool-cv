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
const popup = document.querySelector('.pop-up-desk');
const bodyHidden = document.querySelector('.body');
const signIn = document.querySelector('.sign-in-btn');
let eMail = document.querySelector('.type-area-email');
let pass = document.querySelector('.type-area-pass');

loginButton.addEventListener('click', () => {
  popup.classList.toggle('hidden')
  bodyHidden.classList.toggle('overflow')
})

popup.addEventListener('click', (event) => {
  if (event.target.classList.contains('pop-up-desk')) {
      popup.classList.toggle('hidden')
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













}