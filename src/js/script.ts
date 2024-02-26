// Inicialización de EmailJS
declare var emailjs: any;

(() => {
    emailjs.init("X-OVkkpwZHqQMbHbn"); // Reemplaza "TU_USER_ID" con tu User ID de EmailJS
})();

// Agregar listener de evento al formulario
document.getElementById('pushMail')?.addEventListener('submit', function (event: Event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

    // Obtenemos los valores del formulario
    const nombre = (document.getElementById('nombre') as HTMLInputElement)?.value;
    const email = (document.getElementById('email') as HTMLInputElement)?.value;
    const mensaje = (document.getElementById('mensaje') as HTMLInputElement)?.value;

    // Enviamos el correo utilizando EmailJS
    emailjs.send("default_service", "template_5ngvm32", {
        from_name: nombre,
        reply_to: email,
        message: mensaje
      }).then(function (response: Response) {
        console.log('Correo enviado con éxito:', response);
        alert('¡El correo se ha enviado correctamente!');
      }).catch(function (error: Error) {
        console.log('Error al enviar el correo:', error);
        alert('Error al enviar el correo. Por favor, inténtalo de nuevo más tarde.');
    });
});
