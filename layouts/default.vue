<template>
  <div>
    <el-container>
      <el-header class="default-header">
        <top-menu></top-menu>
      </el-header>
      <el-main class="default-main">
        <nuxt />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import topMenu from '~/components/top-menu.vue'
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  mounted () {
  },
  created () {
  },
  watch: {
  },
  methods: {
    toPage (path) {
      this.$router.push({
        path: path
      })
    }
  },
  filters: {
  },
  components: {
    topMenu
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.default-main {
  /* background: #f2f2f2; */
}
</style>
