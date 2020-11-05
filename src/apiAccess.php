<?php
$cityName = $_POST['cityName'];

$con = mysqli_connect('localhost','admin','admin','BaseIndicateurs');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

//mysqli_select_db($con,"ajax_demo");

$sql="SELECT com.Nom, dept.NomDept, dept.ScoreDept
  FROM Communes com,Departements dept 
  WHERE com.Nom = '".$cityName."' AND com.IdDept = dept.NumDept";

$result = mysqli_query($con,$sql);

//echo $result;
echo "[";
while($row = mysqli_fetch_array($result)) {
  echo "\"" .$row['Nom'] . "\",";
  echo "\"" .$row['ScoreGlobal'] . "\",";
  echo "\"" .$row['ScoreAccesInfo'] . "\",";
  echo "\"" .$row['ScoreAccesNum'] . "\",";
  echo "\"" .$row['ScoreUsageNum'] . "\",";
  echo "\"" .$row['ScoreCompAdmin'] . "\",";
  echo "\"" .$row['NomDept'] . "\",";
  echo "\"" .$row['ScoreDept'] . "\",";
  /*foreach($row as $key => $elem)
  {
    echo $elem.",";
  }*/
}

/*foreach($result as $elem)
  {
    echo $elem.",";
  }*/
echo "]";

mysqli_close($con);
?>