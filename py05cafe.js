// instalogo animation and rightside navbar //

var instalogo=document.querySelector(".instalogo i");
var orderbox=document.querySelector(".btn")
var phone=document.querySelector(".fa-phone")

instalogo.addEventListener("mouseover",function(){
    instalogo.style.textShadow = "0 0 10px violet,0 0 20px violet"
    instalogo.style.transform = "scale(1.3)"
});

instalogo.addEventListener("mouseleave",function(){
    instalogo.style.textShadow = "none"
    instalogo.style.transform = "scale(1)"
    
});

phone.addEventListener("mouseover",function(){
    phone.style.color="gold";
    phone.style.transform = "scale(1.3)";
    phone.style.textShadow = "0 0 20px orange";
})
phone.addEventListener("mouseleave",function(){
    phone.style.color="white";
    phone.style.transform = "scale(1)";
    phone.style.textShadow = "none";
})

orderbox.addEventListener("mouseover",function(){
    orderbox.style.transform = "scale(1.3)";
    orderbox.style.boxShadow = "0 0 20px orange";
});

orderbox.addEventListener("mouseleave",function(){
     orderbox.style.transform = "scale(1)";
    orderbox.style.boxShadow = "none";
});

// instalogo animation and rightside navbar //

//------------------------------------------------------//

// navbar lists animation //

var home=document.querySelector(".lih")
var about=document.querySelector(".lia")
var menu=document.querySelector(".lim")
var contact=document.querySelector(".lic")

home.addEventListener("mouseover",function(){
    home.style.color="gold"
    home.style.transition="0.3s"
    home.style.transform="scale(1.3)"
    home.style.textShadow="0 0 10px yellow"
})
home.addEventListener("mouseleave",function(){
    home.style.color="white"
    home.style.textShadow="none"
    home.style.transform="scale(1)"
    
})

about.addEventListener("mouseover",function(){
    about.style.color="gold"
    about.style.transition="0.3s"
    about.style.transform="scale(1.3)"
    about.style.textShadow="0 0 10px yellow"
})
about.addEventListener("mouseleave",function(){
    about.style.color="white"
    about.style.textShadow="none"
    about.style.transform="scale(1)"
    
})

menu.addEventListener("mouseover",function(){
    menu.style.color="gold"
    menu.style.transition="0.3s"
    menu.style.transform="scale(1.3)"
    menu.style.textShadow="0 0 10px yellow"
})
menu.addEventListener("mouseleave",function(){
    menu.style.color="white"
    menu.style.textShadow="none"
    menu.style.transform="scale(1)"
    
})

contact.addEventListener("mouseover",function(){
    contact.style.color="gold"
    contact.style.transition="0.3s"
    contact.style.transform="scale(1.3)"
    contact.style.textShadow="0 0 10px yellow"
})
contact.addEventListener("mouseleave",function(){
    contact.style.color="white"
    contact.style.textShadow="none"
    contact.style.transform="scale(1)"
    
})

// navbar lists animation //

//------------------------------------------------------//

//hero section

var menubtn=document.querySelector(".menu-btn")

menubtn.addEventListener("mouseover",function(){
    menubtn.style.color="black"
    menubtn.style.backgroundColor="beige"
    menubtn.style.transform = "scale(1.5)";
    menubtn.style.boxShadow = "0 0 20px orange";
});

menubtn.addEventListener("mouseleave",function(){
    menubtn.style.color="white"
    menubtn.style.backgroundColor="gray"
    menubtn.style.transform = "scale(1.2)";
    menubtn.style.boxShadow = "none";
});

//left side photos//

var colors=["#6F4E37",
"#D2691E",
"#F4A261",
"#A0522D",
"#FFD166",
"#E76F51",
"#8D6E63"]

var topcard = document.querySelector(".top-card")
console.log(topcard)
var bottomcard = document.querySelector(".bottom-card")
console.log(bottomcard)
function randomc(){
    randomcolor=Math.floor(Math.random()*colors.length)
    return colors[randomcolor]
}

setInterval(function(){
    topcard.style.backgroundColor=randomc()
    bottomcard.style.backgroundColor=randomc()
},2000)