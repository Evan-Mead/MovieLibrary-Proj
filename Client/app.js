(function($){
    function processForm(e) {
        var dict = {
            Title: this["title"].value,
            Director: this["director"].value
        };
        $("#create").click(function (e) {
            $.ajax({
                url: 'https://localhost:44325/api/movie',
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    name: document.getElementById("name").value,
                    tite: document.getElementById("title").value,
                    director: document.getElementById("director").value,
                    genre: document.getElementById("genre").value
                }),
                success: function (data, textStatus, jQxhr) {
                    $("#postResult").val("Movie created ok.Id=" + jqXHR.responseText);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    $("postResult").val(jqXHR.statusText);
                    console.log(errorThrown);
                }
            });
            e.preventDefault();

            $("#getMovie").click(function (e) {
                $("#getMovieResult").val("");
                $.ajax({
                    contentType: "application/json",
                    type: "get",
                    url: "api/movie/" + $("#id").val(),
                    success: function (data, textStatus, jqXHR) {
                        $("#getMovieResult").val(data.name);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $("#getMovieResult").val(jqXHR.statusText);



                    }
                });
            });
        }      
}
    $('#my-form').submit( processForm );
})(jQuery);

//added comment for save to initial commit