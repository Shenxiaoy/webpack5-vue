<template>
  <div class="game-home">
    <HeaderNav></HeaderNav>
    <Line2></Line2>
    <HeroCards></HeroCards>
  </div>
</template>

<script>
import HeaderNav from './components/headerNav.vue'
import Line2 from './components/line2'
import HeroCards from './components/heroCards'

export default {
  components: { HeaderNav, Line2, HeroCards }
}
</script>

<style>
.game-home {
  width: 100%;
  height: 100%;
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>
