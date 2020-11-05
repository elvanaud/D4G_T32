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
                $("#nameCommune").html(data.Nom);
                $("#comGlobal").html(data.ScoreGlobal);
                $("#comAccesInfo").html(data.ScoreAccesInfo);
                $("#comAccesNum").html(data.ScoreAccesNum);
                $("#comUsageNum").html(data.ScoreUsageNum);
                $("#comCompAdmin").html(data.ScoreCompAdmin);

                $("#valueRegion").html(data.ScoreRegion);
                $("#nameRegion").html(data.NomRegion);

                $("#nomDept").html(data.NomDept);
                $("#valueDept").html(data.ScoreDept);
        });
        
        return false; // to prevent the default action
    });
});