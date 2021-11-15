<template>
  <div>
    <label>
      Desde
      <input type="number" df-from>
    </label>

    <label>
      Hasta
      <input type="number" df-till>
    </label>
  </div>
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

<style>
  .For input {
    width: 30px;
    border: 0;
    outline: none;
    border-bottom: 1px solid black;
    text-align: center;
    color: white;
  }

  .For label {
    color: white;
  }
</style>