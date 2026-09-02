 let colors = [
    "red",
    "blue",
    "green",
    "orange",
    "lime",
    "grey",
    "linen",
    "salmon",
    "pink",
    "hotpink"
];
 
let index = 0;

 
function changeColor() {

   
    document.body.style.backgroundColor = colors[index];

   
    index++;

    if (index === colors.length) {
        index = 0;
    }
}