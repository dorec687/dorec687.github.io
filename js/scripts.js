// JpreLoader ------------------

	$('#main').jpreLoader({
		loaderVPos: '50%',
		autoClose: true,
	}, 
	function() {	
		$('#main').animate({"opacity":'1'},{queue:false,duration:700,easing:"easeInOutQuad"});
		setTimeout( function(){		
			$('.panel').slideUp(1000);
		},1200);
	});

function initCashemir() {

// functions ------------------
	"use strict";
	
	var ino = $('.navigation');
	var $tElems = $('.inner a');
	var ct = $('.inner a').length;
	var al = {queue:true,duration:800,easing:"easeInOutQuad"};
	var bo = $('.body-overlay');
	var $mem = $('.member-box');
	var memlenght = $('.member-box').length;
	var $project = $('.box a');
	var projectlenght = $('.box a').length;	  
	
	var isMobile = false; //initiate as false
// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
		isMobile = true;
	}

//play video trailer
	var tempVidTime = 1;
	$(".trailer").on("mouseover", function(event) {
		if(isMobile == false){
		tempVidTime = this.currentTime;
		this.currentTime = 0;
		this.muted = true;
		this.play();
		this.setAttribute("controls", "controls");
		}

	}).on('mouseleave', function(event) {
		if(isMobile == false){
		this.currentTime = tempVidTime;
		this.pause();
		this.removeAttribute("controls");
		this.currentTime = tempVidTime;
		}

	});
	
// show menu ------------------	

	function showmenu(){
		$(".nav-button").addClass('nav-rotade');
		ino.animate({"left":'0'},al);          
		ino.removeClass("isDown");
		bo.fadeIn();		
		setTimeout( function(){		
			for (var i = 0; i <= ct; i++) {
				var cft = $tElems[i];
				$(cft).delay(150 * i).animate({'opacity' : '1',left:'0'},al); 
			}
		},100);
	}
	
// hide menu ------------------

	function hidemenu(){
		$(".nav-button").removeClass('nav-rotade');
		ino.animate({"left":'-200px'},al);   
		ino.addClass("isDown");
		bo.fadeOut();		
		setTimeout( function(){					
			for (var i = 0; i <= ct; i++) {
				var cft = $tElems[i];
				$(cft).delay(150 * i).animate({'opacity' : '0',left:'-25%'},al);				 
			}		
		},100);
	}
		
// project show ------------------

	function showprojectbox(){
			setTimeout( function(){					
				for (var i = 0; i <= projectlenght; i++) {
					var projectb = $project[i];
					$(projectb).delay(250 * i).animate({'opacity' : '1',top:'0'},1000);				 
				}		
			},600);
		}	
		
// call menu ------------------

	$(".nav-button").bind('click', function() {
		if ($('.navigation').hasClass("isDown") ) {
			showmenu();
			
		} else {
			hidemenu();
		}	
	});
	
// navigation links ------------------

    $(".inner a.scroll-link").on("click", function() {
        var a = 80;
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") || location.hostname == this.hostname) {
            var b = $(this.hash);
            b = b.length ? b : $("[name=" + this.hash.slice(1) + "]");
            if (b.length) {
                $("html,body").animate({
                    scrollTop: b.offset().top - a
                }, {
                    queue: false,
                    duration: 1600,
                    easing: "easeInOutExpo"
                });
                return false;
            }
        }

    });	
	    $(".inner a.scroll-link , .body-overlay").on("click", function() {
		
								setTimeout( function(){
			hidemenu();
		},900);
		
		});
	
// Call plugins  ----------------------------------------
	
//  superslides --------
	
	$('#slides').superslides({
		animation: 'fade',
		play: 10000
	});
	
//  scroll nav --------
		
	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollOffset: 30,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing',
	});

// owlCarousel  --------
   
	$("#clientsay").owlCarousel({		   
		navigation : true,
		pagination:true, 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		transitionStyle : "goDown"			  
	});
	
	$("#client-carusel").owlCarousel({		   
		navigation : false,
		pagination:false,  
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 4,			  
	});	

    var owl = $("#owl-demo");	
	owl.owlCarousel({		
		navigation : false,
		pagination:false,
		singleItem : true,
		paginationSpeed : 1000,
		goToFirstSpeed : 2000,
		autoHeight : true,
		mouseDrag:	false,	
		touchDrag:false,
		transitionStyle : "goDown"	   
	});
	
