
/**
 * Skrim.js
 * @author Luiz Fonseca 
 * @description Uses breakpoints to allow animations to start/end on a 
 *              specific breakpoint.
 */
;(function(window, document, undefined) {

  // Strict Mode
  'use strict';

	var NAME = 'Skrim';



	function Skrim(element, options) {
		this.element	= element || document.body;
		this.children = document.querySelectorAll('[data-skrim]');
		this.childrenBreakpoints = [];

	
		this.registeredBreakpoints = ['offsetTop', 'resize', 'scroll'];


		this.initialize();
	}


	Skrim.prototype.initialize = function() {
		console.log('Started Skrim monitoring');
		this.checkForChildrenBreakpoints();
		this.createListener();
	}


	Skrim.prototype.checkForChildrenBreakpoints = function() {
		for (var z = 0; z < this.children.length; z++) {
			// Parsing the data-skrim-breakpoint attribute from the HTMLELEMENT
			var breakpoint = JSON.parse(this.children[z].dataset.skrimBreakpoint);

			// Creating a Object with Element + Breakpoint so we can iterate better in the future
			this.childrenBreakpoints[z] = { element: this.children[z] }
			

			// If there are any breakpoints on the element, add to childrenBreakpoints array
			for (var item in breakpoint) {

				this.childrenBreakpoints[z][item] = breakpoint[item];
			}

		}
	}



	Skrim.prototype.createListener = function() {
		var self = this;
		var brks = this.childrenBreakpoints;
		window.addEventListener('scroll', function(data) {
			for (var i = 0; i <= brks.length; i++) {
				self.offsetTopBreakpoint(brks[i]);
			}
		});
	}


	Skrim.prototype.offsetTopBreakpoint = function(obj) {
		if (typeof(obj.offsetTop) == "undefined") { return false; }


		var windowHeight = window.innerHeight;
		var windowScroll = document.scrollingElement.scrollTop;

		var currentOffset = obj.element.offsetTop;
		var elementHeight = obj.element.scrollHeight;
		//var finalPercent = (windowHeight / currentOffset) * 100;
		

		var startInt = (currentOffset - (currentOffset/3));
		var endInt   = (startInt + (elementHeight));


		console.log('distance from top ' + currentOffset);
		console.log('end '+ endInt);
		console.log('current distance' + windowScroll);
		var dr = document.getElementsByClassName('our-dreams');
		console.log(windowScroll);
		if (windowScroll >= startInt && windowScroll <= endInt ) {

			obj.element.classList.add('dream-active'); 	
			dr[0].classList.add('bg-active');
		} else {
			obj.element.classList.remove('dream-active'); 	
			dr[0].classList.remove('bg-active');
			console.log('Out of the element');
		}



	}

	window[NAME] = Skrim; 
	
})(window, document);
