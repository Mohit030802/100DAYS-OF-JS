const tabsBox=document.querySelector(".tabs-box"),
tabb=document.querySelectorAll(".tab"),
arrowIcons=document.querySelectorAll(".icon i");


let isdrag=false;
const handleIcon=()=>{
    let scollVal=Math.round(tabsBox.scrollLeft);
    let maxwidthscroll=tabsBox.scrollWidth-tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display=scollVal>0? "flex":"none";
    arrowIcons[1].parentElement.style.display=maxwidthscroll> scollVal ? "flex":"none";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click",()=>{
        tabsBox.scrollLeft+=icon.id==="left" ? -350:350;
       setTimeout(()=>handleIcon(),50)
    });
});
tabb.forEach(tab => {
    tab.addEventListener("click",()=>{
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});
const dragging=(e)=>{
if(!isdrag) return;
tabsBox.classList.add("dragging")
tabsBox.scrollLeft-=e.movementX;
handleIcon();
}
const dragStop=()=>{
    isdrag=false
    tabsBox.classList.add("dragging")
}
tabsBox.addEventListener("mousedown",()=>isdrag=true);
tabsBox.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragStop);