let keyString = 'a string';
let KeyObj = {};
let KeyFun = function(){

}

let myMap = new Map();

//MapName.set(key,value);
myMap.set(keyString,"value associted with a string");
myMap.set(KeyObj,'value associated with keyObj');
myMap.set(KeyFun,'value associted with keyFunc');

let size=myMap.size;
console.log(size);
let valstr = myMap.get(keyString);
console.log(valstr);
let isKeyExit = myMap.has('a string');
console.log(isKeyExit);

for(let [key,value] of myMap)
console.log(key+ " = "+ value);
console.log("------------------");

let deleteKey = myMap.delete(KeyFun);

for(let [key,value] of myMap)
console.log(key+ " = "+ value);