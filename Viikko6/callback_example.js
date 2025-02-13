//anonyymi funktio
setTimeout(function(){
    console.log("Demonstrating the callbacks anonymous");
},2000);
console.log("The application is started");


// nuolifunktio
setTimeout(()=>{
    console.log("Demonstrating the callbaks arrow");
},2000);
console.log("The application is started");