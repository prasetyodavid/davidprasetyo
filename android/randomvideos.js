$(document).ready(function() {

var videos = [
'pRpvdcjkT3k',
'Te4wx4jtiEA',
'efTj6UYzvk4'
];

var index=Math.floor(Math.random() * videos.length);
var html='<iframe style="padding: 16px 0;height:250px;" src="https://www.youtube.com/embed/' + videos[index] + '" allowfullscreen></iframe>';
document.write(html);

});