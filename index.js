// local reviews data 
const reviews = [
    {
    id: 1,
    name: "Ayo Ogunseinde",
    job: "UX DESIGNER",
    img: "Images/Ayo Ogunseinde.png",
    text: 
 `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam lorem ipsum repellendus, quis molestias aspernatur sit eum
   eos illum iure autem?` ,
},

{
    id: 2,
    name: "Ben Parker",
    job: "WEB DESIGNER",
    img: "Images/Ben Parker.png",
    text: 
 `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam repellendus, quis molestias aspernatur sit eum
   eos illum iure autem?` ,
},
{
    id: 3,
    name: "Ian Dooley",
    job: "SOFTWARE DEVELOPER",
    img: "Images/Ian Dooley.png",
    text: 
 `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam repellendus,ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur quis molestias aspernatur sit eum
   eos illum iure autem?` ,
},
{
    id: 4,
    name: "MICHELLE DAM",
    job: "DATA ANALYST",
    img: "Images/Michelle Dam.png",
    text: 
 `   Lorem ipsum ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur dolor sit amet consectetur ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam repellendus, quis molestias aspernatur sit eum
   eos illum iure autem?` ,
},
{
    id: 5,
    name: "Rafaella Mendes",
    job: "TECHNICAL WRITER",
    img: "Images/Rafaella Mendes.png",
    text: 
 `   Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam repellendus,dolor sit amet consectetur adipisicing elit. quis molestias aspernatur sit eum
   eos illum iure autem?`, 
},
{
   id: 6,
   name: "Aiony Haust",
   job: "WEB DEVELOPER",
   img: "Images/Aiony Haust.png",
   text: 
`   Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Nobis quisquam repellendus, quis molestias aspernatur sit eum
  eos illum iure autem? Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Nobis quisquam repellendus`, 
},

]
// select items 
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

// set starting item 
let currentItem = 0

// load initial item 
window.addEventListener("DOMContentLoaded", function(){
 showPerson(currentItem)
})

// show review/person based on item 

function showPerson(person){
   const item = reviews[person]
   img.src = item.img
   author.textContent = item.name
   job.textContent = item.job
   info.textContent = item.text
}

// show next person 
nextBtn.addEventListener("click", function(){
   currentItem++
   if (currentItem > reviews.length - 1){
      currentItem = 0
   }
   showPerson(currentItem)
})

// show previous person
prevBtn.addEventListener("click", function(){
   currentItem--
   if (currentItem > 0){
      currentItem = reviews.length - 1
   }
   showPerson(currentItem)
})

// show random person
randomBtn.addEventListener("click", function(){
   for (let i = 0; i < reviews.length; i++){
showPerson(randomPerson())
   }
})
function randomPerson(){
  
   return   Math.floor(Math.random()* reviews.length)
   
}
