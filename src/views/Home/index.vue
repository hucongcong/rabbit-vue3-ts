<script lang="ts" setup name="Home">
import HomeCategory from './components/home-category.vue'
import HomeBanner from './components/home-banner.vue'
</script>

<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- banner轮播图 -->
        <HomeBanner />
      </div>
    </div>
  </div>
</template>

<style></style>
