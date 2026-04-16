// Declarando variáveis:
let nome = prompt("Digite seu nome: ");
let email = prompt("Digite seu e-mail: ");
let data_nascimento = parseInt(prompt("Digite sua data de nascimento: "));
let altura = parseFloat(prompt("Digite sua altura: "));
let matricula = parseInt(prompt("Digite seu número de matrícula: "));

// Informações via concatenação:
console.log("Nome: " + nome + " ---" + " Tipo do número: " + typeof nome);
console.log("E-mail: " + email + " ---" + " Tipo do e-mail: " + typeof email);
console.log("Data de nascimento: " + data_nascimento + " ---" + " Tipo da data de nascimento: " + typeof data_nascimento);
console.log("Altura: " + altura + " ---" + " Tipo da altura: " + typeof altura);
console.log("Matrícula: " + matricula + " ---" + " Tipo da matrícula: " + typeof matricula);

// Informações via interpolação:
console.log(` Meu nome é ${nome}\n Meu e-mail é: ${email} e o tipo dele é: ${typeof email}\n Minha data de nascimento é: ${data_nascimento} e o tipo dele é: ${data_nascimento}\n Minha altura é: ${altura} e o tipo dela é: ${typeof altura}\n Meu número de matrícula é: ${matricula} e o seu tipo é: ${typeof matricula}
`);

//Alerta contendo as informações:
alert(
    "Dados coletados:\n\n" +
    "Nome: " + nome + "\n" +
    "E-mail: " + email + "\n" +
    "Data de nascimento: " + data_nascimento + "\n" +
    "Altura: " + altura + "\n" +
    "Número de matrícula: " + matricula
)

//Print dos dados na própria página:
document.write(
    "Dados coletados:\n\n" +
    "Nome: " + nome + "\n" +
    "E-mail: " + email + "\n" +
    "Data de nascimento: " + data_nascimento + "\n" +
    "Altura: " + altura + "\n" +
    "Número de matrícula: " + matricula
)