<template>
  <div class="ne-upload">

    <template>
    <div @click="handleClick" class="zh-upload-btn">
      <slot></slot>
    </div>
    <input type="file" :accept="accept" :multiple="multiple"
    @change="handleChange"
    :name="name"
    ref="input"
    class="input">
    </template>
    <div>
      <slot name="tip"></slot>
    </div>
  </div>
</template>
<script>
  // import ajax from "./ajax";
export default {
  name:'ne-upload',
  props:{
    name:{
      type:String,
      default:"file"
    },
    action:{
      type:String,
      required:true
    },
    fileList:{
      type:Array,
      default: () => []
    },accept: String,
    multiple: Boolean,
    onChange: Function,
    onSuccess: Function,
    onError: Function,
    onProgress: Function,
    beforeUpload: Function,
    // httpRequest: {
    //   type: Function,
    //   default: ajax
    // },
    drag: {
      type: Boolean,
      default: false
    }

  },
  methods:{
    handleClick() {
      // 在点击之前 先要还原输入框
      this.$refs.input.value = "";
      this.$refs.input.click();
    },
    handleStart(rawFile) {
      // 给文件生成一个唯一的id标示
      rawFile.uid = Math.random() + this.tempIndex++;
    
      let file = {
        // 我自己构建了一条文件信息
        status: "ready", // 默认准备上传
        name: rawFile.name, // 文件名子
        size: rawFile.size, // 上传图片的大小
        percentage: 0, // 上传的进度
        uid: rawFile.uid,
        raw: rawFile
      };
       file.url = URL.createObjectURL(rawFile); // 通过源文件创建一个路径 即可
      this.files.push(file); // 将当前用户上传的文件push到列表中，过一会要显示
      this.onChange && this.onChange(file);
    },
    getFile(rawFile) {
      return this.files.find(file => file.uid == rawFile.uid);
    },
    handleProgress(ev, rawFile) {
      // 给不同的状态
      // 通过源文件 用户上传的文件 -》 我格式化的结果
      let file = this.getFile(rawFile); // 这个file就是当前格式化化后的
      file.status = "uploading";
      file.percentage = ev.percent || 0; // 赋值上传进度
      this.onProgress(ev, rawFile); // 调用用户的回调
    },
    handleSuccess(res, rawFile) {
      let file = this.getFile(rawFile);
      file.status = "success";
      this.onSuccess(res, rawFile);
      this.onChange(file);
    },
    handleError(err, rawFile) {
      let file = this.getFile(rawFile);
      file.status = "fail";
      this.onError(err, rawFile);
      this.onChange(file);
      delete this.reqs[file.uid]; // 已经失败的ajax 不需要后续在中断请求了
    },
    upload(rawFile){
      const uid = rawFile.uid; // 这里可能稍后上传的时候 会后悔 终端ajax 序号
      const options = {
        file: rawFile, // 源文件
        filename: this.name, // avatar
        action: this.action,
        onProgress: ev => {
          // 处理上传的中的状态
          this.handleProgress(ev, rawFile);
        },
        onSuccess: res => {
          // 处理成功的状态
          this.handleSuccess(res, rawFile);
        },
        onError: err => {
          // 处理失败时的状态
          this.handleError(err, rawFile);
        }
      };
      // req就是当前的请求
      let req = this.httpRequest(options);
      this.reqs[uid] = req; // 每个ajax 先存起来，稍后可以取消请求
      // 允许用户使用的是promise的ajax
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    },
    uploadFiles(files){ // 分片上传 断点续传 node时候 会实现
     console.log(files)
     const file = files[0]
     if(file){
       if(['image/gif', 'image/png', 'image/jpg', 'image/jpeg'].indexOf(file.type) > -1) {
         this.upload(file)
       }else{
        this.alert('图片格式须为jpg、jpeg、png、gif之一！', '提示')
       }
     }
    },
    handleChange(e){
      const files = e.target.files
      this.uploadFiles(files)
    }
  }
}
</script>
<style lang="scss">
  .ne-upload {
    .ne-upload-btn {
      display: inline-block;
    }
    .input {
      display: none;
    }
  }
  </style>