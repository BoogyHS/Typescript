function solution(): void {
    document.addEventListener('DOMContentLoaded', solve)
}

function solve(): void {

    const btn = document.getElementById('add');
    if (btn) {
        btn.addEventListener('click', add);
    }
}
function add(): void {
    const input = document.getElementsByTagName('input');
    if (input !== null) {
        const inputValue = input[0].value;
        const list = document.getElementById('list');
        if (list !== null) {
            const li = document.createElement('li');
            li.className = 'gift';
            li.textContent = inputValue;

            const sendBtn = document.createElement('button');
            sendBtn.textContent = 'Send';
            sendBtn.className = 'btn';
            sendBtn.addEventListener('click', send);

            const discardBtn = document.createElement('button');
            discardBtn.textContent = 'Discard';
            discardBtn.className = 'btn';
            discardBtn.addEventListener('click', discard);

            li.append(sendBtn, discardBtn);
            list.appendChild(li);
        }
        input[0].value = '';
    }
}

function htmlElValidator(el: HTMLElement | null) {
    if (el !== null) {
        return el;
    }
    return;
}
// ???? type of event ??????
function send(ev: Event) {
    const sentUl = document.getElementById('sent');
   
    if (sentUl !== null) {
        const target = ev.target;
        if (target!==null) {
            const newLi:HTMLElement = target.parentNode;
            const buttons = Array.from(newLi.getElementsByTagName('button'));
            buttons.forEach(el => {
                if (el.parentNode !== null) {
                    el.parentNode.removeChild(el);
                }
            });
            sentUl.appendChild(newLi);
        }
    }
}
function discard(ev: any) {
    const discardUl = document.getElementById('discarded');
    if (discardUl !== null) {
        const newLi: HTMLElement = ev.target.parentNode;
        const buttons = Array.from(newLi.getElementsByTagName('button'));
        buttons.forEach(el => {
            if (el.parentNode !== null) {
                el.parentNode.removeChild(el);
            }
        });
        discardUl.appendChild(newLi);
    }
}