function hatterszinOn(x){
    x.style.background = "lightskyblue";
}

function hatterszinOff(x){
    x.style.background = "white";
}

function beiras(){
    var name = document.getElementById("name").value;
    document.getElementById("nameOut").innerHTML = "Név:" + name;

    var address = document.getElementById("address").value;
    document.getElementById("addressOut").innerHTML = "Cím:" + address;

    var number = document.getElementById("number").value;
    document.getElementById("numberOut").innerHTML = "Telefon:" + number;
}


