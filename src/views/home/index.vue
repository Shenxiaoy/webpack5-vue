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
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: rgb(15, 15, 15);
}
.game-home {
  width: 100%;
  height: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
}
</style>
