cache= {};

$(function(){
    $(".searchButton").click(function(){
		
        searchTerm = $(".searchTerm").val();
		console.log(cache);
		
		oneiris=document.getElementById("OneIris");
		welcomDiv=document.getElementById("welcomDiv");
		searchBar=document.getElementById("searchBar");
		
		
		if(cache.hasOwnProperty(searchTerm)){
			data=cache[searchTerm]
			setHtml(data);
			welcomDiv.remove();
			next();
		}else{
			// issue an AJAX request
			$.getJSON("apiAccess.php", { cityName: searchTerm},
				function(data){ // callack function
									
					setHtml(data);
					cache[searchTerm]=data;
                    
                    
                    if(data === null || data["Type"]==="EMPTY")
                    {
                        alert("recherche incorrecte !");
                    }else{
						next();
					}
                    console.log("Object contents:");
                    for (const [key, value] of Object.entries(data)) {
                        console.log(`${key}: ${value}`);
                    }
				}	
			);
		}
        
        return false; // to prevent the default action
    });
    
    $(".searchTerm").autocomplete({minLength:2, source: "autoComplete.php"});
});

function next(){
	if(searchBar.style.visibility=='hidden'){
		welcomDiv.remove();
		searchBar.style.visibility="visible";
		oneiris.style.visibility="visible";
		oneiris.style.height="100%";
	}
}


function setHtml(data){
	//Edit the html with the result
	console.log(data);
	$("#nameCommune").html(data.Nom);
    $("#comGlobal").html(data.ScoreGlobal);
    $("#comAccesInfo").html(data.ScoreAccesInfo);
    $("#comAccesNum").html(data.ScoreAccesNum);
    $("#comUsageNum").html(data.ScoreUsageNum);
    $("#comCompAdmin").html(data.ScoreCompAdmin);
	$("#iris").html(data.IdIris);
	
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
	
	    
    /*if(data.comGlobal > 150){
        $("#cclAvis").html("félicitation votre score est excelent cela s'explique par une population dynamique et hétérogène");
        $("#avisScore").html("EXCELENT");
        $("#avisScore").addClass("text-success");
    }else if(data.comGlobal > 50){
        $("#cclAvis").html("félicitation votre score est bon cela s'explique par une population variée");
        $("#avisScore").html("BON");
        $("#avisScore")..addClass("text-warning");
    }else if(data.comGlobal > 250){
        $("#cclAvis").html(" votre score est corect cela s'explique par une population variée");
        $("#avisScore").html("VARIÉ");
        $("#avisScore").addClass("text-danger");
    }else{
        $("#cclAvis").html(" votre score est mauvais cela s'explique par une population vieille");
        $("#avisScore").html("MAUVAIS");
        $("#avisScore").addClass("text-dark");
    }*/
}