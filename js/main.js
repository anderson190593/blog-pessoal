document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de alternância de tema
    const themeToggleButton = document.getElementById('theme-toggle');

    // Função para definir o tema
    const setTheme = (isDark) => {
        if (isDark) {
            document.body.classList.add('dark-mode');
            themeToggleButton.innerHTML = '<i class="bi bi-sun-fill"></i>';
        } else {
            document.body.classList.remove('dark-mode');
            themeToggleButton.innerHTML = '<i class="bi bi-moon-fill"></i>';
        }
    };

    // Verifica a preferência do usuário no armazenamento local
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        setTheme(true);
    } else {
        setTheme(false);
    }

    // Adiciona o evento de clique no botão
    themeToggleButton.addEventListener('click', () => {
        // Alterna a classe 'dark-mode'
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        setTheme(!isCurrentlyDark);

        // Salva a preferência no armazenamento local
        if (isCurrentlyDark) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
});