let section=document.querySelector('.section');
let moon=document.querySelector('.dark')
let sun=document.querySelector('.sun')
let login=document.querySelector('.login')
let start=document.querySelector('.start')

let overlay=document.querySelector('.overlay')
let close=document.querySelector('.close')
let close1=document.querySelector('.close1')
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

document.body.classList.add('light')


moon.addEventListener('click',function(){
   if( document.body.classList.contains('light')){
       document.body.classList.remove('light')
       document.body.classList.add('dark')
       sun.style.opacity =1
       moon.style.opacity=0
       moon.style.pointerEvents =none
       section.innerHTML =`<div class="cryptohopper-web-widget" data-id="1" data-table_style="dark" data-realtime="on"></div>
       <script src="https://www.cryptohopper.com/widgets/js/script"></script>`
  
    }

})
 
signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
login.addEventListener('click', function(){
    container.style.opacity=1
    container.style.pointerEvents='auto'
   section.style.opacity=0.2
  section.style.pointerEvents='none'
})

close.addEventListener('click', function(){
    container.style.opacity=0
    container.style.pointerEvents='none'
   section.style.opacity=1
   section.style.pointerEvents='auto'
})
close1.addEventListener('click', function(){
    container.style.opacity=0
    container.style.pointerEvents='none'
   section.style.opacity=1
    section.style.pointerEvents='auto'
})




