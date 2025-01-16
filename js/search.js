const pages = [
    { name: "Trang chủ", url: "index.html" },
    { name: "Về chúng tôi", url: "about_us.html" },
    { name: "Hướng dẫn", url: "guide.html" },
    { name: "Demo", url: "demo_game.html" },
    { name: "Diễn đàn", url: "forum.html" },
    { name: "Liên hệ", url: "contact.html" },
    { name: "Giới thiệu", url: "introduction.html" },
    { name: "Tất cả các trang", url: "all_page.html" },
    { name: "Hướng dẫn kiểm soát tài nguyên", url: "guide/guide_1.html" }
];

const searchBox = document.getElementById('search-box');
const suggestions = document.getElementById('suggestions');

searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    suggestions.innerHTML = '';
    if (query) {
        const filteredPages = pages.filter(page => page.name.toLowerCase().includes(query));
        filteredPages.forEach(page => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = page.name;
            suggestionItem.addEventListener('click', () => {
                window.location.href = page.url;
            });
            suggestions.appendChild(suggestionItem);
        });
        suggestions.style.display = filteredPages.length > 0 ? 'block' : 'none';
    } else {
        suggestions.style.display = 'none';
    }
});

document.addEventListener('click', (e) => {
    if (!searchBox.contains(e.target) && !suggestions.contains(e.target)) {
        suggestions.style.display = 'none';
    }
});
