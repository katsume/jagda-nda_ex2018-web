const Magnifier= require('./views/magnifier');

const	App= class {

	constructor(){

		const magnifier= new Magnifier(
			document.querySelector('.magnifier'),
			document.querySelector('.main'),
			{
				mouse: 2.25,
				touch: 2.0
			}
		);
	}
};

document.addEventListener('DOMContentLoaded', ()=>{

	new App();
});
