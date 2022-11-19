<?php
$servidor= "localhost";
$basedatos= "paqueteria";
$usuario="root";
$password="";

$con = mysqli_connect($servidor,$usuario,$password,$basedatos) or die("No se pudo conectar a localhost");
$consulta = "select * from sucursal";
$registros = mysqli_query($con,$consulta) or die("Problemas en el select");

$result = mysqli_fetch_all($registros);

mysqli_close($con);
echo json_encode($result);

?>