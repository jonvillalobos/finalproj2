<template>
  <div>
    <div class="form-body">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">First Name</label>
          <input
            type="text"
            v-model="formData.firstName"
            class="form-control"
            id="firstName"
            aria-describedby="emailHelp"
            placeholder="First Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Last Name</label>
          <input
            type="text"
            v-model="formData.lastName"
            class="form-control"
            id="lastName"
            aria-describedby="emailHelp"
            placeholder="Last Name"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="email"
            v-model="formData.email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            v-model="formData.password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            required
          />
        </div>
        <button
          @click.prevent="submit"
          class="btn btn-primary"
          :disabled="complete"
        >
          Submit
        </button>
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
      return !(
        this.formData.firstName &&
        this.formData.lastName &&
        this.formData.email &&
        this.formData.password
      );
    }
  },
  methods: {
    submit() {
      axios
        .post("https://cloudmaker-app.herokuapp.com/users/register", {
          firstName: this.formData.firstName,
          lastName: this.formData.lastName,
          email: this.formData.email,
          password: this.formData.password
        })
        .then(res => {
          console.log(res.data);
          //   this.message = res.data.data;
          //   this.itemData.url = res.data.message;
          this.formData.firstName = "";
          this.formData.lastName = "";
          this.formData.email = "";
          this.formData.password = "";
          this.$router.push("login");
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
