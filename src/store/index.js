import Vue from "vue";
import Vuex from "vuex";

import api from "@/utils/FetchData";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedPhotos: [],
  },
  mutations: {
    setState(state, payload) {
      Object.keys(payload).forEach((key) => {
        Vue.set(state, key, payload[key]);
      });
    },
  },
  actions: {
    fetchPhotoList({ commit, state }, { gender, page }) {
      return api.location()
        .then(({ city }) => api.photos(city, gender, page).then((res) => {
          const newPhotos = [...state.loadedPhotos];
          commit("setState", { loadedPhotos: newPhotos });
          return res;
        }))
        .catch((e) => {
          console.error(e);
        });
    },
  },
});
