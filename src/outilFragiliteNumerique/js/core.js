cache= {};

$(function(){
    $(".searchButton").click(function(){
		
        searchTerm = $(".searchTerm").val();
		console.log(cache);
		
		if(cache.hasOwnProperty(searchTerm)){
			data=cache[searchTerm]
			setHtml(data);
		}else{
			// issue an AJAX request
			var datas=$.getJSON("apiAccess.php", { cityName: searchTerm},
				function(datas){ // callack function
					if(datas!=null){					
						setHtml(datas);
						cache[searchTerm]=datas;
					}
				}	
			);
		}
        
        return false; // to prevent the default action
    });

    $(".searchTerm").autocomplete("autoComplete.php",{minLength:2});
});

function setHtml(data){
	//Edit the html with the result
				console.log(data);
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
	
	
}