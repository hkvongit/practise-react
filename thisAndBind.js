// cat={
//     speak:"meow",
//     animal:"true",
//     sound:function(){
//         console.log(this.speak)
//     }
// }
// ku=cat.sound
// let kubind=ku.bind(cat)
// console.log(kubind())

// const car={
//     color:"blur"
// }

// function ding(){
//     console.log(this.color)
// }

// ding.bind(car)()

const ma={
    x:15,
    y:22
}

// function add(){
//     console.log(this.x+this.y)
// }
// add.bind(ma)()
add=()=>{
    console.log(this.x+this.y)
}
add(ma)