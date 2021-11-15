<template>
  <v-app style="background-color:rgb(109, 51, 254)">
    <v-app-bar
      app
      clipped-left
      clipped-right
      color="rgb(25, 8, 98)"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="nodo"
          transition="scale-transition"
          width="40"
        />

        <h1 >Drawflow</h1>
        <v-btn icon @click="home">
          <v-icon >mdi-vector-polyline-edit</v-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/zebek95/drawflow-api"
        target="_blank"
        text
      >
        <span class="mr-2">Repositorio</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <nodes-list v-if="currentRouteName == 'Home'"></nodes-list>

    <program-list v-if="currentRouteName == 'Home'"></program-list>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
      app
      dark
      class="d-flex justify-center"
      color="rgb(25, 8, 98)"
    >
    <v-btn text href="https://github.com/zebek95" target="_blank">Sergio Aguirre Romero</v-btn>
    <v-btn text href="https://github.com/jerosoler/Drawflow" target="_blank">Drawflow</v-btn>
    <v-btn text href="https://golang.org/" target="_blank">Go</v-btn>
    <v-btn text href="https://vuejs.org/" target="_blank">Vue.js</v-btn>
    </v-footer>
  </v-app>
</template>

<script>
import nodo from './assets/nodos.png'
import NodesList from '../src/components/NodesList'
import ProgramList from '../src/components/ProgramList'


export default {
  name: 'App',

  data: () => ({
    nodo,
  }),

  components: {
    NodesList,
    ProgramList
  },

  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  },

  methods: {
    home(){
      if(this.$route.name !== 'Home'){
        this.$router.push({ name: 'Home' })
      }
    }
  }
};
</script>

<style scoped>
  .v-application a {
    color: white ;
  }
</style>