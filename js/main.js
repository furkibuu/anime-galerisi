const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = "☀️ Aydınlık Mod";
}

themeToggle.onclick = () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = "☀️ Aydınlık Mod";
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = "🌙 Karanlık Mod";
    localStorage.setItem('theme', 'light');
  }
};

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const resetFilters = document.getElementById('resetFilters');
const cards = document.querySelectorAll('.card');

function filterGallery() {
  const searchValue = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;
  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    const category = card.getAttribute('data-category');
    const matchName = name.includes(searchValue);
    const matchCategory = selectedCategory === 'all' || category === selectedCategory;

    if (matchName && matchCategory) {
      card.style.display = 'block';
      card.style.opacity = 1;
    } else {
      card.style.opacity = 0;
      setTimeout(() => {
        if (card.style.opacity == 0) card.style.display = 'none';
      }, 300);
    }
  });
}

searchInput.addEventListener('input', filterGallery);
categoryFilter.addEventListener('change', filterGallery);

resetFilters.addEventListener('click', () => {
  searchInput.value = '';
  categoryFilter.value = 'all';
  filterGallery();
});

const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImg');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.card img').forEach(img => {
  img.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImg.src = img.src;
    document.body.style.overflow = 'hidden'; 
  });
});

closeBtn.onclick = () => closePopup();
popup.onclick = e => e.target === popup && closePopup();
document.addEventListener('keydown', e => {
  if (e.key === "Escape") closePopup();
});

function closePopup() {
  popup.style.display = 'none';
  document.body.style.overflow = 'auto';
}


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
