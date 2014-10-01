$(document).ready(function(){
	var html = '';
	// The for loop below is just incase I cannot figure out how to pull an API for a google doc. 
	// any suggestions on how to do a API for a google doc?? Did some research but nothing is clear and cut...
	var creatives = [
		{
			image:'';
			name: '',
			title:'',
			blurb:'',
		},{
			image:'';
			name: '',
			title:'',
			blurb:'',
		},{
			image:'';
			name: '',
			title:'',
			blurb:'',
		}
		//etc....for the number of creatives posted. 
	];

//layout of section could change a bit but this is what I had in mind. 
function generateMarketingBlurb(creative) {
var ret = ''
ret += <section id="team-blurb" class="agent-wrapper-darkblue"> <!--/ Brian container-->
ret += <div class="agent-container">
ret += <div class="float-right col-1-3 clearfix">
ret += <img class="team-photo" src="http://vitamintalent.com/dotAsset/ccf507d4-16b7-4587-808b-ff2a700f7b4f.jpg" alt="Agent-Brian">
ret += </div>
ret += <div class="team-member-wrapper"><!--about content-->
ret += <div class="team-member-title Xlarge-font text-right">
ret += <div class="agent-intro">
ret += <span class="color-black">HI, I'M</span> <span class="color-green">BRIAN</span><span class="color-black">!</span>
ret += </div>;
ret += </div>;
ret += <div class="team-content-container">
ret += <div class="team-content">
ret += <p>
ret += Over the better part of a decade, I've been connecting people with what they are passionate about and what they want to do! My passion for helping make this connection has spanned across a range of industries; from working as a Ski Coach in Charlottesville, VA to South Lake Tahoe, CA and as a Recruiter here in the District. This hybrid of experiences and skills has ultimately led me to Vitamin T, where my passion for the creative world and connecting people with opportunities comes to life! Let me help connect you with what you love to do!!
ret += </p>
ret += </div>
ret += <div class="social-bar">
ret += </div>
ret += <div class="social-box">
ret += </div>
ret += </div>
ret += </div>
ret += </div>
return ret;
}

for (var i = 0; i < creatives.length; i++)
html += generateMarketingBlurb(creative[i]);

//'JACKPOT!' button will be a trigger for Mailto which will email the whole DC team. 
//css class = ''
    $('.jackpot').on('click',function(){
        window.location.href = "mailto:washingtondc-vitamintonly@aquent.com?subject=Subject&body=Content%20Goes%20Here"; 
    });

//Lightbox section below...will get around to writing code shortly.

});

$('#creatives').html(html);
