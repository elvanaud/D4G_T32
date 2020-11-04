$(function(){
    $(".searchButton").click(function(){
        var searchTerm = $(".searchTerm").val();

        // issue an AJAX request with HTTP post to your server side page.
        $.post("apiAccess.php", { cityName: searchTerm},
            function(data){
                // callack function gets executed
                //alert("Return data" + data + typeof (data));
                var tmp = $("#r1").html();
                $("#r1").html(tmp+data);
        });
        
        return false; // to prevent the default action
    });
});