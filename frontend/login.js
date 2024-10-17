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
  registerButton.disabled = !registerCheckbox.checked;
  errorMessage.style.display = registerCheckbox.checked ? "none" : "block";
});

// Impedir o envio do formulário de cadastro se a checkbox não estiver marcada
document
  .getElementById("registerFormForm")
  .addEventListener("submit", (event) => {
    if (!registerCheckbox.checked) {
      event.preventDefault();
      errorMessage.style.display = "block";
    } else {
      cadastrarUsuarios(event); // Chama a função para cadastrar usuários
    }
  });

// Mudança de cor dos botões
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

// Cadastro de usuários
function cadastrarUsuarios(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário

  // Captura os valores dos inputs
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senhaR = document.getElementById("senhaR").value; // Corrigido para pegar a senha do registro
  const senhaC = document.getElementById("senhaC").value;

  // Verifica se as senhas coincidem
  if (senhaR === senhaC) {
    // Cria o objeto com os dados
    const Usuarios = {
      nome: nome,
      email: email,
      senha: senhaR,
    };

    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA
    //! NÃO MEXER MAIS NESSA MERDA

    // Faz a solicitação POST para o backend
    fetch("http://localhost:3000/api/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Usuarios),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na resposta da rede");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Usuário cadastrado com sucesso:", data);
        window.location.href = "index.html"; // Redireciona após sucesso
      })
      .catch((error) => {
        alert("Erro ao cadastrar: " + error.message);
      });
  } else {
    alert("As senhas não coincidem.");
  }
}

// Olhar a senha
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("togglePassword")
    .addEventListener("click", function () {
      const senha = document.getElementById("senha");
      const type =
        senha.getAttribute("type") === "password" ? "text" : "password";
      senha.setAttribute("type", type);
      this.classList.toggle("bx-low-vision");
      this.classList.toggle("bx-show");
    });

  document
    .getElementById("togglePasswordR")
    .addEventListener("click", function () {
      const senhaR = document.getElementById("senhaR");
      const type =
        senhaR.getAttribute("type") === "password" ? "text" : "password";
      senhaR.setAttribute("type", type);
      this.classList.toggle("bx-low-vision");
      this.classList.toggle("bx-show");
    });
});

document
  .getElementById("togglePasswordC")
  .addEventListener("click", function () {
    const senhaC = document.getElementById("senhaC");
    const type =
      senhaC.getAttribute("type") === "password" ? "text" : "password";
    senhaC.setAttribute("type", type);
    this.classList.toggle("bx-low-vision");
    this.classList.toggle("bx-show");
  });

//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA
//! NÃO MEXER MAIS NESSA MERDA

// Validação da senha de cadastro
const passwordInputR = document.getElementById("senhaR");
passwordInputR.addEventListener("input", () => {
  const passwordValueR = passwordInputR.value;

  // Verifica se a senha tem pelo menos 7 caracteres
  if (passwordValueR.length < 7) {
    passwordInputR.placeholder = "Mínimo de 7 caracteres";
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(passwordValueR)) {
    // Verifica se contém pelo menos um caractere especial
    passwordInputR.placeholder = "Conter um caractere especial";
  } else {
    // Reseta o placeholder se as condições forem atendidas
    passwordInputR.placeholder = "SenhaR";
    passwordInputR.placeholder = "SenhaC";
  }
});

// ! Deixa pra mexer o backend na sala , pra tirar duvida com o prof
