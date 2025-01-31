const buttons = document.querySelectorAll("button")
const result = document.getElementById("result")
const rectangle = document.getElementById("rectangle");
const circle = document.getElementById("circle");
const body = document.querySelector("body");
const logo = document.querySelector(".logo");
const themeText = document.querySelector(".theme-text");
const themeIndex = document.querySelectorAll(".theme");
const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");
const deleteButton = document.querySelector(".delete-button");
const equalButton = document.querySelector(".equal-button");
const dial = document.querySelectorAll(".dial");


buttons.forEach((button) => {

    button.addEventListener('click', () => {
        const value = button.textContent;

        if(value === "=") {
            result.textContent = eval(result.textContent)
        } else if (value === "RESET") {
            result.textContent = ""
        } else if (value === "DEL") {
           result.textContent = result.textContent.slice(0, -1)
        } else if (value === "x") {
            result.textContent += "*";
        } else {
            result.textContent += value;
        }
    })
})


rectangle.addEventListener('click', () => {
    if (circle.classList.contains("circle3")) {
        circle.classList.remove("circle3");
        circle.classList.add("circle");

        rectangle.className = "rectangle"

        body.className = ""

        logo.className = "logo"

        themeText.className = "theme-text"

        themeIndex.forEach((i) => {
            i.className = "theme"
        })

        result.className = "result";

        container.className = "container";

        resetButton.className = "reset-button"

        deleteButton.className = "delete-button"

        equalButton.className = "equal-button";

        dial.forEach((button) => {
            button.className = ""
        })
    } else if (circle.classList.contains("circle2")) {
        circle.classList.remove("circle2");
        circle.classList.add("circle3");

        rectangle.className = "rectangle3"

        body.className = "body3"

        logo.className = "logo3"

        themeText.className = "theme-text3"

        themeIndex.forEach((i) => {
            i.className = "theme3"
        })

        result.className = "result3";

        container.className = "container3";

        resetButton.className = "reset-button3"

        deleteButton.className = "delete-button3"

        equalButton.className = "equal-button3";

        dial.forEach((button) => {
            button.className = "dial3"
        })
    } else {
        circle.classList.remove("circle");
        circle.classList.add("circle2");

        rectangle.className = "rectangle2"

        body.className = "body2"

        logo.className = "logo2"

        themeText.className = "theme-text2"

        themeIndex.forEach((i) => {
            i.className = "theme2"
        })

        result.className = "result2";

        container.className = "container2";

        resetButton.className = "reset-button2"

        deleteButton.className = "delete-button2"

        equalButton.className = "equal-button2";

        dial.forEach((button) => {
            button.className = ""
        })
    }
})

