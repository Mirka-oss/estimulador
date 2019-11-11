<template>
    <div id="vista">
        <h1>ESTIMULADOR DEL LENGUAJE TE DA LA BIENVENIDA</h1>
        <img src="http://www.unidiversidad.com.ar/cache_2/ggg8_473_945_c.jpg">
        <p></p>
        <label >Ingresa un nombre de usuario, asi seras parte de nosotros:</label>
        <input type="text" name =name>
        <h2>Elije un nivel</h2>
  <b-form inline>
    <label class="mr-sm-2" for="inline-form-custom-select-pref"></label>
    <b-form-select
      class="mb-2 mr-sm-2 mb-sm-0"
      :value="null"
      :options="{ '1': 'One', '2': 'Two', '3': 'Three' }"
      id="inline-form-custom-select-pref"
 >
      <template v-slot:first>
        <option :value="null">Choose...</option>
      </template>
    </b-form-select>

    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember my preference</b-form-checkbox>
 
    <b-button variant="primary" @click="go()">Finalizar</b-button>
  </b-form>
</div>
</template>
<script>
export default {
    data () {
        return {
            text:'',
            password:''
        }
    },
    methods:{
        go(){
            this.$router.push('./TerceraVista')
        }
    }
}
</script>
<style>
h1{
  color:aqua;
font-weight:bold;
}
h2{
  text-align: center;
}
</style>