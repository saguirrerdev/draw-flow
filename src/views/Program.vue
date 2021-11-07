<template>
  <v-container>
    <h1>Programa <em>{{ program.name }}</em></h1>
    <code-viewer :code="program.code"></code-viewer>
  </v-container>
</template>

<script>
import CodeViewer from '../components/CodeViewer'

export default {
  components: {
    CodeViewer
  },

  data: () => ({
    program:{},
  }),

  mounted() {
    this.initialize()
  },

  methods:{
    initialize(){
      this.getProgram()
    },
    getProgram(){
      DrawflowAPI.get(`/nodes/${this.$route.params.id}/code`).then(({data}) => {
        this.program = data
      }).catch((e) => {
        console.warn(e)
      })
    }
  }
}
</script>

<style>

</style>