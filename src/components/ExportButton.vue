<template>
  <v-fab-transition>
    <v-btn
        :color="'red'"
        absolute
        fab
        large
        dark
        bottom
        right
        @click="exportData"
    >
        <v-icon>mdi-content-save-all</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>

export default {
  name: 'ExportButton',

  methods: {
    async exportData() {
      const data = this.$store.state.editor.export();
      DrawflowAPI.post('/nodes', {
        name:"Programa",
        data: JSON.stringify(data) 
      }).then((data) => {
        console.log(data)
      }).catch((e) => {
        console.warn(e)
      });
    }
  },
}
</script>