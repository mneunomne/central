<template>
  <div class='container'>
    <router-link
      :to="{ 
        path: '/' + $route.params.trajeto_id + '/' + $route.params.name
      }"
      replace
    ><h1>{{ title }}</h1>
    </router-link>
    <ul>
      <li v-for="(ponto, index) in pontos" v-bind:key="index">
        <router-link
          :to="{ 
            path: '/' + $route.params.trajeto_id + '/' + $route.params.name + '/ponto/' + index
            }" 
          replace
        ><p>{{ ponto.title }}</p>
        </router-link>
      </li>            
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Ponto from './Ponto'

export default {
  name: 'Trajeto',
  components: {
    Ponto
  },
  data () {
    return {
      pontos: [],
      color: '',
      title: ''
    }
  },
  computed: {
    ...mapGetters([
      'getCurrentTrajeto'
    ])
  },
  methods: {
    ...mapActions([
      'fetchTrajeto',
      'setCurrentMarkers'
    ])
  },
  mounted () {
    this.fetchTrajeto(this.$route.params.trajeto_id).then((response) => {
      if (response) {
        this.setCurrentMarkers(response.pontos)
        this.pontos = response.pontos
        this.title = response.title
      } else {
        this.$router.push('/')
      }
    })
  }
}
</script>

<style lang="sass" scoped>
.container
  position: absolute
  top: 100px
  background: white
  margin-left: 30px
</style>
