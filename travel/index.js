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
}
