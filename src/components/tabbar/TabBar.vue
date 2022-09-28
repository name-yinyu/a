<template>
  <van-tabbar
    v-model="active"
    active-color="#000"
    inactive-color="#ccc"
    class="footer-nav"
    @change="onChangeFn"
    route
  >
    <van-tabbar-item icon="wap-home-o" to="/home"> 首页 </van-tabbar-item>
    <van-tabbar-item icon="cluster-o" to="/fenxiao">分销</van-tabbar-item>
    <van-tabbar-item icon="shopping-cart-o" to="/carts">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" to="/me">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
let active:any = ref(0);
let router=useRouter();
function onChangeFn(index?:number | string):void{
  active.value=index;
  // switch (index) {
  //   case 0: router.push({path:"/"})
  //   break;
  //   case 1: router.push({path:"/FenXiao"})
  //   break;
  //   case 2: router.push({path:"/carts"})
  //   break;
  //   case 3: router.push({path:"/me"})
  //   break;
  // }
}
</script>
<style>
</style>