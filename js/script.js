// handle any elements depind on class active
function handleActive(event) {
    //remove class active from all colors
   event.target.parentElement.querySelectorAll(".active").forEach(ele =>{
       ele.classList.remove("active")
   });
   //add class active on the clicked color
   event.target.classList.add("active");
}
/* Start setting box*/
//show setting box 
let settingBox = document.querySelector(".setting-box");
let iconContainer = document.querySelector(".toggle");
let settingIcon = document.querySelector(".toggle .icon");
let overlay = document.querySelector(".overlay");
//let settingOverlay = document.querySelector(".setting");
// Show setting Box
iconContainer.addEventListener('click',function(){
    settingBox.classList.toggle("open");
    overlay.classList.toggle("setting");            
    settingIcon.classList.toggle("fa-spin");
    iconContainerNav.style.display = "none"
});
//switch colors
let colorsLi = document.querySelectorAll(".setting-box .setting-content .color-list span");
colorsLi.forEach(li =>{
    li.addEventListener("click",e =>{
        document.documentElement.style.setProperty('--primary-color' , e.target.dataset.color)
        localStorage.setItem("colors-option",e.target.dataset.color);
        handleActive(e);
    });
});
//store colors in local storage
let colorStorage = localStorage.getItem("colors-option");
if(colorStorage!==null) {
    document.documentElement.style.setProperty('--primary-color' ,colorStorage )
    colorsLi.forEach(ele => {
        ele.classList.remove("active");
        if(ele.dataset.color === colorStorage){
            ele.classList.add("active");
        }
    });
}
// close icon actions
let closeBtn = document.querySelector(".setting-box .close-icon");
closeBtn.addEventListener('click',function(){
    settingBox.classList.toggle("open");
    overlay.classList.remove("setting");
    settingIcon.classList.remove("fa-spin");
    iconContainerNav.style.display = "flex";
});
// when click on overlay
overlay.addEventListener('click',function(){
    settingBox.classList.remove("open");
    overlay.classList.remove("setting");
    settingIcon.classList.remove("fa-spin");
    iconContainerNav.style.display = "flex";
});
/* End setting box*/

/* Start alt-nav*/
let altNav = document.querySelector(".alt-nav");
let iconContainerNav = document.querySelector(".alt-nav .toggle-nav");
let settingIconNav = document.querySelector(".alt-nav .toggle-nav .nav-icon");
// Show alt-nav
iconContainerNav.addEventListener('click',function(){
    altNav.classList.toggle("open");
    overlay.classList.toggle("setting-nav");
    iconContainerNav.style.display = "none"
});
// close icon actions
let closeBtnNav = document.querySelector(".alt-nav .close-icon");
closeBtnNav.addEventListener('click',function(){
    altNav.classList.remove("open");
    overlay.classList.remove("setting-nav");
    iconContainerNav.style.display = "none";
});
// when click on overlay
overlay.onclick = function() {
    altNav.classList.remove("open");
    overlay.classList.remove("setting-nav");
    iconContainerNav.style.display = "flex"
}
//when click on section Link
let sectionLinks = document.querySelectorAll(".alt-nav .sections-container li a");
sectionLinks.forEach(function (link) {
    link.onclick = function() {
        console.log("a")
        altNav.classList.remove("open");
        overlay.classList.remove("setting-nav");
        iconContainerNav.style.display = "flex"
    }
})
/* End alt-nav*/

/* Start popup */
let popup = document.querySelector(".popup");
let popupCaption = document.querySelector(".popup .popup-content .caption");
let popupOverlay = document.querySelector(".popup .overlay");
let portfolios = document.querySelectorAll(".portfolios .port");
let carousalItems = document.querySelectorAll(".popup .carousel-item");
let counter = 1
let nextContent = document.querySelector(".popup .popup-content .carousel-control-next")
let prevContent = document.querySelector(".popup .popup-content .carousel-control-prev")
let nextIcon = document.querySelector(".popup .popup-content .carousel-control-next-icon")
let prevIcon = document.querySelector(".popup .popup-content .carousel-control-prev-icon")
let popupClose = document.querySelector(".popup .close-btn")

