import $ from 'jquery'
$('button').click(function(){
	const userName="webpack";
	alert(userName)
})
$('.common-topbar-nav-item').each(function(){
	let that = $(this);
	that.mouseover(function(){
		let index =  $('.common-topbar-nav-item').index(that);
		let left = that.position().left;
		let width =  that.outerWidth();
		$(".line").css({
			'left':left,
			'width':width
		})
	})
});
$('.common-topbar-nav-lst').mouseout(function(){
	$(".line").css({
		'width':0
	})
})