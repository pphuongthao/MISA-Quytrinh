<template>
  <div class="content-setting w-full">
    <div id="setting-user">
      <div class="main h-full container body-custom">
        <!-- Header -->
        <div class="content-header p-b-16">
          <div class="flex justify-between items-center header-custom">
            <div class="font-20 bold">Người dùng</div>
            <TButton
              :styleButton="'ms-btn-primary'"
              :isShowIcon="true"
              :iconButtonName="'icon-add'"
              :msButtonText="'Thêm mới'"
              @click="btnAddUserOnClick"
            />
          </div>
        </div>
        <!-- Main -->
        <div class="content-main">
          <div class="h-full w-full">
            <div class="flex items-center w-full bg-white">
              <span class="input-search-user">
                <div class="m-l-12">
                  <div class="m-l-search">
                    <div class="flex items-center w-full h-full">
                      <div class="ms-input flex w-full">
                        <div
                          class="t-ms-icon-default flex items-center justify-center p-l-8 ms-icon-"
                        >
                          <i
                            class="ms-icon notranslate icon-scale mi-search"
                          ></i>
                        </div>
                        <input
                          class="ms-input-item"
                          type="text"
                          placeholder="Tìm kiếm người dùng"
                          maxlength="255"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </span>
              <span class="select-box-role">
                <div class="wrap-ms-select-box m-l-12">
                  <DxSelectBox
                    :items="selectRole"
                    placeholder="Chọn vai trò"
                    class="ms-select-box"
                  />
                </div>
              </span>
              <div class="su-filter m-r-16">
                <div class="adjust-column">
                  <div
                    id="adjust-column"
                    class="mi-24 cursor-pointer m-0 mi-setting"
                    @click="btnSettingCustomColumn"
                  ></div>
                  <!-- PopUp tùy chỉnh cột -->
                  <!-- <div class="popup-customize-user" v-if="isShowCustomColumn"> -->
                    <div class="popup-customize-user-content" v-if="isShowCustomColumn">
                      <div class="user-popup-content">
                        <div class="content-container">
                          <div id="adjust-colum-popover" class="flex flex-col-custom">
                            <header>
                              <div class="p-b-8 header">
                                <div
                                  class="flex justify-between items-center p-b-12"
                                >
                                  <div class="title">Tùy chỉnh cột</div>
                                  <div
                                    class="ms-icon-container flex items-center justify-center ms-icon- btn-icon-1"
                                    style="cursor: pointer"
                                  >
                                    <div class="tooltip-container">
                                      <div
                                        class="con-ms-tooltip"
                                        @click="btnCloseCustomColumn"
                                      >
                                        <i
                                          class="ms-icon notranslate icon-scale mi-close-2"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <div class="search-content">
                                    <div
                                      class="flex items-center w-full h-full"
                                    >
                                      <div class="ms-input flex w-full">
                                        <div
                                          class="t-ms-icon-default flex items-center justify-center p-l-8 ms-icon-"
                                        >
                                          <i
                                            class="ms-icon notranslate icon-scale mi-search"
                                          ></i>
                                        </div>
                                        <input
                                          class="ms-input-item"
                                          type="text"
                                          placeholder="Tìm kiếm"
                                          maxlength="255"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </header>
                            <main>
                              <div class="list-group-wrap list-content p-b-12">
                                <div class="list-group-content">
                                  <div class="list-group">
                                    <div>
                                      <!-- Mã nhân viên -->
                                      <div class="list-group-item">
                                        <div
                                          class="flex items-center justify-between"
                                        >
                                          <div class="flex items-center">
                                            <label
                                              class="container-customize ms-checkbox"
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="icon-square-check-primary checkmark disabled"
                                              ></span>
                                              <span class="con-slot-label">
                                                <div
                                                  title="Mã nhân viên"
                                                  class="columnName m-t-2"
                                                >
                                                  Mã nhân viên
                                                </div>
                                              </span>
                                            </label>
                                          </div>
                                          <div
                                            class="ms-icon-default flex items-center justify-center ms-icon- opacity-0"
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="ms-icon notranslate icon-scale mi-drag"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                      <!-- Họ và tên -->
                                      <div class="list-group-item">
                                        <div
                                          class="flex items-center justify-between"
                                        >
                                          <div class="flex items-center">
                                            <label
                                              class="container-customize ms-checkbox"
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="icon-square-check-primary checkmark disabled"
                                              ></span>
                                              <span class="con-slot-label">
                                                <div
                                                  title="Họ và tên"
                                                  class="columnName m-t-2"
                                                >
                                                  Họ và tên
                                                </div>
                                              </span>
                                            </label>
                                          </div>
                                          <div
                                            class="ms-icon-default flex items-center justify-center ms-icon- opacity-0"
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="ms-icon notranslate icon-scale mi-drag"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                      <!-- Phòng ban -->
                                      <div class="list-group-item">
                                        <div
                                          class="flex items-center justify-between"
                                        >
                                          <div class="flex items-center">
                                            <label
                                              class="container-customize ms-checkbox"
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="icon-square-uncheck checkmark"
                                                @click="change(0)"
                                                :class="{
                                                  'icon-square-check':
                                                    this.checkboxs[0] == true,
                                                }"
                                              ></span>
                                              <span class="con-slot-label">
                                                <div
                                                  title="Phòng ban"
                                                  class="columnName m-t-2"
                                                >
                                                  Phòng ban
                                                </div>
                                              </span>
                                            </label>
                                          </div>
                                          <div
                                            class="ms-icon-default flex items-center justify-center ms-icon- drag-class"
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="ms-icon notranslate icon-scale mi-drag"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                      <!-- Vị trí công việc -->
                                      <div class="list-group-item">
                                        <div
                                          class="flex items-center justify-between"
                                        >
                                          <div class="flex items-center">
                                            <label
                                              class="container-customize ms-checkbox"
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="icon-square-uncheck checkmark"
                                                @click="change(1)"
                                                :class="{
                                                  'icon-square-check':
                                                    this.checkboxs[1] == true,
                                                }"
                                              ></span>
                                              <span class="con-slot-label">
                                                <div
                                                  title="Vị trí công việc"
                                                  class="columnName m-t-2"
                                                >
                                                  Vị trí công việc
                                                </div>
                                              </span>
                                            </label>
                                          </div>
                                          <div
                                            class="ms-icon-default flex items-center justify-center ms-icon- drag-class"
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="ms-icon notranslate icon-scale mi-drag"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                      <!-- Email -->
                                      <div class="list-group-item">
                                        <div
                                          class="flex items-center justify-between"
                                        >
                                          <div class="flex items-center">
                                            <label
                                              class="container-customize ms-checkbox"
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="icon-square-uncheck checkmark"
                                                @click="change(2)"
                                                :class="{
                                                  'icon-square-check':
                                                    this.checkboxs[2] == true,
                                                }"
                                              ></span>
                                              <span class="con-slot-label">
                                                <div
                                                  title="Email"
                                                  class="columnName m-t-2"
                                                >
                                                  Email
                                                </div>
                                              </span>
                                            </label>
                                          </div>
                                          <div
                                            class="ms-icon-default flex items-center justify-center ms-icon- drag-class"
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="ms-icon notranslate icon-scale mi-drag"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                      <!-- Vai trò -->
                                      <div class="list-group-item">
                                        <div
                                          class="flex items-center justify-between"
                                        >
                                          <div class="flex items-center">
                                            <label
                                              class="container-customize ms-checkbox"
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="icon-square-uncheck checkmark"
                                                @click="change(3)"
                                                :class="{
                                                  'icon-square-check':
                                                    this.checkboxs[3] == true,
                                                }"
                                              ></span>
                                              <span class="con-slot-label">
                                                <div
                                                  title="Vai trò"
                                                  class="columnName m-t-2"
                                                >
                                                  Vai trò
                                                </div>
                                              </span>
                                            </label>
                                          </div>
                                          <div
                                            class="ms-icon-default flex items-center justify-center ms-icon- drag-class"
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="ms-icon notranslate icon-scale mi-drag"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                      <!-- Trạng thái -->
                                      <div class="list-group-item">
                                        <div
                                          class="flex items-center justify-between"
                                        >
                                          <div class="flex items-center">
                                            <label
                                              class="container-customize ms-checkbox"
                                            >
                                              <input
                                                type="checkbox"
                                                class="ms-checkbox--input"
                                              />
                                              <span
                                                class="icon-square-uncheck checkmark"
                                                @click="change(4)"
                                                :class="{
                                                  'icon-square-check':
                                                    this.checkboxs[4] == true,
                                                }"
                                              ></span>
                                              <span class="con-slot-label">
                                                <div
                                                  title="Trạng thái"
                                                  class="columnName m-t-2"
                                                >
                                                  Trạng thái
                                                </div>
                                              </span>
                                            </label>
                                          </div>
                                          <div
                                            class="ms-icon-default flex items-center justify-center ms-icon- drag-class"
                                            style="cursor: all-scroll"
                                          >
                                            <i
                                              class="ms-icon notranslate icon-scale mi-drag"
                                            ></i>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </main>
                            <footer>
                              <div class="comand-wrap justify-flexend">
                                <TButton
                                  class="m-r-12 p-d-16"
                                  :styleButton="'ms-btn-default'"
                                  :isShowIcon="false"
                                  :msButtonText="'Lấy lại mặc định'"
                                />
                                <TButton
                                  class="p-d-16"
                                  :styleButton="'ms-btn-primary'"
                                  :isShowIcon="false"
                                  :msButtonText="'Áp dụng'"
                                />
                              </div>
                            </footer>
                          </div>
                        </div>
                      </div>
                    </div>
                  <!-- </div> -->
                </div>
              </div>
            </div>

            <div class="custom-paging-grid">
              <div class="grid-container">
                <div class="h-full">
                  <!-- Table -->
                  <div class="table">
                    <!-- <DxDataGrid
                      id="gridContainer"
                      :data-source="users"
                      key-expr="userCode"
                      column-resizing-mode="widget"
                      :allow-column-reordering="true"
                      :allow-column-resizing="true"
                      :show-borders="false"
                      :column-width="230"
                      :show-column-lines="false"
                      :show-row-lines="true"
                      :onRowClick="showDetail"
                      
                    > -->
                    <DxDataGrid
                  id="gridContainer"
                  :key-expr="userCode"
                  :data-source="users"
                  column-resizing-mode="widget"
                  :allow-column-reordering="true"
                  :allow-column-resizing="true"
                  :column-auto-width="true"
                  :show-borders="false"
                  :show-column-lines="false"
                  :show-row-lines="true"
                  :hover-state-enabled="true"
                  :onRowClick="showDetail"
                  :paging="{enabled: false}"
                >
                      <DxColumn
                        :fixed="true"
                        caption="Mã nhân viên"
                        data-field="userCode"
                      />
                      <DxColumn
                        :fixed="true"
                        data-field="userName"
                        caption="Họ và tên"
                        cell-template="avatarUser"
                      />
                      <template #avatarUser="{ data }">
                        <div class="flex">
                          <AvatarUser :userCode="data.values[0]" :name="data.value" />
                          <div class="flex" style="align-items: center">
                            {{ data.value }}
                          </div>
                        </div>
                      </template>
                      <DxColumn
                        :fixed="true"
                        caption="Phòng ban"
                        data-field="departmentName"
                        data-type=""
                      />
                      <DxColumn
                        :fixed="true"
                        caption="Vị trí công việc"
                        data-field="positionName"
                        data-type=""
                      />
                      <DxColumn
                        :fixed="true"
                        caption="Email"
                        data-field="email"
                        data-type=""
                      />
                      <DxColumn
                        :fixed="true"
                        caption="Vai trò"
                        data-field="roleName"
                        data-type=""
                      />
                      <DxColumn 
                      :fixed="true"
                      data-field="status" 
                                                caption="Trạng thái"
                                                cell-template="columnStatus" />
                                            <template #columnStatus="{data}">
                                                <div class="p-l-16 pos-relative column-status" :class="convertStatus(data.value)">
                                                    <div> {{convertStatusName(data.value)}} </div>
                                                    <span class="dot-status"></span>
                                                </div>
                                            </template>
                      <DxColumn
                        :fixed="true"
                        :width="100"
                        css-class="row-options"
                        cell-template="optionsColumn"
                      />
                      <template #optionsColumn>
                        <div class="datagrid-column t-flex justify-end">
                          <div class="style-button row-option">
                            <div title="Sửa" class="button-comand-wrap">
                              <div
                                class="mi-pencil"
                                @click="btnUpdateUser($event)"
                              ></div>
                            </div>
                          </div>
                          <div class="style-button row-option">
                            <div title="Sửa" class="button-comand-wrap">
                              <div
                                class="icon-delete-custom"
                                @click="btnDeleteUser($event)"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </DxDataGrid>
                  </div>

                  <!-- Paging -->
                  <div class="paging">
                    <div class="grid-navigatioin">
                      <div class="page-total flex">
                        Tổng số bản ghi:
                        <b>44</b>
                      </div>

                      <div class="page-size-selector flex items-center">
                        <div class="m-r-8">Số bản ghi/trang</div>

                        <TDropDown />

                        <div class="page-info">
                          <b>1</b> - <b>15</b> bản ghi
                        </div>
                        <div class="page-next-preview">
                          <div class="ms-row m-0">
                            <div
                              class="ms-pagination--mb ms-col ms-xs-12 ms-sm-12 ms-lg"
                            >
                              <div
                                class="con-ms-pagination w-full ms-pagination-primary"
                              >
                                <nav
                                  class="ms-pagination--nav flex justify-between items-center"
                                >
                                  <div class="ms-button-nav disable">
                                    <div
                                      class="ms-icon-container flex items-center justify-center btn-icon-1"
                                    >
                                      <i
                                        class="ms-icon notranslate icon-scale mi-chevron-left"
                                      ></i>
                                    </div>
                                  </div>
                                  <div class="ms-button-nav">
                                    <div
                                      class="ms-icon-container flex items-center justify-center btn-icon-1"
                                    >
                                      <i
                                        class="ms-icon notranslate icon-scale mi-chevron-right"
                                      ></i>
                                    </div>
                                  </div>
                                </nav>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Form thêm người dùng -->
  <AddUser v-if="isShowAddUser" @showDialog="showAddUser" />
  <!-- Form chi tiết người dùng -->
  <DetailUser v-if="isShowDetailUser" 
  @showDetail="showDetailUser" 
  @openUpdate="showUpdateUser"
  @openDelete="showDeleteUser"/>
  <!-- Form sửa người dùng -->
  <UpdateUser v-if="isShowUpdateUser" @showUpdate="showUpdateUser" />
  <!-- Form xóa người dùng -->
  <DeleteUser v-if="isShowDeleteUser" @showDelete="showDeleteUser" />
