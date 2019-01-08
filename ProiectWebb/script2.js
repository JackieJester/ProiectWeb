function save_user(){
    var username = document.getElementById("Id_username").value;
    var password = document.getElementById("Id_password").value;
    //var account = username + "\n" + password + "\n";
    data = {"user": username, "pass": password, "items":[]}
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert("Cont creat");
        }
    };
    xhttp.open("POST", "../request.php?type=create", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
}



function create_account(){
    document.getElementById("account").style.display = "block";
}

function delete_account() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            alert("Cont sters");
        }
    };
    xhttp.open("DELETE", "../request.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function view_account() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            let textJSON = JSON.parse(this.responseText);
            alert(JSON.stringify(textJSON.items));
        }
    };
    xhttp.open("GET", "../request.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}

function hide_account(){
    document.getElementById("account").style.display = "none";
}

function countm(button) {
    var id = button.parentNode.children[2].id;
    data = {"jucarie":id};
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            //alert(this.responseText);
            alert(this.responseText);
        }
    };
    xhttp.open("PUT", "../request.php", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
    
}