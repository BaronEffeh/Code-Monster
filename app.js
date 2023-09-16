const imgDataBtn = document.querySelector(".bottom-svg");
const btnTest = document.querySelector(".btnTest");
const idElement = document.querySelector(".slip_id");
const output = document.querySelector(".content1");

btnTest.addEventListener("click", () => {
    const apiUrl = "https://api.adviceslip.com/advice";
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            idElement.textContent = JSON.stringify(data.slip.id);
            output.textContent = JSON.stringify(data.slip.advice);
        })
        .catch((error) => {
            output.textContent = `Error: ${error.message}`;
        });
});