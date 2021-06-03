//get all images on the page with data-src
const imagesToLoad = documant.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttirbute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');

    };
};

const imgOption = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

if('IntersectionObserver' in window){
    //is supported then load
    const imgObserver = new IntersectionObserver(items =>{
        items.forEach(item => {
            if(item.isIntersecting){
                loadImages(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach(img =>{
        imgObserver.observe(img);
    });

} else{ //load all images if not supported
    imagesToLoad.forEach(img =>{
        loadImages(img);
    });
}
