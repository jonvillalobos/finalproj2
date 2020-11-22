<template>
  <div class="products" id="products">
    <div class="container">
      <h1 class="text-center p-4">Our Products</h1>
      <div class="row">
        <div
          class="col-md-3"
          v-for="(product, id) in products"
          :key="product.id"
          :id="product.id"
        >
          <div class="card product-item">
            <img :src="product.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ "$" + product.price }}</h5>
              <p class="card-text">
                {{ product.name }}
              </p>
              <button @click="addItem(id)" class="btn btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "Products",
  data() {
    return {
      cartArray: []
    };
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }
  },
  methods: {
    addItem(id) {
      this.$store.dispatch("addItem", id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.products {
  margin-top: 7rem;
  background: #f2f2f2;
  padding-bottom: 3rem;
}
</style>
