// proxy 

//Get&Set

let proxy = new Proxy({name: 'wanmao'},{
  get: (target, key, property)=>{
    console.log(`GET ${key}: ${target[key]}`)
    return target[key]
  },
  set: (target, key, value, receiver) => {
    console.log(`SET: instead ${target[key]} of ${value}`)
    return target[key]=value
  }
})

console.log('Name:',proxy.name)
proxy.name = 'Brad'
console.log('Name:',proxy.name)