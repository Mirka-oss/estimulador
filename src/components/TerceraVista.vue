<template>
   <div id="vista">
       <h1>¡Bienvenido al primer nivel!</h1>
       <p>Este es el primer juego, y consiste en que nos describiras que vez en la imagen y de esta manera probaremos tu logica y revisaremos tu ortografia en el texto.</p>
<img src="https://2.bp.blogspot.com/-zvtOveJv2cM/T9i_-zTxEgI/AAAAAAAB6bs/ZGuQ03AEr4Q/s640/18.jpg" >
  <b-form-textarea
    id="textarea-no-resize"
    placeholder="Fixed height textarea"
    rows="3"
    no-resize>
    </b-form-textarea>
<b-button variant="primary" @click="go()">Siguiente</b-button>
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
            this.$router.push('./CuartaVista')
        }
    }
}
</script>