// about animation  --------
	 
	$(".next-slide, .close").click(function(){
		var ww = $(window).width();
      	owl.trigger('owl.next');		
		if(ww < 959){			
			setTimeout( function(){			
				$('html').scrollTo('#about h2',800,{'axis':'y'});			
			},600);	
		}
    });
	
	$('.lanch-sklills').click(function(){		  
		setTimeout( function(){	
			$('.skillbar').each(function(){
				$(this).find('.skillbar-bar').animate({width:$(this).attr('data-percent')},3000);
			});		
		},1500);		  
	});
		 
	// flexslider  --------
	
	$('.serviseslider').flexslider({
		animation: "slide",
		smoothHeight: true,
		slideshow: false,
		controlNav: false,              
		directionNav: false,
		startAt: 1, 
		start: function(slider) {			
            $('a.animbox').click(function() {
                var slideTo = $(this).attr("name")
                var slideToInt = parseInt(slideTo)
				var ww = $(window).width();			
                if (slider.currentSlide != slideToInt) 
				{					
                    slider.flexAnimate(slideToInt)
                }				
				if(ww < 959){									
					setTimeout( function(){
						$('html').scrollTo('.serviseslider',800,{'axis':'y'} );									
					},600);							
				}
            });
        }
	});
	
	$('.resume-slider').flexslider({
		animation: "slide",
		slideDirection: "horizontal",
		slideshow: false,
		slideshowSpeed: 3500,
		animationDuration: 500,
		directionNav: true,
		controlNav: false,
	});
	
	$('.single-media').flexslider({
		animation: "slide",
		slideDirection: "horizontal",
		slideshow: false,
		slideshowSpeed: 3500,
		animationDuration: 500,
		directionNav: true,
		controlNav: false,
	});	
	
// magnificPopup   --------	
	
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}    
	});	
		
	$('.service_box').click(function(){	  
	  $('.service_box').removeClass('actser');
	  $(this).addClass('actser');	  
	});
	
	$('#options li').click(function(){	  
	  $('#options li').removeClass('actcat');
	  $(this).addClass('actcat');  
	});  
	
// Scroll animation   ----------------------------------------
	
	$('.animaper').appear();
		
	$(document.body).on('appear', '.present-block', function() {
		$(this).each(function(){ 			
			setTimeout (function (){				
				$('.present-block').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 600 ); 
		});
	});
	
	$(document.body).on('appear', '.service_box', function() {
		$(this).each(function(){ 				
				$('.service_box').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
		});
	});
	
	$(document.body).on('appear', '#folio_container', function() {
		$(this).each(function(){ 			
				showprojectbox();
		});
	});
	
	$(document.body).on('appear', '.resume-line', function() {
		$(this).each(function(){ 			
				$('.resume-line').animate({height:'100%'},{queue:true,duration:3200});
		});
	});	
	
	$(document.body).on('appear', '.resume-box', function() {
		$(this).each(function(){ 			
			setTimeout (function (){	
				$('.resume-box').animate({opacity:'1', top:'0'},{queue:true,duration:1200});
			}, 800 );
		});
	});	
		
	$(document.body).on('appear', '.smallicon', function() {
		$(this).each(function(){ 			
			setTimeout (function (){	
				$('.smallicon').animate({opacity:'0.8', top:'0'},{queue:true,duration:1200});
			}, 200 );
		});
	});
	
//  Mixitup  ------
	
	$('#folio_container').mixitup({
		targetSelector: '.box',
		effects: ['fade','rotateZ','rotateX','rotateY'],
		easing: 'windback',
		transitionSpeed: 1200,
	});	
	

// Scroll to  --------

	$('.to-top, .logo').click(function() {$('html').scrollTo('#topSlide, .simple-page-head',1500,{'axis':'y'});hidemenu();});
	$('.start').click(function() {$('html').scrollTo('#about',1500,{'axis':'y'});});
	
	$('.actform').click(function() {
		$('.contactForm').slideToggle(1000);
		setTimeout (function (){	
			$('html').scrollTo('.to-top',1000,{'axis':'y'});	
		}, 800 );	

	});
	
	$('.showmap').click(function(){
		if($(this).hasClass('mnv')){
			$('.mapbox').animate({"height":'450px'},{queue:false,duration:700,easing:"easeInOutQuad"});
			setTimeout (function (){	
				$('html').scrollTo('.mapbox',1000,{'axis':'y'});	
			}, 800 );
			$(this).removeClass('mnv');
		}
		else{
			$(this).addClass('mnv');
			$('.mapbox').animate({"height":'0'},{queue:false,duration:700,easing:"easeInOutQuad"});
		}
	});
	
	$('.close-map').click(function(){
		$('.showmap').addClass('mnv');
		$('.mapbox').animate({"height":'0'},{queue:false,duration:700,easing:"easeInOutQuad"});
	});

// Subscribe   ----------------------------------------

	$('.subscriptionForm').submit(function(){		
		var email = $('#subscriptionForm').val();
		$.ajax({
			url:'php/subscription.php',
			type :'POST',
			dataType:'json',
			data: {'email': email},success: function(data){
				if(data.error){
					$('#error').fadeIn()
				}
				else{
					$('#success').fadeIn();
					$("#error").hide();}
				}
			});
		return false
	});
	
	$('#subscriptionForm').focus(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();	
	});
	
	$('#subscriptionForm').keydown(function(){	
		$('#error').fadeOut();
		$('#success').fadeOut();		
	});	 
				
};

