// N1
const timeSpan = document.querySelector(".time"); 
function clock(){
    let currenDate = new Date();
    let hh = currenDate.getHours();
    let mm = currenDate.getMinutes();
    let ss = currenDate.getSeconds();
    var myCLock = hh + ":" + mm + ":" + ss;
    timeSpan.textContent = myCLock ;
}
setInterval(clock,1000);

// N2

// function mainSlider() {
//     const slides = document.querySelectorAll(".slide");
//     const next = document.querySelector(".next");
//     const prev = document.querySelector(".prev");
//     const slider = document.querySelector(".slider");
//     const bullets = document.querySelectorAll(".bullet");
//     let setIntervalId = null;

//     let activeIndex = 0;

//     function renderSlides() {
//         slides.forEach((el, i) => {
//             if (i === activeIndex) {
//                 el.classList.add("active");
//             } else {
//                 el.classList.remove("active");
//             }
//         });   
//     }

//     function nextFn(direction) {
//         if(direction === "right"){
//             if (activeIndex === slides.length - 1) {
//                 activeIndex = 0;
//         } else {
//             activeIndex++;
//         }
//     } else if (direction === "left"){
//         if(activeIndex === 0){
//             activeIndex = slides.length - 1;
//         } else {
//             activeIndex--;
//         }
//     }
//         renderSlides();
//     }

//     bullets.forEach((el, i) => {
//         el.addEventListener("click", () => {
//             activeIndex = i;
//             renderSlides();
//             bullets.forEach((el) => {
//                 el.classList.remove("bullet-active");
//             });
//             el.classList.add("bullet-active");
//         });
//         if (i === activeIndex) {
//             el.classList.add("bullet-active");
//         } else {
//             el.classList.remove("bullet-active");
//         }
//                 if (activeIndex === 0) {
//             slides[0].classList.add("active");
//         }  
//     });

   
// // ************autoSlider**********************

// // function nextFun() {
// //     if (activeIndex === slides.length - 1) {
// //         activeIndex = 0;
// //     } else {
// //         activeIndex++;
// //     }

// //     renderSlides();
// // }


// //     function startInterval() {
// //         slideIntervalId = setInterval(nextFun, 1000);
// //     }

// //     function stopInterval() {
// //         clearInterval(slideIntervalId);
// //     }
// // startInterval();
// //     slider.addEventListener("mouseenter", stopInterval);
// //     slider.addEventListener("mouseleave", startInterval);


//     renderSlides();
//     bullets();
// }

// mainSlider();
    




let countDownDate = new Date("Apr 28 , 2023 20:00:00");
let today = new Date();
let difference = countDownDate - today;
let day = countDownDate.getDay() - today.getDay();


console.log(minute);