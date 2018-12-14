<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="ponto in pontos"><p>{{ ponto.title }}</p></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
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
    this.fetchTrajeto(this.$route.params.id).then((response) => {
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

<style lang="scss" scoped>

</style>