// Contact submit  ----------------------------------------

	$("#submit_btn").click(function(){		
		var user_name=$('input[name=name]').val();
		var user_email=$('input[name=email]').val();
		var user_message=$('textarea[name=message]').val();
		var proceed=true;
			if(user_name==""){
				$('input[name=name]').css('border','1px solid #F54F36');
				proceed=false
			}
			if(user_email==""){
				$('input[name=email]').css('border','1px solid #F54F36');
				proceed=false
			}
			if(user_message==""){
				$('textarea[name=message]').css('border','1px solid #F54F36');
				proceed=false
			}
			if(proceed){
				post_data={'userName':user_name,'userEmail':user_email,'userMessage':user_message};
				$.post('php/contact_me.php',
				post_data,
				function(data){
					$("#result").hide().html('<div class="success">'+data+'</div>').slideDown(500);
					$('#contact_form input').val('');
					$('#contact_form textarea').val('')}).fail(
						function(err){
							$("#result").hide().html('<div class="error">'+err.statusText+'</div>').fadeIn(1500)
					});
			}
	});
	
	$("#contact_form input, #contact_form textarea").keyup(function(){		
			$("#contact_form input, #contact_form textarea").css('border','1px solid #101011');
			$("#result").fadeOut(1500)			
	});	

// Ajax portfolio   ----------------------------------------
		
