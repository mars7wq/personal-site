// variable
var _isOpen = false;

// elements
const menuButton = document.getElementById("menu");
const menuSection = document.getElementById("menuSection");
const header = document.getElementById("head");
const menuBox = document.getElementById('menubox');

menuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  _isOpen = !_isOpen;

  if (_isOpen) {
    menuSection.style.opacity = 1;
    menuSection.style.transform = "scale(1)";
    menuBox.style.borderRadius = '1rem'
    header.style.position = 'fixed'
    header.style.marginBottom = '2rem';
    changeText("Kapat");
  } else {
    
          menuSection.style.opacity = 0;
          menuSection.style.transform = "scale(0)";
          menuBox.style.borderRadius = '5rem'
     changeText("Menü");
}
});


menuSection.addEventListener("click", (e) => {
     e.stopPropagation();
});


document.addEventListener("click", () => {
     if (_isOpen) {
          _isOpen = false;
          menuSection.style.opacity = 0;
          menuSection.style.transform = "scale(0)";
          menuBox.style.borderRadius = '5rem'
    changeText("Menü");
  }
});

function changeText(newText) {
  menuButton.style.transition = "transform 0.3s ease, opacity 0.3s ease";
  menuButton.style.transform = "scale(0.85)";
  menuButton.style.opacity = 0.2;

  setTimeout(() => {
    menuButton.textContent = newText;
    menuButton.style.transform = "scale(1)";
    menuButton.style.opacity = 1;
  }, 300);
}
