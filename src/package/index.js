import QrCode from "../package/vue-qr-code-styling/index.vue";

const coms = [QrCode];

// 批量组件注册
const install = function (Vue) {
    coms.forEach((com) => {
        Vue.component(com.name, com);
    });
};

export default install;
