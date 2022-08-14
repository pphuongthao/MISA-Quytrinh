<template>
<div id="previewSettingUser">
<div class="detail-preview-user">
    <div class="container">
        <div class="content-user">
            <div class="mi-close" @click="btnCloseDetail"></div>
            <div class="ms-row-popup ms-row-detail">
                <div class="ms-col ms-col-left ms-xs- ms-sm- ms-lg-">
                    <div class="avatar m-r-8">
                        <img class="avatar ava-user" src="../assets/img/Image.png">
                    </div>
                </div>
                <div class="ms-col ms-col-right ms-xs- ms-sm- ms-lg-">
                    <div class="fullName font-20 bold">Vũ Thị Phương Thảo</div>
                    <div class="email"> thaovu13092001@gmail.com </div>
                    <div class="status">
                        <div class="p-l-16 pos-relative">
                            <span class="dot"></span>
                            <span class="wait-for-confirmation">Chờ xác nhận</span>
                        </div>
                    </div>
                    <div class="flex">
                        <TButton :styleButton="'ms-btn-detail'" 
                        class="m-r-12 p-d-16"
                        :isShowIcon="false" 
                            :msButtonText="'Cập nhật'"
                            @click="showUpdateUser"/>
                        <TButton :styleButton="'ms-btn-detail'" 
                        class="m-r-12 p-d-16"
                        :isShowIcon="false" 
                            :msButtonText="'Xóa'" @click="showDeleteUser"/>
                    </div>
                </div>
            </div>
            <div class="body-preview">
                <div class="font-20 bold m-t-20">THÔNG TIN CÔNG VIỆC</div>
                <div class="ms-row-item list-item m-t-20 m-b-16">
                    <div class="ms-col m-l-w-1 ms-xs- ms-sm- ms-lg-">
                        <div class="bold">Mã nhân viên</div>
                    </div>
                    <div class="ms-col m-l-w-2 ms-xs- ms-sm- ms-lg-">
                        <div class="employeeCode">NPL05</div>
                    </div>
                </div>
                <div class="ms-row-item list-item m-b-16">
                    <div class="ms-col m-l-w-1 ms-xs- ms-sm- ms-lg-">
                        <div class="bold">Phòng ban</div>
                    </div>
                    <div class="ms-col m-l-w-2 ms-xs- ms-sm- ms-lg-">
                        <div class="employeeCode">Công ty Phúc Lâm</div>
                    </div>
                </div>
                <div class="ms-row-item list-item m-b-16">
                    <div class="ms-col m-l-w-1 ms-xs- ms-sm- ms-lg-">
                        <div class="bold">Vị trí công việc</div>
                    </div>
                    <div class="ms-col m-l-w-2 ms-xs- ms-sm- ms-lg-">
                        <div class="employeeCode">Triển khai</div>
                    </div>
                </div>
                <div class="font-20 bold m-t-20">THÔNG TIN PHÂN QUYỀN</div>
                <div class="w-full m-t-20">
                        <div class="grid-container-detail">
                            <div class="h-full">
                                <div class="role-detail">
                                    <div class="datagrid grid-base-container">
                                        <div class="datagrid-detail-header p-16">
                                            <div class="bold line-height-48">
                                                Vai trò
                                            </div>
                                        </div>

                                        <div class="datagrid-detail-header datagrid-detail-hover p-16">
                                            <div class="line-height-48">
                                                Quản trị ứng dụng quy trình
                                            </div>
                                        </div>

                                        <div class="datagrid-detail-header datagrid-detail-hover p-16">
                                            <div class="line-height-48">
                                                Nhân viên
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
</template>
<script>
import TButton from '../components/base/TButton.vue';
export default {
    name: "TDetailUser",
    data() {
    },
    components: { TButton },
    methods:{
        /**
         * Khi nhấn vào icon close sẽ thực hiện đóng form chi tiết người dùng
         */
        btnCloseDetail(){
            this.$emit("showDetail", false);
        },
        /**
         * Khi nhấn vào button cập nhật sẽ hiển thị form sửa người dùng
         */
        showUpdateUser(){
            this.$emit("openUpdate", true);
        },
        /**
         * Khi nhấn vào button xóa sẽ hiển thị form xóa người dùng
         */
        showDeleteUser(){
            this.$emit("openDelete", true);
        }
    }
}
</script>
<style>
@import url(../css/view/detail_user.css);
</style>