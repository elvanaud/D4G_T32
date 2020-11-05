$(function(){
    $(".searchButton").click(function(){
        var searchTerm = $(".searchTerm").val();

        // issue an AJAX request
        $.getJSON("apiAccess.php", { cityName: searchTerm},
            function(data){ // callack function
                if(!data)
                {
                    alert("recherche incorrecte !");
                }

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

    var arraySugg = ["17000","17001","17002","17003","17aaaa","172000", "bonjour", "bonmatin","bonsoir"];
    $(".searchTerm").autocomplete({minLength:1, source: "autoComplete.php"}); //"autoComplete.php",
});