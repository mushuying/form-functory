<template>
  <div class="app-body">
    <app-sidebar></app-sidebar>
    <div class="app-main">
      <app-toolbar v-on:showPageSet="showPageSet"
                   v-on:savePageSet="savePageSet"
                   v-on:showPreview="showPreview"
                   v-on:uploadPageSet="uploadPageSet"></app-toolbar>
      <div class="scroll-y">
        <div class="app-phone" 
            @dragover.self="dragPhoneOver"
            @dragleave.self="dragPhoneLeave"
            @drop.self="dropPhone"
            @dragover.prevent>
          <template v-for="(comp, idx) in compList" >
            <div v-if="comp.type === 'placeholder'"
                class="place-holder"
                @dragover.stop="dragover"
                @dragleave.stop="dragleave"
                @drop.stop="drop"
                @dragover.prevent
                :key="idx"
                :data-index="idx">放在这里</div>
            <div v-else :class="['tpl-container', comp.active ? 'current' : '']"
            :data-index="idx" @click.capture="clickComp" :key="idx">
                <!--文本控件-->
              <base-chioce v-if="comp.type === 'CHOICE_SINGLE'" :value="comp"></base-chioce>
              <base-chioce v-if="comp.type === 'CHOICE_MULTI'" :value="comp"></base-chioce>
            </div>
          </template>
      </div>
      </div>
        
    </div>
    <app-opt v-if="currentConfig" :option="currentConfig"></app-opt>
    <app-page-opt v-else :option="pageConfig"></app-page-opt>
  </div>
</template>

