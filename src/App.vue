<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer      
      app
      clipped
      expand-on-hover
    >
      <v-list>
        <v-list-item @click="add('Text')">
          <v-list-item-content>
            <v-list-item-title>
              Text
            </v-list-item-title>
            <v-list-item-subtitle>
              Escribe textos
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="add('Number')">
          <v-list-item-content>
            <v-list-item-title>
              Número
            </v-list-item-title>
            <v-list-item-subtitle>
              Escribe números
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item @click="add('Add')">
          <v-list-item-content>
            <v-list-item-title>
              Súma
            </v-list-item-title>
            <v-list-item-subtitle>
              Suma 2 números
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
import { dfNode } from './components/drawflow-nodes/nodes';

export default {
  name: 'App',

  data: () => ({
    //
  }),

  computed: {
    editor: {
      get(){
        return this.$store.state.editor
      },
      
      set(val){
        this.$store.commit('SET_EDITOR', val)
      }
    }
  },

  methods: {
    add(node) {
      this.editor.addNode(...dfNode(node))
    }
  },
};
</script>
