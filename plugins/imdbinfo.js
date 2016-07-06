$.getJSON("http://www.omdbapi.com/?i="+movieid+"&plot=full&r=json", function(result){
		$("#actor").html(result.Actors);
		$("#Actors").html(result.Actors);
		$("#Awards").html(result.Awards);
		$("#Country").html(result.Country);
		$("#Director").html(result.Director)
		$("#Genre").html(result.Genre);
		$("#Language").html(result.Language);
		$("#Metascore").html(result.Metascore);
		$("#Plot").html(result.Plot);
		$("#Poster").attr("src", result.Poster);
		$("#Rated").html(result.Rated);
		$("#Released").html(result.Released);
		$("#Response").html(result.Response);
		$("#Runtime").html(result.Runtime);
		$("#Title").html(result.Title);
		$("#Type").html(result.Type);
		$("#Writer").html(result.Writer);
		$("#Year").html(result.Year);
		$("#imdbID").html(result.imdbID);
		$("#imdbRating").html(result.imdbRating);
	
    });