<script>
  import util from '@/utils/util.js'
  import appSidebar from '@/views/layout/sidebar.vue'
  import appToolbar from '@/views/layout/toolbar.vue'
  import appOpt from '@/views/layout/option.vue'
  import appPageOpt from '@/views/layout/pageOption.vue'
  import pageOption from '@/config/page.config.js'
  import compConfig from '@/config/comp.config.js'
  import {Message} from '@/components/message/message.js'
  import {reactive,toRefs} from '@vue/composition-api'
 
  export default {
    name: 'AppHeader',
    components:{
      appSidebar,
      appOpt,
      appToolbar,
      appPageOpt
    },
    setup(){
        const state = reactive({
          compList: [{
            type: 'placeholder'
          }],
          currentConfig:null,
          pageConfig: util.copyObj(pageOption),
          currentIndex:-1,
        })
        // const{showPageSet,savePageSet,showPreview,resetCompUnchecked} = toolbar()
        // const{dragPhoneOver,dragPhoneLeave,dropPhone} = scroolPhone()
        const dragPhoneOver = ()=>{
          const target = document.querySelector('.place-holder:last-child')
          if(target && !target.classList.contains('active')) target.classList.add('active')
        }
        const dragPhoneLeave=()=>{
            const target = document.querySelector('.place-holder:last-child')
            target && target.classList.remove('active')
        }
        const dropPhone=()=>{

        }
        const dragover = (e)=>{
          const target = e.target
          if (!target.classList.contains('active')) target.classList.add('active')
        }
        const dragleave=(e)=>{
            e.target.classList.remove('active')
        }
        const drop = (e)=>{
          const target = e.target
          target.classList.remove('active')
          const key = e.dataTransfer.getData('cmp-type')
          const idx = parseInt(target.dataset.index)
          if (compConfig[key]) {
            resetCompUnchecked()
            replacePlaceholderWithComp(idx, key)
          } else {
            Message.warning({message:'没有查询到该组件的配置信息。。。'})
          }
        }
        const showPageSet = ()=>{
          resetCompUnchecked()
          state.currentIndex=-1
          state.currentConfig = null
        }
        const savePageSet = ()=>{
          console.log(state.compList)
          console.warn('save Info: ', JSON.stringify(state.compList))
          Message.success({message:'打开chomre devtool查看保存的信息！'})
        }
        const showPreview=()=>{
          localStorage.setItem('pageConfig', JSON.stringify(state.pageConfig))
        }
        const uploadPageSet=()=>{
          console.log(state.compList)
          function ajax(parms){
            let xhr = new XMLHttpRequest
            xhr.open(parms.method,parms.url,true)
            xhr.setRequestHeader('Content-type','application/json')
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4&&xhr.status==200){
                  console.log(xhr.responseText)
                }
            }
            xhr.send(JSON.stringify(parms.data))
          }
          let parms = {
             method:'POST',
             url:'http://localhost:4000/h5page',
             data:state.compList
          }
          ajax(parms)
        }
        const resetCompUnchecked =()=>{
          state.compList.forEach((val) => {
            if (val.active) {
              val.active = false
            }
          })
        }
        const replacePlaceholderWithComp=(index, key)=>{
          const comp = util.copyObj(compConfig[key])
          const config = {
            type: key,
            active: true,
            domId: key + '-' + util.createDomID()
          }
          Object.assign(comp, config)
          state.compList.splice(index + 1, 0, comp)
          // 再插入一个占位控件
          state.compList.splice(index + 2, 0, {
            type: 'placeholder'
          })
          // 显示配置项
          state.currentIndex = index + 1
          state.currentConfig = comp
        }
        const clickComp=(e)=>{
          console.log(e,"e")
          const idx = parseInt(e.currentTarget.dataset.index)
          state.compList.forEach((val, index) => {
            if (index === idx) {
              val.active = true
              state.currentIndex = index
              state.currentConfig = val
            } else {
              val.active = false
            }
          })
        }
     return {
      ...toRefs(state),
      dragleave,
      dragover,
      drop,
      showPageSet,
      savePageSet,
      showPreview,
      uploadPageSet,
      resetCompUnchecked,
      dragPhoneOver,
      dragPhoneLeave,
      dropPhone,
      replacePlaceholderWithComp,
      clickComp
     }   
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-main {
    position: relative;
    flex: 1;
    min-width: 377px;
    background-color: #f2f3f4;

    .scroll-y {
      position: absolute;
      top: 40px;
      bottom: 0;
      width: 100%;
      padding-top: 30px;
      padding-bottom: 30px;
      overflow-y: auto;
    }

    .app-phone {
      position: relative;
      box-sizing: border-box;
      width: 377px;
      min-height: 667px;
      padding-bottom: 200px;
      margin: 0 auto;
      background-color: #fff;
      transform: translateX(-20px);

      .place-holder {
        position: relative;
        display: block;
        height: 10px;
        text-align: center;
        font-size: 0;
        background: #fff;
        background-image: linear-gradient(#fff 2px, transparent 0), linear-gradient(90deg, #999 1px, transparent 0);
        background-size: 3px 3px, 3px 3px;

        &.active {
          height: 40px;
          line-height: 40px;
          border: 1px dashed #f32e37;
          background-color: #ffe800;
          background-image: none;
          color: #333;
          font-size: 14px;
          margin: 0;
        }
      }

      .tpl-container {
        position: relative;
        width: 100%;
        background-color: transparent;
        position: relative;
        border: 1px solid #f2f3f4;
        transition: opacity .1s ease-out;
        user-select: none;
        box-sizing: border-box;
        z-index: auto;
        opacity: 1;
        cursor: pointer;

        /* &.current {
          border: 1px solid #2aa7ff;

          .comp-menu {
            display: block;
          }
        } */

        .comp-content {
          position: relative;
        }
      }
    }

    .comp-menu {
      position: absolute;
      display: none;
      top: 0;
      right: -38px;
      width: 32px;

      > a {
        display: inline-block;
        position: relative;
        width: 36px;
        height: 36px;
        margin-bottom: 2px;
        text-align: center;
        color: #666;
        background: #fff;
        font-size: 18px;
        line-height: 36px;

        &.disabled {
          color: #e4e4e4;
        }

        &:hover {
          &.disabled {
            color: #e4e4e4;
          }
          color: #333;
          .tips {
            display: block;
          }
        }

        .tips {
          font-size: 12px;
          position: absolute;
          left: 120%;
          background-color: #111;
          height: 18px;
          padding: 0 5px;
          line-height: 19px;
          border-radius: 2px;
          white-space: nowrap;
          display: none;
          color: #eee;
          top: 5px;

          &::before {
            content: ' ';
            display: block;
            position: absolute;
            left: -5px;
            top: 4.5px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 5px 6px 5px 0;
            border-color: transparent #111 transparent transparent;
          }
        }
      }
    }

    .absolute-tpl {
      width: 377px;
      margin: 0 auto;
      transform: translateX(-20px);
      border-top: 1px solid #e8e8e8;

      &.current {
        border: 1px solid #2aa7ff;

        .comp-menu {
          display: block;
        }
      }
    }
  }
</style>