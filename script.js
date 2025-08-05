const showMoreBtn = document.getElementById('show-more-btn')
const moreContentWrapper = document.getElementsByClassName('more-content-wrapper');


showMoreBtn.addEventListener("click", () => {
    moreContentWrapper[0].classList.toggle('expand-content')
    showMoreBtn.classList.toggle('rotate-arrow')
})