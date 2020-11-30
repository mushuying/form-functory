<!--
  有内容长度限制和提醒的输入项
-->
<template>
  <div class="ne-limit-input">
    <input class="input-size" v-model="myValue" :type="type" :maxlength="max" :rows="rows" />
    <div class="tip">
      <span>{{myValue.length}}/{{max}}</span>
    </div>
  </div>
</template>

<script>
  import { watch,reactive,toRefs } from "@vue/composition-api";
  export default {
    name:'limit-input',
    props: ['value', 'max', 'type', 'rows'],
   setup(props,context){
      const state = reactive({
        myValue:props.value||''
      })
      watch(()=>state.myValue,(newValue)=>{
        state.myValue = newValue||''
        context.emit('input',state.myValue)
      })
      return {
        ...toRefs(state)
      }
    }
  }
</script>

<style lang="scss">
  .ne-limit-input {
    position: relative;
    .input-size{
      width: 280px;
      height: 30px;
      line-height:30px;
      font-size:16px;
    }
  }

  .ne-limit-input .tip {
    position: absolute;
    right: 10px;
    bottom: 0;
    font-size: 12px;
    line-height: 20px;
    color: #b9b5b5;
  }

</style>
