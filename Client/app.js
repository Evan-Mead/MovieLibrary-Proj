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
          
