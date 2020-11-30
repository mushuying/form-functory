<template>
  <svg class="ne-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
 </svg>
</template>
<script>
 import '../../assets/icon'
  export default {
    name:'ne-icon',
    props:{
        icon:{
            type:String,
            required:true
        }
    }
  }
</script>
<style lang="scss">
  .ne-icon{
      width: 25px;
      height:25px;
      vertical-align: middle;
  }
  </style>