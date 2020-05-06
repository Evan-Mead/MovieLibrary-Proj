<<<<<<< HEAD

=======
>>>>>>> 3d21c7b69f46133a22c25519a3e07496d114fce6
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
<<<<<<< HEAD
        });

        function MoviesList(){
            jQuery.statusText;
            var data = {
                movieName: ("name").value(),
                title: ("title").value(),
                director: ("director").value(),
                genre: ("genre").value()
            };

            $.ajax({
                contentType: "application/json",
                type: 'put',
                url: "https://localhost:44325/api/movie",
                data: JSON,
            })
        }
          
$(function(){
    $.get("https://localhost:44325/api/movie", function(data){
        console.log(data);

        for(let i = 0; i < data.length; i++){
            $("#MoviesList").append(`<div> ${JSON.stringify(data[i].title)}<div>`);
        }
    })
})


=======
        });
>>>>>>> 3d21c7b69f46133a22c25519a3e07496d114fce6
