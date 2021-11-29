let dayNight = document.querySelector('.dayNight')
let menutoggle = document.querySelector('.menutoggle')
let body = document.querySelector('body')
let navigation = document.querySelector('.navigation')

dayNight.onclick = function(){
    body.classList.toggle('dark')
    dayNight.classList.toggle('active')
}
menutoggle.onclick = function(){
    menutoggle.classList.toggle('active')
    navigation.classList.toggle('active')
}