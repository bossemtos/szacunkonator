document.addEventListener('DOMContentLoaded', () => {

    const counterDisplay = document.getElementById('counter');
    const respectImage = document.getElementById('respect-image');
    const respectSound = document.getElementById('respect-sound');
    const resetButton = document.getElementById('reset-button');
    const toastNotification = document.getElementById('toast-notification');
    const header = document.querySelector('h1');

    const storageKey = 'cyberRespectCounter';
    let respectCount = parseInt(localStorage.getItem(storageKey)) || 0;

    header.setAttribute('data-text', header.textContent);

    const updateCounterDisplay = () => {
        counterDisplay.textContent = respectCount;
        counterDisplay.classList.add('explode');
        setTimeout(() => {
            counterDisplay.classList.remove('explode');
        }, 500);
    };

    const showToast = (message) => {
        toastNotification.textContent = message;
        toastNotification.classList.add('show');
        setTimeout(() => {
            toastNotification.classList.remove('show');
        }, 2000);
    };

    const triggerScreenShake = () => {
        document.body.classList.add('shake-active');
        setTimeout(() => {
            document.body.classList.remove('shake-active');
        }, 400);
    };

    respectImage.addEventListener('click', () => {
        respectCount++;
        updateCounterDisplay();
        localStorage.setItem(storageKey, respectCount);
        showToast('TO SZACUNEK');
        triggerScreenShake();
        
        respectSound.volume = 1.0;
        respectSound.currentTime = 0;
        respectSound.play().catch(error => {
            console.log("Odtwarzanie dźwięku wymaga interakcji użytkownika.", error);
        });
    });

    resetButton.addEventListener('click', () => {
        if (confirm('KURWO JAK TO KLIKNIESZ TO CI SIE SZACUNEK WYZERUJE A WTEDY CHUJ W DUPE')) {
            respectCount = 0;
            localStorage.removeItem(storageKey);
            counterDisplay.textContent = respectCount; 
            showToast('Jesteś cwelem bez szacunku!');
        }
    });

    counterDisplay.textContent = respectCount;
});