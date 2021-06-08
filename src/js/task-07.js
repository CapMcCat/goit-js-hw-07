// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
}

const startFontSize = `${refs.input.value}px`
refs.span.style.fontSize = startFontSize

refs.input.addEventListener("input", onInputRangeChange)

function onInputRangeChange(event) {
  refs.span.style.fontSize = `${refs.input.value}px`
}
