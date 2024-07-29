/* custom js file made by JeanDoe */

const themeBtn = document.getElementById('theme-btn');
const body = document.body;

if(themeBtn){
	themeBtn.addEventListener('click', ()=>{
		body.classList.toggle('dark');
	})
}

/* show or Hide user Guide Message box */

const userGuide = document.querySelector('.view'),
	  text = document.querySelector('.text'),
	  closeContent = document.querySelector('.close');

if(userGuide){
	userGuide.addEventListener('click', () =>{
		text.classList.add('active');
		closeContent.classList.add('active');
	});
}

if(closeContent){
	closeContent.addEventListener('click', () =>{
		text.classList.remove('active');
		closeContent.classList.remove('active');
	});
}