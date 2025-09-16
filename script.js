document.addEventListener('DOMContentLoaded', () => {
    // Código existente para animaciones de botones y formularios...

    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseover', () => {
            ctaButton.style.transform = 'scale(1.1)';
        });
        ctaButton.addEventListener('mouseout', () => {
            ctaButton.style.transform = 'scale(1)';
        });
    }

    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;

            if (name && email && password) {
                alert('¡Registro exitoso! Te contactaremos pronto.');
                registerForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('¡Mensaje enviado! Gracias por contactarnos.');
                contactForm.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }

    // Nuevo código para el menú de hamburguesa
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('is-active');
            menuToggle.classList.toggle('is-active');
        });

        // Ocultar el menú al hacer clic en un enlace (para mejor UX en móviles)
        const navLinksList = navLinks.querySelectorAll('a');
        navLinksList.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('is-active');
                menuToggle.classList.remove('is-active');
            });
        });
    }
});