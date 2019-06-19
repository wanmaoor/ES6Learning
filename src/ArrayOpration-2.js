// fill()
let arr = ["a", "b", "c"];
arr.fill("new item", 1, 2);
console.log(arr);

// array loop

// for ... of
for (const item of arr) {
  console.log(item);
}

// 在for of中获取下标
for (const item of arr.keys()) {
  console.log(item);
}

// 我全都要
for (const [index, value] of arr.entries()) {
  console.log(`${index}: ${value}`);
}
