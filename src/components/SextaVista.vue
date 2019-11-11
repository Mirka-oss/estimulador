<template>
  <div id="vista">
      <h1>Escribe tu nombre de usuario aqui para ver tus puntos</h1>
       <b-navbar type="light" variant="light">
    <b-nav-form>
      <b-input-group prepend="@">
        <b-form-input placeholder="Username"></b-form-input>
      </b-input-group>
    </b-nav-form>
  </b-navbar>
    <b-table striped hover :items="items" :fields="fields"></b-table>
    <b-form-checkbox
      id="checkbox-1"
      v-model="status"
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
      Selecciona este cuadrado si recomiendas nuestra página 
    </b-form-checkbox>
<h3>Gracias por tu preferencia, recibiras un correo de agradecimiento.</h3>
 <b-button variant="outline-primary">Salir</b-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'points',
            label: 'Points',
            sortable: true,
            variant: 'danger'
          }
        ],
        items: [
          { isActive: true, points: 100, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, points: 70, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, points: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, points: 100, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>
