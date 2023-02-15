const button=document.querySelector("button");


button.addEventListener("click",()=>{
    if(navigator.geolocation){
        button.innerText="Allow to detect location."

        navigator.geolocation.getCurrentPosition(onSuccess,onError);
    }
    else{
        button.innerText="Browser does not support"
    }
})

function onSuccess(position){
    button.innerText="Detecting your location....."
    let {latitude,longitude}=position.coords;
     
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=57cbcf4955ee4ceebe5dbd5590a9876a`)
    .then(res=>res.json()).then(result=>{
        let allDetails=result.results[0].components;
        let {county,postcode,country}=allDetails;
        button.innerText=`${county} ${postcode},${country}`
    })
}
function onError(error){
    if(error.code==1){
        button.innerText="You denied the request."
    }
    else if(error.code==2){
        button.innerText="Location not available"
    }
    else{
        button.innerText="Something went wrong"
    }
    button.setAttribute("disabled","true")
}