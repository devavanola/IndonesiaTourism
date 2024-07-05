let currentIndex = 0;
const items = document.getElementsByClassName('carousel-item');

function showItem(index) {
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    items[index].classList.add('active');
}

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showItem(currentIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showItem(currentIndex);
});

// Show the first item on load
document.addEventListener('DOMContentLoaded', () => {
    showItem(currentIndex);
});

// form order
document.getElementById('orderBtn').addEventListener('click', function() {
    document.getElementById('order').classList.remove('hidden');
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
});
