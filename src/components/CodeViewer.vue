<template>
  <v-card>
      <codemirror :code="code" :options="cmOptions"></codemirror>
  </v-card>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

export default {
    name: 'CodeViwer',

    props:{
      code: {
        type: String,
        required: true
      }
    },

    data: () => ({
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        readonly: false
      }
    }),

    components: {
        codemirror
    }

}
</script>

<style>

</style>