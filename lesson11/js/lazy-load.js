const imagesToLoad = document.querySelectorAll('img[data-src]');
const officialImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                officialImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });
    imagesToLoad.forEach((images) => {
        observer.observe(images);
    });
} else {
    imagesToLoad.forEach((images) => {
        officialImages(images);
    });
}