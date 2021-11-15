<template>
  <v-container>
    <h1>Programa <em>{{ program.name }}</em></h1>
    <code-viewer v-if="!loading" v-model="code"></code-viewer>

    <v-btn @click="runit" color="rgb(255, 188, 0)" class="mt-4 mb-4">Ejecutar</v-btn>

    <pre id="output"></pre>

  </v-container>
</template>

<script>
import CodeViewer from '../components/CodeViewer'

function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}

export default {
  components: {
    CodeViewer
  },

  data: () => ({
    program:{},
    loading: true,
    code: ""
  }),

  mounted() {
    this.initialize()
  },

  methods:{
    initialize(){
      this.getProgram()
    },
    getProgram(){
      this.loading = true
      DrawflowAPI.get(`/nodes/${this.$route.params.id}/code`).then(({data}) => {
        this.program = data
        this.code = this.program.code
        this.loading = false
      }).catch((e) => {
        console.warn(e)
      })
    },
    runit() {
      var mypre = document.getElementById("output"); 
      mypre.innerHTML = '';
      Sk.pre = "output";
      Sk.configure({output:outf, read:builtinRead}); 
      try {
          eval(Sk.importMainWithBody("<stdin>", false, this.code)); 
      }
      catch(e) {
          alert(e.toString())
      }
    }
  }
}
</script>

<style>
  #output {
    background-color: white;
  }
</style>