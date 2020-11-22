import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 0,
        name: "Limited Edition Charlie XCX Book",
        image:
          "https://i.ibb.co/jzfnNYH/Whats-App-Image-2020-11-21-at-19-18-17-1.jpg",
        price: 150
      },

      {
        id: 1,
        name: "Rare Brockhampton Ginger Album Promo CD ",
        image:
          "https://i.ibb.co/h2xPJzK/Whats-App-Image-2020-11-21-at-19-18-17-2.jpg",
        price: 100
      },

      {
        id: 2,
        name: "Vintage Helmut Lang Raw Denim Jacket",
        image:
          "https://i.ibb.co/x7X27Mn/Whats-App-Image-2020-11-21-at-19-18-17-3.jpg",
        price: 175
      },

      {
        id: 3,
        name: "Rare Italian Charizard Pokémon Card",
        image:
          "https://i.ibb.co/bQyMK7W/Whats-App-Image-2020-11-21-at-19-18-17.jpg",
        price: 200
      }
    ],

    StoreCart: []
  },
  getters: {
    products: state => state.products,
    StoreCart: state => state.StoreCart
  },
  mutations: {
    ADD_Item(state, id) {
      state.StoreCart.push(id);
    },

    REMOVE_Item(state, index) {
      state.StoreCart.splice(index, 1);
    }
  },
  actions: {
    addItem(context, id) {
      context.commit("ADD_Item", id);
    },

    removeItem(context, index) {
      context.commit("REMOVE_Item", index);
    }
  },
  modules: {}
});
