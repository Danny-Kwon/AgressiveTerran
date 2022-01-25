const Boxer = document.querySelector('.Boxer');
const picture_Boxer = document.querySelector('.picture_Boxer');
const NaDa = document.querySelector('.Nada');
const picture_NaDa = document.querySelector(".picture_Nada");
const iloveoov = document.querySelector('.iloveoov');
const picture_iloveoov = document.querySelector(".picture_iloveoov");
const Flash = document.querySelector('.Flash');
const picture_Flash = document.querySelector(".picture_Flash");
const FanTaSy = document.querySelector('.FanTaSy');
const picture_FanTaSy = document.querySelector(".picture_FanTaSy");
const Light = document.querySelector('.Light');
const picture_Light = document.querySelector(".picture_Light");

Boxer.addEventListener('click', () => {
    picture_Boxer.classList.toggle('active');
});
NaDa.addEventListener('click', () => {
    picture_NaDa.classList.toggle('active');
});
iloveoov.addEventListener('click', () => {
    picture_iloveoov.classList.toggle('active');
});
Flash.addEventListener('click', () => {
    picture_Flash.classList.toggle('active');
});
FanTaSy.addEventListener('click', () => {
    picture_FanTaSy.classList.toggle('active');
});
Light.addEventListener('click', () => {
    picture_Light.classList.toggle('active');
});