function generateMarketingBlurb(a){var b="";return b+='<div class="talent-slide-container">',b+='<div class="talent-slide">',b+='<div class="talent-content-container">',b+='<h1 class="creative-intro color-white Xlarge-font">HEY THERE, <span class="color-blue">I\'M</span>...</h1>',b+='<div class="creative-info">',b+='<h2 class="creative-name color-orange XXlarge-font">'+a.Name+"</h2>",b+='<h3 class="creative-title color-white Xlarge-font">I\'M A <span class="color-blue">'+a.Title+"</span></h3>",b+='<a class="open-blurb color-black medium-font">MORE</a>',b+="</div>",b+='<div class="creative-blurb-container medium-font color-white">',b+='<a class="close-blurb Xlarge-font color-black">+</a>',b+='<p class="creative-blurb regular-font">'+a.Blurb+"</p>",b+='<a class="interested" href="mailto:sbenton@vitamintalent.com?Subject='+a.Name+'%20looks%20AWESOME!&body=Hi%20Shannon!">Interested!</a>',b+="</div>",b+="</div>",b+="</div>",b+="</div>"}function toggleMenu(a){var b=$(".responsive-menu");$(a.target).is(".nav-responsive, .nav-responsive-btn")?b.toggleClass("open-responsive-menu"):b.removeClass("open-responsive-menu")}for(var html="",creatives=[{Name:"Brian",Title:"Recruiter",Blurb:"Lorem ipsum dolor sit amet, dicam intellegebat vel ad, cu per facer tantas repudiandae. Mea ludus nonumes elaboraret ne. Ea alterum fuisset suscipiantur sit, utinam copiosae et eum. Pro in eripuit erroribus, et sea ridens tritani, his choro nullam dissentiunt et. Ad sea amet laboramus, ad eum altera suscipit. Nec natum audire oblique ad, ius tota periculis ad, tale periculis sed ex. In sea dico justo expetenda, vel quod clita comprehensam ex, vel sint oporteat ut."},{Name:"Wade",Title:"Responsive Guru",Blurb:"Lorem ipsum dolor sit amet, dicam intellegebat vel ad, cu per facer tantas repudiandae. Mea ludus nonumes elaboraret ne. Ea alterum fuisset suscipiantur sit, utinam copiosae et eum. Pro in eripuit erroribus, et sea ridens tritani, his choro nullam dissentiunt et. Ad sea amet laboramus, ad eum altera suscipit. Nec natum audire oblique ad, ius tota periculis ad, tale periculis sed ex. In sea dico justo expetenda, vel quod clita comprehensam ex, vel sint oporteat ut."},{Name:"Ryan",Title:"Hard Core Programmer",Blurb:"Lorem ipsum dolor sit amet, dicam intellegebat vel ad, cu per facer tantas repudiandae. Mea ludus nonumes elaboraret ne. Ea alterum fuisset suscipiantur sit, utinam copiosae et eum. Pro in eripuit erroribus, et sea ridens tritani, his choro nullam dissentiunt et. Ad sea amet laboramus, ad eum altera suscipit. Nec natum audire oblique ad, ius tota periculis ad, tale periculis sed ex. In sea dico justo expetenda, vel quod clita comprehensam ex, vel sint oporteat ut."}],i=0;i<creatives.length;i++)html+=generateMarketingBlurb(creatives[i]);$("#slider").html(html),$(".open-blurb").on("click",function(){var a=$(this).parent(".creative-info").next(".creative-blurb-container");a.addClass("open")}),$(".close-blurb").on("click",function(){var a=$(this).parent(".creative-blurb-container");a.removeClass("open")}),$("#slider").owlCarousel({items:1,singleItem:!0,navigation:!0,navigationText:["<<",">>"],pagination:!0,autoPlay:!0}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return $("html,body").animate({scrollTop:a.offset().top-112},1e3),!1}}),$(window).on("click",toggleMenu),$(".responsive-menu-link").on("click",toggleMenu);