<template>
  <div class="container">
    <div id="main" class="main">
    </div>
    <live></live>
  </div>
</template>

<script>
import newInput from '~/components/new-input.vue'
import live from '~/components/live.vue'
import end from '~/components/end.vue'
export default {
  data () {
    return {}
  },
  mounted () {},
  created () {
  },
  methods: {
  },
  components: {
    newInput,
    live,
    end
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
