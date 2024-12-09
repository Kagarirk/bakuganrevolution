const newsData = [
    {
        id: 'news-1',
        title: 'Exciting updates about our games',
        image: 'https://via.placeholder.com/800x400',
        content: 'Details about the new exciting updates.',
        date: '01/01/2024'
    },
    {
        id: 'news-2',
        title: 'Upcoming features and releases',
        image: 'https://via.placeholder.com/800x400',
        content: 'Details about upcoming features and releases.',
        date: '02/01/2024'
    },
    {
        id: 'news-3',
        title: 'Community highlights and events',
        image: 'https://via.placeholder.com/800x400',
        content: 'Details about community highlights and upcoming events.',
        date: '03/01/2024'
    },
    {
        id: 'news-4',
        title: 'Upcoming features and releases',
        image: 'https://via.placeholder.com/800x400',
        content: 'Details about upcoming features and releases.',
        date: '02/01/2024'
    },
];

function renderNews(newsArray) {
    const newsContainer = document.getElementById('news-cards');
    newsContainer.innerHTML = '';  // Очищаємо контейнер перед додаванням новин

    newsArray.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        newsCard.id = news.id;
        newsCard.onclick = () => openNewsModal(news.id);

        const newsImage = document.createElement('img');
        newsImage.src = news.image;
        newsImage.alt = 'News Image';

        const newsTitle = document.createElement('p');
        newsTitle.textContent = news.title;

        newsCard.appendChild(newsImage);
        newsCard.appendChild(newsTitle);

        newsContainer.appendChild(newsCard);
    });
}

// Функція для фільтрації новин
function filterNews() {
    const filterText = document.getElementById('news-filter').value.toLowerCase();
    const filteredNews = newsData.filter(news => 
        news.title.toLowerCase().includes(filterText) || 
        news.content.toLowerCase().includes(filterText)
    );
    renderNews(filteredNews);
}

// Відкриття модального вікна
function openNewsModal(newsId) {
    const news = newsData.find(item => item.id === newsId);
    if (news) {
        document.getElementById('modal-title').textContent = news.title;
        document.getElementById('modal-image').src = news.image;
        document.getElementById('modal-content').textContent = news.content;
        document.getElementById('modal-date').textContent = `Date: ${news.date}`;
        document.getElementById('news-modal').style.display = 'flex';
    } else {
        console.error(`No news found for ID: ${newsId}`);
    }
}

// Закриття модального вікна
function closeModal() {
    document.getElementById('news-modal').style.display = 'none';
}

// Спочатку відображаємо всі новини
renderNews(newsData);
