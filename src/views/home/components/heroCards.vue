<script>
export default {
  data () {
    return {}
  },
  methods: {
    getList () {
      console.log('eeee')
    }
  },
  render (createElement, context) {
    return (
      <div class='content-list'>
        <div></div>
      </div>
    )
  }
}
</script>
<style lang="scss" scoped>
.content-list {
  width: 60%;
  min-width: 900px;
}
</style>
