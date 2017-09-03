<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
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
  overflow-x: scroll;
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
  color: #444;
  width: 80px;
}
</style>