function initPortfolio() {
	
	"use strict";

	var window_height = $(window).height(),
      current,
	  next, 
	  prev,
	  target, 
	  hash,
	  url,
	  page,
	  title,	  	  	  
	  projectIndex,
	  scrollPostition,
	  projectLength,
	  ajaxLoading = false,
	  wrapperHeight,
	  pageRefresh = true,
	  content =false,
	  loader = $('div#loader'),
	  portfolioGrid = $('#folio_container'),
	  projectContainer = $('div#ajax-content-inner'),
	  projectNav = $('#project-navigation ul'),
	  exitProject = $('div#closeProject a'),
	  easing = 'easeOutExpo',
	  folderName ='projects';
	  			
	$(window).bind( 'hashchange', function() {  		 
		hash = $(window.location).attr('hash'); 
		var root = '#!'+ folderName +'/';
		var rootLength = root.length;	
		if( hash.substr(0,rootLength) != root ){
			return;						
		} else {	
			var correction = 50;
			var headerH = $('#portfolio h2').outerHeight()+correction;
			hash = $(window.location).attr('hash'); 
			url = hash.replace(/[#\!]/g, '' ); 
			portfolioGrid.find('li.box.current').children().removeClass('act');
			portfolioGrid.find('li.box.current').removeClass('cur' );
			if(pageRefresh == true && hash.substr(1,rootLength) ==  root){	
					$('html').scrollTo('#portfolio h2',1500,{'axis':'y'},function(){
						loadProject();
					});
			}else if(pageRefresh == false && hash.substr(0,rootLength) == root){				
				$('html,body').stop().animate({scrollTop: (projectContainer.offset().top-headerH)+'px'},800,'easeOutExpo', function(){ 							
					if(content == false){						
						loadProject();							
					}else{	
						projectContainer.animate({opacity:0,height:wrapperHeight},function(){
						loadProject();
						});
					}							
				projectNav.fadeOut('100');
				exitProject.fadeOut('100');						
			});
				}else if(hash=='' && pageRefresh == false || hash.substr(0,rootLength) != root && pageRefresh == false || hash.substr(0,rootLength) != root && pageRefresh == true){	
					scrollPostition = hash; 
					console.log(scrollPostition);
					$('html,body').stop().animate({scrollTop: scrollPostition+'px'},1000,function(){						
					deleteProject();														
				});
			}
			portfolioGrid.find('li.box a[href="#!' + url + '"]' ).parent().addClass( 'cur' );
			portfolioGrid.find('li.box.cur').find('a').addClass('act');
		}  
	});
		  	
	function loadProject(){
		loader.fadeIn();
		if(!ajaxLoading) {				
			ajaxLoading = true;
			projectContainer.load( url +' div#ajaxpage', function(xhr, statusText, request){
				if(statusText == "success"){				
					ajaxLoading = false;
					page =  $('div#ajaxpage');		
					$('.flexslider').flexslider({
						animation: "slide",
						slideDirection: "horizontal",
						slideshow: false,
						slideshowSpeed: 3500,
						animationDuration: 500,
						directionNav: true,
						controlNav: true,
					});
					$('.popup-gallery').magnificPopup({
						delegate: 'a',
						type: 'image',
						mainClass: 'my-mfp-zoom-in',
						tLoading: 'Loading image #%curr%...',
						gallery: {
								enabled: true,
								navigateByImgClick: true,
								preload: [0,1]
						},
						image: {
								tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
								titleSrc: function(item) {
								return item.el.attr('title') + '<small>by KWST</small>';
							}
						}
					});			
				hideLoader();				  									
				$(".container").fitVids();	
				}
			});
		}
	}	
	function hideLoader(){
		loader.fadeOut('fast', function(){													  
			showProject();					
		});			 
	}
		
	function showProject(){
		if(content==false){
			wrapperHeight = projectContainer.children('div#ajaxpage').outerHeight()+'px';
			projectContainer.animate({opacity:1,height:wrapperHeight}, function(){
				$(".container").fitVids();
				scrollPostition = $('html,body').scrollTop();
				projectNav.fadeIn();
				exitProject.fadeIn();
				content = true;	
			});
		}
		else{
				wrapperHeight = projectContainer.children('div#ajaxpage').outerHeight()+'px';
				projectContainer.animate({opacity:1,height:wrapperHeight}, function(){																		  
					$(".container").fitVids();
					scrollPostition = $('html,body').scrollTop();
					projectNav.fadeIn();
					exitProject.fadeIn();
			});					
		}
			projectIndex = portfolioGrid.find('li.box.cur').index();
			projectLength = $('li.box a').length-1;
		if(projectIndex == projectLength){
				$('ul li#nextProject a').addClass('disabled');
				$('ul li#prevProject a').removeClass('disabled');
		}else if(projectIndex == 0){
				$('ul li#prevProject a').addClass('disabled');
				$('ul li#nextProject a').removeClass('disabled');	
		}else{
				$('ul li#nextProject a,ul li#prevProject a').removeClass('disabled');
		}
	}
		
	function deleteProject(closeURL){
			projectNav.fadeOut(100);
			exitProject.fadeOut(100);				
			projectContainer.animate({opacity:0,height:'0px'});
			if(typeof closeURL!='undefined' && closeURL!='') {
			projectContainer.find('iframe').remove();
				location = '#_';
			}
				portfolioGrid.find('li.box.current').children().removeClass('act');
				portfolioGrid.find('li.box.current').removeClass('cur' );			
		  }
			$('#nextProject a').on('click',function () {											   							   				 
				current = portfolioGrid.find('li.box.cur');
				next = current.next('li.box');
				target = $(next).children('a').attr('href');
				$(this).attr('href', target);
				if (next.length === 0) { 
					 return false;			  
				 } 
			   current.removeClass('cur'); 
			   current.children().removeClass('act');
			   next.addClass('cur');
			   next.children().addClass('act');
			});
			$('#prevProject a').on('click',function () {			
			  current = portfolioGrid.find('li.box.cur');
			  prev = current.prev('li.box');
			  target = $(prev).children('a').attr('href');
			  $(this).attr('href', target);
			   if (prev.length === 0) {
				  return false;			
			   }
			   current.removeClass('cur');  
			   current.children().removeClass('act');
			   prev.addClass('cur');
			   prev.children().addClass('act');		   
			});
			$('#closeProject a').on('click',function () {
				 $('html').scrollTo('#portfolio h2',1500,{'axis':'y'});
				deleteProject($(this).attr('href')); 			
				portfolioGrid.find('li.box.cur').children().removeClass('act');			
				loader.fadeOut();
				return false;
			});
			 pageRefresh = false;	  
	};
	
	$(window).load(function(){
		$(window).trigger( 'hashchange');
	});

	$(document).ready(function(){
		initPortfolio();	
		initCashemir();		
	});

//  definition of mobile browser------------------

	var isMobile = { 
       Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
		
    };
	
// if not mobile ------------------  	
	trueMobile = isMobile.any();
	if (trueMobile == null){
		
// parallax  --------	

	$('#servises').parallax("50%", 0.4);
	$('#subscribe').parallax("80%", 0.2);
	$('#resume .content').parallax("80%", 0.2);
	$('.simple-page-head').parallax("50%", 0.4);
	
// hoverdir --------
	
	$(' #folio_container > li ').each(function(){$(this).hoverdir();});
	
// lavaLamp --------
	
	$("#options ul").lavaLamp({
    	fx: "easeOutElastic", 
    	speed: 700,
    });	
	
// Hover animation   ---	
				
		$('.box a').hover(function(){
			$(this).find('img').addClass('img-rotade');		
			},function(){
			$(this).find('img').removeClass('img-rotade');	
		});			
						
	}	

// google map styles and functions  --------

	var map;
	// your coordinates   --------
	var cashemir = new google.maps.LatLng( 40.761467,-73.956379);	
	function initialize() {	

		//broken firefox
		if(navigator.userAgent.indexOf("Firefox") != -1 ){
			var insideul = '<li class="box">'+
					'<img src="images/videos/trailer_01.jpg" width="90%" onclick="overlay.show('+"'567464817'"+')"/>' +
				'</li>' +
				'<li class="box">' +
					'<img class="trailer" src="images/videos/trailer_02.jpg" width="90%" onclick="overlay.show('+"'567465171'"+')"/>'+
				'</li>'+
				'<li class="box">' +
					'<img class="trailer" src="images/videos/trailer_03.jpg" width="90%" onclick="overlay.show('+"'567465414'"+')"/>' +
				'</li>' +
				'<li class="box">' +
					'<img class="trailer" src="images/videos/trailer_04.jpg" width="90%" onclick="overlay.show('+"'567464679'"+')"/>'+
				'</li>';
			document.getElementById("portfolio_id").innerHTML=
				'<div id="owrap"> \
					<div id="ocontent"></div> \
					<div id="oclose" onclick="overlay.hide()">X</div> \
				</div>' +
				'<ul id="folio_container" class="grid-full animaper">' + insideul +
				'</ul>' +
				'<br/><hr style="height:15pt; visibility:hidden;" /><div class="container"><p>*Click to view*</p></div>';
		}
		//broken firefox end

	  var styles = [
		{
			featureType: 'water',
			elementType: 'all',
			stylers: [
				{ hue: '#292929' },
				{ saturation: -100 },
				{ lightness: -18 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'landscape',
			elementType: 'all',
			stylers: [
				{ hue: '#292929' },
				{ saturation: -100 },
				{ lightness: -78 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'road',
			elementType: 'all',
			stylers: [
				{ hue: '#292929' },
				{ saturation: -100 },
				{ lightness: -34 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'road.local',
			elementType: 'all',
			stylers: [
				{ hue: '#292929' },
				{ saturation: -115 },
				{ lightness: -12 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'poi.park',
			elementType: 'all',
			stylers: [
				{ hue: '#292929' },
				{ saturation: -100 },
				{ lightness: -3 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'poi',
			elementType: 'all',
			stylers: [
				{ hue: '#292929' },
				{ saturation: -500 },
				{ lightness: -3 },
				{ visibility: 'on' }
			]
		},{
			featureType: 'transit',
			elementType: 'all',
			stylers: [
				{ hue: '#212121' },
				{ saturation: -20 },
				{ lightness: -2 },
				{ visibility: 'on' }
			]
		}
	
	  ];  
	  var mapOptions = {
		zoom:18,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDefaultUI:true,
		center: cashemir,
		mapTypeControlOptions: {
		   mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'bestfromgoogle']
		}
	  };
	map = new google.maps.Map(document.getElementById("map_canvas"),
		 mapOptions);
	var styledMapOptions = {
		  name: "cashemir"
	}	
	var jayzMapType = new google.maps.StyledMapType(
		styles, styledMapOptions);
	map.mapTypes.set('bestfromgoogle', jayzMapType);
	map.setMapTypeId('bestfromgoogle');				
	var companyImage = new google.maps.MarkerImage('images/marker.png',
		new google.maps.Size(30,30),
		new google.maps.Point(0,0),
		new google.maps.Point(28,58)
	);
	// your marker coordinates   --------
	var companyPos = new google.maps.LatLng(40.761467,-73.956379);
	var companyMarker = new google.maps.Marker({
		position: companyPos,
		map: map,
		icon: companyImage,
		zIndex: 3
	});
}