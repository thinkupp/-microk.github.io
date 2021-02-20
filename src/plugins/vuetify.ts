import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn } from 'vuetify/lib'
import VuetifyMessageSnackbar from 'vuetify-message-snackbar'

Vue.use(Vuetify)
Vue.component('v-snackbar', VSnackbar)
Vue.component('v-btn', VBtn)

Vue.use(VuetifyMessageSnackbar)

export default new Vuetify()
