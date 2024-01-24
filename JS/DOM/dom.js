
let menu = document.querySelector(".menu ul")

menu.style.display = "flex"

// // template string
// let str = `<li><a href="#">Guides</a></li>`
// menu.innerHTML += str

let newLi = document.createElement("li")
newLi.innerText = "Guides"
menu.appendChild(newLi)

// Event
function changeColor() {
    document.querySelector('.warning').style.backgroundColor = 'yellow'
    document.querySelector('.warning').style.color = 'red'
}