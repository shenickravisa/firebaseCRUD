import { mapActions } from 'vuex'
export default {
  name: 'add-homework',
  components: {},
  props: [],
  data () {
    return {
      valid: false,
      firstname: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ]
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    ...mapActions(['addTarea']),
    add () {
      this.addTarea(this.firstname)
    }
  }
}
