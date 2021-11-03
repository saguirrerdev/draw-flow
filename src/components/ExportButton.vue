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
        @click="saveDialog = true"
    >
        <v-icon>mdi-content-save-all</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>

export default {
  name: 'ExportButton',

  computed:{
    saveDialog: {
      get() {
        return this.$store.state.saveDialog;
      },

      set(val){
        this.$store.commit('SET_SAVE_DIALOG', val)
      }
    }
  }
}
</script>