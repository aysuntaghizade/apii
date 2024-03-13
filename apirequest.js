//!1
// async function getData(id){
//     await fetch(id)
//     .then((response)=> response.json())
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))
// }
// getData("https://api.escuelajs.co/api/v1/users")

//!2
// const callApi= async()=>{
//      await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// }
// callApi()

//!3
// const  Api= async()=>{
//      await fetch('https://fakestoreapi.com/products/1')
//     .then(res=>res.json())
//     .then(json=>console.log(json))
// }
// Api()

//!4
//  async function sayt(api){
//     await fetch(api)
//     .then((response)=> response.json())
//     .then((data)=>console.log(data))
//     .catch((err)=>console.log(err))
// }
// sayt('https://api.escuelajs.co/api/v1/users/id/1')

//!5
// const api=async()=>{
//     await fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
// }
// api()