const form = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const themeToggle = document.querySelector("#theme-toggle");

const fields = {
    name: {
        input: document.querySelector("#name"),
        error: document.querySelector("#name-error"),
    },
    email: {
        input: document.querySelector("#email"),
        error: document.querySelector("#email-error"),
    },
    message: {
        input: document.querySelector("#message"),
        error: document.querySelector("#message-error"),
    },
};

function setError(field, message) {
    field.input.setAttribute("aria-invalid", "true");
    field.error.textContent = message;
}

function clearError(field) {
    field.input.removeAttribute("aria-invalid");
    field.error.textContent = "";
}

function validateForm() {
    let isValid = true;

    Object.values(fields).forEach(clearError);

    const name = fields.name.input.value.trim();
    const email = fields.email.input.value.trim();
    const message = fields.message.input.value.trim();

    if (name.length < 3) {
        setError(fields.name, "Digite seu nome completo.");
        isValid = false;
    }

    if (!email) {
        setError(fields.email, "Digite seu e-mail.");
        isValid = false;
    } else if (!fields.email.input.validity.valid) {
        setError(fields.email, "Digite um e-mail válido.");
        isValid = false;
    }

    if (message.length < 10) {
        setError(fields.message, "A mensagem deve ter pelo menos 10 caracteres.");
        isValid = false;
    }

    return isValid;
}

if (form && formStatus && Object.values(fields).every(({ input, error }) => input && error)) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        formStatus.textContent = "";
        formStatus.className = "form-status";

        if (!validateForm()) {
            formStatus.textContent = "Revise os campos destacados.";
            formStatus.classList.add("error");
            form.querySelector('[aria-invalid="true"]')?.focus();
            return;
        }

        formStatus.textContent = "Mensagem enviada com sucesso! Em breve entraremos em contato.";
        formStatus.classList.add("success");
        form.reset();
    });

    Object.values(fields).forEach((field) => {
        field.input.addEventListener("input", () => clearError(field));
    });
}

function closeMenu() {
    if (!menuToggle || !navigation) return;

    menuToggle.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    navigation.classList.remove("is-open");
}

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.classList.toggle("is-open", !isOpen);
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
        navigation.classList.toggle("is-open", !isOpen);
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 800) closeMenu();
    });
}

function setTheme(isDark) {
    document.body.classList.toggle("dark-theme", isDark);

    if (themeToggle) {
        themeToggle.setAttribute("aria-pressed", String(isDark));
        themeToggle.setAttribute("aria-label", isDark ? "Ativar modo claro" : "Ativar modo escuro");
        themeToggle.querySelector(".theme-toggle__icon").textContent = isDark ? "☀" : "☾";
    }

    try {
        localStorage.setItem("solare-theme", isDark ? "dark" : "light");
    } catch {
        // O tema continua funcional quando o armazenamento não está disponível.
    }
}

if (themeToggle) {
    try {
        setTheme(localStorage.getItem("solare-theme") === "dark");
    } catch {
        setTheme(false);
    }

    themeToggle.addEventListener("click", () => {
        setTheme(!document.body.classList.contains("dark-theme"));
    });
}
