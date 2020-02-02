import { mapActions, mapState } from 'vuex'
export default {
  name: 'edit',
  components: {},
  props: ['id'],
  data () {
    return {
      firstname: '',
      valid: false,
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ]
    }
  },
  computed: {
    ...mapState(['tarea'])
  },
  created () {
    console.log(this.tarea)
    console.log(this.id)
    this.getTarea(this.id)
    if (this.tarea) {
      this.firstname = this.tarea.nombre
    }
  },
  methods: {
    edit () {
      this.tarea.nombre = this.firstname
      this.editTarea(this.tarea)
    },
    ...mapActions(['getTarea', 'editTarea'])
  },
  watch: {
    tarea: {
      handler (newValor, oldValor) {
        this.firstname = newValor.nombre
      },
      deep: true
    }
  }
}
