<template>
  <div class="hero-content">
    <div class="content-left">
      <div class="hero-card">
        <RotateCard delayTime='0.5s'>
          <div>
            <div>
              <ButEffect @gologin='loginIn'></ButEffect>
              <OhterLogin></OhterLogin>
            </div>
          </div>
        </RotateCard>
        <RotateCard delayTime='0.8s'>
          <div class='choose-note'
               @click="handlenote">
            <p style='font-size: 24px'>笔记</p>
            <div>好记性不如烂笔头</div>
          </div>
        </RotateCard>
        <RotateCard delayTime='1.1s'></RotateCard>
        <RotateCard delayTime='1.4s'></RotateCard>
      </div>

      <div>
        <div class="power-hero">
          <div class="hero-name"
               v-for='(item, index) in 15'
               :key='index'>
            <img alt=""
                 :src='bgPlantImg'
                 @load='imgload'>
          </div>
        </div>
        <div class="agile-hero">
          <div class="hero-name"
               v-for='(item, index) in 15'
               :key='index'>
            <img :src="bgPlantImg"
                 alt="">
          </div>
        </div>
        <div class="Intellectua-hero"></div>
      </div>

    </div>
    <div class="hero-choose">
      <template v-if="curChoose.type === 'login'">
        <ChooseLogin></ChooseLogin>
      </template>
      <template v-else-if="curChoose.type === 'note'">
        <ChooseNote></ChooseNote>
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
import OhterLogin from './choose-model/otherLogin'
import ChooseNote from './choose-model/note'

import bgPlantImg from '@/assets/img/bg.jpg'
export default {
  components: { RotateCard, ButEffect, ChooseLogin, OhterLogin, ChooseNote },
  data () {
    return {
      curChoose: {
        type: 'show-plant'
      },
      bgPlantImg
    }
  },
  methods: {
    loginIn () {
      this.curChoose.type = 'login'
    },
    handlenote () {
      this.curChoose = {
        type: 'note'
      }
    },
    imgload (e) {
      // e.currentTarget.src = 'https://image.shenxiaoyu.cn/FlXaB976CP-5y2N88DVd99bI02AP'
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

      .choose-note {
        text-align: center;
        cursor: pointer;
        &:hover {
          -webkit-text-stroke: 1px rgb(99, 94, 94);
          color: black;
          transition: all ease-out 0.8s;
        }
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
        // background-image: url("https://chat.shenxiaoyu.cn/fengxing.png");
        // background-size: cover;
        img {
          width: 100%;
          height: 100%;
        }
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

// .icon-weixin {
//   cursor: pointer;
//   width: 30px;
//   height: 30px;
//   background-image: url("@/assets/img/weixin.svg");
//   background-size: cover;
// }
// .icon-github {
//   @extend .icon-weixin;
//   background-image: url("@/assets/img/github.svg");
// }
// .ohter-login-type {
//   font-size: 10px;
//   color: rgb(204, 199, 199);
//   display: flex;
//   justify-content: space-around;
//   margin-top: 24px;
// }
// .type-icon {
//   display: flex;
//   align-items: center;
//   flex-direction: column;
// }
</style>
