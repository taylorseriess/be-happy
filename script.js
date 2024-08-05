document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'congratulations.html';
});

document.getElementById('noButton').addEventListener('click', function() {
    const button = document.getElementById('noButton');
    const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});
