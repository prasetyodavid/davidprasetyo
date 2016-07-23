$.ajax({
     url:"http://www.omdbapi.com/?i="+movieid+"&plot=full&r=json",
     dataType: 'json', // Notice! JSONP <-- P (lowercase)
     success:function(result){
         // do stuff with json (in this case an array)
	console.log(result);
     },
     error:function(){
         alert("Error");
     }      
});



