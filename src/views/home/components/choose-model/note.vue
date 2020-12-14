<template>
  <div class="choose-note">
    <div class="head-pic"><img :src="headImg"
           alt="">
    </div>
    <div>
      <h2><a href="http://shenxiaoyu.cn/doc/">前端笔记</a></h2>
      <div>最近摘要</div>
      <ul>
        <li><a target="_blank"
             href="http://shenxiaoyu.cn/doc/guide/performance/#%E8%8E%B7%E5%8F%96%E7%9B%AE%E5%BD%95%E4%B8%8A%E4%B8%8B%E6%96%87">web性能优化归纳</a></li>
        <li><a target="_blank"
             href="http://shenxiaoyu.cn/doc/guide/webpack/webpack5.html">webpack5从0配置vue</a></li>
        <li><a target="_blank"
             href="http://shenxiaoyu.cn/doc/guide/node/">node简单实现爬虫</a></li>
        <li><a target="_blank"
             href="http://shenxiaoyu.cn/doc/hjs/notes/math/formula.html#%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0">三角函数在web中的应用</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import headImg from '@/assets/img/bike.png'
export default {
  data () {
    return {
      headImg
    }
  }
}
</script>

<style lang='scss' scoped>
.choose-note {
  margin-top: 10px;
  a {
    text-decoration: none;
  }
  .head-pic {
    width: 90%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
