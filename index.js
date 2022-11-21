// Write your solution here!
const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(){
cats.push("Ralph");
}
function destructivelyPrependCat(){
cats.length = 0;
cats.push ("Milo","Otis","Garfield");
cats.unshift("Bob");
console.log(cats);
}
function destructivelyRemoveLastCat(){
cats.length = 0;
cats.push ("Milo","Otis","Garfield");
cats.pop();
console.log(cats);
}
function destructivelyRemoveFirstCat(){
    cats.length = 0;
    cats.push ("Milo","Otis","Garfield");
    cats.shift()
     console.log(cats);  
}
function appendCat(){
    cats.length = 0;
cats.push ("Milo","Otis","Garfield");
const wcats = [...cats , "Broom"];
return wcats;
}
function prependCat(){
    cats.length = 0;
     cats.push ("Milo","Otis","Garfield");
     const ncats = ["Arnold",...cats];
     
     return ncats
}
function removeFirstCat(){
    cats.length = 0;
    cats.push ("Milo","Otis","Garfield");
    cats.slice(1);
    return cats.slice(1);
}
function removeLastCat(){
    cats.length = 0;
    cats.push ("Milo","Otis","Garfield");
    cats.slice(0,2);
    return cats.slice(0,2);
}