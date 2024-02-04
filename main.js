let ms=document.querySelectorAll("a.lg");
let clk=document.querySelector("div.icon");
let smenu=document.querySelector("div.submenu-sm")
let x=ms.forEach(elem => {
elem.addEventListener("mouseenter",function(e){
    e.target.nextElementSibling.style.display="block"
})
elem.addEventListener("mouseleave",function(e){
    e.target.nextElementSibling.style.display="none"
})
});

clk.addEventListener("click",function(e){
    if (smenu.style.display === "block") {
    smenu.style.display = "none";
  } else {
    smenu.style.display = "block";
  }
    
})
