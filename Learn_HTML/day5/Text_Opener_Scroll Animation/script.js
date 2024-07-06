// Register GSAP plugins

// var tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#main ",
//         markers: true,
//         start: "50% 50%",
//         end: "+=100%",
//         scrub: true,
//         pin:true,
//     }
// });

// tl.to("#top", {
//         y: "-100%",   
//     }, 'a')
//     .to("#bottom", {
//         y: "100%",   
//     }, 'a')
//     .to("#top-h", {
//         top: "80%",
//     }, 'a')
//     .to("#bottom-h", {
//         bottom: "-80%",
//     }, 'a');

// Create a timeline for the loading animation
var tl = gsap.timeline();

// Add animations to the timeline
tl.to("#top", {
        y: "-110%",   
        duration: 3,
        ease: "power2.inOut"
    }, 'a')
    .to("#bottom", {
        y: "110%",   
        duration: 3 ,
        ease: "power2.inOut"
    }, 'a')
    .to("#top-h", {
        top: "80%",
        duration: 4 ,
        ease: "power2.inOut"
    }, 'a')
    .to("#bottom-h", {
        bottom: "-80%",
        duration: 4 ,
        ease: "power2.inOut"
    }, 'a');



// Dark mode toogle

// Function to calculate the current theme setting
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

// Get theme preference from local storage or system settings
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

// Apply the current theme setting to the HTML tag
document.querySelector("html").setAttribute("data-theme", currentThemeSetting);

// Target the toggle button and add event listener
const button = document.querySelector("[data-theme-toggle]");

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    // Update the button text
    const newCta = newTheme === "dark" ? "Change to light theme" : "Change to dark theme";
    button.innerText = newCta;

    // Update aria-label
    button.setAttribute("aria-label", newCta);

    // Update theme attribute on HTML to switch theme in CSS
    document.querySelector("html").setAttribute("data-theme", newTheme);

    // Update in local storage
    localStorage.setItem("theme", newTheme);

    // Update the currentThemeSetting in memory
    currentThemeSetting = newTheme;
});


// This ensures that the script runs only when DOM is full loaded.


