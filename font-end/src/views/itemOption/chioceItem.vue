<template>
<div class="config">
  <ne-form ref="form" :model="formData" :rules="rules" >
  <h3><ne-icon icon="edit"></ne-icon>【单选题配置】</h3>
    <h2>题干</h2>
    <ne-form-item label="文字" prop="value.title.text">
      <limit-input v-model="value.title.text" :max="maxTitleLength" type="textarea" :rows="3" />
    </ne-form-item>
    <template v-for="(option,idx) in value.items">
       <div :key="idx" class="card">
          <span>选项 {{option.head}}</span>
          <ne-form-item
          prop="option.field.text">
          <limit-input
            v-model="option.field.text"
            :max="maxTextLength"
            type="textarea" :rows="3" />
        </ne-form-item>
       </div>
    </template>
      <ne-button class="button-border" type="primary" @click="add">增加选项</ne-button>
      <ne-button class="button-border" type="primary" @click="dele">删除项目</ne-button>
  </ne-form>
</div>
</template>
<script>
  import limitInput from '@/common/limitInput.vue'
  import { reactive,toRefs } from "@vue/composition-api";
  export default {
    components:{
      limitInput
    },
    name:'choice-itme',
     props:{
      value:Object
    },
    setup(props){
      const state = reactive({
        maxTitleLength:120,
        maxTextLength:20,
        rules:{
          request:true
        },
        formData:{
        }
      })
      const add=()=>{
        if(props.value.items.length<9){
          const oldSize = props.value.items.length
          let codeList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
          props.value.items.push({cid: oldSize + 1,
            head: codeList[oldSize],
            field: { text: ' ' }})
        }
      }
      const dele = ()=>{
        if(props.value.items.length>1){
          const oldSize = props.value.items.length
          props.value.items.splice(oldSize-1,1)
         }else{
           return
         }
      }
      return {
        ...toRefs(state),
        add,
        dele
      }
    }
  }
</script>
<style lang="scss">
  .config{
   margin-top:16px;
    h3 {
      background-color: #f2f3f4;
      padding: 5px 10px;
      font-size: 14px;
    }
    .card{
      border-radius: 4px;
      border: 1px solid #ebeef5;
      background-color: #fff;
      overflow: hidden;
      color: #303133;
      transition: .3s;
      margin-top:10px;
      padding:10px 0 10px 10px;
    }
    .button-border{
      margin:30px;

    }
  }
  
</style>