document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de navegação que apontam para âncoras
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Previne o comportamento padrão do link
            e.preventDefault();

            // Pega o ID da seção para a qual o link aponta
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // Calcula a posição da seção
                const headerOffset = 70; // Altura do seu header fixo
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Rola suavemente para a posição calculada
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});