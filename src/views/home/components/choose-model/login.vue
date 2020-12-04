<template>
  <div class="choose-sign">
    <div class="choose-head-pic"></div>
    <div class="sign-in">
      <input type="text"
             placeholder="请输入账号">
      <br>
      <input type="password"
             placeholder="请输入密码">
      <ButEffect class="mt12"></ButEffect>
    </div>
    <div class="mt124">
      <OhterLogin></OhterLogin>
    </div>
  </div>
</template>

<script>
import ButEffect from '@/components/animation-effect/butEffect'
import OhterLogin from './otherLogin'
export default {
  components: { ButEffect, OhterLogin }
}
</script>

<style lang='scss' scoped>
.mt12 {
  margin-top: 12px;
}
.mt124 {
  margin-top: 124px;
}
.choose-sign {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .choose-head-pic {
    width: 80%;
    height: 200px;
    margin: 0 auto;
    margin-top: 12px;
    background: url("@/assets/img/plant.svg") no-repeat;
  }
  .sign-in {
    outline: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
    input {
      width: 85%;
      height: 28px;
      outline: none;
      border-radius: 2px;
    }
  }
}
</style>
