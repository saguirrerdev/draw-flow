<template>
      <v-navigation-drawer
      app
      clipped
      expand-on-hover
    >
      <v-list-item class="px-2">
        <v-list-item-icon>
          <v-icon>mdi-arrange-bring-to-front</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Lista de componentes</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="component in components" :key="component.node_key" @click="add(component.node_key)">
          <v-list-item-icon>
            <v-icon>{{ component.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{component.node_name}}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{component.description}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>   
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import { dfNode, components } from './drawflow-nodes/nodes';

export default {
  name: "NodesList",

  data: () => ({
    components
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
}
</script>