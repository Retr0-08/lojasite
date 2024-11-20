let navbar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
  let scrolltop = window.scrollY

  if(scrolltop > 0){
    navbar.classList.add('rolar')
  } else{
    navbar.classList.remove('rolar')
  }

})
