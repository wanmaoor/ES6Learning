// ES6 数组解构赋值
let [a, b, c] = [1,2,3]
let [x, [m,n], y] = ['x', ['m', 'n'], 'y']
console.log(a)
console.log(b)
console.log(c)
console.log(x)
console.log(m)
console.log(n)
console.log(y)

// ES6 对象解构赋值
  // 一般形式
  let {foo, bar} = {bar: 'wan', foo: 'mao'} // 顺序无关
  console.log(foo)
  console.log(bar)

  // 带有对象默认值
  let {name='Default name isJoe', age} = {age: 18, undefined}
  console.log(name)

  //声明和赋值分开的写法
  let divide
  ({divide} = {divide: 'plus parenthess'})
  console.log(divide)

  //Tip: 尽量使用单引号, 压缩时比双引号更快, 体积更小
