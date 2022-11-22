<?php 

include 'conn.php';

$id = $_POST['idEnvio'];
$errMsg = "NoData";
$query = "SELECT * FROM sucursal WHERE ID = $id";

$res = mysqli_query($conn,$query);
if ($res-> num_rows > 0) {
    echo json_encode(mysqli_fetch_all($res));
}

?>