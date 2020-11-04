<?php
$param = intval($_GET['userParam']);

$con = mysqli_connect('localhost','admin','admin','BaseIndicateurs');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

//mysqli_select_db($con,"ajax_demo");

$sql="SELECT * FROM Communes"; //"WHERE id = '".$param."'";
$result = mysqli_query($con,$sql);

echo "[";
while($row = mysqli_fetch_array($result)) {
  echo "\"" .$row['Nom'] . "\",";
}
echo "]";

mysqli_close($con);
?>