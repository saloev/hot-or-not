import Vue from "vue";
import Vuex from "vuex";

import api from "@/utils/FetchData";

// if API imagaes not word use this images
import images from "@/data/images.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photoList: [
    ],
  },
  getters: {
    photoList(state) {
      /* disable camelcase cause alt description is API property and we can't change it   */
      /* eslint camelcase: "off" */
      return state.photoList.map(
        ({ id, urls: { regular }, alt_description }) => ({
          id, src: regular, alt: alt_description,
        }),
      );
    },
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async fetchPhotoList({ commit, state }, { gender, page }) {
      const setNewPhotos = (photos) => {
        const newPhotos = [...state.photoList, ...photos];
        commit("setState", { key: "photoList", value: newPhotos });
      };

      try {
        const photos = await api.photos(gender, page);
        setNewPhotos(photos.results);
        return photos.results;
      } catch (e) {
        console.error(e);

        const savedImages = JSON.parse(images);
        setNewPhotos(savedImages);
        return savedImages;
      }
    },
  },
});
