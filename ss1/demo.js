// const arr = [1,2,3,4,5];
// for (const element of arr) {
//     console.log(element);
// }

// let names = ['John', 'Mac', 'Peter'];
// let lengths = names.map(name => name.length);

// console.log(lengths);


// const array = [1, 2, 3, 4, 5];
// array.forEach((element,index) => {
//     if(index%2==0){
//     console.log(element);
//     }
// });

// let a = (x,y) => x+y;
// console.log(a(5,6));



// const arr = [1,2,3,4,5];
// const newArr = arr.map((element,index) => {
//     return index;
// });
// console.log(newArr);
// const array = arr.map((element,index,arr) => {
//     return arr;
// });
// console.log(array);


// let a = (name) => "Hi " + name;
// console.log(a("Danny"));

// let arr = ["danny","chunky"];
// let newArr = ["jenny","franky"];
// let finalArr= [...arr,...newArr];
// console.log(finalArr);


const obj = {counter: 0};

Object.defineProperty(obj,"reset",{
    get: function(){this.counter=0;}
});

Object.defineProperty(obj,"a")