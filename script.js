$(function(){
	var _window = $(window),
		_header = $('.container'),
		heroBottom;
	
	_window.on('scroll',function(){
		heroBottom = $('.hero').height();
		if(_window.scrollTop() > heroBottom){
			_header.addClass('transform');
		}
		else{
			_header.removeClass('transform');   
		}
	});
	
	_window.trigger('scroll');	
});