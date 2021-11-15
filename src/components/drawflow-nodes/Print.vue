<template>
  <div>
    <h3>Imprimir</h3>
    <input type="text" df-value>
  </div>

</template>

<script>
export default {
  name: 'Df_print',
  icon: 'mdi-printer-eye',
  description: 'Imprime un mensaje',
  node_name: 'Imprimir',
  node_key:'Print',
  validConnections : ['Df_for', 'Df_conditional'],
}
</script>

<style>
  .Print h3 {
    color: white !important;
    font-weight: bold;
    text-align: center;
  }

  .Print input {
    text-align: center;
    font-style: italic;
    border: 0;
    outline: none;
    border-bottom: 1px solid black;
  }


</style>