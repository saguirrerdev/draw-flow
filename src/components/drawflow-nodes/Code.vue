<template>
  <codemirror
    :options="{
        tabSize: 4,
        mode: 'text/x-python',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        readonly: false
      }"
  ></codemirror>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'

export default {
  name: 'Df_code',
  icon: 'mdi-code-braces',
  description: 'Escribe codigo (Python)',
  node_name: 'Código',
  node_key:'Code',

  components: {
    codemirror
  }
}
</script>