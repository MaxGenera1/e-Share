// alert('Hello!')


const ratingStarsList = document.querySelectorAll('.rating_star');
const ratingStarsArray = Array.prototype.slice.call(ratingStarsList);

ratingStarsArray.forEach(star =>
    star.addEventListener('click', () => {
        const { itemValue } = star.dataset;
        star.parentNode.dataset.totalValue = itemValue;
    })
);