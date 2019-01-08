<?php
$text = file_get_contents('php://input');
$request = $_SERVER['REQUEST_METHOD'];

$type = null;
if(isset($_GET["type"]))
    $type = $_GET["type"];


switch($request) {
    case 'GET':
        {
            //echo 'GET';
            $conturi = file_get_contents("conturi.json");
            echo $conturi;
            break;
        }
    case 'POST':
        {
            //echo 'POST';
            if($type == "create")
                file_put_contents("conturi.json", $text);
            

                
            break;
        }
    case 'PUT' :
        {
            //echo $text;
            $conturi = file_get_contents("conturi.json");
            $conturiJSON = json_decode($conturi);
            //echo json_encode($conturiJSON->items);
            echo $text;
            array_push($conturiJSON->items, json_decode($text));
            file_put_contents("conturi.json", json_encode($conturiJSON));
            


            break;
        }
    case 'DELETE' :
        {
            //echo 'DELETE';
            unlink("conturi.json");
            
            break;

        }
    default:
}