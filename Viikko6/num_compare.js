var num1 = prompt("Give a number");
var num2 = prompt("Give a second number");

if(num1 < num2){
    console.log(num2 + "Is greater");
    return num2;
}
else{
    console.log(num1 + "Is greater");
    return num1;

}
