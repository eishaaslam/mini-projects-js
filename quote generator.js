// let quotes = [
//     "The only place where success comes before work is in the dictionary.",
//     "Act as if what you do makes a difference. It does.",
//     "No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn't trying.",
//     "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
//     "Optimism is a happiness magnet.",
//     "Believe you can and you're halfway there.",
//     "Success is not final, failure is not fatal: it is the courage to continue that counts.",
//     "It always seems impossible until it's done.",
//     "Don't watch the clock; do what it does. Keep going.",
//     "Your talent determines what you can do. Your motivation determines how much you are willing to do."
// ];
// let index = 0;
// let button = document.getElementById("click");
// button.onclick(quotes.innerText());
// quoteGenerator(){
//     document.getElementById("button");
//    for(i=0;i>=10;i++){
//     const array = document.getElementsById("result").innerText(array);
    
//    }
// }





const quotes = [
    "The only place where success comes before work is in the dictionary.",
    "Act as if what you do makes a difference. It does.",
    "No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn't trying.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Optimism is a happiness magnet.",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "It always seems impossible until it's done.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your talent determines what you can do. Your motivation determines how much you are willing to do."
];

function quoteGenerator() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    const result = document.getElementById("result");

    result.innerText = quotes[randomIndex];

}