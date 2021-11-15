<template>
  <div>
    <codemirror v-model="code" :options="cmOptions"></codemirror>
  </div>

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
  },

  data: () => ({
    code: '',
    cmOptions: {
      tabSize: 4,
      mode: 'text/x-python',
      theme: 'base16-dark',
      lineNumbers: true,
      line: true,
      readonly: false
    }
  }),

  computed:{
    editor:{
      get(){
        return this.$store.state.editor
      }
    }
  },

  mounted(){
    this.$nextTick(() => {
      const id = this.$el.parentElement.parentElement.id;
      const data = this.editor.getNodeFromId(id.slice(5));
      this.code = data.data.value
    })
  },

  watch:{
    code(val){
      this.$nextTick(() => {
        const id = this.$el.parentElement.parentElement.id;
        this.editor.updateNodeDataFromId(id.slice(5), { value: val })
      })
    }
  }
}
</script>