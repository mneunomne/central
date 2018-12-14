<template>
  <div id="home">
    <h1>Home page</h1>
    <ul>
      <li>
        <router-link
          v-for="(trajeto, index) in getTrajetos"
          v-on:click.native="onClickTrajeto(trajeto)"
          v-bind:key="index"
          :to="{
            name: 'Trajeto', 
            params: {
              name: getRouteName(trajeto.title),
              trajeto_id: index
            }
          }"
        ><p>{{ trajeto.title }}</p>
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
    },
    getRouteName (str) {
      return str.replace(/ /g, '')
    }
  }
}
</script>

<style lang="sass" scoped>
$maingrey: #ff0040
#home
  position: absolute
  top: 100px
  margin-left: 50px
  background: white
  h1
    color: $maingrey
</style>
