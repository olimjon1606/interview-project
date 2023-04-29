const bodyEl = document.querySelector("body");
const colorString = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

bodyEl.addEventListener("click", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = x + "px";
    spanEl.style.top = y + "px";
    const size = randomNumber(10, 150);
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    spanEl.style.backgroundColor = randomColorCode()
    console.log(randomColorCode())
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, randomNumber(3000, 8000));
});
function randomNumber(start, end) {
    return Math.ceil(Math.random() * (end - start)) + start
}
function randomColorCode() {
    let code = []
    for (i = 0; i < 6; i++) {
        code.push(colorString[randomNumber(0, 14)])
    }
    code = code.join('');
    return "#" + code
}