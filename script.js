const $guestbookMent = document.getElementById('guestbookMent');
const $guestbookName = document.getElementById('guestbookName');
const $list = document.querySelector('.list');
const $assignmentButton = document.getElementById('assignment');
$assignmentButton.addEventListener('click', button);

const $removeList = document.querySelectorAll('.delete.List');
for (const $remove of $removeList) {
    remove.addEventListener(click, deleteList);
}
const $correctList = document.querySelectorAll('.update.List');
for (const $correct of $correctList) {
    correct.addEventListener(click, updateList);
}

function button(event) {
    enroll($guestbookMent.value, $guestbookName.value);
    $guestbookMent.value = '';
    $guestbookName.value = '';
}

function enroll() {
    const $descriptionSpan = document.createElement('span');
    $descriptionSpan.innerHTML = text;
    $descriptionSpan.className = 'Name_Ment';
    const $li = document.createElement('li');
    $li.append($descriptionSpan);
    createList($li, 'update', '수정');
    createList($li, 'delete', '삭제');
    $list.append($li);
}

function createList(parent, feature, name) {
    const $button = document.createElement('button');
    const buttonValue = document.createTextNode(name);
    $button.append(buttonValue);
    $button.className = feature + ' ' + 'List';
    parent.append($button);
}

function updateList() {}
function deleteList() {}
