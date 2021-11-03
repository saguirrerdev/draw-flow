<template>
  <v-container>
    <drawflow></drawflow>
    <export-button></export-button>
  </v-container>
</template>

<script>
  import Drawflow from '../components/Drawflow'
  import ExportButton from '../components/ExportButton'

  export default {
    name: 'Home',

    components: {
      Drawflow,
      ExportButton
    }
  }
</script>
