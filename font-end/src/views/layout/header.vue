<template>
  <header class="app-header">
    <div class="header-name">H5 表单生成器</div>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-header {
    position: relative;
    height: 60px;
    line-height: 60px;
    background: #ffffff;
    font-size: 18px;
    box-shadow:0 20px 20px -20px #e6e6e6;
   .header-name{
     width:200px;
     height: 60px;
     line-height:60px;
     color:#409eff;
     padding-left:20px;

   }
  }
</style>