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
</template>

<style lang="less" scoped>
// 必须导入variables.less
@import '@/assets/styles/variables.less';
@import '@/assets/styles/mixins.less';
h1 {
  background-color: @warnColor;
  .hoverShadow();
}
</style>
