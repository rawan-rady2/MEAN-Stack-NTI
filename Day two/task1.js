
function add (arr){
for(let i=0;i<arr.length;i++){
if(typeof arr[i]!== "number"|| isNaN(arr[i]))
  return  error;
}
let sum=0;
for(let key of arr){
    sum+=key;
}
return sum;
}
let arr=[1,2,3]
let arr2=["1",2,3]
console.log(add(arr));
console.log(add(arr2));




