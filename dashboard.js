document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const hamburgerBtn = document.getElementById('hamburgerBtn');

  let isOpen = false;

  function toggleSidebar() {
    isOpen = !isOpen;
    if (isOpen) {
      sidebar.classList.add('sidebar--visible');
      hamburgerBtn.textContent = 'X';
    } else {
      sidebar.classList.remove('sidebar--visible');
      hamburgerBtn.textContent = '≡';
    }
  }

  hamburgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSidebar();
  });

  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && isOpen) {
      toggleSidebar();
    }
  });
});
