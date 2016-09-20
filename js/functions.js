$(document).ready(function(){
    $('body').mouseover(function(){
        //$('header').html(screen.width);
    });

    //tabs
    $(".client-testimonials li:first").show();
    $(".client-test-move li").click(function(){
        var index = $(this).index();
        $(this).addClass("client-current").siblings().removeClass("client-current");
        $(".client-testimonials li").eq(index).show().siblings().hide();
    });

    $(".our-list > li:first").show();
    $(".our-move > li").click(function(){
        var index = $(this).index();
        $(this).addClass("our-current").siblings().removeClass("our-current");
        $(".our-list > li").eq(index).fadeIn('slow').siblings().hide();
    });

    $(".services-content > div:first").show();
    $(".services-list > div").click(function(){
        var index = $(this).index();
        $(this).addClass("services-current").siblings().removeClass("services-current");
        $(".services-content > div").eq(index).fadeIn(500).siblings().hide();
    });

    $(".about-slider > li:first").show();
    $(".about-move > li").click(function(){
        var index = $(this).index();
        $(this).addClass("about-current").siblings().removeClass("about-current");
        $(".about-slider > li").eq(index).fadeIn(500).siblings().hide();
    });

    //scroll
    var defaults = {
        containerID: 'moccaUItoTop',
        containerHoverClass: 'moccaUIhover',
        scrollSpeed: 1150,
        easingType: 'linear'
    };

    $().UItoTop();

    $('nav li a.inside').on('click',function(e){
        e.preventDefault();
        var strAncla=$(this).attr('href');

        $('body,html').stop(true,true).animate({
            scrollTop: $(strAncla).offset().top
        },1000);
    });

    //flickr
    $('#flickr').jflickrfeed({
        limit: 6,
        qstrings: {
            id: '44802888@N04'
        },
        itemTemplate:
        '<li class="ifour box"><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    });

    //client area
    $('#client-show').click(function(){
        $('.client-area').toggle();
    });


    //flexslider
    $('.flexslider').flexslider({
        animation: "fade",
        auto:true,
        controlNav: true,
        directionNav: false,
        prevText: "",
        nextText: ""
    });

    var slider = $('.flexslider').data('flexslider');
    $('.flex-prev').click(function (event) {
        event.preventDefault();
        slider.flexslider('prev')
    });
    $('.flex-next').click(function (event) {
        event.preventDefault();
        slider.flexslider('next')
    });

    $('.our-list .our-over').hover(function(){
        $(this).prev().children(".our-img").addClass("our-img-nofilter");
        $(this).prev().children(".our-overview").css("visibility", "visible");
    }, function(){
        $(this).prev().children(".our-img").removeClass("our-img-nofilter");
        $(this).prev().children(".our-overview").removeAttr("style");
    });

});


//map
$(window).load(function(){ 
    var latlng = new google.maps.LatLng(40.3799344,49.8102212);
    var myOptions = {
      zoom: 15,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var image = new google.maps.MarkerImage(
      'img/star.png',
        new google.maps.Size(48,48),
        new google.maps.Point(0,0),
        new google.maps.Point(0,30)
    );

    var marker = new google.maps.Marker({
        draggable: false,
        raiseOnDrag: false,
        icon: image,
        map: map,
        position: latlng,
        title: 'Ubicación'
    });

    var contentMSG = '<section class="itwelve contact"><section ><h3>Bizimlə əlaqə və iş vaxtlarımız</h3><div class="separator"></div>Həftənin hər günü (Cümə axşamı istisna) <br>İlk müştəri 9:30  dan son müştəri 20:30 a qədər.<br><br>Cümə axşamlar: <br>Bu gün mən istrahət edirəm :)<br><br>Address: Ə.B.Haqverdiyev k., Elmlər, Baku, AZE <br>Phone: (+994) 055-739-30-99<br>E-mail: mintika@beysalon.com<br></section></section>';

    var labelText = '<div id="contact-box" >'+contentMSG+'</div><div class="contact-box-ind s4"></div>';

    var myOptions = {
             content: labelText
            ,boxStyle: {
              width: "460px",
             }
            ,pixelOffset: new google.maps.Size(-700, -460)
            ,position: latlng
            ,closeBoxMargin: "10px"
            ,closeBoxURL: "img/icons/close.png"
            ,isHidden: false
    };

    var ibLabel = new InfoBox(myOptions);
    ibLabel.open(map);

    google.maps.event.addListener(marker, 'click', function() {
        ibLabel.open(map);
    });

});














