// criação de variaveis 
const n1 = document.querySelector(".n1")
const n2 = document.querySelector(".n2")
const somar = document.querySelector(".Somar")
const subtrair = document.querySelector(".Subtrair")
const multiplicar = document.querySelector(".Multiplicar")
const dividir = document.querySelector(".Dividir")
const resultado = document.querySelector("span")


// funcao para cada click de botao

// somar
somar.addEventListener("click", ()=>{
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
})

// subtrair
subtrair.addEventListener("click", ()=>{
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
})

// multiplicar
multiplicar.addEventListener("click", ()=>{
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)
})

// dividir
dividir.addEventListener("click", ()=>{
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)
})