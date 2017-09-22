<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import 'whatwg-fetch'
  export default {
    name: 'app'
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    min-width: 1280px;
    overflow-x: hidden;
  }

  a {
    cursor: pointer;
  }

  a,
  a:hover,
  a:focus,
  a:active,
  a:visited {
    color: #636363;
    text-decoration: none;
  }

  #app {
    font-family: serif;
  }

  .btn {
    font-family: serif;
    width: 65px;
    border: 1px solid #636363;
    font-size: 16px;
    line-height: 26px;
    text-align: center;
    opacity: 0.6;
    background: none;
    color: #666;
    margin: 1em 10px !important;
  }

  .changeBtn {
    color: hotpink;
    border: 1px solid hotpink;
  }

  .btn:hover {
    opacity: 1;
  }

  #quill-container {
    height: 800px !important;
  }

  .desc img,
  .intro img {
    border: none !important;
  }
</style>
