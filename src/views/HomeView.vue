<template>
  <div class="home">
    <div class="nav">
      <div class="pic">
        <img src="../../public/img/images/img_02.png" alt="" />
      </div>
    </div>
    <div class="welfare">
      <van-grid>
        <van-grid-item icon="todo-list-o" text="限时抢购" />
        <van-grid-item icon="contact" text="登录福利" />
        <van-grid-item icon="orders-o" text="又会券包" />
        <van-grid-item icon="new-o" text="推荐新品" />
      </van-grid>
    </div>
    <!-- <div>{{mount}}</div> -->
    <div class="footer">

    </div>
  </div>
</template>

<script lang="ts" setup>
import {home_http} from "@/api/httpHome";
import { ref } from "vue";
let mount = ref(0)
home_http().then((res:any)=>{
  console.log(res);
})
// import { defineComponent } from "vue";
// export default defineComponent({
//   name: "HomeView",
//   components: {
//     tabBar
//   },
//   data(){
//     return{
//       mount:0
//     }
//   }
// });

</script>
<style lang="scss" scoped>
.home {
  .nav {
    width: 375px;
    background-color: red;

    .pic {
      width: 375px;
      height: 296px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .footer {
    width: 375px;
    height: 120px;

    .footer-nav {
      width: 100%;
    }
  }
}
</style>