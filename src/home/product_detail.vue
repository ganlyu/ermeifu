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
        <el-breadcrumb-item :to="{ path: '/goods' }">腕表系列</el-breadcrumb-item>
        <el-breadcrumb-item>{{ product_name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="goods" style="padding-bottom: 0">
      <div class="white">
        <div class="details">
          <div class="left">
            <img class="detail-img" :src="left_img" />
          </div>
          <div class="right">
            <div class="detail-top">
              <span class="detail-title-name">{{ product_name }}</span>
            </div>
            <div class="detail-imgs">
              <div v-for="(  item, index  ) in   imgs  " :key="index" class="detail-img-min">
                <img @click="onClick(item)" style="width: 100%; height: 100%;object-position: center;object-fit: cover;"
                  :src="item" alt>
              </div>
            </div>
            <div class="detail-price">
              <span class="detail-num" style="margin-left: -10px;">{{ product_price }}</span>
              <span>国内售价</span>
            </div>
            <div class="detail-parameter">
              <h2 style="font-weight: 400;">产品参数</h2>
              <div style="width: 100%;display: flex;flex-wrap: wrap; margin-top: 24px;">
                <div class="detail-item">
                  <div class="detail-tr">型号</div>
                  <div class="detail-hd">{{ params.type }}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-tr">机芯类型</div>
                  <div class="detail-hd">{{ params.movement_type }}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-tr">表径</div>
                  <div class="detail-hd">{{ params.watch_diameter }}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-tr">表盘形状</div>
                  <div class="detail-hd">{{ params.watch_shape }}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-tr">防水深度</div>
                  <div class="detail-hd">{{ params.waterproof }}</div>
                </div>
                <div class="detail-item">
                  <div class="detail-tr">表圈材质</div>
                  <div class="detail-hd">{{ params.watch_ring_material }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from '@/config';
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      goods_type: config.goods_type, address_title: config.address_title, imgs: [], product_details: config.product_details,
      product_name: '',
      product_price: '',
      params: '',
      left_img: ''
    }
  },
  created() {
    var id = useRoute().query.id
    this.left_img = ''
    this.product_name = ''
    this.product_price = ''
    this.params = []
    this.imgs = []
    this.product_details.forEach(element => {
      if (Number(id) === Number(element.id)) {
        this.left_img = element.images[0]
        this.product_name = element.name
        this.product_price = element.price
        this.imgs = element.images
        this.params = element.params
      }
    });
  },
  methods: {
    onClick(url) {
      // 点击事件,替换 大图
      this.left_img = url
    }
  }
}
</script>