
(function($) {
	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$header_nohomepage = $('#header.no-homepage'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
	breakpoints({
		xlarge:   [ '1281px',  '1680px' ],
		large:    [ '981px',   '1280px' ],
		medium:   [ '737px',   '980px'  ],
		small:    [ '481px',   '736px'  ],
		xsmall:   [ '361px',   '480px'  ],
		xxsmall:  [ null,      '360px'  ]
	});

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Fix the menu when scrolling
	$window.on('scroll', function() {
	  	if($(window).scrollTop() == 0 || $(window).scrollTop() == 1) {
	  		$header_nohomepage.removeClass("onscroll");
	  	} else {
	  		$header_nohomepage.addClass("onscroll");
	  	}
	});

	// Styles of the nav buttons in ABOUT page 
	if(window.location.href.indexOf("about") > -1) {
		$(".aboutButton a").css("letter-spacing","0.4rem");
		$(".aboutButton a").css("background-color","rgba(160, 196, 154, 1.050)");
	}

	// Styles of the nav (and nav-2) buttons in WORK page
	if(window.location.href.indexOf("work") > -1) {		
		$(".actualButton a").css("letter-spacing","0.4rem");
		$(".workButton a").css("letter-spacing","0.4rem");
		$(".actualButton a").css("background-color","#eee");
		$(".workButton a").css("background-color","rgba(237, 204, 144, 1.050)");
	}

	// Styles of the nav buttons in PHOTOGRAPHY page 
	if(window.location.href.indexOf("photography") > -1) {
		$(".photoButton a").css("letter-spacing","0.4rem");
		$(".photoButton a").css("background-color","rgba(254, 242, 113, 1.050)");
	}	


	// Actions clicking in the nav-2 buttons
	$(".actualButton").click(function(){
		$(".actualButton a").css("letter-spacing","0.4rem");
		$(".actualButton a").css("background-color","#eee");
		$(".pastButton a").css("letter-spacing","0.1rem");
		$(".pastButton a").css("background-color","transparent");
		$("#actual").css("display","block");
		$("#past").css("display","none");
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	$(".pastButton").click(function(){
		$(".actualButton a").css("letter-spacing","0.1rem");
		$(".actualButton a").css("background-color","transparent");
		$(".pastButton a").css("letter-spacing","0.4rem");
		$(".pastButton a").css("background-color","#eee");
		$("#actual").css("display","none");
		$("#past").css("display","block");
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	// Flexbox min-height bug on IE.
	if (browser.name == 'ie') {
		var flexboxFixTimeoutId;
		$window.on('resize.flexbox-fix', function() {
			clearTimeout(flexboxFixTimeoutId);
			flexboxFixTimeoutId = setTimeout(function() {
				if ($wrapper.prop('scrollHeight') > $window.height())
					$wrapper.css('height', 'auto');
				else
					$wrapper.css('height', '100vh');
			}, 250);

		}).triggerHandler('resize.flexbox-fix');
	}


	// Nav.
	var $nav = $header.children('nav'),
		$nav_li = $nav.find('li');

	// Add "middle" alignment classes if we're dealing with an even number of items.
	if ($nav_li.length % 2 == 0) {
		$nav.addClass('use-middle');
		$nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');
	}

	$('.openbtn').click(function(){
		document.getElementById("mySidebar").style.height = "300px";
  		document.getElementById("main").style.marginTop = "300px";
	});

	$('.closebtn').click(function(){
		document.getElementById("mySidebar").style.height = "0";
  		document.getElementById("main").style.marginTop= "0";
	});



	// Main.
	var	delay = 325,
		locked = false;

	// Methods.
	$main._show = function(id, initial) {
		var $article = $main_articles.filter('#' + id);

		// No such article? Bail.
		if ($article.length == 0)
			return;

		// Handle lock.
		// Already locked? Speed through "show" steps w/o delays.
		if (locked || (typeof initial != 'undefined' && initial === true)) {

			// Mark as switching.
			$body.addClass('is-switching');

			// Mark as visible.
			$body.addClass('is-article-visible');

			// Deactivate all articles (just in case one's already active).
			$main_articles.removeClass('active');

			// Hide header, footer.
			$header.hide();
			$footer.hide();

			// Show main, article.
			$main.show();
			$article.show();

			// Activate article.
			$article.addClass('active');

			// Unlock.
			locked = false;

			// Unmark as switching.
			setTimeout(function() {
				$body.removeClass('is-switching');
			}, (initial ? 1000 : 0));

			return;
		}

		// Lock.
		locked = true;

		// Article already visible? Just swap articles.
		if ($body.hasClass('is-article-visible')) {

			// Deactivate current article.
			var $currentArticle = $main_articles.filter('.active');
			$currentArticle.removeClass('active');

			// Show article.
			setTimeout(function() {

				// Hide current article.
				$currentArticle.hide();

				// Show article.
				$article.show();

				// Activate article.
				setTimeout(function() {
					$article.addClass('active');
					// Window stuff.
					$window
						.scrollTop(0)
						.triggerHandler('resize.flexbox-fix');

					// Unlock.
					setTimeout(function() {
						locked = false;
					}, delay);

				}, 25);

			}, delay);
		}

		// Otherwise, handle as normal.
		else {
			// Mark as visible.
			$body
				.addClass('is-article-visible');

			// Show article.
			setTimeout(function() {

				// Hide header, footer.
				$header.hide();
				$footer.hide();

				// Show main, article.
				$main.show();
				$article.show();

				// Activate article.
				setTimeout(function() {
					$article.addClass('active');

					// Window stuff.
					$window
						.scrollTop(0)
						.triggerHandler('resize.flexbox-fix');

					// Unlock.
					setTimeout(function() {
						locked = false;
					}, delay);

				}, 25);

			}, delay);
		}
	};

	$main._hide = function(addState) {

		var $article = $main_articles.filter('.active');
		// Article not visible? Bail.
		if (!$body.hasClass('is-article-visible'))
			return;

		// Add state?
		if (typeof addState != 'undefined'
		&&	addState === true)
			history.pushState(null, null, '#');

		// Handle lock.
		// Already locked? Speed through "hide" steps w/o delays.
		if (locked) {

			// Mark as switching.
			$body.addClass('is-switching');

			// Deactivate article.
			$article.removeClass('active');

			// Hide article, main.
			$article.hide();
			$main.hide();

			// Show footer, header.
			$footer.show();
			$header.show();

			// Unmark as visible.
			$body.removeClass('is-article-visible');

			// Unlock.
			locked = false;

			// Unmark as switching.
			$body.removeClass('is-switching');

			// Window stuff.
			$window
				.scrollTop(0)
				.triggerHandler('resize.flexbox-fix');

			return;
		}

		// Lock.
		locked = true;

		// Deactivate article.
		$article.removeClass('active');

		// Hide article.
		setTimeout(function() {

			// Hide article, main.
			$article.hide();
			$main.hide();

			// Show footer, header.
			$footer.show();
			$header.show();

			// Unmark as visible.
			setTimeout(function() {
				$body.removeClass('is-article-visible');

				// Window stuff.
				$window
					.scrollTop(0)
					.triggerHandler('resize.flexbox-fix');

				// Unlock.
				setTimeout(function() {
					locked = false;
				}, delay);

			}, 25);

		}, delay);
	};

})(jQuery);