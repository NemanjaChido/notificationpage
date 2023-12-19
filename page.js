const dropContent = document.querySelector('.drop-content');
const dropBar = document.getElementById('dropbar');
const unreadMessage = document.querySelectorAll('.marked-unread');
const unreadMessagenum = document.getElementById('alert');
const markMessage = document.getElementById('markbtn');


function dropBox(){
    dropBar.classList.toggle('Box');
}
dropContent.addEventListener('click', dropBox);

unreadMessagenum.innerText = unreadMessage.length;

unreadMessage.forEach((message) => {
    message.addEventListener('click', () => {
        message.classList.remove('marked-unread');
        const newMessages = document.querySelectorAll('.marked-unread');
        unreadMessagenum.innerText = newMessages.length;
    });
});

markMessage.addEventListener('click', () => {
    unreadMessage.forEach((message) => {
        message.classList.remove('marked-unread');
    });
    const newMessages =document.querySelectorAll('.marked-unread');
    unreadMessagenum.innerHTML = newMessages.length;
});