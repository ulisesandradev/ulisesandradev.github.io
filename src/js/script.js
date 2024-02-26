"use strict";
var _a;
(() => {
    emailjs.init("X-OVkkpwZHqQMbHbn"); // Reemplaza "TU_USER_ID" con tu User ID de EmailJS
})();
// Agregar listener de evento al formulario
(_a = document.getElementById('pushMail')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a, _b, _c;
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
    // Obtenemos los valores del formulario
    const nombre = (_a = document.getElementById('nombre')) === null || _a === void 0 ? void 0 : _a.value;
    const email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value;
    const mensaje = (_c = document.getElementById('mensaje')) === null || _c === void 0 ? void 0 : _c.value;
    // Enviamos el correo utilizando EmailJS
    emailjs.send("default_service", "template_5ngvm32", {
        from_name: nombre,
        reply_to: email,
        message: mensaje
    }).then(function (response) {
        console.log('Correo enviado con éxito:', response);
        alert('¡El correo se ha enviado correctamente!');
    }).catch(function (error) {
        console.log('Error al enviar el correo:', error);
        alert('Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
    });
});
