<template>
  <div class="content">
    <div class="fixed-head2">
      <div class="nav">
        <router-link id="home_head_title" class="head-title2" to="/goods">{{ goods_type }}</router-link>
        <router-link id="home_head_title2" class="head-title2" to="/address">{{ address_title }}</router-link>
      </div>
      <div class="slide-logo">
        <span class="icon"></span>
      </div>
      <div class="logo">
        <img class="img" src="@/assets/img/logo.jpg">
      </div>
      <div class="empty"></div>
    </div>
    <div class="breadcrumb" style="margin-left: -30px;">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>腕表系列</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="goods">
      <div class="list">
        <div v-for="(item, index) in product_list" :key="index" style="display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        margin-bottom: 25px;
        cursor: pointer;">
          <img style="width: 100%;
          height: auto;" :src="item.image" @click="onClick(item.id)" alt>
          <span class="name">{{ item.name }}</span>
          <span class="price">{{ item.price }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config';

export default {
  data() {
    return {
      product_list: config.product_list, goods_type: config.goods_type,
      address_title: config.address_title
    }
  },
  methods: {
    onClick(id) {
      this.$router.push('/detail?id=' + id);
    }
  }
}
</script>