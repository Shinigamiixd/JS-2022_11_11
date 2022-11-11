let name = "LINAS"
let alga = 900

let numero1 = 3
let sign = "*"
let numero2 = 4

function welcomemsg(a){
    console.log(`Welcome back, ${a}.`)
}

function calc(num1, zenklas, num2){
    switch (zenklas){
        case "+":
            console.log(num1 + num2)
            break
        case "-":
            console.log(num1 - num2)
            break
        case "*":
            console.log(num1 * num2)
            break
        case "/":
            console.log(num1 / num2)
            break
    }
}

// calc(numero1, sign, numero2)
// welcomemsg(name);

let names = [
    "ignas",
    "linas",
    "justas",
    "marius",
    "mindaugas",
    "gabija",
    "gabriele",
    "sofija",
    "auguste",
    "emilija"]

let sk = [1,2,3,4,7,2123,123,22,51,10]

asd = [
    "lopas",
    "katu",
    "var",
    "bar",
    "lag",
    "gabriele",
    "sofija",
    "auguste",
    "emilija"
]

// console.log(names[3])
// console.log(names.length + " entries")

// names.push("monika")
// console.log(names)

// names.pop(10)
// console.log(names)

// names.splice(0, 0, "vycka")
// console.log(names)

// names.splice(0, 9)
// console.log(names)

// names.forEach((n, i)=>{console.log(i+1, n)})

// names.map(i => {console.log(i)})

// console.log(sk.filter(i => i<10))

// console.log(names.sort())

// console.log(names.concat("monika"))

// names.push("emilija", "sofija")
// console.log(names)
// console.log(names.indexOf("sofija"))
// console.log(names.lastIndexOf("sofija"))




// console.log(names)
// let n = 0
// names.forEach((i)=>{
//     if (names.indexOf(asd[n]) === -1) {
//         names.push(asd[n])
//     } 
//     else {
//         console.log(`${asd[n]} already exists.`)
//     }
//     n++
// })
// console.log(names)



// let a = [
//     ["lopas", "lala231", "lol@gmail.com"],
//     ["kazys", "kazys2", "kazzzzys@gmail.com"]
// ]
// console.log(a[0][2])


// let zmogus = {
//     nickname:"Airidas",
//     IsAdmin: true,
//     age: 19,
// }
// let gass = JSON.stringify(zmogus)
// console.log(gass)


localStorage.setItem("name", "Airidas")

console.log(localStorage.getItem("name"))