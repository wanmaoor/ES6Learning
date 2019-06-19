// Spread
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2.push("new item");
console.log(arr1);
console.log(arr2);
// 扩展运算符不会改变原数组, 因为它是重新开辟了一个内存空间存放数组

// Rest
function a(first, ...arg) {
  for (const val of arg) {
    console.log(val);
  }
}

a(1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 89);
