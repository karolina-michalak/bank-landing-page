window.addEventListener('scroll', () => {

  const currentPosition = document.documentElement.scrollTop + 110;
  const navButtons = document.querySelectorAll('.colored');
  const about = document.getElementById('about');
  const team = document.getElementById('team');
  const clients = document.getElementById('clients');
  const contact = document.getElementById('contact');

  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove('active')
  }
  if (currentPosition >= about.offsetTop && currentPosition < team.offsetTop) {
    navButtons[0].classList.add('active')
  } else if (currentPosition >= team.offsetTop && currentPosition < clients.offsetTop) {
    navButtons[1].classList.add('active')
  } else if (currentPosition >= clients.offsetTop && currentPosition < contact.offsetTop) {
    navButtons[2].classList.add('active')
  } else if (currentPosition >= contact.offsetTop) {
    navButtons[3].classList.add('active')
  }

})


const toTheTopButton = document.querySelector('.toTheTopButton');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTheTopButton.style.display = "block";
  } else {
    toTheTopButton.style.display = "none";
  }
});

toTheTopButton.addEventListener('click', function () {
  document.documentElement.scrollTop = 0;
})