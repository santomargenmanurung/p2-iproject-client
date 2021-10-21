import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../APIS/instanceAxios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    registerEvent (contex, payload) {
      axios
        .post('/admin/register', payload)
        .then(({ data }) => {
          router.push('/admin/login')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    },
    loginEvent (context, payload) {
      axios
        .post('admin/login', payload)
        .then(({ data }) => {
          localStorage.setItem('acces_token', data.acces_token)
          router.push('/')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err.response.data.message
          })
        })
    }
  },
  modules: {
  }
})
