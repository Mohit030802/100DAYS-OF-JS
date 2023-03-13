const cookieBox=document.querySelector(".wrapper"),
acceptBtn=cookieBox.querySelector(".buttons button");

acceptBtn.onclick=()=>{
   document.cookie="CookieBy=Mohit Kumar Dubey; max-age="+60*60*24*30;
   if(document.cookie){
        cookieBox.classList.add("hide");
   }
   else{
    alert("Cookies can't be set!!")
   }
}
let checkCookie=document.cookie.indexOf("CookieBy=Mohit Kumar Dubey");
checkCookie!=1 ? cookieBox.classList.add("hide"):cookieBox.classList.remove("hide");
