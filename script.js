// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {

    const menuAberto = menu.classList.toggle("open");

    menuButton.setAttribute(
        "aria-expanded",
        menuAberto
    );

    menuButton.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

});


// Fecha o menu ao clicar em uma opção

const linksMenu = document.querySelectorAll("#menu a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "Abrir menu"
        );

    });

});


// ===============================
// FORMULÁRIO DE CONTATO
// ===============================

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

const formMessage = document.getElementById("formMessage");


form.addEventListener("submit", function (event) {

    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formMessage.textContent = "";

    let formularioValido = true;

    const nome = nameInput.value.trim();

    if (nome.length < 3) {

        nameError.textContent =
            "Digite um nome com pelo menos 3 caracteres.";

        formularioValido = false;
    }


    const email = emailInput.value.trim();

    const emailValido =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValido) {

        emailError.textContent =
            "Digite um e-mail válido.";

        formularioValido = false;
    }


    const mensagem = messageInput.value.trim();

    if (mensagem.length < 10) {

        messageError.textContent =
            "Digite uma mensagem com pelo menos 10 caracteres.";

        formularioValido = false;
    }


    if (formularioValido) {

        formMessage.textContent =
            "Mensagem enviada com sucesso! Obrigado por conhecer a ZK Luz.";

        formMessage.style.color = "#17632d";

        form.reset();

    } else {

        formMessage.textContent =
            "Verifique os campos destacados acima.";

        formMessage.style.color = "#a40000";
    }

});


// ===============================
// BOTÃO COMPRAR
// ===============================

const buyButton = document.getElementById("buyButton");

buyButton.addEventListener("click", function () {

    alert(
        "Pedido iniciado!\n\n" +
        "Produto: Lâmpada Recarregável ZK Luz\n" +
        "Valor: R$ 89,90\n\n" +
        "Pix demonstrativo:\n" +
        "zkluz@exemplo.com\n\n" +
        "Este é um sistema demonstrativo criado para um projeto escolar."
    );

});


// ===============================
// ANO DO RODAPÉ
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ===============================
// FEEDBACK AO DIGITAR
// ===============================

[nameInput, emailInput, messageInput].forEach(function (campo) {

    campo.addEventListener("input", function () {

        if (campo.value.trim() !== "") {

            campo.style.borderColor = "#17632d";

        } else {

            campo.style.borderColor = "#87968a";

        }

    });

});
