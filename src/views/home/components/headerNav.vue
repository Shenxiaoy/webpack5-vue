<template>
  <div class="game-header">
    <div class="header-wrap">
      <div class="header-left">ssss</div>
      <div class="header-center"></div>
      <div class="header-right">22</div>
    </div>
  </div>
</template>

<script>
import './style.css'
import './ss.scss'
export default {
  name: 'header-nav'
}
</script>

<style lang='scss'>
.game-header {
  width: 100%;
}
.header-wrap {
  width: 100%;
  height: 80px;
  min-width: 800px;
  background: saddlebrown;
  display: flex;
  justify-content: space-between;

  .header-left,
  .header-right {
    width: 40%;
    min-width: 300px;
    background: seagreen;
  }
  .header-center {
    width: 100px;
    background: slateblue;
  }
}
</style>
