<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import SignUp from './components/SignUp.vue'

export default {
  name: 'App',
  components: {
    // SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}
body{
  margin: 0;
}
.input-wrap {
  margin: 30px 0;
}

.input-wrap input, .add input {
  padding: 5px 10px;
  width: 100%;
  outline: none;
}

.input-wrap label {
  font-size: 20px;
}

form , .add{
  width: 30%;
  margin: 0 auto;
}
.logo img {
  height: 300px;
}
</style>
