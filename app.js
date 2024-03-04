const TEXT_0 = document.getElementById('text_01');
const TEXT_2 = document.getElementById('text_02')
const TITLE = document.getElementById('text_');
const CONTENT = document.getElementById('area_')
const BTNCLK = document.getElementById('btn_');

BTNCLK.addEventListener('click', () => {
    TEXT_0.innerHTML = TITLE.value;
    TITLE.value = '';
    TEXT_2.innerHTML = CONTENT.value;
    CONTENT.value = '';
})
