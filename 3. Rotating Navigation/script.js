const open=document.getElementById('open');
const close=document.getElementById('close');
const container=document.querySelector('.container');

open.addEventListener('click',()=>{
    container.classList.add('show-nav');
});
close.addEventListener('click',()=>{
    container.classList.remove('show-nav'); 
});

// const nav=document.querySelector('nav');
// open.addEventListener('click',()=>{
//     nav.classList.add('open');
// });
// close.addEventListener('click',()=>{
//     nav.classList.remove('open');
// })  

