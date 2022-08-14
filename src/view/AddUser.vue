<template>
  <div class="ms-component con-ms-popup ms-popup-primary">
    <span class="popup-shortkey"></span>
    <div class="ms-popup--background"></div>
    <div class="ms-popup ms-popup-update flex flex-col">
      <div class="popup-adduser">
        <header class="ms-popup--header">
          <div class="ms-popup--title">
            <h2>
              <span class="title-popup">Thêm người dùng</span>
            </h2>
          </div>
          <div
            class="hover-show flex justify-between items-center ms-popup--close-root"
          >
            <div
              class="ms-icon-container flex items-center justify-center ms-popup--close ms-icon-#9197af btn-icon-1"
            >
              <div class="tooltip-container">
                <div class="con-ms-tooltip" @click="btnCloseAddUser">
                  <!-- <i class="ms-icon notranslate icon-scale mi-close-add"></i> -->
                  <i class="ms-icon notranslate icon-scale mi-close-2"></i>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div class="ms-popup--content update-content">
        <div class="table-user">
          <div class="table-content">
            <table class="table-add-user">
              <thead class="add-user-header">
                <th class="col-stt ">STT</th>
                <th class="col-code required">Mã nhân viên</th>
                <th class="col-name required">Họ và tên</th>
                <th class="col-department required">Phòng ban</th>
                <th class="col-position required">Vị trí công việc</th>
                <th class="col-email required">Email</th>
                <th class="col-role required">Vai trò</th>
                <th class="col-status required">Trạng thái</th>
              </thead>
              <tbody v-for="i in index" :key="i">
                <tr>
                  <td class="text-center col-stt">{{i}}</td>
                  <td class="col-code"><input type="text" class="add-user-input w-full" /></td>
                  <td class="col-name"><input type="text" class="add-user-input w-full" /></td>
                  <td>
                    <DxSelectBox
                      :items="simpleProducts"
                      placeholder="Chọn vai trò"
                      class="ms-select-box w-full"
                    />
                  </td>
                  <td>
                    <DxSelectBox
                      :items="simpleProducts"
                      placeholder="Chọn vai trò"
                      class="ms-select-box w-full"
                    />
                  </td>
                  <td><input type="text" class="add-user-input w-full" /></td>
                  <td>
                    <DxSelectBox
                      :items="simpleProducts"
                      placeholder="Chọn vai trò"
                      class="ms-select-box w-full"
                    />
                  </td>
                  <td>
                    <DxSelectBox
                      :items="simpleProducts"
                      placeholder="Chọn vai trò"
                      class="ms-select-box w-full"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <TButton
            class="m-r-12"
            :styleButton="'add-row-user ps-sticky'"
            :isShowIcon="true"
            :iconButtonName="'mi-push-white'"
            :msButtonText="'Thêm dòng'"
            @click="addRow"
          />
        </div>
      </div>
      <footer class="ms-popup--footer borderFooter" >
        <div class="flex">
          <TButton
            class="m-r-12 p-d-16"
            :styleButton="'ms-btn-default'"
            :isShowIcon="false"
            :msButtonText="'Hủy'"
            @click="btnCloseAddUser"
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
@import url(../css/view/add_user.css);
</style>
<script>
export default {
  name: "app",
  data() {
    return {
      index: 1,
      user: {}, //lưu thông tin của 1 người dùng
      users: [], //mảng đối tượng người dùng
     
    };
  },
  components: { },
  methods: {
    /**
     * Khi nhấn vào icon close sẽ đóng form thêm người dùng
     * VTPTHAO(10/8/2022)
     */
    btnCloseAddUser(){
      this.$emit("showDialog", false);
    },
    /**
     * Khi nhấn vào thêm dòng sẽ sinh ra dòng mới
     */
    addRow(){
      this.index = this.index + 1;
    }

  },
};
</script>
