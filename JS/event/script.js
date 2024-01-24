// Khai báo DOM
const btn = document.querySelector("button")
const boxes = document.querySelectorAll("div")



// Event listener
btn.addEventListener('click', function () {
    for (let box of boxes) {
        const color = box.getAttribute("id")
        box.style.backgroundColor = color
    }
})
