<template>
      <v-navigation-drawer
      app
      clipped
      right
      expand-on-hover
    >
      <v-list>
        <v-list-item v-for="(program, idx) in programs" :key="idx">
          <v-list-item-icon>
            <v-icon>mdi-application-braces</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ program.name }}
              <v-icon color="blue" class="mr-1">mdi-apache-kafka</v-icon>
              <v-icon color="yellow" class="mr-1">mdi-language-python</v-icon>
              <v-icon color="red" class="mr-1">mdi-delete</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "ProgramList",

    mounted() {
      this.initialize()
    },

    computed:{
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
      getPrograms(){
        DrawflowAPI.get('/nodes').then(({data}) => {
            console.log(data);
            this.programs = data
          }).catch((e) => {
            console.warn(e)
          })
      }
    }
}
</script>