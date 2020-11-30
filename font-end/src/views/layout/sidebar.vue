
<template>
  <div class="app-sidebar">
    <div class="sidebar-menu-group" v-for="(menu, index) in menuData" :key="index">
      <div class="menu-group-title" >
        {{menu.title}}
      </div>
        <div  class="menu-group-list">
          <div class="menu-item"
               :data-key="item.key"
               draggable="true"
               @dragstart="menuDrag($event, item.key)"
               v-for="item in menu.items" :key="item.key">
            <div class="item-icon-box">
            </div>
            <p class="item-text-box">{{item.text}}</p>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  import { reactive,toRefs } from "@vue/composition-api";
  import menuConfig from '@/config/menu.config.js'
  export default {
    name: 'AppSide',
    setup(){
      const state = reactive({
        menuData:menuConfig
      })
      const menuDrag=(e,key)=>{
        e.dataTransfer.setData('cmp-type', key)
        e.dataTransfer.setData('text','Hello World')
      }
      return{
        ...toRefs(state),
        menuDrag
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

  .app-sidebar {
    width: 290px;
    border-right: 1px solid #e8e8e8;
    padding-left: 14px;
    padding-bottom: 20px;
    box-sizing: border-box;
    overflow-y: auto;
  
    &::-webkit-scrollbar {
      width: 5px;
      height: 1px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
      background: rgba(0, 0, 0, 0.1);
    }
  
    .sidebar-menu-group {
      position: relative;
  
      .menu-group-title {
        position: relative;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
        font-size: 14px;
  
        > i {
          position: absolute;
          right: 12px;
          top: 14px;
          color: #999;
        }
      }
      .menu-group-list {
        overflow: hidden;
  
        .menu-item {
          position: relative;
          box-sizing: content-box;
          float: left;
          width: 85px;
          height: 85px;
          background: #f4f5f6;
          border-right: 1px solid #fff;
          border-bottom: 1px solid #fff;
          cursor: pointer;
          z-index: 0;
  
          &:hover {
            opacity: .6;
          }
  
          /* &:nth-child(2n) {
            border-right: 0;
          }*/
  
          .item-icon-box {
            text-align: center;
            margin-top: 18px;
            height: 32px;
  
            > .fa {
              font-size: 24px;
              color: #409eff;
            }
          }
  
          .item-text-box {
            text-align: center;
            height: 20px;
            line-height: 20px;
            margin: 0;
            font-size: 12px;
          }
        }
      }
    }
  }
  </style>