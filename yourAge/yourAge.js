const getClickMenu = document.querySelector('.clickCheck');
const toggleMenuBar = document.querySelector('.menuBox');
let clickCount = 0;

getClickMenu.addEventListener('click', () => {
    toggleMenuBar.classList.toggle('clickJSEvent');
});


const getUserAge = document.querySelector('#userAgeInput');


const userAgeObj = {
    getUserAge: null,
    outDay: document.querySelector('#day'),
    outHour: document.querySelector('#hour'),
    outMin: document.querySelector('#min'),
    outSec: document.querySelector('outSec'),

    userSubmitEvent: () => {
        clickCount++
        if (clickCount < 2) {
            const age = document.querySelector('#userAgeInput');
            let firstAge = Math.floor(age.value / 10);
            let ageTen = age.value % 10;
            let lifeDayCal = new Date();
            lifeDayCal.setFullYear((lifeDayCal.getFullYear()-age.value)+1);
            let oldTime = new Date();
            oldTime.setFullYear(oldTime.getFullYear() + (10 - ageTen));
            oldTime.setMonth(0);
            oldTime.setDate(0);
            oldTime.setHours(0);
            oldTime.setMinutes(0);
            oldTime.setSeconds(0);
            new Timeloop(oldTime, firstAge, ageTen, lifeDayCal);
        }else{
            alert('계산된 나이가 2개 이상입니다. 브라우저를 새로고침하겠습니다.');
            window.location.reload();
        }
    },
};

class Timeloop {
    constructor(oldtime, firstAge, ageTen, lifeCal) {

        setInterval(() => {
            const outDay = document.querySelector('#day'),
                outHour = document.querySelector('#hour'),
                outMin = document.querySelector('#min'),
                outSec = document.querySelector('#sec'),
                outYear = document.querySelector('#years'),
                outGoalAge = document.querySelector('#goalAge'),
                outLifeAge = document.querySelector('#lifeDay');

  
            let today = new Date();
            let lifeYears = (today.getFullYear()-lifeCal.getFullYear()); 
            let lifeMonths = Math.ceil((today.getTime()-lifeCal.getTime())/1000/60/60/24/30); 
            let times = oldtime.getTime() - today.getTime();
            let outdateFn = Math.ceil(times / 1000 / 60 / 60 / 24),
                outhoursFn = Math.floor(times / 1000 / 60 / 60) % 24,
                outMinFn = Math.floor(times / 1000 / 60) % 60,
                outSecFn = Math.floor(times / 1000) % 60;
            outLifeAge.innerHTML = `${lifeYears}년 , ${lifeMonths}개월이상...`
            outGoalAge.innerHTML = `${(firstAge+1)*10}`
            outYear.innerHTML = ` ${10-ageTen}년,`
            outDay.innerHTML = `${outdateFn}일`;
            outHour.innerHTML = `${outhoursFn}시`;
            outMin.innerHTML = `${outMinFn}분`;
            outSec.innerHTML = `${outSecFn}초`;
        }, 1000);
    };
};