const display=document.getElementById("display");
const result=document.getElementById("results");
function appendtodisplay(x){
    display.value+=x;
}
function calculate(){
    try{
        result.innerHTML=eval(display.value);
    }
    catch{
        result.innerHTML="ERROR";
    }
}
function cleartodisplay(){
    result.innerHTML=0;
    display.value="";
}
function deletefunc(){
    display.value=display.value.slice(0,-1);
}