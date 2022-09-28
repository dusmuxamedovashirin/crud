
const elBtn = document.querySelector(".btn")
const elText = document.querySelector(".text") 


let make =(time , work) =>{
  return new Promise((resolve , reject)=>{
      if (true){
          setTimeout(()=>{
              resolve(work())
          },time)
      }
  })
  }
  make(1500, ()=> elText.innerHTML = ` <p style="margin-left:500px; font-size:30px; color:red;">Order accepted😇</p>`)
  .then(()=>{
      return order(()=> elText.innerHTML = ` <p  style="margin-left:150px; font-size:30px; color:pink;">Our product range includes the following: Banana,Kiwi,Strawberry,Chocolate,Vanil</p>
      <img  style="margin-left:150px;" width="900px" height="400px"width="900px" heigth="700px" src="./images/Ice-cream-cone-fruit-slice-kiwi-orange-apple-strawberry-blueberry_3840x1200.jpg" alt="">`)
  })
  .then(()=>{
      return order(1500,()=>  elText.innerHTML = ` <p style="margin-left:250px; font-size:30px; color:pink;">You choosed Strawberry😋</p>
      <img style="margin-left:250px;" width="600px" height="400px"  src="./images/food-ice-cream-strawberry-ice-wallpaper.jpg" alt="">`)
  })
  .then(()=>{
      return order(2500,()=> elText.innerHTML = `
      <p style="margin-left:250px; font-size:30px;"> Are you want sprinkles or topicks?😊
      <img src="./images/sprinkles-feature.jpg" alt="">`)
  })
  .then(()=>{
      return order(2500,()=>  elText.innerHTML = `
      <p style="font-size:30px; margin-left:300px;"> Your choice is very cool😍!`)
  })
  .then(()=>{
      return order(2500,()=> elText.innerHTML = `
      <p style="font-size:30px; margin-left:300px;">You put in a horn or in a stick🤔?</p>
      <img style="margin-left: 300px;"  src="./images/67483183-illustration-of-a-red-stick-ice-cream-strawberry-popsicle-stick-ideal-for-catalogs-informational-and.jpg"  width="250px" height="250px" alt="">
   <img src="./images/135261-new-ice-cream-background-3216x2136-notebook.jpg" width="400px" height="300px" alt="">`)
  })
  .then(()=>{
      return order(2500,()=> elText.innerHTML = `
      <p style="font-size:30px; margin-left:300px;"> Coool🤗!</p>
      <img  style="margin-left: 300px;" src="./images/135261-new-ice-cream-background-3216x2136-notebook.jpg" width="400px" height="300px" alt="">`
  )})
  .then(()=>{
      return order(2500,()=>elText.innerHTML = `
      <p style="font-size:30px; margin-left:300px;">Your order is ready😉</p>
      <img style="margin-left: 300px;"  src="./images/strawberry-ice-cream-in-waffle-cone_271825-16.jpg" width="600" height="500" alt="">`
  )})
   
  
  
  
  
  
   