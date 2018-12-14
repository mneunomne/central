<template>
  <div id="app">  	
  	 <l-map
  	 	id='map'
      ref='myMap'
      :zoom="zoom"
      :center="center"
      :bounds="bounds">
    	<l-tile-layer :url="url"/>
      <l-marker v-for="(marker, index) in getCurrentMarkers" :lat-lng="marker.latlng"></l-marker>
    </l-map>
    <router-link id='page-title' :to="{ name: 'Home'}"><h1>{{ getProjectTitle }}</h1></router-link>
    <router-view class='route'></router-view>
  </div>
</template>

<script>

import { L } from 'vue2-leaflet'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      zoom: 20,
      center: L.latLng(-22.907904, -43.1779339),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
  },
  computed: {
    ...mapGetters([
      'getProjectTitle',
      'getTrajetos',
      'getCurrentMarkers'
    ])
  },
  methods: {
    ...mapActions([
      'loadJSON'
    ])
  },
  mounted () {
    this.loadJSON()
  },
  watch: {
    getCurrentMarkers (markers) {

    }
  }
}
</script>

<style lang="sass" scoped>
#map
	position: fixed
	width: 100%
	height: 100%
	z-index: 0

.route
  position: absolute
  top: 100px
  margin-left: 10px
  background: white

#page-title
  h1
    background: white
    position: absolute
    top: 30px
    margin-left: 50px
    text-transform: uppercase

</style>
