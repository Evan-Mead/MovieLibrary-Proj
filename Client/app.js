<<<<<<< HEAD
 $("#getMovieList").append(function(e){
            $("#getMovieListResult").val("");
            $.ajax({
                contentType: "application/json",
                type: "get",
                url: "https://localhost:44325/api/movie" + $("#id").val(),
                success: function(data, textStatus, jqXHR){
                    $("getMovieListResult").val(data.name);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    $("#getMovieListResult").val(jqXHR.statusText);
                }
            });
        });

   
       $("#create").click(function(e){
           $.ajax({
             contentType: "application/json",
             type: "post",
             url: "https://localhost:44325/api/movie",
             data: JSON.stringify({
                 name: document.getElementById("name").value,
                 title: document.getElementById("title").value,
                 director: document.getElementById("director").value,
                 genre: document.getElementById("genre").value

             }),
             success: function(data, textStatus, jqXHR){
                 $("postResult").val("Movie created ok. Id=" + jqXHR.responseText);
             },
             error: function(jqXHR, textStatus, errorThrown){
                 $("#postResult").value(jQuery.statusText);
             }
           });
        });
          
=======

$(function(){
    $.get("https://localhost:44325/api/movie", function(data){
        console.log(data);

        for(let i = 0; i < data.length; i++){
            $("#MoviesList").append(`<div> ${JSON.stringify(data[i].title.)}<div>`);
        }
    })
})

(function($){
    function processForm( e ){
        var dict = {
        	Title : this["title"].value,
            Director: this["director"].value,
            Genre: this["genre"].value
        };

        $.ajax({
            url: 'https://localhost:44325/api/movie',
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify(dict),
            success: function( data, textStatus, jQxhr ){
                $('#response pre').html( data );
            },
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });

        e.preventDefault();
    }

    $('#my-form').submit( processForm );
})(jQuery);
>>>>>>> cdbdffc9b8c7ca94086ef9ac9bc985da0648e0ff
