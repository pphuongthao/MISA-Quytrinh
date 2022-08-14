<template>
<div class="ms-component con-ms-popup-update ms-popup-primary">
    <span class="popup-shortkey"></span>
    <div class="ms-popup--background"></div>
    <div class="ms-popup-update ms-popup-update ">
        <div class="popup-updateuser ">
            <header class="ms-popup--header-update">
                <div class="ms-popup--title">
                    <h2>
                        <span class="title-popup">Sửa người dùng</span>
                    </h2>
                </div>
                <div class="hover-show flex justify-between items-center ms-popup--close-root">
                    <div class="ms-icon-container flex items-center justify-center ms-popup--close ms-icon-#9197af btn-icon-1">
                        <div class="tooltip-container">
                            <div class="con-ms-tooltip" @click="btnCloseUpdateUser">
                                <i class="ms-icon notranslate icon-scale mi-close-2"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div class="update-content">
            <div>
                <div class="item-wrap">
                    <div class="flex items-center">
                        <div class="avatar-update m-r-8">
                            <img src="../assets/img/Image.png" class="avatar">
                        </div>
                        <div class="user-information">
                            <div>
                                <span>
                                    <b>Vũ Thị Phương Thảo</b>
                                </span>
                                <span class="m-l-4">(NLP05)</span>
                            </div>
                            <div class="m-t-4 m-b-4">
                                <span>thaovu13092001@gmail.com</span>
                            </div>
                            <div>
                                <span>Triển khai</span>
                                <span> - </span>
                                <span>Công ty Phúc Lâm</span>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <label class="font-20 bold">
                    <p class="role">Vai trò</p>
                    <span class="required-update"> *</span>
                </label>
                <br/>
                <div class="ms-row ms-row-role">
                    <div class="ms-col ms-xs- ms-sm- ms-lg- m-l-0">
                        <div class="flex items-center">
                            <label class="container-update ms-checkbox">
                                 <input type="checkbox" class="ms-checkbox--input"/>
                                 <span class="icon-square-uncheck checkmark" @click="change(0)"
                                                :class="{
                                                  'icon-square-check':
                                                    this.checkboxs[0] == true,
                                                }"></span>
                                 <span class="con-slot-label">
                                    <div class="title-name" title="Quản trị ứng dụng Quy trình"> Quản trị ứng dụng Quy trình </div>
                                 </span>
                            </label>
                        </div>
                    </div>
                    <div class="ms-col ms-xs- ms-sm- ms-lg- m-l-0">
                        <div class="flex items-center">
                            <label class="container-update ms-checkbox">
                                 <input type="checkbox" class="ms-checkbox--input"/>
                                 <span class="icon-square-uncheck checkmark" @click="change(1)"
                                                :class="{
                                                  'icon-square-check':
                                                    this.checkboxs[1] == true,
                                                }"></span>
                                 <span class="con-slot-label">
                                    <div class="title-name" title="Quản trị ứng dụng Quy trình"> Quản trị ứng dụng Quy trình </div>
                                 </span>
                            </label>
                        </div>
                    </div>
                    <div class="ms-col ms-xs- ms-sm- ms-lg- m-l-0">
                        <div class="flex items-center">
                            <label class="container-update ms-checkbox">
                                 <input type="checkbox" class="ms-checkbox--input"/>
                                 <span class="icon-square-uncheck checkmark" @click="change(2)"
                                                :class="{
                                                  'icon-square-check':
                                                    this.checkboxs[2] == true,
                                                }"></span>
                                 <span class="con-slot-label">
                                    <div class="title-name" title="Quản trị ứng dụng Quy trình"> Quản lý </div>
                                 </span>
                            </label>
                        </div>
                    </div>
                    <div class="ms-col ms-xs- ms-sm- ms-lg- m-l-0">
                        <div class="flex items-center">
                            <label class="container-update ms-checkbox">
                                 <input type="checkbox" class="ms-checkbox--input"/>
                                 <span class="icon-square-uncheck checkmark" @click="change(3)"
                                                :class="{
                                                  'icon-square-check':
                                                    this.checkboxs[3] == true,
                                                }"></span>
                                 <span class="con-slot-label">
                                    <div class="title-name" title="Quản trị ứng dụng Quy trình"> Nhân viên </div>
                                 </span>
                            </label>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <footer class="ms-popup--footer borderFooter">
            <div class="flex flex-footer">
            <TButton
          class="m-r-12 p-d-16"
          :styleButton="'ms-btn-default'"
          :isShowIcon="false"
          :msButtonText="'Hủy'"
          @click="btnCancelUpdate"
        />
        <TButton
          class="p-d-16"
          :styleButton="'ms-btn-primary'"
          :isShowIcon="false"
          :msButtonText="'Lưu'"
        />
            </div>
        </footer>
    </div>
</div>

</template>
<style>
@import url(../css/view/update_user.css);
</style>
<script>
export default {
  name: "app",
  data() {
    return {
      checkboxs: [false, false, false, false, false], // mảng chứa value của checkbox 
     
    };
  },
  components: { },
  methods: {
    change(index) {
      this.checkboxs[index] = !this.checkboxs[index];
    },
    /**
     * Khi nhấn vào icon close sẽ đóng form sửa người dùng
     * VTPTHAO(10/8/2022)
     */
    btnCloseUpdateUser(){
      this.$emit("showUpdate", false);
    },
    /**
     * Khi nhấn vào nút hủy form sửa người dùng sẽ thực hiện đóng form
     */
    btnCancelUpdate(){
        this.$emit("showUpdate", false);
    }
  },
};
</script>
