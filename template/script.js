document.addEventListener('DOMContentLoaded', () => {
    // Referencias al DOM
    const form = document.getElementById('registrationForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Referencias a los contenedores de error
    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // --- FUNCIONES UTILITARIAS DE UI ---

    /**
     * Muestra visualmente el error aplicando estilos en línea.
     * @param {HTMLElement} inputElement - El input que falló.
     * @param {HTMLElement} errorElement - El contenedor del mensaje.
     * @param {string} message - El mensaje de error.
     */
    const showError = (inputElement, errorElement, message) => {
        // Manipulación de estilos en línea (Requerimiento 2)
        inputElement.style.borderColor = 'red';
        errorElement.textContent = message;
        errorElement.style.color = 'red';
        errorElement.style.visibility = 'visible';
    };

    /**
     * Limpia los estilos de error y restaura el estado original.
     * @param {HTMLElement} inputElement 
     * @param {HTMLElement} errorElement 
     */
    const clearError = (inputElement, errorElement) => {
        // Restaurar borde original
        inputElement.style.borderColor = '#ccc';
        errorElement.textContent = '';
        errorElement.style.visibility = 'hidden';
    };

    // --- FUNCIONES DE VALIDACIÓN (Reglas de Negocio) ---

    const isValidEmail = (email) => {
        // Regex estándar para email
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const isValidPassword = (password) => {
        // Regla: Min 8 caracteres, 1 Mayúscula, 1 Número
        const hasMinLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        
        return hasMinLength && hasUpperCase && hasNumber;
    };

    // --- EVENTO PRINCIPAL ---

    form.addEventListener('submit', (e) => {
        // 1. Prevenir el envío por defecto
        e.preventDefault();

        // Bandera de estado del formulario
        let isFormValid = true;

        // 2. Validar Nombre de Usuario
        const usernameValue = usernameInput.value.trim();
        if (usernameValue === '') {
            showError(usernameInput, usernameError, 'El nombre de usuario es obligatorio.');
            isFormValid = false;
        } else if (usernameValue.length < 5) {
            showError(usernameInput, usernameError, 'Debe tener al menos 5 caracteres.');
            isFormValid = false;
        } else {
            clearError(usernameInput, usernameError);
        }

        // 3. Validar Email
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            showError(emailInput, emailError, 'El email es obligatorio.');
            isFormValid = false;
        } else if (!isValidEmail(emailValue)) {
            showError(emailInput, emailError, 'El formato del email no es válido.');
            isFormValid = false;
        } else {
            clearError(emailInput, emailError);
        }

        // 4. Validar Contraseña
        const passwordValue = passwordInput.value; // No hacemos trim() a contraseñas (los espacios pueden ser válidos)
        if (passwordValue === '') {
            showError(passwordInput, passwordError, 'La contraseña es obligatoria.');
            isFormValid = false;
        } else if (!isValidPassword(passwordValue)) {
            showError(passwordInput, passwordError, 'Mínimo 8 caracteres, una mayúscula y un número.');
            isFormValid = false;
        } else {
            clearError(passwordInput, passwordError);
        }

        // 5. Acción de Éxito
        if (isFormValid) {
            // Simular envío
            console.log('Enviando datos al servidor...', {
                username: usernameValue,
                email: emailValue
            });
            
            alert('¡Formulario enviado con éxito!');
            
            // Resetear formulario y limpiar estilos residuales si los hubiera
            form.reset();
            // Asegurarnos visualmente que todo quede limpio (opcional, por seguridad visual)
            clearError(usernameInput, usernameError);
            clearError(emailInput, emailError);
            clearError(passwordInput, passwordError);
        }
    });
});