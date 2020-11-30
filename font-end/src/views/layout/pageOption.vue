<template>
  <div class="app-option">
    <ne-form ref="options-form" label-width="80px" class="ne-form">
      <h2>【页面配置】</h2>
        <template v-for="(item, idx) in option.base">
          <ne-form-item
                  v-if="item.type === 'text'"
                  :label="item.label + '：'" :key="idx" class="ne-form-item">
            <ne-input v-model="item.val"
                    :maxlength="item.maxLength || 128"
                    :placeholder="item.placeholder ? item.placeholder : item.isNecessary ? '必填' : '非必填'"
                    @blur="item.rules ? inputBlur(item.rules, item) : null" class="ne-input">
            </ne-input>
          </ne-form-item>
        </template>

    </ne-form>
  </div>
</template>

<script>
  export default {
    name: 'AppPageOption',
    props: {
      option: {
        type: Object
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

      > h2{
        background-color: #f2f3f4;
        padding: 5px 10px;
        font-size: 14px;
      }

      .ne-form-item {
        margin-bottom: 5px;
        .ne-input{
           width: 260px;
           height: 30px;
        }

      }
    }
  }
</style>
