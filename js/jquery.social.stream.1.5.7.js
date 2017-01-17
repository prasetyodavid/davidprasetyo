jQuery(document).ready(function(e){jQuery("#ticker1").rssfeed("https://queryfeed.net/twitter?q=from%3Adavithace&geocode=&omit-direct=on&attach=on",{snippet:!0})});var global_date=[],global_media=[],global_content=[],global_tweet_id=[];!function(e){function t(t,a,s,o,d,h,p,f,u,m,g){var v,b,w,y=e(".stream",d),k=[],x=h.limit;switch(frl="https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json_xml&num="+x+"&callback=?&q=",t){case"custom_twitter":b=a,w=frl+encodeURIComponent(a);break;case"instagram":b="#",w="https://api.instagram.com/v1";var j=a.substr(0,1),_=a.split(j),D=encodeURIComponent(_[1]),T="",M=0;switch(j){case"?":var S=_[1].split("/");T="&lat="+S[0]+"&lng="+S[1]+"&distance="+S[2],w+="/media/search";break;case"#":w+="/tags/"+D+"/media/recent",M=1;break;case"!":w+="/users/"+D+"/media/recent";break;case"@":w+="/locations/"+D+"/media/recent"}""==o.accessToken&&0==M&&(location.hash?o.accessToken=location.hash.split("=")[1]:location.href="https://instagram.com/oauth/authorize/?client_id="+o.clientId+"&redirect_uri="+o.redirectUrl+"&response_type=token"),w+="?access_token="+o.accessToken+"&client_id="+o.clientId+"&count="+x+T}var C="twitter"==t?"json":"jsonp";jQuery.ajax({url:w,data:v,cache:h.cache,dataType:C,success:function(r){var c="";switch(t){case"facebook":j.length>1?r=r.data:200==r.responseStatus?r=r.responseData.feed.entries:c=r.responseDetails;break;case"google":c=r.error?r.error:"",r=r.items;break;case"flickr":r=r.items;break;case"instagram":r=r.data;break;case"twitter":c=r.errors?r.errors:"",_.length>1&&(r=r.statuses);break;case"youtube":if(200==r.responseStatus){if(r=r.responseData.feed.entries,j.length>1){j[0]}}else c=r.responseDetails;break;case"dribbble":r=r.shots;break;case"tumblr":r=r.posts;break;case"delicious":break;case"vimeo":break;default:200==r.responseStatus?r=r.responseData.feed.entries:c=r.responseDetails}if(""==c){var l=-1;e.each(r,function(r,c){if(x>r){var d=c.link,m='<a href="'+b+'">'+a+"</a>",v="",w='<a href="'+d+'">'+c.title+"</a>",y="",j="",_="",D="",T=c.publishedDate,M=(c.title,"");switch(t){case"rss":j=c[o.text];break;case"custom_facebook":j=c[o.text];break;case"custom_twitter":z1=global_content[l+1],z2='<span class="section-share"><a href="https://twitter.com/intent/tweet?in_reply_to='+global_tweet_id[l+1]+'" class="share-reply"></a><a href="https://twitter.com/intent/retweet?tweet_id='+global_tweet_id[l+1]+'" class="share-retweet"></a><a href="https://twitter.com/intent/favorite?tweet_id='+global_tweet_id[l+1]+'" class="share-favorite"></a></span>',j=z1+z2}icon='<a href="'+d+'"><img src="'+s+o.icon+'" alt="" class="icon" /></a>',l+=1,e.each(o.out.split(","),function(a,s){switch(_+="intro"!=s?'<span class="section-'+s+'">':"",s){case"intro":"twitter"==t?zintro='<span class="section-'+s+'"><a href="'+d+'">'+decodeURIComponent(u)+'</a> <span><a href="https://twitter.com/'+un+"/status/"+c.id_str+'">'+i(new Date(T).getTime(),0)+"</a></span></span>":zintro='<span class="section-'+s+'"><a href="'+d+'">'+decodeURIComponent(u)+"</a> <span>"+i(new Date(T).getTime(),0)+"</span></span>";break;case"title":_+=w;break;case"thumb_enc":var r=c.content.indexOf("img")>=0?e("img",c.content).attr("src"):"";y=r?'<a href="'+d+'" ><img height="auto" width="10%" src="'+r+'" /></a>':"","undefined"==typeof global_media[l]?(yz="",y=""):yz='<a href="'+d+'" class="thumb"><img height="auto" width="70%" src="'+global_media[l]+':thumb" alt="" style="border: 1px solid #ccc;"/></a>',yc="<div><i>"+global_date[l]+"</i></div>",_+=y+yz+yc;break;case"text":_+=j;break;case"user":_+=m;break;case"meta":_+=D;break;case"share":_+=M}_+="intro"!=s?"</span>":""});var S="instagram"==t?i(T,1):i(new Date(T).getTime(),1),C=S;switch(h.order){case"random":C=n(6);break;case"none":C=1}var I='<li rel="'+C+'" class="dcsns-li dcsns-'+t+" dcsns-feed-"+g+'">'+v+'<div class="inner">'+_+'<span class="clear"></span></div>'+zintro+icon+"</li>",Q=h.remove;if(-1!==Q.indexOf(d)&&""!=d)x+=1;else if("days"==h.max){if(86400*f>=S&&S>=86400*p)k.push(I);else if(S>86400*f)return!1}else k.push(I)}})}else 1==h.debug&&k.push('<li class="dcsns-li dcsns-error">Error. '+c+"</li>")},complete:function(){var s=e(k.join(""));1==h.wall?y.isotope("insert",s):(y.append(s),r(y,"asc")),"facebook"==t&&j.length<2?c(a,s):"flickr"==t&&_.length>1&&l(_[1],s)}})}function a(e){return e=e.replace(/((https?\:\/\/)|(www\.)|(pic\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,function(e){if(e.length>=30)t=e,e=e.substring(0,30);else var t=e.match("^https?://")?e:"http://"+e;return'<a href="'+t+'">'+e+"</a>"}),e=e.replace(/(^|\s)@(\w+)/g,'$1@<a href="http://www.twitter.com/$2">$2</a>')}function i(e,t){var a=Math.round((+new Date-e)/1e3),i="",r="mins";if(1==t)return a;if(0==t){var n=new Array;n[0]=[31536e3,"year","years"],n[1]=[2592e3,"month","months"],n[2]=[604800,"week","weeks"],n[3]=[86400,"day","days"],n[4]=[3600,"hr","hrs"],n[5]=[60,"min","mins"];var o=0,c=n.length;for(o=0;c>o;o++)if(s=n[o][0],0!=(xj=Math.floor(a/s))){r=1==xj?n[o][1]:n[o][2];break}return i+=1==xj?"1 "+r:xj+" "+r,c>o+1&&(s2=n[o+1][0],0!=(xj2=Math.floor((a-s*xj)/s2))&&(n2=1==xj2?n[o+1][1]:n[o+1][2],i+=1==xj2?" + 1 "+n2:" + "+xj2+" "+n2)),i+=" ago"}}function r(t,a){var s=e("li",t);s.sort(function(t,s){var i=parseInt(e(t).attr("rel"),10),r=parseInt(e(s).attr("rel"),10);return"asc"==a?i>r?1:-1:r>i?1:-1}),e.each(s,function(e,a){t.append(a)}),e(".dcsns-loading").slideUp().remove()}function n(e){for(var t=0,a="";e>t;)a+=Math.floor(10*Math.random()+1)+"",t++;return a}function o(t,a,s){var i,r=e("li:last",t),n=e("li:first",t),c=n.outerHeight(!0);if(e("li",t).not(".inactive").length>2)if("next"==a){if(i=r.clone().hide(),n.before(i),r.remove(),!r.hasClass("inactive"))return e(".inner",i).css({opacity:0}),void i.slideDown(s,"linear",function(){e(".inner",this).animate({opacity:1},s)});o(t,a,s)}else i=n.clone(),n.hasClass("inactive")?(r.after(i),n.remove(),o(t,a,s)):(n.animate({marginTop:-c+"px"},s,"linear",function(){r.after(i),n.remove()}),e(".inner",n).animate({opacity:0},s))}function c(t,a){jQuery.ajax({url:"https://graph.facebook.com/"+t,dataType:"jsonp",success:function(t){e(".icon",a).each(function(){e(this).parent().attr("href",t.link)}),e(".section-user a",a).each(function(){e(this).attr("href",t.link),e(this).text(t.name)})}})}function l(t,a){jQuery.ajax({url:"http://api.flickr.com/services/feeds/groups_pool.gne?id="+t+"&format=json&jsoncallback=?",dataType:"jsonp",success:function(t){e(".icon",a).each(function(){e(this).parent().attr("href",t.link)})}})}e.fn.rssfeed=function(t,a,s){var i={limit:10,offset:1,header:!0,titletag:"h4",date:!0,dateformat:"datetime",content:!0,snippet:!0,media:!0,showerror:!0,errormsg:"",key:null,ssl:!1,linktarget:"_self",linkredirect:"",linkcontent:!1,sort:"",sortasc:!0,historical:!1},a=e.extend(i,a);return this.each(function(i,r){var n=e(r),o="";if(a.ssl&&(o="s"),n.hasClass("rssFeed")||n.addClass("rssFeed"),null==t)return!1;a.offset>0&&(a.offset-=1),a.limit+=a.offset;var c="http"+o+"://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q="+encodeURIComponent(t);c+="&num="+a.limit,a.historical&&(c+="&scoring=h"),null!=a.key&&(c+="&key="+a.key),c+="&output=json_xml",e.getJSON(c,function(t){if(200==t.responseStatus)d(r,t.responseData,a),e.isFunction(s)&&s.call(this,n);else{if(a.showerror)if(""!=a.errormsg)var i=a.errormsg;else var i=t.responseDetails;e(r).html('<div class="rssError"><p>'+i+"</p></div>")}})})};var d=function(t,s,i){var r=s.feed;if(!r)return!1;var n=[],o=0,c="",l="odd";if(i.media)var d=m(s.xmlString),f=d.getElementsByTagName("item");i.header&&(c+='<div class="rssHeader"><a href="'+r.link+'" title="'+r.description+'">'+r.title+"</a></div>"),c+='<div class="rssBody"><ul>';for(var u=i.offset;u<r.entries.length;u++){o=u-i.offset,n[o]=[];var v,b=r.entries[u],w="",y=b.link;switch(i.sort){case"title":w=b.title;break;case"date":w=b.publishedDate}if(n[o].sort=w,b.publishedDate){var k=new Date(b.publishedDate),v=k.toLocaleDateString()+" "+k.toLocaleTimeString();switch(i.dateformat){case"datetime":break;case"date":v=k.toLocaleDateString();break;case"time":v=k.toLocaleTimeString();break;case"timeline":v=g(k);break;default:v=p(k,i.dateformat)}}if(i.linkredirect&&(y=encodeURIComponent(y)),n[o].html="",global_tweet_id[u]=/[^\/]*$/.exec(i.linkredirect+y)[0],i.date&&v&&(global_date[u]=v),i.content){if(i.snippet&&""!=b.contentSnippet)var x=b.contentSnippet;else var x=b.content;i.linkcontent&&(x='<a href="'+i.linkredirect+y+'" title="View details at '+r.title+'">'+x+"</a>"),n[o].html+="<p>"+x+"</p>",global_content[u]=a(n[o].html)}if(i.media&&f.length>0){var j=f[u].getElementsByTagName("enclosure");if(j.length>0){n[o].html+='<div class="rssMedia"><div>Media files</div><ul>';for(var _=0;_<j.length;_++){var D=j[_].getAttribute("url"),T=j[_].getAttribute("type"),M=j[_].getAttribute("length");n[o].html+='<li><a href="'+D+'" title="Download this media">'+D.split("/").pop()+"</a> ("+T+", "+h(M)+")</li>",global_media[u]=D}n[o].html+="</ul></div>"}}}i.sort&&n.sort(function(e,t){if(i.sortasc)var a=e.sort,s=t.sort;else var a=t.sort,s=e.sort;return"date"==i.sort?new Date(a)-new Date(s):(a=a.toLowerCase(),s=s.toLowerCase(),s>a?-1:a>s?1:0)}),e.each(n,function(e){c+='<li class="rssRow '+l+'">'+n[e].html+"</li>",l="odd"==l?"even":"odd"}),c+="</ul></div>"},h=function(e){var t=["bytes","kb","MB","GB","TB","PB"],a=Math.floor(Math.log(e)/Math.log(1024));return(e/Math.pow(1024,Math.floor(a))).toFixed(2)+" "+t[a]},p=function(e,t){var a=new Date(e);return e=t,e=e.replace("dd",f(a.getDate())),e=e.replace("MMMM",u(a.getMonth())),e=e.replace("MM",f(a.getMonth()+1)),e=e.replace("yyyy",a.getFullYear()),e=e.replace("hh",f(a.getHours())),e=e.replace("mm",f(a.getMinutes())),e=e.replace("ss",f(a.getSeconds()))},f=function(e){return e+="",e.length<2&&(e="0"+e),e},u=function(e){var t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return t[e]},m=function(e){var t,a=navigator.appName;return"Microsoft Internet Explorer"==a?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t},g=function(e){var t=new Date,a=new Date(e),s=Math.round((t.getTime()-a.getTime())/1e3);if(60>s)return"< 1 min";if(3600>s)var i=Math.round(s/60)-1,r="min";else if(86400>s)var i=Math.round(s/3600)-1,r="hour";else if(604800>s)var i=Math.round(s/86400)-1,r="day";else var i=Math.round(s/604800)-1,r="week";return i>1&&(r+="s"),i+" "+r};SocialStreamObject=function(e,t){this.create(e,t)},e.extend(SocialStreamObject.prototype,{version:"1.5.7",create:function(t,a){this.defaults={feeds:{custom_twitter:{id:"",intro:"Tweeted",out:"intro,title,text",text:"contentSnippet",icon:"twitter.png"}},remove:"",twitterId:"",days:10,limit:50,max:"days",external:!0,speed:600,height:550,wall:!1,order:"date",filter:!0,controls:!0,rotate:{direction:"up",delay:8e3},transition:"0.8s",cache:!0,container:"dcsns",cstream:"stream",content:"dcsns-content",iconPath:"",imagePath:"",debug:!1},this.o={},this.timer_on=0,this.id="dcsns-"+e(t).index(),this.timerId="",this.o=e.extend(!0,this.defaults,a),opt=this.o,$load=e('<div class="dcsns-loading">creating stream ...</div>'),e(t).addClass(this.o.container).append('<div class="'+this.o.content+'"><ul class="'+this.o.cstream+'"></ul></div>');var s=e("."+this.o.content,t),i=e("."+this.o.cstream,t);e("li",i);if(opt.height>0&&0==opt.wall&&s.css({height:opt.height+"px"}),1==this.o.filter||1==this.o.controls){var r='<div class="dcsns-toolbar">';if(1==this.o.filter){r+='<ul id="dcsns-filter" class="option-set filter">',r+=1==this.o.wall?'<li><a id="social_all" href="#filter" data-group="dc-filter"  data-filter="*" class="selected link-all iso-active">all</a></li>':"";e(".filter",t);e.each(opt.feeds,function(e,t){r+=""!=t.id?'<li class="active f-'+e+'"><a href="#filter" rel="'+e+'" data-group="dc-filter" data-filter=".dcsns-'+e+'"><img src="'+opt.imagePath+opt.feeds[e].icon+'" alt="" /></a></li>':""}),r+="</ul>"}if(1==this.o.controls&&0==opt.wall){var n=this.o.rotate.delay<=0?"":'<li><a href="#" class="play"></a></li>';r+='<div class="controls"><ul>'+n+'<li><a href="#" class="prev"></a></li><li><a href="#" class="next"></a></li></ul></div>'}r+="</div>",0==opt.wall?e(t).append(r):e(t).before(r)}1==this.o.wall?(e(".dcsns-toolbar").append($load),this.createwall(i)):s.append($load),this.createstream(t,i,0,opt.days),this.addevents(t,i),this.o.rotate.delay>0&&this.rotate(t),$load.remove()},createstream:function(a,s,i,r){e.each(opt.feeds,function(s,n){if(""!=opt.feeds[s].id){var o=[];e.each(opt.feeds[s].intro.split(","),function(t,a){a=e.trim(a),o.push(a)}),e.each(opt.feeds[s].id.split(","),function(n,c){c=e.trim(c),opt.feeds[s].feed&&c.split("#").length<2?"youtube"==s&&c.split("/").length>1?t(s,c,opt.iconPath,opt.feeds[s],a,opt,i,r,"posted","",n):e.each(opt.feeds[s].feed.split(","),function(e,n){t(s,c,opt.iconPath,opt.feeds[s],a,opt,i,r,o[e],n,e)}):(intro=c.split("#").length<2?opt.feeds[s].intro:opt.feeds[s].search,t(s,c,opt.iconPath,opt.feeds[s],a,opt,i,r,intro,"",n))})}})},createwall:function(t){t.isotope({itemSelector:"li.dcsns-li",transitionDuration:opt.transition,getSortData:{postDate:function(t){return parseInt(e(t).attr("rel"),10)}},sortBy:"postDate"})},addevents:function(t,a){var s=this,i=this.o.speed;e(".stream",t);e(".controls",t).delegate("a","click",function(){var r=e(this).attr("class");switch(r){case"prev":s.pauseTimer(),o(a,"prev",i);break;case"next":s.pauseTimer(),o(a,"next",i);break;case"play":s.rotate(t),e(".controls .play").removeClass("play").addClass("pause");break;case"pause":s.pauseTimer()}return!1}),e(".filter",t).delegate("a","click",function(){if(0==opt.wall){var t=e(this).attr("rel");e(this).parent().hasClass("active")?(e(".dcsns-"+t,a).slideUp().addClass("inactive"),e(this).parent().animate({opacity:.3},400)):(e(".dcsns-"+t,a).slideDown().removeClass("inactive"),e(this).parent().animate({opacity:1},400)),e(this).parent().toggleClass("active")}return!1}),this.o.external&&a.delegate("a","click",function(){e(this).parent().hasClass("section-share")||(this.target="_blank")})},rotate:function(t){var a=this,s=e("."+this.o.cstream,t),i=this.o.speed,r=this.o.rotate.delay,n="up"==this.o.rotate.direction?"prev":"next";this.timer_on=1,e(".controls .play").removeClass("play").addClass("pause"),this.timerId=setTimeout(function(){o(s,n,i),a.rotate(t)},r)},pauseTimer:function(){clearTimeout(this.timerId),this.timer_on=0,e(".controls .pause").removeClass("pause").addClass("play")}}),e.fn.dcSocialStream=function(t,a){var s={};return this.each(function(){var i=e(this);s=i.data("socialtabs"),s||(s=new SocialStreamObject(this,t,a),i.data("socialtabs",s))}),s},Date.prototype.setRFC3339=function(e){var t,a,s,i=1,r=e.split("T"),n=r[0].split("-"),o=r[1].split(":"),c=o[o.length-1];return offsetFieldIdentifier=c.charAt(c.length-1),"Z"==offsetFieldIdentifier?(t=0,o[o.length-1]=c.substr(0,c.length-2)):(-1!=c[c.length-1].indexOf("+")?(a="+",i=1):(a="-",i=-1),s=c.split(a),o[o.length-1]==s[0],s=s[1].split(":"),t=60*s[0]+s[1],t=60*t*1e3),this.setTime(Date.UTC(n[0],n[1]-1,n[2],o[0],o[1],o[2])+t*i),this},Date.prototype.setFbAlbum=function(e){var t,a="+",s=1,i=e.split("T"),r=i[0].split("-"),n=i[1].split(":"),o=n[n.length-1];return-1!=o[o.length-1].indexOf("+")&&(a="-",s=-1),offsetTime=o.split(a),t=60*parseInt(offsetTime[1]/100,10)*1e3,this.setTime(Date.UTC(r[0],r[1]-1,r[2],n[0],n[1],offsetTime[0])+t*s),this},Date.prototype.setVimeo=function(e){var t=0,a=1,s=e.split(" "),i=s[0].split("-"),r=s[1].split(":");return this.setTime(Date.UTC(i[0],i[1]-1,i[2],r[0],r[1],r[2])+t*a),this}}(jQuery),jQuery(window).load(function(){jQuery.getScript("//platform.twitter.com/widgets.js",function(){}),jQuery(".section-share a").click(function(){var e=jQuery(this).attr("href");return window.open(e,"sharer","toolbar=0,status=0,width=626,height=436"),!1}),jQuery(".dcsns-facebook .section-text a").each(function(e){var t=jQuery(this).attr("href"),a=decodeURIComponent(t.replace("http://l.facebook.com/l.php?u=","")).split("&");jQuery(this).attr("href",a[0]),t=jQuery(this).attr("href"),a=decodeURIComponent(t.replace("https://www.facebook.com/l.php?u=","")).split("&"),jQuery(this).attr("href",a[0])}),jQuery(".dcsns-facebook .section-text a img").each(function(e){jQuery(this).parent().attr("href").split("http").length<2&&jQuery(this).parent().attr("href","https://facebook.com"+jQuery(this).parent().attr("href"))}),jQuery("#social-stream").dcSocialStream({feeds:{custom_twitter:{id:"https://queryfeed.net/twitter?q=from%3Adavithace&geocode=&omit-direct=on&attach=on",intro:"Tweet",out:"intro,text,thumb_enc",text:"contentSnippet",icon:"twitter.png"}},rotate:{delay:0},twitterId:"davithace",control:!1,filter:!0,wall:!0,center:!0,cache:!0,max:"limit",limit:10,iconPath:"https://davithace.github.io/davidprasetyo/images/dcsns-dark/",imagePath:"https://davithace.github.io/davidprasetyo/images/dcsns-dark/"}),document.getElementById("social_all").click()}),jQuery(window).load(function(){setTimeout(function(){jQuery("#social_all").click()},5e3)});

jQuery(document).ready(function($){
	jQuery('#ticker1').rssfeed('https://queryfeed.net/twitter?q=from%3Adavithace&geocode=&omit-direct=on&attach=on',{
		snippet: true
	});
});	


var global_date = [];
var global_media = [];
var global_content = [];
var global_tweet_id = [];
var global_blog_thumb = [];

function blogger_thumbs(json){
	var numposts = 10;
	for(var i=0;i<numposts;i++)
		{var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;
			for(var k=0;k<entry.link.length;k++){
				if(entry.link[k].rel=='replies'&&entry.link[k].type=='text/html'){
					var commenttext=entry.link[k].title;var commenturl=entry.link[k].href;}
	if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}
	var thumburl;
	try{thumburl=entry.media$image.url;}
	catch(error)
	{s=entry.content.$t;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){thumburl=d;}else thumburl='no-image.jpg';}

	var urlChunks = thumburl.split('/');
	var host = urlChunks[urlChunks.length - 7];
	if (host == '2.bp.blogspot.com' || host == '3.bp.blogspot.com' || host == '4.bp.blogspot.com' || host == '1.bp.blogspot.com'){
		global_blog_thumb[i] = 'http://'+host+'/'+urlChunks[urlChunks.length - 6]+'/'+urlChunks[urlChunks.length - 5]+'/'+
						urlChunks[urlChunks.length - 4]+'/'+urlChunks[urlChunks.length - 3]+'/'+'s150'+'/'+urlChunks[urlChunks.length - 1];
	}else{
		global_blog_thumb[i] = thumburl;}
	}
}

	
(function($){

	//--------------------------------	
	$.fn.rssfeed = function(url, opts, fn) {	
	
		// Set plugin defaults
		var defaults = {
			limit: 10,
			offset: 1,
			header: true,
			titletag: 'h4',
			date: true,
			dateformat: 'datetime',
			content: true,
			snippet: true,
			media: true,
			showerror: true,
			errormsg: '',
			key: null,
			ssl: false,
			linktarget: '_self',
			linkredirect: '',
			linkcontent: false,
			sort: '',
			sortasc: true,
			historical: false
		};  
		var opts = $.extend(defaults, opts); 
		
		// Functions
		return this.each(function(i, e) {
			var $e = $(e);
			var s = '';

			// Check for SSL protocol
			if (opts.ssl) s = 's';
			
			// Add feed class to user div
			if (!$e.hasClass('rssFeed')) $e.addClass('rssFeed');
			
			// Check for valid url
			if(url == null) return false;

			// Add start offset to feed length
			if (opts.offset > 0) opts.offset -= 1;
			opts.limit += opts.offset;
			
			// Create Google Feed API address
			var api = "http"+ s +"://ajax.googleapis.com/ajax/services/feed/load?v=1.0&callback=?&q=" + encodeURIComponent(url);
			api += "&num=" + opts.limit;
			if (opts.historical) api += "&scoring=h";
			if (opts.key != null) api += "&key=" + opts.key;
			api += "&output=json_xml"

			// Send request
			$.getJSON(api, function(data){
				
				// Check for error
				if (data.responseStatus == 200) {
	
					// Process the feeds
					_process(e, data.responseData, opts);

					// Optional user callback function
					if ($.isFunction(fn)) fn.call(this,$e);
					
				} else {

					// Handle error if required
					if (opts.showerror)
						if (opts.errormsg != '') {
							var msg = opts.errormsg;
						} else {
							var msg = data.responseDetails;
						};
						$(e).html('<div class="rssError"><p>'+ msg +'</p></div>');
				};
			});				
		});
	};
	
	// Function to create HTML result
	var _process = function(e, data, opts) {

		// Get JSON feed data
		var feeds = data.feed;
		if (!feeds) {
			return false;
		}
		var rowArray = [];

		var rowIndex = 0;
		var html = '';	
		var row = 'odd';
		
		// Get XML data for media (parseXML not used as requires 1.5+)
		if (opts.media) {
			var xml = _getXMLDocument(data.xmlString);
			var xmlEntries = xml.getElementsByTagName('item');
		}
		
		// Add header if required
		if (opts.header)
			html +=	'<div class="rssHeader">' +
				'<a href="'+feeds.link+'" title="'+ feeds.description +'">'+ feeds.title +'</a>' +
				'</div>';
			
		// Add body
		html += '<div class="rssBody">' +
			'<ul>';

		// Add feeds
		for (var i=opts.offset; i<feeds.entries.length; i++) {
			
			rowIndex = i - opts.offset;
			rowArray[rowIndex] = [];

			// Get individual feed
			var entry = feeds.entries[i];
			var pubDate;
			var sort = '';
			var feedLink = entry.link;

			// Apply sort column
			switch (opts.sort) {
				case 'title':
					sort = entry.title;
					break;
				case 'date':
					sort = entry.publishedDate;
					break;
			}
			rowArray[rowIndex]['sort'] = sort;

			// Format published date
			if (entry.publishedDate) {

				var entryDate = new Date(entry.publishedDate);
				var pubDate = entryDate.toLocaleDateString() + ' ' + entryDate.toLocaleTimeString();

				switch (opts.dateformat) {
					case 'datetime':
						break;
					case 'date':
						pubDate = entryDate.toLocaleDateString();
						break;
					case 'time':
						pubDate = entryDate.toLocaleTimeString();
						break;
					case 'timeline':
						pubDate = _getLapsedTime(entryDate);
						break;
					default:
						pubDate = _formatDate(entryDate,opts.dateformat);
						break;
				}
			}
			
			// Add feed row
			if (opts.linkredirect) feedLink = encodeURIComponent(feedLink);{
			var ttitle = '<'+ opts.titletag +'><a href="'+ opts.linkredirect + feedLink +'" title="View details at '+ feeds.title +'">'+ entry.title +'</a></'+ opts.titletag +'>'
			rowArray[rowIndex]['html'] ='';
			global_tweet_id[i] = /[^/]*$/.exec(opts.linkredirect + feedLink)[0];
			}

			if (opts.date && pubDate) 
				global_date[i] = pubDate ;
			if (opts.content) {
			
				// Use feed snippet if available and optioned
				if (opts.snippet && entry.contentSnippet != '') {
					var content = entry.contentSnippet;
				} else {
					var content = entry.content;
				}

				if (opts.linkcontent) {
					content = '<a href="'+ opts.linkredirect + feedLink +'" title="View details at '+ feeds.title +'">'+ content +'</a>'
				}
				
				rowArray[rowIndex]['html'] += '<p>'+ content +'</p>';

				global_content[i] = ttitle + linkify(rowArray[rowIndex]['html']);
			}
			
			// Add any media
			if (opts.media && xmlEntries.length > 0) {
				var xmlMedia = xmlEntries[i].getElementsByTagName('enclosure');
				if (xmlMedia.length > 0) {
					rowArray[rowIndex]['html'] += '<div class="rssMedia"><div>Media files</div><ul>'
					
					for (var m=0; m<xmlMedia.length; m++) {
						var xmlUrl = xmlMedia[m].getAttribute("url");
						var xmlType = xmlMedia[m].getAttribute("type");
						var xmlSize = xmlMedia[m].getAttribute("length");
						rowArray[rowIndex]['html'] += '<li><a href="'+ xmlUrl +'" title="Download this media">'+ xmlUrl.split('/').pop() +'</a> ('+ xmlType +', '+ _formatFilesize(xmlSize) +')</li>';
						global_media[i] = xmlUrl;
						
					}
					rowArray[rowIndex]['html'] += '</ul></div>'
				}
			}
					
		}
		
		// Sort if required
		if (opts.sort) {
			rowArray.sort(function(a,b) {

				// Apply sort direction
				if (opts.sortasc) {
					var c = a['sort'];
					var d = b['sort'];
				} else {
					var c = b['sort'];
					var d = a['sort'];
				}

				if (opts.sort == 'date') {
					return new Date(c) - new Date(d);
				} else {
					c = c.toLowerCase();
					d = d.toLowerCase();
					return (c < d) ? -1 : (c > d) ? 1 : 0;
				}
			});
		}

		// Add rows to output
		$.each(rowArray, function(e) {

			html += '<li class="rssRow '+row+'">' + rowArray[e]['html'] + '</li>';

			// Alternate row classes
			if (row == 'odd') {
				row = 'even';
			} else {
				row = 'odd';
			}			
		});

		html += '</ul>' +
			'</div>'
		//HTML OUT
		//$(e).html(html);

		 //Apply target to links
		//$('a',e).attr('target',opts.linktarget);
	};
	
	var _formatFilesize = function(bytes) {
		var s = ['bytes', 'kb', 'MB', 'GB', 'TB', 'PB'];
		var e = Math.floor(Math.log(bytes)/Math.log(1024));
		return (bytes/Math.pow(1024, Math.floor(e))).toFixed(2)+" "+s[e];
	}

	var _formatDate = function(date,mask) {

		// Convert to date and set return to the mask
		var fmtDate = new Date(date);
		date = mask;

		// Replace mask tokens
		date = date.replace('dd', _formatDigit(fmtDate.getDate()));
		date = date.replace('MMMM', _getMonthName(fmtDate.getMonth()));
		date = date.replace('MM', _formatDigit(fmtDate.getMonth()+1));
		date = date.replace('yyyy',fmtDate.getFullYear());
		date = date.replace('hh', _formatDigit(fmtDate.getHours()));
		date = date.replace('mm', _formatDigit(fmtDate.getMinutes()));
		date = date.replace('ss', _formatDigit(fmtDate.getSeconds()));

		return date;
	}

	var _formatDigit = function(digit) {
		digit += '';
		if (digit.length < 2) digit = '0' + digit;
		return digit;
	}

	var _getMonthName = function(month) {
		var name = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		return name[month];
	}

	var _getXMLDocument = function(string) {
		var browser = navigator.appName;
		var xml;
		if (browser == 'Microsoft Internet Explorer') {
			xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = 'false';
			xml.loadXML(string);
		} else {
			xml = (new DOMParser()).parseFromString(string, 'text/xml');
		}
		return xml;
	}

	var _getLapsedTime = function(date) {
		
		// Get current date and format date parameter
		var todayDate = new Date();	
		var pastDate = new Date(date);

		// Get lasped time in seconds
		var lapsedTime = Math.round((todayDate.getTime() - pastDate.getTime())/1000)

		// Return lasped time in seconds, minutes, hours, days and weeks
		if (lapsedTime < 60) {
			return '< 1 min';
		} else if (lapsedTime < (60*60)) {
			var t = Math.round(lapsedTime / 60) - 1;
			var u = 'min';
		} else if (lapsedTime < (24*60*60)) {
			var t = Math.round(lapsedTime / 3600) - 1;
			var u = 'hour';
		} else if (lapsedTime < (7*24*60*60)) {
			var t = Math.round(lapsedTime / 86400) - 1;
			var u = 'day';
		} else {
			var t = Math.round(lapsedTime / 604800) - 1;
			var u = 'week';
		}
		
		// Check for plural units
		if (t > 1) u += 's';
		return t + ' ' + u;
	}

//---------------------------------------------------------------------------------------------------------

	SocialStreamObject = function(el, options) {
		this.create(el, options);
	};
	
	$.extend(SocialStreamObject.prototype, {
		
		version   : '1.5.7',
		
		create: function(el, options) {
		
			this.defaults = {
				feeds: {
					facebook: {
						id: '',
						intro: 'Posted',
						out: 'intro,thumb,title,text,user,share',
						text: 'content',
						thumb: true,
						comments: 3,
						image_width: 4, //3 = 600 4 = 480 5 = 320 6 = 180
						icon: 'facebook.png'
					},
					custom_facebook: {
						id: '',
						intro: 'Posted',
						out: 'intro,title,text,share',
						text: 'contentSnippet',
						icon: 'facebook.png'
					},
					twitter: {
						id: '',
						intro: 'Tweeted',
						search: 'Tweeted',
						out: 'intro,thumb,text,share',
						retweets: false,
						replies: false,
						images: '', // large w: 786 h: 346, thumb w: 150 h: 150, medium w: 600 h: 264, small w: 340 h 150
						url: 'twitter.php',
						icon: 'twitter.png'
					},

					custom_twitter: {
						id: '',
						intro: 'Tweeted',
						out: 'intro,title,text',
						text: 'contentSnippet',						
						icon: 'twitter.png'
					},

					custom_google: {
						id: '',
						intro: 'Shared',
						out: 'intro,title,text,share',
						text: 'contentSnippet',
						icon: 'google.png'
					},
					youtube: {
						id: '',
						intro: 'Uploaded,Favorite,New Video',
						search: 'Search',
						out: 'intro,thumb,title,text,user,share',
						feed: 'uploads,favorites,newsubscriptionvideos',
						thumb: 'default',
						icon: 'youtube.png'
					},
					flickr: {
						id: '',
						intro: 'Uploaded',
						out: 'intro,thumb,title,text,share',
						lang: 'en-us',
						icon: 'flickr.png'
					},
					delicious: {
						id: '',
						intro: 'Bookmarked',
						out: 'intro,thumb,title,text,user,share',
						icon: 'delicious.png'
					},
					pinterest: {
						id: '',
						intro: 'Pinned',
						out: 'intro,thumb,text,user,share',
						icon: 'pinterest.png'
					},
					rss: {
						id: '',
						intro: 'Posted',
						out: 'intro,title,text,share',
						text: 'contentSnippet',
						icon: 'rss.png'
					},
					custom_youtube: {
						id: '',
						intro: 'Posted',
						out: 'intro,title,text,share',
						text: 'contentSnippet',
						icon: 'rss.png'
					},
					custom_path: {
						id: '',
						intro: 'Posted',
						out: 'intro,title,text,share',
						text: 'contentSnippet',
						icon: 'rss.png'
					},
					lastfm: {
						id: '',
						intro: 'Listened to,Loved,Replied',
						out: 'intro,thumb,title,text,user,share',
						feed: 'recenttracks,lovedtracks,replytracker',
						icon: 'lastfm.png'
					},
					dribbble: {
						id: '',
						intro: 'Posted,Liked',
						out: 'intro,thumb,title,text,user,share',
						feed: 'shots,likes',
						icon: 'dribbble.png'
					},
					vimeo: {
						id: '',
						intro: 'Liked,Video,Appeared In,Video,Album,Channel,Group',
						out: 'intro,thumb,title,text,user,share',
						feed: 'likes,videos,appears_in,all_videos,albums,channels,groups',
						thumb: 'medium',
						stats: true,
						icon: 'vimeo.png'
					},
					stumbleupon: {
						id: '',
						intro: 'Shared,Reviewed',
						out: 'intro,thumb,title,text,user,share',
						feed: 'favorites,reviews',
						icon: 'stumbleupon.png'
					},
					deviantart: {
						id: '',
						intro: 'Deviation',
						out: 'intro,thumb,title,text,user,share',
						icon: 'deviantart.png'
					},
					tumblr: {
						id: '',
						intro: 'Posted',
						out: 'intro,title,text,user,share',
						thumb: 100,
						video: 250,
						icon: 'tumblr.png'
					},
					custom_instagram: {
						id: '',
						intro: 'Posted',
						out: 'intro,title',
						icon: 'instagram.png'
					}
				},
				remove: '',
				twitterId: '',
				days: 10,
				limit: 50,
				max: 'days',
				external: true,
				speed: 600,
				height: 550,
				wall: false,
				order: 'date',
				filter: true,
				controls: true,
				rotate: {
					direction: 'up',
					delay: 8000
				},
				transition: '0.8s',
				cache: true,
				container: 'dcsns',
				cstream: 'stream',
				content: 'dcsns-content',
				iconPath: '',
				imagePath: '',
				debug: false,
			};
			
			this.o = {}, this.timer_on = 0, this.id = 'dcsns-'+$(el).index(), this.timerId = '', this.o = $.extend(true,this.defaults,options), opt = this.o, $load = $('<div class="dcsns-loading">creating stream ...</div>');
			
			$(el).addClass(this.o.container).append('<div class="'+this.o.content+'"><ul class="'+this.o.cstream+'"></ul></div>');
			
			var $c = $('.'+this.o.content,el), $a = $('.'+this.o.cstream,el), $l = $('li',$a);

			if(opt.height > 0 && opt.wall == false){
				$c.css({height:opt.height+'px'});
			}


			if(this.o.filter == true || this.o.controls == true){
				var x = '<div class="dcsns-toolbar">';
				if(this.o.filter == true){
					x += '<ul id="dcsns-filter" class="option-set filter">';
					x += this.o.wall == true ? '<li><a id="social_all" href="#filter" data-group="dc-filter"  data-filter="*" class="selected link-all iso-active">all</a></li>' : '' ;
					var $f = $('.filter',el);
					$.each(opt.feeds, function(k,v){
						x += v.id != '' ? '<li class="active f-'+k+'"><a href="#filter" rel="'+k+'" data-group="dc-filter" data-filter=".dcsns-'+k+'"><img src="'+opt.imagePath+opt.feeds[k].icon+'" alt="" /></a></li>' : '' ;
					});
					x += '</ul>';
				}
				if(this.o.controls == true && opt.wall == false){
					var play = this.o.rotate.delay <= 0 ? '' : '<li><a href="#" class="play"></a></li>' ;
					x += '<div class="controls"><ul>'+play+'<li><a href="#" class="prev"></a></li><li><a href="#" class="next"></a></li></ul></div>';
				}
				x += '</div>';
				if(opt.wall == false){
					$(el).append(x);
				} else {
					$(el).before(x);
				}
			}
			
			if(this.o.wall == true){
				$('.dcsns-toolbar').append($load);
				this.createwall($a);
			} else {
				$c.append($load);
			}
			
			this.createstream(el,$a,0,opt.days);
			
			this.addevents(el,$a);
			
			if(this.o.rotate.delay > 0){
				this.rotate(el);
			}
			
			$load.remove();
		},
		
		createstream: function(obj,s,f1,f2){
			$.each(opt.feeds, function(k,v){
				if(opt.feeds[k].id != ''){
					var txt = [];
					$.each(opt.feeds[k].intro.split(','), function(i,v){
						v = $.trim(v);
						txt.push(v);
					});
					$.each(opt.feeds[k].id.split(','), function(i,v){
						v = $.trim(v);
						if(opt.feeds[k].feed && v.split('#').length < 2){
							if(k == 'youtube' && v.split('/').length > 1) {
								getFeed(k,v,opt.iconPath,opt.feeds[k],obj,opt,f1,f2,'posted','',i);
							} else {
								$.each(opt.feeds[k].feed.split(','), function(i,feed){
									getFeed(k,v,opt.iconPath,opt.feeds[k],obj,opt,f1,f2,txt[i],feed,i);
								});
							}
						} else {
							intro = v.split('#').length < 2 ? opt.feeds[k].intro : opt.feeds[k].search ;
							getFeed(k,v,opt.iconPath,opt.feeds[k],obj,opt,f1,f2,intro,'',i);
						}
					});
				}
			});
		},
		
		createwall: function(obj){
				obj.isotope({
					itemSelector : 'li.dcsns-li',
					transitionDuration: opt.transition,
					getSortData : {
						postDate : function( itemElem ){
							return parseInt($(itemElem).attr('rel'),10);
						}
					},
					sortBy : 'postDate'
				});
		},
		
		addevents: function(obj,$a){
			var self = this, speed = this.o.speed;
			var $container = $('.stream',obj), filters = {}
			$('.controls',obj).delegate('a','click',function(){
				var x = $(this).attr('class');
				switch(x)
				{
					case 'prev':
					self.pauseTimer();
					ticker($a,'prev',speed);
					break;
					case 'next':
					self.pauseTimer();
					ticker($a,'next',speed);
					break;
					case 'play':
					self.rotate(obj);
					$('.controls .play').removeClass('play').addClass('pause');
					break;
					case 'pause':
					self.pauseTimer();
					break;
				}
				return false;
			});
			$('.filter',obj).delegate('a','click',function(){
				if(opt.wall == false){
					var rel = $(this).attr('rel');
					if($(this).parent().hasClass('active')){
						$('.dcsns-'+rel,$a).slideUp().addClass('inactive');
						$(this).parent().animate({opacity: 0.3},400);
					} else {
						$('.dcsns-'+rel,$a).slideDown().removeClass('inactive');
						$(this).parent().animate({opacity: 1},400);
					}
					$(this).parent().toggleClass('active');
				}
				return false;
			});
			if(this.o.external){
				$a.delegate('a','click',function(){
					if(!$(this).parent().hasClass('section-share')){
						this.target = '_blank';
					}
				});
			}
		},
		rotate: function(a){
			var self = this, stream = $('.'+this.o.cstream,a), speed = this.o.speed, delay = this.o.rotate.delay, r = this.o.rotate.direction == 'up' ? 'prev' : 'next' ;
			this.timer_on = 1;
			$('.controls .play').removeClass('play').addClass('pause');
			this.timerId = setTimeout(function(){
				ticker(stream,r,speed);
				self.rotate(a);
			}, delay);
		},
		pauseTimer: function(){
			clearTimeout(this.timerId);
			this.timer_on = 0;
			$('.controls .pause').removeClass('pause').addClass('play');
		}
	});
	
	$.fn.dcSocialStream = function(options, callback){
		var d = {};
		this.each(function(){
			var s = $(this);
			d = s.data("socialtabs");
			if (!d){
				d = new SocialStreamObject(this, options, callback);
				s.data("socialtabs", d);
			}
		});
		return d;
	};

	function getFeed(type,id,path,o,obj,opt,f1,f2,intro,feed,fn){
	
		var stream = $('.stream',obj), list = [],d = '', px = 300, c = [],data, href, url, n = opt.limit, txt = [], src;
		frl = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&output=json_xml&num='+n+'&callback=?&q=';
		
		switch (type) {
			
			case 'facebook':
			var cp = id.split('/');
			url = url = cp.length > 1 ? 'https://graph.facebook.com/'+cp[1]+'/photos?fields=id,link,from,name,picture,images,comments&limit='+n : frl + encodeURIComponent('https://www.facebook.com/feeds/page.php?id='+id+'&format=rss20');
			break;
			
			case 'twitter':
			var curl = o.url.replace(/\&#038;/gi, "&");
			var cp = id.split('/'), cq = id.split('#'), cu = o.url.split('?'), replies = o.replies == true ? '&exclude_replies=false' : '&exclude_replies=true' ;
			var param = '&include_entities=true&include_rts='+o.retweets+replies;
			url1 = cu.length > 1 ? curl + '&' : curl + '?';
			url = cp.length > 1 ? url1 + 'url=list&list_id='+cp[1]+'&per_page='+n+param : url1 + 'url=timeline&screen_name='+id+'&count='+n+param;
			if(cq.length > 1){
				var rts = o.retweets == false ? '+exclude:retweets' : '' ;
				url = url1 + 'url=search&q='+encodeURIComponent(cq[1])+'&count='+n;
			}
			break;

			case 'google': 
			n = n > 100 ? 100 : n ;
			href = 'https://plus.google.com/'+id;
			url = 'https://www.googleapis.com/plus/v1/people/'+id+'/activities/public';
			data = {key: o.api_key, maxResults: n, prettyprint: false, fields: "items(id,kind,object(attachments(displayName,fullImage,id,image,objectType,url),id,objectType,plusoners,replies,resharers,url),published,title,url,verb)"};
			break;
			
			case 'youtube': 
			var cp = id.split('/'), cq = id.split('#');
			n = n > 50 ? 50 : n ;
			href = 'https://www.youtube.com/';
			href += cq.length > 1 ? 'results?search_query='+encodeURIComponent(cq[1]) : 'user/'+id;
			href = cp.length > 1 ? 'https://www.youtube.com/playlist?list='+cp[1] : href ;
			url = 'https://gdata.youtube.com/feeds/';
			if(cp.length > 1){
				url += 'api/playlists/'+cp[1]+'?v=2&orderby=published'
			} else {
				url += cq.length > 1 ? 
				'api/videos?alt=rss&orderby=published&max-results='+n+'&racy=include&q='+encodeURIComponent(cq[1]) : 
				'base/users/'+id+'/'+feed+'?alt=rss&v=2&orderby=published&client=ytapi-youtube-profile';
			}
			url = frl + encodeURIComponent(url);
			break;		
			
			case 'flickr':
			var cq = id.split('/'), fd = cq.length > 1 ? 'groups_pool' : 'photos_public' ;
			id = cq.length > 1 ? cq[1] : id ;
			href = 'https://www.flickr.com/photos/'+id;
			url = 'https://api.flickr.com/services/feeds/'+fd+'.gne?id='+id+'&lang='+o.lang+'&format=json&jsoncallback=?';
			break;
			
			case 'delicious':
			href = 'https://www.delicious.com/'+id;
			url = 'http://feeds.delicious.com/v2/json/'+id;
			break;
			
			case 'pinterest':
			var cp = id.split('/');
			url = 'https://www.pinterest.com/'+id+'/';
			url += cp.length > 1 ? 'rss' : 'feed.rss';
			href = 'http://www.pinterest.com/'+id;
			url = frl + encodeURIComponent(url);
			break;
			
			case 'rss':
			href = id;
			url = frl + encodeURIComponent(id);
			break;
			
			case 'custom_facebook':
			href = id;
			url = frl + encodeURIComponent(id);
			break;

			case 'custom_twitter':
			href = id;
			url = frl + encodeURIComponent(id);
			break;

			case 'custom_instagram':
			href = id;
			url = frl + encodeURIComponent(id);
			break;

			case 'custom_google':
			href = id;
			url = frl + encodeURIComponent(id);
			break;

			case 'custom_youtube':
			href = id;
			url = frl + encodeURIComponent(id);
			break;

			case 'custom_path':
			href = id;
			url = frl + encodeURIComponent(id);
			break;

			case 'lastfm':
			href = 'https://www.last.fm/user/'+id;
			var ver = feed == 'lovedtracks' ? '2.0' : '1.0' ;
			url = frl + encodeURIComponent('https://ws.audioscrobbler.com/'+ver+'/user/'+id+'/'+feed+'.rss');
			break;
			
			case 'dribbble':
			href = 'https://www.dribbble.com/'+id;
			url = feed == 'likes' ? 'http://api.dribbble.com/players/'+id+'/shots/likes' : 'http://api.dribbble.com/players/'+id+'/shots' ;
			break;
			
			case 'vimeo':
			href = 'https://www.vimeo.com/'+id;
			url = 'https://vimeo.com/api/v2/'+id+'/'+feed+'.json';
			break;
			
			case 'stumbleupon':
			href = 'https://www.stumbleupon.com/stumbler/'+id;
			url = frl + encodeURIComponent('http://rss.stumbleupon.com/user/'+id+'/'+feed);
			break;
			
			case 'deviantart':
			href = 'https://'+id+'.deviantart.com';
			url = frl + encodeURIComponent('https://backend.deviantart.com/rss.xml?type=deviation&q=by%3A'+id+'+sort%3Atime+meta%3Aall');
			break;
			
			case 'tumblr':
			href = 'http://'+id+'.tumblr.com';
			url = 'http://'+id+'.tumblr.com/api/read/json?callback=?&num='+n;
			break;
			
			case 'instagram':
			href = '#';
			url = 'https://api.instagram.com/v1';
			var cp = id.substr(0,1), cq = id.split(cp), url1 = encodeURIComponent(cq[1]), qs = '', ts = 0;
			switch(cp)
			{
				case '?':
				var p = cq[1].split('/');
				qs = '&lat='+p[0]+'&lng='+p[1]+'&distance='+p[2];
				url += '/media/search';
				break;
				case '#':
				url += '/tags/'+url1+'/media/recent';
				ts = 1;
				break;
				case '!':
				url += '/users/'+url1+'/media/recent';
				break;
				case '@':
				url += '/locations/'+url1+'/media/recent';
				break;
			}
			if(o.accessToken == '' && ts == 0){
				if (location.hash) {
					o.accessToken = location.hash.split('=')[1] ;
				} else {
					location.href="https://instagram.com/oauth/authorize/?client_id="+o.clientId+"&redirect_uri="+o.redirectUrl+"&response_type=token"; 
				}
			}
			url += '?access_token='+o.accessToken+'&client_id='+o.clientId+'&count='+n+qs;
			break;
		}
		var dataType = type == 'twitter' ? 'json' : 'jsonp';
		jQuery.ajax({
			url: url,
			data: data,
			cache: opt.cache,
			dataType: dataType,
			success: function(a){
				var error = '';
				switch(type)
				{
					case 'facebook':
						if(cp.length > 1){
							a = a.data;
						} else {
							if(a.responseStatus == 200){
								a = a.responseData.feed.entries;
							} else {
								error = a.responseDetails;
							}
						}
					break;
					case 'google':
						error = a.error ? a.error : '' ;
						a = a.items;
					break;
					case 'flickr':
						a = a.items;
					break;
					case 'instagram':
						a = a.data;
					break;
					case 'twitter':
						error = a.errors ? a.errors : '' ;
						if(cq.length > 1){a = a.statuses} ;
					break;
					case 'youtube':
						if(a.responseStatus == 200){
							a = a.responseData.feed.entries;
							if(cp.length > 1){var pl = cp[0];}
						} else {
							error = a.responseDetails;
						}
					break;
					case 'dribbble':
						a = a.shots;
					break;
					case 'tumblr':
						a = a.posts;
					break;
					case 'delicious':
					break;
					case 'vimeo':
					break;
					default:
						if(a.responseStatus == 200){
							a = a.responseData.feed.entries;
						} else {
							error = a.responseDetails;
						}
					break;
				}
				if(error == ''){
					var xi = -1;
					$.each(a, function(i,item){
						if(i < n){
							
							var maxLength = 60;
							var trimmedString = item.title.substr(0, maxLength);

							switch(type)
							{
							case 'custom_facebook':
							var thetitle = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))+'... <br></br>';
							break;
							
							case 'custom_instagram_old':
							var thetitle = '<br>'+trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))+'...';
							break;

							default:
							var thetitle = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))+'...';
							break;
							}

							if(type	=='custom_instagram	'){
									var myRegex = /<img[^>]+src="(http:\/\/[^">]+)"/g;
									var test = item.content;
									myRegex.exec(test);
							}else{
									var html = [], q = item.link, u='<a href="'+href+'">'+id+'</a>', w='', x = '<a href="'+q+'">'+thetitle+'</a>', y='', z='', zz='', m='', d = item.publishedDate, sq = q, st = item.title, s = '';
							}
							switch(type)
							{	
								
								case 'rss':
								z = item[o.text];
								break;
								
								case 'rss':
								z = item[o.text];
								break;

								case 'custom_facebook':
								z = item[o.text];
								break;

								case 'custom_twitter':
								z1 = global_content[xi+1];
								z2 = '<span class="section-share"><a href="https://twitter.com/intent/tweet?in_reply_to='+ global_tweet_id[xi+1] +'" class="share-reply"></a>' +
								 	  '<a href="https://twitter.com/intent/retweet?tweet_id='+ global_tweet_id[xi+1] +'" class="share-retweet"></a>' +
								 	  '<a href="https://twitter.com/intent/favorite?tweet_id='+ global_tweet_id[xi+1] +'" class="share-favorite"></a></span>' ;
								z = z1 + z2;
								break;
								
								case 'custom_google':
								z = item[o.text];
								break;

								case 'custom_instagram':
								z = item.content	;
								break;

								case 'custom_youtube':
								var video_id = /[^=]*$/.exec(q)[0];
								z=  '<div class="container">'+
									'<iframe width="100%" height="315" src="https://www.youtube.com/embed/'+video_id+'" frameborder="0" allowfullscreen class="video">'+
									'</iframe>'+
									'</div>';
								break;

								case 'custom_path':
								var path_link = /[^/]*$/.exec(item[o.text])[0];
								path_link = path_link.trim();
								z1 = item[o.text];
								z2 =  '<span class="section-user"><b><a href="https://path.com/p/'+path_link+'">DETAILS</a></b></span>';
								z= z1+z2;
								
								break;
								
							}
							
							icon = '<a href="'+q+'"><img src="'+path+o.icon+'" alt="" class="icon" /></a>';

							if(type == 'twitter'){
								var intent = 'https://twitter.com/intent/';
								s = '<a href="'+intent+'tweet?in_reply_to='+sq+'&via='+opt.twitterId+'" class="share-reply"></a>';
								s += '<a href="'+intent+'retweet?tweet_id='+sq+'&via='+opt.twitterId+'" class="share-retweet"></a>';
								s += '<a href="'+intent+'favorite?tweet_id='+sq+'" class="share-favorite"></a>';
							} else {
								s = share(st,sq,opt.twitterId);
							}
							xi=xi+1;
							$.each(o.out.split(','), function(i,v){
								zz += v != 'intro' ? '<span class="section-'+v+'">' : '' ;
								switch(v)
								{
									case 'intro':
									if(type == 'twitter'){
										zintro = '<span class="section-'+v+'"><a href="'+q+'">'+decodeURIComponent(intro)+'</a> <span><a href="https://twitter.com/'+un+'/status/'+item.id_str+'">'+nicetime(new Date(d).getTime(),0)+'</a></span></span>';
									} else {
										zintro = '<span class="section-'+v+'"><a href="'+q+'">'+decodeURIComponent(intro)+'</a> <span>'+nicetime(new Date(d).getTime(),0)+'</span></span>';
									}
									break;
									case 'title':
									zz += x;
									break;

									case 'title_insta':
									var tt = item.title;
									zz += tt;
									break;

									case 'thumb':
									//if(type == 'rss'){
										var src = item.content.indexOf("img") >= 0 ? $('img',item.content).attr('src') : '' ;
										y = src ? '<a href="'+q+'" class="thumb"><img align="middle" height="auto" width="100%" src="'+src+'" alt="" /></a>' : '' ;
									//}
									zz += y;
									break;

									case 'blogger_thumb':
									y = ' <a href="'+q+'" class="thumb"><img align="middle" height="auto" width="100%" src="'+global_blog_thumb[xi]+'" alt="" style="border: 1px solid #ccc;"/></a>' ;
									zz += y;
									break;
									
									case 'fb_thumb':
									var src = item.content.indexOf("img") >= 0 ? $('img',item.content).attr('src') : '' ;
									if (q.indexOf('youtube.com/watch') > -1) {
									var video_id = /[^=]*$/.exec(q)[0];
										y =  '<div class="container">'+
											'<iframe width="100%" height="315" src="https://www.youtube.com/embed/'+video_id+'" frameborder="0" allowfullscreen class="video">'+
											'</iframe>'+
											'</div>';
									} else{
										y = src ? ' <a href="'+q+'" class="thumb"><img height="auto" width="50%" src="'+src+'" alt="" style="border: 1px solid #ccc;"/></a>' : '' ;
									}
									zz += y;
									break;

									/*
									case 'thumb_insta':
									//var src = item.content.indexOf("img") >= 1 ? $('img',item.content).attr('src').length : '' ;
									var src = $('img',item.content).map(function() { return this.src; }).get();
									y = src ? '<a href="'+q+'" class="thumb"><img align="middle" height="auto" width="100%" src="'+src+'" alt="" style="border: 1px solid #ccc;"/></a>' : '' ;
									zz += y;
									break;

									*/


									case 'thumb_insta':
									//var src = item.content.indexOf("img") >= 1 ? $('img',item.content).attr('src').length : '' ;
									var src = $(item.content).attr('src');
									y = src ? '<a href="'+q+'" class="thumb"><img align="middle" height="auto" width="100%" src="'+src+'" alt="" style="border: 1px solid #ccc;"/></a>' : '' ;
									zz += y;
									break;


									case 'thumb_gplus':
									var src = item.content.indexOf("img") >= 0 ? $('img',item.content).attr('src') : '' ;

										var urlChunks = src.split('/');
										var host = urlChunks[urlChunks.length - 7];
										if (host == '2.bp.blogspot.com' || host == '3.bp.blogspot.com' || host == '4.bp.blogspot.com' || host == '1.bp.blogspot.com'){
											gthumb = 'http://'+host+'/'+urlChunks[urlChunks.length - 6]+'/'+urlChunks[urlChunks.length - 5]+'/'+
															urlChunks[urlChunks.length - 4]+'/'+urlChunks[urlChunks.length - 3]+'/'+'s150'+'/'+urlChunks[urlChunks.length - 1];
										}else{
											gthumb = src ;
										}

									y = src ? '<a href="'+q+'" class="thumb"><img align="middle" height="auto" width="100%" src="'+gthumb+'" alt="" style="border: 1px solid #ccc;"/></a>' : '' ;
									zz += y;
									break;


									case 'thumb_enc':
									var src = item.content.indexOf("img") >= 0 ? $('img',item.content).attr('src') : '' ;
									y = src ? '<a href="'+q+'" ><img height="auto" width="10%" src="'+src+'" /></a>' : '' ;
									if(typeof global_media[xi] === 'undefined'){
										yz = '';
										y='';
									}else{
										// :small hanya berlaku utk twitter
									yz = '<a href="'+q+'" class="thumb"><img height="auto" width="70%" src="'+global_media[xi]+':thumb" alt="" style="border: 1px solid #ccc;"/></a>' ;
									}
									yc = '<div><i>'+ global_date[xi] +'</i></div>';
									zz += y+yz+yc;

									break;

									case 'text':
									zz += z;
									break;
									case 'user':
									zz += u;
									break;
									case 'meta':
									zz += m;
									break;
									case 'share':
									zz += s;
									break;
								}
								zz += v != 'intro' ? '</span>' : '' ;
							});
							
							var df = type == 'instagram' ? nicetime(d,1) : nicetime(new Date(d).getTime(),1);
							var ob = df;
							switch(opt.order)
							{
								case 'random':
								ob = randomish(6);
								break;
								case 'none':
								ob = 1;
								break;
							}
							var out = '<li rel="'+ob+'" class="dcsns-li dcsns-'+type+' dcsns-feed-'+fn+'">'+w+'<div class="inner">'+zz+'<span class="clear"></span></div>'+zintro+icon+'</li>', str = opt.remove;
							
							if( str.indexOf( q ) !== -1 && q != '' ){
								n = n + 1;
							} else {
								if(opt.max == 'days'){
									if(df <= f2 * 86400 && df >= f1 * 86400){
										list.push(out);
									} else if(df > f2 * 86400) {
										return false;
									}
								} else {
									list.push(out);
								}
							}
						}
					});
				} else if(opt.debug == true){
					list.push('<li class="dcsns-li dcsns-error">Error. '+error+'</li>');
				}
			},
			complete: function(){
				var $newItems = $(list.join(''));
				if(opt.wall == true){
					stream.isotope( 'insert', $newItems );					
				} else {
					stream.append($newItems);
					sortstream(stream,'asc');
				}
				if(type == 'facebook' && cp.length < 2){
					fbHrefLink(id,$newItems);
				} else if(type == 'flickr' && cq.length > 1){
					flickrHrefLink(cq[1],$newItems);
				}
			}
			
		});
		return;
	}

	function linkify(text){
		text = text.replace(
			/((https?\:\/\/)|(www\.)|(pic\.))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
			function(url){
				if( url.length >= 30){
				full_urlx = url;
				url = url.substring(0, 30);
				}else{
					var full_urlx = !url.match('^https?:\/\/') ? 'http://' + url : url ;
				}
				return '<a href="' + full_urlx + '">' + url + '</a>';
			}
		);
		text = text.replace(/(^|\s)@(\w+)/g, '$1@<a href="http://www.twitter.com/$2">$2</a>');
		//text = text.replace(/(^|\s)#(\w+)/g, '$1#<a href="http://twitter.com/search/%23$2">$2</a>');
		return text;
	}
	
	function htmlEncode(v){
		return $('<div/>').text(v).html();
	}
	
	function stripHtml(v){
		var $html = $(v);
		return $html.text();
	}

	Date.prototype.setRFC3339 = function(dString){
	   var utcOffset, offsetSplitChar;
	   var offsetMultiplier = 1;
	   var dateTime = dString.split('T');
	   var date = dateTime[0].split('-');
	   var time = dateTime[1].split(':');
	   var offsetField = time[time.length - 1];
	   var offsetString;
	   offsetFieldIdentifier = offsetField.charAt(offsetField.length - 1);
	   if (offsetFieldIdentifier == 'Z') {
		  utcOffset = 0;
		  time[time.length - 1] = offsetField.substr(0, offsetField.length - 2);
	   } else {
		  if (offsetField[offsetField.length - 1].indexOf('+') != -1) {
			 offsetSplitChar = '+';
			 offsetMultiplier = 1;
		  } else {
			 offsetSplitChar = '-';
			 offsetMultiplier = -1;
		  }
		  offsetString = offsetField.split(offsetSplitChar);
		  time[time.length - 1] == offsetString[0];
		  offsetString = offsetString[1].split(':');
		  utcOffset = (offsetString[0] * 60) + offsetString[1];
		  utcOffset = utcOffset * 60 * 1000;
	   }
	   this.setTime(Date.UTC(date[0], date[1] - 1, date[2], time[0], time[1], time[2]) + (utcOffset * offsetMultiplier ));
	   return this;
	};
	
	Date.prototype.setFbAlbum = function(dString){
	   var utcOffset, offsetSplitChar = '+', offsetMultiplier = 1, dateTime = dString.split('T'), date = dateTime[0].split('-'), time = dateTime[1].split(':'), offsetField = time[time.length - 1], offsetString;
		  if (offsetField[offsetField.length - 1].indexOf('+') != -1) {
			 offsetSplitChar = '-';
			 offsetMultiplier = -1;
		  }
		  offsetTime = offsetField.split(offsetSplitChar);
		  utcOffset = parseInt((offsetTime[1]/100),10) * 60 * 1000;
	   this.setTime(Date.UTC(date[0], date[1] - 1, date[2], time[0], time[1], offsetTime[0]) + (utcOffset * offsetMultiplier ));
	   return this;
	};
	
	Date.prototype.setVimeo = function(dString){
	   var utcOffset = 0, offsetSplitChar, offsetMultiplier = 1;
	   var dateTime = dString.split(' ');
	   var date = dateTime[0].split('-');
	   var time = dateTime[1].split(':');
	   this.setTime(Date.UTC(date[0], date[1] - 1, date[2], time[0], time[1], time[2]) + (utcOffset * offsetMultiplier ));
	   return this;
	};

	function parseTwitterDate(a){
		var out = !!navigator.userAgent.match(/Trident\/7\./) || navigator.userAgent.indexOf("MSIE")>= 0 ? a.replace(/(\+\S+) (.*)/, '$2 $1') : a ; 
		return out;
	}
	
	function nicetime(a,out){
        var d = Math.round((+new Date - a) / 1000), fuzzy = '', n = 'mins';
        if(out == 1) {
            return d;
        } else if(out == 0) {
            var chunks = new Array();
                    chunks[0] = [60 * 60 * 24 * 365 , 'year', 'years'];
                    chunks[1] = [60 * 60 * 24 * 30 , 'month', 'months'];
                    chunks[2] = [60 * 60 * 24 * 7, 'week', 'weeks'];
                    chunks[3] = [60 * 60 * 24 , 'day', 'days'];
                    chunks[4] = [60 * 60 , 'hr', 'hrs'];
                    chunks[5] = [60 , 'min', 'mins'];
                    var i = 0, j = chunks.length;
                    for (i = 0; i < j; i++) {
                        s = chunks[i][0];
                        if ((xj = Math.floor(d / s)) != 0)
                        {
                            n = xj == 1 ? chunks[i][1] : chunks[i][2] ;
                            break;
                        }
                    }
                    fuzzy += xj == 1 ? '1 '+n : xj+' '+n ;
                    if (i + 1 < j) {
                        s2 = chunks[i + 1][0];
                        if ( ((xj2 = Math.floor((d - (s * xj)) / s2)) != 0) )
                        {
                            n2 = (xj2 == 1) ? chunks[i + 1][1] : chunks[i + 1][2] ;
                            fuzzy += (xj2 == 1) ? ' + 1 '+n2 : ' + '+xj2+' '+n2 ;
                        }
                    }
					fuzzy += ' ago';
            return fuzzy;
            }
        }

		function num(a){
            var b = a;
            if (a > 999999) b = Math.floor(a / 1E6) + "M";
            else if (a > 9999) b = Math.floor(a / 1E3) + "K";
            else if (a > 999) b = Math.floor(a / 1E3) + "," + a % 1E3;
            return b
        }
		
		function parseQ(url){
			var v = [], hash, q = url.split('?')[1];
			if(q != undefined){
				q = q.split('&');
				for(var i = 0; i < q.length; i++){
					hash = q[i].split('=');
					v.push(hash[1]);
					v[hash[0]] = hash[1];
				}
			}
			return v;
		}
		
		function getImg(content){
			var imgArr = new Array(), reg = /<img .*?srcx=["\']([^ ^"^\']*)["\']/gi, check, image;
			while (check = reg.exec(content)){
				imgArr.push(check[1]);
			}
			if(imgArr.length > 0 && imgArr[0].indexOf('sndcdn.com') === -1){
				var image = imgArr[0];
				if(image.indexOf('instagram.com/profiles') !== -1) { image = imgArr[1]; }
				image = image.replace("_m.jpg", ".jpg");
				if(image.indexOf('fbcdn') == -1) {
					image = image.replace("_b.jpg", "_f.jpg");
					image = image.replace("_b.png", "_f.png");
				} else {
					if(image.indexOf('safe_image.php') == -1) {
						var id = image.split("_"), object_id = id[1];
						image = 'http://graph.facebook.com/'+object_id+'/picture?type=normal';
					}
				}
				image = image.replace("_s.jpg", "_b.jpg");
				image = image.replace("_m.png", ".png");
				image = image.replace("_s.png", "_b.png");
				image = image.replace(/\&amp;/g,'&');
				if(image.indexOf('safe_image.php') != -1){
					image = unescape(image.match(/url=([^&]+)/)[1]);
				}
				if(image.indexOf('app_full_proxy.php') != -1){
					image = unescape(image.match(/srcx=([^&]+)/)[1]);
				}
				if(this.prefix == 'https://'){
					var image_tmp = image.replace('http://', 'https://');
					image = image_tmp;
				}
			} else {
				return false
			}
			return image;
		}
		
		function sortstream(obj,d){
			var $l = $('li',obj);
			$l.sort(function(a, b){
				var keyA = parseInt($(a).attr('rel'),10), keyB = parseInt($(b).attr('rel'),10);
				if(d == 'asc'){
					return (keyA > keyB) ? 1 : -1;
				} else {
					return (keyA < keyB) ? 1 : -1;
				}
				return 0;
			});
			$.each($l, function(index, row){
				obj.append(row);
			});
			$('.dcsns-loading').slideUp().remove();
			return;
		}
		
		function randomish(l){
			var i = 0, out = '';
			while(i < l){
				out += Math.floor((Math.random()*10)+1)+'';
				i++;
			}
			return out;
		}
		
		function ticker(s,b,speed){
			var $a = $('li:last',s),$b = $('li:first',s),$gx,bh = $b.outerHeight(true);
			if($('li',s).not('.inactive').length > 2){
				if(b == 'next'){
					$gx = $a.clone().hide();
					$b.before($gx);
					$a.remove();
					if($a.hasClass('inactive')){
						ticker(s,b,speed);
					} else {
						$('.inner',$gx).css({opacity: 0});
						$gx.slideDown(speed,'linear',function(){
							$('.inner',this).animate({opacity: 1},speed);
						});
						return;
					}
				} else {
					$gx = $b.clone();
					if($b.hasClass('inactive')){
						$a.after($gx);
						$b.remove();
						ticker(s,b,speed);
					} else {
						$b.animate({marginTop: -bh+'px'},speed,'linear',function(){
							$a.after($gx);
							$b.remove();
						});
						$('.inner',$b).animate({opacity: 0},speed);
					}
				}
			}
		}

		function fbHrefLink(id,obj){
			jQuery.ajax({
				url: 'https://graph.facebook.com/'+id,
				dataType: 'jsonp',
				success: function(a){
					$('.icon',obj).each(function(){
						$(this).parent().attr('href',a.link);
					});
					$('.section-user a',obj).each(function(){
						$(this).attr('href',a.link);
						$(this).text(a.name);
					});
				}
			});
		}
		
		function flickrHrefLink(id,obj){
			jQuery.ajax({
				url: 'http://api.flickr.com/services/feeds/groups_pool.gne?id='+id+'&format=json&jsoncallback=?',
				dataType: 'jsonp',
				success: function(a){
					$('.icon',obj).each(function(){
						$(this).parent().attr('href',a.link);
					});
				}
			});
		}
		
		function share(st,sq,twitterId){
			var s = '', sq = encodeURIComponent(sq), st = encodeURIComponent(st);
			s = '<a href="http://www.facebook.com/sharer.php?u='+sq+'&t='+st+'" class="share-facebook"></a>';
			s += '<a href="https://twitter.com/share?url='+sq+'&text='+st+'&via='+twitterId+'" class="share-twitter"></a>';
			s += '<a href="https://plus.google.com/share?url='+sq+'" class="share-google"></a>';
			s += '<a href="http://www.linkedin.com/shareArticle?mini=true&url='+sq+'&title='+st+'" class="share-linkedin"></a>';
			return s;
        }       
})(jQuery);

