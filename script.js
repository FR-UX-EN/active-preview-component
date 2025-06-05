"use strict";

const shareButton = document.querySelector('.card-share');
const shareContent = document.querySelector('.card-share-content');

shareButton.addEventListener('click', () => {
    shareContent.classList.toggle('active');
    shareButton.classList.toggle('active');
});