// Manejo del menú hamburguesa para móviles
const btnHamburger = document.getElementById('btnHamburger');
const navMenu = document.getElementById('navMenu');

if (btnHamburger && navMenu) {
  btnHamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el recargo de la página
    
    // Aquí podrías agregar validaciones extra si lo deseas
    
    // Mensaje de éxito
    console.log("Formulario enviado exitosamente.");
    alert("¡Gracias por escribirnos! Hemos recibido tu mensaje.");
    
    // Limpiar el formulario
    contactForm.reset();
  });
}