 
 function calculateBMI(){
let weight =parseFloat(document.getElementById("weight").value);
 let height = parseFloat(document.getElementById("height").value);
  let bmi= weight/( height*height);
     if(bmi<18.5){
        document.getElementById("result").innerText="underweight";
}
       else if(bmi<=24.5){
            document.getElementById("result").innerText="healthy";
         
     }
      else if(bmi>24.5){
            document.getElementById("result").innerText="overweight";
         
     }
      else{
            document.getElementById("result").innerText="invalid";
         
     }
 }
 document.getElementById("weight").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("height").focus();
    }
});

