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
  width: 100%;
  height: 2px;
}
</style>
