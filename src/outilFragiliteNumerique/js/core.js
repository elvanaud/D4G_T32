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

                $("#nameRegion").html(data.NomRegion);
                $("#regGlobal").html(data.ScoreRegion);
                $("#regAccesInfo").html(data.ScoreRegAccesInfo);
                $("#regAccesNum").html(data.ScoreRegAccesNum);
                $("#regUsageNum").html(data.ScoreRegUsageNum);
                $("#regCompAdmin").html(data.ScoreRegCompAdmin);

                $("#nameDept").html(data.NomDept);
                $("#deptGlobal").html(data.ScoreDept);
                $("#deptAccesInfo").html(data.ScoreDeptAccesInfo);
                $("#deptAccesNum").html(data.ScoreDeptAccesNum);
                $("#deptUsageNum").html(data.ScoreDeptUsageNum);
                $("#deptCompAdmin").html(data.ScoreDeptCompAdmin);
        });
        
        return false; // to prevent the default action
    });

    $(".searchTerm").autocomplete("autoComplete.php",{minLength:2});
});