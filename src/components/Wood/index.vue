<template>
  <div class="wood">
    <h1 v-if="!select">精选材质</h1>
    <div class="box" :class="{'type': select.length}">
      <div v-for="(item, index) in select">
        <div :style="{'background': 'url(' + item.image + ')'}"></div>
        <p>{{item.name}}</p>
      </div>
      <div v-if="!select.length">
        <p>暂无</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wood',

    props: {
      select: {
        type: Array,
        default: function () {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .wood {
    padding: 40px 150px;
  }

  .wood h1 {
    color: #444;
    font-size: 32px;
    margin-bottom: 40px;
    text-align: center;
  }

  .box {
    width: 640px;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  .type {
    width: auto;
    display: block;
  }

  .box > div {
    width: 72px;
    text-align: center;
  }

  .type > div {
    display: inline-block;
    vertical-align: top;
  }

  .box > div > div {
    width: 60px;
    height: 60px;
    background-size: cover;
    border-radius: 30px;
  }

  .box p {
    color: #999;
    font-size: 14px;
    margin-top: 12px;
  }
</style>
