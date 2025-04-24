/*Você pode apresentar o resultado tanto no **console** quanto em um **alerta** no navegador.

1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
    
    💡 Para saber o tipo de dado você pode usar o operador `typeof`
    
4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".*/

// 1. Exibir "Hello World!" em um alerta no navegador
alert("Hello World!");

// 2. Declarar duas variáveis e exibir a soma entre elas
let num1 = 5;
let num2 = 10;
document.write("Soma: " + (num1 + num2) + "<br>");

// 3. Verificar se o valor de uma variável é um número 
let valor = 5;
if (typeof valor === "number") {
    document.write("É um número<br>");
} else {
    document.write("Não é um número<br>");
}

// 4. Verificar se o valor de uma variável é uma string
let texto = "Olá";
if (typeof texto === "string") {
    document.write("É uma string<br>");
} else {
    document.write("Não é uma string<br>");
}

// 5. Verificar se o valor de uma variável é um booleano
let booleano = true;
if (typeof booleano === "boolean") {
    document.write("É um booleano<br>");
} else {
    document.write("Não é um booleano<br>");
}

// 6. Declarar duas variáveis e exibir a subtração entre elas
let num3 = 20;
let num4 = 5;
document.write("Subtração: " + (num3 - num4) + "<br>");

// 7. Declarar duas variáveis e exibir a multiplicação entre elas
let num5 = 4;
let num6 = 3;
document.write("Multiplicação: " + (num5 * num6) + "<br>");

// 8. Declarar duas variáveis e exibir a divisão entre elas
let num7 = 20;
let num8 = 4;
document.write("Divisão: " + (num7 / num8) + "<br>");

// 9. Verificar se o valor de uma variável é um número par
let numero = 10;
if (numero % 2 === 0) {
    document.write("É um número par<br>");
} else {
    document.write("Não é um número par<br>");
}

// 10. Verificar se o valor de uma variável é um número ímpar
let numeroImpar = 7;
if (numeroImpar % 2 !== 0) {
    document.write("É um número ímpar<br>");
} else {
    document.write("Não é um número ímpar<br>");
}