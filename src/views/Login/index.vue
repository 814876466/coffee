<template>
  <div class="page-login">
    <h1>Logins</h1>
    <button @click="handleLogin">Click me to login</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleLogin () {
      window.isLogined = true

      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  }
}
</script>
