<template>
  <v-dialog
    v-model="saveDialog"
    width="300px"
    persistent
    hide-overlay
  >
    <v-card-title>Guardar programa</v-card-title>
    <v-container>
      <v-form v-model="valid">
        <v-row>
          <v-col cols="12">
            <v-text-field
              outlined
              label="Nombre"
              placeholder="Ingrese nombre del programa"
              v-model="name"
              :rules="rules.name"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-form>
    </v-container>
    <v-card-actions>
      <v-btn
        color="red"
        text
        @click="saveDialog = false"
      >
        Cancelar
      </v-btn>

      <v-btn
        color="green darken-1"
        text
        @click="exportData"
        :disabled="!valid"
      >
        Guardar
      </v-btn>
    </v-card-actions>
  </v-dialog>
</template>

<script>

export default {
  name: 'SaveProgram',

  data: () => ({
    valid: false,
    name: '',
    rules: {
      name:[
        v => !!v || 'El nombre es requerido',
        v => (v && v.length >= 5) || 'El nombre debe tener almenos 5 caracteres'
      ]
    }
  }),

  computed:{
    saveDialog:{
      get(){
        return this.$store.state.saveDialog
      },

      set(val){
        return this.$store.commit('SET_SAVE_DIALOG', val)
      }
    }
  },

  methods: {
    async exportData() {
      let data = this.$store.state.editor.export();

      let nodes = []
      nodes = Object.keys(data.drawflow.Home.data).map((key) => {
        return data.drawflow.Home.data[key]
      })
      // console.log(nodes)
      // return
      DrawflowAPI.post('/nodes', {
        name: this.name,
        data: JSON.stringify(data),
        nodes: JSON.stringify(nodes)
      }).then(({data}) => {
        this.saveDialog = false
        this.name = ''
        this.$store.dispatch('getPrograms')
        console.log(data)
      }).catch((e) => {
        console.warn(e)
      });
    }
  },
}
</script>