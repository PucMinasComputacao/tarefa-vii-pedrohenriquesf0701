let nome = prompt("Qual é o seu nome?");
let renda = Number(prompt("Qual é a sua renda mensal? (R$)"));

while (isNaN(renda)) {
  renda = Number(prompt("Valor inválido. Digite sua renda novamente:"));
}

let qtd = Number(prompt("Quantas despesas você vai informar? (1 a 5)"));
if (qtd < 1) qtd = 1;
if (qtd > 5) qtd = 5;

let total = 0;

for (let i = 1; i <= qtd; i++) {
  let despesa = Number(prompt("Despesa " + i + ": (R$)"));
  while (isNaN(despesa)) {
    despesa = Number(prompt("Valor inválido. Informe a Despesa " + i + " novamente:"));
  }
  total += despesa;
}

const sobra = renda - total;
let mensagem;

if (total > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else if (sobra >= renda * 0.30) {
  mensagem = "✅ Ótimo: boa margem de sobra.";
} else {
  mensagem = "🙂 Ok: dá para melhorar a sobra.";
}

const resultado =
  " Resumo do Orçamento \n" +
  "Nome: " + nome + "\n" +
  "Renda: R$ " + renda.toFixed(2) + "\n" +
  "Total de despesas: R$ " + total.toFixed(2) + "\n" +
  "Sobra: R$ " + sobra.toFixed(2) + "\n" +
  mensagem;

alert(resultado);
console.log(resultado);