function showQuestion() {
    // Hide initial section and show quiz
    document.getElementById('initial-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'block';
    
    // Focus on the input field
    document.getElementById('answer-input').focus();
}

function checkAnswer() {
    const answerInput = document.getElementById('answer-input');
    const answer = answerInput.value.trim().toLowerCase();
    
    if (answer === 'curry') {
        // Answer is correct, proceed directly to reveal
        document.getElementById('quiz-section').style.display = 'none';
        document.getElementById('reveal-section').style.display = 'block';
        
        // Start the reveal sequence
        startReveal();
    } else {
        // Play wrong answer sound and shake the input
        const wrongSound = document.getElementById('wrongAnswerSound');
        wrongSound.play();
        
        // Add shake animation to input
        answerInput.classList.add('shake');
        setTimeout(() => {
            answerInput.classList.remove('shake');
        }, 500);
        
        // Clear input
        answerInput.value = '';
        answerInput.focus();
    }
}

function startReveal() {
    // Play drumroll sound
    const drumroll = document.getElementById('drumrollSound');
    drumroll.play();
    
    // Delay the reveal animation to sync with sound
    setTimeout(() => {
        reveal();
    }, 3700); // Wait for drumroll before revealing
}

function reveal() {
    document.body.style.backgroundColor = '#f48fb1'; // Pink
    const text = document.getElementById('revealText');
    text.style.display = 'block';
    
    // Play celebration sound
    const celebration = document.getElementById('celebrationSound');
    celebration.play();
    
    // Create confetti
    for (let i = 0; i < 100; i++) {
        let confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = Math.random() * -100 + 'px';
        confetti.style.backgroundColor = randomColor();
        confetti.style.animationDuration = 2 + Math.random() * 2 + 's';
        confetti.style.animationDelay = Math.random() + 's';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 7000);
    }
}

function randomColor() {
    const colors = ['#ffffff', '#ffe0e9', '#ffb6c1', '#f06292', '#ff80ab'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add event listener for Enter key on the input field
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('answer-input');
    input.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAnswer();
        }
    });
});