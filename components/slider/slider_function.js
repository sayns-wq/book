const Sim = (SimID) =>{
	let id = document.getElementById(SimID);
	if (id) {
		this.SldrRoot = id;
	}
	else{
		this.SldrRoot = document.querySelector('.slider')
	};

	//obsects

	this.sliderList = this.SldrRoot.querySelector('.sim-slider-list');
	this.SldrElements = this.SldrRoot.querySelectorAll('.slim-slider-element');
	this.SLdrElementFirst = this.SldrRoot.querySelector('.slim-slider-element');
	this.SldrArrowLeft = this.SldrRoot.querySelector('div.arrow-left');
	this.SldrArrowRight = this.SldrRoot.querySelector('div.arrow-right');
	this.SldrDots = this.SldrRoot.querySelector('div.dots');
	console.log('объекты');

	//Initialization

	this.options = Sim.defaults;
	Sim.initialize(this);
};


Sim.defaults = {
	//object with defaults parameters of slider
	loop: true, //infinite loop of slider
	auto: true, //autoslide
	interval: 5000, // interval between slides (ms)
	arrows: true, //slide using arrows
	dots: true //show/hide dots
}

Sim.prototype.PrevElem = function(differenceBetweenPoints){
	differenceBetweenPoints = differenceBetweenPoints || 1;
	let PreviousElement = this.currentElement;
	this.currentElement -= differenceBetweenPoints;
	if(this.currentElement < 0){
		this.currentElement = this.elementCounter - 1;
	}
	if(!this.options.loop)
	{
		if (this.currentElement == 0) {
			this.SldrArrowLeft.style.display = "none";
		};
		this.SldrArrowRight.style.display = "block";
	};
	this.SldrElements[this.currentElement].style.opacity = "1";
	this.SldrElements[PreviousElement].style.opacity = "0";

	if (this.options.dots) {
		
		this.dotOn(PreviousElement);
		this.dotOff(this.currentElement);
		

	}


};
Sim.prototype.NextElement = function(differenceBetweenPoints){
	differenceBetweenPoints = differenceBetweenPoints || 1;
	let PreviousElement = this.currentElement;
	this.currentElement += differenceBetweenPoints;
	if(this.currentElement >= this.elementCounter){
		this.currentElement = 0;
	}
	if(!this.options.loop)
	{
		if (this.currentElement == this.elementCounter - 1) {
			this.SldrArrowRight.style.display = "none";
		};
		this.SldrArrowLeft.style.display = "block";
	};
	this.SldrElements[this.currentElement].style.opacity = "1";
	this.SldrElements[PreviousElement].style.opacity = "0";

	if (this.options.dots) {
		this.dotOn(PreviousElement);
		this.dotOff(this.currentElement);
	}


	};

Sim.prototype.dotOn = function(num){

	this.SldrDotsAll[num].style.cssText = 'background-color:#BBB; cursor:pointer;';
}


Sim.prototype.dotOff = function(num){

	this.SldrDotsAll[num].style.cssText = 'background-color:#556; cursor:default;';
}

Sim.initialize = function(that){
	that.elementCounter = that.SldrElements.length;
	that.currentElement = 0;
	let bgTime = getTime();

	function getTime() {
		return new Date().getTime();
	};
	function setAutoScroll() {
		that.autoScroll = setInterval(function(){
			let fnTime = getTime();
			if(fnTime - bgTime + 10 > that.options.interval)
			{
				fnTime = bgTime;
				that.NextElement();
			}
		},that.options.interval)
	};

	//Initialization
	console.log(that.elementCounter);
	if (that.elementCounter <= 1) {

		that.options.auto = false;
		that.options.arrows = false;
		that.options.dots = false;
		that.SldrArrowRight.style.display = "none";
		that.SldrArrowLeft.style.display = "none";

	};
	if (that.elementCounter >= 1){

		that.SLdrElementFirst.style.opacity = "1";
	};
	if(!that.options.loop){
		that.SldrArrowLeft.style.display = "none";
		that.options.auto = false;
	}
	else if (that.options.auto){
		setAutoScroll();
		// stop of the loop pointing mouse on element

		that.sliderList.addEventListener('mouseover', {function(){clearInterval(that.autoScroll)}});
		that.sliderList.addEventListener('mouseout', setAutoScroll, false);
	}

	// initialization fo arrows
	if (that.options.arrows) {
		that.SldrArrowLeft.addEventListener("click", function() {
			let fnTime = getTime();
			if (fnTime - bgTime > 1000) {
				bgTime = fnTime;
				that.PrevElem();
			}
		}, false)
		that.SldrArrowRight.addEventListener("click", function() {
			let fnTime = getTime();
			if (fnTime - bgTime > 1000) {
				bgTime = fnTime;
				that.NextElement();
			}
		}, false)
	}
	else{
		that.SldrArrowRight.style.display = "none";
		that.SldrArrowLeft.style.display = "none";
	};
	// Initialization of dots

	if(that.options.dots){
		let sum = "" , differenceBetweenPoints;
		for (let i = 0; i < that.elementCounter; i++) {
			sum += '<span class="dot"></span>'
		}
		that.SldrDots.innerHTML = sum;
		that.SldrDotsAll = that.SldrRoot.querySelectorAll('span.dot');	
		// event 'click'

		for (let n = 0; n < that.elementCounter; n++) {
			that.SldrDotsAll[n].addEventListener('click', function(){
				differenceBetweenPoints = Math.abs(n - that.currentElement);
				if(n < that.currentElement) {
					bgTime = getTime(); that.PrevElem(differenceBetweenPoints)
				}
				else if(n > that.currentElement) {
					bgTime = getTime(); that.NextElement(differenceBetweenPoints)
				}
		}, false);
	that.dotOff(0);
for (let i = 1; i < that.elementCounter; i++) {
	that.dotOn(i);
}
}

}
}
