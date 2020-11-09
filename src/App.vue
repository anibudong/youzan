<template>
  <div class="app">
    <el-container>
        <el-aside width="135px">
          <Aside></Aside>
        </el-aside>
      <el-container >
      
        <el-header height='60px' class="container">
          <Header></Header>
        </el-header>

        <el-main>
          <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from '@/components/aside.vue';
import Header from '@/components/header.vue';
import Main from '@/components/main.vue';
export default {
  name: 'App',
  components: {
   Aside,
   Header,
   Main
  }
}
</script>

<style lang='scss'>
*{margin:0;padding:0}
html,body{
  width: 100%;
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-header{
  padding: 0 0!important;
}
.el-main{
  padding: 0!important;
}
.app {
  text-align: center;
  color: #2c3e50;
  height: 100%;
}


// .main{
//   width: 100%;
//   height: 100%;
// }
// .navs{
//   &>div{
//     line-height: 40px;
//     color: #ffffff;
//     cursor: pointer;
//   }
// }
// .aside{
//   background-color: #444444;
//   width: 100%;
//   height: 100%;
//   box-sizing: border-box;
//   padding-top: 10px;;
//   .logo{
//   width: 40px;
//   height: 40px;
//   background-color: gold;
//   border-radius:50%;
//   text-align: center;
//   line-height: 40px;
//   margin: 0 auto;
//   .el-icon-s-promotion{
//     color: red;
//   }
// }
// }
// .aside1{
//   height: 100%;
// }
</style>
