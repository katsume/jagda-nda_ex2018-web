require('fulltilt');
const {GyroNorm}= require('gyronorm');

module.exports= class {

	constructor(el, content, scale){

		const lensEl= document.createElement('div');
		lensEl.classList.add('magnifier-lens');
		el.appendChild(lensEl);

		const lensInnerEl= document.createElement('div');
		lensInnerEl.classList.add('magnifier-lens_inner');
		lensEl.appendChild(lensInnerEl);

		const contentWrapperEl= document.createElement('div');
		contentWrapperEl.classList.add('magnifier-content_wrapper');
		lensInnerEl.appendChild(contentWrapperEl);

		const contentEl= document.createElement('div');
		contentEl.classList.add('magnifier-content');
		contentWrapperEl.appendChild(contentEl);

		const contentInnerEl= document.createElement('div');
		contentInnerEl.classList.add('magnifier-content_inner');
		contentEl.appendChild(contentInnerEl);

		const clonedContent= content.cloneNode(true);
		contentInnerEl.appendChild(clonedContent);

		const gn= new GyroNorm();
		gn.init({
			screenAdjusted: true
		}).then(()=>{
			gn.start(this._gnHandler.bind(this));
			this._scale= scale.touch;
		}).catch((e)=>{
			document.addEventListener('mousemove', this._mousemoveHandler.bind(this));
			this._scale= scale.mouse;
		});

		window.addEventListener('scroll', this._scrollHandler.bind(this));
		window.addEventListener('resize', this._resizeHandler.bind(this));

		this._el= el;
		this._contentWrapperEl= contentWrapperEl;
		this._contentEl= contentEl;
		this._contentInnerEl= contentInnerEl;
		this._rx= 0;
		this._ry= 0;

		this._resizeHandler();
	}

	_gnHandler(e){
		const rx= (e.do.gamma+0.0) / (180.0*0.5) + 0.5;
		const ry= (e.do.beta-45.0) / (180.0*0.5) + 0.5;
		this._setPos(rx, ry);
	}

	_mousemoveHandler(e){
		const rx= e.clientX / this._width;
		const ry= e.clientY / this._height;
		this._setPos(rx, ry);
	}

	_setPos(rx, ry){

		this._rx= this._rx*0.8 + rx*0.2;
		this._ry= this._ry*0.8 + ry*0.2;

		requestAnimationFrame(()=>{

			const tx= (this._rx-0.5)*this._width;
			const ty= (this._ry-0.5)*this._height;
			this._el.style.transform= 'translate('+tx+'px, '+ty+'px)';

			this._contentEl.style.transform= 'scale('+this._scale+') translate('+(-tx)+'px, '+(-ty)+'px)';
		});
	}

	_scrollHandler(){

		requestAnimationFrame(()=>{
			this._contentInnerEl.style.top= -window.scrollY+'px';
		});
	}

	_resizeHandler(){
		this._width= window.innerWidth;
		this._height= window.innerHeight;
		this._contentWrapperEl.style.width= this._width+'px';
		this._contentWrapperEl.style.height= this._height+'px';
	}
};
