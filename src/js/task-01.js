//Посчитает и выведет в консоль количество категорий в ul#categories,
//то есть элементов li.item.Получится 'В списке 3 категории.'.

const categoriesRefs = document.querySelectorAll("li.item")

const categoriesCounter = (categoriesRefs) => console.log(`В списке ${categoriesRefs.length} категории.`)

categoriesCounter(categoriesRefs) //выводит кол-во категорий в списке

// Для каждого элемента li.item в списке ul#categories,
// найдет и выведет в консоль текст заголовка элемента(тега h2)
//и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const logTitleTextAndElQuantity = (categoriesRefs) =>
  categoriesRefs.forEach((category) => {
    const text = category.querySelector("h2").textContent
    console.log(`Категория: ${text}`)
    console.log(`Количество элементов: ${category.lastElementChild.children.length}`)
  })

logTitleTextAndElQuantity(categoriesRefs) //выводит текст заголовка элемента h2 и количество элементов в категории
