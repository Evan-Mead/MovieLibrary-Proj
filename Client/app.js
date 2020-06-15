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
                url: "https://localhost:44325/api/movie" + MoviesList,
                data: JSON,
            })
        }
          



