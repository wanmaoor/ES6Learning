// create object and assign value to it
let name = "wanmao";
let age = 18;
let person = { name, age };
console.log(person);

// key值构建
let key = "name";
let obj = {
  [key]: "Joe"
};
console.log(obj);

// is()
let obj1 = { name: "wanmao" };
let obj2 = { name: "maowan" };
console.log(Object.is(obj1.name, obj2.name));

// assign()
let a = { a: "a" };
let b = { b: "b" };
let c = { c: "c" };

let d = Object.assign(a, b, c);
console.log(d);
