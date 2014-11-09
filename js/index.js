$.get('Talent-table.csv', function (data) {
	console.log(data);
	var html = '';
	var creatives = $.csv.toObjects(data);

	/*creatives 
	[
			{
				name: 'Brian',
				title:'Recruiter',
				blurb:'Lorem ipsum dolor sit amet, dicam intellegebat vel ad, cu per facer tantas repudiandae. Mea ludus nonumes elaboraret ne. Ea alterum fuisset suscipiantur sit, utinam copiosae et eum. Pro in eripuit erroribus, et sea ridens tritani, his choro nullam dissentiunt et. Ad sea amet laboramus, ad eum altera suscipit. Nec natum audire oblique ad, ius tota periculis ad, tale periculis sed ex. In sea dico justo expetenda, vel quod clita comprehensam ex, vel sint oporteat ut.',
			},{
				name: 'Wade',
				title:'Responsive Guru',
				blurb:'Lorem ipsum dolor sit amet, dicam intellegebat vel ad, cu per facer tantas repudiandae. Mea ludus nonumes elaboraret ne. Ea alterum fuisset suscipiantur sit, utinam copiosae et eum. Pro in eripuit erroribus, et sea ridens tritani, his choro nullam dissentiunt et. Ad sea amet laboramus, ad eum altera suscipit. Nec natum audire oblique ad, ius tota periculis ad, tale periculis sed ex. In sea dico justo expetenda, vel quod clita comprehensam ex, vel sint oporteat ut.',
			},{
				name: 'Ryan',
				title:'Hard Core Programmer',
				blurb:'Lorem ipsum dolor sit amet, dicam intellegebat vel ad, cu per facer tantas repudiandae. Mea ludus nonumes elaboraret ne. Ea alterum fuisset suscipiantur sit, utinam copiosae et eum. Pro in eripuit erroribus, et sea ridens tritani, his choro nullam dissentiunt et. Ad sea amet laboramus, ad eum altera suscipit. Nec natum audire oblique ad, ius tota periculis ad, tale periculis sed ex. In sea dico justo expetenda, vel quod clita comprehensam ex, vel sint oporteat ut.',
			}];
*/
	function generateMarketingBlurb(creative) {

	var ret = ''

		ret += '<div class="talent-slide-container">';
		ret += '<div class="talent-slide">';
		ret += '<div class="talent-content-container">';
		ret += '<h1 class="creative-intro color-white Xlarge-font">HEY THERE, <span class="color-blue">I\'M</span>...</h1>';
		ret += '<div class="creative-info">';
		ret += '<h2 class="creative-name color-orange XXlarge-font">' + creative.Name + '</h2>';
		ret += '<h3 class="creative-title color-white Xlarge-font">I\'M A <span class="color-blue">' + creative.Title + '</span></h3>';
		ret += '<a class="open-blurb color-black medium-font">MORE</a>';
		ret += '</div>';
		ret += '<div class="creative-blurb-container medium-font color-white">';
		ret += '<a class="close-blurb Xlarge-font color-black">+</a>';
		ret += '<p class="creative-blurb regular-font">' + creative.Blurb + '</p>';
		ret += '<a class="interested" href="mailto:sbenton@vitamintalent.com?Subject=' + creative.Name + '%20looks%20AWESOME!&body=Hi%20Shannon!">Interested!</a>';
		ret += '</div>';
		ret += '</div>';
		ret += '</div>';
		ret += '</div>';
		return ret;
	}

	for (var i = 0; i < creatives.length; i++) {
		html += generateMarketingBlurb(creatives[i]);
	}

	$('#slider').html(html);

	$('.open-blurb').on('click', function() {
		var creativeInfoBlurb = $(this).parent('.creative-info').next('.creative-blurb-container');
		creativeInfoBlurb.addClass('open');
	});

	$('.close-blurb').on('click', function() {
		var creativeInfoBlurb = $(this).parent('.creative-blurb-container');
		creativeInfoBlurb.removeClass('open');
	});

	$("#slider").owlCarousel({
  		items: 1,
  		singleItem: true,
  		navigation: true,
  		navigationText: ['<<','>>'],
  		pagination: true,
  		autoPlay: true
  	});
});

	$('a[href*=#]:not([href=#])').click(function() {
 
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 112
        }, 1000);
        return false;
      }
    }
  });

function toggleMenu(e) {
	var responsiveNavMenu = $('.responsive-menu');
	if ($(e.target).is('.nav-responsive, .nav-responsive-btn')) {
		responsiveNavMenu.toggleClass('open-responsive-menu');
	} else {
		responsiveNavMenu.removeClass('open-responsive-menu');
	}
};



  $(window).on('click', toggleMenu);
  $('.responsive-menu-link').on('click', toggleMenu);



