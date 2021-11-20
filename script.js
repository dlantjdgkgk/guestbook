const $guestbookMent = document.getElementById('guestbookMent');
const $guestbookName = document.getElementById('guestbookName');
const $list = document.querySelector('.list');
const $assignmentButton = document.getElementById('assignment');
$assignmentButton.addEventListener('click', enroll);

function el(tag) {
    return document.createElement(tag);
}
function enroll(event) {
    const $descriptionSpan = el('span');
    const descriptionSpanValue = document.createTextNode(
        $guestbookMent.value + ':' + $guestbookName.value
    );
    $descriptionSpan.append(descriptionSpanValue);
    $descriptionSpan.classList.add('Name_Ment');

    const $box = el('div');
    $box.classList.add('box');
    $box.append($descriptionSpan);

    const $box1 = el('div');
    $box1.classList.add('box1');

    insertButton($box1, 'update', '수정');
    insertButton($box1, 'delete', '삭제');

    const $li = el('li');
    $li.append($box, $box1);
    $list.append($li);

    $guestbookMent.value = '';
    $guestbookName.value = '';
}

function insertButton(parent, feature, name) {
    const $button = el('button');
    const buttonValue = document.createTextNode(name);
    $button.append(buttonValue);
    $button.classList.add(feature, 'List');
    parent.append($button);
    if (name === '삭제') {
        $button.addEventListener('click', deleteList);
    } else {
        $button.addEventListener('click', updateList);
    }
    // [deleteList, updateList].forEach((fn) =>$button.addEventListener('click', fn));
}

function updateList(event) {
    const $li = event.currentTarget.parentElement.parentElement;
    const $NameMent = $li.querySelector('.Name_Ment');
    const $name = prompt('이름을 입력해주세요');
    const $ment = prompt('멘트를 입력해주세요');
    $NameMent.innerText = $name + ' : ' + $ment;
}

function deleteList(event) {
    $list.removeChild(event.currentTarget.parentElement.parentElement);
}
