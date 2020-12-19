const url =
  "https://api.openweathermap.org/data/2.5/weather?id=625144&appid=019911fb81dd7e07a0e2713f736acb34"

const f = async () => {
  let promise = await fetch(url)
  let response = await promise
  console.log((await response.json()).name)
}
f()

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

class Animal {
  constructor(name) {
    this.name = name
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now()
  }
}

let rabbit = new Rabbit("Белый кролик") // Error: this is not defined
alert(rabbit.name)
