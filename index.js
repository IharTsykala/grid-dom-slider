const menu = document.getElementById("menu")
const startMenu = document.getElementById("startMenu")
const closeMenu = document.getElementById("closeMenu")

startMenu.addEventListener("click", () => (menu.style.display = "grid"))
closeMenu.addEventListener("click", () => (menu.style.display = ""))

const search = document.getElementById("search")
const startSearch = document.getElementById("startSearch")
const closeSearch = document.getElementById("closeSearch")

startSearch.addEventListener("click", () => (search.style.display = "grid"))
closeSearch.addEventListener("click", () => (search.style.display = ""))
