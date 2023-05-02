const dropIcon = document.querySelector(".drop-icon")
const choiceList = document.querySelector(".choise-list")
const inputCheck = document.querySelectorAll(".input-check")
const choiceEl = document.querySelector(".choise")
const noneBtn = document.querySelector(".none")
const select = document.querySelector(".select")
const btns = document.querySelectorAll(".btn")
const btnContainer = document.querySelector(".btn-container")
const lastBtn = document.querySelector(".last-btn")
const listPEl = document.querySelector(".list-p")
let stringEl = ["TOYOTA", "BMW", "Abarth", "Bentley", "Alfa Romeo", "Alpine", "Land Rover", "Aston Martin", "Audi", "Lamborghini", "Cadillac", "Ford", "Chevrolet", "Tesla", "Honda", "Volkswagen", "Mercedes", "Benz", "Jeep", "Porsche", "Peugeot", "Hyundai", "Aston"]

dropIcon.addEventListener("click", () => {
    choiceList.classList.toggle("hide")
})
let itemCounter = 0
let checkedData = []
inputCheck.forEach(function (check) {

    check.addEventListener("click", () => {
        if (check.checked) {
            itemCounter++
            checkedData.push(check.value)
        } else {
            itemCounter--
            checkedData.pop(check.value)
        }
        choiceElSet(checkedData)
        // console.log(checkedData)
    })
})
function choiceElSet(data) {
    if (data.length < 4) {
        choiceEl.textContent = data.join()
    } else if (data.length === 7) {
        choiceEl.textContent = "All"
    } else { choiceEl.textContent = data.length + "-items" }
}


noneBtn.addEventListener("click", () => {
    empty()
    checkedData = []
    checkedData2 = []
    // console.log("hello")
})

btns.forEach(function (btn) {
    btn.addEventListener("click", () => {
        if (!choiceList.classList.contains("hide")) {
            choiceList.classList.add("hide")
        }
        if (btn.value === "empty") {
            empty()
        } else if (btn.value === "setValue") {
            setValue()
        }
        else if (btn.value === "setValueAll") {
            setValueAll()
        }
        else if (btn.value === "disable") {
            disable()
        }
        else if (btn.value === "enable") {
            enable()
        }
        else if (btn.value === "destroy") {
            destroy()
        }
        else if (btn.value === "getSelectValues") {
            getSelectValues()
        }
    })
})


function empty() {
    inputCheck.forEach(function (check) {
        if (check.checked) {
            check.checked = false
        }
        choiceEl.textContent = ""

    })
    itemCounter = 0
    checkedData = []
}
let checkedData2 = []
function setValue() {
    empty()
    checkedData2 = []
    checkedData2.push("Lamborghini")
    checkedData2.push("Land Rover")
    choiceEl.textContent = checkedData2.join()
}
function setValueAll() {
    inputCheck.forEach(function (check) {
        if (!check.checked) {
            check.checked = true
            checkedData.push(check.value)
        }
        choiceEl.textContent = "All"
    })
}
function disable() {
    dropIcon.disabled = true
}
function enable() {
    dropIcon.disabled = false
}
function destroy() {
    btnContainer.remove()
    select.remove()
    lastBtn.classList.remove("hide")
}

lastBtn.addEventListener("click", () => {
    window.location.reload()
})

function getSelectValues() {
    let counter = 0
    inputCheck.forEach(function (check) {
        if (check.checked) {
            counter++
        }
    })
    console.log(checkedData2)
    if (choiceEl.textContent === "All") {
        listPEl.textContent = stringEl.join()
    }
    else if (choiceEl.textContent === null) {
        choiceEl.textContent = ''
    } else if (counter === 0) {
        listPEl.textContent = search(checkedData2)
    } else {
        listPEl.textContent = search(checkedData)
    }
    choiceEl.textContent = ''
    empty()
}
console.log(checkedData2)
function search(data) {
    let afterSearch = []
    for (i = 0; i < data.length; i++) {
        for (j = 0; j < stringEl.length; j++) {
            if (data[i] === stringEl[j]) {
                afterSearch.push(stringEl[j])
            }
        }
    }
    return afterSearch.join();
}
