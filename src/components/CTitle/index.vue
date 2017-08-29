<template>
  <div
    class="title"
    :class="{'unique-title': unique}"
    :style="{'height': height + 'px'}"
  >
    <div>
      <h1>{{title}}</h1>
      <p>{{desc}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'title',

    props: {
      height: {
        type: Number,
        default: 178
      },
      title: {
        type: String,
        default: '标题'
      },
      desc: {
        type: String,
        default: ''
      },
      unique: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  .title {
    width: 100%;
    background: url(./assets/images/titleBG-a.jpg);
    background-size: cover;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .title div {
    margin: auto;
  }

  .title h1 {
    color: #444;
    font-size: 32px;
    margin-bottom: 30px;
  }

  .title p {
    color: #444;
    font-size: 16px;
  }
</style>

<style>
  .unique-title {
    background: url(./assets/images/titleBG-b.jpg) !important;
  }
</style>
