<template>
  <div>
      <label v-if="label">{{label}}</label>
      <slot></slot>
      {{errMessage}}
  </div>
</template>
<script>
  import Schema from 'async-validator'
  export default {
    name:'ne-form-item',
    props:{
        label:{ // 标签
            type:String,
            default:''
        },
        prop:String // 当前校验哪一个属性
    },
    mounted(){
        this.$on('validate',function () {
            this.validate(); // 校验是否符合规范
        });
    },
    data(){
        return {errMessage:''}
    },
    methods:{
      validate(){
        if(this.prop){
          let rule = this.enForm.rules[this.prop];
          let newValue = this.enForm.model[this.prop];
          let descriptor = {
            [this.prop]:rule
          }
          console.log(descriptor)
          let schema = new Schema(descriptor)
          
          return schema.validate({[this.prop]:newValue},(err)=>{
            if(err){
              this.errMessage = err[0].message;
            }else{
              this.message = ''
            }
          })
        }
      }
    }
  }
</script>