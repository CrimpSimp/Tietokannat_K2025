function checkStrForPalindorme(string) {
    const str = string.toLowerCase().trim();
    const reversedStr = str.split("").reverse().join("");
  
    return str === reversedStr;
  }
  
  string1 = "Saippuakauppias";
  string2 = "Hullunmylly";

  checkStrForPalindorme(string1);
  if(checkStrForPalindorme(string1) == true){
    console.log(string1 + " is a palindrome");
  }
  else{
    console.log(string1 + " is not a palindrome");
  }

  checkStrForPalindorme(string2);
  if(checkStrForPalindorme(string2) == true){
    console.log(string2 + " is a palindrome");
  }
  else{
    console.log(string2 + " is not a palindrome");
  }