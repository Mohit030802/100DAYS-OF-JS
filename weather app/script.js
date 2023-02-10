const wrapper=document.querySelector(".wrapper"),
inputPart=wrapper.querySelector(".input-part"),
infoText=inputPart.querySelector("info-txt"),
inputField=inputPart.querySelector("inputs");

inputField.addEventListener("keyup",e=>{
    if(e.key=="Enter" && inputField!=""){
        requestApi=(inputField.value);
    }
});

function requestApi(city){
    console.log(city)
}