<template>
  <el-container>
    <el-main class="container-css">
      <div id="app"><router-view /></div>
    </el-main>
    <el-footer class="footer">
      <div class="footer-logo">
        <img class="img" src="@/assets/img/logo.jpg">
      </div>
      <div><el-backtop :right="100" :bottom="100" /></div>
      <div class="footer-info">
        <div class="footer-address">
          <span>全球服务热线：{{ tel }}</span>
          <span>地址：{{ address }}</span>
        </div>
        <span>{{ record_number }}</span>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import config from '@/config.js'

export default {
  name: 'App',
  data() {
    return { tel: config.tel, address: config.address, record_number: config.record_number }
  }
}
</script>
