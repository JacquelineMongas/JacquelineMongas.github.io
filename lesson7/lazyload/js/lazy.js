const images = documant.querySelectorAll("[data-src]");
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src){
        return;{
            
        }       
}
img.src = src;

}
    
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};
const imgObserver = new IntersectionObserver((entreies,
    imgObserver) => {
        entreies.forEach(entry =>{
            if (!entry.isIntersecting){
                return;
            } else{
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })

}, imgOptions);

images.forEach(images =>{
    imgObserver.observe(image);
});
