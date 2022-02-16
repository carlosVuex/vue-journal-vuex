import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//importamos la parte de los estilos
import './styles/styles.scss'

createApp(App)
    .use(store)//siempre lo colocamos en el punto mas alto de la aplicación
    .use(router)
    .mount('#app')
