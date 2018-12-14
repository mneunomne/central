<template>
  <div id="home">
    <h1>Home page</h1>
    <ul>
      <li>
        <router-link           
          v-for="(trajeto, index) in getTrajetos"
          v-on:click.native="onClickTrajeto(trajeto)"
          :to="{ 
            name: 'trajeto', 
            params: { 
              name: trajeto.title, 
              id: index
            }
          }"
        >
          <p>{{ trajeto.title }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'hello',
  data () {
    return {}
  },
  computed: {
    ...mapGetters([
      'getTrajetos'
    ])
  },
  methods: {
    ...mapActions([
      'setCurrentTrajeto'
    ]),
    onClickTrajeto (trajeto) {
      this.setCurrentTrajeto(trajeto)
    }
  }
}
</script>

<style lang="sass" scoped>
$maingrey: #ff0040
#home  
  h1
    color: $maingrey    
</style>
