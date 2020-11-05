$(function(){
    $(".searchButton").click(function(){
        var searchTerm = $(".searchTerm").val();

        // issue an AJAX request
        $.getJSON("apiAccess.php", { cityName: searchTerm},
            function(data){ // callack function
                console.log("Object contents:");
                for (const [key, value] of Object.entries(data)) {
                    console.log(`${key}: ${value}`);
                }

                //Edit the html with the result
                $("#communeName").html("Nom Commune: " + data.Nom);
                $("#scorePlaceholder").html("Score :"+ data.ScoreDept);
        });
        
        return false; // to prevent the default action
    });
});