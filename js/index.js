var calDisplay = "";

function btnClick(btnValue) {

    if(btnValue == "AC"){
        calDisplay = "";
    } else{
        calDisplay += btnValue;
    }
    
    document.getElementById("display").value = calDisplay;

}