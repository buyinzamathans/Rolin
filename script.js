const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// The text that will cycle when she tries to click 'No'
const noTexts = ["no 💔", "Are you sure?", "Think again!", "Last chance!", "Okay, rude."];
let noClickCount = 0;
let yesScale = 1; // Starting size of the Yes button

function dodgeSexy() {
    // 1. Calculate a random position on the screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // 2. Move the No button
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 3. Change the No button text
    noClickCount++;
    if (noClickCount < noTexts.length) {
        noBtn.innerText = noTexts[noClickCount];
    } else {
        noBtn.innerText = "Still no? 😭"; 
    }

    // 4. Make the YES button grow larger
    yesScale += 0.15;
    yesBtn.style.transform = `scale(${yesScale})`;
}

// 📱 Mobile Magic: Triggers when a finger touches the button
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Stops the tap from actually clicking
    dodgeSexy();
});

// 💻 Desktop Magic: Triggers when a mouse hovers over the button
noBtn.addEventListener('mouseover', dodgeSexy);

// 💖 The Celebration: When she clicks YES
yesBtn.addEventListener('click', () => {
    // Rain down 30 hearts
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.classList.add('heart');
        
        // Randomize starting position and fall speed
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; 
        
        document.body.appendChild(heart);
    }

    // A temporary alert until we build Phase 4
    setTimeout(() => {
        alert("She said YES! Get ready for Phase 4...");
    }, 1500); 
});
