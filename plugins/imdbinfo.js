jQuery.ajax({
     url:"http://www.omdbapi.com/?i="+movieid+"&plot=full&r=json",
     dataType: 'json', // Notice! JSONP <-- P (lowercase)
     success:function(result){
         // do stuff with json (in this case an array)
		jQuery("#actor").html(result.Actors);
		jQuery("#Actors").html(result.Actors);
		jQuery("#Awards").html(result.Awards);
		jQuery("#Country").html(result.Country);
		jQuery("#Director").html(result.Director)
		jQuery("#Genre").html(result.Genre);
		jQuery("#Language").html(result.Language);
		jQuery("#Metascore").html(result.Metascore);
		jQuery("#Plot").html(result.Plot);
		jQuery("#Poster").attr("src", result.Poster);
		jQuery("#Rated").html(result.Rated);
		jQuery("#Released").html(result.Released);
		jQuery("#Response").html(result.Response);
		jQuery("#Runtime").html(result.Runtime);
		jQuery("#Title").html(result.Title);
		jQuery("#Type").html(result.Type);
		jQuery("#Writer").html(result.Writer);
		jQuery("#Year").html(result.Year);
		jQuery("#imdbID").html(result.imdbID);
		jQuery("#imdbRating").html(result.imdbRating);
     },
     error:function(){
         jQuery.ajax({
     url:"http://www.omdbapi.com/?i="+movieid+"&plot=full&r=json",
     dataType: 'json', // Notice! JSONP <-- P (lowercase)
     success:function(result){
         // do stuff with json (in this case an array)
		jQuery("#actor").html(result.Actors);
		jQuery("#Actors").html(result.Actors);
		jQuery("#Awards").html(result.Awards);
		jQuery("#Country").html(result.Country);
		jQuery("#Director").html(result.Director)
		jQuery("#Genre").html(result.Genre);
		jQuery("#Language").html(result.Language);
		jQuery("#Metascore").html(result.Metascore);
		jQuery("#Plot").html(result.Plot);
		jQuery("#Poster").attr("src", result.Poster);
		jQuery("#Rated").html(result.Rated);
		jQuery("#Released").html(result.Released);
		jQuery("#Response").html(result.Response);
		jQuery("#Runtime").html(result.Runtime);
		jQuery("#Title").html(result.Title);
		jQuery("#Type").html(result.Type);
		jQuery("#Writer").html(result.Writer);
		jQuery("#Year").html(result.Year);
		jQuery("#imdbID").html(result.imdbID);
		jQuery("#imdbRating").html(result.imdbRating);
     },
     error:function(){
         //alert("Error");
         jQuery("#infoImdbContent").hide();
     }      
});
     }      
});



