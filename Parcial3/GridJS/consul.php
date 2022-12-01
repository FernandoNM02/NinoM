<?php 
include('./conn.php');
$getQuery = "SELECT * FROM sucursal";

$res = mysqli_query($conn,$getQuery);
if ($res-> num_rows > 0) {
    echo json_encode(mysqli_fetch_all($res));
}

?>