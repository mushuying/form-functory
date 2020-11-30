<template>
  <div>
    <div class="topic-box">
      <div class="titleBox">
        <div class="title">{{value.title.text}}</div>
      </div>
      <div class="topic-option">
        <div v-for="(item,index) in value.items" :key="index">
          <div class="option-text"  @click="optionTextClick">
             <p class="letter-wrapper">
              <span>{{item.head}}</span>
             </p>
             <p class="text"> <span>{{item.field.text}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 export default {
   name:'base-chioce',
   props: ['value'],
   mounted(){
   },
   methods:{
      optionTextClick(){
        
      }
   }
 }
</script>
<style  lang="scss" scoped>
  .topic-box{
    width: 100%;
    height: auto;
    /* overflow: scroll; */
    border-radius: 24px;
    position: relative;
      .topic-option{
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 10px 16px;
        text-align: left;
        border:1px solid  #DDDDDD;
      }
      .titleBox{
        width: 100%;
        box-sizing: border-box;
        padding: 19px 0 0 16px;
      }
      .option-text {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 6px;
        border: 3px solid #DDDDDD;
        cursor: pointer;
        transition: border-color ease-in-out .2s;
        margin:5px 0 5px 0;
        .letter-wrapper {
          position: absolute;
          width: 20px;
          text-align:center;
          top: 2px;
          left: 0;
          border-right:3px solid #DDDDDD;
        }.text{
          min-height: 22px;
          line-height: 22px;
          margin-left:25px;
        }
      }
      
  }
</style>