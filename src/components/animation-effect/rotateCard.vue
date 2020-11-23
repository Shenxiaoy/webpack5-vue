<template>
  <div class="card-wrap">
    <div class="box once-active"
         ref='box'
         :style="{'animation-delay': delayTime}">
      <div class="front-face">
        <slot>
          <img src="https://chat.shenxiaoyu.cn/guangfa.jpg"
               alt="">
        </slot>
      </div>
      <div class="back-face"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    delayTime: {
      type: String,
      default: '1s'
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.card-wrap {
  // width: 300px;
  // height: 300px;
  // perspective: 1000px;
  display: block;
  .box {
    width: 180px;
    height: 120px;
    transform-style: preserve-3d;
    position: relative;
    transition: transform 0.5s;
    animation: cards 0.6s ease-out 1s forwards;
    .front-face,
    .back-face {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      backface-visibility: hidden;
    }
    .front-face {
      transform: rotateY(180deg);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .back-face {
      background: repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.11),
          rgba(0, 0, 0, 0.11) 12px,
          rgba(1, 1, 1, 0.16) 0,
          rgba(1, 1, 1, 0.16) 24px,
          rgba(0, 0, 0, 0.14) 0,
          rgba(0, 0, 0, 0.14) 36px,
          rgba(0, 0, 0, 0.23) 0,
          rgba(0, 0, 0, 0.23) 48px,
          rgba(0, 0, 0, 0.12) 0,
          rgba(0, 0, 0, 0.12) 60px,
          rgba(1, 1, 1, 0.07) 0,
          rgba(1, 1, 1, 0.07) 72px,
          rgba(0, 0, 0, 0.21) 0,
          rgba(0, 0, 0, 0.21) 84px,
          rgba(0, 0, 0, 0.24) 0,
          rgba(0, 0, 0, 0.24) 96px,
          rgba(1, 1, 1, 0.23) 0,
          rgba(1, 1, 1, 0.23) 108px,
          rgba(1, 1, 1, 0.07) 0,
          rgba(1, 1, 1, 0.07) 120px,
          rgba(0, 0, 0, 0.01) 0,
          rgba(0, 0, 0, 0.01) 132px,
          rgba(1, 1, 1, 0.22) 0,
          rgba(1, 1, 1, 0.22) 144px,
          rgba(1, 1, 1, 0.24) 0,
          rgba(1, 1, 1, 0.24) 156px,
          transparent 0,
          transparent 168px,
          rgba(0, 0, 0, 0.12) 0,
          rgba(0, 0, 0, 0.12) 180px
        ),
        repeating-linear-gradient(
          90deg,
          rgba(1, 1, 1, 0.01),
          rgba(1, 1, 1, 0.01) 12px,
          rgba(1, 1, 1, 0.15) 0,
          rgba(1, 1, 1, 0.15) 24px,
          rgba(0, 0, 0, 0.09) 0,
          rgba(0, 0, 0, 0.09) 36px,
          rgba(0, 0, 0, 0.02) 0,
          rgba(0, 0, 0, 0.02) 48px,
          rgba(0, 0, 0, 0.1) 0,
          rgba(0, 0, 0, 0.1) 60px,
          rgba(1, 1, 1, 0.07) 0,
          rgba(1, 1, 1, 0.07) 72px,
          rgba(1, 1, 1, 0.15) 0,
          rgba(1, 1, 1, 0.15) 84px,
          rgba(0, 0, 0, 0.18) 0,
          rgba(0, 0, 0, 0.18) 96px,
          rgba(1, 1, 1, 0.15) 0,
          rgba(1, 1, 1, 0.15) 108px,
          rgba(1, 1, 1, 0.09) 0,
          rgba(1, 1, 1, 0.09) 120px,
          rgba(1, 1, 1, 0.07) 0,
          rgba(1, 1, 1, 0.07) 132px,
          rgba(1, 1, 1, 0.05) 0,
          rgba(1, 1, 1, 0.05) 144px,
          rgba(0, 0, 0, 0.1) 0,
          rgba(0, 0, 0, 0.1) 156px,
          rgba(1, 1, 1, 0.18) 0,
          rgba(1, 1, 1, 0.18) 168px
        ),
        repeating-linear-gradient(
          45deg,
          rgba(0, 0, 0, 0.24),
          rgba(0, 0, 0, 0.24) 16px,
          rgba(1, 1, 1, 0.06) 0,
          rgba(1, 1, 1, 0.06) 32px,
          rgba(0, 0, 0, 0.16) 0,
          rgba(0, 0, 0, 0.16) 48px,
          rgba(1, 1, 1, 0) 0,
          rgba(1, 1, 1, 0) 64px,
          rgba(1, 1, 1, 0.12) 0,
          rgba(1, 1, 1, 0.12) 80px,
          rgba(1, 1, 1, 0.22) 0,
          rgba(1, 1, 1, 0.22) 96px,
          rgba(0, 0, 0, 0.24) 0,
          rgba(0, 0, 0, 0.24) 112px,
          rgba(0, 0, 0, 0.25) 0,
          rgba(0, 0, 0, 0.25) 128px,
          rgba(1, 1, 1, 0.12) 0,
          rgba(1, 1, 1, 0.12) 144px,
          rgba(0, 0, 0, 0.18) 0,
          rgba(0, 0, 0, 0.18) 160px,
          rgba(1, 1, 1, 0.03) 0,
          rgba(1, 1, 1, 0.03) 176px,
          rgba(1, 1, 1, 0.1) 0,
          rgba(1, 1, 1, 0.1) 192px
        ),
        repeating-linear-gradient(
          135deg,
          rgba(1, 1, 1, 0.18),
          rgba(1, 1, 1, 0.18) 3px,
          rgba(0, 0, 0, 0.09) 0,
          rgba(0, 0, 0, 0.09) 6px,
          rgba(0, 0, 0, 0.08) 0,
          rgba(0, 0, 0, 0.08) 9px,
          rgba(1, 1, 1, 0.05) 0,
          rgba(1, 1, 1, 0.05) 12px,
          rgba(0, 0, 0, 0.01) 0,
          rgba(0, 0, 0, 0.01) 15px,
          rgba(1, 1, 1, 0.12) 0,
          rgba(1, 1, 1, 0.12) 18px,
          rgba(0, 0, 0, 0.05) 0,
          rgba(0, 0, 0, 0.05) 21px,
          rgba(1, 1, 1, 0.16) 0,
          rgba(1, 1, 1, 0.16) 24px,
          rgba(1, 1, 1, 0.07) 0,
          rgba(1, 1, 1, 0.07) 27px,
          rgba(1, 1, 1, 0.23) 0,
          rgba(1, 1, 1, 0.23) 30px,
          rgba(0, 0, 0, 0.2) 0,
          rgba(0, 0, 0, 0.2) 33px,
          rgba(0, 0, 0, 0.18) 0,
          rgba(0, 0, 0, 0.18) 36px,
          rgba(1, 1, 1, 0.12) 0,
          rgba(1, 1, 1, 0.12) 39px,
          rgba(1, 1, 1, 0.13) 0,
          rgba(1, 1, 1, 0.13) 42px,
          rgba(1, 1, 1, 0.2) 0,
          rgba(1, 1, 1, 0.2) 45px,
          rgba(1, 1, 1, 0.18) 0,
          rgba(1, 1, 1, 0.18) 48px,
          rgba(0, 0, 0, 0.2) 0,
          rgba(0, 0, 0, 0.2) 51px,
          rgba(1, 1, 1, 0) 0,
          rgba(1, 1, 1, 0) 54px,
          rgba(0, 0, 0, 0.03) 0,
          rgba(0, 0, 0, 0.03) 57px,
          rgba(1, 1, 1, 0.06) 0,
          rgba(1, 1, 1, 0.06) 60px,
          rgba(1, 1, 1, 0) 0,
          rgba(1, 1, 1, 0) 63px,
          rgba(0, 0, 0, 0.1) 0,
          rgba(0, 0, 0, 0.1) 66px,
          rgba(1, 1, 1, 0.19) 0,
          rgba(1, 1, 1, 0.19) 69px
        ),
        linear-gradient(90deg, #ef3573, #4f025d);
    }
  }
}
.flip {
  transform: rotateY(180deg);
}
// .once-active:active {
//   transform: scale(0.97);
//   transition: transform 0.2s;
// }
@keyframes cards {
  to {
    transform: rotateY(180deg);
    // transform: scale(1);
  }

  50% {
    transform: scale(0.97);
  }
}
</style>
