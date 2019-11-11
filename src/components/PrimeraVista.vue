<template>
    <div id="login">
     <body style="background-color:#ff8a80;">
      <h1>Estimulador del lenguaje</h1>
  <b-card
    title="Login"
    img-src="https://psvrodriguez.files.wordpress.com/2014/04/voz.jpg"
    img-alt="Image1"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      <b-form-input v-model="text" placeholder="Enter your email"></b-form-input>
      <b-form-input v-model="password" placeholder="password" type="password"></b-form-input>
    <div class="mt-2">{{ text }}</div>
    </b-card-text>
    <b-button href="#" variant="primary" @click="go()">Entrar</b-button>
  </b-card>
  </body>
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
            this.$router.push('./SegundaVista')
        }
    }
}
</script>
<style>
#login {
    margin: 0 auto;
    text-align: center;
}
.mb-2{
    margin: 0 auto;
}
h6{
 color:darkgoldenrod;
 font-size:100px;
 font-weight:bold;
 text-align: center;
 margin: 0 auto;
}
</style>