jQuery(window).load(function(){
	jQuery.getScript("//platform.twitter.com/widgets.js", function(){});
	jQuery('.section-share a').click(function(){
		var u = jQuery(this).attr('href');
		window.open(u,'sharer','toolbar=0,status=0,width=626,height=436');
		return false;
	});
	jQuery('.dcsns-facebook .section-text a').each(function(i){
		var txt = jQuery(this).attr('href');
		var href = decodeURIComponent(txt.replace("http://l.facebook.com/l.php?u=", "")).split('&');
		jQuery(this).attr('href',href[0]);
		txt = jQuery(this).attr('href');
		href = decodeURIComponent(txt.replace("https://www.facebook.com/l.php?u=", "")).split('&');
		jQuery(this).attr('href',href[0]);
	});
	jQuery('.dcsns-facebook .section-text a img').each(function(i){
		if(jQuery(this).parent().attr('href').split('http').length < 2){jQuery(this).parent().attr('href','https://facebook.com'+jQuery(this).parent().attr('href'));}
	});

	jQuery('#social-stream').dcSocialStream({
		feeds: {
			custom_twitter: {
				id: 'https://queryfeed.net/twitter?q=from%3Adavithace&geocode=&omit-direct=on&attach=on',
				intro: 'Tweet',
				out: 'intro,text,thumb_enc',
				text: 'contentSnippet',
				icon: 'twitter.png'
			},
			rss: {
				id: 'http://www.davidprasetyo.com/feeds/posts/default?orderby=published',
				intro: 'Posted',
				out: 'intro,blogger_thumb,title,text,share',
				text: 'contentSnippet',
				icon: 'rss.png'
			},
			custom_facebook: {
				id: 'https://fbrss.com/feed/6009f36b4453aff3508cd06c4615daeee8b15f0d.xml?me',
				intro: 'Posted',
				out: 'intro,fb_thumb,title,text,share',
				text: 'contentSnippet',
				icon: 'facebook.png'
			},
			custom_google: {
				id: 'http://gplusrss.com/rss/feed/535ea2b438c297f5dfa7508ba13b7c385453031f101c4',
				intro: 'Posted',
				out: 'intro,thumb_gplus,text,share',
				text: 'contentSnippet',
				icon: 'google.png'
			},

			custom_instagram: {
				id: 'http://rssbridge.buddylist.co/?action=display&bridge=InstagramBridge&u=davithace&format=AtomFormat',
				intro: 'Posted',
				out: 'thumb_insta,title_insta',
				text: 'contentSnippet',
				icon: 'instagram.png',
			},

			custom_youtube: {
				id: 'https://www.youtube.com/feeds/videos.xml?user=davidprasetyo19',
				intro: 'Uploaded',
				out: 'intro,thumb,title,text',
				icon: 'youtube.png'
			},

			custom_path: {
				id: 'https://queryfeed.net/twitter?q=path.com+from%3Adavithace&geocode=',
				intro: 'Updated',
				out: 'intro,text',
				icon: 'pinterest.png'
			},
		},
		rotate: {
			delay: 0
		},
		twitterId: 'davithace',
		control: false,
		filter: true,
		wall: true,
		center: true,
		cache: true,
		max: 'limit',
		limit: 10,
		iconPath: 'https://davithace.github.io/davidprasetyo/images/dcsns-dark/',
		imagePath: 'https://davithace.github.io/davidprasetyo/images/dcsns-dark/'
	});
document.getElementById('social_all').click();
});


jQuery(window).load(function(){
setTimeout(
    function() {
     jQuery('#social_all').click();
      //alert("aw");
    }, 5000);

	
});
