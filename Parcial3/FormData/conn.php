<?php

$conn = mysqli_connect("127.0.0.1:3306", "root", "");

if (!$conn) {
    die("Connection failed" . mysqli_connect_errno());
}

$dbCreate = "CREATE DATABASE IF NOT EXISTS paqueteria";
mysqli_query($conn, $dbCreate);

mysqli_close($conn);
$conn = mysqli_connect("127.0.0.1:3306", "root", "","paqueteria");

    $query = "CREATE TABLE IF NOT EXISTS sucursal(
        ID int(11) NOT NULL,
        Name varchar(255) NOT NULL,
        direccion varchar(50),
        telefono varchar(20)
    )";

    mysqli_query($conn, $query);

    
?>