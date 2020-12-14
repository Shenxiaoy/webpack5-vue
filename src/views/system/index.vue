<template>
  <div class="system-obj">system1111111111</div>
</template>

<script>
import './system.scss'
export default {
  data () {
    return {
      ori: ''
    }
  },
  async mounted () {
    const a = await Promise.resolve('3')
    console.log(a, 'aaaaaaaaaaa')
  }
}
</script>

<style>
</style>
