//Points
let homePoints = 0;
let guestPoints = 0;

// Display elements DOM
let homeScoreboard = document.getElementById('home-scoreboard')
let guestScoreboard = document.getElementById('guest-scoreboard')

// Action buttons DOM
// Home buttons
let home1pt = document.getElementById('home-1pt')
let home2pt = document.getElementById('home-2pt')
let home3pt = document.getElementById('home-3pt')

// Guest buttons
let guest1pt = document.getElementById('guest-1pt')
let guest2pt = document.getElementById('guest-2pt')
let guest3pt = document.getElementById('guest-3pt')

//Buttons interactions - Home player
home1pt.addEventListener('click', () => {
    homePoints += 1;
    homeScoreboard.innerHTML = '<h2>' + homePoints + '</h2>';
})

home2pt.addEventListener('click', () => {
    homePoints += 2;
    homeScoreboard.innerHTML = '<h2>' + homePoints + '</h2>';
})

home3pt.addEventListener('click', () => {
    homePoints += 3;
    homeScoreboard.innerHTML = '<h2>' + homePoints + '</h2>';
})

//Buttons interactions - Guest player
guest1pt.addEventListener('click', () => {
    guestPoints += 1;
    guestScoreboard.innerHTML = '<h2>' + guestPoints + '</h2>';
})

guest2pt.addEventListener('click', () => {
    guestPoints += 2;
    guestScoreboard.innerHTML = '<h2>' + guestPoints + '</h2>';
})

guest3pt.addEventListener('click', () => {
    guestPoints += 3;
    guestScoreboard.innerHTML = '<h2>' + guestPoints + '</h2>';
})