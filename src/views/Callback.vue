<template>
  <div class="callback">
    Loading...
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get(`glogin?code=${this.$route.query.code}`)
      .then(response => {
        this.info = response
      })
      .catch(error => {
        localStorage.removeItem('access_token')
        console.log(error)
        this.errored = true
        this.$router.push('/login')
      })
      .finally(() => {
        localStorage.setItem('access_token', this.info.data.token)
        this.loading = false
        this.$router.push('/')
      })
  }
}
</script>

<style lang="scss">
  .callback {
    color: #fff;
  }
</style>
