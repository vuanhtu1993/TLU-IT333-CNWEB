// Khai bao DOM
const searchBtn = document.querySelector("#search-btn")
const searchModal = document.querySelector("#search-modal")
const modalBody = document.querySelector("#modal-body")
const searchInput = document.querySelector("#search-input")

// Du lieu
const articles = [
    "Content & Display Patterns with Expressive CSS",
    "More code review tools (on GitHub)",
    "Resolution Independent Pixel Illustrations",
    "What's the deal with declaring font properties on @font-face?"
]

// Sự kiện
searchBtn.addEventListener('click', function () {
    searchModal.classList.add("d-block")
})

searchInput.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        filter(event.target.value)
    }

})

// Phuong thuc
// Render
function render(articles) {
    let str = ""
    for (let article of articles) {
        str += `<p>${article}</p>`
    }
    modalBody.innerHTML = str
}

render(articles)

// Filter
function filter(str) {
    const newArray = articles.filter(function (article) {
        return article.includes(str)
    })
    render(newArray)
}