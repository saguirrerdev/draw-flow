<template>
  <v-card>
    <v-container>
      <p>If <input type="text" df-condition /></p>
      <p>Else</p>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Df_conditional',
  icon: 'mdi-diversify',
  description: 'Condicional if else',
  node_name: 'If - Else',
  node_key:'Conditional'
}
</script>