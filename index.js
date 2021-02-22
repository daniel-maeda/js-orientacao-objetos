import { question } from "readline-sync";
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const clientes = new Array(3);
// clientes.forEach(cliente =>{
//     let nome = question("Qual e' o seu nome? ");
//     let cpf = question("Qual e' o seu cpf? ");
//     cliente = new Cliente(nome, cpf);
//     console.log(cliente);
// });


for (let i = 0; i < clientes.length; i++) {
        let nome = question("Qual e' o seu nome? ");
        let cpf = question("Qual e' o seu cpf? ");
        clientes[i] = new Cliente(nome, cpf);
        console.log(clientes[i]);
}
    
console.log(clientes);


//const cliente2 = new Cliente("Alice", 88822233309);


// const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
// contaCorrenteRicardo.depositar(500);
// contaCorrenteRicardo.sacar(100);

// const conta2 = new ContaCorrente(102, cliente2);

// let valor = 200;
// contaCorrenteRicardo.tranferir(valor, conta2);

// console.log(contaCorrenteRicardo);
