const $guestbookMent = document.getElementById('guestbookMent');
const $guestbookName = document.getElementById('guestbookName');
const $list = document.querySelector('.list');
const $assignmentButton = document.getElementById('assignment');
$assignmentButton.addEventListener('click', enroll);

function createElement(tag) {
    return document.createElement(tag);
}
function enroll(event) {
    const $descriptionSpan = createElement('span');
    const descriptionSpanValue = document.createTextNode(
        $guestbookName.value + ':' + $guestbookMent.value
    );
    $descriptionSpan.append(descriptionSpanValue);
    $descriptionSpan.classList.add('Name_Ment');

    const $descriptionWrap = createElement('div');
    $descriptionWrap.classList.add('descriptionWrap');
    $descriptionWrap.append($descriptionSpan);

    const $buttonWrap = createElement('div');
    $buttonWrap.classList.add('buttonWrap');

    insertButton($buttonWrap, 'update', '수정');
    insertButton($buttonWrap, 'delete', '삭제');

    const $li = createElement('li');
    $li.append($descriptionWrap, $buttonWrap);
    $list.append($li);

    $guestbookMent.value = '';
    $guestbookName.value = '';
}

function insertButton(parent, feature, name) {
    const $button = createElement('button');
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

// function updateList(event) {
//     const $li = event.currentTarget.parentElement.parentElement;
//     const $NameMent = $li.querySelector('.Name_Ment');
//     const $name = prompt('이름을 입력해주세요');
//     const $ment = prompt('멘트를 입력해주세요');
//     $NameMent.innerText = $name + ' : ' + $ment;
// }

function updateList(event) {
    const $li = event.currentTarget.parentElement.parentElement;
    const $NameMent = $li.querySelector('.Name_Ment');
    const $updateInput = document.getElementById('update_input');

    if ($updateInput == null) {
        // 수정
        const $input = createElement('input');
        $input.id = 'update_input';
        $input.value = $li.querySelector('.Name_Ment').innerText;
        $NameMent.classList.add('hide');
        $button = $li.querySelector('button');
        $button.innerText = '완료';
        const $descriptionWrap = $li.querySelector('.descriptionWrap');
        $descriptionWrap.append($input);
    } else {
        // 완료
        $NameMent.innerText = $updateInput.value;
        $NameMent.classList.remove('hide');
        $button.innerText = '수정';
        const $descriptionWrap = $NameMent.parentElement;
        $descriptionWrap.removeChild($updateInput);
    }
}

function deleteList(event) {
    $list.removeChild(event.currentTarget.parentElement.parentElement);
}
