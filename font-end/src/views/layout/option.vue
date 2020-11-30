<template>
  <div class="app-option">
    <ne-form ref="options-form" label-width="80px">
      <h2>【{{option.type}}】</h2>
      <ne-form-item  label="组件编号：">
        <span>{{option.domId}}</span>
      </ne-form-item>
      <template v-if="option.type === 'CHOICE_SINGLE'">
        <chioce-item :value="option"></chioce-item>
      </template>
    </ne-form>
  </div>
</template>
<script>
  import chioceItem from '@/views/itemOption/chioceItem.vue'
   export default {
    name:'AppOption',
    components:{
      chioceItem
    },
    props:{
      option:{
        type:Object
      }
    }
   }
</script>
<style rel="stylesheet/scss" lang="scss">
  .app-option {
    width: 360px;
    padding: 0 10px 0 5px;
    overflow: auto;
    border-left: 1px solid #e8e8e8;
  
    h2 {
      margin: 13px 0;
      font-size: 14px;
    }
  
    .ne-form {
      padding-bottom: 30px;
  
      > h3 {
        background-color: #f2f3f4;
        padding: 5px 10px;
        font-size: 14px;
      }
  
      .ne-form-item {
        margin-bottom: 5px;
      }
    }
  }
  </style>