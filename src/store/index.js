import Vue from "vue";
import Vuex from "vuex";

import api from "@/utils/FetchData";

// if API imagaes not word use this images
import images from "@/data/images.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    photoList: [],
  },
  getters: {
    photoList(state) {
      return state.photoList;
    },
  },
  mutations: {
    setState(state, { key, value }) {
      state[key] = value;
    },
  },
  actions: {
    async fetchPhotoList({ commit, state }, { gender, page, clearPrevious }) {
      const setNewPhotos = (photos) => {
        const newPhotos = clearPrevious ? photos : [...state.photoList, ...photos];
        commit("setState", { key: "photoList", value: newPhotos });
      };

      try {
        const photos = await api.photos(gender, page);
        setNewPhotos(photos.results);
        return photos.results;
      } catch (e) {
        console.error(e);

        setNewPhotos(images);
        return images;
      }
    },
  },
});
