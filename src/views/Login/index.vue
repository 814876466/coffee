<template>
  <div class="page-login">
    <h1>Logins</h1>
    <button @click="handleLogin">点我就登录成功</button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    handleLogin () {
      // 设置登录状态
      window.isLogined = true

      // 登录成功跳转回首页 使用编程式导航
      // this.$router.push("/");

      // 登录成功跳转回首页 使用编程式导航  replace
      // this.$router.replace("/");

      // 登录成功，获取url地址上？号传递过来的 redirect 参数的值，再跳转
      const redirect = this.$route.query.redirect || '/'
      this.$router.replace(redirect)
    }
  }
}
</script>
