let str = prompt("enter your string");
if(str==null||!isNaN(str)){alert("Not valid input");}
else{
let count =0;
for(let i=0;i<str.length;i++){
    if(str[i]=='e'){
        count++;
    }
}
alert(`The letter 'e' appears ${count} times.`);}

