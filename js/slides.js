let agendas = document.getElementsByClassName("agendas")[0]
let mates = document.getElementsByClassName("mates")[0]
let cuadernos = document.getElementsByClassName("cuadernos")[0]
let regalos = document.getElementsByClassName("regalos")[0]
let botonAgendas = document.getElementsByClassName("botonAgendas")[0]
let botonMates = document.getElementsByClassName("botonMates")[0]
let botonCuadernos = document.getElementsByClassName("botonCuadernos")[0]
let botonRegalos = document.getElementsByClassName("botonRegalos")[0]
let footer = document.getElementsByClassName('footer')[0]

botonAgendas.addEventListener("click", (e)=>{
    agendas.classList.add("slide-out-right")
    e.target.classList.add("slide-out-right")
    setTimeout(()=>{
        agendas.classList.add("none")
        e.target.classList.add("none")
    }, 1000)
})

botonMates.addEventListener("click", (e)=>{
    mates.classList.add("slide-out-left")
    e.target.classList.add("slide-out-left")
    setTimeout(()=>{
        mates.classList.add("none")
        e.target.classList.add("none")
    }, 1000)
})

botonCuadernos.addEventListener("click", (e)=>{
    cuadernos.classList.add("slide-out-right")
    e.target.classList.add('slide-out-right')
    setTimeout(()=>{
        cuadernos.classList.add("none")
        e.target.classList.add("none")
    }, 1000)
})

// botonRegalos.addEventListener("click", (e)=>{
//     regalos.classList.add("slide-out-left")
//     e.target.classList.add("slide-out-left")
// })
