<template>
  <div>
    <div class="ohter-login-type">
      <div class="type-icon">
        <div class="icon-weixin"></div>
        <div>微信登录</div>
      </div>
      <div class="type-icon">
        <div class="icon-github"></div>
        <div>github登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.ohter-login-type {
  font-size: 10px;
  color: rgb(204, 199, 199);
  display: flex;
  justify-content: space-around;
  margin-top: 24px;
}
.type-icon {
  display: flex;
  align-items: center;
  flex-direction: column;
  .icon-weixin {
    cursor: pointer;
    width: 30px;
    height: 30px;
    background-image: url("@/assets/img/weixin.svg");
    background-size: cover;
  }
  .icon-github {
    @extend .icon-weixin;
    background-image: url("@/assets/img/github.svg");
  }
}
</style>
