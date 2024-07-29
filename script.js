document.addEventListener("DOMContentLoaded", function() {
    const cake = document.querySelector('.cake');
    const container = document.querySelector('.container');

    cake.addEventListener('click', function() {
        // Mostrar mensaje de celebración
        const celebrationMessage = document.createElement('div');
        celebrationMessage.innerText = "¡TE AMO!";
        celebrationMessage.classList.add('celebration-message');
        container.appendChild(celebrationMessage);

        // Animación de confeti
        confettiAnimation();

        // Remover el mensaje después de 3 segundos
        setTimeout(() => {
            celebrationMessage.remove();
        }, 3000);
    });

    function confettiAnimation() {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti-container');
        container.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.backgroundColor = getRandomColor();
            confettiContainer.appendChild(confetti);
        }

        // Remover confeti después de 5 segundos
        setTimeout(() => {
            confettiContainer.remove();
        }, 5000);
    }

    function getRandomColor() {
        const colors = ['#ff6f61', '#ffb6c1', '#ffefd5', '#ffa07a', '#ff69b4'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
});