document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        minute: { progress: document.getElementById('progress-minute'), time: [document.getElementById('time-minute1'), document.getElementById('time-minute2')] },
        
        hour: { progress: document.getElementById('progress-hour'), time: [document.getElementById('time-hour1'), document.getElementById('time-hour2')] },
        
        day: { progress: document.getElementById('progress-day'), time: [document.getElementById('time-day1'), document.getElementById('time-day2')] },
        
        month: { progress: document.getElementById('progress-month'), time: [document.getElementById('time-month1'), document.getElementById('time-month2')] },
        
        year: { progress: document.getElementById('progress-year'), time: [document.getElementById('time-year1'), document.getElementById('time-year2')] },
        
        valentine: { progress: document.getElementById('progress-valentine'), time: [document.getElementById('time-valentine1'), document.getElementById('time-valentine2')] },
        
        mothersday: { progress: document.getElementById('progress-mother'), time: [document.getElementById('time-mother1'), document.getElementById('time-mother2')] },
        
        fathersday: { progress: document.getElementById('progress-father'), time: [document.getElementById('time-father1'), document.getElementById('time-father2')] },
        
        christmas: { progress: document.getElementById('progress-christmas'), time: [document.getElementById('time-christmas1'), document.getElementById('time-christmas2')] },
        
        newmoon: { progress: document.getElementById('progress-new-moon'), time: [document.getElementById('time-new-moon1'), document.getElementById('time-new-moon2')] },
        
        waxingcrescent: { progress: document.getElementById('progress-crescent'), time: [document.getElementById('time-crescent1'), document.getElementById('time-crescent2')] },
        
        quartermoon: { progress: document.getElementById('progress-quarter'), time: [document.getElementById('time-quarter1'), document.getElementById('time-quarter2')] },
        
        waxinggibbous: { progress: document.getElementById('progress-waxing-gibbous'), time: [document.getElementById('time-waxing-gibbous1'), document.getElementById('time-waxing-gibbous2')] },
        
        fullmoon: { progress: document.getElementById('progress-full-moon'), time: [document.getElementById('time-full-moon1'), document.getElementById('time-full-moon2')] },
        
        waninggibbous: { progress: document.getElementById('progress-waning-gibbous'), time: [document.getElementById('time-waning-gibbous1'), document.getElementById('time-waning-gibbous2')] },
        
        lastquartermoon: { progress: document.getElementById('progress-last-quarter'), time: [document.getElementById('time-last-quarter1'), document.getElementById('time-last-quarter2')] },
        
        waningcrescent: { progress: document.getElementById('progress-waning-crescent'), time: [document.getElementById('time-waning-crescent1'), document.getElementById('time-waning-crescent2')] },
        
        decade: { progress: document.getElementById('progress-decade'), time: [document.getElementById('time-decade1'), document.getElementById('time-decade2')] },
        
        century: { progress: document.getElementById('progress-century'), time: [document.getElementById('time-century1'), document.getElementById('time-century2')] },
        
        millennium: { progress: document.getElementById('progress-millennium'), time: [document.getElementById('time-millennium1'), document.getElementById('time-millennium2')] },
        
        birthday: { progress: document.getElementById('progress-birthday'), time: [document.getElementById('time-birthday1'), document.getElementById('time-birthday2')] },
    };

    const fetchCurrentTime = async () => {
        try {
            const response = await fetch('http://worldtimeapi.org/api/timezone/Etc/UTC');
            const data = await response.json();
            return new Date(data.datetime);
        } catch (error) {
            console.error('Error fetching time:', error);
            return new Date(); // Fallback to local time in case of error
        }
    };

    const updateProgressBars = async () => {
        const now = await fetchCurrentTime();

        const updateProgressBar = (start, end, element) => {
            const total = end - start;
            const progress = now - start;
            let percent = (progress / total) * 100;
            if (now >= end) {
                percent = 100; // Ensure it reaches 100%
            }
            element.progress.style.width = `${percent}%`;
            element.time.forEach(el => el.textContent = formatTimeLeft(end - now));
        };

        const currentMinute = new Date(now);
        currentMinute.setSeconds(0, 0);
        const nextMinute = new Date(currentMinute);
        nextMinute.setMinutes(currentMinute.getMinutes() + 1);

        const currentHour = new Date(now);
        currentHour.setMinutes(0, 0, 0);
        const nextHour = new Date(currentHour);
        nextHour.setHours(currentHour.getHours() + 1);

        const currentDay = new Date(now);
        currentDay.setHours(0, 0, 0, 0);
        const nextDay = new Date(currentDay);
        nextDay.setDate(currentDay.getDate() + 1);

        const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const nextMonth = new Date(currentMonth);
        nextMonth.setMonth(currentMonth.getMonth() + 1);

        const currentYear = new Date(now.getFullYear(), 0, 1);
        const nextYear = new Date(currentYear);
        nextYear.setFullYear(currentYear.getFullYear() + 1);

        const valentine = new Date(now.getFullYear(), 1, 14);
        if (now > valentine) valentine.setFullYear(now.getFullYear() + 1);

        const mothersDay = calculateMothersDay(now.getFullYear());
        if (now > mothersDay) mothersDay.setFullYear(now.getFullYear() + 1);

        const fathersDay = calculateFathersDay(now.getFullYear());
        if (now > fathersDay) fathersDay.setFullYear(now.getFullYear() + 1);

        const christmas = new Date(now.getFullYear(), 11, 25);
        if (now > christmas) christmas.setFullYear(now.getFullYear() + 1);

        const moonPhases = calculateMoonPhases(now);

        const nextDecade = new Date((Math.floor(now.getFullYear() / 10) + 1) * 10, 0, 1);
        const nextCentury = new Date((Math.floor(now.getFullYear() / 100) + 1) * 100, 0, 1);
        const nextMillennium = new Date((Math.floor(now.getFullYear() / 1000) + 1) * 1000, 0, 1);

        const birthday = new Date(now.getFullYear(), 11, 31); // Example date, replace with your actual birthday
        
        updateProgressBar(currentMinute, nextMinute, elements.minute);
        updateProgressBar(currentHour, nextHour, elements.hour);
        updateProgressBar(currentDay, nextDay, elements.day);
        updateProgressBar(currentMonth, nextMonth, elements.month);
        updateProgressBar(currentYear, nextYear, elements.year);
        updateProgressBar(now, valentine, elements.valentine);
        updateProgressBar(now, mothersDay, elements.mothersday);
        updateProgressBar(now, fathersDay, elements.fathersday);
        updateProgressBar(now, christmas, elements.christmas);
        updateProgressBar(now, moonPhases.newMoon, elements.newmoon);
        updateProgressBar(now, moonPhases.waxingCrescent, elements.waxingcrescent);
        updateProgressBar(now, moonPhases.firstQuarter, elements.quartermoon);
        updateProgressBar(now, moonPhases.waxingGibbous, elements.waxinggibbous);
        updateProgressBar(now, moonPhases.fullMoon, elements.fullmoon);
        updateProgressBar(now, moonPhases.waningGibbous, elements.waninggibbous);
        updateProgressBar(now, moonPhases.lastQuarter, elements.lastquartermoon);
        updateProgressBar(now, moonPhases.waningCrescent, elements.waningcrescent);
        updateProgressBar(now, nextDecade, elements.decade);
        updateProgressBar(now, nextCentury, elements.century);
        updateProgressBar(now, nextMillennium, elements.millennium);
        updateProgressBar(now, birthday, elements.birthday);
    };

    const calculateMothersDay = (year) => {
        const may = new Date(year, 4, 1);
        may.setDate(7 + (0 - may.getDay()));
        return may;
    };

    const calculateFathersDay = (year) => {
        const june = new Date(year, 5, 1);
        june.setDate(14 + (0 - june.getDay()));
        return june;
    };

    const calculateMoonPhases = (now) => {
        const phases = [
            { name: 'newMoon', date: new Date('2024-08-04T09:27:00') },
            { name: 'waxingCrescent', date: new Date('2024-08-07T09:27:00') },
            { name: 'firstQuarter', date: new Date('2024-08-14T09:27:00') },
            { name: 'waxingGibbous', date: new Date('2024-08-21T09:27:00') },
            { name: 'fullMoon', date: new Date('2024-08-28T09:27:00') },
            { name: 'waningGibbous', date: new Date('2024-09-04T09:27:00') },
            { name: 'lastQuarter', date: new Date('2024-09-11T09:27:00') },
            { name: 'waningCrescent', date: new Date('2024-09-18T09:27:00') },
        ];

        const nextPhases = {};
        for (let phase of phases) {
            if (now < phase.date) {
                nextPhases[phase.name] = phase.date;
            } else {
                const nextYearDate = new Date(phase.date);
                nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
                nextPhases[phase.name] = nextYearDate;
            }
        }
        return nextPhases;
    };

    const formatTimeLeft = (milliseconds) => {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const year = Math.floor(months/ 12);
        
        
        if (year> 0) return `${year} years left`;
        
        if (days > 0) return `${days} days left`;
        if (hours > 0) return `${hours} hours left`;
        if (minutes > 0) return `${minutes} minutes left`;
        return `${seconds} seconds left`;
    };

    updateProgressBars();
    setInterval(updateProgressBars, 1000);
});
