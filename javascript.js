// 1 - criando uma função 

function minhaFuncao() {
    console.log("testando")
}
minhaFuncao()
minhaFuncao()

const minhaFuncaoEmVariavel = function () {
    console.log("função em variavel")
}

minhaFuncaoEmVariavel()
minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`imprimindo :${txt}`)
}

funcaoComParametro("imprimindo alguma coisa")
funcaoComParametro("outra função")

// 2 -  return

const a = 10
const b = 20
const c = 30
const d = 40
const e = 50

function soma(n1, n2) {
    return n1 + n2
}
const resultado = soma(a, c)
console.log(resultado)
console.log(soma(a, e))

// 3 - escopo das funções 
const y = 15

function testandoescopo() {
    const y = 20
    console.log(`Y dentro da função tem o valor de :${y}`)

}
testandoescopo()

console.log(`Y fora da função tem o valor de: ${y}`)

testandoescopo()

// 4 - escopo aninhado 
let m = 10

function escopoaninhado() {
    let m = 20

    if (true) {
        let m = 30

        if (true) {
            let m = 40
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}
escopoaninhado()
console.log(m)
 
// 5 - arrow function
 const testeArrow = () =>{
    console.log("está é uma arrow function")
 }
testeArrow()
const ParouImpar = (n) =>{
    if( n % 2=== 0 ){
        console.log ("esse numero é par ")
        return
    }
    else ( n % 2 != 0);{
        console.log( "esse numero é impar" )
    }
}

ParouImpar (5)
ParouImpar (2)

// 6 - mais sobre arrow function

const raizQuadrada = (x) => x * x

console.log (raizQuadrada(5))
console.log (raizQuadrada(12))
console.log (raizQuadrada(8))

//  7 - parametro opcional 

const multiplicacao = function (m , n){
    if (n === undefined){
        return m * 2
    }
    else{
            return n * m
    }
    
}

console.log(multiplicacao(5))
console.log(multiplicacao(5, 9))

const greeting = (nomee) =>{
    if(!nomee){
        console.log("ola")
        return
    }
    console.log(`ola ${nomee}`)
    return
}

 greeting( "guilherme")
greeting()