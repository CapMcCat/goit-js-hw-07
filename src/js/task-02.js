// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"]

const createListItems = (ingredients) => {
  return ingredients.map((ingredient) => {
    const listItemEl = document.createElement("li")
    listItemEl.textContent = ingredient
    return listItemEl
  })
}
const listItemEls = createListItems(ingredients)

const listRef = document.querySelector("#ingredients")

console.log(listItemEls)

listRef.append(...listItemEls)
