let buttons = document.querySelectorAll('.video-player');
let photos = document.querySelectorAll('.video-name');

buttons.forEach((button) => button.addEventListener('click', () => {
    console.log(button.id);
}));

photos.forEach((img) => img.addEventListener('click', () => {
    console.log(img.id);
}));
