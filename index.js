const menu = document.getElementById("menu")
const startMenu = document.getElementById("startMenu")
const closeMenu = document.getElementById("closeMenu")

startMenu.addEventListener("click", () => (menu.style.display = "grid"))
closeMenu.addEventListener("click", () => (menu.style.display = ""))
