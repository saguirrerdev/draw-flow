<template>
  <v-card>
    <v-container>
      <p class="p-if"><span class="if">If</span> <input type="text" df-condition /></p>
      <p class="p-else"><span class="else">Else</span></p>
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

<style>
  .Conditional .p-if {
    background-color: red;
    padding: 0px 5px;
  }
  
  .Conditional .p-else {
    background-color: #1976d2;
    padding: 0px 5px;
  }

  .Conditional p span {
    color: white;
    font-weight: bold;
    margin-right: 5px;
  }

  .Conditional .p-if input{
    outline: none;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    color: white;
  }

  .Conditional .output_1 {
    background-color: green !important;
  }
</style>