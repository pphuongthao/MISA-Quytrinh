<template>
  <button class="btn-default flex items-center justify-center" :class="styleButton">
    <div class="justify-center items-center flex ms-icon-default ms-button--icon" v-if="isShowIcon">
      <i class="ms-icon" :class="iconButtonName"> </i>   
    </div>
    <span class="ms-button-text ms-button--text" :class="styleButtonText">
        {{ msButtonText }}
    </span>
  </button>
</template>
<script>
export default {
  name: "MsButton",
  props: {

    // css cho button
    styleButton:{
        type: String
    }, 
    
    // hiển thị icon true: hiển thị, false: ẩn
    isShowIcon:{
        type: Boolean
    },

    // css cho icon
    iconButtonName: {
      type: String
    },

    // nội dung button
    msButtonText: {
      type: String
    },

    // css cho button
    styleButtonText:{
        type: String
    }
  },
};
</script>
<style>
 @import url(../../css/base/button.css);
</style>