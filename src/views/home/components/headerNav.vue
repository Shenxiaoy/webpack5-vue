<template>
  <div class="game-header">
    <div class="header-wrap">
      <div class="header-left">
        <div v-for='(item, k) in chooseHero.left'
             :key='k'
             class="hero-item">
          <img :src="getTailorSize(item.url)"
               alt="">
          <div class="hero-name">{{item.name}}</div>
        </div>
      </div>
      <div class="header-center">
        <div class="center-area"></div>
      </div>
      <div class="header-right">
        <div v-for='(item, k) in chooseHero.right'
             :key='k'
             class="hero-item">
          <img :src="getTailorSize(item.url)"
               alt="">
          <div class="hero-name">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './style.css'
import './ss.scss'
export default {
  name: 'header-nav',
  data () {
    return {
      chooseHero: {
        left: [
          {
            url: 'https://chat.shenxiaoyu.cn/dashu.jpg',
            name: '大树精的'
          },
          {
            url: 'https://chat.shenxiaoyu.cn/fengxing.png',
            name: '风行者'
          },
          {
            url: 'https://chat.shenxiaoyu.cn/guangfa.jpg',
            name: '光法'
          },
          {
            url: 'https://chat.shenxiaoyu.cn/heiniao.jpg',
            name: '黑鸟'
          },
          {
            url: 'https://chat.shenxiaoyu.cn/houzi.jpg',
            name: '猴子'
          }],
        right: [
          {
            url: "https://chat.shenxiaoyu.cn/lianjin.png",
            name: '炼金'
          },
          {
            url: "https://chat.shenxiaoyu.cn/najiahaiyao.jpg",
            name: '小娜迦'
          },
          {
            url: "https://chat.shenxiaoyu.cn/quanneng.jpg",
            name: '蝙蝠'
          },
          {
            url: "https://chat.shenxiaoyu.cn/siwangxianzhi.jpg",
            name: '谜团'
          },
          {
            url: "https://chat.shenxiaoyu.cn/ta.jpg",
            name: 'TA'
          }]
      }
    }
  },
  methods: {
    getTailorSize (url) {
      return `${url}?imageView2/1/w/400/h/350/q/75`
    }
  }
}
</script>

<style lang='scss' scoped>
.game-header {
  width: 100%;
}
.header-wrap {
  width: 1100px;
  margin: 0 auto;
  height: 60px;
  min-width: 904px;
  background: url("https://chat.shenxiaoyu.cn/bg.gif") repeat;
  display: flex;
  justify-content: space-between;

  .header-left,
  .header-right {
    width: 50%;
    min-width: 400px;
    display: flex;
    .hero-item {
      // width: 20%;
      height: 60px;
      margin-left: 10px;
      position: relative;
      img {
        display: inline-block;
        width: 100%;
        height: 100%;
        transform: skew(-20deg);
        cursor: pointer;
        transition: all 1s;
        border: 1px solid transparent;
      }
      img:hover {
        border: 1px solid white;
      }

      .hero-name {
        position: absolute;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 10px;
        white-space: nowrap;
      }
    }
  }
  .header-left .hero-item img {
    display: inline-block;
    width: 100%;
    height: 100%;
    transform: skew(20deg);
  }
  .header-center {
    width: 150px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .center-area {
      width: 60px;
      height: 100%;
      border-radius: 50%;
      box-shadow: inset 1px -2px 5px rgba(163, 45, 68, 0.4);
      animation: spin 5s linear infinite;
      &::before,
      &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: inherit;
        box-shadow: inherit;
        top: 0;
        left: 0;
      }

      &::before {
        filter: blur(5px);
      }

      &::after {
        filter: blur(10px);
      }
    }
  }
}
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
