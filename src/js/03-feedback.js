/*
Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email
 і message,у яких зберігай поточні значення полів форми. Нехай ключем для сховища 
 буде рядок "feedback-form-state".^^^^^^
Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, 
заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.^~~~~~
Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з 
полями email, message та їхніми поточними значеннями.
Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд.
 Для цього додай до проекту і використовуй бібліотеку lodash.throttle.
*/
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const STOREGE_KEY = 'feedback-form-state';
form.addEventListener('submit', hendleFormSubmit);
form.addEventListener('input', throttle(hendleFormInput, 500));

populateInput()
function hendleFormInput(ev) {
     const formInform = {
        email: form.email.value,
        message: form.message.value,
    }
    const formInformJSON = JSON.stringify(formInform);
    localStorage.setItem(STOREGE_KEY, formInformJSON);

};
 function populateInput() {
        const savedValue = localStorage.getItem(STOREGE_KEY);
        const parseSave = JSON.parse(savedValue);
    if (savedValue) {
        form.message.value = parseSave.message;
        form.email.value = parseSave.email;
    }
};



function hendleFormSubmit(ev) {
    ev.preventDefault();
    if (!form.message.value || !form.email.value) {
         alert("заповніть всі поля")
    } else {
        ev.currentTarget.reset();
    localStorage.removeItem(STOREGE_KEY);
    }
    
    
};



