function Slider(sSelector){
	var  p = this;
	console.log(this)

	// 1. Data ====================
	 p.pictures = $(sSelector);
	 p.picture = p.pictures.find('.pic');
	 
	console.log(p.picture);

	// 2. Logic ===================
	 p.slide = function (){
	 	var centeredWidth = p.picture.eq(0).width()
	 		,containerWidth = p.pictures.width()
	 		,containerHeight = p.pictures.height()
	 		;
	 	p.picture.eq(0).animate({'z-index':'0','right':0})	
	 	$(this).animate({'z-index':'5', 'right':'250px', 'width': centeredWidth}); 
	 	$(this).children('img').animate({'height':containerHeight})
	 	
	 	console.log(containerWidth, centeredWidth)
	 }
	 

	// 3. Events ==================
	 p.picture.click(p.slide);
	 

	}

//Picture.sSelector = new $[![parentClass]!]();