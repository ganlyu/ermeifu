<template>
  <div class="content">
    <div class="fixed-head" id="home_index">
      <div class="nav">
        <router-link id="home_head_title" class="head-title" to="/goods">{{ goods_type }}</router-link>
        <router-link id="home_head_title2" class="head-title" to="/address">{{ address_title }}</router-link>
      </div>
      <div class="slide-logo">
        <span class="icon"></span>
      </div>
      <div class="logo">
        <img class="img" src="@/assets/img/logo.jpg">
      </div>
      <div class="empty"></div>
    </div>
    <div class="wrapper">
      <div class="banner">
        <div class="text">
          <div class="titles">{{ souce }}</div>
          <p class="title-p">{{ text_detail }}</p>
          <el-button class="title-button" @click="onClick">{{ index_button_title }}</el-button>
        </div>
      </div>
    </div>
    <div class="brand">
      <div class="top-title">{{ text_detail2 }}</div>
      <div class="title">
        <img class="logs-img" src="@/assets/img/logs.jpg">
      </div>
      <div class="brand-content">
        <div class="content-box">
          <div v-for="(item, index) in list" :key="index" style="width: 49%;
            display: flex;
            flex-direction: column;
            cursor: pointer;">
            <div class="img-box">
              <img :src='item.img_name'>
              <p>{{ item.detail }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods">
      <div class="goods-title">
        <img style="width: 100%;height: auto;" src="@/assets/img/choose.jpg">
      </div>
      <div class="goods-item-box">
        <el-carousel :interval="4000" type="card" height="500px">
          <el-carousel-item v-for="(item, index) in goods_items" :key="index">
            <img :src="item.image" :alt="item.name" class="carousel-img">
            <div class="carousel-caption">{{ item.name }}</div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="more">
        <el-button class="title-button" @click="onClick">{{ index_button_title }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config.js'
export default {
  data() {
    return {
      souce: config.text_souce, text_detail: config.text_detail, index_button_title: config.index_button_title, text_detail2: config.text_detail2, list: config.log_list, goods_items: config.goods_items,
      goods_type: config.goods_type,
      address_title: config.address_title
    }
  },
  methods: {
    onClick() {
      this.$router.push('/goods');
    }
  }
}
</script>