/**
 * A simple javascript file for creating and managing light boxes
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
         * Creates a psuedo-random string of a desired length
         * @param string length 
         */
        function random(length){
            var $string = "",
                $charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                $length = length,
                $i=0;
        
            for($i=0; $i < $length; $i+=1){
                $string += $charSet.charAt(Math.floor(Math.random() * $charSet.length));
            }
        
            return $string;
        }

        
        /**
         * Creates, populates and manages a light box
         * @param object caller
         */
        function ajaxLightbox(caller) {
            var $caller = caller,
                $url = $caller.attr('data-url'),
                $target = $caller.attr('data-target'); 

            //If the $target is undefined we will create a new lightbox, otherwise we assume your closing an exisiting
            //lightbox
            if ($target === undefined) {
                $target = 'LB' + random(7);
            }
  
            //No lightbox with an id of $target exists, create a new one
            if ($('#' + $target).length === 0) {
                        
                /* Add the lighbox to the DOM */
                $('body').prepend(
                    '<div id="' + $target + '" class="lightbox">'
                        + '<div class="lightbox-content">'
                            + '<div class="lightbox-header clearfix">'
                                + '<a href="#" data-toggle="lightbox" data-ajax="true" data-target="'
                                    + $target
                                    + '" class="lightbox-close">'
                                    + '&times;</a>'
                            + '</div>'
                            + '<div id="' + $target + 'BoxData"></div>'
                            + '<div class="lightbox-footer clearfix">'
                                + '<a href="#" data-toggle="lightbox" data-ajax="true" data-target="'
                                    + $target
                                    + '" class="lightbox-close-button">'
                                    + '[Close]</a>'
                            + '</div>'
                        + '</div>'
                    + '</div>'    
                );

                $('#' + $target + 'BoxData').load($url);
                 
                /* Remove the default scroll bar, we want the light box to take control */
                $('body').attr('style', 'overflow:hidden');
              
            //The target lightbox exists, remove it from the DOM  
            }else{ 
                
                /* Remove the AjaxLightBox from the DOM */
                $('#' + $target).remove();
                /* Return the default scroll bar*/
                $('body').attr('style', 'overflow:auto');
            }
        }
                
        /**
         * Toggles any element with data-toggle set to lightbox
         *
         * data-toggle = "lightbox" - Creates a trigger for opening a AjaxLightBox
         */
        $(document).on('click.data-api', '[data-toggle="lightbox"]', function (e) {
                
            e.preventDefault();
            
            var $this = $(this),
                $ajax = $this.attr('data-ajax'),
                $id = $this.attr('data-target');
                
            if ($ajax === 'true') {
                ajaxLightbox($this);
            }else{
               $('#' + $id).toggle(); 
            }
            
        });
        
    });
        
}(jQuery));