<template>
<div class="ms-component con-ms-popup-delete ms-popup-primary">
    <span class="popup-shortkey"></span>
    <div class="ms-popup--background"></div>
    <div class="ms-popup ms-popup-delete ">
        <div class="popup-deleteuser">
            <header class="ms-popup--header">
                <div class="ms-popup--title">
                    <h2>
                        <span class="title-popup">Xóa người dùng</span>
                    </h2>
                </div>
                <div class="hover-show flex justify-between items-center ms-popup--close-root">
                    <div class="ms-icon-container flex items-center justify-center ms-popup--close ms-icon-#9197af btn-icon-1">
                        <div class="tooltip-container">
                            <div class="con-ms-tooltip" @click="btnCloseDeleteUser">
                                <i class="ms-icon notranslate icon-scale mi-close-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div class="ms-popup--content update-content">
            <div>
                <span>Bạn có chắc chắn muốn xóa</span>
                <span>
                    <span class="text-bold"> Vũ Thị Phương Thảo</span> khỏi ứng dụng AMIS Quy trình 
                </span>
                <span>không?</span>
            </div>
        </div>
        <footer class="ms-popup--footer borderFooter">
            <div class="flex m-12" >
            <TButton
          class="m-r-12 p-d-16"
          :styleButton="'ms-btn-default'"
          :isShowIcon="false"
          :msButtonText="'Hủy'"
          @click="btnCancelDelete"
        />
        <TButton
          class="p-d-16 m-r-12"
          :styleButton="'ms-btn-danger'"
          :isShowIcon="false"
          :msButtonText="'Xóa'"
        />
            </div>
        </footer>
    </div>
</div>

</template>
<style>
@import url(../css/view/delete_user.css);
</style>
<script>
export default {
  name: "app",
  data() {
    return {
      
     
    };
  },
  components: { },
  methods: {
    /**
     * Khi nhấn vào icon close sẽ đóng form xóa người dùng
     * VTPTHAO(10/8/2022)
     */
    btnCloseDeleteUser(){
      this.$emit("showDelete", false);
    },
    /**
     * Khi nhấn vào nút hủy form xóa người dùng sẽ thực hiện đóng form
     */
    btnCancelDelete(){
        this.$emit("showDelete", false);
    }
  },
};
</script>