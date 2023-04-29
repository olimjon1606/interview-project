const bodyEl = document.querySelector(".span-container");
const colorString = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function createCircle(x, y) {
    let spanEl = document.createElement("span");
    spanEl.style.left = x + "px";
    spanEl.style.top = y + "px";
    const size = randomNumber(10, 150);
    spanEl.style.backgroundColor = randomColorCode()
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    spanEl.style.border = "solid 3px #fff";
    spanEl.style.pointerEvents = "none"
    bodyEl.appendChild(spanEl);
    return spanEl;
}
bodyEl.addEventListener("click", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    spanEl = createCircle(x, y)
    spanEl.style.position = "fixed";
    let time = randomNumber(5000, 10000)
    if (bodyEl.lastChild.previousElementSibling) {
        setTimeout(() => {
            bodyEl.lastChild.previousElementSibling.remove();
        }, time);
    }
    console.log(time)

    bodyEl.addEventListener("mousemove", (event) => {
        const x = event.offsetX;
        const y = event.offsetY;
        spanEl.style.left = x + "px";
        spanEl.style.top = y + "px";
    })
})

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