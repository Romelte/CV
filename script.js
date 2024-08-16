document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');

    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        toggleButton.querySelector('.fa-moon').style.display = isDarkMode ? 'none' : 'block';
        toggleButton.querySelector('.fa-sun').style.display = isDarkMode ? 'block' : 'none';
    });
});

