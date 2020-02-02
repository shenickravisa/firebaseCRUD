import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/firebase'
import router from '@/router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas: [],
    tarea: { nombre: '', id: '' }
  },
  mutations: {
    // las mutaciones siempre reciben un state y el parametro que va a setearse
    setTareas (state, tareas) {
      state.tareas = tareas
    },
    setTarea (state, tarea) {
      state.tarea = tarea
    },
    eliminarTarea (state, id) {
      state.tareas = state.tareas.filter(element => {
        return element.id !== id
      })
    }
  },
  actions: {
    getTareas ({ commit }) { // objeto para usar mutation
      // le pasamos el nombre de la coleccion que hayamos creado
      const tareas = []
      db.collection('tareas').get().then(snapshot => {
        snapshot.forEach(doc => {
          let tarea = doc.data()
          tarea.id = doc.id
          tareas.push(tarea)
        })
      })
      // utilizamos el commit para setearle al state tareas el arreglo creado en getTareas
      commit('setTareas', tareas)
    },
    // get by Id
    getTarea ({ commit }, id) {
      db.collection('tareas').doc(id).get().then(doc => {
        let tarea = doc.data()
        tarea.id = doc.id
        commit('setTarea', tarea)
      })
    },
    // update Data firebase siempre lleva commit
    editTarea ({ commit }, tarea) {
      db.collection('tareas').doc(tarea.id).update({
        nombre: tarea.nombre
      })
        .then(() => {
          router.push({ name: 'inicio' })
        })
    },
    // add firebase with incremental ID siempre lleva commit
    addTarea ({ commit }, nombre) {
      db.collection('tareas').add({
        nombre: nombre
      })
        .then(doc => {
          router.push({ name: 'inicio' })
        })
    },
    // delete firebase with ID
    // dispatch se utiliza para llamar a otro action dentro de un action siempre lleva commit
    eliminarTarea ({ commit, dispatch }, id) {
      db.collection('tareas').doc(id).delete()
        .then(() => {
          // una vez que se elimina refrescas el de traer todas las tareas
          // dispatch('getTareas')
          commit('eliminarTarea', id)
        })
    }
  },
  modules: {
  },
  getters: {
    getHomeWork: (state) => {
      return state.tareas
    }
  }
})
