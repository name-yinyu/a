import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import layout from "@/views/Layout/Layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: layout,
    redirect:{name:"home"},
    children:[
      {
        path:"/home",
        name:"home",
        component:HomeView
      }
    ]
  },
  {
    path:"/me",
    name:"me",
    component:layout,
    redirect:{name:"me"},
    children:[
      {
        path:"/me",
        name:"me",
        component:()=>import("@/views/MeView.vue")
      }
    ]
  },
  {
    path:"/fenxiao",
    name:"fenxiao",
    component:layout,
    redirect:{name:"fen"},
    children:[
      {
        path:"/fenxiao",
        name:"fenxiao",
        component:()=>import("@/views/FenXiao.vue")
      }
    ]
  },
  {
    path:"/carts",
    name:"carts",
    component:layout,
    redirect:{name:"shop"},
    children:[
      {
        path:"/carts",
        name:"carts",
        component:()=>import("@/views/CartsView.vue")
      }
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
