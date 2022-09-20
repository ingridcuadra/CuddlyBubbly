let dataValid = true
const getProducts = (time, task) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(dataValid){
            resolve(task)
        }else{
            reject(console.log("Error reading data"))
        }
      }, time);
    })
}

export default getProducts;
