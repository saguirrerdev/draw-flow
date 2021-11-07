<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      clipped-right
      color="primary"
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

        <h1 @click="home">Drawflow</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/zebek95/draw-flow"
        target="_blank"
        text
      >
        <span class="mr-2">Repositorio</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <nodes-list></nodes-list>
    <program-list></program-list>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer
      app
      class="d-flex justify-center"
    >
      Drawflow 2021
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

  methods: {
    home(){
      this.$router.push({ name: 'Home' })
    }
  }
};
</script>
