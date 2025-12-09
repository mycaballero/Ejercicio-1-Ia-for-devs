# Promt inicial

### Miguel
    Eres un desarrollador senior experto en HTML, CSS, Javascript y promt enginering.

    Vamos a crear un promt para lograr que una IA. modifique un formulario hecho en html y javascript cuyos campos deben ser validados.



    a la IA se le agregara como contexto tanto el index.html con el formulario como el script.js donde agregará las validaciones.



    Primero me vas a hacer las preguntas queconsideres pertinentes para garantizar un promt completo y que la IA pueda entender satisfactoriamente.



    Debes decirle que los campos deben tener los siguientes parametros:

    1.  **Nombre de Usuario:** Obligatorio. Debe tener **al menos 5 caracteres**.

    2.  **Email:** Obligatorio. Debe tener un **formato de email válido** (ej. `nombre@dominio.com`).

    3.  **Contraseña:** Obligatoria. Debe tener **al menos 8 caracteres** y contener **una letra mayúscula y un número**.



    El formato de entrega debe ser markdown. 

### GEMINI
    ¡Hola! Como desarrollador senior y especialista en Prompt Engineering, entiendo perfectamente lo que necesitas. Para que el modelo de IA genere un código preciso, robusto y limpio, necesitamos eliminar cualquier ambigüedad.

    Ya he registrado los requisitos de validación lógica que mencionaste (usuario, email y contraseña). Sin embargo, para construir el prompt definitivo, necesito que me aclares los siguientes puntos técnicos y de UX (Experiencia de Usuario):

    1. Comportamiento Visual (Feedback al Usuario)
    ¿Cómo quieres que se muestren los errores?

    A) ¿Usando alert() del navegador? (No recomendado para UX profesional).

    B) ¿Insertando texto debajo de cada input en el HTML?

    C) ¿Cambiando el color del borde del input (por ejemplo, a rojo)?

    D) ¿Una combinación de B y C?

    2. Momento de la Validación (Trigger)
    ¿Cuándo se debe ejecutar la validación?

    A) Solo al presionar el botón de "Enviar" (Submit).

    B) En tiempo real mientras el usuario escribe (input event).

    C) Cuando el usuario termina de escribir y sale del campo (blur event).

    3. Estructura y Estilos (CSS)
    ¿La IA puede proponer o asumir clases de CSS (ej. .error, .success, .hidden) para manipular los estilos, o debe usar estilos en línea (style.color = 'red')?

    ¿Podemos modificar el HTML para agregar contenedores para los mensajes de error (ej. <span id="error-email"></span>) o la IA debe crearlos dinámicamente con document.createElement?

    4. Acción de Éxito
    Si todo el formulario es válido, ¿qué debe suceder?

    A) Se envía el formulario normalmente (form.submit()).

    B) Se previene el envío (e.preventDefault()), se muestra un mensaje de "Éxito" en consola o pantalla, y se limpian los campos.

    5. Enfoque Técnico
    ¿Prefieres que la IA utilice atributos nativos de HTML5 (required, type="email", pattern) como primera barrera, o quieres que toda la validación recaiga exclusivamente en Javascript?

    Una vez respondas estas preguntas (o me indiques que decida yo las mejores prácticas por ti), redactaré el prompt maestro optimizado. ¿Cómo procedemos?

### Miguel
    1. D, 
    2. A, 
    3. la IA no debe asumir clases CSS porque no las hay. debe usar estilos en línea. Si puede modificar el html utilizando las mejores práctisas pero sin uso de librerías.
    4. B.
    5. Toda la validación recaiga en en JS.

#### GEMINI
    Excelente. Con tus respuestas claras, tengo todo lo necesario para construir un prompt maestro.

    He diseñado este prompt utilizando una técnica llamada "Chain of Thought" (Cadena de Pensamiento) combinada con Restricciones Explícitas. Esto obliga a la IA a seguir tus reglas de estilo (inline css) y lógica (JS puro) sin desviarse hacia frameworks o soluciones perezosas.

    Aquí tienes el prompt listo para copiar y pegar.

    Tu Prompt Optimizado
    Copia todo el bloque de código a continuación y pégaselo a la IA (ChatGPT, Claude, Gemini, etc.), asegurándote de pegar tu código donde indican los corchetes [PEGAR CÓDIGO...].

## Promt propuesto por la IA inicial:

# ROL
Actúa como un Desarrollador Front-End Senior experto en JavaScript Vainilla (sin frameworks) y manipulación del DOM. Tu objetivo es refactorizar un formulario existente para agregar validaciones robustas y feedback visual.

# CONTEXTO
Te proporcionaré dos archivos: un `index.html` (el formulario) y un `script.js` (actualmente vacío o básico). Necesito que modifiques el HTML siguiendo las mejores prácticas semánticas y escribas la lógica completa en JavaScript.

# REQUERIMIENTOS DE VALIDACIÓN
Debes aplicar las siguientes reglas de negocio estrictas. La validación debe ser **exclusivamente en JavaScript** (no confíes solo en atributos HTML5 como 'required').

1. **Nombre de Usuario:** Obligatorio. Longitud mínima de **5 caracteres**.
2. **Email:** Obligatorio. Debe cumplir con un formato de correo válido (Regex estándar).
3. **Contraseña:** Obligatoria. Longitud mínima de **8 caracteres**, debe incluir al menos **una letra mayúscula** y **un número**.

# COMPORTAMIENTO Y UX (Experiencia de Usuario)
1. **Trigger (Disparador):** La validación debe ejecutarse únicamente cuando el usuario presiona el botón **"Enviar"** (evento `submit`), no mientras escribe.
2. **Feedback Visual (Errores):**
   - NO asumas que existen clases CSS (como .error o .hidden).
   - Debes modificar el HTML para inyectar elementos contenedores (ej. `<small>` o `<span>`) debajo de cada input para mostrar los mensajes.
   - Si hay error: Usa **estilos en línea (`style`)** para poner el borde del input en rojo y mostrar el mensaje de texto en rojo debajo del campo.
   - Si es válido: Asegúrate de limpiar los estilos de error (volver el borde a su color original y ocultar/vaciar el mensaje de error).
3. **Acción de Éxito:**
   - Prevenir el envío por defecto del formulario (`e.preventDefault()`).
   - Si TODO el formulario es válido: Muestra un `alert` o `console.log` indicando "Formulario enviado con éxito" y resetea los campos del formulario (`form.reset()`).

# INSTRUCCIONES TÉCNICAS
- **Cero Librerías:** Todo debe ser JavaScript nativo.
- **HTML:** Puedes modificar el `index.html` para agregar IDs o estructuras necesarias para alojar los mensajes de error.
- **Código Limpio:** Usa funciones auxiliares si es necesario (ej. `showError`, `showSuccess`, `isValidEmail`) para mantener el código legible.

---

### ARCHIVO 1: index.html
[PEGA AQUÍ EL CÓDIGO DE TU INDEX.HTML]

### ARCHIVO 2: script.js
[PEGA AQUÍ EL CÓDIGO DE TU SCRIPT.JS]



# Resultado
    El promt cumplió satisfactoriamente con mis espectativas.