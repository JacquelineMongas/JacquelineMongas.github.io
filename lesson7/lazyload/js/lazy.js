//get all images on the page with data-src
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold: 1,
    rootMargin: '0px 0px 50px 0px' 
};

if('IntersectionObserver' in window){
    //is supported then load
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) =>{
        imgObserver.observe(img);
    });

} else{ //load all images if not supported
    imagesToLoad.forEach((img) =>{
        loadImages(img);
    });
}
