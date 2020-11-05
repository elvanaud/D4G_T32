<?php
$irisId = $_GET['cityName'];

$con = mysqli_connect('localhost','admin','admin','BaseIndicateurs');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

//mysqli_select_db($con,"ajax_demo");

//com.Nom, dept.NomDept, dept.ScoreDept
$sql="SELECT *
  FROM Iris, Communes com,Departements dept, Regions reg 
  WHERE Iris.IdIris ='".$irisId."' AND com.Nom = Iris.IdCommune AND com.IdDept = dept.NumDept AND dept.IdRegion = reg.NumRegion";

$result = mysqli_query($con,$sql);

while($row = mysqli_fetch_assoc($result)) {
  /*echo "\"" .$row['Nom'] . "\",";
  echo "\"" .$row['ScoreGlobal'] . "\",";
  echo "\"" .$row['ScoreAccesInfo'] . "\",";
  echo "\"" .$row['ScoreAccesNum'] . "\",";
  echo "\"" .$row['ScoreUsageNum'] . "\",";
  echo "\"" .$row['ScoreCompAdmin'] . "\",";
  echo "\"" .$row['NomDept'] . "\",";
  echo "\"" .$row['ScoreDept'] . "\",";*/

  foreach($row as $key => $elem)
  {
    $return_array[$key] = $elem;
  }
}

if(!$return_array)
{
  //$return_array[
}

echo json_encode($return_array);

mysqli_close($con);
?>