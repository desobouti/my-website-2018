/* ==============================================
/*  PRE LOADING
  =============================================== */
'use strict';
$(window).load(function() {
    $('.loader').delay(100).fadeOut('slow');
});


$(document).ready(function() {
    // To not show rotated images
    var isFirefox = typeof InstallTrigger !== 'undefined';
    //var isChrome = !!window.chrome && !!window.chrome.webstore;
    if (isFirefox == false) {
        $(".pano").css('display', 'none'); 
    }

    'use strict';
    /* wow */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 10,
            mobile: true
        }
    );
    wow.init();

    /* Sidebar show and hide */
    $(".menu-btn").on('click',function(i){
        $("body").toggleClass("sidebar_closed");
    });

    /* COUNTER JS */
    $('.counter').counterUp({
        delay: 5,
        time: 3000
    });


    /* portfolio-filter */
    // filter items on button click
    var $grid = $('.grid').isotope({
        // set itemSelector so .grid-sizer is not used in layout
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.grid-sizer'
        }
    });

    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });
    $('#filtr-container').on( 'click', 'li', function(e) {
        e.preventDefault();
        $('#filtr-container li').removeClass('active');
        $(this).closest('li').addClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    /* pop up */
    // portfolio-pop up
    $('.img-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        },
        zoom: {
            enabled: true,
            duration: 300, // change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });

    /* Animated progress bars */
    'use strict';

    var waypoints = $('.progress_container').waypoint(function() {
        $('.progress .progress-bar').progressbar({
            transition_delay: 1000
        });
    },{
        offset: '50%'
    });

    //New funcionality buttons left-menu
    $("#btn_all").mouseover(function(){
        if ($("#btn_all").hasClass("active") == false) {
            $(".line_all").css("width","300px");
            $("#btn_all a").css("color","#cc0000");
        } 
    });
    $("#btn_all").mouseout(function(){
        if ($("#btn_all").hasClass("active") == false) {
            $(".line_all").css("width","1px");
            $("#btn_all a").css("color","#9c9ca9");
        }
    });

    $("#btn_2018").mouseover(function(){
        if ($("#btn_2018").hasClass("active") == false) {
            $(".line_2018").css("width","300px");
            $("#btn_2018 a").css("color","#cc0000");
        }
    });
    $("#btn_2018").mouseout(function(){
        if ($("#btn_2018").hasClass("active") == false) {
            $(".line_2018").css("width","1px");
            $("#btn_2018 a").css("color","#9c9ca9");
        }
    });

    $("#btn_2017").mouseover(function(){
        if ($("#btn_2017").hasClass("active") == false) {
            $(".line_2017").css("width","300px");
            $("#btn_2017 a").css("color","#cc0000");
        }
    });
    $("#btn_2017").mouseout(function(){
        if ($("#btn_2017").hasClass("active") == false) {
            $(".line_2017").css("width","1px");
            $("#btn_2017 a").css("color","#9c9ca9");
        }
    });

    $("#btn_2016").mouseover(function(){
        if ($("#btn_2016").hasClass("active") == false) {
            $(".line_2016").css("width","300px");
            $("#btn_2016 a").css("color","#cc0000");
        }
    });
    $("#btn_2016").mouseout(function(){
        if ($("#btn_2016").hasClass("active") == false) {
            $(".line_2016").css("width","1px");
            $("#btn_2016 a").css("color","#9c9ca9");
        }
    });

    $("#btn_2015").mouseover(function(){
        if ($("#btn_2015").hasClass("active") == false) {
            $(".line_2015").css("width","300px");
            $("#btn_2015 a").css("color","#cc0000");
        }
    });
    $("#btn_2015").mouseout(function(){
        if ($("#btn_2015").hasClass("active") == false) {
            $(".line_2015").css("width","1px");
            $("#btn_2015 a").css("color","#9c9ca9");
        }
    });

    $("#btn_2014").mouseover(function(){
        if ($("#btn_2014").hasClass("active") == false) {
            $(".line_2014").css("width","300px");
            $("#btn_2014 a").css("color","#cc0000");
        }
    });
    $("#btn_2014").mouseout(function(){
        if ($("#btn_2014").hasClass("active") == false) {
            $(".line_2014").css("width","1px");
            $("#btn_2014 a").css("color","#9c9ca9");
        }
    });

    $("#btn_2013").mouseover(function(){
        if ($("#btn_2013").hasClass("active") == false) {
            $(".line_2013").css("width","300px");
            $("#btn_2013 a").css("color","#cc0000");
        }
    });
    $("#btn_2013").mouseout(function(){
        if ($("#btn_2013").hasClass("active") == false) {
            $(".line_2013").css("width","1px");
            $("#btn_2013 a").css("color","#9c9ca9");
        }
    });

    $("#btn_2012").mouseover(function(){
        if ($("#btn_2012").hasClass("active") == false) {
            $(".line_2012").css("width","300px");
            $("#btn_2012 a").css("color","#cc0000");
        }
    });
    $("#btn_2012").mouseout(function(){
        if ($("#btn_2012").hasClass("active") == false) {
            $(".line_2012").css("width","1px");
            $("#btn_2012 a").css("color","#9c9ca9");
        }
    });

    $("#btn_2011").mouseover(function(){
        if ($("#btn_2011").hasClass("active") == false) {
            $(".line_2011").css("width","300px");
            $("#btn_2011 a").css("color","#cc0000");
        }
    });
    $("#btn_2011").mouseout(function(){
        if ($("#btn_2011").hasClass("active") == false) {
            $(".line_2011").css("width","1px");
            $("#btn_2011 a").css("color","#9c9ca9");
        }
    });

    if ($("#btn_all").hasClass("active") == true) {
        $(".line_all").css("width","300px");
        $("#btn_all a").css("color","#cc0000");
    }     
});

//New funcionality buttons left-menu
$("#btn_all").click(function() {
    $(".line").css("width","1px");
    $("#filtr-container li a").css("color","#9c9ca9");
    $(".line_all").css("width","300px");
    $("#btn_all a").css("color","#cc0000");
});

$("#btn_2018").click(function() {
    $(".line").css("width","1px");
    $("#filtr-container li a").css("color","#9c9ca9");
    $(".line_2018").css("width","300px");
    $("#btn_2018 a").css("color","#cc0000");
});

$("#btn_2017").click(function() {
    $(".line").css("width","1px");
    $("#filtr-container li a").css("color","#9c9ca9");
    $(".line_2017").css("width","300px");
    $("#btn_2017 a").css("color","#cc0000");
});

$("#btn_2016").click(function() {
    $(".line").css("width","1px");
    $("#filtr-container li a").css("color","#9c9ca9");
    $(".line_2016").css("width","300px");
    $("#btn_2016 a").css("color","#cc0000");
});

$("#btn_2015").click(function() {
    $(".line").css("width","1px");
    $("#filtr-container li a").css("color","#9c9ca9");
    $(".line_2015").css("width","300px");
    $("#btn_2015 a").css("color","#cc0000");
});

$("#btn_2014").click(function() {
    $(".line").css("width","1px");
    $("#filtr-container li a").css("color","#9c9ca9");
    $(".line_2014").css("width","300px");
    $("#btn_2014 a").css("color","#cc0000");
});

$("#btn_2013").click(function() {
    $(".line").css("width","1px");
    $("#filtr-container li a").css("color","#9c9ca9");
    $(".line_2013").css("width","300px");
    $("#btn_2013 a").css("color","#cc0000");
});

$("#btn_2012").click(function() {
    $(".line").css("width","1px");
    $("#filtr-container li a").css("color","#9c9ca9");
    $(".line_2012").css("width","300px");
    $("#btn_2012 a").css("color","#cc0000");
});

$("#btn_2011").click(function() {
    $(".line").css("width","1px");
    $("#filtr-container li a").css("color","#9c9ca9");
    $(".line_2011").css("width","300px");
    $("#btn_2011 a").css("color","#cc0000");
});