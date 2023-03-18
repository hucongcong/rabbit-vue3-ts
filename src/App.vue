<script lang="ts" setup>
import request from '@/utils/request'
const test = async () => {
  const res = await request.get('/home/index')
  console.log(res)
}
test()
</script>

<template>
  <h1>App根组件</h1>
  <p>哈哈哈</p>
  <ul>
    <li>123</li>
    <li>456</li>
  </ul>
</template>

<style lang="less" scoped>
h1 {
  background-color: @warnColor;
  .hoverShadow();
}
</style>
