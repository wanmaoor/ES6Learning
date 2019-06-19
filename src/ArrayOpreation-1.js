// json 数组格式
let json = {
  "0": "a",
  "1": "b",
  "2": "c",
  length: 3
};

// 将json数组格式转换为数组
let arr = Array.from(json);
console.log(arr);

// Array.of()
let arr1 = Array.of(3, 4, 5, 6, 7, 8, 9);
console.log(arr1);

// find()
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(arr2.find((ele, index) => index > 4)); //只会返回一个结果, which刚刚符合条件
