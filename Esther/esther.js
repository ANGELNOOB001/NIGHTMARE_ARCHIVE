//エスター用
function toggleEstherMode() {
    const canvas = document.getElementById('tree-canvas');
    const label = document.getElementById('mode-label');
    const toggle = document.getElementById('toggle-mode');

    if (toggle.checked) {
        canvas.classList.remove('mode-normal');
        canvas.classList.add('mode-reveal');
        label.innerText = "† 事件記録 †";
        label.style.color = "#ff4d4d";
    } else {
        canvas.classList.remove('mode-reveal');
        canvas.classList.add('mode-normal');
        label.innerText = "† 関係図(表) †";
        label.style.color = "#fff";
    }
}