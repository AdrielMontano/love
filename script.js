document.getElementById('btnFinAno').addEventListener('click', () => {
    alert('¡Feliz Fin de Año! Estoy feliz de estar a finales de este año y estar contigo, quizá no físicamente, pero sí emocionalmente. Te amo y espero seguir contigo. Gracias por todo lo bueno, y espero que podamos mejorar lo malo. Te amo, y no dudes de eso por un momento en tu vida. Confía en mí, que no miento al decir que te amo en serio.Valoro lo que haces por mí y espero que tú hagas lo mismo conmigo. Te amo mucho, y con mucho cariño te hago esto. Muaaaak, besos desde acá hasta donde estés tú.💗😭');
});

document.getElementById('btnYoTu').addEventListener('click', () => {
    alert('¡Tú y yo, juntitos💗 Feliz 8 meses y, pues, mucho más tiempo. Son 8 meses de lucha, de esfuerzo, de amor y de pasarla bien y mal. Pero lo mejor es que fue contigo, porque eres una persona importante para mí. Te amo, y espero que el tiempo siga pasando y sigamos juntos como novios, como amigos y como personas. Te amo y amo estar contigo, bebé. Con cariño, te dice estas palabras: Adrielito.🥺😭💗 ');
});

document.getElementById('btnCancion').addEventListener('click', () => {
    window.open('https://youtu.be/einn_UJgGGM?si=mp7Aodudh3jsfep3', '_blank');
});

// Generar nieve aleatoria
const snowflakesContainer = document.querySelector('.snowflakes');

function createSnowflakes() {
    for (let i = 0; i < 100; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.textContent = '❄';
        flake.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        flake.style.animationDelay = Math.random() * 5 + 's'; // Retardo aleatorio
        flake.style.animationDuration = Math.random() * 10 + 5 + 's'; // Duración aleatoria
        flake.style.fontSize = Math.random() * 20 + 10 + 'px'; // Tamaño aleatorio
        snowflakesContainer.appendChild(flake);
    }
}

createSnowflakes();
