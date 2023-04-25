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

function mainSlider() {
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const slider = document.querySelector(".slider");
    const bullets = document.querySelectorAll(".bullet");
    let setIntervalId = null;

    let activeIndex = 0;

    function renderSlides() {
        slides.forEach((el, i) => {
            if (i === activeIndex) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        });   
    }

    function nextFn(direction) {
        if(direction === "right"){
            if (activeIndex === slides.length - 1) {
                activeIndex = 0;
        } else {
            activeIndex++;
        }
    } else if (direction === "left"){
        if(activeIndex === 0){
            activeIndex = slides.length - 1;
        } else {
            activeIndex--;
        }
    }
        renderSlides();
    }

    bullets.forEach((el, i) => {
        el.addEventListener("click", () => {
            activeIndex = i;
            renderSlides();
            bullets.forEach((el) => {
                el.classList.remove("bullet-active");
            });
            el.classList.add("bullet-active");
        });
        if (i === activeIndex) {
            el.classList.add("bullet-active");
        } else {
            el.classList.remove("bullet-active");
        }
                if (activeIndex === 0) {
            slides[0].classList.add("active");
        }  
    });

   
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


    renderSlides();
    bullets();
}

mainSlider();
    


function countDownTime(){
const myParagraph = document.querySelector(".coundown");
let countDownDate = new Date("Apr 28 , 2023 20:00:00").getTime();
let today = new Date().getTime();
let difference = countDownDate - today;
const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

const targetDay = Math.floor(difference / day);
const hours = Math.floor((difference % day) / hour);
const minutes = Math.floor((difference % hour) / minute);
const seconds = Math.floor((difference % minute) / second);
myParagraph.innerHTML = `Next Meet Starts In : ${targetDay} days, ${hours} hours,${minutes} minutes, ${seconds} seconds`;

}
setInterval(countDownTime,1000);

