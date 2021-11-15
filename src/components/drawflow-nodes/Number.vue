<template>
  <input type="number" df-value>
</template>

<script>
export default {
  name: 'Df_number',
  icon: 'mdi-numeric',
  description: 'Escribe números',
  node_name: 'Número',
  node_key:'Number'
}
</script>

<style>
  .Number input{
    text-align: center;
    font-weight: bold;
    color: white;
    border: 0;
    outline: none;
  } 
</style>