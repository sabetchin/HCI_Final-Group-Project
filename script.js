// Add event listener to each menu link
document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetPage = this.getAttribute('data-page');
    document.querySelectorAll('.page').forEach(page => {
      page.style.display = 'none';
    });
    document.getElementById(targetPage).style.display = 'block';
  });
});

// Get menu button element
const menubtn = document.getElementById("menu-btn");

// Add event listener to menu button
menubtn.addEventListener("click", () => {
  // Get header element
  const header = document.querySelector("header");
  header.classList.toggle("show-mobile-menu");
});

// Get close menu button element
const closeMenuBtn = document.getElementById("close-menu-btn");

// Add event listener to close menu button
closeMenuBtn.addEventListener("click", () => {
  menubtn.click();
});
