<template>
  <div class="system-obj">
    <p>system-main</p>
    <div>{{gg.vueRouter}}</div>
  </div>
</template>

<script>
import './system.scss'
export default {
  data () {
    return {
      gg: {}
    }
  },
  mounted () {
    // const test = window.aaaaqq
    // const aa = test.get('./commont')
    // aa.then(json => {
    //   const result = json().default
    //   this.gg = result.abRouter
    //   console.log(result, 'gg')
    // })
  }
}
</script>

<style>
</style>
