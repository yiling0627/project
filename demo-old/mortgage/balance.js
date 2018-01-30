var i = true;
function balance(){
    if(i){
       document.getElementById("balance-1").style.display = "block";
       i = false;
    }else{
       document.getElementById("balance-1").style.display = "none";
       i = true;
    }
}