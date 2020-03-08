<template>
  <tab-bar>
    <tab-bar-item  path="/home" >
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
      <div slot="item-text" >首页</div>
    </tab-bar-item>

    <tab-bar-item path="/category" >
      <img  slot="item-icon" src="../../assets/img/tabbar/category.png" alt="">
<!--      <img  slot="item-icon" src="~assets/img/tabbar/category.png" alt="">-->
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>

    <tab-bar-item path="/cart" >
      <img  slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>

    <tab-bar-item path="/profile"  >
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active .png" alt="">
      <div slot="item-text"> 我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

  // import  tabBar from "components/tabbar/tabBar"
  import tabBar from "../common/tabbar/tabBar";

  import tabBarItem from "../common/tabbar/tabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      tabBar ,
      tabBarItem

    }
  }
</script>

<style scoped>

</style>