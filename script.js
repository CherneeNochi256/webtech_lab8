const input = document.getElementById("user_interaction");
const button = document.getElementById("user_interaction_submit")

button.addEventListener("click", () => {
    const value = input.value

    if (value % 2 === 0)
        console.log("Even")
    else
        console.log("Odd")
})

//---------------------------

const array = []

for (let i = 1; i <= 5; i++) {
    array.push(i)
}

const ul = document.createElement("ul")

array.forEach((el) => {
    const li = document.createElement("li")
    const text = document.createTextNode(el)
    li.appendChild(text)
    ul.appendChild(li)
})

document.body.appendChild(ul)