// show popup when click on any portfolio
portfolios.forEach(function(port) {         //loop in ports
    port.onclick = function(e) {            //when click on any port
        carousalItems.forEach(function(item) { //loop in carousal items to show the img in port top carousal
            item.classList.remove("active");    //remove all class active
            if(item.dataset.number === e.target.parentElement.dataset.number) { //check if the same number of attr data-number
                item.classList.add("active")         // add calss active to the right carousal item
            }
        })
        //set caption to items
        counter =e.target.parentElement.dataset.number
        popup.style.display = 'block'; // show popup finally 
    }
});
// click on over lay to close popup
popupOverlay.onclick = function(){
    popup.style.display = "none"
}
popupClose.onclick = function(){
    
    popup.style.display = "none"
}
/* End popup */
/* Start testimonials */
let slides = document.querySelectorAll(".testimonials .sliders .carousel-item");
let nextBtn = document.querySelector(".testimonials .sliders .carousel-control-next");
let prevBtn = document.querySelector(".testimonials .sliders .carousel-control-prev");
let varNumber = document.querySelector(".testimonials .carousel .carousel-item.active");
let testiSpan = document.querySelector(".testimonials .slide-num span");
//testiSpan.innerHTML = "1"
//when click on next button
/*
slides.forEach ((slide)=> {
    slide.classList.forEach((calss)=> {
        if(calss === "active") {
            testiSpan.innerHTML = slide.dataset.number
        }
    });
});
nextBtn.addEventListener('click' ,function (e) {
    slides.forEach ((slide)=> {
        slide.classList.forEach((calss)=> {
            if(calss === "active") {
                testiSpan.innerHTML = slide.dataset.number
            }
        });
    });
});*/

//when click on prev button
//prevBtn.addEventListener('click' ,function (e) {
//    slides.forEach ((slide)=> {
//        slide.classList.forEach((calss)=> {
//            if(calss === "active") {
//                testiSpan.innerHTML = slide.dataset.number
//            }
//        });
//    });
//});
/* End testimonials */
/* Start Animated element */
/*
let mainContainer = document.querySelectorAll(".page-content section")
let home = document.querySelector(".intro");
let about = document.querySelector(".about");
let resume = document.querySelector(".resume");
let services = document.querySelector(".services");
let skills = document.querySelector(".skills");
let portfolio = document.querySelector(".portfolios");
let testimonails = document.querySelector(".testimonails");
let contact = document.querySelector(".contact");

function animation (element , animationType) {
    let elementOffsetTop = element.offsetTop;
    console.log(elementOffsetTop);
    let elementOffsetHeight = element.offsetHeight;
    console.log(elementOffsetHeight);
    let windowHeight = window.innerHeight
    console.log(windowHeight);
    let windowScrollTop = window.pageYOffset
    console.log(windowScrollTop)
    if((windowScrollTop + 2 > (elementOffsetTop + elementOffsetHeight - windowHeight))) {
        console.log("anas")
        element.classList.add("animate__animated");
        element.classList.add(animationType);
    }
    else {
        element.classList.remove("animate__animated");
        element.classList.remove(animationType);
    }
}
function animationY (element) {
    let elementOffsetTop = element.offsetTop;
    let elementOffsetHeight = element.offsetHeight;
    let windowHeight = window.innerHeight;
    let windowScrollTop = window.pageYOffset;
    if((windowScrollTop > (elementOffsetTop + elementOffsetHeight - windowHeight))) {
        element.style.top = 0
    }
    else {
        element.style.top = "200px"
    }
}

/*
mainContainer.forEach((sec)=> {
    if(sec.classList[0] !== "intro") {
        window.addEventListener('scroll' , function() {
            animation(sec , "animate__fadeInUp");
        });
    }
})
/*
mainContainer.forEach((sec)=> {
    if(sec.classList[0] !== "intro") {
        window.addEventListener('scroll' , function() {
            animationY(sec);
        });
    }
    else {
        window.addEventListener('scroll' , function() {
            animationY(sec);
        });
    }
});*/

/* End Animated element */