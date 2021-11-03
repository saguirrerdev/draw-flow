<template>
      <v-navigation-drawer
      app
      clipped
      expand-on-hover
    >
      <v-list>
        <v-list-item @click="add('Text')">
          <v-list-item-icon>
            <v-icon>mdi-form-textbox</v-icon>
          </v-list-item-icon>
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
          <v-list-item-icon>
            <v-icon>mdi-numeric</v-icon>
          </v-list-item-icon>
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
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
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
</template>

<script>
import { dfNode } from './drawflow-nodes/nodes';

export default {
  name: "NodesList",

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
}
</script>