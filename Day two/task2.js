let str =prompt("enter your string");
if(str==null||!isNaN(str)){alert("Not valid input");}
else{
let x=prompt("doy you want to consider case ?").toLowerCase();
if(x=="no"){
    str=str.toLowerCase();
}
let strrev = "";
for (let i = str.length - 1; i >= 0; i--) {
    strrev += str[i];
}
if(str==strrev){
    alert("The string is a palindrome");
}
else{
    alert("The string is NOT a palindrome");
}
}