// 参数个数
// ES6允许我们用func.length来获取函数参数的个数, 但是!
// 参数默认赋值是不会计入在内的
function f(a, b, c = 1) {
  return a + b + c;
}
console.log(f.length); // 2

// 我还发现了一个坑, 如果遇到了默认参数, 即便后面的参数没有默认值, 它仍然会停止往后寻找
function f1(a, b = 1, c) {
  return a + b + c;
}
console.log(f1.length); // 1
