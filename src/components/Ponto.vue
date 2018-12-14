<template>
  <div class="container">
    <h1>{{ title }}</h1>   
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Ponto',
  props: {
    trajeto_id: Number
  },
  data () {
    return {
      title: '',
      text: ''
    }
  },
  computed: {},
  methods: {
    ...mapActions([
      'fetchPonto'
    ]),
    getCurrentPonto (trajetoId, pontoId) {
      this.fetchPonto({
        'trajeto_id': trajetoId,
        'ponto_id': pontoId
      }).then((response) => {
        if (response) {
          this.title = response.title
          this.text = response.text
        } else {
          this.$router.push('/')
        }
      })
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.getCurrentPonto(to.params.trajeto_id, to.params.ponto_id)
    next()
  },
  mounted () {
    this.getCurrentPonto(this.$route.params.trajeto_id, this.$route.params.ponto_id)
  }
}
</script>

<style lang="sass" scoped>
.container
  position: absolute
  float: right
</style>
