
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.onclick = () => {
      document.body.classList.toggle('dark');
    };


    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const cards = document.querySelectorAll('.card');

    function filterGallery() {
      const searchValue = searchInput.value.toLowerCase();
      const selectedCategory = categoryFilter.value;
      cards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();
        const category = card.getAttribute('data-category');
        const matchName = name.includes(searchValue);
        const matchCategory = selectedCategory === 'all' || category === selectedCategory;
        card.style.display = matchName && matchCategory ? 'block' : 'none';
      });
    }

    searchInput.addEventListener('input', filterGallery);
    categoryFilter.addEventListener('change', filterGallery);

  
    const popup = document.getElementById('popup');
    const popupImg = document.getElementById('popupImg');
    const closeBtn = document.querySelector('.close');

    document.querySelectorAll('.card img').forEach(img => {
      img.addEventListener('click', () => {
        popup.style.display = 'flex';
        popupImg.src = img.src;
      });
    });

    closeBtn.onclick = () => popup.style.display = 'none';
    popup.onclick = e => e.target === popup && (popup.style.display = 'none');