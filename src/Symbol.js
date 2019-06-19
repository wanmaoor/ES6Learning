// Symbol
let s = Symbol();
console.log("s的类型:", typeof s);

let s1 = Symbol("wanmao");
console.log("s1:", s1);
console.log("s1.toString():", s1.toString());

//application nodejs用的挺多
//当一个对象里的几个属性需要打印出来, 但是又不想全部打印出来
//可以把它变成Symbol使其不可被迭代器迭代

let person = { name: "wanmao", age: 18 };
let gender = Symbol();
person[gender] = "male";
for (const item in person) {
  if (person.hasOwnProperty(item)) {
    const element = person[item];
    console.log(`${item}:`, element);
  }
}
console.log("性别:", person[gender]); //单独打印symbol gender
