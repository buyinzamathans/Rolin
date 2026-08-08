// --- Element Selection ---
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const step3 = document.getElementById('step-3');
const nextBtn = document.getElementById('next-btn');
const setDateBtn = document.getElementById('set-date-btn');

// --- Magic Variables ---
const noTexts = ["no 💔", "Are you sure?", "Think again!", "Last chance!", "Okay, rude."];
let noClickCount = 0;
let yesScale = 1;

// --- The Dodging Logic (Fixed) ---
function dodgeSexy() {
    // Switch to fixed positioning so it dodges across the whole screen
    noBtn.style.position = 'fixed';
    
    // Calculate safe boundaries so the button stays visible
    const safeWidth = window.innerWidth - noBtn.offsetWidth - 20;
    const safeHeight = window.innerHeight - noBtn.offsetHeight - 20;
    
    const x = Math.max(10, Math.random() * safeWidth);
    const y = Math.max(10, Math.random() * safeHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Change the text
    noClickCount++;
    if (noClickCount < noTexts.length) {
        noBtn.innerText = noTexts[noClickCount];
    } else {
        noBtn.innerText = "Still no? 😭"; 
    }

    // Make the YES button grow significantly faster
    yesScale += 0.25;
    yesBtn.style.transform = `scale(${yesScale})`;
}

// --- Event Listeners ---
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    dodgeSexy();
});

noBtn.addEventListener('mouseover', dodgeSexy);

yesBtn.addEventListener('click', () => {
    // 1. Rain down the hearts
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; 
        document.body.appendChild(heart);
    }

    // 2. Move to Step 2 smoothly after a brief pause
    setTimeout(() => {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
    }, 1200); 
});

nextBtn.addEventListener('click', () => {
    step2.classList.add('hidden');
    step3.classList.remove('hidden');
});

// Preparing for the final phase
setDateBtn.addEventListener('click', () => {
    const selectedDate = document.getElementById('date-picker').value;
    const selectedTime = document.getElementById('time-picker').value;
    
    if(!selectedDate || !selectedTime) {
        alert("Please pick a date and time!");
        return;
    }
    
    // We will build the Food Menu and Contract in the final phase
    alert(`Date set for ${selectedDate} at ${selectedTime}. Ready for the Food Menu!`);
});
