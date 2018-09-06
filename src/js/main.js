import $ from 'jquery'
$('button').click(function(){
	const userName="webpack";
	alert(userName)
})
$('.common-topbar-nav-lst').mouseenter(function(){
	$('.line').addClass('show');	
});
$('.common-topbar-nav-item').each(function(){
	let that = $(this);
	that.mouseenter(function(){
		let index =  $('.common-topbar-nav-item').index(that);
		let left = that.position().left;
		let width =  that.outerWidth();
		$(".line").css({
			'left':left,
			'width':width
		})
	})
});
$('.common-topbar-nav-lst').mouseleave(function(){
	$(".line").css({
		'width':0,
		"left":0
	}).removeClass('show');
})