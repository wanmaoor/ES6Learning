// Set
// 主要作用是给数组去重
let setArr = new Set([1, 1, 3, 4]);
console.log("initial:", setArr);

// create
setArr.add(5);
console.log("created:", setArr);

// delete
setArr.delete(1);
console.log("deleted:", setArr);

// clear()将全部清除掉

//read
console.log("Has 3 ? read:", setArr.has(3));

//size
console.log(setArr.size);

//WeakSet
// 和set几乎一样, 但是只能使用add添加
let weakObj = new WeakSet();
let obj = { a: "a", b: "b" };
weakObj.add(obj);
console.log(weakObj);

// let setObj = new Set()
// let obj1 = {name:'wanmao'}
// setObj.add(obj1)
// let obj2 = {name: 'wanmao'}
// setObj.add(obj2)
// console.log('2 objects:', setObj)
