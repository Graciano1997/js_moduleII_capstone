const tvmazeApiUrl = 'https://api.tvmaze.com/shows/';
const involvementApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/je2Vegs80G6CzuBDSZFc/';
const moovItemImage = document.querySelectorAll('.moovie-item-image');
const moovItemName = document.querySelectorAll('.item-name');
const moovId = document.querySelectorAll('.moovieId');
const moovItem = document.querySelectorAll('.moovie-item');
const btnLike = document.querySelectorAll('.like');

export {
  moovItemName,
  tvmazeApiUrl,
  moovItemImage,
  involvementApiUrl,
  moovId,
  moovItem,
  btnLike
};