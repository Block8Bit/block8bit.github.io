let numeroSalarios = document.querySelectorAll(
  ".container__input__salario"
).length;

function calcular() {
  let salarios = document.querySelectorAll(".container__input__salario");
  let salariosValues = [];
  let totalSalario = 0;

  salarios.forEach((input) => {
    let salario = parseFloat(input.value);
    if (isNaN(salario) || salario <= 0) {
      let mensagem = document.querySelector("h2");
      mensagem.innerHTML = `Insira valores válidos!`;
      return;
    }
    salariosValues.push(salario);
    totalSalario += salario;
  });

  if (salariosValues.length === 0) return;

  let conta = parseFloat(document.querySelector("#conta").value);

  if (isNaN(conta) || conta <= 0) {
    let mensagem = document.querySelector("h2");
    mensagem.innerHTML = `Insira um valor válido para a conta!`;
    return;
  }

  let mensagem = document.querySelector("h2");
  let result = ``;

  salariosValues.forEach((salario, index) => {
    let pagamento = Math.round((salario / totalSalario) * conta * 100) / 100;
    result += `A pessoa ${
      index + 1
    } paga <span class="numero">R$${pagamento}</span><br>`;
  });

  mensagem.innerHTML = result;
}

function adicionar() {
  let newNumber =
    document.querySelectorAll(".container__input__salario").length + 1;

  let novoInput = document.createElement("div");
  let newId = `salario${newNumber}`;

  // Create the HTML structure for the new input and the toggle button
  novoInput.innerHTML = `
    <label class="texto__paragrafo">Insira o salário da ${newNumber}ª pessoa:</label>
    <div class="container__input__toggle">
    <input type="password" min="1" class="container__input__salario added" id="${newId}" placeholder="Salário ${newNumber}">
    <button class="toggle-input" onclick="toggleInputVisibility('${newId}')">
      <i class="fa-solid fa-eye"></i>
    </button>
    </div>
  `;

  novoInput.classList.add("container__campo");

  let container = document.querySelector(".container__salarios");
  container.appendChild(novoInput);

  // Add the 'added' class with a slight delay for animation
  setTimeout(() => {
    novoInput.classList.add("added");
  }, 10);

  // Optional: If there are more than 2 inputs, show the remove button
  if (
    document.querySelectorAll(".container__input__salario").length > 2 &&
    !document.querySelector(".container__botao__remover")
  ) {
    let botaoRemover = document.createElement("button");
    botaoRemover.innerHTML = "Remover pessoa";
    botaoRemover.onclick = remover;
    botaoRemover.classList.add("container__botao__remover");
    botaoRemover.classList.add("container__botao");

    let containerBotoes = document.querySelector(".container__botoes");
    containerBotoes.appendChild(botaoRemover);
  }

  resetarNumeracao();
}

function remover() {
  let container = document.querySelector(".container__salarios");
  let addedInputs = container.querySelectorAll(".added");

  if (addedInputs.length <= 1) return;

  const lastAddedInput = addedInputs[addedInputs.length - 1];
  const lastContainerField = lastAddedInput.closest(".container__campo");

  lastContainerField.classList.add("removing");

  setTimeout(() => {
    lastContainerField.remove();
  }, 500);

  let remainingInputs = container.querySelectorAll(".added");

  if (remainingInputs.length <= 2) {
    let botaoRemover = document.querySelector(".container__botao__remover");
    if (botaoRemover) {
      botaoRemover.remove();
    }
  }
  resetarNumeracao();
}

function resetarNumeracao() {
  const inputs = document.querySelectorAll(".container__input__salario");

  inputs.forEach((input, index) => {
    const label = input.previousElementSibling;
    label.innerHTML = `Insira o salário da ${index + 1}ª pessoa:`;
    input.placeholder = `Salário ${index + 1}`;
    input.id = `salario${index + 1}`;
    const button = input.nextElementSibling;
    button.setAttribute(
      "onclick",
      `toggleInputVisibility('salario${index + 1}')`
    );
  });
}

function toggleInputVisibility(inputId) {
  let inputElement = document.getElementById(inputId);
  let button = inputElement.nextElementSibling;

  // Toggle the visibility of the input
  if (inputElement.type === "password") {
    inputElement.type = "number";
    button.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'; // Eye-slash icon for hiding
  } else {
    inputElement.type = "password";
    button.innerHTML = '<i class="fa-solid fa-eye"></i>'; // Eye icon for showing
  }
}
