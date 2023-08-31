const newsletter = document.querySelector('.newsletter');
const success = document.querySelector('.success');


const emailInput = document.querySelector("#email");
//const emailValue = String(emailInput.value);
let emailConfirm = document.querySelector("#email-confirm");

let error = document.querySelector('#error');

const sendLink = document.querySelector('.newsletter__input a');
const backLink = document.querySelector('.success__link a');

sendLink.addEventListener("click", (event) => {
	event.preventDefault();
	
	if (emailInput.value == '') {
		emailInput.classList.add('invalid');
		error.textContent = 'This field is required.';
	} else {
		emailIsValid(emailInput);
	}
	
});

backLink.addEventListener("click", (event) => {
	event.preventDefault();
	
	success.classList.add('hidden');
	newsletter.classList.remove('hidden');
	emailInput.value = '';
});


function emailIsValid (field) {
user = field.value.substring(0, field.value.indexOf("@"));
domain = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);

if ((user.length >=1) &&
    (domain.length >=3) && 
    (user.search("@")==-1) && 
    (user.search("@")==-1) &&
    (user.search(" ")==-1) && 
    (domain.search(" ")==-1) &&
    (domain.search(".")!=-1) &&      
    (domain.indexOf(".") >=1)&& 
    (domain.lastIndexOf(".") < domain.length - 1)) {
	newsletter.classList.add('hidden');
	success.classList.remove('hidden');
	emailConfirm.textContent = `${emailInput.value}`;
	error.textContent = '';
	emailInput.classList.remove('invalid');
} else {
		emailInput.classList.add('invalid');
		error.textContent = 'Valid email is required.';
	}
}


