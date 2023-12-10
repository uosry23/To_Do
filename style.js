let form = document.querySelector("form")
let btn = document.querySelector("button")
let input = document.querySelector("input")
let ol = document.querySelector("ol")

document.addEventListener("DOMContentLoaded", () => {
    btn.disabled = true

})
input.addEventListener("keyup", () => {
    if (input.value.length >= 3) {

        btn.disabled = false


    }
    else {

        btn.disabled = true
    }
}
)
/*
1- make variable
2-make text
3-put text inside varibale
4-put variable inside body

*/
btn.addEventListener("click", () => {
    let li = document.createElement("li")
    let text = document.createTextNode(input.value)
    let button = document.createElement("button")
    let x = document.createTextNode("")

    button.append(x)

    li.append(text)
    li.append(button)


    li.setAttribute("class", "style")

    ol.append(li)


    button.setAttribute("class", "buttomStyle");


    button.addEventListener("click", () => {

        ol.removeChild(li)
    })
    input.value = ""
    btn.disabled = true



})




form.addEventListener("submit", (t) => {


    t.preventDefault()
})