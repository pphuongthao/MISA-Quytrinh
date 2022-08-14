import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import { createApp } from 'vue'
import App from './App.vue'
import TButton from './components/base/TButton.vue'
import DxSelectBox from 'devextreme-vue/select-box'
import TDropDown from './components/base/TDropdown.vue'
import TheContentRight from './components/layout/TheContentRight.vue'
import {
    DxDataGrid,
    DxColumn,
  } from 'devextreme-vue/data-grid';
  
  import { createRouter, createWebHistory } from 'vue-router'

const routers = [
    { path: '/setting/user', component: TheContentRight }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes: routers, // short for routes: routes
})
const app = createApp(App);
app.component("TButton", TButton)
app.component("DxSelectBox", DxSelectBox)
app.component("TDropDown", TDropDown)
app.component("DxDataGrid", DxDataGrid)
app.component("DxColumn", DxColumn)
app.use(router).mount('#app')
