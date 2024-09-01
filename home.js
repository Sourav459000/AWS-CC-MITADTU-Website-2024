
//View and Hide team members - Our Team section

function viewMembers(id) {
    let idElement = document.getElementById(id);
    idElement.getElementsByClassName('hide-team-members')[0].setAttribute("style", "display: block;");
    idElement.getElementsByClassName('view-members-btn')[0].setAttribute("style", "display: none;");
}

function hideMembers(id) {
    let idElement = document.getElementById(id);
    idElement.getElementsByClassName('hide-team-members')[0].setAttribute("style", "display: none;");
    idElement.getElementsByClassName('view-members-btn')[0].setAttribute("style", "display: flex;");
}


// Navbar responsive dropdown 

let isDropdownOpen;
function responsiveNavbar() {
    if(!isDropdownOpen) {
        document.getElementsByClassName('dropdown-menu')[0].setAttribute("style", "display: block;");
        isDropdownOpen = true;
    }
    else {
        document.getElementsByClassName('dropdown-menu')[0].setAttribute("style", "display: none;");
        isDropdownOpen = false;
    }
}

document.addEventListener('click', function handleClickOutsideBox(event) {
    const dropdownBtn = document.getElementById('dropdown-btn');

    if(isDropdownOpen && dropdownBtn!=event.target) {
        document.getElementsByClassName('dropdown-menu')[0].setAttribute("style", "display: none;");
        isDropdownOpen = false;
    }
});


// Events' Carousel

// let activeEvent = 0;
// carousel(activeEvent);

// function prevEvent() {
//     activeEvent--;
//     carousel(activeEvent);
// }

// function nextEvent() {
//     activeEvent++;
//     carousel(activeEvent);
// }

// function carousel(event) {
//     let events = document.getElementsByClassName('event-card');
    
//     for(let i=0; i<events.length; i++) {
//         events[i].setAttribute("style", "display: none;");
//     }

//     if(event < 0) {
//         event = (event % events.length) + events.length;
//     }
//     if(event >= events.length) {
//         event %= events.length;
//     }
//     events[event].setAttribute("style", "display: flex;");
// }

// let eventSection = document.getElementById('events');
// const observer = new IntersectionObserver(entries => {
//     if(entries[0].intersectionRatio > 0) {
//         document.addEventListener('keydown', function carouselSlider(event) {
//             const key = event.key;
//             if(key == 'ArrowLeft') {
//                 prevEvent();
//             }
//             else if(key == 'ArrowRight') {
//                 nextEvent();
//             }
//         });
//     }
// });
// observer.observe(eventSection);


// Events' Slider Buttons
let currentEvent = 0;
let eventCards = document.getElementsByClassName('event-card');
eventCards[currentEvent].setAttribute("style", "display: flex;");

let carouselCircleBtns = document.getElementsByClassName('circle-btn');
carouselCircleBtns[currentEvent].classList += " active-btn";

function eventSlider(eventNo) {
    currentEvent = eventNo;
    
    for(let i=0; i<eventCards.length; i++) {
        if(currentEvent < 0) {
            currentEvent = (currentEvent % eventCards.length) + eventCards.length;
        }
        if(currentEvent >= eventCards.length) {
            currentEvent %= eventCards.length;
        }
    
        if(currentEvent == i) {
            eventCards[i].setAttribute("style", "display: flex;");
            carouselCircleBtns[i].classList += " active-btn";
        }
        else {
            eventCards[i].setAttribute("style", "display: none;");
            carouselCircleBtns[i].classList = "circle-btn";
        }
    }
}

setInterval(() => {
    eventSlider(currentEvent);
    currentEvent++;
}, 4000);

let eventSection = document.getElementById('events');
const observer = new IntersectionObserver(entries => {
    if(entries[0].intersectionRatio > 0) {
        document.addEventListener('keydown', function carouselSlider(event) {
            const key = event.key;
            if(key == 'ArrowLeft') {
                currentEvent--;
                eventSlider(currentEvent);
            }
            else if(key == 'ArrowRight') {
                currentEvent++;
                eventSlider(currentEvent);
            }
        });
    }
});
observer.observe(eventSection);

let startingX, startingY, endingX, endingY;
let moving = false;
function touchstart(evt) {
    startingX = evt.touches[0].clientX;
    startingY = evt.touches[0].clientY;
}
function touchmove(evt) {
    moving = true;
    endingX = evt.touches[0].clientX;
    endingY = evt.touches[0].clientY;
}
function touchend() {
    if (!moving) return;
    let touchDirection;
    if ( Math.abs(endingX - startingX) > Math.abs(endingY - startingY) ) {
        if ( endingX > startingX ) touchDirection = "ArrowLeft";
        else touchDirection = "ArrowRight";
    } 
    // else {
    //     if ( endingY > startingY ) touchDirection = "ArrowDown";
    //     else touchDirection = "ArrowUp";
    // }
    handleTouchInteraction(touchDirection);
    moving = false;
}

function handleTouchInteraction(touchDirection) {
    if(touchDirection == "ArrowRight") {
        currentEvent++;
        eventSlider(currentEvent);
    }
    
    if(touchDirection == "ArrowLeft") {
        currentEvent--;
        eventSlider(currentEvent);
    }
}

// Club name Animation

const div = document.querySelector(".club-name-heading");
const text = "AWS Cloud Club - MIT ADTU";

function textTypewriterEffect(htmlElement, text) {
    let i = 1;
    let order = "asc";
    setInterval(() => {
        htmlElement.innerHTML = text.substring(0, i);
        i = getValOfI(i, order);
        if(i==0) {
            i += 2;
            order = "asc";
        }
        if(i==text.length+1) {
            i -= 2;
            order = "desc";
        }
    }, 200);
}

function getValOfI(i, order) {
    if(order=="asc") {
        i++;
    }
    else {
        i--;
    }
    return i;
}

textTypewriterEffect(div,text);


// Feedback

let isFeedbackDescOpen = false;
const feedback = document.querySelector(".feedback-desc");

document.addEventListener("mouseover", (event) => {
    if(!isFeedbackDescOpen && event.target == document.querySelector(".feedback a")) {
        feedback.setAttribute("style", "display: flex;");
        isFeedbackDescOpen = true;
    }
    else {
        feedback.setAttribute("style", "display: none;");
        isFeedbackDescOpen = false;
    }
});

