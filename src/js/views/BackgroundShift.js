
module.exports= class {

	constructor(translate){

		window.addEventListener('resize', this._resizeHandler.bind(this));
		document.addEventListener('mousemove', this._mousemoveHandler.bind(this));

		this._els= document.querySelectorAll('.content');
		this._rx= 0;
		this._ry= 0;
		this._translate= translate;

		this._resizeHandler();
	}

	_mousemoveHandler(e){
		const rx= e.clientX / this._width - 0.5;
		const ry= e.clientY / this._height - 0.5;
		this._setPos(rx, ry);
	}

	_setPos(rx, ry){

		const tx= (-1) * rx * this._translate.x;
		const ty= (-1) * ry * this._translate.y;

		for( var i=0; i<this._els.length; i++ ) {
			var el = this._els[i];
			el.style.transform= 'translate('+tx+'px, '+ty+'px)';
		}
	}

	_resizeHandler(){
		this._width= window.innerWidth;
		this._height= window.innerHeight;
	}
};
