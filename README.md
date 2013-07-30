lightbox
========

A simple lightbox using jQuery and HTML5 data-*

## Usage ##

Lightbox is controlled by applying custom data attributes to any HTML element, typically and anchor tag.

The following is required for the activation of a lightbox

data-toggle="lightbox"
data-url="/path/to/the/ajax/request"

The following is required for the closing of a lightbox.
Note: Each instance of a lightbox opens with two closing elements.

data-toggle="lightbox-close"

## Dependencies ##

jQuery

An implementation of the .clearfix class (recommended for styling the embedded closing elements).
If you need it, below I have included the version from HTML5 BOILERPLATE 

````
/**
 * Clearfix: contain floats
 *
 * For modern browsers
 * 1. The space content is one way to avoid an Opera bug when the
 *    `contenteditable` attribute is included anywhere else in the document.
 *    Otherwise it causes space to appear at the top and bottom of elements
 *    that receive the `clearfix` class.
 * 2. The use of `table` rather than `block` is only necessary if using
 *    `:before` to contain the top-margins of child elements.
 */
.clearfix:before,
.clearfix:after {
	content: " ";
	display: table; 
}

.clearfix:after {
	clear: both;
}
````

For compatibility with non HMTL5 browsers I would recommend:
modernizr
yepnope
[polyfill]