<template>
<div class="main-container">
    <div class="main-nav">
        <div id="top-nav" class="nav-container">
            <div class="nav-left">
                <div class="box-app-menu" id="AMIS_Launcher"></div>
                <a href="/process" class="nav-logo">Quy trình</a>
                <div class="top-menu-container">
                    <div class="flex-m">
                        <div class="menu-item ">
                            <div class="menu-item-name">Lượt chạy</div>
                            
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-name">Thiết kế quy trình</div>
                            
                        </div>
                        <div class="menu-item">
                            <div class="menu-item-name">Báo cáo</div>
                           
                        </div>
                        <div class="menu-item active">
                            <div class="menu-item-name">Thiết lập</div>
                            <div class="menu-item-active"></div>
                        </div>
                        <div class="btn-run-process">
                            <TButton :styleButton="'ms-btn-primary'" :isShowIcon="true" 
                            :iconButtonName="'icon-run-proccess'" 
                            :msButtonText="'Chạy quy trình'"/>
                        </div>
                        <div class="flex-1 flex-r-m"></div>
                    </div>
                </div>
            </div>
            <div class="flex-m nav-right">
                <div>
                    <div class="flex-m global-search">
                        <div class="ab-c-m"></div>
                        <div class="pre-icon mi-search"></div>
                        <input type="text" placeholder="Nhập ID, tiêu đề lượt chạy" class="flex-1 m-l-4">
                    </div>
                </div>
                <div class="notify apui-notification-trigger dark">
                    <div class="apui-notifi-unread-count">78</div>
                </div>
                <div class="right-action user">
                    <div class="user-avatar">
                        <div class="apui-user-avatar"><img src="../../assets/img/Image.png"></div>
                    </div>
                </div>
           </div>
        </div>
    </div>
</div>
    
</template>
<style>
@import url(../../css/layout/navbar.css);
</style>

