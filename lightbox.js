/**
 * LightBox - lightbox.js
 * 
 * Copyright 2013, Jason D Snider. (http://jasonsnider.com)
 * Licensed under The MIT License
 * 
 * @copyright Copyright 2013, Jason D Snider. (http://jasonsnider.com)
 * @link http://jasonsnider.com
 * @license MIT License (http://www.opensource.org/licenses/mit-license.php)
 */
(function ($){
    "use strict"; /*jslint browser:true */
    $(function () {
        
        /**
         * Creates a lightbox and injects the into it the targeted Ajax request
         *
         * data-toggle = "lightbox" - Creates a trigger for opening a lightbox
         * data-url = "the path to an Ajax request"
         */
        $(document).on('click.data-api', '[data-toggle="lightbox"]', function (e) {
                
            e.preventDefault();
            
            var $this = $(this),
                $url = $this.attr('data-url');

            if ($('#LightBox').length == 0) {
                    
                /* Add the lighbox to the DOM */
                $('body').prepend(
                    '<div id="LightBox">'
                        + '<div id="LightBoxContent">'
                            + '<div id="LightBoxHeader" class=\"clearfix\">'
                                + '<a href="#" data-toggle="lightbox-close" class="lightbox-close">&times;</a>'
                            + '</div>'
                            + '<div id="LightBoxData"></div>'
                            + '<div id="LightBoxFooter" class=\"clearfix\">'
                                + '<a href="#" data-toggle="lightbox-close" class="lightbox-close-button">[Close]</a>'
                            + '</div>'
                        + '</div>'
                    + '</div>'    
                );

                $('#LightBoxData').load($url);
                 
                /* Remove the default scroll bar, we want the light box to take control */
                $('body').attr('style', 'overflow:hidden');	
            
            }
                
        });
            
        /**
         * Closes the lightbox
         * 
         * data-toggle = "lightbox-close" - Creates a trigger for closing a lightbox
         */
        $(document).on('click.data-api', '[data-toggle="lightbox-close"]', function (e) {
                
            e.preventDefault();
                    
            if ($('#LightBox').length > 0) {
                    
                /* Remove the lightbox from the DOM */
                $('#LightBox').remove();
                /* Return the default scroll bar*/
                $('body').attr('style', 'overflow:auto');	
               
            }
                
        });
            
    });
        
}(jQuery));