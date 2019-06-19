// Binary statement
let binary = 0b010101;
console.log(binary);

// 八进制
let octal = 0o666;
console.log(octal);

// 数字判断
let a = 1 / 3;
// 整数?
console.log(`${a}是整数吗? ${Number.isInteger(a)}`);

// js整数数字取值范围
// -Math.pow(2, 53) - 1 <= x <= Math.pow(2, 53) - 1
// ES6已经定义好了最大(小)安全整数, 直接使用即可
console.log("最大安全整数: ", Number.MAX_SAFE_INTEGER);
console.log("最小安全整数: ", Number.MIN_SAFE_INTEGER);

// 判断安全数
console.log(
  "最大安全数+1是安全数吗?",
  Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)
);
