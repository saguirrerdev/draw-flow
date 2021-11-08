<template>
  <v-card>
    <codemirror :value="value" :options="cmOptions" @input="$emit('input', $event)"></codemirror>
  </v-card>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

export default {
    name: 'CodeViwer',

    props:{
      value: {
        type: String,
        required: false
      }
    },

    data: () => ({
      cmOptions: {
        tabSize: 4,
        mode: 'text/x-python',
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