
var left=$('.new .anniu .left')
var right=$('.new .anniu .right')
var ul=$('.new .ul ul')
var col=$('.new .ul')
var li=$('.new .ul ul li')
var num=0;
col.hover(function(){
	clearInterval(timer)
},function(){
 auto();
})

right.click(function(){
	num++;
	
	fn();
})
left.click(function(){
	num--;
	fn();

})
function auto(){
	timer=setInterval(function(){
			num++;
			
			fn();
		},2000)
		}auto();


function fn(){
	if(num>4){
		num=0
	}
	if(num<0){
		num=4
	}
	var liheight=li.height()*num;
	ul.stop().animate({
		marginTop:-liheight
	},300)
}fn();

$(function(){
				(function(){
					var $window = $(window);
					var $nav = $('#nav');
					var $div2 = $('#div2');

					var navTop = $nav.offset().top;
					
					$window.scroll(function(){
						
						var scrollTop = $(document).scrollTop();

						if ( scrollTop >= navTop )
						{
							$nav.addClass('fixed');
							$div2.addClass('fixed');
						}else
						{
							$nav.removeClass('fixed');
							$div2.removeClass('fixed');
						};

					});
				})();
			});