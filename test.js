// function CounterFun() {
//   count = 0;
//   this.increment = () => {
//     count++;
//   };
//   this.decrement = () => {
//     count--;
//   };
//   this.print = () => {
//     console.log(count);
//   };
// }

// class CounterClass {
//   constructor() {
//     this.count = 0;
//   }
//   increment = () => {
//     this.count++;
//   };
//   decrement = () => {
//     this.count--;
//   };
//   print = () => {
//     console.log(this.count);
//   };
// }
// // let c1 = new CounterClass();
// // c1.increment();
// // c1.print();
// // c1.decrement();
// // c1.print();
// // c1.increment();
// // c1.print();

// function myFun() {
//   console.log(this);
// }
// const fun = () => {
//   const key = 2;
//   console.log(this);
// };
// // fun();

// // ;(() => {
// //   console.log("in IIFE");
// // })();
// const cb = (msg) => {
//   console.log(msg);
// };

// const a = (cb) => {
//   cb("hello");
// };
// a(cb);
// setTimeout(() => {
//   console.log("hi");
// }, 2000);

// Array.prototype.customValue = "This is custom";

// const arr = ["1", "11", "111", "1111", "11111"];
// for (let x in arr) {
//   if (arr.hasOwnProperty(x)) console.log(x);
// }

// function fun(city, country) {
//   console.log(`${this.name} is ${this.age} year old from ${city} ,${country}`);
// }

// const obj = {
//   name: "Aayush",
//   age: 21,
// };

// // fun.call(obj, "Delhi", "India");
// // fun.apply(obj, ["Delhi", "India"]);
// const newFun1 = fun.bind(obj, "Delhi");
// newFun1("India");
// Function.prototype.myBind = function (...args1) {
//   const context = this;
//   const params = args1.slice(1);
//   return function (...args2) {
//     context.apply(args1[0], [...params, ...args2]);
//   };
// };
// const newFun2 = fun.myBind(obj, "Delhi");
// newFun2("India");

//! CURRYING
// const f = (operation) => {
//   return (x) => {
//     return (y) => {
//       if (operation === "sum") return x + y;
//       if (operation === "mul") return x * y;
//       if (operation === "div") return x / y;
//       if (operation === "min") return x - y;
//     };
//   };
// };
// console.log(f("sum")(8)(4));
// console.log(f("mul")(8)(4));
// console.log(f("div")(8)(4));
// console.log(f("min")(8)(4));
// const mul = f("mul");
// const sum = f("sum");
// const min = f("min");
// const div = f("div");
// console.log(mul(4)(8));
// console.log(sum(4)(8));
// console.log(min(4)(8));
// console.log(div(4)(8));

// const fun = (x) => {
//   return (y) => {
//     if (y) return fun(x + y);
//     return x;
//   };
// };
// console.log(fun(1)(2)(3)());
// console.log(fun(1)(2)(3)(4)(5)());

//! EVENT BUBBLING & CAPTURING
// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Inside child");
//   },
//   false
// );
// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Inside parent");
//   },
//   true
// );
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Inside grandparent");
//   },
//   false
// );

//! CALLBACK
// const getBeans = (quantity, callback) => {
//   setTimeout(() => {
//     console.log(`Asked for ${quantity}g beans`);
//     console.log(`Got ${quantity}g beans`);
//     callback("black");
//   }, 1000);
// };
// const brewCoffee = (type, callback) => {
//   setTimeout(() => {
//     console.log(`Asked for ${type} coffee`);
//     console.log(`Brewing ${type} coffee`);
//     callback(["10g sugar", "2cup milk", "1 packet choco chips"]);
//   }, 2000);
// };
// const mixIngridients = (list, callback) => {
//   setTimeout(() => {
//     console.log(`Asked for ${list}`);
//     console.log(`Got ${list}`);
//     callback(4);
//   }, 3000);
// };
// const serveCoffee = (quantity) => {
//   setTimeout(() => {
//     console.log(`Asked for ${quantity} cups`);
//     console.log(`Got ${quantity} cups`);
//   }, 4000);
// };
// getBeans(954, (quantity) => {
//   brewCoffee(quantity, (list) => {
//     mixIngridients(list, (quantity) => {
//       serveCoffee(quantity);
//     });
//   });
// });

//! FUNCTION/METHOD CHAINING
// const fun = () => {
//   val = 0;
//   const add = (i) => {
//     val += i;
//     return myFun;
//   };
//   const sub = (i) => {
//     val -= i;
//     return myFun;
//   };
//   const print = () => {
//     console.log(val);
//     return myFun;
//   };
//   return { add, sub, print };
// };
// const myFun = fun();
// myFun.add(5).print().sub(2).print();

// setTimeout(() => {
//   newVal = Math.random() * 100;
// }, 2000);

//! PROMISE
// const fun = () => {
//   const pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let i = Math.ceil(Math.random() * 100);
//       if (i === 69) {
//         const msg = "WOW 69!!";
//         resolve(msg);
//       } else {
//         const err = new Error("Not 69");
//         reject(err);
//       }
//     }, 5000);
//   });
//   return pr;
// };
// fun()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message))
//   .finally(() => console.log("Promise end"));

// f1(123)
//   .then((val) => {
//     console.log(val);
//     return f2(val);
//   })
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log(e);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

//! ASYNC/AWAIT
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 30000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 60000);
// });
// const f = async () => {
//   await p1;
//   console.log("p1");
//   await p2;
//   console.log("p2");
// };
// f();

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [1, 2, 3, 4, 5];
// const arr2 = arr.map((elem, idx, arr) => elem + 10);
// console.log(arr2);

// function customForEach(callback) {
//   for (let key in this) {
//     if (this.hasOwnProperty(key)) {
//       callback(this[key], key, this);
//     }
//   }
// }
// function customMap(callback) {
//   if (this.length === 0) return undefined;
//   const ans = [];
//   for (let i = 0; i < this.length; i++) {
//     ans.push(callback(this[i], i, this));
//   }
//   return ans;
// }

// Array.prototype.customForEach = customForEach;
// Array.prototype.customMap = customMap;
// arr.customForEach1((elem, idx) => console.log(elem, idx));
// const newArr = arr.customMap((elem, idx) => elem + 10);
// console.log(newArr);
// let c = 10;
// function fun() {
//   var c = 20;
// }
// fun();
// console.log(c);

// Array.prototype.myMap = function (cb) {
//   const ans = [],
//     arr = this;
//   for (let i = 0; i < arr.length; i++) {
//     ans.push(cb(arr[i], i, this));
//   }
//   return ans;
// };
// Array.prototype.myFilter = function (cb) {
//   const ans = [],
//     arr = this;
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i, this)) ans.push(arr[i]);
//   }
//   return ans;
// };
// Array.prototype.myReduce = function (cb, initial) {
//   const arr = this;
//   let ans = initial;
//   for (let i = 0; i < arr.length; i++) {
//     ans = ans ? cb(ans, arr[i], i, this) : arr[i];
//   }
//   return ans;
// };

// const arr = [1, 2, 3, 4];
// console.log(
//   arr.myReduce((acc, curr, i, arr) => {
//     return acc + curr;
//   })
// );

for (var i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 500);
}
