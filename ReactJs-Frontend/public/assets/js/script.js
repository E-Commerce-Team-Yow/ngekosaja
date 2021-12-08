(function($) {
    "use strict";
     $(document).on('ready', function(){
        // alert('test')
        $('#lightSlider').lightSlider({
            gallery: true,
            item: 1,
            loop: true,
            slideMargin: 0,
            thumbItem: 9
        });
     });
})(jQuery);
