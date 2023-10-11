/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */


( function( $ ) {
	var $body, $window, $sidebar, resizeTimer,
		secondary, button;

	/*
	var slick_menu = 	jQuery('.slicknav_btn');

	//slick_menu.hide();
	// console.log($( ".slicknav_btn" ).length);

	// var width = $(window).width(); 
	//console.log(width);

	
	console.log(jQuery('.slicknav_menu').length);

	if(slick_menu.is(":visible")){
		console.log('vi');
	}
	else
	{
		console.log('not visi');
	}
	*/

	function initMainNavigation( container ) {
		// Add dropdown toggle that display child menu items.
		container.find( '.menu-item-has-children > a' ).after( '<button class="dropdown-toggle" aria-expanded="false">' + screenReaderText.expand + '</button>' );

		// Toggle buttons and submenu items with active children menu items.
		container.find( '.current-menu-ancestor > button' ).addClass( 'toggle-on' );
		container.find( '.current-menu-ancestor > .sub-menu' ).addClass( 'toggled-on' );

		container.find( '.dropdown-toggle' ).on( 'click', function( e ) {
			var _this = $( this );
			e.preventDefault();
			_this.toggleClass( 'toggle-on' );
			_this.next( '.children, .sub-menu' ).toggleClass( 'toggled-on' );
			_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
			_this.html( _this.html() === screenReaderText.expand ? screenReaderText.collapse : screenReaderText.expand );
		} );
	}
	initMainNavigation( $( '.main-navigation' ) );

	// Re-initialize the main navigation when it is updated, persisting any existing submenu expanded states.
	$( document ).on( 'customize-preview-menu-refreshed', function( e, params ) {
		if ( 'primary' === params.wpNavMenuArgs.theme_location ) {
			initMainNavigation( params.newContainer );

			// Re-sync expanded states from oldContainer.
			params.oldContainer.find( '.dropdown-toggle.toggle-on' ).each(function() {
				var containerId = $( this ).parent().prop( 'id' );
				$( params.newContainer ).find( '#' + containerId + ' > .dropdown-toggle' ).triggerHandler( 'click' );
			});
		}
	});

	secondary = $( '#secondary' );
	button = $( '.site-branding' ).find( '.secondary-toggle' );

	// Enable menu toggle for small screens.
	( function() {
		var menu, widgets, social;
		if ( ! secondary.length || ! button.length ) {
			return;
		}

		// Hide button if there are no widgets and the menus are missing or empty.
		menu    = secondary.find( '.nav-menu' );
		widgets = secondary.find( '#widget-area' );
		social  = secondary.find( '#social-navigation' );
		if ( ! widgets.length && ! social.length && ( ! menu.length || ! menu.children().length ) ) {
			button.hide();
			return;
		}

		button.on( 'click.boatdealer', function() {
			secondary.toggleClass( 'toggled-on' );
			secondary.trigger( 'resize' );
			$( this ).toggleClass( 'toggled-on' );
			if ( $( this, secondary ).hasClass( 'toggled-on' ) ) {
				$( this ).attr( 'aria-expanded', 'true' );
				secondary.attr( 'aria-expanded', 'true' );
			} else {
				$( this ).attr( 'aria-expanded', 'false' );
				secondary.attr( 'aria-expanded', 'false' );
			}
		} );
	} )();

	/**
	 * Add or remove ARIA attributes.
	 *
	 * Uses jQuery's width() function to determine the size of the window and add
	 * the default ARIA attributes for the menu toggle if it's visible.
	 *
	 * @since Twenty Fifteen 1.1
	 */
	function onResizeARIA() {
		if ( 955 > $window.width() ) {
			button.attr( 'aria-expanded', 'false' );
			secondary.attr( 'aria-expanded', 'false' );
			button.attr( 'aria-controls', 'secondary' );
		} else {
			button.removeAttr( 'aria-expanded' );
			secondary.removeAttr( 'aria-expanded' );
			button.removeAttr( 'aria-controls' );
		}
	}

	// Sidebar scrolling.
	function resizeAndScroll() {
		var windowPos = $window.scrollTop(),
			windowHeight = $window.height(),
			sidebarHeight = $sidebar.height(),
			pageHeight = $( '#page' ).height();

		if ( 1041 < $window.width() && pageHeight > sidebarHeight && ( windowPos + windowHeight ) >= sidebarHeight ) {
			$sidebar.css({
				position: 'fixed',
				bottom: sidebarHeight > windowHeight ? 0 : 'auto'
			});
		} else {
			$sidebar.css('position', 'relative');
		}
	}

	$( function() {
		$body          = $( document.body );
		$window        = $( window );
		$sidebar       = $( '#sidebar' ).first();

		$window
			.on( 'scroll.boatdealer', resizeAndScroll )
			.on( 'load.boatdealer', onResizeARIA )
			.on( 'resize.boatdealer', function() {
				clearTimeout( resizeTimer );
				resizeTimer = setTimeout( resizeAndScroll, 500 );
				onResizeARIA();
			} );
		$sidebar.on( 'click.boatdealer keydown.boatdealer', 'button', resizeAndScroll );

		for ( var i = 0; i < 6; i++ ) {
			setTimeout( resizeAndScroll, 100 * i );
		}
	} );


	$('.nav-menu').slicknav(
		{ 
			 label: 'Menu',
			 easingOpen: "easeOutBounce" ,
			 duration: 1000
		 } 
	  );


	$("#display_loading").fadeOut("slow");
	var amountScrolled = 300;
	$(window).scroll(function () {
		if ($(window).scrollTop() > amountScrolled) {
			$('a.back-to-top').fadeIn('fast');
		} else {
			$('a.back-to-top').fadeOut('fast');
		}
	});
	$('a.back-to-top, a.simple-back-to-top').click(function () {
		$("html, body").animate({ scrollTop: 0 }, "fast");
		return false;
	});
	resizeAndScroll();
	for (var i = 1; i < 6; i++) {
		setTimeout(resizeAndScroll, 100 * i);
	}




} )( jQuery );


   /* Toggle for ajax search  */
	   function changeClass(el)
	   {
			classe = document.getElementById("boatdealer_m_search").className;
			if (classe == "boatdealer_m_search1")
			{
				   document.getElementById("boatdealer_m_search").className = "boatdealer_m_search";
				   document.getElementById("boatdealer_shopping_cart").className = "boatdealer_shopping_cart";
			}
			else
			{
				   document.getElementById("boatdealer_m_search").className = "boatdealer_m_search1";
				   document.getElementById("boatdealer_shopping_cart").className = "boatdealer_shopping_cart1";
			}
	  } 
