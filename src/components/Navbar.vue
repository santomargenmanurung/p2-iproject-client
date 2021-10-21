<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container">
      <a class="navbar-brand active" href="#">Healthy Foods Resto</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#" @click.prevent="homePage">Home</a>
          <router-link class="nav-item nav-link active" to="/admin/login"> Login</router-link>
          <router-link class="nav-item nav-link active" to="/admin/register">Register</router-link>
          <a class="nav-item nav-link" href="#" @click.prevent="logout">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
