<template>
    <div id="vista">
        <h1>Tercer nivel</h1>
        <h2>Haz llegado al final de este emocionante estimulador del lenguaje</h2>
        <label>Este juego consiste en que pongas a trabajar tus neuronas y desarroles tu logica y nos des una respuesta a este gran acertijo.</label>
        <h4>Evaluaremos tu respuesta aunque no sea correcta</h4>
        <p>En una isla hay 100 habitantes. Todos ellos tienen o bien ojos azules o bien ojos marrones. Todos ven el color de los otros, pero no el color propio. No pueden hablar del tema y no hay espejos. Eso sí: una ley establece que si alguien descubre que tiene los ojos azules, ha de abandonar la isla a las 8 de la mañana siguientes. Todos los isleños tienen la misma capacidad para razonar y todos son capaces de usar una lógica impecable.

Un día, una persona llega de visita a la isla y, mientras los mira a todos, dice, sin señalar a nadie en concreto: “¡Qué bueno es ver al menos una persona con ojos azules después de tanto tiempo de estar en alta mar!”

¿Qué consecuencias trajo este comentario a los habitantes de la isla</p>
 <b-form-textarea
    id="textarea-no-resize"
    placeholder="Fixed height textarea"
    rows="3"
    no-resize>
    </b-form-textarea>
<b-button variant="primary" @click="go()">Ver mi puntuacion</b-button>
    </div>
</template>

<script>
export default {
    data () {
    },
    methods:{
        go(){
            this.$router.push('./SextaVista')
        }
    }
}
</script>

<style>
h4{
    color:rgb(226, 147, 196);
}
label{
    color:crimson;
}
textarea{
    border-block-color: purple;
    border-block-start-width: medium;
}
</style>
