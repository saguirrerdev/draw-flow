<template>
  <v-card>
    <v-container>
      <label>
        Desde
        <input type="number" df-from placeholder="Desde">
      </label>

      <label>
        Hasta
        <input type="number" df-till placeholder="Hasta">
      </label>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Df_for',
  icon: 'mdi-reload',
  description: 'Ciclo for básico',
  node_name: 'Ciclo',
  node_key:'For'
}
</script>