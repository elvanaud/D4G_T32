<?php
//From: https://stackoverflow.com/questions/25123443/autocomplete-textbox-fetching-suggestions-from-database
    $q=$_GET['term'];
    //$codePostal=mysqli_real_escape_string($q);
    $codePostal = $q;
    $con = mysqli_connect('localhost','admin','admin','BaseIndicateurs');
    if (!$con) {
        die('Could not connect: ' . mysqli_error($con));
      }
    //$mysqli=mysqli_connect('localhost','root','','autofield') or die("Database Error");

    $sql="SELECT NomIris,IdIris FROM Iris WHERE IdIris LIKE '%$codePostal%'";
    $result = mysqli_query($con,$sql) or die(mysqli_error());

    if($result)
    {
        while($row=mysqli_fetch_array($result))
        {
            //echo $row['NomIris']."\n";
            $arraySugg[]=$row['NomIris'] ." - " .$row['IdIris'];
        }
    }
    //echo $codePostal;
    //echo $q;
    echo json_encode($arraySugg);
    //echo '["17000","17001","17002"]';


/*$term = $_GET[ "term" ];
$companies = array(
   array( "label" => "JAVA", "value" => "1" ),
   array( "label" => "DATA IMAGE PROCESSING", "value" => "2" ),
   array( "label" => "JAVASCRIPT", "value" => "3" ),
   array( "label" => "DATA MANAGEMENT SYSTEM", "value" => "4" ),
   array( "label" => "COMPUTER PROGRAMMING", "value" => "5" ),
   array( "label" => "SOFTWARE DEVELOPMENT LIFE CYCLE", "value" => "6" ),
   array( "label" => "LEARN COMPUTER FUNDAMENTALS", "value" => "7" ),
   array( "label" => "IMAGE PROCESSING USING JAVA", "value" => "8" ),
   array( "label" => "CLOUD COMPUTING", "value" => "9" ),
   array( "label" => "DATA MINING", "value" => "10" ),
   array( "label" => "DATA WAREHOUSE", "value" => "11" ),
   array( "label" => "E-COMMERCE", "value" => "12" ),
   array( "label" => "DBMS", "value" => "13" ),
   array( "label" => "HTTP", "value" => "14" )
	
);

$result = array();
foreach ($companies as $company) {
   $companyLabel = $company[ "label" ];
   if ( strpos( strtoupper($companyLabel), strtoupper($term) )!== false ) {
      array_push( $result, $company );
   }
}*/

//echo json_encode( $result );
//echo '["test","truc"]'; //both lines work !
?>