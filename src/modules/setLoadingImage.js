import image from '../images/loading.svg';

const setLoadingImage = () => {
  document.querySelectorAll('.moovie-item-picture').forEach((item) => {
    const loadingImage = new Image(image);
    loadingImage.src = image;
    loadingImage.classList.add('moovie-item-image');
    loadingImage.classList.add('rotate');
    item.appendChild(loadingImage);
  });
};

export default setLoadingImage;