const Magnifier= require('./views/magnifier');
const GoogleMap = require('./views/map');
const Common = require('./views/common');
const BackgroundShift = require('./views/BackgroundShift');

const	App= class {

	constructor(){
		const magnifier= new Magnifier(
			document.querySelector('.magnifier'),
			document.querySelector('.main'),
			{
				mouse: 2.55,
				touch: 2.0
			}
		);

		const map = new GoogleMap(
			document.querySelectorAll('.map_embed'),
			{
				lat: 35.6684134,
				lng: 139.7570228,
				zoom: 14
			}
		);

		// const shift = new BackgroundShift(
		// 	{
		// 		x: 5,
		// 		y: 5
		// 	}
		// );
	}
};

document.addEventListener('DOMContentLoaded', ()=>{

	new App();

	Common();
	
});

