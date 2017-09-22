<template>
  <span
    class="button"
    :class="{'small': small}"
    :style="{
      'color': color,
      'border-color': color
    }"
  >{{text}}</span>
</template>

<script>
  export default {
    name: 'button',

    props: {
      small: {
        type: Boolean,
        default: false
      },

      text: {
        type: String,
        default: '提交'
      },

      color: {
        type: String,
        default: '#636363'
      }
    }
  }
</script>

<style scoped>
  .button {
    display: inline-block;
    font-size: 16px;
    line-height: 42px;
    width: 120px;
    height: 42px;
    border: 2px solid #636363;
    text-align: center;
    cursor: pointer;
    user-select: none;
    opacity: 0.6;
  }

  .button:hover {
    opacity: 1;
  }

  .small {
    width: 65px;
    height: 26px;
    border: 1px solid #636363;
    font-size: 16px;
    line-height: 26px;
  }
</style>
