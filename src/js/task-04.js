// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const decrBtnRef = document.querySelector(' button[data-action="decrement"]')

const incrBtnRef = document.querySelector(' button[data-action="increment"]')

const spanRef = document.querySelector("#value")

let counterValue = Number(spanRef.textContent)

decrBtnRef.addEventListener("click", (event) => {
  counterValue -= 1
  spanRef.textContent = counterValue
})

incrBtnRef.addEventListener("click", (event) => {
  counterValue += 1
  spanRef.textContent = counterValue
})
