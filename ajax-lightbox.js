/**
 * AjaxLightBox - AjaxLightBox.js
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
         * Creates a AjaxLightBox and injects the into it the targeted Ajax request
         *
         * data-toggle = "AjaxLightBox" - Creates a trigger for opening a AjaxLightBox
         * data-url = "the path to an Ajax request"
         */
        $(document).on('click.data-api', '[data-toggle="ajax-lightbox"]', function (e) {
                
            e.preventDefault();
            
            var $this = $(this),
                $url = $this.attr('data-url');

            if ($('#AjaxLightBox').length == 0) {
                    
                /* Add the lighbox to the DOM */
                $('body').prepend(
                    '<div id="AjaxLightBox">'
                        + '<div id="AjaxLightBoxContent">'
                            + '<div id="AjaxLightBoxHeader" class=\"clearfix\">'
                                + '<a href="#" data-toggle="ajax-lightbox-close" class="ajax-lightbox-close">&times;</a>'
                            + '</div>'
                            + '<div id="AjaxLightBoxData"></div>'
                            + '<div id="AjaxLightBoxFooter" class=\"clearfix\">'
                                + '<a href="#" data-toggle="ajax-lightbox-close" class="ajax-lightbox-close-button">[Close]</a>'
                            + '</div>'
                        + '</div>'
                    + '</div>'    
                );

                $('#AjaxLightBoxData').load($url);
                 
                /* Remove the default scroll bar, we want the light box to take control */
                $('body').attr('style', 'overflow:hidden');	
            
            }
                
        });
            
        /**
         * Closes the AjaxLightBox
         * 
         * data-toggle = "AjaxLightBox-close" - Creates a trigger for closing a AjaxLightBox
         */
        $(document).on('click.data-api', '[data-toggle="ajax-lightbox-close"]', function (e) {
                
            e.preventDefault();
                    
            if ($('#AjaxLightBox').length > 0) {
                    
                /* Remove the AjaxLightBox from the DOM */
                $('#AjaxLightBox').remove();
                /* Return the default scroll bar*/
                $('body').attr('style', 'overflow:auto');	
               
            }
                
        });

    });
        
}(jQuery));