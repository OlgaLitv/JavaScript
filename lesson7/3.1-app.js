'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/*
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/
const txt = document.querySelector(".text");
const links = document.querySelectorAll('.nav-link');
links.forEach((link) => {
     link.addEventListener('click', clickHandler);
});


/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    // здесь вызывайте changeText и changeActiveClass, и передавайте
    // им объект события.
    changeText(event);
    changeActiveClass(event);

}

/**
 * Эта функция должна убирать .active у предыдущего .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param {MouseEvent} event
 */
function changeActiveClass(event) {
    links.forEach((link) => {
        if (link.classList.contains('active')) {
            link.classList.remove('active')
        }
        if (link === event.target){
            link.classList.add('active')
        }
    });


}

/**
 * Эта фукнция должна читать текст (например через textContent) из
 * .nav-link по которому кликнули и в зависимости от этого в .text
 * ставить соответствующий текст из texts.
 * @param {MouseEvent} event
 */
function changeText(event) {
    const ev = event.target.innerHTML;
    if (ev === 'Link 1'){
        txt.innerHTML = texts.text1;
    }else if(ev === 'Link 2'){
        txt.innerHTML = texts.text2;
    }else if(ev === 'Link 3'){
        txt.innerHTML = texts.text3;
    }
}