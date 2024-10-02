// Seleção dos elementos do DOM
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const registerCheckbox = document.querySelector("#termsCheckbox");
const registerButton = document.getElementById("registerButton");
const errorMessage = document.getElementById("error-message");

// Alternar entre as telas de login e cadastro
showRegister.addEventListener("click", () => {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
});

showLogin.addEventListener("click", () => {
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
});

// Habilitar o botão de cadastro apenas se a checkbox estiver marcada
registerCheckbox.addEventListener("change", () => {
  if (registerCheckbox.checked) {
    registerButton.disabled = false;
    errorMessage.style.display = "none";
  } else {
    registerButton.disabled = true;
  }
});

document
  .getElementById("registerFormForm")
  .addEventListener("submit", (event) => {
    if (!registerCheckbox.checked) {
      event.preventDefault();
      errorMessage.style.display = "block";
    }
  });

const colorChangingButtons = document.querySelectorAll(".color-changing");
const colors = ["#f547ac", "#7a42f5", "#b93ef2", "#d252d8"];

colorChangingButtons.forEach((button) => {
  let currentColorIndex = 0;

  button.addEventListener("mouseover", () => {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[currentColorIndex];
  });

  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#ffff";
  });
});

// Cadastro de usuarioss
function cadastrarUsuarios() {
  // Captura os valores dos inputs
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const senhaR = document.getElementById('senhaR').value;

  // Declare a variável Usuarios aqui
  let Usuarios;

  if (senha === senhaR) {
    // Cria o objeto com os dados
    Usuarios = {
      nome: nome,
      email: email,
      senha: senha,
    };

    // Faz a solicitação POST para o backend
    fetch('http://localhost:3000/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Usuarios)
    })
      .then(response => response.json())
      .then(usuarios => {
        console.log('usuários cadastrados com sucesso:', usuarios);
        window.location.href = "index.html";
      })
      .catch(error => {
        alert('Erro ao cadastrar');
      });
  } else {
    alert("Senhas estão diferentes");
  }
}
