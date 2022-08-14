<template>
    <div class="list-menu flex flex-col">
        <div class="setting-tab-item flex item-activated">
            <div class="icon-tab icon icon-employee"></div>
            <div class="name-tab"> <router-link to="/setting/user">Người dùng</router-link></div>
        </div>
         <div class="setting-tab-item flex">
            <div class="icon-tab icon icon-protect"></div>
            <div class="name-tab">Vai trò</div>
        </div>
         <div class="setting-tab-item flex">
            <div class="icon-tab icon icon-multiple-user"></div>
            <div class="name-tab">Nhóm người dùng</div>
        </div>
         <div class="setting-tab-item flex">
            <div class="icon-tab icon icon-share-link"></div>
            <div class="name-tab">Kết nối</div>
        </div>
        
    </div>
</template>