import Vue from 'vue'
import Router from 'vue-router'
import PrimeraVista from './components/PrimeraVista'
import Email from './components/Email'
import SegundaVista from './components/SegundaVista'
import TerceraVista from './components/TerceraVista'
import CuartaVista from './components/CuartaVista'
import QuintaVista from './components/QuintaVista'
import SextaVista from './components/SextaVista'
//componentes


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', /*direccion de la ruta*/ 
      name: 'home', /*Nombre de la ruta*/ 
      component: PrimeraVista/*este de aqui es el componente*/ 
    },
    {
      path: '/email',
      name: 'email',
      component: Email
    },
    {
        path: '/SegundaVista',
        name: 'SegundaVista',
        component: SegundaVista
      },
      {
        path: '/terceraVista',
        name: 'TereceraVista',
        component: TerceraVista
      },
      {
        path: '/CuartaVista',
        name: 'CuartaVista',
        component: CuartaVista
      },
      {
        path: '/QuintaVista',
        name: 'QuintaVista',
        component: QuintaVista
      },
      {
        path: '/SextaVista',
        name: 'SextaVista',
        component: SextaVista
      },
  ]
})
