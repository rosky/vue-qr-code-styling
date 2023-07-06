<template>
  <div ref="qrCode" :class="fixedSize?'qr-code':'qr-code-fixed'" :style="{width: fixedWidth, height: fixedHeight, }">
  </div>
</template>

<script lang="ts">
import QRCodeStyling from 'qr-code-styling';

export default {
  name: 'QrCode',
  props: {
    value: {
      type: String,
      default: null,
    },
    size: null,
    options: {
      type: Object,
      default: null,
    },
    fixedSize: {
      type: Boolean,
      default: true,
    },
  },
  data: () => {
    const defaultOptions = {
      width: 100,
      height: 100,
      type: 'svg',// as DrawType,
      data: 'https://i-fis.cn/',
      image: '/logo.png',
      margin: 0,
      qrOptions: {
        typeNumber: 0,// as TypeNumber,
        mode: 'Byte',// as Mode,
        errorCorrectionLevel: 'Q',// as ErrorCorrectionLevel
      },
      imageOptions: {
        hideBackgroundDots: true,
        imageSize: 0.4,
        margin: 1,
        crossOrigin: 'anonymous',
      },
      dotsOptions: {
        color: '#2e2d2e',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#8688B2' }, { offset: 1, color: '#77779C' }]
        // },
        type: 'dots',// as DotType
      },
      backgroundOptions: {
        color: '#ffffff',
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 0,
        //   colorStops: [{ offset: 0, color: '#ededff' }, { offset: 1, color: '#e6e7ff' }]
        // },
      },
      cornersSquareOptions: {
        color: '#ad0303',
        type: 'extra-rounded',// as CornerSquareType,
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#25456e' }, { offset: 1, color: '#4267b2' }]
        // },
      },
      cornersDotOptions: {
        color: '#ad0303',
        type: 'dot',// as CornerDotType,
        // gradient: {
        //   type: 'linear', // 'radial'
        //   rotation: 180,
        //   colorStops: [{ offset: 0, color: '#00266e' }, { offset: 1, color: '#4060b3' }]
        // },
      }
    };
    return {
      qrCode: null,
      defaultOptions,
      extension: 'svg',
      // qrCode: new QRCodeStyling(options)
    }
  },
  computed: {
    allOptions() {
      let options = {...this.defaultOptions, ...this.options}

      options.data = (this.value)?this.value:this.options.data
      options.width = (this.size)?this.size:this.options.width
      options.height = (this.size)?this.size:this.options.height

      return options
    },

    fixedWidth() {
      let v = this.allOptions.width
      if (Number.isInteger(v)) {
        v += 'px'
      }

      return v
    },

    fixedHeight() {
      let v = this.allOptions.height
      if (Number.isInteger(v)) {
        v += 'px'
      }

      return v
    },
  },
  mounted : function() {
    if (this.fixedSize) {
      this.$refs["qrCode"].style.width = this.fixedWidth
      this.$refs["qrCode"].style.height = this.fixedHeight
    }

    this.qrCode = new QRCodeStyling(this.allOptions)
    this.qrCode.append(this.$refs["qrCode"]);
  },
  methods: {
    download() {
      // this.qrCode.download({ extension: this.extension as Extension })
    }
  },
  watch:{
    "value":{
      immediate:true,
      handler(val){
        if (val && this.qrCode) {
          this.qrCode.update(this.allOptions);
        }
      }
    },
    "size":{
      immediate:true,
      handler(val){
        if (val && this.qrCode) {
          this.qrCode.update(this.allOptions);
        }
      }
    },
    "options":{
      immediate:true,
      handler(val){
        if (val && this.qrCode) {
          this.qrCode.update(this.allOptions);
        }
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qr-code {
  display: contents;
}
.qr-code-fixed {
  display: inline-block;
  background: #eee;
}
</style>
