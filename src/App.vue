<template>
  <div class="app">




<el-container>
  <el-aside width="135px">
    <div class="aside">1111</div>
  </el-aside>
  <el-container>
    <el-header height='60px'>
      <div class="header">222</div>
    </el-header>
    <el-main>
      <div class="main">11111111111</div>
    </el-main>
  </el-container>
</el-container>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style lang='scss'>
*{margin:0;padding:0}
html,body{
  background-color: red;
  width: 100%;
  height: 100%;
}
.el-container{
  height: 100%;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.aside{
  background-color: #444444;
  width: 100%;
  height: 100%;
}
.header{
  background-color:red ;
  width: 100%;
  height: 100%;
}
.main{
  background-color: green;
  width: 100%;
  height: 100%;
}
</style>
