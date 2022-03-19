// burgerMenu

let burgerBtn = document.querySelector(".burgerBTN")
let burgerMenu = document.querySelector(".header__menu")

burgerBtn.addEventListener("click", function (){
    burgerBtn.classList.toggle("active")
    burgerMenu.classList.toggle("active")
})


console.log(456)


// attraction, change attraction__mainSub



let $attractionMainSub = document.querySelectorAll(".attraction__mainSub")
let $attractionCount = document.querySelectorAll(".attraction__count div")

for (let i=0; i<$attractionMainSub.length; i++){
    $attractionCount[i].addEventListener("click", function (){
        $attractionCount.forEach(a=>a.classList.remove("active"));
        $attractionCount[i].classList.add("active");
        $attractionMainSub.forEach(a=>a.classList.remove("active"));
        $attractionMainSub[i].classList.add("active");
    })
}




// choose direction



let $direction = document.querySelectorAll(".direction__types li");
let $directionItem = document.querySelectorAll(".direction__item")

$(document).ready(

$direction.forEach(a=>a.addEventListener("click", function (){
    if (a.classList.contains("sea")){
        if (!a.classList.contains("disable")){
            a.classList.add("disable")
            $directionItem.forEach(a=>{
                if (a.classList.contains("sea")){
                    a.classList.add("disable");
                    setTimeout(function (){
                        a.style.display="none"
                    }, 300)
                }
            })
        }
        else if (a.classList.contains("disable")){
            a.classList.remove("disable")
            $directionItem.forEach(a=>{
                if (a.classList.contains("sea")){
                    a.classList.remove("disable");
                    a.style.display="unset"
                }
            })
        }
    }


    else if (a.classList.contains("mountain")){
        if (!a.classList.contains("disable")){
            a.classList.add("disable")
            $directionItem.forEach(a=>{
                if (a.classList.contains("mountain")){
                    a.classList.add("disable")
                    setTimeout(function (){
                        a.style.display="none"
                    }, 300)

                }
            })
        }
        else if (a.classList.contains("disable")){
            a.classList.remove("disable")
            $directionItem.forEach(a=>{
                if (a.classList.contains("mountain")){
                    a.classList.remove("disable")
                    a.style.display="unset"
                }
            })
        }
    }


    else if (a.classList.contains("extremal")){
        if (!a.classList.contains("disable")){
            a.classList.add("disable")
            $directionItem.forEach(a=>{
                if (a.classList.contains("extremal")){
                    a.classList.add("disable")
                    setTimeout(function (){
                        a.style.display="none"
                    }, 300)
                }
            })
        }
        else if (a.classList.contains("disable")){
            a.classList.remove("disable")
            $directionItem.forEach(a=>{
                if (a.classList.contains("extremal")){
                    a.classList.remove("disable")
                    a.style.display="unset"
                }
            })
        }
    }

    else if (a.classList.contains("cognitive")){
        if (!a.classList.contains("disable")){
            a.classList.add("disable")
            $directionItem.forEach(a=>{
                if (a.classList.contains("cognitive")){
                    a.classList.add("disable")
                    setTimeout(function (){
                        a.style.display="none"
                    }, 300)
                }
            })
        }
        else if (a.classList.contains("disable")){
            a.classList.remove("disable")
            $directionItem.forEach(a=>{
                if (a.classList.contains("cognitive")){
                    a.classList.remove("disable")
                    a.style.display="unset"
                }
            })
        }
    }
}))

)



// slider


window.addEventListener("resize", function (){
    if (window.innerWidth<=768){
        let swiper = new Swiper(".swiper-container", {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    else {
        let swiper = new Swiper(".swiper-container", {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
            loopFillGroupWithBlank: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
})


if (window.innerWidth<=768){
    let swiper = new Swiper(".swiper-container", {
        slidesPerView: 2,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

else {
   let swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}