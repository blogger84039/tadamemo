const text_0 = document.getElementById('text_01');
const text_2 = document.getElementById('text_02')
const title = document.getElementById('text_');
const content = document.getElementById('area_')
const btnclk = document.getElementById('btn_');

btnclk.addEventListener('click', () => {
    text_0.innerHTML = title.value;
    title.value = '';
    text_2.innerHTML = content.value;
    content.value = '';
})
