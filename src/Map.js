let json = {
  name: "wanmao",
  age: 18
};

//create
let map = new Map();
map.set(json, "i am");
console.log(map);
map.set("you are", json);
console.log(map);

//read
console.log(map.get(json));

//delete
map.delete(json);
console.log(map);
