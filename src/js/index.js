const Magnifier= require('./views/magnifier');

const	App= class {

	constructor(){

		// pc: 2.25
		// sp: 2.0

		const magnifier= new Magnifier(
			document.querySelector('.magnifier'),
			document.querySelector('.main'),
			2.0
		);
	}
};

document.addEventListener('DOMContentLoaded', ()=>{

	new App();
});
