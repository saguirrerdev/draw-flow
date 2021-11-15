<template>
  <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover
    >
      <v-list-item class="px-2">
        <v-list-item-icon>
          <v-icon>mdi-application-import</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Lista de programas</v-list-item-title>
      </v-list-item>
      <v-divider></v-divider>
      <v-skeleton-loader :loading="loading" type="list-item-avatar@5">
      <v-list>
        <v-list-item v-for="(program, idx) in programs" :key="idx">
          <v-list-item-icon>
            <v-icon>mdi-application-braces</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ program.name }}
              <v-icon @click="loadProgram(program)" color="blue" class="mr-1">mdi-apache-kafka</v-icon>
              <v-icon @click="viewProgram(program)" color="yellow" class="mr-1">mdi-language-python</v-icon>
              <v-icon @click="deleteProgram(program)" color="red" class="mr-1">mdi-delete</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      </v-skeleton-loader>
  </v-navigation-drawer>
</template>

<script>
export default {
    name: "ProgramList",

    data: () => ({
      loading: true
    }),

    mounted() {
      this.initialize()
    },

    computed:{
      editor:{
        get(){
          return this.$store.state.editor
        },

        set(val){
          this.$store.commit('SET_EDITOR', val)
        }
      },

      programs:{
        get() {
          return this.$store.state.programs
        },
        set(val) {
          this.$store.commit('SET_PROGRAMS', val)
        }
      }
    },

    methods:{
      initialize(){
        this.getPrograms()
      },
      async getPrograms(){
        this.loading = true;
        await this.$store.dispatch('getPrograms')
        this.loading = false;

      },
      loadProgram(program){
        const c = confirm(`Todo el trabajo que no este guardado se perderá. ¿Cargar ${program.name} igualmente?`)
        if(c){
          this.editor.clear()
          this.editor.import(JSON.parse(program.data))
        }
      },
      viewProgram(program){
        this.$router.push({name: 'Program', params: { id: program.uid}})
      },
      async deleteProgram(program){
        await this.$store.dispatch('deleteProgram', program)
      }
    }
}
</script>