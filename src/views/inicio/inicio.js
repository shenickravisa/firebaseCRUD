import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'inicio',
  components: {},
  props: [],
  data () {
    return {
      dataObj: {
        id: '001',
        text: 'se paso'
      }
    }
  },
  computed: {
    ...mapGetters(['getHomeWork'])
  },
  created () {
    this.getTareas()
  },
  methods: {
    // ejecutamos el metodo getTareas del store
    ...mapActions(['getTareas']),
    ...mapActions(['eliminarTarea']),
    getId (id) {
      this.$router.push({ name: 'edit', params: { id: id } })
      // o en el html <router-link :to={name: edit, params: { id: tareas.id }}
    },
    goAdd () {
      this.$router.push('/add')
    },

    delateById (id) {
      this.eliminarTarea(id)
    }
  }
}
