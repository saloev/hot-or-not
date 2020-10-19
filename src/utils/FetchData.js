import {
  API_ACCESS_KEY_UNSPLASH,
  API_LOCATION_KEY,
  PHOTOS_PER_PAGE,
  PHOTOS_ORDER_BY,
} from "@/config";

/**
 *
 * Common fetch function
 *
 * @param {String} url
 * @returns {any}
 */
async function fetchDataAsync(url) {
  const response = await fetch(`${url}`);
  const parse = response.json();
  return parse;
}

export default {
  location() {
    const url = `https://ipinfo.io/json?token=${API_LOCATION_KEY}`;
    return fetchDataAsync(url);
  },
  photos(currnetLocation, gender, page) {
    const query = `${gender},${currnetLocation}`;
    const url = `https://api.unsplash.com/photos?page=${page}per_page=${PHOTOS_PER_PAGE}&order_by${PHOTOS_ORDER_BY}&query=${query}&client_id=${API_ACCESS_KEY_UNSPLASH}`;
    return fetchDataAsync(url);
  },
};
