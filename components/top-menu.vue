<template>
  <el-row>
    <el-col :span="12">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1" @click="toPage('/')">首页</el-menu-item>
        <el-menu-item index="2" @click="toPage('calendar')">日历</el-menu-item>
        <el-menu-item index="3" @click="toPage('map')">地图</el-menu-item>
        <el-menu-item index="4" @click="toPage('component')">组件</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="12">
      <div class="grid-content bg-purple-light"></div>
    </el-col>
  </el-row>
</template>

<script>
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
  }
}
</script>

<style>
.el-menu.el-menu--horizontal {
  border-bottom: none;
  background: none;
}
</style>
