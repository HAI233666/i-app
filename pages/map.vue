<template>
  <section style="width: 1000px; height: 800px;">
    <no-ssr>
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :events="events">
        <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :key="index" :vid="index"
          :events="marker.events"></el-amap-marker>
        <el-amap-circle :center="circle.center" :radius="circle.radius" :fill-opacity="0.5" fill-color="#ffb5b3"
          stroke-color="#ffb5b3"></el-amap-circle>
        <el-amap-polyline :path="polyline.path"></el-amap-polyline>
      </el-amap>
    </no-ssr>
  </section>
</template>

<script>
  import * as _ from 'lodash';
  export default {
    data() {
      let self = this;
      return {
        center: [12956903.596253375, 4827716.350392894],
        events: {
          init(map) {
            let markers = _.cloneDeep(self.markers);
            markers.forEach((item, index) => {
              AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
                item = new SimpleMarker({
                  iconLabel: {
                    innerHTML: index,
                    style: {
                      color: '#fff'
                    }
                  },
                  iconStyle: '#1995f5',
                  map: map,
                  position: item.position
                });
              });
            });
          }
        },
        lng: 0,
        lat: 0,
        plugin: [{
          pName: 'Geolocation',
          events: {
            click: (o) => {
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.$nextTick();
                }
              });
            }
          },
          buttonPosition: 'LT'
        }],
        markers: [{
            position: [121.59996, 31.197646],
            events: {
              click: () => {
                this.$router.push({
                  path: '/single/250'
                });
              }
            },
            visible: true,
            clickable: true
          },
          {
            position: [122.59996, 32.197646],
            events: {
              click: () => {
                this.$router.push({
                  path: '/single/250'
                });
              }
            },
            visible: true,
            clickable: true
          }
        ],
        circle: {
          center: [121.59996, 31.197646],
          radius: 6000
        },
        polyline: {
          path: [
            [121.59996, 31.1976461],
            [121.5389385, 31.197646]
          ]
        }
      };
    },
    methods: {},
    mounted() {},
    beforeDestroy() {}
  };
</script>
