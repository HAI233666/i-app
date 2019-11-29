<template>
  <div class="this-map">
  	<div id="container"></div> 
  </div>
</template>

<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=ca24168ae1fbb12ccc5d1c474e500e40"></script> 
<script type="text/javascript">
  var map = new AMap.Map('container', {
      zoom:11,//级别
      center: [116.397428, 39.90923],//中心点坐标
      viewMode:'3D'//使用3D视图
  });
</script>
<script>
export default {
  data () {
    return {}
  },
  mounted () {},
  created () {},
  watch: {},
  methods: {},
  filters: {},
  components: {}
}
</script>

<style>
.this-map {
}
#container {
  width: 500px;
  height: 400px;
}
</style>