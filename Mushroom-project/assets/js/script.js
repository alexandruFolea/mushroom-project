const hamburgerBtn = document.querySelector('.hamburger');
const navUl = document.querySelector('.nav-ul');

hamburgerBtn.addEventListener('click', () => {
	console.log(`clicked`);
	navUl.classList.toggle('show');
});
