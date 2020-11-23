<template>
  <div class="hero-content">
    <div class="content-left">
      <div class="hero-card">
        <RotateCard delayTime='0.5s'>
          <div>
            <div>
              <ButEffect @gologin='loginIn'></ButEffect>
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
          </div>
        </RotateCard>
        <RotateCard delayTime='0.8s'></RotateCard>
        <RotateCard delayTime='1.1s'></RotateCard>
        <RotateCard delayTime='1.4s'></RotateCard>
      </div>
      <div>
        <div class="power-hero">
          <div class="hero-name"
               v-for='(item, index) in 15'
               :key='index'></div>
        </div>
        <div class="agile-hero">
          <div class="hero-name"
               v-for='(item, index) in 15'
               :key='index'></div>
        </div>
        <div class="Intellectua-hero"></div>
      </div>
    </div>
    <div class="hero-choose">
      <template v-if="curChoose.type === 'login'">
        <ChooseLogin></ChooseLogin>
      </template>
      <template v-else>
        show-plant
      </template>
    </div>
  </div>
</template>

<script>
import RotateCard from '@/components/animation-effect/rotateCard'
import ButEffect from '@/components/animation-effect/butEffect'
import ChooseLogin from './choose-model/login'
export default {
  components: { RotateCard, ButEffect, ChooseLogin },
  data () {
    return {
      curChoose: {
        type: 'show-plant'
      }
    }
  },
  methods: {
    loginIn () {
      this.curChoose.type = 'login'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-content {
  width: 100%;
  min-width: 900px;
  height: calc(100vh - 60px);
  display: flex;
  .content-left {
    flex: 1;
    padding-right: 12px;
    .hero-card {
      color: white;
      width: 100%;
      background: rgb(24, 22, 22);
      perspective: 1000px;
      padding: 12px;
      box-sizing: border-box;
      display: flex;
      & > div {
        margin-left: 24px;
      }
    }
    .power-hero {
      width: 100%;
      color: white;
      display: flex;
      flex-wrap: wrap;
      & > div {
        width: 80px;
        height: 80px;
        margin: 12px 0 0 12px;
        background-image: url("https://chat.shenxiaoyu.cn/fengxing.png");
        background-size: cover;
        filter: grayscale(1);
        border-radius: 3px;
      }
      .hero-name:hover {
        transform: scale(0.97);
        transition: transform 0.3s;
        cursor: pointer;
        filter: grayscale(0);
      }
    }
    .agile-hero {
      @extend .power-hero;
    }
  }
  .hero-choose {
    width: 260px;
    height: 100%;
    color: white;
  }
}

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
}
</style>
