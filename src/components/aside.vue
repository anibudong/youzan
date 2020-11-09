<template>
    <div class="aside1">
        <div class="aside">
      
        <div class="logo">
            <i class="el-icon-s-promotion"></i>
        </div>
            <div class="navs">
                <div v-for='(itme,idx) in navs' :key="idx">   
                <i :class='itme.icon'></i>
                <router-link tag='span' :to="itme.path" v-text="itme.text"></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
//   name: 'App',
 data:function(){
       return{
         navs:[
           {
             path:'/one', text:'111111',icon:'el-icon-camera'
           },
           {
             path:'/two', text:'22222',icon:'el-icon-s-order'
           },
           {
             path:'/three', text:'33333',icon:'el-icon-s-home'
           },
           {
             path:'/four', text:'44444',icon:'el-icon-camera'
           },
           {
             path:'/five', text:'55555',icon:'el-icon-s-order'
           },
           {
             path:'/six', text:'66666',icon:'el-icon-s-home'
           },
            {
             path:'/seven', text:'77777',icon:'el-icon-camera'
           },
           {
             path:'/eight', text:'888888',icon:'el-icon-s-order'
           },
           {
             path:'/nine', text:'999999',icon:'el-icon-s-home'
           },
           {
             path:'/ten', text:'00000000',icon:'el-icon-camera'
           }
         ]
       }
  }
}
 
</script>
<style lang='scss' scoped>
.aside{
  background-color: #444444;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 10px;;
  .logo{
  width: 40px;
  height: 40px;
  background-color: gold;
  border-radius:50%;
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
  .el-icon-s-promotion{
    color: red;
  }
}
}
.aside1{
  height: 100%;
}
.navs{
  &>div{
    line-height: 60px;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>