document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const printButton = document.getElementById('print-btn');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
    });

    printButton.addEventListener('click', () => {
        window.print();
    });
});
