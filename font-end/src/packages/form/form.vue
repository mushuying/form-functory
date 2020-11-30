<template>
  <form @submit.prevent>
      <slot></slot>
  </form>
</template>
<script>
  export default {
    name:'ne-form',
    provide(){
        return {enForm:this}  
    },
    props:{
        model:{
            type:Object,
            default:()=>({})
        },
        rules:Object
    },
    methods:{
      async validate(cb){
        let children  = this.$children
        let arr = []
        function findFormItem(children){
          children.forEach(child=>{
              if(child.$options.name === 'en-form-item'){
                arr.push(child)
              }
              if(child.$children){
                findFormItem(child.$children)
              }
          })
        }
        findFormItem(children)
        try{
            await Promise.all(arr.map(child=>child.validate()))
            cb(true)
        }catch{
            cb(false)
        }
      }
    }
  }
</script>