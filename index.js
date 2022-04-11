const shareButton = document.querySelector('.share-button');
const shareNavigation = document.querySelector('.share__navigation');

shareButton.addEventListener('click', () => {
    shareNavigation.classList.toggle('active');
    shareButton.classList.toggle('active');
});
