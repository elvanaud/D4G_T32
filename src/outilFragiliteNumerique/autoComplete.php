<?php
//From: https://stackoverflow.com/questions/25123443/autocomplete-textbox-fetching-suggestions-from-database
    $codePostal=$_GET['term'];

    $con = mysqli_connect('localhost','admin','admin','BaseIndicateurs');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
      }

    $sql="SELECT NomIris,IdIris FROM Iris WHERE IdIris LIKE '%$codePostal%'";
    $result = mysqli_query($con,$sql) or die(mysqli_error());

    if($result)
    {
        while($row=mysqli_fetch_array($result))
        {
            $arraySugg[]=["label" => $row['NomIris'], "value" =>  $row['IdIris']];
        }
    }

    echo json_encode($arraySugg);
?>