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
            </v-list-item-title>
            <v-list-item-subtitle>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    @click="loadProgram(program)"
                    icon
                    color="blue"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-apache-kafka</v-icon>
                  </v-btn>
                </template>
                <span>Cargar esquema</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    @click="viewProgram(program)"
                    icon
                    color="yellow"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-language-python</v-icon>
                  </v-btn>
                </template>
                <span>Generar código python</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    @click="deleteProgram(program)"
                    icon
                    color="red"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </template>
                <span>Eliminar</span>
              </v-tooltip>
            </v-list-item-subtitle>
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
      loading: true,
      fab: false
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
        const c = confirm(`¿Esta seguro de eliminar el programa ${program.name} ?`)
        if(c){
          await this.$store.dispatch('deleteProgram', program)
        }
      }
    }
}
</script>