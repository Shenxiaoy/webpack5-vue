<template>
  <div class="hero-content">
    <div class="hero-card">
      <RotateCard delayTime='1s'></RotateCard>
      <RotateCard delayTime='1.3s'></RotateCard>
      <RotateCard delayTime='1.6s'></RotateCard>
      <RotateCard delayTime='1.9s'></RotateCard>
    </div>
    <div class="hero-choose"></div>
  </div>
</template>

<script>
import RotateCard from '@/components/animation-effect/rotateCard'
export default {
  components: { RotateCard }
}
</script>

<style lang="scss" scoped>
.hero-content {
  width: 100%;
  min-width: 900px;
  height: 600px;
  display: flex;
  .hero-card {
    width: 100%;
    height: 100%;
    background: rgb(24, 22, 22);
    flex: 1;
    perspective: 1000px;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    & > div {
      margin-left: 24px;
    }
  }
  .hero-choose {
    width: 260px;
    height: 100%;
    background: rgb(9, 39, 23);
  }
}
</style>
