"use strict";
function solution() {
    document.addEventListener('DOMContentLoaded', solve);
}
function solve() {
    var btn = document.getElementById('add');
    if (btn) {
        btn.addEventListener('click', add);
    }
}
function add() {
    var input = document.getElementsByTagName('input');
    if (input !== null) {
        var inputValue = input[0].value;
        var list = document.getElementById('list');
        if (list !== null) {
            var li = document.createElement('li');
            li.className = 'gift';
            li.textContent = inputValue;
            var sendBtn = document.createElement('button');
            sendBtn.textContent = 'Send';
            sendBtn.className = 'btn';
            sendBtn.addEventListener('click', send);
            var discardBtn = document.createElement('button');
            discardBtn.textContent = 'Discard';
            discardBtn.className = 'btn';
            discardBtn.addEventListener('click', discard);
            li.append(sendBtn, discardBtn);
            list.appendChild(li);
        }
        input[0].value = '';
    }
}
function htmlElValidator(el) {
    if (el !== null) {
        return el;
    }
    return;
}
// ???? type of event ??????
function send(ev) {
    var sentUl = document.getElementById('sent');
    if (sentUl !== null) {
        var target = ev.target;
        if (target !== null) {
            var newLi = target.parentNode;
            var buttons = Array.from(newLi.getElementsByTagName('button'));
            buttons.forEach(function (el) {
                if (el.parentNode !== null) {
                    el.parentNode.removeChild(el);
                }
            });
            sentUl.appendChild(newLi);
        }
    }
}
function discard(ev) {
    var discardUl = document.getElementById('discarded');
    if (discardUl !== null) {
        var newLi = ev.target.parentNode;
        var buttons = Array.from(newLi.getElementsByTagName('button'));
        buttons.forEach(function (el) {
            if (el.parentNode !== null) {
                el.parentNode.removeChild(el);
            }
        });
        discardUl.appendChild(newLi);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsU0FBUyxRQUFRO0lBQ2IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQ3hELENBQUM7QUFFRCxTQUFTLEtBQUs7SUFFVixJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLElBQUksR0FBRyxFQUFFO1FBQ0wsR0FBRyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN0QztBQUNMLENBQUM7QUFDRCxTQUFTLEdBQUc7SUFDUixJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDckQsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ2hCLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEMsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7WUFDZixJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLEVBQUUsQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1lBRTVCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsT0FBTyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7WUFDN0IsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDMUIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUV4QyxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3BELFVBQVUsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1lBQ25DLFVBQVUsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzdCLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFOUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QjtRQUNELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ3ZCO0FBQ0wsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUFDLEVBQXNCO0lBQzNDLElBQUksRUFBRSxLQUFLLElBQUksRUFBRTtRQUNiLE9BQU8sRUFBRSxDQUFDO0tBQ2I7SUFDRCxPQUFPO0FBQ1gsQ0FBQztBQUNELDRCQUE0QjtBQUM1QixTQUFTLElBQUksQ0FBQyxFQUFTO0lBQ25CLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFL0MsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1FBQ2pCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDekIsSUFBSSxNQUFNLEtBQUcsSUFBSSxFQUFFO1lBQ2YsSUFBTSxLQUFLLEdBQWUsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUM1QyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO2dCQUNkLElBQUksRUFBRSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7b0JBQ3hCLEVBQUUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNqQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3QjtLQUNKO0FBQ0wsQ0FBQztBQUNELFNBQVMsT0FBTyxDQUFDLEVBQU87SUFDcEIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN2RCxJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7UUFDcEIsSUFBTSxLQUFLLEdBQWdCLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2hELElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDakUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7WUFDZCxJQUFJLEVBQUUsQ0FBQyxVQUFVLEtBQUssSUFBSSxFQUFFO2dCQUN4QixFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoQztBQUNMLENBQUMifQ==