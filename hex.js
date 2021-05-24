let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

document.querySelector('.button').addEventListener('click', flip);

function flip() {
    colId = '#';
    for (let i=0; i<6; i++) {
        let randomIndex = Math.floor(Math.random() * colors.length);
        colId += colors[randomIndex];
    }
    document.querySelector(".flex-box-2").style.background = colId;
    document.querySelector("#color-id").textContent = colId;
}
