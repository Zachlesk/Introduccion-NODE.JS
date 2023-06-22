<?php

/* EJEMPLO 1: PASSWORD HASH */

$contraseña = "123";

$hash = password_hash($contraseña, PASSWORD_DEFAULT);

$ingreso = "123";

if (password_verify($ingreso, $hash)) {
    echo "<br>";
    echo "Contraseña correcta";

} else {
    echo "Contraseña incorrecta";
}

/* EJEMPLO 2: JSON_ENCODE */

$datos = array(
    'nombre' => 'Zach',
    'apellido' => 'Lesk',
    'edad' => '18',
);

var_dump($datos);

$datosA = json_encode($datos);

var_dump($datosA);


/*  EJEMPLO 3: JSON_DECODE    */


$daticos = '[
{
    "nombres": "Zharick";
    "edad": 18,
    "telefono": 3107534094

},
{

    "nombres": "Daniel";
    "edad": 19,
    "telefono": 3045621921
}
]';

var_dump($daticos);

$datosB = json_encode($daticos);

var_dump($datosB);


/* EJEMPLO 4: $_COOKIE */

setcookie("demostracionCookie1", "What's up");
setcookie("demostracionCookie2", "I'm another way", time() + 3600);
setcookie("demostracionCookie3", "Expirando", strtotime("2023-06-21")); 

echo "Mi primera cookie es: " . $_COOKIE['demostracionCookie1'];
echo "Mi segunda cookie es: " . $_COOKIE['demostracionCookie2'];
echo "Mi tercera cookie es: " . $_COOKIE['demostracionCookie3'];

/* EJEMPLO 5: $_SESSION */

session_start();

$_SESSION["user"] = "Zachlesk";
$_SESSION["password"] = 1997;

$user = "Zachlesk";
$pass = 1997;
echo "El usuario es: {$_SESSION['user']} La contraseña es: {$_SESSION['password']}<br>";
echo "En otra situación, el usuario es: {$user}, ahora la contraseña es: {$pass}";

/* EJEMPLO 6: sanitizacion */

$script = "<script> alert('Script malicioso'); </script>"

$ejemplo_sanatizacion = filter_var($script, FILTER_SANITIZE_STRING);

/* EJEMPLO 7: $_SERVER */

$URL = $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
$NAME = $_SERVER["SCRIPT_NAME"];
$PORT = $_SERVER["SERVER_PORT"];
$PROTOCOL = $_SERVER["SERVER_PROTOCOL"];

echo "HOST - {$URL}<br>NAME - {$NAME}<br> PORT - {$PORT}<br> PROTOCOL - {$PROTOCOL}"

/* EJEMPLO 8: String Functions */

$dato = "Hello world!";
echo "Ejemplo de strlen: " . strlen($dato) . "<br>";

$dato2 = "Ejemplo uso de strpos()";
echo "Ejemplo de strpos: " . strpos($dato2, "uso") . "<br>";

$dato3 = "Me especializo en BackEnd";
echo "{$dato3} <br>";
echo "Ejemplo de str_replace(): " . str_replace("BackEnd", "FullStack", $dato3) . "<br>";

$dato4 = "Ejemplo uso de StrToLower()";
echo "{$dato4} <br>";
echo "Ejemplo de strtolower(): " . strtolower($dato4) . "<br>";

$dato5 = "Ejemplo uso de StrToUpper()";
echo "Ejemplo de strtoupper(): " . strtoupper($dato5) . "<br>";

$dato6 = "Ejemplo uso de substr()";
echo "Ejemplo de substr(): " . substr($dato6, 6) . "<br>";

/* EJEMPLO 9: array_filter */

$campers = [
    ["nombre"=> "Zharick", "edad"=>18],
    ["nombre"=> "Camilo", "edad"=>30],
    ["nombre"=> "Edwing", "edad"=>19],
    ["nombre"=> "Sergio", "edad"=>26],
    ["nombre"=> "Brayan", "edad"=>20],
    ["nombre"=> "Samuel", "edad"=>23]
];

$campers_edad = array_filter($campers,function($campers){
    return $campers["edad"] < 18;
});

print_r($campers_edad);

/* EJEMPLO 10 : include, require, include_once, require_once, */

include("ejemplo.php");
require("ejemplo.php");
include_once("ejemplo.php");
require_once("ejemplo.php");