</template>
<script>
import AddUser from "@/view/AddUser.vue";
import AvatarUser from "../base/AvatarUser.vue";
import DetailUser from "@/view/DetailUser.vue";
import UpdateUser from "@/view/UpdateUser.vue";
import DeleteUser from "@/view/DeleteUser.vue";
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      users: [], //danh sách người dùng
      isShowAddUser: false, //biến ẩn hiện form thêm mới người dùng
      isShowCustomColumn: false, //biến ẩn hiện form tùy chỉnh cột
      isShowDetailUser: false, //biến ẩn hiện form chi tiết người dùng
      isShowUpdateUser: false, //biến ẩn hiện form sửa người dùng
      isShowDeleteUser: false, //biến ẩn hiện form xóa người dùng
      checkboxs: [false, false, false, false, false], // mảng chứa value của checkbox chỉnh sửa table
      selectRole: [
        "Tất cả",
        "Quản trị ứng dụng quy trình",
        "Nhân viên",
        "Quản lý",
      ],
      textStatus: "",
      
    };
  },
  components: { AddUser, AvatarUser, DetailUser, UpdateUser, DeleteUser },
  methods: {
    change(index) {
      this.checkboxs[index] = !this.checkboxs[index];
    },
    /**
     * Hiển thị form thêm mới người dùng
     * VTPTHAO (10/8/2022)
     *
     */
    showAddUser(isShow) {
      this.isShowAddUser = isShow;
    },
    /**
     * Khi nhấn vào button Thêm mới sẽ hiển thị form thêm mới người dùng
     * VTPTHAO (10/8/2022)
     */
    btnAddUserOnClick() {
      this.isShowAddUser = true;
    },
    /**
     * Khi nhấn vào icon close ở form tùy chỉnh cột sẽ đóng form
     * VTPTHAO (10/8/2022)
     */
    btnCloseCustomColumn() {
      this.isShowCustomColumn = false;
    },
    /**
     * Khi nhấn vào icon setting hiển thị form tùy chỉnh cột
     * VTPTHAO (10/8/2022)
     */
    btnSettingCustomColumn() {
      if (this.isShowCustomColumn == true) {
        this.isShowCustomColumn = false;
      } else {
        this.isShowCustomColumn = true;
      }
    },
    /**
     * Hiển thị form chi tiết người dùng
     * VTPTHAO (10/8/2022)
     */
    showDetailUser(isShowDetail) {
      this.isShowDetailUser = isShowDetail;
    },
    /**
     * Khi click vào row người dùng tương ứng sẽ hiển thị thông tin chi tiết của người dùng đó
     * VTPTHAO (10/8/2022)
     */
    showDetail() {
      this.isShowDetailUser = true;
    },
    btnUpdateUser(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isShowUpdateUser = true;
    },
    /**
     * Hiển thị form sửa người dùng
     */
    showUpdateUser(isShowUpdate) {
      this.isShowUpdateUser = isShowUpdate;
    },
    /**
     * Hiển thị form xóa người dùng
     */
    showDeleteUser(isShowDelete) {
      this.isShowDeleteUser = isShowDelete;
    },
    btnDeleteUser(event) {
      event.preventDefault();
      event.stopPropagation();
      this.isShowDeleteUser = true;
    },
    /**
     * 
     */
    convertStatus(status){
        if(status == 1)
          return "greenStatus";
        if(status == 2)
          return "orangeStatus";
        if(status == 3)
          return "blueStatus";
        if(status == 4)
          return "grayStatus";
       
    },
    convertStatusName(status){
      if(status == 1)
        return "Đang hoạt động";
      if(status == 2)
        return "Chờ xác nhận";
      if(status == 3)
        return "Chưa kích hoạt";
      if(status == 4)
        return "Ngừng kích hoạt";
    },
  
    close(e) {
      if (!this.$el.contains(e.target) && !e.target.classList.contains('cursor-pointer')  ) {
        this.isShowCustomColumn = false;
      }
    }

  },
  created(){
     var me = this;
    try {
      //lấy tất cả nhân viên
      axios
        .get(`https://localhost:44307/api/v1/Users`)
        .then(function (res) {
          if (!res) {
            console.log(res);
            return;
          }
          me.users = res.data;
        })
        .catch(function (res) {
          console.log(res);
        });
  }
  catch (error) {
      console.log(error);
      alert(error);
    }
    window.addEventListener("click", this.close);
  },
  
    beforeUnmount() {
    window.removeEventListener("click", this.close);
  },
}
</script>
<style>
@import url(../../css/layout/content_right.css);
@import url(../../css/base/customcolumn.css);
</style>
