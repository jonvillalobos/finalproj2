<template>
  <div class="hello">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">JONA SHOP</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/home" class="nav-link" href="#">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" href="#"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/products" class="nav-link" href="#"
              >Products</router-link
            >
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <div class="auth">
          <button
            class="btn btn-link my-2 my-sm-0 ml-2"
            @click="$router.push({ path: 'login' })"
            type="submit"
          >
            Login
          </button>
          <button
            class="btn btn-success my-2 my-sm-0 ml-2"
            @click="$router.push({ path: 'signup' })"
            type="submit"
          >
            Sign Up
          </button>
        </div>
        <div class="cart my-2 my-lg-0">
          <button
            class="btn btn-success my-2 my-sm-0 ml-2"
            @click="showList()"
            id="show"
          >
            Cart ({{ cartCount }})
          </button>
        </div>
      </div>
    </nav>
    <div id="shopping-cart">
      <div id="shoppingList" class="shoppingBody">
        <div v-show="!showCheckout && !checkoutTime">
          <div class="container" v-for="(item, index) in cart" :key="index">
            <div class="flex">
              <div class="">
                <div class="">{{ item.name }}</div>
                <div class="">{{ "$" + item.price }}</div>
              </div>
              <div class="">
                <button class="btn btn-danger ml-4" @click="removeItem(index)">
                  Remove Cart
                </button>
              </div>
            </div>
          </div>
          <a
            href=""
            class="btn btn-primary"
            @click.prevent="showCheckout = true"
            >Checkout</a
          >
        </div>
        <div class="form-body" v-show="showCheckout">
          <div class="items-bought">
            <div
              class="container mt-4"
              v-for="(item, index) in cart"
              :key="index"
            >
              <div class="">{{ item.name }}</div>
              <div class="">{{ "$" + item.price }}</div>
            </div>
          </div>

          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="Address"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Street Number</label>
              <input
                type="text"
                class="form-control"
                id="streetNumber"
                aria-describedby="emailHelp"
                placeholder="Street Number"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">State Code</label>
              <input
                type="email"
                class="form-control"
                id="stateCode"
                aria-describedby="emailHelp"
                placeholder="State Code"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Country</label>
              <input
                type="text"
                class="form-control"
                id="country"
                placeholder="Country"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Zip Code</label>
              <input
                type="text"
                class="form-control"
                id="country"
                placeholder="Zip Code"
                required
              />
            </div>
            <button @click="checkoutTime = true ; showCheckout = false" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>

        <div class="form-body" v-show="checkoutTime">
          <p>Pay for your Goods here</p>
          <p>Total ${{ total }}</p>
          <button  @click="success = true" class="brn btn-success">Pay ${{ total }} Now</button>
        </div>
        <div class="form-body" v-show="success">
          <p>Your Order is Successful.</p>
          <button  @click="totalCheckout" class="brn btn-success">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String
  },
  data() {
    return {
      showCheckout: false,
      checkoutTime: false,
      success: false
    };
  },
  computed: {
    StoreCart() {
      return this.$store.getters.StoreCart;
    },
    cartCount() {
      return this.StoreCart.length;
    },
    cart() {
      return this.$store.getters.StoreCart.map(cartitems => {
        return this.$store.getters.products.find(itemForSale => {
          return cartitems === itemForSale.id;
        });
      });
    },
    total() {
      const newPrice = [];
      let sum
      
      for (var i = 0; i < this.cart.length; i++) {
      newPrice.push(this.cart[i].price);
      sum = newPrice.reduce((a, b) => {
          return a + b;
        }, 0);
      }
      return sum
    }
  },
  methods: {
    myFunc(total, num) {
      return total + num;
    },
    checkout() {
      this.showCheckout = true;
    },
    removeItem(index) {
      this.$store.dispatch("removeItem", index);
    },
    showList() {
      var modal = document.getElementById("shoppingList");
      var btn = document.getElementById("show");
      btn.onclick = function() {
        modal.style.display = "block";
      };
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
    totalCheckout() {
      location.reload();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#shopping-cart {
  width: 100%;
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
}
.shoppingBody {
  display: none;
  position: fixed;
  z-index: 9999999;
  padding-top: 25px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 20px;
}
.form-body {
  background: #ffffff;
  padding: 30px;
}
</style>
