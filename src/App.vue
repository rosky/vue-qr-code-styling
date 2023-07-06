<template>
  <div id="app">
    <div>
      <QrCode :size="size" :value="value" :logo="logo" />
    </div>
    <HelloWorld msg="Welcome to vue-qr-code-styling"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import QrCode from './package/vue-qr-code-styling/index.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    QrCode,
  },
  data() {
    return {
      size: 200,
      value: 'https://i-fis.cn/',
      logo: '/logo.png',
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
