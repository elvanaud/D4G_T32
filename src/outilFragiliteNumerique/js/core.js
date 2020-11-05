cache= {};

$(function(){
    $(".searchButton").click(function(){
		
        searchTerm = $(".searchTerm").val();
		console.log(cache);
		
		oneiris=document.getElementById("OneIris");
		welcomDiv=document.getElementById("welcomDiv");
		searchTab=document.getElementById("searchTab");
		
		if(cache.hasOwnProperty(searchTerm)){
			data=cache[searchTerm]
			setHtml(data);
			next();
		}else{
			// issue an AJAX request
			$.getJSON("apiAccess.php", { cityName: searchTerm},
				function(data){ // callack function
					if(data!=null){					
						setHtml(data);
						cache[searchTerm]=data;
                    }
                    
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
	if(searchTab.style.visibility=="hidden"){
		welcomDiv.remove();
		searchTab.style.visibility="visible";
		oneiris.style.visibility="visible";
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
}