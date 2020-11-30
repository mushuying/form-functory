<template>
  <ne-row class="app-toolbar">
    <ne-col :span="6">
      <span><i class="fa fa-mobile-phone"></i> 当前适配设计稿：750x1334 px</span>
    </ne-col>
    <ne-col :span="12">
      <div class="bar-btn" @click="showPreview()">
        <i class="ne-icon-view"></i>
        <span>预览</span>
      </div>
      <div class="bar-btn" @click="savePageSet()">
        <i class="ne-icon-edit"></i>
        <span>保存</span>
      </div>
      <div class="bar-btn" @click="uploadPageSet()">
        <i class="ne-icon-edit"></i>
        <span>发布</span>
      </div>
    </ne-col>
    <ne-col class="3">
      <div class="bar-btn" @click="showPageSet">
        <i class="ne-icon-setting"></i>
        <span>页面设置</span>
      </div>
    </ne-col>
  </ne-row>
</template>
<script>
  export default {
    name: 'AppToolbar',
    setup(props,context){
        const  showPageSet = ()=>{
           context.emit('showPageSet')
        }
        const  showPreview = ()=>{
           context.emit('showPreview')
        }
        const  uploadPageSet = ()=>{
           context.emit('uploadPageSet')
        }
        const  savePageSet = ()=>{
           context.emit('savePageSet')
        }
        return{
          showPageSet,
          showPreview,
          uploadPageSet,
          savePageSet
        }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .app-toolbar {
    position: relative;
    height: 40px;
    line-height: 38px;
    padding-left: 15px;

    > :last-child {
      text-align: right;
    }

    .bar-btn {
      display: inline-block;
      white-space: nowrap;
      padding: 0 16px;
      font-size: 14px;
      text-align: center;
      vertical-align: middle;
      user-select: none;
      cursor: pointer;

      &:hover {
        background-color: #e8e8e8;
      }
    }
  }
</style>