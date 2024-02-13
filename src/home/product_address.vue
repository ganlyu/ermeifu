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
        <el-breadcrumb-item>{{ address_title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="address-content">
      <div class="address">
        <div class="warp">
          <div class="address-title">
            <img style="width: 100%; height: auto;" src="@/assets/img/authorize.jpg" alt>
          </div>
          <div class="shop">
            <div v-for="(item, index) in shop_list" :key="index" style="width: 48%;">
              <img style="width: 100%; height: auto; margin-bottom: 24px;" :src="item.image" alt>
              <div class="info">
                <div>
                  <el-icon style="font-size: 24px;">
                    <MapLocation />
                  </el-icon>
                  <span style="font-size: 20px;
                  font-family: PingFangSC-Regular,PingFang SC;
                  color: #000;margin-left: 10px;">{{ item.name }}</span>
                </div>
                <div>
                  <el-icon style="font-size: 24px;">
                    <Phone />
                  </el-icon>
                  <span style="margin-left: 10px;font-size: 16px;
                  font-family: PingFangSC-Regular,PingFang SC;
                  color: #4b4b4b;">{{ item.address }}</span>
                </div>
                <div>
                  <span style="margin-left: 33px;font-size: 16px;
                  font-family: PingFangSC-Regular,PingFang SC;
                  color: #4b4b4b;">{{ item.tel }}</span>
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

export default {
  data() {
    return {
      goods_type: config.goods_type, address_title: config.address_title, shop_list: config.shop_list
    }
  }
}
</script>