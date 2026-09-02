 const display = document.querySelector("header");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    
    button.addEventListener('click', () => {
        const value = button.innerText;


        if (value === 'clear') {
            display.innerText = '';
        } 
        else if (value === 'del') {
            display.innerText = display.innerText.slice(0, -1);
        } 
        else if (value === '=') {
            try {
                 
                display.innerText = new Function(`return ${display.innerText}`)();

            } catch (error) {
                display.innerText = "Error";
            }
        }
        else {
            display.innerText += value;
        }
    });
});
 