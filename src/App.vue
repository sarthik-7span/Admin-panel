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

.action-btn button ,.add button {
  background: orange;
  color: white;
  border: 2px solid rgb(82, 82, 82);
  padding: 5px 20px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
}

.logo img {
  height: 300px;
}
</style>
