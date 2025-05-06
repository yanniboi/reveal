function reveal() {
    // Play drumroll sound
    const drumroll = document.getElementById('drumrollSound');
    drumroll.play();
    
    // Delay the reveal animation to sync with sound
    setTimeout(() => {
        document.body.style.backgroundColor = '#f48fb1'; // Pink
        document.querySelector('h1').style.opacity = '0';
        document.querySelector('button').style.display = 'none';
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
    }, 3700); // Wait for drumroll before revealing
}

function randomColor() {
    const colors = ['#ffffff', '#ffe0e9', '#ffb6c1', '#f06292', '#ff80ab'];
    return colors[Math.floor(Math.random() * colors.length)];
}