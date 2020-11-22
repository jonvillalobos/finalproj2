<template>
  <div>
    <div class="form-body">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="formData.email"
            required
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="formData.password"
            required
          />
        </div>
        <button
          @click.prevent="submit"
          class="btn btn-primary"
          :disabled="complete"
        >
          Login
        </button>
        <p>
          Dont have an account?
          <span
            ><button
              class="btn btn-link"
              @click="$router.push({ path: 'signup' })"
            >
              Sign Up
            </button></span
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      formData: {}
    };
  },
  computed: {
    complete() {
      return !(this.formData.email && this.formData.password);
    }
  },
  methods: {
    submit() {
      axios
        .post("https://cloudmaker-app.herokuapp.com/users/authenticate", {
          email: this.formData.email,
          password: this.formData.password
        })
        .then(res => {
          console.log(res.data);
          this.formData.email = "";
          this.formData.password = "";
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.form-body {
  width: 50%;
  display: block;
  margin: auto;
  margin-top: 150px;
}
@media only screen and (max-width: 768px) {
  .form-body {
    width: 90%;
  }
}
</style>
