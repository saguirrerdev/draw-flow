<template>
  <v-card>
    <v-container>
      <label>
        Desde
        <input type="number" df-from placeholder="Desde" readonly>
      </label>

      <label>
        Hasta
        <input type="number" df-till placeholder="Hasta" readonly>
      </label>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'Df_for'
}
</script>