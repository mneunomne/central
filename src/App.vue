<template>
  <div id="app">  	
  	 <l-map
  	 	id='map'
      ref='myMap'
      :zoom="zoom"
      :center="center"
      :bounds="getBoundsFromMarkers(getCurrentMarkers)">
    	<l-tile-layer :url="url"/>
      <l-marker 
        v-for="(marker, index) in getCurrentMarkers"
        :lat-lng="getLatLng(marker.latlng)"
        v-bind:key="index"
      ></l-marker>
    </l-map>
    <router-link id='page-title' :to="{ name: 'Home'}">
      <h1>{{ getProjectTitle }}</h1>
    </router-link>
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
      url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
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
    ]),
    getLatLng (latlng) {
      return L.latLng(latlng.lat, latlng.lng)
    },
    getBoundsFromMarkers (markers) {
      var topleft = {lat: -180, lng: 180} // max lat min lng
      var bottomright = {lat: 180, lng: -180} // max lat min lng
      for (var i in markers) {
        topleft.lat = Math.max(markers[i].latlng.lat, topleft.lat)
        topleft.lng = Math.min(markers[i].latlng.lng, topleft.lng)
        bottomright.lat = Math.min(markers[i].latlng.lat, bottomright.lat)
        bottomright.lng = Math.max(markers[i].latlng.lng, bottomright.lng)
      }
      var tlCorner = L.latLng(topleft.lat, topleft.lng)
      var brCorner = L.latLng(bottomright.lat, bottomright.lng)
      return L.latLngBounds(tlCorner, brCorner)
    }
  },
  mounted () {
    this.loadJSON()
    this.$refs.myMap.fitBounds([[40.712, -74.227], [40.774, -74.125]])
    for (var i in this.getCurrentMarkers) {
      console.log('ponto', this.getCurrentMarkers[i])
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
