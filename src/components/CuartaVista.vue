<template>
<div id="vista">
  
  <h1>Segundo Nivel</h1>
  <h2>Ordene las oraciones utilizando las palabras que se le presentan una vez haya terminado marque la casilla del lado izquierdo</h2>
  <div id="oraciones">
    <b-container fluid>
      
    <b-row class="my-1" v-for="item in preguntas" :key="item.id">
      <b-col sm="12">
        <label :for="`type-${item.id}`">{{ item.text }}:</label>
      </b-col>
      <b-col sm="12">
        <b-form-input :id="`type-${item.id}`" v-model="item.value"></b-form-input>
      </b-col>
    </b-row>
    <b-button variant="primary" @click="comprobar">Comprobar</b-button>
    <h5 v-for="item in valor" :key='item'>
    {{ item }}
  </h5>
  </b-container>
  </div>
</div>
</template>
<script>
export default {
    data () {
      return{
        preguntas:[
          {
            text:'Tranquilo / salvaje / el / come / en / selva / león / la',
            value:'',
            id:'0'
          },
          {
            text:'Niños / parque / los / en / juegan / el / futbols',
            value:'',
            id:'1'
          },
          {
            text:'Cuarto / en / hace / tarea / Juan / español / su / de / su',
            value:'',
            id:'2'
          },
          {
            text:'Andrea / banda / guitarra / la / toca / con / la',
            value:'',
            id:'3'
          },
          {
            text:'Aquiles / tarea / en / computadora / hace / inglés / la / de ',
            value:'',
            id:'4'
          }
        ],
        respuestas:[
          {
            res:'El leon salvaje come tranquilo en la selva',
            id:'0'
          },
          {
            res:'Los niños juegan futbol en el parque',
             id:'1'
          },
          {
            res:'Juan hace su tarea de español en su cuarto',
             id:'2'
          },
          {
            res:'Andrea toca la guitarra con la banda',
             id:'3'
          },
          {
            res:'Aquiles hace tarea de ingles en la computadora',
             id:'4'
          },
        ],
        valor:[]
      }
    },
    methods:{
        go(){
            this.$router.push('./QuintaVista')
        },
        comprobar() {
          let respuestas = this.respuestas
          let correct = 0
          let incorrect =0
          this.preguntas.forEach(element => {
            if (element.value.toLowerCase() === respuestas[element.id].res.toLowerCase() ) {
             this.valor.push(`buena, Pregunta #${element.id + 1}`)
              correct ++
            }
            else {
              this.valor.push(`mala, Pregunta #${element.id + 1}`)
              incorrect ++
            }
          });
          if (correct === 5) {
             this.$swal({
               icon: 'success',
                title: 'Felicidades has contestado todas las preguntas'
                });
          }
          else {
            this.$swal({
               icon: 'error',
                title: `Tienes ${incorrect} Respuestas incorrectas`
               });
          }
           this.$router.push('./QuintaVista')
        }
    }
}
</script>
<style>
p {
  color: blue;
   margin: 0 auto;
    text-align: center;
}
h1{
  text-align: center;
}
</style>
