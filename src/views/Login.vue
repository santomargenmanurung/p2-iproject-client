<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="login-form bg-light mt-4 p-4">
          <form @submit.prevent="loginEvent">
            <h4>Welcome</h4>
            <div class="col-12">
              <label for="loginEmail">Email</label>
              <input
                type="text"
                name="email"
                class="form-control"
                placeholder="email"
                v-model="email"
              />
            </div>
            <br />
            <div class="col-12">
              <label for="loginPassword">Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="Password"
                v-model="password"
              />
            </div>
            <br />
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                />
                <label class="form-check-label" for="rememberMe">
                  Remember me</label
                >
              </div>
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-dark">Login</button>
            </div>
          </form>
          <p class="text-center mb-0" @click.prevent="eventRegister">
            Have not account yet? <a href="#">Signup</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style></style>
