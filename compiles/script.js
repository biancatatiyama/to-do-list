"use strict";
const add = document.getElementById('addButton');
const del = document.getElementById('deleteButton');
const edit = document.getElementById('editButton');
const input = document.getElementById('input');
const ul = document.getElementById('ulMain');
add.addEventListener('click', () => {
    const newDeletion = document.createElement('button');
    const newList = document.createElement('li');
    const newSpan = document.createElement('span');
    const newEdit = document.createElement('button');
    newEdit.setAttribute('id', 'editButton');
    newDeletion.setAttribute('id', 'deleteButton');
    if (input.value == '') {
        alert('Make sure to write something on the input field');
    }
    else {
        newList.innerHTML = `${input.value}`;
        input.value = '';
        newDeletion.innerHTML = 'X';
        newEdit.innerHTML = 'E';
        ul.appendChild(newList);
        newList.appendChild(newSpan);
        newSpan.appendChild(newDeletion);
        newSpan.appendChild(newEdit);
    }
    newDeletion.addEventListener('click', function (e) {
        if (e.target.id == "deleteButton") {
            if (window.confirm(`Are you sure you want to DELETE the content?`)) {
                ul.removeChild(newList);
            }
        }
    });
    newEdit.addEventListener('click', function (e) {
        if (e.target.id == "editButton") {
            if (window.confirm(`Are you sure you want to EDIT the content?`)) {
                ul.removeChild(newList);
                newDeletion.innerHTML = '';
                newEdit.innerHTML = '';
                input.value = newList.innerText;
            }
        }
    });
});
