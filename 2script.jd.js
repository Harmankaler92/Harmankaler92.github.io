
    

  </head>
  <

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">


<script src="/js/slider/photoswipe.min.js"></script> 
<script src="/js/slider/photoswipe-ui-default.min.js"></script>
<script type="text/javascript">
	(function($) {
	    var $pswp = $('.pswp')[0];
	    var image = [];

	    $('#wall').each( function() {
	        var $pic     = $(this),
	            getItems = function() {
	                var items = [];
	                $pic.find('a').each(function() {
	                    var $href   = $(this).attr('href'),
	                        $size   = $(this).data('size').split('x'),
	                        $width  = $size[0],
	                        $height = $size[1];

	                    var item = {
	                        src : $href,
	                        w   : $width,
	                        h   : $height
	                    }

	                    items.push(item);
	                });
                        	                return items;
	            }

	        var items = getItems();

	        $.each(items, function(index, value) {
                    if (typeof value['html'] == "undefined") {
	                image[index]     = new Image();
	                image[index].src = value['src'];
                    }
	        });

                    var options = {
	                index: $(this).data("index"),
	                bgOpacity: 0.7,
	                showHideOpacity: true,
                        // modal:true,
                        arrowKeys:false,
                        closeOnScroll:false,
                        pinchToClose:false, 
                        clickToCloseNonZoomable:false,
                        loop:false
	            }

	            lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
	            lightBox.init();
                    $('.arrow-left span, .arrow-right span').click(function(){
                        $(this).parent().click();
                    });
                var cc = 0;
                var rnd = Math.floor(Math.random() * 9) + 1;
                var $el = $(".related-pic-list .grid-item >  a:eq("+rnd+")");
                $('.arrow-left span').wrap("<a class='cu-invoke' target='_blank' href='"+$el.attr('href')+"'></a>");
                lightBox.listen('afterChange', function() {
                    var rnd = Math.floor(Math.random() * 9) + 1;
                    var $el = $(".related-pic-list .grid-item > a:eq("+rnd+")"); // console.log(rnd, $el);
                    if (lightBox.getCurrentIndex() == lightBox.items.length-1) {
                        $('.arrow-right span').removeClass("fa-angle-right").addClass("fa-angle-double-right");
                        $('.arrow-right').attr('title', 'Next gallery');
                        $('.arrow-right span').clearQueue().wrap("<a target='_blank' href='"+$el.attr('href')+"?pic=1'></a>"); 
                    } else {
                        $('.arrow-right span').removeClass("fa-angle-double-right").addClass("fa-angle-right");
                        $('.arrow-right').attr('title', 'Next image');
                        if ($('.arrow-right span').parent().is('a')) {
                            $('.arrow-right span').clearQueue().unwrap();
                        }
                    }
                    if (lightBox.getCurrentIndex() == 0) {
                        $('.arrow-left span').removeClass("fa-angle-left").addClass("fa-angle-double-left");
                        $('.arrow-left').attr('title', 'Previous gallery');
                        $('.arrow-left span').clearQueue().wrap("<a class='cu-invoke' target='_blank' href='"+$el.attr('href')+"'></a>"); 
                    } else {
                        $('.arrow-left span').removeClass("fa-angle-double-left").addClass("fa-angle-left");
                        $('.arrow-left').attr('title', 'Previous image');
                        if ($('.arrow-left span').parent().is('a')) {
                            $('.arrow-left span').clearQueue().unwrap();
                        }
                    }
                });
	        $pic.on('mousedown', 'a', function(event) {
	            // event.preventDefault();
                    event.stopPropagation();
                    var index = $(this).data("index");
                    index++;
                    $(this).attr('href', location.pathname+"/"+index+"?pic=1");
                    // window.open(index+"?pic=1", "_blank");
	        });

                    
               });
	})(jQuery);
</script>

<footer >

<p class='tac copyright'>XXXSexPic.Me © 2016</p>



<script src="http://s1.zenworks.online/static/global/imagesloaded.pkgd.min.js"></script>
<script src="http://s1.zenworks.online/static/global/isotope.pkgd.min.js"></script>
<script src="http://s1.zenworks.online/static/global/jquery.mCustomScrollbar.min.js"></script>
<script src="http://s1.zenworks.online/static/global/app.js"></script>
<style>
  .grid-item.mix {border:0;}