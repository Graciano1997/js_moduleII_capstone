import { involvement_api_url, tvmaze_api_url } from "./globalVar";
const full_moov_array = [];

const displayMoov = async (id) => {
  await fetch(tvmaze_api_url + id)
    .then(response => response.json())
    .then(json => {
      full_moov_array.push(json);
      document.querySelectorAll('.moovie-item-image')[id-1].src = json.image.original;
      document.querySelectorAll('.item-name')[id-1].textContent = json.name;
    });
};

export { displayMoov, full_moov_array };