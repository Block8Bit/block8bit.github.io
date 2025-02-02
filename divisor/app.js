function calcular() {
  let salario1 = parseFloat(document.querySelector("#salario1").value);
  let salario2 = parseFloat(document.querySelector("#salario2").value);
  const salarioTotal = salario1 + salario2;
  let conta = parseFloat(document.querySelector("#conta").value);
  if (
    isNaN(salario1) ||
    isNaN(salario2) ||
    isNaN(conta) ||
    salario1 <= 0 ||
    salario2 <= 0 ||
    conta <= 0
  ) {
    let mensagem = document.querySelector("h2");
    mensagem.innerHTML = `Insira valores válidos!`;
  } else {
    let pagamento1 = Math.round((salario1 / salarioTotal) * conta * 100) / 100;
    let pagamento2 = Math.round((salario2 / salarioTotal) * conta * 100) / 100;

    let mensagem = document.querySelector("h2");
    mensagem.innerHTML = `A primeira pessoa paga <span class="numero">R$${pagamento1}</span> e a segunda paga <span class="numero">R$${pagamento2}</span>.`;
  }
}
