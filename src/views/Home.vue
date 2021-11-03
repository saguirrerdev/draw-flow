<template>
  <v-container>
    <drawflow></drawflow>
    <export-button></export-button>
    <save-program></save-program>
  </v-container>
</template>

<script>
  import Drawflow from '../components/Drawflow'
  import ExportButton from '../components/ExportButton'
  import SaveProgram from '../components/SaveProgram'

  export default {
    name: 'Home',

    components: {
      Drawflow,
      ExportButton,
      SaveProgram,
    }
  }
</script>
