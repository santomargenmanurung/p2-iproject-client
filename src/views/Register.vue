<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="login-form bg-light mt-4 p-4">
          <form @submit.prevent="registerEvent">
            <h4>Register</h4>
            <div class="col-12">
              <label>Name</label>
              <input
                type="text"
                name="name"
                class="form-control"
                placeholder="Name"
                v-model="name"
              />
            </div>
            <div class="col-12">
              <label>Username</label>
              <input
                type="text"
                name="username"
                class="form-control"
                placeholder="Username"
                v-model="username"
              />
              <div class="col-12">
              <label>Email</label>
              <input
                type="text"
                name="mail"
                class="form-control"
                placeholder="example@mail.com"
                v-model="email"
              />
            </div>
            </div>
            <div class="col-12">
              <label>Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <div class="col-12">
              <label>Address</label>
              <input
                type="text"
                name="address"
                class="form-control"
                placeholder="address"
                v-model="address"
              />
            </div>
            <div class="col-12">
              <label>Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                class="form-control"
                placeholder="0872xxxx"
                v-model="phoneNumber"
              />
            </div>
            <div class="col-12">
              <label>Gender</label>
              <input
                type="text"
                name="gender"
                class="form-control"
                placeholder="gender"
                v-model="gender"
              />
            </div>
            <br />
            <div class="col-12">
              <button
                type="submit"
                class="btn btn-dark"
                @click.prevent="logout"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      username: '',
      email: '',
      password: '',
      address: '',
      phoneNumber: '',
      gender: ''
    }
  },
  methods: {
    registerEvent () {
      this.$store.dispatch('registerEvent', {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        address: this.address,
        phoneNumber: this.phoneNumber,
        gender: this.gender
      })
    }
  }
}
</script>

<style></style>
