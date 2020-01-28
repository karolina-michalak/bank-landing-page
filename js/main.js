window.addEventListener('scroll', function () {

  const currentPosition = window.scrollY + window.outerHeight / 2;
  const navButtons = document.getElementsByClassName('colored');
  const about = document.getElementById('about');
  const team = document.getElementById('team');
  const contact = document.getElementById('contact');

for(let i=0; i < navButtons.length; i++){
  navButtons[i].classList.remove('active')
}
  if(currentPosition >= about.offsetTop && currentPosition < team.offsetTop){
    navButtons[0].classList.add('active')
  } else if(currentPosition >= team.offsetTop && currentPosition < contact.offsetTop){
    navButtons[1].classList.add('active')
  } else if(currentPosition >= contact.offsetTop){
    navButtons[2].classList.add('active')
  }

})


