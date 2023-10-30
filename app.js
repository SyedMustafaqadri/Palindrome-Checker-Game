const txtInput = document.getElementById("inputField");
const checkBtn = document.getElementById("checkButton");
const outputTxt = document.getElementById("outputText");

function updateButtonState() {
    const filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    checkBtn.disabled = filterInput === "";
}

txtInput.addEventListener("input", () => {
    updateButtonState();
    outputTxt.style.display = "none";
});

txtInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !checkBtn.disabled) {
        event.preventDefault();
        checkBtn.click();
    } else if (event.key === "Enter") {
        event.preventDefault();
    }
});

checkBtn.addEventListener("click", () => {
    const filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");

    if (filterInput === "") {
        // Handle the case where the input is empty
        outputTxt.style.display = "block";
        outputTxt.innerHTML = `Please enter some text or a number.`;
    } else {
        const reverseInput = filterInput.split("").reverse().join("");
        outputTxt.style.display = "block";

        if (filterInput !== reverseInput) {
            outputTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`;
        } else {
            outputTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`;
        }

        txtInput.value = "";
    }
});
