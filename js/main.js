let nav_icon = document.getElementById('test-nav')
let mobilenav = document.getElementById('mobilenav')
let nav_small = document.getElementById('nav-small')
let links = document.getElementsByClassName('link1')
let section = document.getElementById('sec1')
let header = document.getElementById('main-header')

nav_icon.addEventListener('click',()=>{
    mobilenav.classList.toggle("sample")
    nav_small.classList.toggle("sample")
})

for(let i = 0; i < links.length; i++) {
    links[i].addEventListener('click',()=>{
        mobilenav.classList.remove('sample')
        nav_small.classList.remove('sample')
    });
}
sec1.addEventListener('click',()=>{
    if(mobilenav.className.match('sample') && nav_small.className.match('sample')){
        nav_small.classList.remove('sample')
        mobilenav.classList.remove('sample')
    }
})
