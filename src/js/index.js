/*
$.get('./Talent-table.csv', function (data) {
	console.log(data);
var html = '';
var creatives = $.csv.toObjects(data);
*/
var html = '';
var creatives = [
		{
			Name: 'Teresa',
			Title:'Front-End Developer',
			Blurb:'Teresa is an experienced, self taught front-end developer who specializes in hand coding in HTML, CSS and PHP. She loves working collaboratively with teams and proactively looks for ways to improve. One of Teresa\'s successes includes her most recent time at a development organization in which she worked with a team on multiple fast-paced deadlines for mid-sized east coast companies. Teresa is confident in her ability to code standard compliant, cross-browser and mobile compatible XHTML/CSS with CSS3 and HTML5. She believes that the best design is clean design and develops her sites to be user-friendly web interfaces consisting a range of digital marketing materials. If you’re looking for a developer that can deliver quality through consistent attention to detail, then Teresa is your girl!',
		},{
			Name: 'Josh',
			Title:'Writer/Designer',
			Blurb:'Josh has a Bachelors degree in English and Creative Writing along with his Masters in Comparative History. Josh\'s last position was The Communications Manager where he managed all online and print communications. He led a team of 3 and worked with outside vendors of specific projects that he oversaw from inception to completion. Josh has a good background with communications and graphic design experience, which in return lets him understand the full process of each project and set strong deadlines.',
		},{
			Name: 'Mike',
			Title:'Writer/Editor',
			Blurb:'Experienced writer and editor with a diverse background in newspaper, magazine, and online media. Driven by a dedicated work ethic, possesses top-notch communication skills and is capable of writing extensive, full-length features just as easily as clear, concise copy. Regularly performing under strict deadlines, has become an accomplished multi-tasker, oftentimes juggling numerous projects at once. Is a staunch grammar and spelling watchdog, able to easily explain when it\'s appropriate to use an apostrophe, as well as tell the differences between farther and further, affect and effect, and accept and except. Has a strong grasp of digital implementation in business; skilled in web publishing, content management, HTML formatting; and understands the duties of an admin on social media sites such as Facebook, Twitter, and Tumblr for marketing purposes. Dedicated to personal and professional development, with a history of perseverance',
		},{
			Name: 'Daoud',
			Title:'Designer',
			Blurb:'Daoud is a fantastic, multi talented designer with outstanding experience in both print and web. He has worked for several contracts such as major agencies, non-profits and advocacy groups and is currently wrapping up his time with a communications firm as their Senior Designer/Digital Coordinator. Daoud is the creative, versatile, and sharp designer with sound experience in infographics. His mastery of Adobe Creative Suite and strong design intuition would prove him to be a dependable and efficient candidate for this role.',
		},{
			Name: 'Brandon',
			Title:'Web Developer',
			Blurb:'Brandon is a Web Designer with over ten years of experience who possesses a unique skill set that combines creative talent, expert technical skills and first-rate interpersonal skills. Brandon would call himself a Web Designer with a highly trained eye for detail that loves the look of a highly sophisticated yet simple design. Brandon recently was with a member based non-profit organization that works to catalyze improvements in healthcare as their Senior Web Producer responsible for designing graphical user interface and collaborated with several teams on the functionality design for their web application, home page, and other templates built in Ektron CMS. Prior to this, Brandon comes from a Web Designer and Graphic designer background. Brandon is up on industry best practices, familiar with Drupal, Wordpress and other CMS’s, HTML, CSS, JavaScript, jQuery, AJAX, and PHP. Brandon’s strong track record of leading versatile teams and delivering high-quality design projects combined with his creative eye would make him a key candidate for this role. ',
		},{
			Name: 'Linda',
			Title:'Visual Designer',
			Blurb:'If you’re looking for a versatile and multifunctional web professional, Linda is your rock star! Linda is a Front-end developer that has outstanding User Interface experience and 10+ years of federal project knowledge. She has a strong understanding of HTML, CSS, JavaScript, and JQuery but don’t let her technical understanding fool you, she is a designer at heart! Linda has a range of transferable skills such as: graphic design, interface design, responsive design, and Section 508 accessibility. Currently, Linda has been working with a governmental entity as their Web Design Adviser where she specializes in designing and developing their web pages. Previously, she worked with the national health organization as a Graphic and Web Designer/Developer. Linda is passionate about User Interface design, the methodologies behind it, and constantly learning new skills to be the best designer she can be. Her design eye, technical web understanding, and health industry experience would prove her to be a must-have for this project!',
		},{
			Name: 'Joe',
			Title:'Graphic Designer',
			Blurb:'Joe is a Graphic Designer that is passionate about creating logos, branding, typography, web and mobile design. Prior to becoming a Designer, Joe was a professional journalist along with being a writer/editor. This became the gateway into design. Through journalism, Joe was able to create design focused on detail. He is constantly striving to grasp the audience with each design. Joe is creative and passionate about design, he has an eye for detail so that every project/assignment will be perfect.',
		},{
			Name: 'Daniel',
			Title:'Web Content Manager',
			Blurb:'Daniel is a web content specialist who has led email marketing campaigns, managed website designs/development and has developed analytical dashboards and reporting processes within a multitude of organizations. He has worked within a plethora of content management systems such as Drupal, WordPress and SharePoint and can even make HTML and CSS changes if needed. He is extremely results oriented and passionate about all the projects he works on and is eager to tackle complex problems. One of his biggest successes was when he worked for an integrated marketing firm in which he was tasked with learning Convio (which no one in the firm has used before) to create an e-commerce site for a nonprofit organization. Daniel worked collaboratively with the internal development team to make modifications to Convio\'s system and worked closely with the client to make sure they understand the complications that arose and managed their expectations in regards to deadlines. The e-store was launched successfully and Daniel was praised for his eagerness to take on the project and helped to lead the creation of additional Convio based sites for their clients.',
		}];


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
/*
});
*/
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



