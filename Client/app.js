(function($){
    function processForm(e){
        var dict = {
            Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json'
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function(data, textStatus, jqXHR){
                $("#movieList").html("");
                getMovies();
            },
            error: function(jqXHR, textStatus, errorThrown){
                console.log(errorThrown);
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit(processForm);

    $(function(){
        getMovies();
    })

function getMovies(){
    $.get("https://localhost:44325/api/movie", function(data){
        console.log(data)
        for(let i = 0; i < data.length; i++){
            var movieId= (data[i].movieId);
            $("#movieList").append(
                <tr>
                    <td><center>${JSON.stringify(data[i].title).replace(/\"/g,'')}</center></td>
                </tr>
            );
        }
    })
}
                
        
})(jQuery);

function displayDetails(movie){
    var movie2 = movie;
    $("#my-form").html("");
    $("#movieList").html("");
    $("#movieTitle").html(JSON.stringify(movie.title).replace);
    $("#movieList").append(

    );
}

function getDetails(id){
    $.get("https://localhost:44325/api/movie/" + id, function(data){
        var movie = data;
        displayDetails(movie);
    })
}

   
      
        

          



